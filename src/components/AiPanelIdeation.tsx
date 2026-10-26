import { ArrowDown, BrainCircuit, CheckCheck, Lightbulb } from "lucide-react";

// Same three-step treatment as the other AI panels (Survey, Focus Group,
// Testing), so a new AI section always reads as part of the same family.
// The wording below is placeholder until the real copy arrives.
const steps = [
  {
    icon: Lightbulb,
    title: "Input",
    subtitle: "",
    body: "Sketches from the workshop, the screenshots of the existing software, my ideas.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted synthesis",
    subtitle: "",
    body: "Placeholder — send the wording for this step.",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    body: "Placeholder — send the wording for this step.",
  },
];

export function AiPanelIdeation() {
  return (
    <div>
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">AI for Ideation </h3>
      <div className="overflow-hidden rounded-xl border border-azure">
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
    </div>
  );
}
