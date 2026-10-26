import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

/* Affiliate only: the six "Problems to Opportunity" pairs rendered as small
   azure-bordered cards in the same style as the AI-for-Testing flow diagram —
   problem card, arrow, opportunity card. Desktop lays each pair on one line;
   on phones the pair stacks with a downward arrow. */
const pairs = [
  {
    problem: "A codebase that couldn't take new functionality",
    opportunity:
      "A foundation built to extend, so the platform can grow instead of freeze again.",
  },
  {
    problem: "Manual refreshing to catch order updates",
    opportunity:
      "The sharpest pain point. Affiliates were reloading the page every few minutes so they wouldn't miss an order or revision. The redesign surfaces changes live, turning a constant manual chore into a system that tells users when something moves.",
  },
  {
    problem: "Dated UI/UX",
    opportunity:
      "Rebuild the experience around how affiliates actually work today, not the conventions of 2005.",
  },
  {
    problem: "Slow and clunky performance",
    opportunity:
      "A modern stack fast enough that the tool gets out of the user's way.",
  },
  {
    problem: "Broken functionalities",
    opportunity:
      "Restore the capabilities affiliates had learned to work around and live without.",
  },
  {
    problem: "Dead features nobody used",
    opportunity:
      "Cut them, and reclaim the space and attention for what matters.",
  },
];

export function AffiliateProblemsOpportunityCards() {
  return (
    <div
      role="list"
      aria-label="Problems to opportunity"
      className="mt-8 flex flex-col gap-y-2.5 max-w-3xl mx-auto"
    >
      {pairs.map((pair) => (
        <Fragment key={pair.problem}>
          <div role="listitem" className="flex flex-col items-stretch gap-y-1 md:flex-row md:items-center md:gap-x-1.5">
            <div className="flex-1 rounded-md border border-azure px-3 py-2.5 text-[13px] font-semibold leading-snug text-foreground">
              {pair.problem}
            </div>
            <ArrowRight
              className="hidden h-3.5 w-3.5 shrink-0 text-muted-foreground md:block"
              aria-hidden="true"
            />
            <ArrowDown
              className="h-3.5 w-3.5 shrink-0 self-center text-muted-foreground md:hidden"
              aria-hidden="true"
            />
            <div className="flex-1 rounded-md border border-azure px-3 py-2.5 text-[13px] font-medium leading-snug text-foreground">
              {pair.opportunity}
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  );
}
