import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/water-heater-services")({
  beforeLoad: () => {
    throw redirect({
      to: "/water-heaters",
    });
  },
});
