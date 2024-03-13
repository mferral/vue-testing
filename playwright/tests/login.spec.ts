import { test, expect } from '@playwright/test';

test('First Login', async ({ page }) => {
  // await page.goto('http://localhost:5173/login');

  // const title = page.getByTestId('title')
  // await expect(title).toHaveText(/Sign in/);

  // const identifier = page.getByRole("textbox", { name: /email/i })
  // const password = page.getByRole("textbox", { name: /password/i })
  // const button = page.getByRole("button", { name: /Sign in/i })

  // await identifier.fill("mferral@outlook.com")
  // await password.fill("2DQ21nsf")

  // await button.click()

  // await page.waitForURL('http://localhost:5173/')


  // npx playwright codegen playwright.dev
  // pnpm exec playwright test--ui
  await page.goto('http://localhost:5173/login');
  await page.getByLabel('Email Address').click();
  await page.getByLabel('Email Address').fill('mferral@outlook.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('supersecret');
  const button = await page.getByRole('button', { name: 'Sign in' });
  await expect(button).toHaveJSProperty('disabled', false)
  await button.click()
  await expect(button).toHaveJSProperty('disabled', true)
  // await page.waitForTimeout(3000);
  await expect(button).toHaveJSProperty('disabled', false)
  // await page.getByRole('heading', { name: 'Hi Quasar' }).click();

});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
