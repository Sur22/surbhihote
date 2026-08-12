import { createFileRoute, Link, notFound, redirect } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getAIProject } from "@/lib/ai-projects";
import { AIProjectPageContent } from "@/components/AIProjectPageContent";

export const Route = createFileRoute("/ai/$slug")({
  loader: ({ params }) => {
    const project = getAIProject(params.slug);
    if (!project) throw notFound();
    if (project.path) {
      throw redirect({ to: project.path });
    }
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Not found — Surbhi Hote" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { project } = loaderData;

    if (project.slug === "resources") {
      return {
        meta: [
          { title: "AI Resources for Product Designers: Tools, Prompts and Templates | Surbhi Hote" },
          { name: "description", content: "A curated library of AI design tools, prompt patterns, templates, and workflows for product and UI/UX designers who want to prototype and ship faster." },
          { property: "og:title", content: "AI Resources for Product Designers: Tools, Prompts and Templates" },
          { property: "og:description", content: "A curated library of AI design tools, prompt patterns, templates, and workflows for product and UI/UX designers who want to prototype and ship faster." },
          { property: "og:type", content: "article" },
          { property: "og:url", content: "https://surbhihote.com/ai/resources" },
          { property: "og:image", content: "https://surbhihote.com/ai/resources-og.png" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:title", content: "AI Resources for Product Designers" },
          { name: "twitter:description", content: "A curated library of AI design tools, prompt patterns, templates, and workflows for product and UI/UX designers." },
          { name: "twitter:image", content: "https://surbhihote.com/ai/resources-og.png" },
          { name: "twitter:site", content: "@your_handle" },
        ],
        links: [{ rel: "canonical", href: "https://surbhihote.com/ai/resources" }],
      };
    }

    const title = `${project.title} — AI Projects — Surbhi Hote`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.description },
      ],
    };
  },
  notFoundComponent: AIProjectNotFound,
  component: AIProjectPage,
});

function AIProjectNotFound() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-28">
        <h1 className="font-serif text-4xl text-foreground">Project not found</h1>
        <Link to="/ai" className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground transition-colors">
          Back to AI Projects
        </Link>
      </section>
    </SiteLayout>
  );
}

function AIProjectPage() {
  const { project } = Route.useLoaderData();
  return <AIProjectPageContent project={project} />;
}
