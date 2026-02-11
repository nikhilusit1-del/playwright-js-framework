const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const loginData = require('../test-data/loginData.json');
import { defineConfig } from '@playwright/test';

test.describe('Login Tests', () => {

  loginData.forEach((data) => {

    test(`Login Test - ${data.type}`, async ({ page }) => {

      const loginPage = new LoginPage(page);

      await page.goto('https://bugbash.syook.com/#');

      await loginPage.login(data.email, data.password);

      // ✅ POSITIVE TEST
      if (data.type === 'positive') {

        // Instead of URL, verify dashboard element
        await expect(
          page.locator('button:has-text("Add Product")')
        ).toBeVisible();

      }

      // ✅ NEGATIVE TEST
      else {

        await expect(
          page.locator('text=Invalid')
        ).toBeVisible();

      }

    });

  });

});
