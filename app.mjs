import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.cesarionivar.com');
  await page.screenshot({ path: 'cesarionivar.png' });
  await browser.close();
})();
