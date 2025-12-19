#!/usr/bin/env node
import puppeteer from 'puppeteer-core';

const args = process.argv.slice(2);
const url = args.find(a => !a.startsWith('--'));
const openNew = args.includes('--new');

if (!url) {
  console.error('Usage: nav.js <url> [--new]');
  process.exit(1);
}

async function main() {
  const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222',
  });

  let page;
  if (openNew) {
    page = await browser.newPage();
  } else {
    const pages = await browser.pages();
    page = pages[0];
    if (!page) {
      page = await browser.newPage();
    }
  }

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  console.log(`✓ Navigated to: ${url}${openNew ? ' (new tab)' : ''}`);
  browser.disconnect();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
