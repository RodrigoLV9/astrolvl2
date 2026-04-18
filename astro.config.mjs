// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

const rawSite = process.env.PUBLIC_SITE_URL ?? process.env.SITE_URL ?? 'http://localhost:4321';
const site = rawSite.endsWith('/') ? rawSite.slice(0, -1) : rawSite;

if (process.env.NODE_ENV === 'production' && !process.env.PUBLIC_SITE_URL && !process.env.SITE_URL) {
  console.warn('[SEO] PUBLIC_SITE_URL is not set. Canonical and hreflang tags will fallback to localhost.');
}

// https://astro.build/config
export default defineConfig({
  site,
  // Use the Vercel adapter for API routes and on-demand rendering on Vercel.
  adapter: vercel(),
  integrations: [react(), sitemap()],
});