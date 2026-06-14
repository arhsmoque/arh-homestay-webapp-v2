# Booking State Machine

## Core Flow

```text
inquiry_new
→ inquiry_contacted
→ quoted
→ tentative_hold
→ pending_deposit
→ confirmed
→ checked_in
→ checked_out
→ completed
```

## Branches

```text
quoted → expired
tentative_hold → expired
pending_deposit → cancelled / dispute
confirmed → cancelled / no_show / dispute
checked_out → completed / dispute
dispute → completed / cancelled / escalated
```

## Core Rules

```text
Inquiry is not booking.
Quote is not confirmation.
Deposit is not automatic confirmation.
Calendar is not source of truth.
Booking state machine is source of operational truth.
```
