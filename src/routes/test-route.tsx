import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/test-route")({
  component: () => <div>Test</div>,
});
