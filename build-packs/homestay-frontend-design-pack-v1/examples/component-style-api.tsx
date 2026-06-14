type OccasionFitCardVariant = "family" | "pool" | "event" | "corporate";

type OccasionFitCardProps = {
  variant: OccasionFitCardVariant;
  title: string;
  bestFor: string;
  proofChips: string[];
  href: string;
  ctaLabel: string;
};

const occasionVariantClass: Record<OccasionFitCardVariant, string> = {
  family: "border-border-warm",
  pool: "border-proof-pool",
  event: "border-proof-event",
  corporate: "border-background-evening"
};

export function OccasionFitCard(props: OccasionFitCardProps) {
  return (
    <a
      href={props.href}
      className={[
        "block rounded-card bg-surface-card p-5 md:p-7 shadow-card",
        "border transition-transform duration-200",
        "hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-3",
        "focus-visible:outline-offset-4 focus-visible:outline-[var(--color-focus-ring)]",
        occasionVariantClass[props.variant]
      ].join(" ")}
    >
      <h3 className="font-sans text-xl font-semibold text-text-primary">
        {props.title}
      </h3>
      <p className="mt-2 text-text-secondary">{props.bestFor}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {props.proofChips.map((chip) => (
          <span
            key={chip}
            className="rounded-button border border-border-warm bg-surface-card px-3 py-1 text-sm font-semibold text-text-primary"
          >
            {chip}
          </span>
        ))}
      </div>
      <span className="mt-5 inline-flex font-semibold text-action-primary">
        {props.ctaLabel}
      </span>
    </a>
  );
}
