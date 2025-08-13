import { test, expect } from '@playwright/test';

test('Verify Client Work text visibility on Epam website', async ({ page }) => {
  // Navigate to the Epam website
  await page.goto('https://www.epam.com/');

  // Click on "Services" from the header
  await page.click('header >> text=Services');

  // Click on "Explore Our Client Work" link
  await page.click('text=Explore Our Client Work');

  // Ensure that "Client Work" text is visible
  const clientWorkText = await page.isVisible('text=Client Work');
  expect(clientWorkText).toBeTruthy();

  // Close the browser
  await page.context().browser()?.close();
});