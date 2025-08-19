// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,  
  reporter: 'html',
  use: {
    // Base URL da API, para não precisar repeti-la em cada teste
    baseURL: 'https://fakestoreapi.com',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'api',
      testDir: './tests/api',
    },
  ],
});