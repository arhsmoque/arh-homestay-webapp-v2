# Script Contracts

This pack does not ship executable scripts by default. It defines the script contracts that should be implemented or copied from the frontend design skill when building the app.

## Recommended scripts

```text
generate-design-tokens.sh
generate-tailwind-config.sh
set-theme-mode.sh
set-color-route.sh
set-font-pairing.sh
set-motion-profile.sh
set-media-density.sh
validate-media-registry.mjs
validate-public-style-contract.mjs
audit-accessibility.sh
performance-budget.sh
```

## Required behavior

```yaml
script_contract:
  - validate_input
  - support_dry_run
  - mutate_design_config_when_needed
  - regenerate_derived_files
  - return_compact_JSON
  - provide_next_action_hint
```

## Example output

```json
{
  "status": "success",
  "changed": true,
  "summary": "Motion profile set to calm",
  "evidence": {
    "config": "design.config.json",
    "generated": ["tailwind.config.js", "src/styles/tokens.css"]
  },
  "next_action_hint": "Run pnpm build and scripts/performance-budget.sh"
}
```
