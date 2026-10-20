# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 3.CheckOutTests.spec.ts >> checkout cart items
- Location: tests\3.CheckOutTests.spec.ts:8:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
Call log:
  - waiting for locator('.cart_item_label').last() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, empty" [ref=e13]
      - generic [ref=e14]: Your Cart
    - main [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - generic [ref=e19]: QTY
          - generic [ref=e20]: Description
        - generic [ref=e21]:
          - button "Continue Shopping" [ref=e22] [cursor=pointer]
          - button "Checkout" [ref=e23] [cursor=pointer]
  - contentinfo [ref=e24]:
    - list [ref=e25]:
      - listitem [ref=e26]:
        - link "X" [ref=e27] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e28]:
        - link "Facebook" [ref=e29] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e30]:
        - link "LinkedIn" [ref=e31] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e32]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import {test as base, test} from '../fixtures/homePageFixture';
  3  | import { HomePage } from '../pages/HomePage';
  4  | import{ CartPage } from '../pages/cartPage';
  5  | import { ChcekOutPage } from '../pages/checkOutPage';
  6  | 
  7  | 
  8  | test('checkout cart items', async ({homePage }) => {
  9  |     const homePageInstance = new HomePage(homePage.page);
  10 |     const cartPageInstance = new CartPage(homePage.page);
  11 |     const checkOutPageInstance = new ChcekOutPage(homePage.page);
  12 |     await homePageInstance.addToCart();
  13 |     await homePageInstance.openCartPage();
> 14 |     await cartPageInstance.cartList.last().waitFor({ state: 'visible', timeout: 2000 });
     |                                            ^ TimeoutError: locator.waitFor: Timeout 2000ms exceeded.
  15 |     expect(await cartPageInstance.cartList.count()).toBe(6);
  16 |     await cartPageInstance.checkout();
  17 |     await checkOutPageInstance.fillCheckOutForm("Ahmed", "Gamel", "12345");
  18 |     
  19 |    
  20 | });
```