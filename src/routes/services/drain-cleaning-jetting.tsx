import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/drain-cleaning-jetting")({
  beforeLoad: () => {
    throw redirect({
      to: "/drain-cleaning",
    });
  },
});
