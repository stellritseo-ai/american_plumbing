import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/testimonial")({
  beforeLoad: () => {
    throw redirect({
      to: "/testimonials",
    });
  },
});
