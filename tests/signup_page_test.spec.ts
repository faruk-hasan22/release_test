import { test, expect } from '@playwright/test';

test.describe('Signup Form - Visibility and State Tests', () => {
  
  test('Form elements should be visible and enabled', async ({ page }) => {
    // Navigate to the page containing the form
    await page.goto('http://127.0.0.1:5501/index.html'); // Replace with your actual URL

    // Check if the username label and input are visible and enabled
    const usernameLabel = page.locator('label', { hasText: 'Enter your username:' });
    const usernameInput = page.locator('input[placeholder="Enter your Username"]');
    await expect(usernameLabel).toBeVisible();
    await expect(usernameInput).toBeVisible();
    await expect(usernameInput).toBeEnabled();

    // Check if the password label and input are visible and enabled
    const passwordLabel = page.locator('label', { hasText: 'Enter your password:' });
    const passwordInput = page.locator('input[placeholder="Enter your password"]');
    await expect(passwordLabel).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(passwordInput).toBeEnabled();

    // Check if the confirm password label and input are visible and enabled
    const confirmPasswordLabel = page.locator('label', { hasText: 'Confirm password:' });
    const confirmPasswordInput = page.locator('input[placeholder="Confirm your password"]');
    await expect(confirmPasswordLabel).toBeVisible();
    await expect(confirmPasswordInput).toBeVisible();
    await expect(confirmPasswordInput).toBeEnabled();

    // Check if the sign-up button is visible and enabled
    const signUpButton = page.locator('button', { hasText: 'sign up' });
    await expect(signUpButton).toBeVisible();
    await expect(signUpButton).toBeEnabled();
    await page.waitForTimeout(2000);
  });
});
