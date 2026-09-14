import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/leak-detection")({
  beforeLoad: () => {
    throw redirect({
      to: "/leak-detection",
    });
  },
});
