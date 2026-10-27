import { useState } from "react";
import { ArrowDown, BrainCircuit, CheckCheck, ChevronDown, Video } from "lucide-react";
import { cn } from "@/lib/utils";

// Belongs to AI for Research - Qualitative only. Never share or reuse this
// string in another AI panel: each panel keeps its own validation line.
const focusGroupValidationLead =
  "AI expanded the range of possibilities; I evaluated, refined, and shaped the ideas into the final design.";

const steps = [
  {
    icon: Video,
    title: "Input",
    subtitle: "5 focus group session recordings transcript from Microsoft teams",
    body: "Focus group recordings and a structured set of questions used across five affiliate groups to understand their current workflows, pain points, behaviors, and preferences.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted synthesis",
    subtitle: "AI Tools - Microsoft Co-pilot + Claude , Chat GPT",
    body: "AI was used to analyze session transcripts and notes across all five focus groups to identify recurring themes, common pain points, and other relevant patterns. The findings were consolidated into a list of key issues and cross-referenced with the survey data to identify patterns across both qualitative and quantitative research.",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    lead: focusGroupValidationLead,
    body: "The AI-generated findings were reviewed against my personal focus group notes, stakeholder input, and supporting research evidence. I validated and refined the findings before prioritizing the key issues in collaboration with the Product Manager.",
  },
];

export function AiPanelFocusGroup() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-[100px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">
        <span>AI for Research - Qualitative </span>
      </h3>
      {open ? (
        <div
          id="ai-research-qualitative-panel"
          className="relative overflow-hidden rounded-xl border border-azure"
        >
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="ai-research-qualitative-panel"
            aria-label="Collapse AI for Research - Qualitative"
            className="absolute right-4 top-4 z-10 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-foreground/10"
          >
            <ChevronDown
              className={cn(
                "h-4 w-4 text-foreground/70 transition-transform duration-200",
                open && "rotate-180",
              )}
              strokeWidth={2.8}
              aria-hidden="true"
            />
          </button>
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
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="ai-research-qualitative-panel"
          className="flex w-full cursor-pointer items-center justify-between gap-4 rounded-xl border border-azure px-6 py-6 text-left"
        >
          <span className="block text-[15px] font-bold leading-relaxed">
            {focusGroupValidationLead}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/10">
            <ChevronDown
              className="h-4 w-4 text-foreground/70"
              strokeWidth={2.8}
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </div>
  );
}
