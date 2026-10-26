import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

/* Affiliate only: the "real question" pair from the focus-group blockquote,
   rendered as small azure-bordered cards in the same style as the
   Problems-to-Opportunity and AI-for-Testing flow diagrams — first card,
   arrow, second card. Desktop lays the pair on one line; on phones it
   stacks with a downward arrow. */
const steps = [
  {
    label: "The real question wasn\u2019t",
    text: "\u201cHow do we make the product better?\u201d",
  },
  {
    label: "It was:",
    text: "\u201cHow do we make the product better without breaking the behavior that keeps the business running?\u201d",
  },
];

export function AffiliateRealProblemCards() {
  return (
    <div
      role="list"
      aria-label="The real question"
      className="my-6 flex flex-col gap-y-2.5 max-w-3xl mx-auto"
    >
      {steps.map((step) => (
        <Fragment key={step.label}>
          <div role="listitem" className="flex flex-col items-stretch gap-y-1 md:flex-row md:items-center md:gap-x-1.5">
            <div className="flex-1 rounded-md border border-azure px-3 py-2.5 text-[13px] leading-snug text-foreground">
              <span className="block font-semibold">{step.label}</span>
              <span className="block font-medium">{step.text}</span>
            </div>
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 text-muted-foreground md:block"
              aria-hidden="true"
            />
            <ArrowDown
              className="h-3.5 w-3.5 shrink-0 self-center text-muted-foreground md:hidden"
              aria-hidden="true"
            />
          </div>
        </Fragment>
      ))}
    </div>
  );
}
