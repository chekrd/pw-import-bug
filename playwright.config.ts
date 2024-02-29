import { defineConfig, devices } from '@playwright/experimental-ct-react';
import { join } from 'node:path';
import { cwd } from 'node:process';

export default defineConfig({
  testMatch: '**/*.uitest.tsx',
  testDir: './',
  fullyParallel: true,
  timeout: 5_000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    trace: 'on-first-retry',
    ctCacheDir: join(cwd(), '/node_modules/.cache/playwright'),
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
