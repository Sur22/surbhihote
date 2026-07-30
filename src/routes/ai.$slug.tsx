import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import { getAIProject, aiProjects } from "@/lib/ai-projects";

export const Route = createFileRoute("/ai/$slug")({
  loader: ({ params }) => {
    const project = getAIProject(params.slug);
    if (!project) throw notFound();
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
  const others = aiProjects.filter((p) => p.slug !== project.slug);

  return (
    <SiteLayout>
      <article className="mx-auto max-w-[1080px] px-6 md:px-10 pt-16 md:pt-24 pb-16">
        <Link
          to="/ai"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to AI Projects
        </Link>

        <span className="eyebrow mb-8 inline-block">{project.tags.join(" · ")}</span>
        <h1 className="font-serif text-4xl mb-8 md:text-5xl font-normal">
          {project.title}
        </h1>
        <p className="font-serif text-2xl md:text-4xl leading-[1.15] max-w-4xl text-foreground/85">
          {project.subtitle}
        </p>

        <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
          Placeholder text — a detailed write-up of this project is coming soon.
        </p>


        <section className="mt-20 border-t border-border pt-10">
          <h2 className="font-serif text-2xl text-foreground">More AI projects</h2>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/ai/$slug"
                params={{ slug: p.slug }}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
              >
                {p.title}
              </Link>
            ))}
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
