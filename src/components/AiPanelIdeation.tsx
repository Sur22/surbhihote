import { useState } from "react";
import { ArrowDown, BrainCircuit, CheckCheck, ChevronDown, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

// Same three-step treatment as the other AI panels (Survey, Focus Group,
// Testing), so a new AI section always reads as part of the same family.
// The wording below is placeholder until the real copy arrives.
// Belongs to AI for Ideation only. Never share or reuse this string in
// another AI panel: each panel keeps its own validation line.
const ideationValidationLead =
  "AI explored the possibilities. I made the design decisions.";

const steps = [
  {
    icon: Lightbulb,
    title: "Input",
    subtitle: "Workshop sketches + existing interface + design context",
    body: "I used sketches from the workshop, screenshots of the existing software, my initial design ideas, and the project requirements as inputs.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted Ideation",
    subtitle: "AI Tools -\u00a0 Figma Make",
    body: "provided the visual references along with the product context, user needs, requirements, and design constraints. Figma Make helped generate and explore multiple interface concepts and interaction approaches based on the provided context. \nUsed AI as an additional accessibility review layer to identify potential issues with contrast, readability, interaction states, ",
  },
  {
    icon: CheckCheck,
    title: "Designer-Led Synthesis\u00a0",
    subtitle: "",
    lead: ideationValidationLead,
    body: "AI-generated concepts were treated as design inputs, not solutions. I evaluated them against user needs, product constraints, and the existing design system before incorporating and refining relevant ideas into the final experience.I validated the findings against accessibility guidelines and the actual interface before making design decisions.\n\n\n\n",
  },
];

export function AiPanelIdeation() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="ai-ideation-panel"
          className="flex w-full cursor-pointer items-center justify-between gap-4 text-left"
        >
          <span>AI for Ideation </span>
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
          id="ai-ideation-panel"
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
          <p className="text-[15px] font-bold leading-relaxed">{ideationValidationLead}</p>
        </div>
      )}
    </div>
  );
}
