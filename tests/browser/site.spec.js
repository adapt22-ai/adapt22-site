const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
const paths = [
  "/",
  "/services",
  "/about",
  "/approach",
  "/contact",
  "/privacy-policy",
  "/terms-of-service",
  "/accessibility",
  "/brand-review",
  "/services/salesforce-consulting",
  "/services/custom-software",
  "/services/technology-leadership",
  "/services/applied-ai",
  "/services/enterprise-modernization",
  "/services/integrations-data",
  "/services/growth-transaction-readiness",
];
for (const path of paths)
  test(`${path} renders without overflow, missing images or accessibility violations`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    await page.evaluate(async () => {
      for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
        scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
    });
    await page.locator("footer").scrollIntoViewIfNeeded();
    await page.waitForFunction(() =>
      [...document.images].every((i) => i.complete),
    );
    expect(
      await page.evaluate(() =>
        [...document.images].filter((i) => !i.naturalWidth).map((i) => i.src),
      ),
    ).toEqual([]);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false);
    expect(errors).toEqual([]);
    const a11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(a11y.violations).toEqual([]);
  });
test("menu, keyboard escape, and navigation", async ({ page }, info) => {
  await page.goto("/");
  if (page.viewportSize().width <= 700) {
    const menu = page.locator(".menu-toggle");
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(menu).toBeFocused();
    await menu.click();
  }
  await page
    .getByRole("navigation", { name: "Main navigation" })
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services$/);
});
test("FAQ expands with keyboard", async ({ page }) => {
  await page.goto("/approach");
  const q = page.locator("summary").first();
  await q.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("details").first()).toHaveAttribute("open", "");
});
test("contact has usable external alternatives and honest disabled form", async ({
  page,
}) => {
  await page.goto("/contact");
  await expect(page.getByRole("link", { name: /Find a time/ })).toHaveAttribute(
    "href",
    "https://calendly.com/jackson-adapt22",
  );
  await expect(
    page.getByRole("button", { name: /Send your message/ }),
  ).toBeDisabled();
  await expect(
    page.getByText("The message form is temporarily unavailable.", {
      exact: false,
    }),
  ).toBeVisible();
});
test("legacy redirects, noindex, and 404", async ({ page, request }) => {
  await page.goto("/what-we-do");
  await expect(page).toHaveURL(/\/services$/);
  const r = await request.get("/");
  expect(r.headers()["x-robots-tag"]).toContain("noindex");
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "Disallow: /",
  );
  const missing = await page.goto("/not-a-real-page");
  expect(missing.status()).toBe(404);
  await expect(
    page.getByRole("heading", { name: "This page isn’t here." }),
  ).toBeVisible();
});
test("reduced motion disables decorative animation", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".hero-image")
      .evaluate((e) => getComputedStyle(e).animationName),
  ).toBe("none");
});

test("updated identity, public email, legal links and Salesforce are visible", async ({
  page,
}) => {
  await page.goto("/");
  const footer = page.locator("footer");
  await expect(
    footer.getByText("info@adapt22.ai", { exact: false }),
  ).toBeVisible();
  await expect(footer.getByText(/Adapt 22 LLC/)).toBeVisible();
  await expect(
    footer.getByRole("link", { name: "Privacy", exact: true }),
  ).toHaveAttribute("href", "/privacy-policy");
  await expect(
    footer.getByRole("link", { name: "Terms", exact: true }),
  ).toHaveAttribute("href", "/terms-of-service");
  await expect(
    footer.getByRole("link", { name: "Accessibility", exact: true }),
  ).toHaveAttribute("href", "/accessibility");
  await expect(
    page.getByRole("link", { name: /Salesforce consulting/ }),
  ).toBeVisible();
  expect(await page.locator("body").innerText()).not.toContain(
    "jackson@adapt22.ai",
  );
});
test("sticky header leaves anchor content visible", async ({ page }) => {
  await page.goto("/approach#questions");
  await page.waitForTimeout(300);
  const header = await page.locator(".header").boundingBox();
  const questions = await page.locator("#questions").boundingBox();
  if (page.viewportSize().height > 500)
    expect(questions.y).toBeGreaterThanOrEqual(header.height);
  await page.locator("summary").first().focus();
  await expect(page.locator("summary").first()).toBeFocused();
});
test("portrait preserves source aspect ratio and all arms", async ({
  page,
}) => {
  await page.goto("/about");
  const image = page.locator(".portrait img");
  await image.scrollIntoViewIfNeeded();
  await image.evaluate((img) => img.decode());
  const result = await image.evaluate((img) => ({
    ratio: img.clientWidth / img.clientHeight,
    natural: img.naturalWidth / img.naturalHeight,
    fit: getComputedStyle(img).objectFit,
  }));
  expect(result.fit).toBe("contain");
  expect(Math.abs(result.ratio - result.natural)).toBeLessThan(0.02);
});
