# Agent Implementation Prompt

You are implementing a homestay webapp with two connected systems:

```text
1. Customer-facing public site:
   Homestay Guest Decision Engine

2. Operator-facing admin/control system:
   Homestay Operator Control System
```

## Core Product Rules

```text
Public site proves.
Owner console operates.
Developer console observes.
Invariant core governs.
Audit remembers.
Policy versions protect.
Adapters preserve change.
```

## Do Not Build

```text
Do not build an Airbnb clone.
Do not preserve the F&B cart/menu metaphor.
Do not make inquiry equal booking.
Do not make deposit screenshot equal confirmation.
Do not allow owner to edit invariant core.
Do not expose guest data publicly.
Do not build a metric-wall dashboard.
Do not hide rules until after payment.
Do not use black-box dynamic pricing in MVP.
```

## Build Order

```text
1. Public page routes and content schemas.
2. Public proof/card system and WhatsApp inquiry builder.
3. Owner/developer route shell.
4. Roles, permissions, audit event schema.
5. Inquiry/booking/calendar state machine.
6. Rates/packages/quote engine.
7. Owner dashboard and booking workflows.
8. Media/content editor with preview.
9. Legal/privacy/rules versioning.
10. Analytics/observability/data health.
11. Recovery/handover.
```

## Required Validation

Before handoff, prove:

```text
- Public site can generate structured WhatsApp inquiries.
- Owner can manage inquiries/bookings without developer help.
- Staff cannot perform dangerous actions.
- Confirmed bookings preserve frozen quote and policy version.
- Calendar blocks derive from booking/owner blocks.
- Guest data is not exposed publicly.
- Rate changes are previewed, versioned, and audited.
- Policy changes are versioned and not retroactive.
- Broken WhatsApp/map links are detected.
- Developer console provides remediation-bearing errors.
```

## Naming Rules

Use inferable names:

```text
OwnerTodayPage
BookingStateTransitionControl
RateQuoteBuilderPanel
PolicyVersionHistory
MediaPermissionBadge
DeveloperObservabilityPage
DataHealthCheckCard
```

Avoid:

```text
Dashboard
AdminPanel
InfoCard
Manager
DataView
ActionBox
```
