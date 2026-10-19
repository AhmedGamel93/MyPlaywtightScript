import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

type Fixtures = {
  homePage: LoginPage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const homePage = new LoginPage(page);

    await homePage.gotoLoginPage();
    await homePage.login('standard_user', 'secret_sauce');
    await use(homePage);
    await context.close();
  },
});

