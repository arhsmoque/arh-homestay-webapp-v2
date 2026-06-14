# Implementation Handoff

## Recommended stack

```yaml
stack:
  framework: Astro
  interactive_islands: React
  styling: Tailwind CSS + CSS variables
  deployment: Cloudflare Pages
  media_phase_1: optimized static assets
  media_phase_2: Cloudflare Images / R2
  content_phase_1: JSON / Markdown
  admin_phase_later: owner content adapter
```

## Implementation order

```text
1. Create Astro project.
2. Add Tailwind and CSS variable tokens.
3. Add design.config.json.
4. Generate tokens.css and Tailwind mapping.
5. Create page layout shell.
6. Implement HeroDecisionCard.
7. Implement FastProofStrip.
8. Implement core cards.
9. Implement media registry.
10. Implement gallery and lightbox.
11. Implement booking/WhatsApp card.
12. Add accessibility and reduced-motion behavior.
13. Add performance budgets.
14. Validate.
```

## Project file target

```text
homestay-public-webapp/
├─ src/
│  ├─ pages/
│  ├─ components/
│  ├─ content/
│  ├─ lib/
│  └─ styles/
├─ public/
├─ design.config.json
├─ tailwind.config.js
├─ package.json
└─ README.md
```

## Required style files

```text
src/styles/
├─ tokens.css
├─ globals.css
├─ themes.css
└─ motion.css
```

## Required content registries

```text
src/content/
├─ property.facts.json
├─ media.registry.json
├─ packages.json
├─ faq.json
├─ rules.public.json
└─ nearby-landmarks.json
```

## Required component groups

```text
src/components/
├─ public/
│  ├─ HeroDecisionCard.tsx
│  ├─ FastProofStrip.tsx
│  ├─ OccasionFitCard.tsx
│  ├─ SignaturePoolCard.tsx
│  ├─ SleepSummaryCard.tsx
│  ├─ CompoundLayoutPreview.tsx
│  ├─ GalleryStoryCard.tsx
│  ├─ PackageSummaryCard.tsx
│  └─ StickyBookingBar.tsx
├─ booking/
│  ├─ BookingModeSelector.tsx
│  ├─ WhatsappInquiryCard.tsx
│  ├─ WhatsappMessagePreview.tsx
│  └─ SendWhatsappInquiryButton.tsx
└─ media/
   ├─ MediaLightbox.tsx
   ├─ VideoPreviewCard.tsx
   ├─ KenburnsImage.tsx
   └─ RouteProofVideo.tsx
```

## Build validation

```bash
pnpm build
pnpm lint
scripts/audit-accessibility.sh
scripts/performance-budget.sh
node scripts/validate-media-registry.mjs
node scripts/validate-public-style-contract.mjs
```

## Final acceptance

```text
The frontend is acceptable when a mobile visitor can understand the property, trust the media, see pool/pax/parking/layout/rules, and send a structured WhatsApp inquiry without confusion.
```
