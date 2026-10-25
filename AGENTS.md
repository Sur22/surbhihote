# AGENTS.md

- Site heading looks are applied as classes defined in `src/styles.css` (`.display`, `.eyebrow`, `.h4`) rather than ad-hoc text-size utilities, so a heading level stays consistent wherever it is used.
- Tabular content reuses the shared Table components inside a bordered, rounded wrapper (`overflow-hidden rounded-sm border border-foreground/20` around `<Table className="min-w-[820px]">`) with bold header cells and `text-foreground/90` body cells, matching the User Journey tables, so new tables on any case study read as the same table.

- A highlighted table row's outline is drawn on its cells, not on the row: the shared Table drops a row's own border on the last row, and cell borders win where they collapse.
- The site's highlight surface is the persona card's own treatment — card fill, a white/10 blurred veil, and a thin amber `#ffa348` outline on light paper (the theme border colour on dark). Reuse it verbatim instead of inventing another tint when something must read as highlighted.
- Case-study cards and banners that must read as glass use the shared `.case-glass__backdrop` + `.case-glass__veil` layers from `src/styles.css` rather than a per-card tint, so the frosted surface and its amber-outside-frosted-rim layering stay identical everywhere they appear.
