# Frontend Style Validation

## Reviewer questions

```text
1. Does the page feel like warm private retreat?
2. Is the property proof visible before decorative storytelling?
3. Are real photos doing the visual work?
4. Are pool, pax, parking, layout, location, and CTA obvious?
5. Is the gallery grouped by decision purpose?
6. Does motion create presence without distracting?
7. Does reduced motion remove non-essential movement?
8. Can a mobile visitor send a WhatsApp inquiry easily?
9. Are critical facts readable and not hidden in micro text?
10. Are design tokens used instead of random one-off styles?
```

## Fail conditions

```yaml
fail_if:
  - hero_is_vague
  - CTA_not_visible
  - gallery_is_photo_dump
  - owner_content_breaks_layout
  - critical_info_in_tiny_text
  - autoplay_video_grid
  - no_focus_visible
  - random_hex_values_in_components
  - no_WhatsApp_fallback
```
