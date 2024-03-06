import { test, expect } from '@playwright/test';

test.describe("set locust", () => {
  test("tests set locust", async ({ page }) => {
    await page.setViewportSize({
          width: 1093,
          height: 761
        })
    await page.goto("http://{{DEMO_LOCUST_ADDRESS}}:8089/");
    await page.locator("a.stop-button").click()
    await page.locator("#new-test").click()
    await page.locator("#user_count").dblclick();
    await page.locator("#user_count").type("40");
    await page.locator("#host").dblclick();
    await page.locator("#host").type("https://www.observeshop.com");
    await page.locator("#start button").click()
  });
});