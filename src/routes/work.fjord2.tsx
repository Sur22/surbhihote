import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

export const Route = createFileRoute("/work/fjord2")({
  server: {
    handlers: {
      GET: () => {
        return new Response(null, {
          status: 301,
          headers: {
            Location: "/work/affiliate-platform-redesign",
          },
        });
      },
    },
  },
});
