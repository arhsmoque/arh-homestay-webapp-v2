# Implementation Folder Structure

```text
homestay-public-webapp/
│
├─ src/
│  ├─ pages/
│  │  ├─ index.astro
│  │  ├─ stay.astro
│  │  ├─ private-pool.astro
│  │  ├─ events.astro
│  │  ├─ layout.astro
│  │  ├─ gallery.astro
│  │  ├─ location.astro
│  │  ├─ packages.astro
│  │  ├─ faq.astro
│  │  └─ book.astro
│  │
│  ├─ content/
│  │  ├─ property.facts.json
│  │  ├─ rooms.json
│  │  ├─ packages.json
│  │  ├─ media.registry.json
│  │  ├─ faq.json
│  │  ├─ rules.public.json
│  │  └─ nearby-landmarks.json
│  │
│  ├─ components/
│  │  ├─ public/
│  │  ├─ booking/
│  │  ├─ media/
│  │  ├─ discovery/
│  │  └─ layout/
│  │
│  ├─ lib/
│  │  ├─ build-whatsapp-message.ts
│  │  ├─ build-page-metadata.ts
│  │  ├─ build-structured-data.ts
│  │  ├─ get-property-facts.ts
│  │  ├─ get-media-by-group.ts
│  │  └─ track-public-event.ts
│  │
│  └─ styles/
│     ├─ globals.css
│     └─ tokens.css
│
├─ public/
│  ├─ images/
│  ├─ videos/
│  ├─ social-preview/
│  └─ favicon/
│
├─ design.config.json
├─ astro.config.mjs
├─ package.json
└─ README.md
```
