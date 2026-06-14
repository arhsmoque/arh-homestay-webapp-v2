# Homestay Frontend Design Pack v1.0

A style, motion, media, and implementation companion for the customer-facing homestay webapp.

This pack answers:

> How should the homestay frontend feel, look, move, breathe, scale, and remain coherent?

It does **not** replace the customer-facing product pack.  
It sits beside it as the frontend design layer.

## Core thesis

```text
Warm private retreat, proven by real media, guided by calm clarity.
```

## Design direction

The frontend should feel:

- warm
- real
- private
- locally premium
- family-safe
- event-capable
- calm
- photo-led
- mobile-first
- proof-led

It should avoid:

- black-gold generic luxury
- sterile SaaS gray
- AI-polished villa fantasy
- autoplay chaos
- glassmorphism by habit
- social-feed clutter
- vague brochure style
- photo dump galleries

## Pack structure

```text
homestay-frontend-design-pack-v1/
├─ README.md
├─ MANIFEST.md
├─ FRONTEND_DESIGN_PHILOSOPHY.md
├─ RUNTIME_HANDBOOK.md
├─ IMPLEMENTATION_HANDOFF.md
├─ 01-visual-north-star.md
├─ 02-color-system.md
├─ 03-typography-spacing-layout.md
├─ 04-media-motion-video.md
├─ 05-component-style-system.md
├─ 06-interaction-accessibility-performance.md
├─ 07-design-tokens-implementation.md
├─ 08-validation-checklist.md
├─ tokens/
├─ schemas/
├─ examples/
├─ validation/
└─ scripts/
```

## Intended users

- frontend design agent
- implementation agent
- developer
- owner/admin console planner
- future maintainer
- QA reviewer

## Recommended frontend stack

```yaml
framework: Astro
interactive_islands: React
styling: Tailwind CSS + CSS variables
hosting: Cloudflare Pages / Workers Static Assets
media: optimized static media first, Cloudflare Images/R2 later
content: JSON/Markdown first, admin adapter later
```

## Core rule

```text
The owner controls what is shown.
The developer controls how the system safely shows it.
```
