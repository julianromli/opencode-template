#!/usr/bin/env node
import { spawn } from 'child_process';
import { existsSync, mkdirSync, cpSync } from 'fs';
import { join } from 'path';
import { homedir, tmpdir, platform } from 'os';

const args = process.argv.slice(2);
const useProfile = args.includes('--profile');

function getChromePath() {
  const paths = platform() === 'win32'
    ? [
        join(process.env['PROGRAMFILES'] || '', 'Google/Chrome/Application/chrome.exe'),
        join(process.env['PROGRAMFILES(X86)'] || '', 'Google/Chrome/Application/chrome.exe'),
        join(process.env['LOCALAPPDATA'] || '', 'Google/Chrome/Application/chrome.exe'),
      ]
    : platform() === 'darwin'
    ? ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome']
    : ['/usr/bin/google-chrome', '/usr/bin/chromium-browser', '/usr/bin/chromium'];

  for (const p of paths) {
    if (existsSync(p)) return p;
  }
  throw new Error('Chrome not found');
}

function getUserDataDir() {
  if (platform() === 'win32') {
    return join(process.env['LOCALAPPDATA'] || '', 'Google/Chrome/User Data');
  } else if (platform() === 'darwin') {
    return join(homedir(), 'Library/Application Support/Google/Chrome');
  }
  return join(homedir(), '.config/google-chrome');
}

async function main() {
  const chromePath = getChromePath();
  const tempProfile = join(tmpdir(), `chrome-debug-${Date.now()}`);
  mkdirSync(tempProfile, { recursive: true });

  if (useProfile) {
    const userDataDir = getUserDataDir();
    const defaultProfile = join(userDataDir, 'Default');
    if (existsSync(defaultProfile)) {
      console.log('Copying Chrome profile...');
      cpSync(defaultProfile, join(tempProfile, 'Default'), { recursive: true });
    }
  }

  const chromeArgs = [
    `--remote-debugging-port=9222`,
    `--user-data-dir=${tempProfile}`,
    '--no-first-run',
    '--no-default-browser-check',
  ];

  const child = spawn(chromePath, chromeArgs, {
    detached: true,
    stdio: 'ignore',
  });
  child.unref();

  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(`✓ Chrome started on :9222${useProfile ? ' with your profile' : ''}`);
}

main().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
