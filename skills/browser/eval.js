#!/usr/bin/env node
import puppeteer from 'puppeteer-core';

const code = process.argv[2];

if (!code) {
  console.error('Usage: eval.js <javascript-code>');
  process.exit(1);
}

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

  const result = await page.evaluate(async (expr) => {
    return await eval(`(async () => ${expr})()`);
  }, code);

  if (result !== undefined) {
    console.log(JSON.stringify(result, null, 2));
  }

  browser.disconnect();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
