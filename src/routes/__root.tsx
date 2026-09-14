import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>
        {import.meta.env.DEV && error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs text-left rounded-lg font-mono overflow-auto max-h-48">
            <div className="font-bold mb-1">{error.name || "Error"}: {error.message}</div>
            {error.stack && <pre className="whitespace-pre-wrap text-[10px] opacity-80">{error.stack}</pre>}
          </div>
        )}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
        { name: "googlebot", content: "index, follow" },
        { name: "theme-color", content: "#0f172a" },
        { title: "American Commercial Plumbing LLC — Tucson, AZ Plumbers" },
        {
          name: "description",
          content:
            "Licensed commercial and residential plumbing contractors in Tucson, AZ. 24/7 rapid dispatch, 25+ years experience. ROC #321353.",
        },
        { name: "author", content: "American Commercial Plumbing LLC" },
        { name: "publisher", content: "American Commercial Plumbing LLC" },
        { name: "geo.region", content: "US-AZ" },
        { name: "geo.placename", content: "Tucson, Arizona" },
        { name: "geo.position", content: "32.2226;-110.9747" },
        { name: "ICBM", content: "32.2226, -110.9747" },
        { property: "og:site_name", content: "American Commercial Plumbing LLC" },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "American Commercial Plumbing LLC — Tucson, AZ Plumbers" },
        {
          property: "og:description",
          content:
            "Tucson's trusted commercial & residential plumbing specialists since 1999. Licensed ROC #321353.",
        },
        {
          property: "og:image",
          content: "https://acptucson.com/og-image.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "American Commercial Plumbing LLC - Tucson Plumbers",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "American Commercial Plumbing LLC — Tucson, AZ Plumbers" },
        {
          name: "twitter:description",
          content:
            "Licensed commercial & residential plumbing contractors in Tucson, AZ. 24/7 emergency dispatch. ROC #321353.",
        },
        {
          name: "twitter:image",
          content: "https://acptucson.com/og-image.png",
        },
      ],
      links: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.png",
        },
        {
          rel: "shortcut icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.png",
        },
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
