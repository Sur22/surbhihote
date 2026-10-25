import { ArrowDown, BrainCircuit, CheckCheck, Video } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Input",
    subtitle: "Microsoft Clarity +Microsoft app insights + Power BI Data",
    body: "Session recordings and Microsoft Clarity automatically detects common user actions,I set up custom code-free events in your Clarity dashboard to track specific micro-tasks and interactions. Some of the events / clicks were tracked using Microsoft app insights which is being connected and visualized using Power BI.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted synthesis",
    subtitle: "\n",
    body: "Notes of all the sessions and common points and other important informationacross all the focus groups.",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    body: "Compare the suggested themes with source responses, focus-group findings, and stakeholder evidence before deciding what to prioritize.",
  },
];

export function AiPanelTesting() {
  return (
    <div className="mt-[100px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">AI for Testing </h3>
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
