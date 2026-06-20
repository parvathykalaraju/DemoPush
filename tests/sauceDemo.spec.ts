import {test, expect, Locator} from '@playwright/test';

test ('Login sauche demo', async({page}) => {
await page.goto("https://saucedemo.com");

const username: Locator = page.locator('#user-name');
const password: Locator=page.locator('#password');
const loginButton: Locator=page.locator('#password');

await username.fill('standard_user');
await password.fill('secret_sauce');
await loginButton.click();
});

