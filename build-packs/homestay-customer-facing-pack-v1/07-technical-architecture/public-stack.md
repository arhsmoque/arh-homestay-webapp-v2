# Public Technical Stack

## Recommended Stack

```yaml
framework: Astro
interactive_islands: React
styling:
  - Tailwind CSS
  - design tokens
  - shadcn/ui only where useful
hosting:
  - Cloudflare Pages
  - Cloudflare Workers Static Assets later
media:
  phase_1: optimized static images
  phase_2: Cloudflare R2 + Cloudflare Images
data:
  phase_1: JSON / Markdown
  phase_2: D1 / Supabase / Firebase via adapter
analytics:
  - Google Search Console
  - GA4 or Plausible
  - public event registry
booking:
  phase_1: WhatsApp deep link + generated payload
  phase_2: inquiry API + availability + payment link
```

## Why Astro

The public site is mostly content, discovery, proof, media, SEO, and forms. It should be fast and mostly static.

Astro owns:

- pages
- routing
- layout
- SEO metadata
- structured data
- static content
- media sections

React owns:

- booking mode selector
- WhatsApp message preview
- gallery lightbox
- interactive layout map
- package selector

## Stack Split

```text
Customer-facing public site:
Astro + Tailwind + selected React islands.

Operator-facing admin:
React + Vite + shadcn/ui + backend/auth/database.
```
