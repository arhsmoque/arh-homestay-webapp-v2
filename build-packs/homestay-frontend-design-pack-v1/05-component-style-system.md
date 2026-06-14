# 05 — Component and Card Styling System

## Component thesis

```text
A component is not a decoration container.
A component is a decision surface.
```

## Component taxonomy

```yaml
component_style_taxonomy:
  entry_components:
    - HeroDecisionCard
    - FastProofStrip
    - StickyBookingBar

  fit_components:
    - SleepSummaryCard
    - RoomSleepCard
    - FacilityProofCard
    - PaxCapacityBadge

  desire_components:
    - SignaturePoolCard
    - GalleryStoryCard
    - MediaStoryCard
    - VideoPreviewCard

  proof_components:
    - CompoundLayoutPreview
    - ParkingProofCard
    - RouteProofCard
    - LocationProofCard
    - NearbyLandmarkCard

  occasion_components:
    - OccasionFitCard
    - EventSuitabilityCard
    - PackageSummaryCard

  trust_components:
    - ReviewProofCard
    - SocialProofCard
    - FaqPreviewCard
    - RulesSummaryCard
    - BookingTermsPreview

  conversion_components:
    - BookingModeSelector
    - PackageSelector
    - WhatsappInquiryCard
    - WhatsappMessagePreview
    - SendWhatsappInquiryButton
```

## Shared component anatomy

```yaml
shared_component_anatomy:
  media:
    optional: true
    role: emotion_or_proof

  eyebrow:
    optional: true
    role: category_label

  title:
    required: true
    role: decision_object

  decision_line:
    optional: true
    role: what_this_helps_decide

  facts:
    optional: true
    role: hard_proof

  body:
    optional: true
    role: short_explanation

  action:
    optional: true
    role: next_step
```

## Base card style

```yaml
BaseProofCard:
  background: surface.card
  text: text.primary
  border: border.subtle
  radius: "22px"
  padding_mobile: "20px"
  padding_desktop: "28px"
  shadow: subtle
  clickable_hover: "translateY(-2px) only if clickable"
```

## Critical rule

```text
Only clickable cards should lift on hover.
Non-clickable proof cards should stay calm.
```

## Key components

```yaml
HeroDecisionCard:
  role: first_screen_property_identity_and_action
  must_show:
    - what
    - where
    - who_for
    - proof_chips
    - primary_CTA

FastProofStrip:
  role: compact_key_facts
  density: high
  examples:
    - Sleeps X
    - Private pool
    - Parking X cars
    - Near landmark

OccasionFitCard:
  role: route_visitor_by_use_case
  variants:
    - family
    - pool
    - event
    - corporate

SignaturePoolCard:
  role: pool_desire_and_proof
  required_microcopy: "Private pool for your group during your booking. Pool rules apply."

SleepSummaryCard:
  role: overnight_capacity_proof
  critical_rule: "Never merge overnight pax and day event pax."

CompoundLayoutPreview:
  role: space_usability_proof
  mobile_fallback: numbered_marker_list

PackageSummaryCard:
  role: package_choice_and_rate_expectation
  avoid: "DM for price without rate factors"

WhatsappInquiryCard:
  role: structured_inquiry_conversion
  fallback:
    - copy_message
    - show_owner_number
```

## Button system

```yaml
button_system:
  primary:
    use: [Check availability, Send WhatsApp inquiry]
    background: action.primary
    text: text.inverse

  secondary:
    use: [View layout, Open map, View gallery]
    background: transparent_or_surface
    border: action.primary

  warm:
    use: [Ask event package, Ask corporate retreat rate]
    background: action.warm
    text: text.inverse
```
