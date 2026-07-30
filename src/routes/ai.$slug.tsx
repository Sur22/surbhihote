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
      <article className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 md:py-24">
        <Link
          to="/ai"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> AI Projects
        </Link>

        <header className="mt-10 max-w-3xl">
          <p className="eyebrow text-xs">{project.tags.join(" · ")}</p>
          <h1 className="mt-4 font-serif text-[56px] md:text-[72px] leading-[1.1] text-foreground">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
        </header>

        <div className="mt-12 rounded-2xl border border-border bg-card overflow-hidden">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1600}
            height={1200}
            className="w-full h-auto object-cover"
          />
        </div>

        <section className="mt-14 max-w-3xl">
          <h2 className="font-serif text-2xl text-foreground">Overview</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Placeholder text — a detailed write-up of this project is coming soon.
          </p>
        </section>

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
