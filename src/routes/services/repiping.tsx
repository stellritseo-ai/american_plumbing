import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/repiping")({
  beforeLoad: () => {
    throw redirect({
      to: "/repiping-gas-lines",
    });
  },
});
