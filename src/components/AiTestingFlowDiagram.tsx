import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

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

/* Affiliate Testing: the AI-for-Testing flow as one line of small, unfilled
   cards joined by arrows. The cards share the width on desktop; on phones the
   line keeps its size and slides sideways instead of wrapping. */
export function AiTestingFlowDiagram() {
  return (
    <div className="mt-10 -mx-6 overflow-x-auto px-6 pb-2 md:-mx-10 md:px-10">
      <ul
        role="list"
        aria-label="Testing flow from custom events to retest"
        className="flex list-none flex-nowrap items-center gap-x-1.5"
      >
        {stages.map((stage, idx) => (
          <Fragment key={stage}>
            <li className="flex min-h-[76px] min-w-[92px] basis-0 flex-1 items-center justify-center rounded-md border border-azure px-2 py-2 text-center text-[11px] font-medium leading-tight text-foreground">
              {stage}
            </li>
            {idx < stages.length - 1 ? (
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                aria-hidden="true"
              />
            ) : null}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
