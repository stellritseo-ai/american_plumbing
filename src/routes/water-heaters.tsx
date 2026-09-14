import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { WaterHeaterContent } from "@/components/site/WaterHeaterContent";

function WaterHeaterPage() {
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
        name: "Water Heater Services",
        item: "https://acptucson.com/water-heaters",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Heater Services",
    serviceType: "Water Heater Repair, Installation & Maintenance",
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
      "Tucson's trusted water heater repair, replacement, and tankless specialists. Gas and electric tank installations, sediment flushes, and 24/7 emergency leak assistance. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a water heater last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional tank water heaters typically last 8-12 years, while tankless units can last 20+ years with proper maintenance. In Southern Arizona, hard water can shorten the lifespan of tank units if they are not flushed annually.",
        },
      },
      {
        "@type": "Question",
        name: "How often should I flush my water heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend flushing your tank water heater once a year to remove sediment buildup. This simple maintenance dramatically improves efficiency and extends the life of your unit.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer free estimates on new water heater installations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We provide free, no-obligation estimates for water heater replacements and new installations. We will assess your needs and provide upfront pricing on your options.",
        },
      },
      {
        "@type": "Question",
        name: "Can you repair my water heater the same day?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, yes. Our trucks are stocked with common parts, allowing us to complete many repairs on the first visit. If a part needs to be ordered, we will let you know immediately.",
        },
      },
      {
        "@type": "Question",
        name: "What size water heater do I need?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sizing depends on your household size and peak water usage. As a general rule: 1-2 people need a 30-40 gallon tank, 3-4 people need a 40-50 gallon tank, and 5+ people need a 50-80 gallon tank or a tankless system. Our technicians will help you calculate the right size.",
        },
      },
      {
        "@type": "Question",
        name: "Do you install tankless water heaters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We are experts in tankless water heater installation, repair, and descaling. We can help you determine if your home is compatible with a tankless system.",
        },
      },
      {
        "@type": "Question",
        name: "What should I do if my water heater is leaking?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Immediately turn off the power (for electric) or the gas supply (for gas) to the unit. Then, shut off the cold water inlet valve on top of the heater. If you cannot stop the leak, call us immediately at (520) 221-2010 for emergency assistance.",
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
        eyebrow="Water Heater Services"
        title="Reliable Hot Water, Guaranteed."
        subtitle="From rapid repairs to energy-efficient tankless installations, Tucson trusts American Commercial Plumbing LLC for expert water heater services. Upfront pricing, certified technicians, and 25+ years of experience."
      />
      <WaterHeaterContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/water-heaters")({
  head: () => ({
    meta: [
      {
        title: "Water Heater Repair & Installation Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Tucson's trusted water heater experts. Traditional tank & tankless water heater repairs, replacements, and annual flushes. 100% upfront pricing. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "water heater repair tucson, tankless water heater tucson, water heater installation tucson, emergency water heater replacement, water heater flush tucson, shawn holton plumbing",
      },
      {
        property: "og:title",
        content: "Water Heater Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "From rapid repairs to energy-efficient tankless installations, Tucson trusts American Commercial Plumbing LLC for expert water heater services.",
      },
      {
        property: "og:url",
        content: "https://acptucson.com/water-heaters",
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
        content: "Water Heater Repair & Installation Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "twitter:description",
        content:
          "Tucson's trusted water heater experts. Tank & tankless repairs, replacements, and maintenance. 100% upfront pricing. ROC #321353.",
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
        href: "https://acptucson.com/water-heaters",
      },
    ],
  }),
  component: WaterHeaterPage,
});
