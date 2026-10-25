import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    title: "Behavioral Data",
    detail: "Clarity + App Insights + Power BI",
  },
  {
    title: "AI-Assisted Analysis",
    detail: "Patterns → Friction → Anomalies → Usability hypotheses",
  },
  {
    title: "Human Validation",
    detail: "Session review → Data verification → Stakeholder context",
  },
  {
    title: "Design Decision",
    detail: "Prioritize → Iterate → Retest",
  },
];

/* Affiliate AI-for-Research (Qualitative): the same one-line flow used by the
   AI-for-Testing panel — small unfilled cards with azure outlines joined by
   arrows, each carrying a stage name and its detail. On phones the line keeps
   its size and slides sideways instead of wrapping. */
export function AiResearchQualitativeFlowDiagram() {
  return (
    <div className="overflow-x-auto px-6 pb-6">
      <ul
        role="list"
        aria-label="Research flow from behavioral data to design decision"
        className="flex list-none flex-nowrap items-stretch gap-x-1.5"
      >
        {stages.map((stage, idx) => (
          <Fragment key={stage.title}>
            <li className="flex min-h-[76px] min-w-[150px] basis-0 flex-1 flex-col items-center justify-center gap-1 rounded-md border border-azure px-2 py-2 text-center">
              <span className="text-[12px] font-semibold leading-tight text-foreground">
                {stage.title}
              </span>
              <span className="text-[11px] leading-tight text-muted-foreground">
                {stage.detail}
              </span>
            </li>
            {idx < stages.length - 1 ? (
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 self-center text-muted-foreground"
                aria-hidden="true"
              />
            ) : null}
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
