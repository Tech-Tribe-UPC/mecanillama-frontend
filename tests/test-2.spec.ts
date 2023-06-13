import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.goto('http://localhost:3000/sign-in');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('carfixersworkshop@example.com');
  await page.getByRole('textbox', { name: 'Contraseña' }).click();
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('password');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('menuitem', { name: 'Services' }).click();
  await page.getByRole('button', { name: 'Add new service' }).click();
  await page.getByLabel('Service\'s name').click();
  await page.getByLabel('Service\'s name').fill('Second Transmission Flush');
  await page.getByLabel('Price').click();
  await page.getByLabel('Price').fill('70');
  await page.getByLabel('Description').click();
  await page.getByLabel('Description').fill('Replacing the transmission fluid and cleaning the transmission system to maintain smooth gear shifting');
  await page.getByRole('button', { name: 'Add service' }).click();
});