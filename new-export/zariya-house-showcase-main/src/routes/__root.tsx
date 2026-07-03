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
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { LuxButton } from "@/components/ui/lux-button";
import { ZMonogram } from "@/components/brand/Logo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <ZMonogram size={80} className="mx-auto mb-8" />
        <div className="eyebrow mb-3 text-gold-deep">404</div>
        <h1 className="serif-display text-4xl text-charcoal">The page has drifted away</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The design you were looking for isn't here — perhaps it was moved to a new collection.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <LuxButton href="/" variant="wine">Return home</LuxButton>
          <LuxButton href="/collections" variant="outline-gold">Browse collections</LuxButton>
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
    <div className="flex min-h-screen items-center justify-center bg-ivory px-4">
      <div className="max-w-md text-center">
        <ZMonogram size={64} className="mx-auto mb-6" />
        <h1 className="serif-display text-3xl text-charcoal">A quiet interruption</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something didn't load as it should. Please try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center border border-wine bg-wine px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-ivory"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center border border-border bg-ivory px-5 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-charcoal hover:border-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zariya House | Premium Jewellery Design Showcase" },
      {
        name: "description",
        content:
          "Explore curated gold, silver, rose gold and platinum jewellery designs for weddings, engagements, festive moments and everyday elegance.",
      },
      { name: "author", content: "Zariya House" },
      { name: "theme-color", content: "#FFF8EF" },
      { property: "og:title", content: "Zariya House | Premium Jewellery Design Showcase" },
      {
        property: "og:description",
        content:
          "A curated design showcase of gold, silver, rose gold and platinum jewellery — weddings, celebrations, everyday elegance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Zariya House" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness", "JewelryStore"],
          name: "Zariya House",
          slogan: "Designs to Adorn Every Story",
          description:
            "A curated jewellery design showcase — gold, silver, rose gold and platinum designs for weddings, celebrations and everyday elegance.",
          url: "https://zariyahouse.example",
          telephone: "+91 90000 00000",
          email: "hello@zariyahouse.example",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Mumbai",
            addressCountry: "IN",
          },
          areaServed: "IN",
          priceRange: "$$$",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
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
      <LenisProvider>
        <Preloader />
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </LenisProvider>
    </QueryClientProvider>
  );
}
