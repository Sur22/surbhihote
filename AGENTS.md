# AGENTS.md

- Site heading looks are applied as classes defined in `src/styles.css` (`.display`, `.eyebrow`, `.h4`) rather than ad-hoc text-size utilities, so a heading level stays consistent wherever it is used.
- A highlighted table row's outline is drawn on its cells, not on the row: the shared Table drops a row's own border on the last row, and cell borders win where they collapse.
- The site's highlight surface is the persona card's own treatment — card fill, a white/10 blurred veil, and a thin amber `#ffa348` outline on light paper (the theme border colour on dark). Reuse it verbatim instead of inventing another tint when something must read as highlighted.
