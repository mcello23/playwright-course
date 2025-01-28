import { test } from '../utils/e2e.controller';

test.describe('Homepage tests', () => {
  test.beforeEach(async ({ homePage }) => {
    await homePage.navigateToHomePage();
  });

  test('Verifies the Homepage title', async ({ homePage }) => {
    await homePage.verifyTitle();
  });

  test("Clicks on 'Get Started' button using a CSS Selector", async ({
    homePage,
  }) => {
    await homePage.clickGetStartedButton();
    await homePage.verifyGetStartedButton();
  });

  test('Verifies heading text is visible using text selector', async ({
    homePage,
  }) => {
    await homePage.verifyHeadingText();
  });

  test('Verifies home link is enabled using text and css selector', async ({
    homePage,
  }) => {
    await homePage.locatesEnabledHomeLink();
  });

  test('Verifies the search icon is visible using Xpath selector', async ({
    homePage,
  }) => {
    await homePage.verifySearchIconXPATH();
  });

  test('Verifies the text of all nav links', async ({ homePage }) => {
    await homePage.verifyTextOfAllNavLinks();
  });
});
