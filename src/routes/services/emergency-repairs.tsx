import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/emergency-repairs")({
  beforeLoad: () => {
    throw redirect({
      to: "/emergency-repairs",
    });
  },
});
