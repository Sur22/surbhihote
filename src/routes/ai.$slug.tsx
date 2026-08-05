import { useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { PdfViewer } from "@/components/PdfViewer";
import { ImageViewer } from "@/components/ImageViewer";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ArrowLeft } from "lucide-react";
import { getAIProject, aiProjects } from "@/lib/ai-projects";
import { CreatorHubStudy } from "@/components/CreatorHubStudy";

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
  const [activePdf, setActivePdf] = useState(project.pdfs?.[0]?.url ?? project.pdfUrl);
  useEffect(() => {
    setActivePdf(project.pdfs?.[0]?.url ?? project.pdfUrl);
  }, [project.slug]);
  const activeEntry = project.pdfs?.find((pdf: { url: string }) => pdf.url === activePdf);
  const activePdfLabel = activeEntry?.label ?? "";
  const activeImages = activeEntry?.images;
  const isPitchDeck = activePdfLabel.toLowerCase().includes("pitch deck");
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

        <span className="eyebrow mb-8 block">{project.tags.join(" · ")}</span>
        <h1 className="font-serif text-4xl mb-8 md:text-5xl font-normal">
          {project.title}
        </h1>
        <p className="font-serif text-2xl md:text-4xl leading-[1.15] max-w-4xl text-foreground/85">
          {project.subtitle}
        </p>

        {project.slug === "creator-hub" ? (
          <p className="mt-10 text-lg leading-relaxed text-foreground/85 max-w-3xl">
            <strong>Creator Hub</strong> An AI-assisted workspace that helps
            social media creators plan, repurpose, and optimize content across
            platforms, without drowning in tools.
          </p>
        ) : (
          <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
            Placeholder text — a detailed write-up of this project is coming soon.
          </p>
        )}

        <figure className="mt-12 overflow-hidden rounded-xl border border-border bg-muted/30">
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </figure>

        {(project.role || project.timeframe || project.tools || project.tasksPerformed) && (
          <section className="mt-10 pb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8">
              {[
                { k: "Role", v: project.role },
                { k: "Timeframe", v: project.timeframe },
                { k: "Tools", v: project.tools },
                { k: "Tasks Performed", v: project.tasksPerformed },
              ]
                .filter((m) => m.v)
                .map((m) => (
                  <div key={m.k}>
                    <p className="eyebrow mb-2 font-bold">{m.k}</p>
                    <p className="text-base leading-relaxed text-foreground/85 whitespace-pre-line">
                      {m.v}
                    </p>
                  </div>
                ))}
            </div>
          </section>
        )}

        {project.slug === "creator-hub" ? (
          <CreatorHubStudy />
        ) : (
          <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
            More details, process notes, and outcomes for this project will be shared here soon.
          </p>
        )}

        {project.pdfUrl && (
          <section className="mt-14">
            <h2 className="font-serif text-2xl md:text-3xl mb-6">Case study PDF</h2>
            {project.pdfs && project.pdfs.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.pdfs.map((pdf: { label: string; url: string }) => (
                  <button
                    key={pdf.url}
                    type="button"
                    onClick={() => setActivePdf(pdf.url)}
                    className={`rounded-full border px-4 py-2 text-xs md:text-sm transition-colors ${
                      activePdf === pdf.url
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/25 text-foreground/80 hover:border-foreground/60 hover:text-foreground"
                    }`}
                  >
                    {pdf.label}
                  </button>
                ))}
              </div>
            )}
            <ClientOnly fallback={<div className="w-full h-[600px] rounded-xl border border-border bg-muted/30" />}>
              {activeImages && activeImages.length > 0 ? (
                <ImageViewer key={activePdf} images={activeImages} title={project.title} />
              ) : (
                <PdfViewer
                  key={activePdf}
                  url={activePdf!}
                  title={project.title}
                  scale={isPitchDeck ? 1.4 : undefined}
                  hideSlider={isPitchDeck}
                />
              )}
            </ClientOnly>
            <a
              href={activePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Open PDF in new tab
            </a>
          </section>
        )}

        <section className="mt-20 border-t border-border">
          <div className="pt-20 pb-10">
            <p className="eyebrow mb-10">More AI projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/ai/$slug"
                  params={{ slug: p.slug }}
                  className="group block"
                >
                  <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors whitespace-nowrap">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </SiteLayout>
  );
}
