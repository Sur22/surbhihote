import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Sparkles } from "lucide-react";
import creatorHubDashboard from "@/assets/creator-hub-dashboard-v2.png.asset.json";
import voyagerWelcome from "@/assets/voyager-welcome.png.asset.json";
import aiExperiments from "@/assets/ai-experiments-card.png.asset.json";

export const Route = createFileRoute("/ai")({
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

const projects = [
  {
    title: "Creator Hub",
    tags: ["CAPSTONE PROJECT", "MIT", "CONCEPT", "AI", "ML", "2026"],
    description:
      "A capstone project from MIT xPRO's Designing and Building AI Products and Services — a platform to post across social media channels at once.",
    image: creatorHubDashboard.url,
    imageAlt: "Creator Hub dashboard mockup",
  },
  {
    title: "Voyager",
    tags: ["AI TRAVEL TOOL", "CONCEPT", "AI FOR UX", "DESIGNLAB 2026"],
    description:
      "An AI travel assistant built end-to-end with generative tools — exploring conversational UI, itinerary generation, and map-based experiences.",
    image: voyagerWelcome.url,
    imageAlt: "Voyager AI travel assistant welcome screen",
  },
  {
    title: "AI Design Experiments",
    tags: ["EXPERIMENTS", "GENERATIVE UI", "AGENTIC FLOWS"],
    description:
      "Ongoing explorations into how LLMs and agentic interfaces change the way we research, prototype, and craft product experiences.",
    image: aiExperiments.url,
    imageAlt: "Abstract neural network visualization for AI design experiments",
  },
];

function AIPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-[1100px] px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
            <Sparkles size={14} />
            <span>New</span>
          </div>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl leading-tight text-foreground">
            Designing with AI
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A space for my explorations at the intersection of product design and
            artificial intelligence — experiments, prototypes, and reflections on
            what it means to design with intelligent systems.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-border bg-card overflow-hidden"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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
            </article>
          ))}
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          More coming soon. In the meantime, feel free to reach out.
        </p>
      </section>
    </SiteLayout>
  );
}
