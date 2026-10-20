import { test, expect, errors } from '@playwright/test';

test ( 'wrong password', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_2sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click();}
)
test ( 'wrong username', async ({page}) =>{
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standardser');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="error"]').click();}
)
test('login works', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.getByText('Products')).toBeVisible();
});