import { ArrowDown, ArrowRight } from "lucide-react";

/* Affiliate only: the "real question" pair from the focus-group blockquote,
   rendered as small azure-bordered cards in the same style as the
   Problems-to-Opportunity and AI-for-Testing flow diagrams — first card,
   arrow, second card. Desktop lays the pair on one line; on phones it
   stacks with a downward arrow. */
export function AffiliateRealProblemCards() {
  return (
    <div
      role="list"
      aria-label="The real question"
      className="my-6 flex flex-col items-stretch gap-y-1 md:flex-row md:items-center md:gap-x-1.5 max-w-3xl mx-auto"
    >
      <div
        role="listitem"
        className="flex-1 self-stretch rounded-md border border-azure px-3 py-2.5 text-[13px] leading-snug text-foreground"
      >
        <span className="block font-semibold">The real question wasn&rsquo;t{"\n\n"}</span>
        <span className="block text-[16px] font-bold">&ldquo;How do we make the product better?&rdquo;</span>
      </div>
      <ArrowRight
        className="hidden h-3.5 w-3.5 shrink-0 text-muted-foreground md:block"
        aria-hidden="true"
      />
      <ArrowDown
        className="h-3.5 w-3.5 shrink-0 self-center text-muted-foreground md:hidden"
        aria-hidden="true"
      />
      <div
        role="listitem"
        className="flex-1 self-stretch rounded-md border border-azure px-3 py-2.5 text-[13px] leading-snug text-foreground"
      >
        <span className="block font-semibold">It was:{"\n\n"}</span>
        <span className="block text-[16px] font-bold">
          &ldquo;How do we make the product better without breaking the behavior that keeps the
          business running?&rdquo;
        </span>
      </div>
    </div>
  );
}
