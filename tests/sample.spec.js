import { test, expect } from '@playwright/test';

test('Google Browser', async ({ page }) => {

    await page.goto('https://google.co.in/');
});