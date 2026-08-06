import { createFileRoute, notFound } from "@tanstack/react-router";
import { getAIProject } from "@/lib/ai-projects";
import { AIProjectPageContent } from "@/components/AIProjectPageContent";

const SLUG = "vibe-coded-portfolio";

export const Route = createFileRoute("/vibe-coding-my-portfolio-lovable")({
  loader: () => {
    const project = getAIProject(SLUG);
    if (!project) throw notFound();
    return { project };
  },
  head: () => ({
    meta: [
      { title: "Vibe Coding My Portfolio on Lovable | AI-First Design" },
      { name: "description", content: "How I designed and vibe coded my portfolio on Lovable with Claude Code, Cursor, and Claude Design. A product designer using AI across the design process, on a budget." },
      { name: "keywords", content: "vibe coding, vibe coder, AI-first product designer, designer who can vibe code, AI in the design process, AI-assisted design, design engineer, Lovable portfolio, Claude Code, Cursor, Claude Design, prototype with AI, ship UI without engineering, UX UI designer AI tools" },
      { property: "og:title", content: "Vibe Coding My Portfolio on Lovable | AI-First Design" },
      { property: "og:description", content: "How I designed and vibe coded my portfolio on Lovable with Claude Code, Cursor, and Claude Design. A product designer using AI across the design process, on a budget." },
      { property: "og:url", content: "https://surbhihote.com/vibe-coding-my-portfolio-lovable" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Vibe Coding My Portfolio on Lovable | AI-First Design" },
      { name: "twitter:description", content: "How I designed and vibe coded my portfolio on Lovable with Claude Code, Cursor, and Claude Design. A product designer using AI across the design process, on a budget." },
    ],
    links: [
      { rel: "canonical", href: "https://surbhihote.com/vibe-coding-my-portfolio-lovable" },
    ],
  }),
  component: VibeCodedPortfolioCaseStudyPage,
});

function VibeCodedPortfolioCaseStudyPage() {
  const { project } = Route.useLoaderData();
  return <AIProjectPageContent project={project} />;
}
