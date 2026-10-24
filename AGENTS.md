# AGENTS.md

- Site heading looks are applied as classes defined in `src/styles.css` (`.display`, `.eyebrow`, `.h4`) rather than ad-hoc text-size utilities, so a heading level stays consistent wherever it is used.
- A highlighted table row's outline is drawn on its cells, not on the row: the shared Table drops a row's own border on the last row, and cell borders win where they collapse.
