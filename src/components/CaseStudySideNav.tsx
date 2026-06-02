import { useEffect, useState } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "strategy", label: "Strategy" },
  { id: "design-process", label: "Design Process" },
  { id: "testing", label: "Testing" },
  { id: "impact", label: "Impact & Learnings" },
];

export function CaseStudySideNav() {
  const [activeId, setActiveId] = useState<string>(sections[0].id);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav aria-label="Case study sections">
      <ul className="space-y-5">
        {sections.map((s) => {
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
                href={`#${s.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById(s.id)
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`text-xs tracking-[0.18em] uppercase font-semibold transition-colors ${
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
