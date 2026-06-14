# Accessibility and Performance Checklist

## Accessibility

```yaml
accessibility:
  semantic_html:
    - landmarks
    - heading_order
    - descriptive_links

  keyboard:
    - all_controls_reachable
    - visible_focus
    - no_keyboard_traps
    - Escape_closes_lightbox

  forms:
    - visible_labels
    - required_fields_clear
    - errors_associated_with_inputs
    - first_error_focus_on_submit

  media:
    - meaningful_alt_text
    - decorative_empty_alt
    - captions_or_descriptions_for_important_video
    - no_flashing
    - reduced_motion_supported

  mobile:
    - tap_targets_44px_minimum
    - no_hover_only_content
```

## Performance

```yaml
performance:
  LCP:
    target: "<= 2.5s"
    checks:
      - hero_image_optimized
      - hero_not_lazy_loaded
      - no_heavy_video_required_for_first_paint

  INP:
    target: "<= 200ms"
    checks:
      - limited_client_JS
      - lightbox_not_loaded_unnecessarily
      - third_party_embeds_deferred

  CLS:
    target: "<= 0.1"
    checks:
      - image_dimensions_reserved
      - video_dimensions_reserved
      - sticky_bar_does_not_shift_layout
```
