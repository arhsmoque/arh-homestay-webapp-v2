# 08 — Validation Checklist

## Design coherence

```yaml
design_coherence:
  - visual_style_matches_warm_private_retreat
  - real_media_is_primary_visual_proof
  - no_generic_luxury_or_SaaS_theme
  - color_tokens_used_semantically
  - typography_is_readable_on_mobile
  - spacing_creates_calm_without_wasting_mobile_space
```

## Media validation

```yaml
media_validation:
  - every_media_item_has_role
  - hero_media_loads_fast
  - gallery_grouped_by_decision_purpose
  - no_photo_dump
  - Ken_Burns_used_only_on_selected_media
  - reduced_motion_fallback_exists
  - video_is_poster_first
  - route_gate_parking_proof_exists
  - image_dimensions_reserved
  - alt_text_present
```

## Component validation

```yaml
component_validation:
  - every_component_has_decision_role
  - clickable_cards_are_obviously_clickable
  - nonclickable_cards_do_not_lift
  - proof_strip_has_real_values
  - overnight_pax_and_event_pax_are_separated
  - package_cards_show_rate_expectation_or_rate_factors
  - booking_card_has_fallback
  - sticky_CTA_does_not_cover_form_submit
```

## Accessibility validation

```yaml
accessibility_validation:
  - semantic_html
  - heading_order
  - keyboard_navigation
  - focus_visible
  - forms_have_visible_labels
  - errors_linked_to_fields
  - lightbox_focus_trap
  - Esc_closes_lightbox
  - prefers_reduced_motion_supported
  - no_hover_only_content
  - tap_targets_comfortable
```

## Performance validation

```yaml
performance_validation:
  - LCP_target_under_2_5s
  - INP_target_under_200ms
  - CLS_target_under_0_1
  - hero_image_optimized
  - below_fold_gallery_lazy_loaded
  - no_multiple_autoplay_videos
  - full_social_embeds_not_loaded_above_fold
  - third_party_scripts_limited
```

## Implementation validation

```yaml
implementation_validation:
  - no_random_hex_values_in_components
  - design_config_is_source_of_truth
  - Tailwind_maps_to_semantic_tokens
  - media_registry_validates
  - component_registry_exists
  - owner_editable_content_separated_from_developer_tokens
  - scripts_support_dry_run_before_mutation
```
