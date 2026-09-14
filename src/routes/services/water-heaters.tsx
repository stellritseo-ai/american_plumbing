import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/water-heaters")({
  beforeLoad: () => {
    throw redirect({
      to: "/water-heaters",
    });
  },
});
