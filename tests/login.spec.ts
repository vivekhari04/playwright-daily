import { test, expect } from '@playwright/test';

test('Verify login with standard user', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('username').fill('standard_user');
  await page.getByPlaceholder('password').fill('secret_sauce');
  await page.getByRole('button',{name:'Login'}).click();
  await expect(page.getByText('Products', { exact: true })).toBeVisible();
});