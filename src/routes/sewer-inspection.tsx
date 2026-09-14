import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sewer-inspection")({
  beforeLoad: () => {
    throw redirect({
      to: "/sewer-line-inspection",
    });
  },
});
