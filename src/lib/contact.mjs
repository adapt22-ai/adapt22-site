import { createHash } from "node:crypto";
const MAX_BYTES = 20000;
const response = (status, error) =>
  Response.json(
    { error },
    { status, headers: { "Cache-Control": "no-store" } },
  );
export async function handleContact(
  req,
  { env = process.env, fetcher = fetch, send } = {},
) {
  // Same-origin requests only. No permissive CORS; server-side origins come from the request URL.
  const origin = req.headers.get("origin");
  if (!origin || origin !== new URL(req.url).origin)
    return response(403, "Please use the contact form on this website.");
  if (!req.headers.get("content-type")?.startsWith("application/json"))
    return response(415, "Please submit the contact form.");
  if (Number(req.headers.get("content-length") || 0) > MAX_BYTES)
    return response(413, "Your message is too long.");
  let body;
  try {
    const reader = req.body?.getReader();
    if (!reader) return response(400, "Your message could not be read.");
    const chunks = [];
    let length = 0;
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.byteLength;
      if (length > MAX_BYTES) {
        await reader.cancel();
        return response(413, "Your message is too long.");
      }
      chunks.push(value);
    }
    body = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return response(400, "Your message could not be read.");
  }
  if (!body || Array.isArray(body) || typeof body !== "object")
    return response(400, "Please check the form fields.");
  if (body.website) return response(400, "Please check the form fields.");
  const bounds = {
    name: [2, 100],
    email: [3, 254],
    message: [20, 5000],
    company: [0, 150],
  };
  const clean = {};
  for (const [key, [min, max]] of Object.entries(bounds)) {
    const value = body[key] ?? "";
    if (typeof value !== "string")
      return response(400, "Please check the form fields.");
    clean[key] = value.trim();
    if (clean[key].length < min || clean[key].length > max)
      return response(400, "Please check the form fields and message length.");
  }
  if (
    !/^[^\s@\r\n]+@[^\s@\r\n]+\.[^\s@\r\n]+$/.test(clean.email) ||
    /[\r\n]/.test(clean.name)
  )
    return response(400, "Please check your name and email.");
  if (
    typeof body.token !== "string" ||
    body.token.length > 2048 ||
    !body.token ||
    typeof body.submissionId !== "string" ||
    !/^[0-9a-f-]{36}$/.test(body.submissionId)
  )
    return response(400, "Please complete the verification and try again.");
  if (
    !env.RESEND_API_KEY ||
    !env.TURNSTILE_SECRET_KEY ||
    !env.UPSTASH_REDIS_REST_URL ||
    !env.UPSTASH_REDIS_REST_TOKEN
  )
    return response(
      503,
      "The message form is temporarily unavailable. Please email info@adapt22.ai.",
    );
  try {
    const verified = await fetcher(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: new URLSearchParams({
          secret: env.TURNSTILE_SECRET_KEY,
          response: body.token,
        }),
        signal: AbortSignal.timeout(8000),
      },
    );
    if (!verified.ok)
      return response(
        503,
        "Verification is unavailable. Please try again or email Jackson.",
      );
    const result = await verified.json();
    if (
      !result.success ||
      result.action !== "contact" ||
      result.hostname !== new URL(req.url).hostname
    )
      return response(400, "Verification expired. Please try again.");
    // Atomic, shared rate limit. Do not depend on serverless process memory or retain raw IPs.
    const ip =
      env.VERCEL === "1"
        ? req.headers.get("x-vercel-forwarded-for")?.split(",")[0]?.trim()
        : "local";
    if (!ip)
      return response(
        503,
        "The message form is temporarily unavailable. Please email info@adapt22.ai.",
      );
    const hash = createHash("sha256")
      .update(ip + env.TURNSTILE_SECRET_KEY)
      .digest("hex");
    const script =
      "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n";
    const rate = await fetcher(env.UPSTASH_REDIS_REST_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.UPSTASH_REDIS_REST_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(["EVAL", script, "1", `contact:${hash}`]),
      signal: AbortSignal.timeout(8000),
    });
    if (!rate.ok)
      return response(
        503,
        "The message form is temporarily unavailable. Please email info@adapt22.ai.",
      );
    const rateData = await rate.json();
    if (rateData.error || !Number.isInteger(rateData.result))
      return response(
        503,
        "The message form is temporarily unavailable. Please email info@adapt22.ai.",
      );
    if (rateData.result > 5)
      return response(
        429,
        "Too many messages. Please wait ten minutes before trying again.",
      );
    const sent = await send(
      {
        from: "adapt22 Website <info@adapt22.ai>",
        to: "info@adapt22.ai",
        replyTo: clean.email,
        subject: "Website inquiry | adapt22",
        text: `Name: ${clean.name}\nEmail: ${clean.email}\nCompany: ${clean.company || "Not supplied"}\n\n${clean.message}`,
      },
      { idempotencyKey: `contact-${body.submissionId}` },
    );
    if (sent.error || !sent.data?.id)
      return response(
        502,
        "Your message could not be sent. Please try again or email info@adapt22.ai.",
      );
    return Response.json(
      { success: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return response(
      503,
      "The message form is temporarily unavailable. Please try again or email info@adapt22.ai.",
    );
  }
}
