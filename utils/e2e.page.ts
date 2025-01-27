import { test as base, expect } from '@playwright/test';
import {
  aboutPageCommands,
  blogPageCommands,
  cartPageCommands,
  contactPageCommands,
  homePageCommands,
} from './custom_commands/gui_commands.page.ts';

const storageStatePath = 'storageState.json';

const test = base.extend<{
  homePage: homePageCommands;
  aboutPage: aboutPageCommands;
  cartPage: cartPageCommands;
  blogPage: blogPageCommands;
  contactPage: contactPageCommands;
}>({
  homePage: async ({ page }, use) => {
    const homePage = new homePageCommands(page);
    await use(homePage);
  },
  aboutPage: async ({ page }, use) => {
    const aboutPage = new aboutPageCommands(page);
    await use(aboutPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new cartPageCommands(page);
    await use(cartPage);
  },
  blogPage: async ({ page }, use) => {
    const blogPage = new blogPageCommands(page);
    await use(blogPage);
  },
  contactPage: async ({ page }, use) => {
    const contactPage = new contactPageCommands(page);
    await use(contactPage);
  },
});

export { expect, test };
