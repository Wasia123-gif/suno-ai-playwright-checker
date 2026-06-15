import { test, expect } from '@playwright/test';

test('Suno AI main page check', async ({ page }) => {
  await page.goto('/');
  
  // Check that page loads
  await expect(page).toHaveTitle(/Suno/);
  
  // Check for main elements
  await expect(page.locator('text=Create')).toBeVisible({ timeout: 15000 });
  
  console.log('✅ Suno AI homepage loaded successfully');
});

test('Suno AI explore page', async ({ page }) => {
  await page.goto('/explore');
  await expect(page).toHaveURL(/.*explore.*/);
  console.log('✅ Suno AI explore page works');
});