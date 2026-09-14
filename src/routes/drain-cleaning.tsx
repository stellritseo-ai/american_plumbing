import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { DrainCleaningContent } from "@/components/site/DrainCleaningContent";

function DrainCleaningPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://acptucson.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://acptucson.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Drain Cleaning & Hydro Jetting Services",
        item: "https://acptucson.com/drain-cleaning",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Drain Cleaning & Hydro Jetting Services",
    serviceType: "Commercial & Residential Drain Cleaning, High-Pressure Hydro Jetting, Video Camera Verification",
    provider: {
      "@type": "PlumbingService",
      name: "American Commercial Plumbing LLC",
      founder: {
        "@type": "Person",
        name: "Shawn Holton",
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
    areaServed: [
      { "@type": "City", name: "Tucson" },
      { "@type": "City", name: "Vail" },
      { "@type": "City", name: "Marana" },
      { "@type": "City", name: "Oro Valley" },
      { "@type": "City", name: "Sahuarita" },
      { "@type": "City", name: "Green Valley" },
      { "@type": "City", name: "Catalina" },
      { "@type": "City", name: "Drexel Heights" },
    ],
    description:
      "Professional drain cleaning and high-pressure hydro jetting (up to 4,000 PSI) in Tucson, AZ. Grease removal, tree root scouring, main line clearing, and camera verification. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is hydro jetting safe for my pipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, hydro jetting is safe for most pipes when performed by a trained professional. However, we always assess the condition and material of your pipes first. For older, fragile pipes, we may recommend a gentler approach.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I have my drains cleaned?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For residential homes, we recommend professional drain cleaning every 1-2 years as preventative maintenance. For commercial kitchens and restaurants, we recommend quarterly or bi-annual cleaning depending on usage.",
        },
      },
      {
        "@type": "Question",
        name: "Will hydro jetting damage my pipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Hydro jetting uses water pressure, not harsh chemicals or mechanical cutting. When performed correctly by our certified technicians, it is a safe and highly effective method for cleaning pipes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you clear tree roots from my sewer line?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Hydro jetting is highly effective at cutting through and flushing away tree roots. However, if roots have caused significant structural damage, we may recommend a trenchless repair or replacement.",
        },
      },
      {
        "@type": "Question",
        name: "Do you use chemical drain cleaners?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We do not recommend or use harsh chemical drain cleaners. They can damage your pipes, harm the environment, and are dangerous for our technicians. We use mechanical and water-based methods that are safe and effective.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if I have a complete drain blockage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Stop using water immediately. Do not flush toilets or run sinks. Call us at (520) 221-2010 for emergency service. If you know where your main shut-off valve is, you can turn it off to prevent further backup.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer drain cleaning for commercial grease lines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We specialize in commercial grease line cleaning for restaurants and food service facilities. We can help you maintain compliance and avoid costly shutdowns.",
        },
      },
    ],
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        title="Drain Cleaning & Jetting Services"
        subtitle="Professional-grade hydro jetting and advanced drain cleaning technology to restore your pipes to full flow and keep them that way."
        badge="Tucson Drain Specialists"
        backTo="/#services"
        backLabel="Back to All Services"
      />
      <DrainCleaningContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/drain-cleaning")({
  head: () => ({
    meta: [
      {
        title: "Drain Cleaning & Hydro Jetting Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Clear drains for good. American Commercial Plumbing LLC offers 4,000 PSI hydro jetting, professional snaking, grease trap line clearing, and camera verification in Tucson, AZ. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "drain cleaning tucson, hydro jetting tucson, clogged drain tucson az, rooter service tucson, grease trap line cleaning, sewer drain jetting, shawn holton plumbing",
      },
      {
        property: "og:title",
        content: "Drain Cleaning & Jetting Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Clear drains. For good. Up to 4,000 PSI hydro jetting and advanced drain cleaning technology across Tucson and Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://acptucson.com/drain-cleaning",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:image",
        content: "https://acptucson.com/og-image.png",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Drain Cleaning & Hydro Jetting Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "twitter:description",
        content:
          "Clear drains for good. 4,000 PSI hydro jetting, professional snaking & camera verification in Tucson, AZ. ROC #321353.",
      },
      {
        name: "twitter:image",
        content: "https://acptucson.com/og-image.png",
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
        href: "https://acptucson.com/drain-cleaning",
      },
    ],
  }),
  component: DrainCleaningPage,
});
