import { expect } from '@playwright/test';
import {test as base, test} from '../fixtures/homePageFixture';
import { HomePage } from '../pages/HomePage';
import{ CartPage } from '../pages/cartPage';
import { ChcekOutPage } from '../pages/checkOutPage';


test('checkout cart items', async ({homePage }) => {
    const homePageInstance = new HomePage(homePage.page);
    const cartPageInstance = new CartPage(homePage.page);
    const checkOutPageInstance = new ChcekOutPage(homePage.page);
    await homePageInstance.addToCart();
    await homePageInstance.openCartPage();
    await cartPageInstance.cartList.last().waitFor({ state: 'visible', timeout: 3000 });
    expect(await cartPageInstance.cartList.count()).toBe(6);
    await cartPageInstance.checkout();
    await checkOutPageInstance.fillCheckOutForm("Ahmed", "Gamel", "12345");
    
   
});