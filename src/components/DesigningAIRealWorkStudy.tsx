import ReactMarkdown from "react-markdown";
import { CaseStudySideNav } from "@/components/CaseStudySideNav";
import document from "@/content/designing-ai-for-real-work.md?raw";
import campaignDataAgentDashboard from "@/assets/advanced-tv-agent-dashboard.png.asset.json";

const sectionIds = ["overview", "knowledge-assistant", "campaign-data-agent", "reflection", "looking-ahead"];
const sections = document.split(/^## /m).slice(1).map((part, index) => {
  const newline = part.indexOf("\n");
  return { id: sectionIds[index], title: part.slice(0, newline).trim(), content: part.slice(newline + 1).replace(/\n---\s*$/u, "").trim() };
});
const navigationLabels = ["Overview", "Knowledge Assistant", "Data Agent", "Reflection", "Looking Ahead"];

export function DesigningAIRealWorkStudy() {
  return (
    <div className="mt-4">
      <CaseStudySideNav sections={sections.map((section, index) => ({ id: section.id, label: navigationLabels[index] }))} />
      <div className="rule" />
      {sections.map((section, index) => (
        <section key={section.id} id={section.id} className={`py-16 md:py-24 scroll-mt-24 ${index < sections.length - 1 ? "border-b border-border" : ""}`}>
          {section.id === "campaign-data-agent" && (
            <img
              src={campaignDataAgentDashboard.url}
              alt="Advanced TV Agent dashboard showing a campaign data chat with a database table and doughnut chart visual summary"
              loading="lazy"
              className="mb-8 w-full rounded-xl border border-border"
            />
          )}
          <h2 className="h2 mb-8">{section.title}</h2>
          <div className="space-y-6">
            <ReactMarkdown components={{
              h3: ({ children }) => <h3 className="h3 pt-6">{children}</h3>,
              p: ({ children }) => <p className="text-lg leading-relaxed text-foreground/85">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              ol: ({ children }) => <ol className="list-decimal pl-6 space-y-4 text-lg leading-relaxed text-foreground/85">{children}</ol>,
              hr: () => <div className="rule" />,
            }}>{section.content}</ReactMarkdown>
          </div>
        </section>
      ))}
    </div>
  );
}