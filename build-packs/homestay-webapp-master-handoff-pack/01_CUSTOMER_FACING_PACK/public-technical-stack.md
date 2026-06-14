# Public Technical Stack

Recommended stack:

```yaml
framework:
  name: Astro
  reason:
    - mostly static pages
    - strong content fit
    - SEO friendly
    - low unnecessary JavaScript

interactive_islands:
  name: React
  use_for:
    - booking mode selector
    - WhatsApp payload builder
    - gallery lightbox
    - layout marker map
    - package selector

styling:
  - Tailwind CSS
  - design tokens
  - shadcn/ui only where useful

hosting:
  - Cloudflare Pages
  - Cloudflare Workers Static Assets later

media:
  phase_1:
    - optimized static images
    - media registry
  phase_2:
    - Cloudflare R2
    - Cloudflare Images

data:
  phase_1:
    - JSON
    - Markdown
  phase_2:
    - Cloudflare D1 or Supabase or Firebase adapter

analytics:
  - Search Console
  - GA4 or Plausible
  - public event registry

booking:
  phase_1:
    - WhatsApp deep link
    - generated payload
  phase_2:
    - inquiry API
    - availability
    - payment link
```
