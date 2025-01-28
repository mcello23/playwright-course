import { test } from '../utils/e2e.controller';

test.describe('Blog', () => {
  test("View 'Recent Posts' count and verify the length of each item", async ({
    blogPage,
  }) => {
    await blogPage.navigateToBlogPage();
    await blogPage.verifyRecentPostsLenght();
  });
});
