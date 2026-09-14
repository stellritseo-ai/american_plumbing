import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/drain-cleaning")({
  beforeLoad: () => {
    throw redirect({
      to: "/drain-cleaning",
    });
  },
});
