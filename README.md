## Astro LvL - SEO Deployment Notes

This project uses Astro + React with multilingual routes (`en`, `es`, `pt`) and structured data.

### Required SEO environment variable

Set `PUBLIC_SITE_URL` in production so canonical URLs, hreflang links, sitemap, and JSON-LD use your real domain.

Example:

```env
PUBLIC_SITE_URL=https://www.your-domain.com
```

You can start from `.env.example`.

### Local development

```bash
pnpm astro dev
```

### Validation

```bash
pnpm astro check
pnpm astro build
```

