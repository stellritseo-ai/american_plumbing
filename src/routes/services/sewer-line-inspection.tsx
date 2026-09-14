import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/sewer-line-inspection")({
  beforeLoad: () => {
    throw redirect({
      to: "/sewer-line-inspection",
    });
  },
});
