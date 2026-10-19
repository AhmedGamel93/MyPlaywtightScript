import { Locator, Page} from '@playwright/test';

export class LoginPage {
  
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage : Locator;


  constructor(page: Page ) {
    this.page = page;
    this.emailInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator("#login-button");   
    this.errorMessage =page.locator('h3').filter({ hasText: 'Epic sadface: Username and password do not match any user in this service' }).last()
  }

  async  gotoLoginPage( ) {
    await this.page.goto('https://www.saucedemo.com');
  }



  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }


}