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
      const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://surbhihote.com/#surbhihote",
            name: "Surbhi Hote",
            url: "https://surbhihote.com/",
            jobTitle: "Product Designer",
            description:
              "Product designer with 8 years of experience and the sole UI/UX designer at Ampersand, where she defined the team's AI adoption approach and design processes.",
            worksFor: { "@type": "Organization", name: "Ampersand" },
            sameAs: ["https://www.linkedin.com/in/surbhihote/"],
          },
          {
            "@type": "CollectionPage",
            "@id": "https://surbhihote.com/ai/resources#page",
            url: "https://surbhihote.com/ai/resources",
            name: "AI Resources for Product Designers",
            description:
              "A curated library of AI design tools, prompt patterns, templates, and workflows for product and UI/UX designers.",
            author: { "@id": "https://surbhihote.com/#surbhihote" },
            creator: { "@id": "https://surbhihote.com/#surbhihote" },
            datePublished: "2026-01-01",
            dateModified: "2026-08-12",
            about: ["AI in design", "UX design tools", "Design process", "Prompt engineering for designers"],
            mainEntity: { "@id": "https://surbhihote.com/ai/resources#resource-list" },
          },
          {
            "@type": "ItemList",
            "@id": "https://surbhihote.com/ai/resources#resource-list",
            name: "AI resources for designers",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "DigitalDocument",
                  name: "Adopting AI in the Design Process",
                  description:
                    "A step-by-step guide for product teams bringing AI into research, ideation, and delivery as a repeatable process.",
                  url: "https://surbhihote.com/__l5e/assets-v1/ff74ad64-fe2e-42bb-91bd-961e867adce7/Adopting-AI-in-the-Design-Process-a-guide-_for_product_teams.pdf",
                  author: { "@id": "https://surbhihote.com/#surbhihote" },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "DigitalDocument",
                  name: "AI Tools for the UX Process",
                  description:
                    "A reference map of the AI tools used across research, ideation, prototyping, and handoff, with what each one is good for.",
                  url: "https://surbhihote.com/__l5e/assets-v1/5f7c3a2b-0e0e-4e0a-b36e-6d4ecf54721a/AI-Tools-for-the-Design-Process.pdf",
                  author: { "@id": "https://surbhihote.com/#surbhihote" },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "DigitalDocument",
                  name: "Prompt Library Template",
                  description:
                    "A copy-and-adapt prompt library structured by task, so designers reuse the prompts that work instead of starting from scratch.",
                  url: "https://surbhihote.com/__l5e/assets-v1/99ce8034-e9bb-46a6-9529-902f48591e17/Prompt-Library-Template.zip",
                  author: { "@id": "https://surbhihote.com/#surbhihote" },
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "DigitalDocument",
                  name: "AI Guardrails for Design",
                  description:
                    "A framework for setting boundaries on AI use in design work: where to trust output, where a human stays in the loop.",
                  url: "https://surbhihote.com/__l5e/assets-v1/db158e64-4555-4862-8f76-9cb395c05980/AI-Guardrails-for-the-Design-Process.docx",
                  author: { "@id": "https://surbhihote.com/#surbhihote" },
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "DigitalDocument",
                  name: "AI Governance for Design Teams",
                  description:
                    "A guide to governing AI adoption across a design team: approved tools, data and privacy, and consistent practice at scale.",
                  url: "https://surbhihote.com/__l5e/assets-v1/aa4b67b4-e309-434f-b1b5-acb821850f89/AI-Governance-for-Design-Teams.docx",
                  author: { "@id": "https://surbhihote.com/#surbhihote" },
                },
              },
            ],
          },
        ],
      };
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
        scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
      };
    }

    const title = `${project.title} — AI Projects — Surbhi Hote`;
    const url = `https://surbhihote.com/ai/${project.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: project.description },
        { property: "og:title", content: title },
        { property: "og:description", content: project.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: project.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: project.title,
            description: project.description,
            url,
            author: { "@type": "Person", name: "Surbhi Hote", url: "https://surbhihote.com/about" },
            about: project.tags,
            mainEntityOfPage: url,
          }),
        },
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
