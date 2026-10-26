import { ArrowDown, BarChart3, BrainCircuit, CheckCheck } from "lucide-react";
import { AiResearchQualitativeFlowDiagramInitialCopy } from "@/components/AiResearchQualitativeFlowDiagramInitialCopy";

/* Independent copy of the AI for Testing panel for its placement below the
   Affiliate Initial Design image. Nothing is shared with the Testing-section
   panel: its own step copy, its own flow diagrams, so an edit to either
   placement never affects the other. */

const steps = [
  {
    icon: BarChart3,
    title: "Input",
    subtitle: "Context + Tone defined in the prompt ",
    body: "For microcopy (CTA's, error messeges, tooltips, placholder text) you need to define clear parameters for instance describe a specific task for which the microcopy is being generated. Keep it user centered to show empathy and reassurance builds user trust for the system.",
  },
  {
    icon: BrainCircuit,
    title: "AI-generated microcopy",
    subtitle: "AI Tools - Chat GPT + Claude",
    body: "AI was used to analyze the tone understand the context and generate the options. ",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    body: "Check the tone and if it user ceneterd, empathetic and able to build the trust for user to feel ",
  },
];

export function AiPanelTestingInitialCopy() {
  return (
    <div className="mt-[100px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">AI for UX Writing&nbsp;</h3>
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
        <AiResearchQualitativeFlowDiagramInitialCopy />
      </div>
    </div>
  );
}
