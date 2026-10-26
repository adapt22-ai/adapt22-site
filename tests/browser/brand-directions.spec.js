const { test, expect } = require("@playwright/test");
const AxeBuilder = require("@axe-core/playwright").default;
test("private direction review updates every sample and stays accessible", async ({
  page,
  request,
}) => {
  await page.goto("/brand-directions");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Pick the direction.",
  );
  await expect(
    page.getByRole("radio", { name: "A Ink & bronze", exact: true }),
  ).toBeChecked();
  for (const [id, name] of [
    ["A", "Ink & bronze"],
    ["B", "Paper & bronze"],
    ["C", "Slate & landscape"],
  ]) {
    await page
      .getByRole("radio", { name: `${id} ${name}`, exact: true })
      .check();
    const board = page.locator("[data-direction]");
    await expect(board).toHaveAttribute("data-direction", id);
    await page
      .getByRole("radio", {
        name: "3 Your priorities. Our team. Technology handled.",
        exact: true,
      })
      .check();
    await expect(board.locator("[data-banner-preview]")).toContainText(
      "Technology handled.",
    );
    await expect(board.locator("[data-background-preview]")).toContainText(
      "Technology handled.",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
  await page.getByLabel("Show camera guide", { exact: false }).uncheck();
  await expect(page.getByText("Your camera", { exact: true })).toHaveCount(0);
  await page.evaluate(async () => {
    for (let y = 0; y < document.documentElement.scrollHeight; y += 600) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 20));
    }
  });
  await page.waitForFunction(() =>
    [...document.images].every((i) => i.complete),
  );
  expect(
    await page.evaluate(() =>
      [...document.images].filter((i) => !i.naturalWidth).map((i) => i.src),
    ),
  ).toEqual([]);
  expect(await page.content()).not.toMatch(/[a-z0-9._%+-]+@adapt22\.ai/i);
  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).not.toContain("brand-directions");
});
