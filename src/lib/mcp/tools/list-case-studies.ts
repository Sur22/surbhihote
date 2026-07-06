import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description: "List all portfolio case studies with their slug, title, and summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async () => {
    const { caseStudies } = await import("@/lib/case-studies");
    const items = caseStudies.map((c) => ({
      slug: c.slug,
      title: c.title,
      subtitle: c.subtitle,
      role: c.role,
      year: c.year,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
