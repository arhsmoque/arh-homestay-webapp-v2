# Booking and Inquiry Stack

## Public Booking Flow

```text
Choose purpose
→ Enter date, pax, and needs
→ Select package if relevant
→ See rate/deposit/rules summary
→ Preview WhatsApp message
→ Send structured inquiry
→ Owner confirms availability and final rate
```

## Booking Modes

```yaml
overnight_stay:
  fields:
    - date
    - number_of_nights
    - pax
    - cars_optional
    - kids_elderly_note_optional
    - questions_optional

family_day_or_event:
  fields:
    - date
    - event_type
    - estimated_pax
    - day_use_or_overnight
    - cars
    - pool_use
    - setup_needs_optional
    - questions_optional

corporate_retreat:
  fields:
    - date
    - organization_or_group_optional
    - estimated_pax
    - day_use_or_overnight
    - setup_needs
    - cars
    - questions_optional
```

## WhatsApp Payload

```text
Hi, I want to check availability.

Date:
Pax:
Purpose:
Cars:
Package:
Questions:
```

## Event Payload

```text
Hi, I want to ask about family day / private event use.

Date:
Event type:
Estimated pax:
Day use or overnight:
Cars:
Pool use:
Setup needs:
Questions:
```
