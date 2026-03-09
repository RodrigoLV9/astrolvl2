// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Astro 5: static by default. Endpoints with `export const prerender = false`
  // are rendered on-demand. The adapter handles those requests.
  // Swap for your deploy platform: @astrojs/vercel, @astrojs/netlify, etc.
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [react()],
});