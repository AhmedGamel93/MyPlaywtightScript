# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 1.LoginTest.spec.ts >> Login Tests >> Test unsuccessful Login With Invalid Credentials
- Location: tests\1.LoginTest.spec.ts:34:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.saucedemo.com/", waiting until "load"

```

# Test source

```ts
  1  | import { Locator, Page} from '@playwright/test';
  2  | 
  3  | export class LoginPage {
  4  |   
  5  |   readonly page: Page;
  6  |   readonly emailInput: Locator;
  7  |   readonly passwordInput: Locator;
  8  |   readonly loginButton: Locator;
  9  |   readonly errorMessage : Locator;
  10 | 
  11 | 
  12 |   constructor(page: Page ) {
  13 |     this.page = page;
  14 |     this.emailInput = page.locator('#user-name');
  15 |     this.passwordInput = page.locator('#password');
  16 |     this.loginButton = page.locator("#login-button");   
  17 |     this.errorMessage =page.locator('h3').filter({ hasText: 'Epic sadface: Username and password do not match any user in this service' }).last()
  18 |   }
  19 | 
  20 |   async  gotoLoginPage( ) {
> 21 |     await this.page.goto('https://www.saucedemo.com');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  22 |   }
  23 | 
  24 | 
  25 | 
  26 |   async login(email: string, password: string) {
  27 |     await this.emailInput.fill(email);
  28 |     await this.passwordInput.fill(password);
  29 |     await this.loginButton.click();
  30 |   }
  31 | 
  32 | 
  33 | }
```