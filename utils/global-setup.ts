import { chromium, expect, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://practice.sdetunicorns.com/my-account/');
    await page.context().storageState({ path: 'notLoggedInState.json' });

    // login
    await page.locator('#username').fill('practiceuser1');
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('#password').press('Enter');

    // verificar login bem-sucedido
    await expect(
      page.locator('.woocommerce-MyAccount-navigation-link--customer-logout a'),
    ).toBeVisible();

    // salvar estado em storageState.json
    await page.context().storageState({ path: 'loggedInState.json' });
    await browser.close();
  } catch (error) {
    console.error('Erro no setup global:', error);
    throw error;
  }
}

export default globalSetup;
