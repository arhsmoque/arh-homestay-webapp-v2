# Homestay Customer-Facing Webapp Pack v1.0

## Product Name

**Homestay Guest Decision Engine**

This pack defines the customer-facing public webapp for a modern homestay / private pool / small event property.

It is not a hotel brochure, Airbnb clone, F&B menu conversion, or photo dump. It is a public decision engine that helps the right guest understand fit, trust the property, choose a purpose, and send a qualified booking inquiry.

## North Star

The public site should make the guest confident enough to inquire.

It should help visitors answer:

- What is this place?
- Where is it?
- Who is it for?
- Can my group fit?
- Is the pool private?
- Where do we sleep, park, gather, eat, and move?
- What rules apply?
- How do I check availability?

## Pack Scope

This pack covers the **customer-facing side only**:

- Public pages
- Guest journeys
- Page order
- Card and layout system
- Search/social discovery
- WhatsApp-first booking inquiry
- Public technical architecture
- Content/copy system
- Media taxonomy
- Customer-facing validation tests
- Build handoff

The operator-facing control system is intentionally separated into a future 8-turn pack.

## Recommended Build Stack

- Astro for mostly static public pages
- React islands for booking, gallery, and layout interactions
- Tailwind CSS + design tokens
- Cloudflare Pages / Workers Static Assets
- File-based JSON/Markdown content first
- Future adapter seams for admin, booking records, payment, availability, analytics, and media storage

## Core Design Rule

```text
Proof before adjective.
Situation before slogan.
Action before ornament.
Rules visible, not frightening.
WhatsApp-first, but future-booking-ready.
```
