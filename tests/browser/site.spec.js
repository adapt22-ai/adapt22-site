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

test("private contact paths, legal name and focused service positioning", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("footer").getByText(/adapt22 LLC/)).toBeVisible();
  expect(await page.content()).not.toMatch(/[a-z0-9._%+-]+@adapt22\.ai/i);
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0);
  await expect(page.locator(".service-list > a")).toHaveCount(3);
  await expect(page.locator(".service-list > a").first()).toContainText(
    "Embedded technology leadership",
  );
  await page.goto("/services");
  await expect(page.locator("[data-service]").first()).toHaveAttribute(
    "data-service",
    "technology-leadership",
  );
  await expect(page.locator("[data-service]").nth(1)).toHaveAttribute(
    "data-service",
    "applied-ai",
  );
  await expect(page.locator("[data-service]").last()).toHaveAttribute(
    "data-service",
    "custom-software",
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
  const image = page.locator(".portrait-source");
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

test("all navigation destinations open at the top from a scrolled page", async ({
  page,
}) => {
  await page.goto("/");
  for (const [label, url] of [
    ["Services", "/services"],
    ["Our approach", "/approach"],
    ["About", "/about"],
    ["Let’s talk", "/contact"],
  ]) {
    await page.evaluate(() =>
      scrollTo(0, document.documentElement.scrollHeight),
    );
    if (page.viewportSize().height <= 500)
      await page.evaluate(() => scrollTo(0, 0));
    if (page.viewportSize().width <= 700)
      await page.locator(".menu-toggle").click();
    await page
      .locator("header nav")
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(url + "$"));
    await page.waitForTimeout(100);
    expect(await page.evaluate(() => scrollY)).toBe(0);
  }
  await page.evaluate(() => scrollTo(0, 600));
  if (page.viewportSize().height <= 500)
    await page.evaluate(() => scrollTo(0, 0));
  await page.locator("header .brand").click();
  await expect(page).toHaveURL(/\/$/);
  expect(await page.evaluate(() => scrollY)).toBe(0);
});
test("full width banners, non-repeating imagery, and no public addresses", async ({
  page,
}) => {
  const sources = [];
  for (const path of ["/services", "/approach", "/about", "/contact"]) {
    await page.goto(path);
    await expect(page.locator(".page-banner")).toHaveCount(1);
    const box = await page.locator(".page-banner .intro-image").boundingBox();
    expect(Math.abs(box.width - page.viewportSize().width)).toBeLessThan(2);
    sources.push(await page.locator(".page-banner img").getAttribute("src"));
    expect(await page.content()).not.toMatch(/[a-z0-9._%+-]+@adapt22\.ai/i);
  }
  expect(new Set(sources).size).toBe(4);
  await page.goto("/brand-review");
  await expect(page.locator("[data-concept]")).toHaveCount(13);
});

test("owner authority, four bullets, equal overlay banners, and focused logo review", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".hero-bottom")).toContainText(
    "You set the business priorities",
  );
  await expect(page.locator(".nature-break")).toContainText(
    /You run the business/,
  );
  await expect(page.locator(".footer-top p span")).toHaveText([
    "Technology leadership.",
    "Part of your team.",
    "Accountable for the work.",
  ]);
  await page.goto("/services/enterprise-modernization");
  await expect(page.locator("main")).toContainText(
    "Hardware, device management",
  );
  await expect(page.locator("main")).toContainText(
    "IT separations, carve-outs",
  );
  const sizes = [];
  for (const path of ["/services", "/approach", "/about", "/contact"]) {
    await page.goto(path);
    const banner = page.locator(".page-banner");
    sizes.push(
      await banner.evaluate((e) => ({
        width: e.clientWidth,
        height: e.clientHeight,
      })),
    );
    await expect(banner.locator("img")).toHaveCSS("object-fit", "cover");
    const text = await banner.locator(".intro-text").boundingBox();
    const box = await banner.boundingBox();
    expect(text.y).toBeGreaterThanOrEqual(box.y);
    expect(text.y + text.height).toBeLessThanOrEqual(box.y + box.height);
  }
  expect(
    sizes.every(
      (s) => s.width === sizes[0].width && s.height === sizes[0].height,
    ),
  ).toBe(true);
  await page.goto("/services");
  for (const card of await page.locator("[data-service]").all())
    await expect(card.locator("li")).toHaveCount(4);
  await page.goto("/brand-review");
  await expect(page.locator(".logo-overview a")).toHaveCount(13);
  await page.locator('.logo-overview a[href="#concept-C2"]').click();
  await expect(page).toHaveURL(/#concept-C2$/);
  await expect(page.locator('[data-concept="C2"]')).toBeInViewport();
  for (const id of ["N11-C", "C1", "C6", "P1", "P6"])
    await expect(page.locator(`[data-concept="${id}"]`)).toHaveCount(1);
  for (const id of [
    "G3",
    "F2",
    "F3",
    "E1",
    "E2",
    "E3",
    "B1",
    "B3",
    "N1",
    "N3",
    "N5",
    "N6",
    "N7",
    "N8",
    "N9",
    "N10",
    "N12",
  ])
    await expect(page.locator(`[data-concept="${id}"]`)).toHaveCount(0);
});
