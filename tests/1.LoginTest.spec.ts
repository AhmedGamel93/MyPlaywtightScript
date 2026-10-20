import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { LoginData } from '../utils/ExcelReader';
import { readData } from '../utils/dataReader';

//const testData: LoginData [] = readData('./test_data/LoginData.xlsx' , "Sheet1");
const testData : LoginData [] = readData('./test_data/LoginData.csv');
//const testData : LoginData [] = readData('./test_data/LoginData.json');


test.describe("Login Tests" , ()=>
{
    for( const data of testData as LoginData[])
    {
        if (String(data.run).toLowerCase() !== 'true') continue;      
         test(`Test Login As ${data.username}` ,async ({page})=>{
            const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();
        await loginPage.login(data.username, data.password);
        if(data.expected === 'success') {
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

             
        }
    }
)


 
    }
   

 test('Test unsuccessful Login With Invalid Credentials' , async({page})=>{
         const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
        await loginPage.login('invalid_user', 'invalid_password');
        await expect(loginPage.errorMessage).toBeVisible();
    })
  
})







