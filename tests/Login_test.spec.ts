import {test,expect} from '@playwright/test'
import { LoginPage } from '../page/LoginPage';
//import test_data from '../test_data/loginData.json'
import loginData from '../test_data/loginData.json'


test('validlogin', async ({page}) => {

   const loginPage = new LoginPage(page);
   await loginPage.goToLoginScreen();
   await loginPage.loginFunction( loginData.valid_user.username,
       loginData.valid_user.password);

   //await loginPage.verifyLoginSuccess();
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('invalidlogin', async ({page}) => {

   const loginPage = new LoginPage(page);
   await loginPage.goToLoginScreen();
   await loginPage.loginFunction( loginData.invalid_user.username,
       loginData.invalid_user.password);
   //await loginPage.verifyLoginSuccess();
 await expect(loginPage.errorMessage).toBeVisible();
});

