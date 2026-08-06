import { createFileRoute, notFound } from "@tanstack/react-router";
import { getAIProject } from "@/lib/ai-projects";
import { AIProjectPageContent } from "@/components/AIProjectPageContent";

const SLUG = "creator-hub";

export const Route = createFileRoute("/creator-hub-ai-product-design-case-study")({
  loader: () => {
    const project = getAIProject(SLUG);
    if (!project) throw notFound();
    return { project };
  },
  head: () => ({
    meta: [
      { title: "AI Product Design Case Study: Creator Hub (LLM, RAG, Product Strategy) | Surbhi Hote" },
      { name: "description", content: "An AI product design case study. Creator Hub is an LLM-powered content workspace for social media creators, covering product strategy, retrieval-augmented generation, and AI evaluation." },
      { name: "keywords", content: "AI product design, LLM application design, large language models, retrieval-augmented generation (RAG), generative AI, product strategy, product thinking, business thinking, AI product designer, UX design, AI evaluation, competitive analysis" },
      { property: "og:title", content: "AI Product Design Case Study: Creator Hub (LLM, RAG, Product Strategy) | Surbhi Hote" },
      { property: "og:description", content: "An AI product design case study. Creator Hub is an LLM-powered content workspace for social media creators, covering product strategy, retrieval-augmented generation, and AI evaluation." },
      { property: "og:url", content: "https://surbhihote.com/creator-hub-ai-product-design-case-study" },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Product Design Case Study: Creator Hub (LLM, RAG, Product Strategy) | Surbhi Hote" },
      { name: "twitter:description", content: "An AI product design case study. Creator Hub is an LLM-powered content workspace for social media creators, covering product strategy, retrieval-augmented generation, and AI evaluation." },
    ],
    links: [
      { rel: "canonical", href: "https://surbhihote.com/creator-hub-ai-product-design-case-study" },
    ],
  }),
  component: CreatorHubCaseStudyPage,
});

function CreatorHubCaseStudyPage() {
  const { project } = Route.useLoaderData();
  return <AIProjectPageContent project={project} />;
}
