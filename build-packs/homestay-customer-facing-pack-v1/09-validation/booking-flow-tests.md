# Booking Flow Tests

## Stay Payload Test

Generated message includes:

- date
- number of nights
- pax
- cars if provided
- package if selected
- questions if provided

## Event Payload Test

Generated message includes:

- date
- event type
- estimated pax
- day use or overnight
- cars
- pool use
- setup needs
- questions

## Corporate Payload Test

Generated message includes:

- date
- organization/group if provided
- estimated pax
- setup needs
- cars
- questions

## Fallback Test

If WhatsApp link fails, the page shows:

- owner number
- copyable message
- map link

## Terms Visibility Test

Before payment or confirmation, customer can access:

- booking terms
- house rules
- privacy notice
- cancellation/deposit summary
