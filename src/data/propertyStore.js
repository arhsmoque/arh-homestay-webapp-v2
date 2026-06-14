export const PROPERTY_APP_CONFIG = {
  "firebase": {
    "url": "https://arh-firebase-db-default-rtdb.asia-southeast1.firebasedatabase.app",
    "root": "ellamin_courtyard_homestay"
  },
  "security": {
    "pins": {
      "owner": "1234",
      "developer": "4321"
    }
  },
  "seed": {
    "property": {
      "profile": {
        "name": "Ellamin Courtyard Retreat",
        "shortName": "Ellamin Courtyard",
        "tagline": "Private pool courtyard retreat near Morib",
        "description": "A private pool courtyard retreat for family weekends, BBQ, family day, and small private events.",
        "propertyType": "retreat",
        "locationLabel": "Morib, Banting",
        "whatsapp": "60123456789",
        "maxGuests": 6,
        "bedrooms": 2,
        "bathrooms": 2,
        "beds": "2 queen beds",
        "parking": "1 parking bay",
        "checkIn": "3:00 PM",
        "departure": "12:00 PM",
        "heroImages": {
          "day": "/images/ellamin-courtyard-day-main.webp",
          "night": "/images/ellamin-courtyard-night-panorama.webp"
        }
      },
      "gallery": {
        "exterior": {
          "id": "exterior",
          "title": "Daytime Courtyard Overview",
          "caption": "Actual exterior view showing the private pool, lawn, gazebo, pergola, BBQ bay, and house frontage.",
          "url": "/images/ellamin-courtyard-day-main.webp",
          "visible": true,
          "sortIndex": 10
        },
        "living": {
          "id": "living",
          "title": "Living area",
          "caption": "Shared space for family time and planning the day.",
          "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
          "visible": true,
          "sortIndex": 20
        },
        "bedroom": {
          "id": "bedroom",
          "title": "Bedroom",
          "caption": "Comfortable sleeping arrangement for small groups.",
          "url": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
          "visible": true,
          "sortIndex": 30
        },
        "folders": {
          "exterior": {
            "id": "exterior",
            "name": "Exterior & Grounds",
            "sortIndex": 10,
            "photos": [
              {
                "id": "ext_day_main",
                "url": "/images/ellamin-courtyard-day-main.webp",
                "title": "Daytime Courtyard Overview",
                "caption": "Pool, lawn, gazebo, pergola, BBQ bay, and house frontage in one clear decision photo.",
                "sortIndex": 10
              },
              {
                "id": "ext_day_panorama",
                "url": "/images/ellamin-courtyard-day-panorama.webp",
                "title": "Daytime Panorama",
                "caption": "Wide exterior context for pool, covered dining, house frontage, and courtyard flow.",
                "sortIndex": 20
              },
              {
                "id": "ext_family_day",
                "url": "/images/ellamin-courtyard-family-day.webp",
                "title": "Family Day Use",
                "caption": "Actual family-day style proof: children swimming, adults dining, BBQ setup, and shaded gathering.",
                "sortIndex": 30
              },
              {
                "id": "ext_rain_sunset",
                "url": "/images/ellamin-courtyard-rain-sunset.webp",
                "title": "Rainy Sunset Pool",
                "caption": "Evening rain ambience showing pool lighting and covered dining usefulness.",
                "sortIndex": 40
              },
              {
                "id": "ext_night_pool",
                "url": "/images/ellamin-courtyard-night-pool.webp",
                "title": "Night Pool Lighting",
                "caption": "Night swim mood with warm pathway lighting and visible house frontage.",
                "sortIndex": 50
              },
              {
                "id": "ext_night_panorama",
                "url": "/images/ellamin-courtyard-night-panorama.webp",
                "title": "Night Panorama",
                "caption": "Full night courtyard panorama with illuminated pool, house, gazebo, pergola, and BBQ bay.",
                "sortIndex": 60
              },
              {
                "id": "ext_night_front",
                "url": "/images/ellamin-courtyard-night-front.webp",
                "title": "Night Front View",
                "caption": "Front-facing night view showing the pathway, house entry, pool, and pergola.",
                "sortIndex": 70
              }
            ],
            "videos": []
          },
          "living": {
            "id": "living",
            "name": "Living Area",
            "sortIndex": 20,
            "photos": [
              {
                "id": "liv_1",
                "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
                "title": "Living area",
                "caption": "Shared space for family time and planning the day.",
                "sortIndex": 10
              }
            ],
            "videos": []
          },
          "bedroom": {
            "id": "bedroom",
            "name": "Bedroom",
            "sortIndex": 30,
            "photos": [
              {
                "id": "bed_1",
                "url": "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80",
                "title": "Bedroom",
                "caption": "Comfortable sleeping arrangement for small groups.",
                "sortIndex": 10
              }
            ],
            "videos": []
          }
        }
      },
      "cards": {
        "group_fit": {
          "id": "group_fit",
          "type": "story",
          "title": "Made for small groups",
          "description": "Clear capacity, parking, and sleeping details before you contact.",
          "visible": true,
          "sortIndex": 10
        },
        "direct_host": {
          "id": "direct_host",
          "type": "story",
          "title": "Direct host request",
          "description": "Send dates and guest count by WhatsApp for a final availability check.",
          "visible": true,
          "sortIndex": 20
        },
        "room_1": {
          "id": "room_1",
          "type": "room",
          "title": "Bedroom 1",
          "description": "Queen bed. Suitable for a small family or friends sharing the stay.",
          "visible": true,
          "sortIndex": 10
        },
        "room_2": {
          "id": "room_2",
          "type": "room",
          "title": "Bedroom 2",
          "description": "Queen bed. Suitable for a small family or friends sharing the stay.",
          "visible": true,
          "sortIndex": 20
        },
        "wifi": {
          "id": "wifi",
          "type": "amenity",
          "title": "Wi-Fi",
          "description": "High-speed internet throughout the property.",
          "visible": true,
          "sortIndex": 10
        },
        "parking": {
          "id": "parking",
          "type": "amenity",
          "title": "Parking",
          "description": "One private resident parking slot included.",
          "visible": true,
          "sortIndex": 20
        },
        "nearby": {
          "id": "nearby",
          "type": "nearby",
          "title": "Kelanang Beach",
          "description": "Scenic coastline just a 10 minutes drive away.",
          "visible": true,
          "sortIndex": 10
        },
        "no_smoking": {
          "id": "no_smoking",
          "type": "rule",
          "title": "No smoking inside",
          "description": "Smoking is strictly prohibited inside the unit.",
          "visible": true,
          "sortIndex": 10
        },
        "faq_availability": {
          "id": "faq_availability",
          "type": "faq",
          "title": "How do I check availability?",
          "answer": "Choose your dates and send a WhatsApp booking request. The host will confirm availability and final rate.",
          "visible": true,
          "sortIndex": 10
        }
      }
    },
    "rates": {
      "plans": {
        "weekday": {
          "id": "weekday",
          "label": "Weekday",
          "price": 200,
          "currency": "MYR",
          "unit": "night",
          "visible": true,
          "estimateOnly": true,
          "note": "Host confirms final rate by date."
        },
        "weekend": {
          "id": "weekend",
          "label": "Weekend",
          "price": 240,
          "currency": "MYR",
          "unit": "night",
          "visible": true,
          "estimateOnly": true,
          "note": "Host confirms final rate by date."
        }
      },
      "fees": {
        "cleaning": {
          "amount": 0,
          "visible": false
        },
        "deposit": {
          "amount": 200,
          "visible": true,
          "refundable": true
        },
        "extraGuest": {
          "amount": 0,
          "visible": false
        }
      }
    },
    "availability": {
      "status": {
        "bookable": true,
        "label": "Available for booking",
        "notice": "",
        "updatedAt": 0
      },
      "blockedDates": {}
    },
    "bookingRequests": {},
    "guestFeedback": {
      "publicReviews": {},
      "privateNotes": {}
    }
  }
};
