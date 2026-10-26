/* Affiliate only: the six "Problems to Opportunity" pairs. Each pair now lives
   inside one azure-bordered card — the problem on top, a thin line, then the
   opportunity below — and the cards run three to a row on wide screens, two on
   tablets, one on phones. Cards keep their own height unless a pair asks to
   match its row with `stretch: true`. */
const pairs = [
  {
    problem: "A codebase that couldn't take new functionality",
    opportunity:
      "A foundation built to extend, so the platform can grow instead of freeze again.",
    stretch: false,
  },
  {
    problem: "Manual refreshing to catch order updates",
    opportunity:
      "The sharpest pain point. Affiliates were reloading the page every few minutes so they wouldn't miss an order or revision. The redesign surfaces changes live, turning a constant manual chore into a system that tells users when something moves.",
    stretch: false,
  },
  {
    problem: "Dated UI/UX",
    opportunity:
      "Rebuild the experience around how affiliates actually work today, not the conventions of 2005.",
    stretch: false,
  },
  {
    problem: "Slow and clunky performance",
    opportunity:
      "A modern stack fast enough that the tool gets out of the user's way.",
    stretch: true,
  },
  {
    problem: "Broken functionalities",
    opportunity:
      "Restore the capabilities affiliates had learned to work around and live without.",
    stretch: true,
  },
  {
    problem: "Dead features nobody used",
    opportunity:
      "Cut them, and reclaim the space and attention for what matters.",
    stretch: true,
  },
];

export function AffiliateProblemsOpportunityCards() {
  return (
    <div
      role="list"
      aria-label="Problems to opportunity"
      className="mt-8 grid grid-cols-1 items-start gap-2.5 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto"
    >
      {pairs.map((pair) => (
        <div
          key={pair.problem}
          role="listitem"
          className={`flex flex-col rounded-md border border-azure px-3 py-2.5${
            pair.stretch ? " self-stretch" : ""
          }`}
        >
          <p className="flex min-h-[36px] items-center text-[16px] font-bold leading-snug text-foreground">
            {pair.problem}
          </p>
          <div
            aria-hidden="true"
            className="my-2 h-px w-full shrink-0 bg-azure/30"
          />
          <p className="text-[16px] font-medium leading-snug text-foreground">
            {pair.opportunity}
          </p>
        </div>
      ))}
    </div>
  );
}
