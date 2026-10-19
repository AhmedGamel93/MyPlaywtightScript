import { Locator, Page} from '@playwright/test';

export class HomePage {

    readonly page : Page ;
    readonly AddToCartButton : Locator;
    readonly CartButton : Locator;
   readonly removeFromCardBtn : Locator;
   readonly CartBtn  : Locator;
       

    constructor (page:Page){
            this.page=page;
            this.AddToCartButton =   page.locator('button.btn_inventory');
            this.CartButton =  page.locator('a.shopping_cart_link');
            this.removeFromCardBtn = page.locator('button.btn_secondary');
            this.CartBtn =  page.locator('a.shopping_cart_link');
    }

    addToCart = async () => {
      
        for (let i = 0; i < await this.AddToCartButton.count(); i++) {
        await this.AddToCartButton.nth(i).click();
        
        }    
         
    }

    removeFromCart = async(itemsNumber :number)=>
    {
         for (let i = itemsNumber; i < await this.AddToCartButton.count(); i++) {
        await this.removeFromCardBtn.nth(itemsNumber).click();
        
        }    
      
    }
    
    openCartPage = async()=>
    {
        await this.CartBtn.click();
        
    }
}
