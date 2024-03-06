import { test, expect } from '@playwright/test';
import { setTimeout } from "timers/promises";

test('can purchase an item', async ({ page }) => {
  await page.goto('https://www.observeshop.com/');
  await page.getByRole('button', { name: 'Go Shopping' }).click();
  await page.getByText('National Park Foundation Explorascope').click();
  await page.getByRole('button', { name: 'cart Add To Cart' }).click();
  await page.locator('#email').click({
    clickCount: 3
  });
  await page.locator('#email').fill('max@observeinc.com');
  await page.getByRole('button', { name: 'Place Order' }).click();
  await setTimeout(10000);
});