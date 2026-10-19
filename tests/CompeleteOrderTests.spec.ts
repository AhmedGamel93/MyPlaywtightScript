import { expect } from '@playwright/test';
import {test as base, test} from '../fixtures/homePageFixture';
import { HomePage } from '../pages/HomePage';
import{ CartPage } from '../pages/cartPage';
import { ChcekOutPage } from '../pages/checkOutPage';
import { CheckoutOverviewPage } from '../pages/compeleteOrderPage';

test("Complete Order", async ({homePage})=>
{
    const homePageInstance = new HomePage(homePage.page);
    const cartPageInstance = new CartPage(homePage.page);
    const checkoutOverviewPageInstance = new CheckoutOverviewPage(homePage.page);
    const checkOutPageInstance = new ChcekOutPage(homePage.page);
    await homePageInstance.addToCart();
    await homePageInstance.openCartPage();
    await cartPageInstance.checkout();
    await checkOutPageInstance.fillCheckOutForm("Ahmed", "Gamel", "12345");
    await checkoutOverviewPageInstance.assertSubtotalMatchesItems();
    await checkoutOverviewPageInstance.assertTotalMatchesSubtotalAndTax();
     await checkoutOverviewPageInstance.completeOrder();
    expect(await checkoutOverviewPageInstance.successMessage.innerText()).toBe("Thank you for your order!");
    
})