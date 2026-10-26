import { ArrowDown, BrainCircuit, CheckCheck, FileText } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Input",
    subtitle: "128 affiliate survey responses",
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
    lead: "AI generated the options. I defined what was appropriate for the user.",
    body: "Compare the suggested themes with source responses, focus-group findings, and stakeholder evidence before deciding what to prioritize.",
  },
];

export function AiPanelSurvey() {
  return (
    <div className="mt-[100px] mb-[30px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">AI for Research - Quantitative </h3>
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
    </div>
  );
}
