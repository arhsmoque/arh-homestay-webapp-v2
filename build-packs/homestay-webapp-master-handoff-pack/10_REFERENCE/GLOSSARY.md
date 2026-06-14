# Glossary

```text
Guest Decision Engine:
Public site that helps guests understand fit and inquire.

Operator Control System:
Owner/developer system for operations, booking, rates, media, rules, analytics, audit, and recovery.

Invariant Core:
Technical and governance layer not directly editable by owner.

Adapter:
Boundary that allows one class of change without breaking the rest of the system.

Booking State Machine:
The operational truth for inquiry → quote → hold → deposit → confirmed → check-in → check-out → completed.

Rate Quote:
Frozen commercial promise linked to inquiry/booking.

Policy Version:
Versioned rules/legal/privacy text linked to bookings.

Audit Event:
Append-only record of who changed what, when, why, and with what impact.

Data Health Check:
Validation that records, links, schemas, and operational states are consistent.

Observability Event:
Developer-facing signal with evidence and remediation.
```
