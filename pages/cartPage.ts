import { Locator, Page} from '@playwright/test';
import { HomePage } from './HomePage';

export class CartPage extends HomePage{

    readonly page : Page; 
      readonly checkoutBtn : Locator ; 
        readonly cartList : Locator ;

    constructor (page:Page){

        super(page);
            this.page=page;
            this.checkoutBtn = page.locator("#checkout");
            this.cartList = page.locator(".cart_item_label");
    }

async checkout()
{
 await this.checkoutBtn.click();

}


}


