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

/* Affiliate Testing: the AI-for-Testing flow as small cards joined by arrows.
   Layout and the arrow rules live in .flow-diagram in src/styles.css. */
export function AiTestingFlowDiagram() {
  return (
    <div className="mt-10">
      <ul
        role="list"
        aria-label="Testing flow from custom events to retest"
        className="flow-diagram list-none rounded-xl border border-border bg-card px-6 py-8"
      >
        {stages.map((stage) => (
          <li
            key={stage}
            className="relative flex min-h-[84px] items-center justify-center rounded-lg border border-border bg-background px-4 py-3 text-center text-sm font-medium leading-snug text-foreground"
          >
            {stage}
            <span className="flow-arrow" aria-hidden="true">
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
