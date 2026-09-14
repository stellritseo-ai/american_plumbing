import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/residential-plumbing")({
  beforeLoad: () => {
    throw redirect({
      to: "/residential-plumbing",
    });
  },
});
