In `src/routes/index.tsx`:
1. Add the `Button` import from `@/components/ui/button`.
2. Replace the raw `<a>` resume link in the Hero section with `<Button asChild variant="outline" size="lg">` wrapping the same `<a href="/resume.pdf" download>` and `<Download /> Resume` children, matching the implementation in `src/routes/about.tsx` exactly.