# Review Flow

## Purpose

Reviews should answer guest anxieties, not merely decorate the site.

## Review by Anxiety

```yaml
family:
  anxiety: "Can my kids/family enjoy this?"
  proof: "family stay review"

event:
  anxiety: "Can this handle a gathering?"
  proof: "family day/event review"

outstation:
  anxiety: "Is it easy to reach and trust?"
  proof: "location/check-in review"

corporate:
  anxiety: "Is it suitable for a small private retreat?"
  proof: "corporate/weekday review"
```

## Flow

```text
Thank guest
→ Ask if everything was okay
→ Send Google review link
→ Ask permission to feature quote/photo if suitable
→ Save review by guest type
→ Use best review on relevant page
```

## Review Card Model

```yaml
quote: ""
source: "Google | Facebook | WhatsApp | Direct"
guest_type: "Family stay | Family day | Event | Corporate | Outstation"
date: ""
page_usage:
  - home
  - events
  - stay
  - private_pool
permission_status: "approved | pending | hidden"
```
