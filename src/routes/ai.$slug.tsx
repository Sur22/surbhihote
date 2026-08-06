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
