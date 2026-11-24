import { ArrowDown, ArrowRight } from "lucide-react";

/* Affiliate copy only: the "real question" pair from the focus-group
   blockquote, now held inside one azure-bordered card — first question,
   arrow, second question. Desktop keeps the pair on one line with the
   arrow between them; on phones the texts stack with a downward arrow. */
export function AffiliateRealProblemCardsCopy() {
  return (
    <div
      role="list"
      aria-label="The real question"
      className="my-6 w-full rounded-md border border-azure px-3 py-2.5 text-[13px] leading-snug text-foreground"
    >
      <div className="flex flex-col items-stretch gap-y-1 md:flex-row md:items-center md:gap-x-3">
        <div role="listitem" className="flex flex-1 flex-col justify-center">
          <span className="block font-semibold">The real question wasn&rsquo;t</span>
          <span className="block text-[16px] font-bold">&ldquo;How do we make the product better?&rdquo;</span>
        </div>
        <ArrowRight
          strokeWidth={2.75}
          className="hidden h-5 w-5 shrink-0 self-center text-foreground md:block"
          aria-hidden="true"
        />
        <ArrowDown
          strokeWidth={2.75}
          className="h-5 w-5 shrink-0 self-center text-foreground md:hidden"
          aria-hidden="true"
        />
        <div role="listitem" className="flex flex-1 flex-col justify-center">
          <span className="block font-semibold">It was:</span>
          <span className="block text-[16px] font-bold">
            &ldquo;How do we make the product better without breaking the behavior that keeps the
            business running?&rdquo;
          </span>
        </div>
      </div>
    </div>
  );
}
