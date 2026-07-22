import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Sparkles, Bot, Wand2 } from "lucide-react";

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

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border p-6 md:p-8 bg-card">
            <Bot size={22} className="text-foreground" />
            <h2 className="mt-4 font-serif text-2xl text-foreground">AI-assisted workflows</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              How I use LLMs and generative tools inside my design process — from
              research synthesis to rapid prototyping and content generation.
            </p>
          </article>

          <article className="rounded-2xl border border-border p-6 md:p-8 bg-card">
            <Wand2 size={22} className="text-foreground" />
            <h2 className="mt-4 font-serif text-2xl text-foreground">Experiments & prototypes</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Small projects exploring conversational UI, agentic flows, and the
              patterns emerging around AI-native products.
            </p>
          </article>
        </div>

        <p className="mt-16 text-sm text-muted-foreground">
          More coming soon. In the meantime, feel free to reach out.
        </p>
      </section>
    </SiteLayout>
  );
}
