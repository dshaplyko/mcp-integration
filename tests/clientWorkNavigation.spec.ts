import { test, expect } from '@playwright/test';

test('Navigate to Client Work and verify text', async ({ page }) => {
  // Step 1: Navigate to EPAM homepage
  await page.goto('https://www.epam.com/');

  // Step 2: Navigate to Services section
  await page.goto('https://www.epam.com/services');

  // Step 3: Click on "Explore Our Client Work" link
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Step 4: Verify "Client Work" text is visible
  const clientWorkText = await page.locator('text=Client Work');
  await expect(clientWorkText).toBeVisible();
});