#!/usr/bin/env node
import puppeteer from 'puppeteer-core';

const prompt = process.argv[2] || 'Click elements to select them';

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

  console.log(`Prompt: ${prompt}`);
  console.log('Click to select, Ctrl+Click for multi-select, Enter to finish');

  const result = await page.evaluate(async (promptText) => {
    return new Promise((resolve) => {
      const selected = [];
      let overlay = document.createElement('div');
      overlay.id = '__picker_overlay__';
      overlay.style.cssText = 'position:fixed;top:0;left:0;right:0;padding:10px;background:rgba(0,0,0,0.8);color:white;z-index:999999;font-family:monospace;font-size:12px;';
      overlay.textContent = promptText + ' | Click: select | Ctrl+Click: multi | Enter: done';
      document.body.appendChild(overlay);

      let highlight = document.createElement('div');
      highlight.id = '__picker_highlight__';
      highlight.style.cssText = 'position:absolute;border:2px solid #00ff00;background:rgba(0,255,0,0.1);pointer-events:none;z-index:999998;display:none;';
      document.body.appendChild(highlight);

      function getElementInfo(el) {
        return {
          tag: el.tagName.toLowerCase(),
          id: el.id || null,
          classes: Array.from(el.classList),
          text: el.textContent?.trim().slice(0, 100) || null,
          href: el.href || null,
        };
      }

      function updateHighlight(el) {
        const rect = el.getBoundingClientRect();
        highlight.style.display = 'block';
        highlight.style.top = rect.top + window.scrollY + 'px';
        highlight.style.left = rect.left + window.scrollX + 'px';
        highlight.style.width = rect.width + 'px';
        highlight.style.height = rect.height + 'px';
      }

      function cleanup() {
        document.removeEventListener('mouseover', onMouseOver);
        document.removeEventListener('click', onClick, true);
        document.removeEventListener('keydown', onKeyDown);
        overlay.remove();
        highlight.remove();
      }

      function onMouseOver(e) {
        updateHighlight(e.target);
      }

      function onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        const info = getElementInfo(e.target);
        selected.push(info);
        console.log('Selected:', info);
        if (!e.ctrlKey && !e.metaKey) {
          cleanup();
          resolve(selected);
        }
      }

      function onKeyDown(e) {
        if (e.key === 'Enter') {
          cleanup();
          resolve(selected);
        } else if (e.key === 'Escape') {
          cleanup();
          resolve([]);
        }
      }

      document.addEventListener('mouseover', onMouseOver);
      document.addEventListener('click', onClick, true);
      document.addEventListener('keydown', onKeyDown);
    });
  }, prompt);

  console.log('\nSelected elements:');
  console.log(JSON.stringify(result, null, 2));

  browser.disconnect();
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
