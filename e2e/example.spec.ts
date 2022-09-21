import {expect, test} from '@playwright/test';

test('should navigate to login from main', async ({page}) => {
  await page.goto('http://localhost:3000');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create T3 App/);
  // Find an element with the text 'About Page' and click on it

  // create a locator
  const getStarted = page.locator('text=txt');

  // Click the get started link.
  await getStarted.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/api\/auth\/signin/);
});
