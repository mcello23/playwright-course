import { faker } from '@faker-js/faker';
import { test } from '../utils/e2e.controller';

test.describe('Contact', () => {
  test('Fill contact form and verify success message', async ({
    contactPage,
  }) => {
    await contactPage.navigateToContactPage();
    await contactPage.fillAndSubmitContactForm(
      faker.person.firstName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.lorem.paragraphs(2),
    );
    await contactPage.verifySuccessMessage();
  });
});
