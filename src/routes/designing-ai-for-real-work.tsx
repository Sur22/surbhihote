import { createFileRoute, notFound } from "@tanstack/react-router";
import { getAIProject } from "@/lib/ai-projects";
import { AIProjectPageContent } from "@/components/AIProjectPageContent";

export const Route = createFileRoute("/designing-ai-for-real-work")({
  loader: () => {
    const project = getAIProject("designing-ai-for-real-work");
    if (!project) throw notFound();
    return { project };
  },
  head: () => ({
    meta: [
      { title: "Designing AI for Real Work | Surbhi Hote" },
      { name: "description", content: "Two internal AI experiences at Ampersand: a document-grounded knowledge assistant and a campaign data agent, designed for trust, clarity, and actionable information." },
      { property: "og:title", content: "Designing AI for Real Work | Surbhi Hote" },
      { property: "og:description", content: "Designing trustworthy AI experiences at Ampersand through source citations, natural-language queries, and structured data visualizations." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://surbhihote.com/designing-ai-for-real-work" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://surbhihote.com/designing-ai-for-real-work" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "Article", headline: "Designing AI for Real Work",
      description: "Two internal AI experiences focused on trust, clarity, and making complex information actionable.",
      url: "https://surbhihote.com/designing-ai-for-real-work",
      author: { "@type": "Person", name: "Surbhi Hote", url: "https://surbhihote.com/about" },
      about: ["AI Product Design", "Conversational Interfaces", "Human-AI Interaction", "Data Visualization"],
    }) }],
  }),
  component: DesigningAIRealWorkPage,
});

function DesigningAIRealWorkPage() {
  const { project } = Route.useLoaderData();
  return <AIProjectPageContent project={project} />;
}