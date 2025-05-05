// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://ne0blog.pages.dev", // 独自ドメイン取得したら置き換え
  integrations: [react()]
});