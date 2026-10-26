const { test, expect } = require("@playwright/test");
test.beforeEach(async ({ page }) => {
  await page.route(
    "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit",
    (route) =>
      route.fulfill({
        contentType: "application/javascript",
        body: 'window.turnstile={render:(el,options)=>{window.testVerification=options;options.callback("mock-token");return "mock-widget"},reset:()=>{window.testVerification.callback("mock-token")}};',
      }),
  );
});
async function fill(page) {
  await page.goto(
    `${process.env.CONTACT_TEST_URL || "http://localhost:3101"}/contact`,
  );
  await page.getByLabel("Name", { exact: true }).fill("Test Person");
  await page.getByLabel("Work email").fill("person@example.com");
  await page
    .getByLabel("What are you working through?")
    .fill("A local mock test about business systems.");
}
test("contact waiting, sending and success states", async ({ page }) => {
  let finish;
  await page.route("**/api/contact", async (route) => {
    await new Promise((r) => {
      finish = r;
    });
    await route.fulfill({ json: { success: true } });
  });
  await fill(page);
  const send = page.getByRole("button", { name: /Send your message/ });
  await expect(send).toBeEnabled();
  await send.click();
  await expect(page.getByRole("button", { name: /Sending/ })).toBeDisabled();
  finish();
  await expect(
    page.getByRole("heading", { name: "Thanks for getting in touch." }),
  ).toBeVisible();
  await page.getByRole("button", { name: /Write another/ }).click();
  await expect(page.getByLabel("Name", { exact: true })).toHaveValue("");
});
test("contact error retains message and permits recovery", async ({ page }) => {
  await page.route("**/api/contact", (route) =>
    route.fulfill({
      status: 503,
      json: { error: "Please try again or email Jackson directly." },
    }),
  );
  await fill(page);
  await page.getByRole("button", { name: /Send your message/ }).click();
  await expect(page.locator("form").getByRole("alert")).toContainText(
    "Please try again",
  );
  await expect(page.getByLabel("What are you working through?")).toHaveValue(
    "A local mock test about business systems.",
  );
  await expect(
    page.getByRole("button", { name: /Send your message/ }),
  ).toBeEnabled();
});
