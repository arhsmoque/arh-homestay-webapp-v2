# 02 — Color System

## Color philosophy

```text
Use calm white as the canvas.
Use pool teal as the memory hook.
Use clay, rattan, and olive as local warmth.
Use dusk tones for night/rain ambience.
Use deep charcoal for trust and readability.
```

## Primary palette

```yaml
palette:
  canvas:
    cloud_white: "#F7F4EE"
    warm_canvas: "#EFE7DA"
    soft_mist: "#E8ECE8"

  text:
    deep_charcoal: "#20201D"
    muted_charcoal: "#4D4A43"

  natural_accents:
    clay_terracotta: "#B96F4A"
    clay_action: "#9E5D3D"
    palm_olive: "#66724D"
    rattan_sand: "#C6A878"

  pool_accents:
    pool_teal: "#2F8F9D"
    deep_pool: "#1F5F6B"

  evening:
    dusk_indigo: "#283145"
    warm_lamp: "#E4B96F"
```

## Semantic rule

```text
Pool teal is identity.
Deep pool is action.
Clay is event warmth.
Olive is nature/layout calm.
Rattan is hospitality texture.
Dusk indigo is evening ambience.
```

## Safe CTA variants

```yaml
cta_safe_variants:
  primary_booking:
    background: "#1F5F6B"
    text: "#FFFFFF"
    role: "Check availability / Send WhatsApp"

  secondary_nature:
    background: "#66724D"
    text: "#FFFFFF"
    role: "View layout / Open map"

  warm_event:
    background: "#9E5D3D"
    text: "#FFFFFF"
    role: "Ask event package"

  evening:
    background: "#283145"
    text: "#FFFFFF"
    role: "Night/rain media section CTA"
```

## Content modes

```yaml
content_modes:
  day:
    use_for: [home, stay, layout]
    background: cloud_white
    accent: pool_teal
    action: deep_pool

  pool:
    use_for: [private_pool, pool_gallery]
    background: cloud_white
    accent: pool_teal
    action: deep_pool

  night_rain:
    use_for: [night_pool, rain_evening]
    background: dusk_indigo
    text: "#FFFDF8"
    accent: warm_lamp

  event:
    use_for: [family_day, birthday, akad, engagement]
    background: warm_canvas
    accent: clay_terracotta
    action: clay_action

  corporate:
    use_for: [corporate_retreat, weekday_package]
    background: "#F2EEE6"
    accent: dusk_indigo
    action: deep_pool
```

## Anti-patterns

```yaml
reject:
  - black_gold_luxury
  - corporate_blue_branding
  - neon_teal_pool
  - sterile_white_gray
  - tropical_overload
  - low_contrast_beige_text
```
