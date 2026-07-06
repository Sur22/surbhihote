import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_case_study",
  title: "Get case study",
  description: "Fetch a single case study by its slug.",
  inputSchema: {
    slug: z.string().min(1).describe("Case study slug, e.g. fjord, solace, atlas, fjord2."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ slug }) => {
    const { caseStudies } = await import("@/lib/case-studies");
    const study = caseStudies.find((c) => c.slug === slug);
    if (!study) {
      return {
        content: [{ type: "text", text: `No case study found with slug "${slug}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(study, null, 2) }],
      structuredContent: { study },
    };
  },
});
