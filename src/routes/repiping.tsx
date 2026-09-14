import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/repiping")({
  beforeLoad: () => {
    throw redirect({
      to: "/repiping-gas-lines",
    });
  },
});
