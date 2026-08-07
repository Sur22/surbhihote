import { useEffect, useState } from "react";
import { ClientOnly } from "@tanstack/react-router";
import { PdfViewer } from "@/components/PdfViewer";
import { ImageViewer } from "@/components/ImageViewer";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { aiProjects, type AIProject } from "@/lib/ai-projects";
import { CreatorHubStudy } from "@/components/CreatorHubStudy";
import { VibeCodedPortfolioStudy } from "@/components/VibeCodedPortfolioStudy";
import { VoyagerStudy } from "@/components/VoyagerStudy";

export function AIProjectPageContent({ project }: { project: AIProject }) {
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
      <ScrollProgress />
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
        ) : project.slug === "voyager" ? (
          <p className="mt-10 text-lg leading-relaxed text-foreground/85 max-w-3xl">
            Design lab AI for UI Project: designing a travel AI product end to
            end, using AI at every stage.
          </p>
        ) : (
          <p className="mt-10 text-lg leading-relaxed text-foreground/85 max-w-3xl">
            AI Resources of Product Designers and UI UX Designers&nbsp;
          </p>
        )}

        <figure
          className={
            project.slug === "creator-hub" || project.slug === "voyager"
              ? "mt-12 overflow-hidden rounded-xl"
              : "mt-12 overflow-hidden rounded-xl border border-border bg-muted/30"
          }
        >
          <img
            src={project.image}
            alt={project.imageAlt}
            loading="lazy"
            className={
              project.slug === "voyager"
                ? "w-1/2 max-w-[265px] mx-auto h-auto"
                : project.slug === "creator-hub"
                  ? ""
                  : "w-full h-auto object-cover"
            }
          />
        </figure>

        {project.slug === "resources" && (
          <section className="mt-12">
            <p className="eyebrow mb-6">Articles & Templates</p>
            <div className="border-t border-border">
              {[
                "Adopting AI in the design process",
                "Prompt Library Template",
                "AI tools For UX Process",
                "Tool request form",
                "Pilot evaluation template",
              ].map((title) => (
                <a
                  key={title}
                  href="#"
                  className="group flex items-center justify-between gap-4 border-b border-border py-5 transition-colors hover:bg-muted/30"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="flex h-12 w-9 shrink-0 items-center justify-center rounded bg-muted/50 border border-border">
                      <FileText size={20} className="text-muted-foreground" />
                    </div>
                    <span className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-accent transition-colors truncate">
                      {title}
                    </span>
                  </div>
                  <Download
                    size={20}
                    className="shrink-0 text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </a>
              ))}
            </div>
          </section>
        )}

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
        ) : project.slug === "voyager" ? (
          <VoyagerStudy />
        ) : project.slug === "vibe-coded-portfolio" ? (
          <VibeCodedPortfolioStudy />
        ) : (
          <p className="mt-10 text-muted-foreground leading-relaxed max-w-3xl">
            More details, process notes, and outcomes for this project will be shared here soon.
          </p>
        )}

        {/*
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
        */}

        <section className="mt-20 border-t border-border">
          <div className="pt-20 pb-10">
            <p className="eyebrow mb-10">More AI projects</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to={p.path ?? "/ai/$slug"}
                  params={p.path ? undefined : { slug: p.slug }}
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
