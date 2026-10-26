import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

/* Independent copy of the AI-for-Testing flow diagram, used only by the AI for
   Testing panel below the Affiliate Initial Design image. The original
   AiTestingFlowDiagram (Testing section) is untouched by edits here. */

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

export function AiTestingFlowDiagramInitialCopy() {
  return (
    <div className="overflow-x-auto px-6 pb-6">
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
