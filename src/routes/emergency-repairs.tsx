import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { EmergencyRepairsContent } from "@/components/site/EmergencyRepairsContent";

function EmergencyRepairsPage() {
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
        name: "Emergency Repairs (24/7)",
        item: "https://acptucson.com/emergency-repairs",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    name: "24/7 Emergency Plumbing Repairs",
    serviceType: "Emergency Plumbing Repair & Leak Isolation",
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
      "True 24/7 rapid-response emergency plumbing in Tucson, AZ. Burst pipes, sewer backups, water heater flooding, overflowing toilets, slab leaks, and gas line repairs. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you really answer the phone at 3:00 AM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We are a true 24/7 emergency plumbing service. When you call (520) 221-2010, you will speak to a live person who can dispatch a technician immediately.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an emergency plumber cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We understand that emergency repairs are unexpected. We charge a standard emergency dispatch fee, and we provide 100% upfront, flat-rate pricing for the repair before we begin. You will never be surprised by the bill.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can you get to my house?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We strive for a 60-minute average arrival time for true emergencies, depending on your location and traffic conditions. We will give you an estimated arrival time when you call.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle commercial emergency calls?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We understand that a plumbing failure can shut down your business. We prioritize commercial emergency calls to minimize your downtime and protect your inventory.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve for emergencies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide 24/7 emergency service to Tucson and the surrounding Southern Arizona communities, including Vail, Sahuarita, Marana, Green Valley, Catalina, and Drexel Heights.",
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
        eyebrow="24/7 Emergency Plumbing Repairs"
        title="Plumbing Emergency? We’re On Our Way."
        subtitle="Don't let a burst pipe or major leak destroy your home or shut down your business. American Commercial Plumbing LLC offers true 24/7 rapid response across Tucson and Southern Arizona."
      />
      <EmergencyRepairsContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/emergency-repairs")({
  head: () => ({
    meta: [
      {
        title: "24/7 Emergency Plumbing Repairs Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Plumbing emergency in Tucson? True 24/7 rapid emergency dispatch for burst pipes, sewer backups, water heaters, and slab leaks. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "24 7 plumber tucson, emergency plumbing tucson, burst pipe repair tucson, sewer backup emergency az, slab leak repair tucson, urgent plumber near me, shawn holton plumbing",
      },
      {
        property: "og:title",
        content: "24/7 Emergency Plumbing Repairs | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Don't let a burst pipe or major leak destroy your property. True 24/7 rapid response across Tucson and Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://acptucson.com/emergency-repairs",
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
        content: "24/7 Emergency Plumbing Repairs Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "twitter:description",
        content:
          "Plumbing emergency in Tucson? True 24/7 rapid emergency dispatch for burst pipes, sewer backups, water heaters & slab leaks. ROC #321353.",
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
        href: "https://acptucson.com/emergency-repairs",
      },
    ],
  }),
  component: EmergencyRepairsPage,
});
