import { ArrowDown, BrainCircuit, CheckCheck, Video } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Input",
    subtitle: "5 focus group session recordings transcript",
    body: "Focus group recordings and a structured set of questions used across five affiliate groups to understand their current workflows, pain points, behaviors, and preferences.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted synthesis",
    subtitle: "AI Tools - Microsoft Co-pilot + Claude",
    body: "AI was used to analyze session transcripts and notes across all five focus groups to identify recurring themes, common pain points, and other relevant patterns. The findings were consolidated into a list of key issues and cross-referenced with the survey data to identify patterns across both qualitative and quantitative research.",
  },
  {
    icon: CheckCheck,
    title: "Designer validation",
    subtitle: "",
    body: "The AI-generated findings were reviewed against my personal focus group notes, stakeholder input, and supporting research evidence. I validated and refined the findings before prioritizing the key issues in collaboration with the Product Manager.",
  },
];

export function AiPanelFocusGroup() {
  return (
    <div className="mt-[100px]">
      <h3 className="font-serif text-2xl md:text-3xl mb-6 font-normal">AI for Research - Qualitative </h3>
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
