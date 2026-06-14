# Tailwind Token Map

Use semantic classes instead of raw values.

```js
theme: {
  extend: {
    fontFamily: {
      display: ["var(--font-display)"],
      sans: ["var(--font-body)"]
    },
    colors: {
      background: {
        page: "var(--color-background-page)",
        warm: "var(--color-background-warm)",
        mist: "var(--color-background-mist)",
        evening: "var(--color-background-evening)"
      },
      surface: {
        card: "var(--color-surface-card)",
        warm: "var(--color-surface-card-warm)",
        evening: "var(--color-surface-card-evening)"
      },
      text: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        inverse: "var(--color-text-inverse)"
      },
      border: {
        subtle: "var(--color-border-subtle)",
        warm: "var(--color-border-warm)"
      },
      action: {
        primary: "var(--color-action-primary)",
        primaryHover: "var(--color-action-primary-hover)",
        secondary: "var(--color-action-secondary)",
        warm: "var(--color-action-warm)"
      },
      proof: {
        pool: "var(--color-proof-pool)",
        layout: "var(--color-proof-layout)",
        event: "var(--color-proof-event)",
        location: "var(--color-proof-location)"
      }
    },
    borderRadius: {
      card: "var(--radius-card)",
      media: "var(--radius-media)",
      button: "var(--radius-button)",
      input: "var(--radius-input)"
    },
    boxShadow: {
      card: "var(--shadow-card)",
      media: "var(--shadow-media)",
      floating: "var(--shadow-floating)"
    }
  }
}
```
