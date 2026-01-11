#!/usr/bin/env node
import puppeteer from 'puppeteer-core';
import { join } from 'path';
import { tmpdir } from 'os';

async function main() {
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
  });

  const pages = await browser.pages();
  const page = pages[0];

  if (!page) {
    console.error('No active page found');
    process.exit(1);
  }

  const filename = `screenshot-${Date.now()}.png`;
  const filepath = join(tmpdir(), filename);

  await page.screenshot({ path: filepath });
  console.log(`✓ Screenshot saved: ${filepath}`);

  browser.disconnect();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
