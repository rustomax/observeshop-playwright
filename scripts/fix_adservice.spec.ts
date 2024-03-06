import { test, expect } from '@playwright/test';

test.describe("fix_adservice", () => {
  test("tests fix_adservice", async ({ page }) => {
    await page.setViewportSize({
          width: 1158,
          height: 945
        })
    await page.goto("http://{{DEMO_FE_ADDRESS}}:8080/feature/featureflags");
    await page.locator('tr', { hasText: "adServiceFailure" })
          .locator('text=Edit')
          .click();
    await page.locator("#feature_flag_enabled").click()
    await page.locator("#feature_flag_enabled").fill('0.0');
    await page.locator("button").click()
  });
});