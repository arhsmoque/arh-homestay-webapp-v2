# 03 — Typography, Spacing, Rhythm, and Layout Grammar

## Typography thesis

```text
Typography gives voice.
Spacing gives calm.
Layout gives trust.
Rhythm turns scrolling into decision-making.
```

## Recommended font pairing

```yaml
font_pairing:
  display_font:
    name: Fraunces
    role:
      - hero headlines
      - section headings
      - gallery story titles
      - emotional callouts

  body_font:
    name: Manrope
    role:
      - body text
      - cards
      - proof labels
      - booking form
      - FAQ
      - navigation
      - buttons
```

## Type scale

```yaml
type_scale:
  display_xl:
    mobile: "42px"
    desktop: "72px"
    line_height: "0.95"
    use: homepage_hero_only

  display_lg:
    mobile: "36px"
    desktop: "56px"
    line_height: "1.0"
    use: major_page_hero

  heading_1:
    mobile: "32px"
    desktop: "48px"
    line_height: "1.05"

  heading_2:
    mobile: "26px"
    desktop: "36px"
    line_height: "1.12"

  body:
    mobile: "16px"
    desktop: "17px"
    line_height: "1.6"

  small:
    mobile: "14px"
    desktop: "14px"
    line_height: "1.45"
```

## Spacing scale

```yaml
spacing_scale:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
  4xl: "96px"
  5xl: "128px"
```

## Layout widths

```yaml
layout_widths:
  page_container: "1180px"
  reading_container: "760px"
  wide_media_container: "1320px"
  narrow_form_container: "640px"
```

## Homepage rhythm

```text
Hero
→ Fast proof
→ Occasion cards
→ Pool feature
→ Sleep summary
→ Layout preview
→ Event preview
→ Gallery preview
→ Location preview
→ Packages
→ FAQ
→ Final CTA
```

## Mobile grammar

```yaml
mobile_layout_rules:
  - one main idea per screen
  - CTA visible early
  - proof chips within first screen
  - cards stack vertically
  - gallery uses story cards
  - form is one column
  - no hover-only information
```

## Desktop grammar

```yaml
desktop_layout_rules:
  - media_plus_proof_split
  - proof_strip_horizontal
  - occasion_cards_grid
  - pool_image_plus_facts_panel
  - layout_map_large
  - booking_form_centered
```
