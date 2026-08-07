import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { aiProjects } from "@/lib/ai-projects";

export const Route = createFileRoute("/ai/")({
  head: () => ({
    meta: [
      { title: "AI — Surbhi Hote" },
      { name: "description", content: "Explorations at the intersection of AI and product design — experiments, prototypes, and reflections on designing with intelligent systems." },
      { property: "og:title", content: "AI — Surbhi Hote" },
      { property: "og:description", content: "Explorations at the intersection of AI and product design." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "AI — Surbhi Hote" },
      { name: "twitter:description", content: "Explorations at the intersection of AI and product design." },
    ],
  }),
  component: AIPage,
});

function AIPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="eyebrow mt-[-50px] mb-4 uppercase">PIONEERING THE FUTURE</p>
          <h1 className="font-serif text-[72px] leading-[1.1] text-foreground">
            AI Projects
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A space for my explorations at the intersection of product design and
            artificial intelligence — experiments, prototypes, and reflections on
            what it means to design with intelligent systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {aiProjects.map((project) => (
          <Link
              key={project.title}
              to={project.path ?? "/ai/$slug"}
              params={project.path ? undefined : { slug: project.slug }}
              className="group rounded-2xl border border-border bg-card overflow-hidden block"
            >
              <div className="overflow-hidden aspect-[4/3] flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className={`transition-transform duration-700 group-hover:scale-[1.03] ${
                    project.title === "Creator Hub"
                      ? "object-cover w-[80%] h-[80%] rounded-lg"
                      : project.title === "Voyager"
                        ? "object-cover w-[20%] h-[20%] rounded-lg"
                        : project.title === "Vibe Coded Portfolio"
                        ? "object-contain w-full h-full p-4"
                        : "object-cover w-full h-full"
                  }`}
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="eyebrow text-xs">
                  {project.tags.join(" · ")}
                </span>
                <h2 className="mt-3 font-serif text-2xl text-foreground">
                  {project.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          More coming soon. In the meantime, feel free to reach out.
        </p>
      </section>
    </SiteLayout>
  );
}
