import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/work/fjord2")({
  beforeLoad: () => {
    throw redirect({
      to: "/work/affiliate-platform-redesign",
      statusCode: 301,
    });
  },
});
