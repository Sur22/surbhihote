import { useState } from "react";
import { ArrowDown, BrainCircuit, CheckCheck, ChevronDown, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

// Belongs to AI for Research - Quantitative only. Never share or reuse this
// string in another AI panel: each panel keeps its own validation line.
const surveyValidationLead =
  "Research data fed into AI to synthesized themes , I verified and prioritize the themes.";

const steps = [
  {
    icon: FileText,
    title: "Input",
    subtitle: "128 affiliate survey responses +Survey Monkey data",
    body: "Open-ended feedback about speed, order revisions, broken functionality, and manual workarounds.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted synthesis",
    subtitle: "AI Tools -  Claude , Chat GPT",
    body: "Cluster responses into candidate themes and identify patterns for further investigation.",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    lead: surveyValidationLead,
    body: "Compare the suggested themes with source responses, focus-group findings, and stakeholder evidence before deciding what to prioritize.",
  },
];

export function AiPanelSurvey() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-[100px] mb-[30px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="ai-research-quantitative-panel"
          className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        >
          <span>AI for Research - Quantitative </span>
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
          id="ai-research-quantitative-panel"
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
        </div>
      ) : (
        <div className="rounded-xl border border-azure px-6 py-6">
          <p className="text-[15px] font-bold leading-relaxed">{surveyValidationLead}</p>
        </div>
      )}
    </div>
  );
}
