import { useState } from "react";
import { ArrowDown, BarChart3, BrainCircuit, CheckCheck, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AiResearchQualitativeFlowDiagram } from "@/components/AiResearchQualitativeFlowDiagram";
import { AiTestingFlowDiagram } from "@/components/AiTestingFlowDiagram";

// Belongs to AI for Testing only. Never share or reuse this string in another
// AI panel: each panel keeps its own validation line.
const testingValidationLead =
  "Behavioral evidence → AI-assisted pattern analysis → your validation against event definitions and user feedback.";


const steps = [
  {
    icon: BarChart3,
    title: "Input",
    subtitle: "Microsoft Clarity + Microsoft App Insights + Power BI ",
    body: "Session recordings and Clarity automatically captured common user behaviors, while I set up code-free custom events in Clarity to track specific micro-tasks and interactions. Additional events and clicks were tracked through Microsoft App Insights and connected to Power BI for analysis and visualization",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted synthesis",
    subtitle: "AI Tools - Microsoft Co-pilot + Claude ",
    body: "AI was used to analyze behavioral patterns across session recordings, custom events, interaction data, and usability metrics. It helped identify recurring behaviors, friction points, and potential usability issues across key workflows. For defined micro-tasks, the interaction data was used to measure Task Success Rate ;whether users completed the intended task and reached the defined success event. AI helped analyze successful and unsuccessful interaction patterns, compare task performance, and surface behaviors associated with task failure or friction.",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    lead: testingValidationLead,

    body: "Task success findings and AI-generated patterns were validated against the underlying Clarity session recordings, App Insights events, and Power BI data. I reviewed individual sessions to confirm whether the tracked events represented genuine task completion rather than simply a click or interaction. I then compared the behavioral evidence with usability observations and stakeholder context to prioritize validated issues and design improvements.",
  },
];

export function AiPanelTesting() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-[100px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="ai-testing-panel"
          className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        >
          <span>AI for Testing </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10">
            <ChevronDown
              className={cn(
                "h-4 w-4 text-foreground/70 transition-transform duration-200",
                open && "rotate-180",
              )}
              strokeWidth={2.8}
              aria-hidden="true"
            />
          </span>
        </button>
      </h3>
      {open ? (
        <div
          id="ai-testing-panel"
          className="overflow-hidden rounded-xl border border-azure"
        >
          {steps.map((step, idx) => (
            <div key={step.title} className="relative">
              <div className="flex items-start gap-4 px-6 py-6">
                <div className="w-9 shrink-0 flex justify-center pt-0.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-azure/85">
                    <step.icon className="h-5 w-5 text-azure-foreground" aria-hidden="true" />
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="text-[18px] font-bold leading-snug">{step.title}</h4>
                  {step.subtitle ? (
                    <p className="mt-1 text-sm text-muted-foreground">{step.subtitle}</p>
                  ) : null}
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/85">{step.body}</p>
                  {step.lead ? (
                    <p className="mt-3 text-[15px] font-bold leading-relaxed">{step.lead}</p>
                  ) : null}
                </div>
              </div>
              {idx < 2 ? (
                <div className="step-connector" aria-hidden="true">
                  <ArrowDown className="h-4 w-4 text-foreground/60" />
                </div>
              ) : null}
            </div>
          ))}
          <AiTestingFlowDiagram />
          <AiResearchQualitativeFlowDiagram />
        </div>
      ) : (
        <p className="text-[15px] font-bold leading-relaxed">{testingValidationLead}</p>
      )}
    </div>
  );
}
