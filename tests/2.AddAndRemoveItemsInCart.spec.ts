import { expect } from '@playwright/test';
import {test as base, test} from '../fixtures/homePageFixture';
import { HomePage } from '../pages/HomePage';



test.describe('Add and Remove Items In Cart', () => {
    test('Add Items In The Cart', async ({homePage }) => {  
        const homePageInstance = new HomePage(homePage.page);
        await homePageInstance.addToCart();    
    });

    test('Remove Items From The Cart', async ({homePage }) => {
        const homePageInstance = new HomePage(homePage.page);
      
        await homePageInstance.addToCart();  
        await homePageInstance.removeFromCart(0);    
        expect(await homePageInstance.removeFromCardBtn.count()).toBe(0); 
    });
  });