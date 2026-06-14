# 07 — Design Tokens, Architecture, Boundaries, and Adapter-Safe Styling

## Thesis

```text
A design system is not a color palette.

It is a governed editing surface:
what can change,
who can change it,
how it regenerates,
how it is validated,
and how it avoids breaking trust, accessibility, performance, and meaning.
```

## Token layers

```text
Raw tokens
→ Semantic tokens
→ Component tokens
```

## Raw tokens

```yaml
raw_tokens:
  colors:
    cloudWhite: "#F7F4EE"
    warmCanvas: "#EFE7DA"
    softMist: "#E8ECE8"
    deepCharcoal: "#20201D"
    mutedCharcoal: "#4D4A43"
    clayTerracotta: "#B96F4A"
    clayAction: "#9E5D3D"
    palmOlive: "#66724D"
    rattanSand: "#C6A878"
    poolTeal: "#2F8F9D"
    deepPool: "#1F5F6B"
    duskIndigo: "#283145"
    warmLamp: "#E4B96F"
```

## Semantic tokens

```yaml
semantic_tokens:
  background:
    page: cloudWhite
    warm: warmCanvas
    mist: softMist
    evening: duskIndigo

  surface:
    card: "#FFFCF7"
    cardWarm: warmCanvas
    cardEvening: "#303A50"

  text:
    primary: deepCharcoal
    secondary: mutedCharcoal
    inverse: "#FFFFFF"

  action:
    primary: deepPool
    secondary: palmOlive
    warm: clayAction

  proof:
    pool: poolTeal
    layout: palmOlive
    event: clayTerracotta
    location: deepPool
```

## Frontend boundaries

```yaml
frontend_boundaries:
  invariant_frontend_core:
    owns:
      - component_names
      - component_responsibilities
      - accessibility_behavior
      - booking_flow_structure
      - media_loading_rules
      - state_floor
      - responsive_breakpoints
      - token_generation_pipeline
    editable_by: developer

  developer_design_adapter:
    owns:
      - color_tokens
      - typography_tokens
      - spacing_tokens
      - radius_tokens
      - shadow_tokens
      - motion_tokens
      - component_variants
      - page_layout_templates
    editable_by: developer

  owner_content_adapter:
    owns:
      - photos
      - videos
      - captions
      - package_text
      - FAQ_content
      - house_rules_summary
      - map_link
      - hero_featured_media
      - featured_reviews
    editable_by: owner
```

## Owner rule

```text
Owner controls what is shown.
Developer controls how the system safely shows it.
```

## Component API rule

Use semantic variants, not random style flags.

Good:

```ts
type OccasionFitCardVariant = "family" | "pool" | "event" | "corporate";
```

Weak:

```ts
type CardProps = {
  blue?: boolean;
  big?: boolean;
  shadow?: string;
};
```

## Build now

```yaml
build_now:
  - extended_design_config_schema
  - raw_semantic_component_token_layers
  - CSS_variable_output
  - Tailwind_semantic_mapping
  - content_theme_modes
  - owner_vs_developer_style_boundary
  - component_style_API_rules
  - media_registry_schema
  - z_index_tokens
  - responsive_tokens
  - motion_tokens
  - accessibility_tokens
  - validation_contract
```
