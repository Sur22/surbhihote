import { useEffect, useState } from "react";

const baseSections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "strategy", label: "Strategy" },
  { id: "design-process", label: "Design" },
  { id: "testing", label: "Testing" },
  { id: "final-designs", label: "Solution" },
  { id: "impact", label: "Impact" },
];

const slugsWithoutStrategy = new Set(["fjord", "fjord2", "atlas", "atlas2"]);
const slugsWithWorkshop = new Set(["fjord2"]);
const affiliateSlugs = new Set(["fjord", "fjord2"]);

type Section = { id: string; label: string; anchor?: string };

function getSections(slug?: string): Section[] {
  let sections: Section[] = slug && slugsWithoutStrategy.has(slug)
    ? baseSections.filter((s) => s.id !== "strategy")
    : [...baseSections];

  if (slug && slugsWithWorkshop.has(slug)) {
    const researchIdx = sections.findIndex((s) => s.id === "research");
    if (researchIdx !== -1) {
      sections.splice(researchIdx + 1, 0, { id: "workshop", label: "Workshop" });
    }
  }

  if (slug && affiliateSlugs.has(slug)) {
    sections = sections.map((s) => {
      if (s.id === "impact") return { ...s, label: "Reflection" };
      if (s.id === "overview") return { ...s, anchor: "impact" };
      return s;
    });
  }

  return sections;
}

export function CaseStudySideNav({ slug }: { slug?: string }) {
  const sections = getSections(slug);
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "overview");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const update = () => {
      const threshold = window.innerHeight * 0.25;
      let currentId = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - threshold <= 0) {
          currentId = id;
        } else {
          break;
        }
      }
      setActiveId(currentId);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  useEffect(() => {
    const update = () => {
      const start = document.getElementById(sections[0]?.id ?? "overview");
      const end = document.getElementById("case-study-end");
      if (!start || !end) {
        setVisible(false);
        return;
      }
      const startTop = start.getBoundingClientRect().top;
      const endTop = end.getBoundingClientRect().top;
      setVisible(startTop <= 120 && endTop > 120);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [sections]);

  return (
    <nav
      aria-label="Case study sections"
      className={`hidden xl:block fixed top-24 right-[calc(50%+424px)] w-[300px] z-40 transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ul className="space-y-5">
        {sections.map((s) => {
          const targetId = s.anchor ?? s.id;
          const active = activeId === s.id;
          return (
            <li key={s.id} className="flex items-center gap-3">
              <span
                aria-hidden
                className={`h-2 w-2 rounded-full transition-colors ${
                  active ? "bg-accent" : "bg-transparent"
                }`}
              />
              <a
                href={`#${targetId}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(targetId)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`whitespace-nowrap text-xs tracking-[0.18em] uppercase font-semibold transition-colors ${
                  active
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
