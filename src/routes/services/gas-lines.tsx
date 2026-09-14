import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/gas-lines")({
  beforeLoad: () => {
    throw redirect({
      to: "/repiping-gas-lines",
    });
  },
});
