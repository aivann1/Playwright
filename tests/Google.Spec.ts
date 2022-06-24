import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.google.com/');
  });
// test.use({
//     browserName: 'chromium',
//     headless: false,
//     ignoreHTTPSErrors: true,
//     video: "on-first-retry",
//     screenshot: "only-on-failure"
// });

test.describe('Google WebSite Test @slow', async () => {

    test('Google Search test', async ({ page, browserName }) => {

        await page.type('input[name="q"]', 'playwright');
        await page.click('input[name="btnK"]');
        await page.screenshot({ path: 'google.png', fullPage: true });

    });

})

test.describe('Google WebSite Test @slow', async () => {

    test.skip('Skipped Google Search test', async ({ page, browserName }) => {

        await page.type('input[name="q"]', 'playwright');
        await page.click('input[name="btnK"]');
        await page.screenshot({ path: 'google.png', fullPage: true });

    });

})


