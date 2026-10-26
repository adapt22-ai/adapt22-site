import test from "node:test";
import assert from "node:assert/strict";
import { handleContact } from "../src/lib/contact.mjs";
const env = {
  RESEND_API_KEY: "test",
  TURNSTILE_SECRET_KEY: "test",
  UPSTASH_REDIS_REST_URL: "https://redis.example",
  UPSTASH_REDIS_REST_TOKEN: "test",
};
const data = {
  name: "Test Person",
  email: "person@example.com",
  company: "Example",
  message: "A test inquiry about connecting business systems.",
  token: "test-token",
  submissionId: "12345678-1234-1234-1234-123456789012",
};
function request(body = data, headers = {}) {
  return new Request("https://preview.example/api/contact", {
    method: "POST",
    headers: {
      origin: "https://preview.example",
      "content-type": "application/json",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}
function deps(overrides = {}) {
  return {
    env,
    fetcher: async (url) =>
      Response.json(
        url.includes("siteverify")
          ? { success: true, action: "contact", hostname: "preview.example" }
          : { result: 1 },
      ),
    send: async () => ({ data: { id: "mock-email" } }),
    ...overrides,
  };
}
test("rejects cross-site requests without contacting providers", async () => {
  const r = await handleContact(
    request(data, { origin: "https://attacker.example" }),
    deps({
      fetcher: () => {
        throw Error("must not call");
      },
    }),
  );
  assert.equal(r.status, 403);
});
test("rejects malformed JSON and unexpected field types", async () => {
  for (const body of [
    "{",
    null,
    [],
    { ...data, email: [] },
    { ...data, name: "Name\nInjection" },
    { ...data, message: "short" },
  ])
    assert.equal((await handleContact(request(body), deps())).status, 400);
});
test("bounds streamed bodies even when content length is omitted", async () =>
  assert.equal(
    (await handleContact(request("x".repeat(20001)), deps())).status,
    413,
  ));
test("rejects honeypot and missing verification", async () => {
  for (const body of [
    { ...data, website: "bot" },
    { ...data, token: "" },
  ])
    assert.equal((await handleContact(request(body), deps())).status, 400);
});
test("fails closed when credentials are missing", async () =>
  assert.equal(
    (await handleContact(request(), deps({ env: {} }))).status,
    503,
  ));
test("rejects failed, wrong-host, and wrong-action verification", async () => {
  for (const result of [
    { success: false },
    { success: true, hostname: "elsewhere.example", action: "contact" },
    { success: true, hostname: "preview.example", action: "login" },
  ])
    assert.equal(
      (
        await handleContact(
          request(),
          deps({ fetcher: async () => Response.json(result) }),
        )
      ).status,
      400,
    );
});
test("rate limit is enforced before sending", async () => {
  let sends = 0;
  const r = await handleContact(
    request(),
    deps({
      fetcher: async (url) =>
        Response.json(
          url.includes("siteverify")
            ? { success: true, hostname: "preview.example", action: "contact" }
            : { result: 6 },
        ),
      send: async () => {
        sends++;
      },
    }),
  );
  assert.equal(r.status, 429);
  assert.equal(sends, 0);
});
test("provider error and missing ID never report success or disclose provider details", async () => {
  for (const sent of [
    { error: { message: "secret-provider-detail" } },
    { data: {} },
  ]) {
    const r = await handleContact(request(), deps({ send: async () => sent }));
    assert.equal(r.status, 502);
    assert.doesNotMatch(await r.text(), /secret-provider-detail/);
  }
});
test("provider failures are safe and not logged", async () => {
  const r = await handleContact(
    request(),
    deps({
      fetcher: async () => {
        throw Error("secret");
      },
    }),
  );
  assert.equal(r.status, 503);
  assert.doesNotMatch(await r.text(), /secret/);
});
test("successful send fixes recipient, uses reply-to and idempotency, returns no provider IDs", async () => {
  let payload, options;
  const r = await handleContact(
    request(),
    deps({
      send: async (p, o) => {
        payload = p;
        options = o;
        return { data: { id: "mock-email" } };
      },
    }),
  );
  assert.equal(r.status, 200);
  assert.equal(payload.to, "info@adapt22.ai");
  assert.equal(payload.replyTo, data.email);
  assert.equal(options.idempotencyKey, "contact-" + data.submissionId);
  assert.deepEqual(await r.json(), { success: true });
});

test("Vercel Marketplace credentials use the shared Redis write endpoint", async () => {
  let rateRequest;
  const result = await handleContact(
    request(),
    deps({
      env: {
        RESEND_API_KEY: "test",
        TURNSTILE_SECRET_KEY: "test",
        KV_REST_API_URL: "https://marketplace.example",
        KV_REST_API_TOKEN: "write-token",
      },
      fetcher: async (url, options) => {
        if (url.includes("siteverify"))
          return Response.json({
            success: true,
            action: "contact",
            hostname: "preview.example",
          });
        rateRequest = { url, options };
        return Response.json({ result: 1 });
      },
    }),
  );
  assert.equal(result.status, 200);
  assert.equal(rateRequest.url, "https://marketplace.example");
  assert.equal(rateRequest.options.headers.Authorization, "Bearer write-token");
  assert.match(rateRequest.options.body, /EXPIRE/);
  assert.match(rateRequest.options.body, /600/);
});
