import { test, expect } from '@playwright/test';

test('Verify Client Work text visibility', async ({ page }) => {
  // Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Navigate directly to the Services page
  await page.goto('https://www.epam.com/services');

  // Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Ensure "Client Work" text is visible
  await expect(page.locator('text=Client Work')).toBeVisible();

  // Close the browser
  await page.close();
});