import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/emergency-plumbing")({
  beforeLoad: () => {
    throw redirect({
      to: "/emergency-repairs",
    });
  },
});
