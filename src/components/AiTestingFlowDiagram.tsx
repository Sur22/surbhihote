import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

const stages = [
  "Custom Events",
  "Task Completion Data",
  "Task Success Rate",
  "AI identifies behavioral patterns",
  "Designer validates against recordings",
  "Usability insight",
  "Design iteration",
  "Retest",
];

/* Affiliate Testing: the AI-for-Testing flow as small cards joined by arrows.
   Cards sit side by side and wrap onto a new line when the row fills; on phones
   each card takes a full line and the connector turns to point downward. */
export function AiTestingFlowDiagram() {
  return (
    <div className="mt-10">
      <div
        role="list"
        aria-label="Testing flow from custom events to retest"
        className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 rounded-xl border border-border bg-card px-6 py-8"
      >
        {stages.map((stage, idx) => (
          <Fragment key={stage}>
            <div
              role="listitem"
              className="flex min-h-[72px] w-full items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-center text-sm font-medium leading-snug text-foreground sm:w-[160px]"
            >
              {stage}
            </div>
            {idx < stages.length - 1 ? (
              <>
                <ArrowDown
                  className="h-4 w-4 shrink-0 text-muted-foreground sm:hidden"
                  aria-hidden="true"
                />
                <ArrowRight
                  className="hidden h-4 w-4 shrink-0 text-muted-foreground sm:block"
                  aria-hidden="true"
                />
              </>
            ) : null}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
