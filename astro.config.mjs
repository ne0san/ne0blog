// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 独自ドメイン取得したら置き換え
  site: "https://ne0blog.pages.dev",

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});