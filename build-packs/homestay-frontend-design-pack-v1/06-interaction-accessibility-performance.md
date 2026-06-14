# 06 — Interaction, Accessibility, State Behavior, and Performance Guardrails

## Behavior thesis

```text
Interaction is hospitality.
Motion is ambience.
Fallback is trust.
```

## Interaction levels

```yaml
interaction_levels:
  level_1_primary_action:
    examples:
      - Check availability
      - Send WhatsApp inquiry
      - Ask event package
    behavior:
      - strong affordance
      - clear label
      - large tap target
      - visible feedback
      - fallback if action fails

  level_2_proof_exploration:
    examples:
      - View layout
      - View rooms
      - Open gallery
      - Open map

  level_3_supporting_detail:
    examples:
      - FAQ accordion
      - Rules summary
      - Package condition

  level_4_ambient_motion:
    examples:
      - Ken Burns image
      - soft reveal
      - media transition
```

## Motion rules

```yaml
motion_allowed:
  - slow_image_drift
  - soft_section_reveal
  - subtle_card_lift_on_clickable_cards
  - button_press_feedback
  - lightbox_fade_scale
  - sticky_CTA_entrance
  - accordion_expand_collapse

motion_reject:
  - scroll_hijacking
  - fast_zoom
  - bouncing_cards
  - spinning_icons
  - autoplay_grid_videos
  - parallax_heavy_hero
```

## Reduced motion

```yaml
reduced_motion_rules:
  disable:
    - Ken_Burns
    - autoplay_hero_video
    - parallax
    - scroll_triggered_movement
    - long_animated_reveals

  replace_with:
    - static_hero_image
    - visible_play_button
    - immediate_content_reveal
```

## Mobile touch rules

```yaml
mobile_touch_rules:
  tap_targets:
    minimum: "44px"
    preferred: "48px"

  avoid:
    - hidden_swipe_only_navigation
    - pinch_required_layouts
    - hover_only_reveal
    - tiny_close_buttons
```

## Sticky booking bar behavior

```yaml
StickyBookingBar_behavior:
  appears_when:
    - user_scrolls_past_hero
    - primary_CTA_not_visible

  hides_or_compresses_when:
    - user_reaches_final_booking_form
    - keyboard_is_open_on_mobile
    - footer_legal_links_are_visible

  buttons:
    - WhatsApp
    - Map
    - Check Date
```

## Booking form states

```yaml
booking_form_states:
  - empty
  - editing
  - validation_error
  - preview_ready
  - sending_to_whatsapp
  - whatsapp_failed
```

## Accessibility floor

```yaml
accessibility_floor:
  target: WCAG_2_2_AA
  requirements:
    - semantic_html
    - correct_heading_order
    - visible_focus_states
    - keyboard_reachable_controls
    - visible_form_labels
    - associated_error_messages
    - meaningful_alt_text
    - reduced_motion_support
    - comfortable_tap_targets
    - no_hover_only_content
```

## Performance targets

```yaml
performance_targets:
  LCP: "<= 2.5s"
  INP: "<= 200ms"
  CLS: "<= 0.1"

  protect_by:
    - optimized_hero_image
    - limited_client_JS
    - explicit_image_dimensions
    - lazy_load_below_fold_gallery
    - poster_first_video
    - no_full_social_feed_embed_above_fold
```
