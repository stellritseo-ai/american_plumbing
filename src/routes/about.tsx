import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutPageContent } from "@/components/site/AboutPageContent";

function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://americancommercialplumbing.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: "https://americancommercialplumbing.com/about",
      },
    ],
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About American Commercial Plumbing LLC",
    description:
      "Tucson's most trusted plumbing experts since 1999. Founded and led by owner Shawn Hamilton, delivering licensed commercial and residential plumbing services across Southern Arizona.",
    url: "https://americancommercialplumbing.com/about",
    mainEntity: {
      "@type": "PlumbingService",
      name: "American Commercial Plumbing LLC",
      founder: {
        "@type": "Person",
        name: "Shawn Hamilton",
      },
      telephone: "+15202212010",
      email: "shawn@acptucson.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "226 E Forrest Feezor St",
        addressLocality: "Vail",
        addressRegion: "AZ",
        postalCode: "85641",
        addressCountry: "US",
      },
    },
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <PageHeader
        eyebrow="Tucson’s Most Trusted Plumbing Experts Since 1999"
        title="About American Commercial Plumbing LLC"
        subtitle="Combining old-school integrity with modern technology to deliver the highest standard of commercial and residential plumbing services in Southern Arizona."
      />
      <AboutPageContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us | American Commercial Plumbing LLC — Tucson, AZ",
      },
      {
        name: "description",
        content:
          "Learn about American Commercial Plumbing LLC. Founded by Shawn Hamilton in 1999 with 25+ years experience, licensed ROC #321353, serving Tucson and Southern Arizona.",
      },
      {
        name: "keywords",
        content:
          "about american commercial plumbing, tucson plumbers, shawn hamilton plumber, licensed commercial plumbing tucson az, residential plumbing tucson, roc 321353",
      },
      {
        property: "og:title",
        content: "About American Commercial Plumbing LLC — Tucson’s Trusted Plumbers",
      },
      {
        property: "og:description",
        content:
          "Combining old-school integrity with modern technology to deliver the highest standard of commercial and residential plumbing services in Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/about",
      },
      {
        property: "og:type",
        content: "website",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
      {
        rel: "canonical",
        href: "https://americancommercialplumbing.com/about",
      },
    ],
  }),
  component: AboutPage,
});
