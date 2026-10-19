import { Locator, Page} from '@playwright/test';
import { HomePage } from './HomePage';


export class ChcekOutPage extends HomePage{
    readonly page : Page

    readonly firstNameInput : Locator;
    readonly lastNameInput :Locator ;
    readonly PostalCodeInput : Locator;
    readonly continueBtn : Locator;


    constructor (page:Page){
         super(page);
        this.page=page;
        this.firstNameInput= page.locator("#first-name");
        this.lastNameInput = page.locator("#last-name");
        this.PostalCodeInput = page.locator("#postal-code");
        this.continueBtn = page.locator("#continue");

    }


    async fillCheckOutForm(firstname:string , lastname:string , postalcode:string)
    {
        await this.firstNameInput.fill(firstname);
        await this.lastNameInput.fill(lastname);
        await this.PostalCodeInput.fill(postalcode);
        await this.continueBtn.click();
      
    }

}


