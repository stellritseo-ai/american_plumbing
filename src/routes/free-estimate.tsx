import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/free-estimate")({
  beforeLoad: () => {
    throw redirect({
      to: "/request-estimate",
    });
  },
});
