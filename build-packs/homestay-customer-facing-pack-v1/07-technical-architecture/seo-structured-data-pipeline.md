# SEO and Structured Data Pipeline

## Build Now

- page title generator
- meta description generator
- canonical URL generator
- Open Graph metadata
- sitemap.xml
- robots.txt
- image alt text
- clean slug strategy
- page-specific search intent

## Scaffold Now

- LodgingBusiness schema
- VacationRental schema readiness
- Accommodation facts
- occupancy fields
- amenities
- coordinates
- check-in/check-out
- review/rating fields if valid

## Route Metadata Pattern

```yaml
/:
  title: "[Name] | Private Pool Homestay near [Location]"
  intent: "main brand and private pool homestay"

/private-pool:
  title: "Private Pool Homestay near [Location] | [Name]"
  intent: "pool-specific search"

/events:
  title: "Private Event and Family Day Homestay near [Location]"
  intent: "family day and small event search"

/layout:
  title: "Compound Layout, Parking and Pool Map | [Name]"
  intent: "trust and planning proof"

/location:
  title: "Homestay near [Landmark] | Map and Nearby Places"
  intent: "local landmark search"
```
