import { defineMcp } from "@lovable.dev/mcp-js";
import listCaseStudies from "./tools/list-case-studies";
import getCaseStudy from "./tools/get-case-study";

export default defineMcp({
  name: "surbhi-portfolio-mcp",
  title: "Surbhi Portfolio MCP",
  version: "0.1.0",
  instructions:
    "Tools for browsing Surbhi's design portfolio. Use `list_case_studies` to see all projects, and `get_case_study` with a slug to fetch details for one.",
  tools: [listCaseStudies, getCaseStudy],
});
