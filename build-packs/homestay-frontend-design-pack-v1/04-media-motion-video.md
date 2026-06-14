# 04 — Media, Motion, Video, Gallery, and Realism Rules

## Media thesis

```text
Media is not decoration.
For a homestay, media is proof.
```

## Media taxonomy

```yaml
media_taxonomy:
  hero:
    role: first_impression_and_identity

  proof:
    role: hard_evidence

  pool:
    role: main_desire_hook

  occasion:
    role: help_guest_imagine_use

  logistics:
    role: reduce_arrival_anxiety

  ambience:
    role: emotional_memory

  social:
    role: short_form_discovery
```

## Must-have media

```yaml
must_have_media:
  property_identity:
    - exterior_wide_shot
    - hero_pool_house_shot
    - private_compound_view

  stay:
    - bedrooms
    - living_hall
    - kitchen
    - bathrooms
    - sleeping_arrangement_visual

  pool:
    - pool_daylight
    - pool_night
    - pool_surrounding_area

  layout:
    - top_view_layout
    - annotated_compound_map
    - main_house_marker
    - guest_house_marker
    - pool_marker
    - gazebo_or_pergola_marker
    - parking_marker
    - gate_marker

  logistics:
    - parking_area
    - entrance_gate
    - road_approach
    - route_video
    - nearby_landmark

  events:
    - gathering_area
    - covered_area
    - BBQ_or_food_setup_area
    - sample_event_setup
    - rain_plan_area
```

## Photo realism rules

```yaml
allowed_enhancement:
  - improve_brightness
  - correct_white_balance
  - reduce_harsh_contrast
  - lightly_denoise
  - modest_upscale
  - crop_to_useful_aspect_ratio
  - improve_shadow_detail

not_allowed:
  - invent_new_structures
  - add_extra_columns
  - change_roof_shape
  - enlarge_pool
  - add_fake_landscaping
  - remove_permanent_features_without_request
  - make_surfaces_plastic
  - over_sharpen_AI_upscale_look
```

## Gallery architecture

```yaml
gallery_groups:
  - Private Pool
  - Rooms and Stay
  - Compound Layout
  - Family Day and Events
  - Location and Arrival
```

## Ken Burns rules

```yaml
kenburns_allowed:
  - homepage_hero_poster
  - selected_pool_image
  - night_rain_ambience_image
  - gallery_story_cover

kenburns_avoid:
  - every_image
  - room_proof_cards
  - FAQ
  - booking_form
  - rules_section
  - map_location_UI
```

## Video strategy

```text
Grid = still image or subtle Ken Burns poster.
Lightbox/detail = video playback.
Hero = optional muted short loop only if optimized.
```

## Media performance budget

```yaml
media_performance_budget:
  hero_image:
    target: "250KB to 400KB if possible"
    format: "AVIF/WebP"
    loading: eager
    priority: high

  card_images:
    target: "120KB to 220KB each"
    loading: lazy_below_fold

  hero_video:
    target: "under 2MB if possible"
    duration: "5s to 8s loop"
    preload: metadata
    poster: required

  social_clips:
    target: poster_first
    playback: on_tap
```
