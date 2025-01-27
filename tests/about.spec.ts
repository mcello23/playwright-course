import { test } from '../utils/e2e.page';

test.describe('About', () => {
  test("Goes to 'About' page and verifies title", async ({ aboutPage }) => {
    await aboutPage.navigateToAboutPage();
    await aboutPage.verifyAboutTitle();
  });
});
