import { test, expect } from '@playwright/test';

test.describe("fail_productcatalog", () => {
  test("tests fail_productcatalog", async ({ page }) => {
    await page.setViewportSize({
          width: 1158,
          height: 945
        })
    await page.goto("http://{{DEMO_FE_ADDRESS}}:8080/feature/featureflags");
    await page.locator('tr', { hasText: "productCatalogFailure" })
          .locator('text=Edit')
          .click();
    await page.locator("#feature_flag_enabled").click()
    await page.locator("#feature_flag_enabled").fill('0.2');
    await page.locator("button").click()
  });
});