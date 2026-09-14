import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/repiping-gas-lines")({
  beforeLoad: () => {
    throw redirect({
      to: "/repiping-gas-lines",
    });
  },
});
