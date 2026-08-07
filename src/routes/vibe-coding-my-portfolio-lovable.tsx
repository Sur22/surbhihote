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
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "TechArticle",
              headline: "Vibe Coding My Portfolio on Lovable",
              description:
                "How a product designer designed and vibe coded a live portfolio on Lovable with Claude Code, Cursor, and Claude Design, using AI across the design process.",
              image:
                "https://surbhihote.com/__l5e/assets-v1/1617daa3-ad1d-4426-99a0-02c578d4a21b/vibe-coded-portfolio-devices.png",
              datePublished: "2026-07-30",
              dateModified: "2026-08-07",
              author: {
                "@type": "Person",
                name: "Surbhi Hote",
                jobTitle: "Product Designer",
                url: "https://surbhihote.com",
                sameAs: ["https://www.linkedin.com/in/surbhihote/"],
                knowsAbout: [
                  "Product Design",
                  "UX Design",
                  "AI-assisted design",
                  "Vibe coding",
                  "Design systems",
                  "Lovable",
                  "Claude Code",
                  "Cursor",
                ],
              },
              keywords:
                "vibe coding, AI-first product designer, designer who can vibe code, AI in the design process, Lovable portfolio, Claude Code, Cursor, Claude Design, design engineer",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can a product designer build a portfolio without a developer?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. I designed and shipped my whole portfolio by vibe coding it on Lovable, then refining in Claude Code and Cursor. The design thinking stays yours while the AI handles the code you'd otherwise hand off.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What is vibe coding, and can designers do it?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vibe coding means building software by describing what you want to an AI agent and steering it, rather than writing every line. Designers are well suited to it, because it is about clear direction and judging the result.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Which AI tools can designers use to design and vibe code?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Lovable to build and host, Claude Design to explore the look, and Claude Code and Cursor for precise control. They share one project through a GitHub repository.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How much does it cost to vibe code a portfolio on Lovable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "I built mine inside a single month of Lovable's Pro plan, around $25, by keeping credit use tight. On the free plan you can finish one for nothing if you are patient.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the downsides of using Lovable?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is fast but not always obedient. It sometimes ignores an instruction or makes unrequested changes, and undoing those costs credits. Committing good versions and moving precise work to Claude Code or Cursor keeps it under control.",
                  },
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  component: VibeCodedPortfolioCaseStudyPage,
});

function VibeCodedPortfolioCaseStudyPage() {
  const { project } = Route.useLoaderData();
  return <AIProjectPageContent project={project} />;
}
