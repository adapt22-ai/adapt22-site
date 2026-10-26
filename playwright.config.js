const { defineConfig } = require("@playwright/test");
module.exports = defineConfig({
  testDir: "tests/browser",
  fullyParallel: true,
  workers: 2,
  use: {
    baseURL: process.env.BASE_URL || "http://localhost:3100",
    browserName: "chromium",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
  },
  reporter: [["list"]],
  outputDir: "test-results",
  projects: [
    {
      name: "safari-phone",
      use: {
        browserName: "webkit",
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "safari-tablet",
      use: {
        browserName: "webkit",
        viewport: { width: 768, height: 1024 },
        hasTouch: true,
      },
    },
    {
      name: "tablet",
      use: { viewport: { width: 768, height: 1024 }, hasTouch: true },
    },
    {
      name: "tablet-landscape",
      use: { viewport: { width: 1024, height: 768 }, hasTouch: true },
    },
    {
      name: "small-phone",
      use: {
        viewport: { width: 320, height: 740 },
        isMobile: true,
        hasTouch: true,
      },
    },
    {
      name: "phone-landscape",
      use: {
        viewport: { width: 844, height: 390 },
        isMobile: true,
        hasTouch: true,
      },
    },
    { name: "desktop", use: { viewport: { width: 1440, height: 1000 } } },
    {
      name: "mobile",
      use: {
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
