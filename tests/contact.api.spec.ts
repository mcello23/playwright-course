import { test } from '../utils/e2e.controller';

test.describe('Contact', () => {
  let randomPerson: {
    name: string;
    email: string;
    phone: string;
    website: string;
  };

  test.beforeAll(async ({ API }) => {
    const users = await API.getUsers();
    const randomIndex = Math.floor(Math.random() * users.length);
    randomPerson = users[randomIndex];
    console.log('Random person:', randomPerson);

    // Validar se os dados necessários estão presentes
    if (
      !randomPerson.name ||
      !randomPerson.email ||
      !randomPerson.phone ||
      !randomPerson.website
    ) {
      throw new Error('Dados do usuário incompletos');
    }

    await API.postTodos({
      title: 'foo',
      completed: false,
    });
  });

  test('Fill contact form and verify success message', async ({
    contactPage,
  }) => {
    await contactPage.navigateToContactPage();
    await contactPage.fillAndSubmitContactForm(
      randomPerson.name,
      randomPerson.email,
      randomPerson.phone,
      randomPerson.website,
    );
    await contactPage.verifySuccessMessage();
  });
});
