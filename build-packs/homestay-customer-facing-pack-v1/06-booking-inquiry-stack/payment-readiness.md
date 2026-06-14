# Payment Readiness

## MVP posture

Do not process payment directly inside the website yet.

Show deposit policy clearly. Let the owner confirm availability and final rate before sending payment instruction or payment link.

## Recommended flow

```text
Inquiry submitted
→ Owner confirms date and rate
→ Owner sends deposit instruction/link
→ Guest pays deposit
→ Owner confirms booking
→ Guest receives confirmation message
```

## Deposit summary card

```yaml
title: Deposit and Confirmation
summary:
  - Your date is confirmed after owner confirmation and deposit, if required.
  - Deposit amount and payment method will be confirmed by owner.
  - Cancellation and refund policy applies.
cta: Read booking terms
```

## Scaffolded payment options

```yaml
manual_bank_transfer:
  build_now: true
  pros:
    - simple
    - familiar
    - low integration burden
  cons:
    - manual reconciliation
    - screenshot/payment proof handling

payment_link:
  scaffold_now: true
  pros:
    - easier than full checkout
    - good for deposit
    - keeps owner approval before payment
  cons:
    - needs refund/policy handling

full_gateway_checkout:
  defer: true
  pros:
    - smoother automation
    - better records
  cons:
    - higher legal/privacy/refund complexity
```
