import { expect, test } from '../utils/e2e.controller';

test.describe('Account logged in validations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/my-account/');
  });
  test('Access orders', async ({ page }) => {
    await page
      .locator('.woocommerce-MyAccount-navigation-link--orders a')
      .click();
    await expect(page).toHaveURL(/.*orders/);
  });
  test('Access Downloads', async ({ page }) => {
    await page
      .locator('.woocommerce-MyAccount-navigation-link--downloads a')
      .click();
    await expect(page).toHaveURL(/.*downloads/);
  });
  test.describe('Account logged out validations', () => {
    test.use({ storageState: 'notLoggedInState.json' });
    test.beforeEach(async ({ page }) => {
      await page.goto('/my-account/');
    });
    test('Verify login and register is visible', async ({ page }) => {
      await expect(page.locator('#username')).toBeVisible();
      await expect(page.locator('#password')).toBeVisible();
    });
  });
});
