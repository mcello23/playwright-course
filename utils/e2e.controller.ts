import { test as base, expect } from '@playwright/test';
import { APIController } from './custom_commands/api_commands.controller';
import {
  aboutPageCommands,
  blogPageCommands,
  cartPageCommands,
  contactPageCommands,
  homePageCommands,
} from './custom_commands/gui_commands.controller';

const test = base.extend<{
  homePage: homePageCommands;
  aboutPage: aboutPageCommands;
  cartPage: cartPageCommands;
  blogPage: blogPageCommands;
  contactPage: contactPageCommands;
  API: APIController;
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
  API: async ({}, use) => {
    const API = new APIController();
    await API.init();
    await use(API);
  },
});

export { expect, test };
