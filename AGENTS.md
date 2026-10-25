# AGENTS.md

- Site heading looks are applied as classes defined in `src/styles.css` (`.display`, `.eyebrow`, `.h4`) rather than ad-hoc text-size utilities, so a heading level stays consistent wherever it is used.
- Tabular content reuses the shared Table components inside a rounded wrapper with bold header cells and `text-foreground/90` body cells, so new tables on any case study read as the same table. Most tables keep the outline (`overflow-hidden rounded-sm border border-foreground/20` around `<Table className="min-w-[820px]">`); the User Journey tables drop the outline and every internal rule — the `.journey-table` class in `src/styles.css` zeroes all borders — so their rows read as plain bands rather than a boxed grid.

- A highlighted table row's outline is drawn on its cells, not on the row: the shared Table drops a row's own border on the last row, and cell borders win where they collapse.
- The site's highlight surface is the persona card's own treatment — card fill, a white/10 blurred veil, and a thin amber `#ffa348` outline on light paper (the theme border colour on dark). Reuse it verbatim instead of inventing another tint when something must read as highlighted.
- A surface whose colour must stay the same in both themes gets its own token pair in `src/styles.css` (values in `:root`, published through `@theme inline`, used as `bg-*` / `text-*`) instead of `bg-foreground` / `text-background`, which invert with the theme and would flip such a surface to the opposite colour.
- Repeated case-study panels the user edits independently (e.g. the Affiliate AI panels) get one component file per placement, so a visual edit to one never changes the others.
