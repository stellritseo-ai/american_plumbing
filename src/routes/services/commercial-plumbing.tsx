import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/commercial-plumbing")({
  beforeLoad: () => {
    throw redirect({
      to: "/commercial-plumbing",
    });
  },
});
