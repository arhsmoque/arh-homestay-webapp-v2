# Operator-Facing Design Brief

## Ought Statement

```yaml
ought_statement:
  must_make_possible:
    - Owner can run bookings without developer help.
    - Owner can edit volatile business content safely.
    - Owner can manage rates, packages, calendar, rules, media, and analytics.
    - Developer can inspect health, schema, integrations, audit, and recovery.
    - Staff can help with delegated tasks without dangerous permissions.
    - Super admin can recover access and approve destructive actions.

  must_prevent:
    - Owner accidentally breaking schema, auth, deployment, public layout, or privacy.
    - Inquiry being mistaken as confirmed booking.
    - Payment screenshot being treated as automatic confirmation.
    - Rate changes silently affecting confirmed bookings.
    - Hidden rules or unversioned legal text.
    - Guest data exposure or unaudited export.
    - Dashboard becoming a metric wall.

  must_reveal:
    - New inquiries.
    - Pending deposits.
    - Calendar conflicts.
    - Booking state conflicts.
    - Missing policy versions.
    - Broken WhatsApp/map links.
    - Rate/package health.
    - Data/privacy risks.
    - Recent high-risk changes.

  must_preserve:
    - Invariant core.
    - Owner autonomy.
    - Developer observability.
    - Audit trail.
    - Recovery path.
    - Policy/version history.
```
