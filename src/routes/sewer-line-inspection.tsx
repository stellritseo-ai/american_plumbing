import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { SewerInspectionContent } from "@/components/site/SewerInspectionContent";

function SewerInspectionPage() {
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
        name: "Services",
        item: "https://americancommercialplumbing.com/#services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sewer Line Inspection Services",
        item: "https://americancommercialplumbing.com/sewer-line-inspection",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Sewer Line Inspection Services",
    serviceType: "HD Video Camera Sewer Inspection & Sonar Locating",
    provider: {
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
    areaServed: [
      { "@type": "City", name: "Tucson" },
      { "@type": "City", name: "Vail" },
      { "@type": "City", name: "Marana" },
      { "@type": "Oro Valley", name: "Oro Valley" },
      { "@type": "City", name: "Sahuarita" },
      { "@type": "City", name: "Green Valley" },
      { "@type": "City", name: "Catalina" },
      { "@type": "City", name: "Drexel Heights" },
    ],
    description:
      "Advanced HD video camera sewer inspection in Tucson, AZ. Precision underground diagnostics, tree root detection, pipe bellies, and real estate pre-purchase sewer scopes. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How often should I have my sewer line inspected?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For residential homes, we recommend an inspection every 1-2 years, especially if you have mature trees on your property. For commercial properties, especially restaurants, annual inspections are highly recommended.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a sewer line inspection take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard residential sewer inspection typically takes 30 to 60 minutes, depending on the length and complexity of the line.",
        },
      },
      {
        "@type": "Question",
        name: "Will the camera damage my pipes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our cameras are specifically designed for sewer lines and are flexible and smooth to navigate pipes safely without causing damage.",
        },
      },
      {
        "@type": "Question",
        name: "Can you inspect a sewer line for a real estate purchase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We provide pre-purchase sewer inspections for home buyers in Tucson and surrounding areas. We can provide a recorded video and a report of our findings.",
        },
      },
      {
        "@type": "Question",
        name: "What if you find a problem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If we find a defect, we will show you the video footage, explain exactly what it is, and provide you with upfront options for repair. We never pressure you into unnecessary work.",
        },
      },
      {
        "@type": "Question",
        name: "Do you charge for sewer line inspections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We charge a standard fee for the inspection and camera service, which we will disclose upfront before scheduling. If a repair is needed, this fee is often credited toward the cost of the repair.",
        },
      },
      {
        "@type": "Question",
        name: "Can you inspect commercial sewer lines?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We have the equipment and expertise to inspect large-diameter commercial sewer lines for restaurants, apartment complexes, and industrial facilities.",
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
        eyebrow="Sewer Line Inspection Services"
        title="See Exactly What’s Happening Underground."
        subtitle="Stop guessing about recurrent clogs and slow drains. American Commercial Plumbing LLC uses state-of-the-art video camera technology to diagnose your sewer line with precision and accuracy."
      />
      <SewerInspectionContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/sewer-line-inspection")({
  head: () => ({
    meta: [
      {
        title: "Sewer Line Camera Inspection Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Advanced HD video camera sewer inspection in Tucson, AZ. Pinpoint root intrusions, cracked pipes, and clogs without digging. Real estate sewer scopes. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "sewer line inspection tucson, sewer camera inspection tucson, video pipe scoping tucson, real estate sewer scope tucson az, tree root sewer repair, shawn hamilton plumbing",
      },
      {
        property: "og:title",
        content: "Sewer Line Inspection Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "See exactly what is happening underground. Advanced video camera diagnostics and precision locating across Tucson and Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/sewer-line-inspection",
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
        href: "https://americancommercialplumbing.com/sewer-line-inspection",
      },
    ],
  }),
  component: SewerInspectionPage,
});
