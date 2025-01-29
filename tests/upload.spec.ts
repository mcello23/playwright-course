import { test } from '../utils/e2e.controller';

test.describe('Cart page test', () => {
  test.beforeEach(async ({ cartPage }) => {
    await cartPage.navigateToUploadPage();
  });

  test('Uploads a small logo image and validates it', async ({ cartPage }) => {
    await cartPage.uploadLogoImage();
    await cartPage.verifySuccessLogoUploadMessage();
  });

  test('Removes a hidden input field, uploads a small logo image and validates it', async ({
    cartPage,
  }) => {
    await cartPage.removeHiddenInputField();
    await cartPage.uploadLogoImage();
    await cartPage.verifySuccessLogoUploadMessage();
  });

  test('Uploads a large PDF file with a hardcoded wait (wrong way)', async ({
    page,
    cartPage,
  }) => {
    await cartPage.uploadLargePDF();
    await page.waitForTimeout(2000);
    await cartPage.verifySuccessPDFUploadMessage();
  });

  test('Upload a large file PDF file with conditional wait of state and timeout', async ({
    cartPage,
  }) => {
    await cartPage.uploadLargePDF();
    await cartPage.verfiySuccessMessageWithConditionalWait();
    await cartPage.verifySuccessPDFUploadMessage();
  });

  test('Upload a large file with wait (assertion wait)', async ({
    cartPage,
  }) => {
    await cartPage.uploadLargePDF();
    await cartPage.verfiySuccessMessageWithAssertionWait();
    await cartPage.verifySuccessPDFUploadMessage();
  });
});
