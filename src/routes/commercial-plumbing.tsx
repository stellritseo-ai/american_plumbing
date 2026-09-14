import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CommercialPlumbingContent } from "@/components/site/CommercialPlumbingContent";

function CommercialPlumbingPage() {
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
        name: "Commercial Plumbing",
        item: "https://acptucson.com/commercial-plumbing",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Plumbing Services",
    serviceType: "Commercial & Industrial Plumbing Contracting",
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
    ],
    description:
      "Tucson's elite commercial plumbing partner. Rapid-response 24/7 emergency dispatch, commercial fixtures, boilers, leak detection, hydro jetting, and certified backflow testing. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer after-hours or weekend commercial service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer flexible scheduling including nights and weekends to work around your operational needs, as well as true 24/7 emergency dispatch across Tucson.",
        },
      },
      {
        "@type": "Question",
        name: "Are your technicians qualified to work in sensitive commercial environments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our commercial technicians are background-checked, drug-tested, and trained to work professionally in occupied spaces, including healthcare facilities and restaurants.",
        },
      },
      {
        "@type": "Question",
        name: "Can you handle large-scale commercial installations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. From new construction plumbing to complete commercial repiping projects, our team has the manpower, equipment, and engineering expertise to handle projects of all sizes.",
        },
      },
      {
        "@type": "Question",
        name: "Are you fully licensed and insured for commercial work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. American Commercial Plumbing LLC is fully licensed, bonded, and insured in the state of Arizona under ROC License Number #321353.",
        },
      },
      {
        "@type": "Question",
        name: "Do you provide free estimates for commercial projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we provide free estimates for commercial installations, replacements, and large-scale repair projects. For diagnostic service calls, a standard dispatch fee applies, which will be disclosed upfront.",
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
        eyebrow="Commercial Plumbing Services"
        title="Tucson’s Elite Commercial Plumbing Partner"
        subtitle="Minimize downtime and protect your bottom line with rapid-response, code-compliant plumbing solutions for Southern Arizona businesses. Available 24/7 for emergency dispatch."
      />
      <CommercialPlumbingContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/commercial-plumbing")({
  head: () => ({
    meta: [
      {
        title: "Commercial Plumbing Services Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Tucson’s premier commercial plumbing contractor. 24/7 emergency repair, hydro jetting, commercial boilers, backflow prevention, and routine maintenance plans. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "commercial plumbing tucson, commercial plumbers tucson az, emergency commercial plumber, backflow prevention tucson, restaurant plumbing tucson, multi-family plumbing az, shawn holton plumbing",
      },
      {
        property: "og:title",
        content: "Commercial Plumbing Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Minimize downtime and protect your bottom line with rapid-response, code-compliant plumbing solutions for Southern Arizona businesses.",
      },
      {
        property: "og:url",
        content: "https://acptucson.com/commercial-plumbing",
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
        content: "Commercial Plumbing Services Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "twitter:description",
        content:
          "Tucson’s premier commercial plumbing contractor. 24/7 emergency repair, hydro jetting, boilers & backflow prevention. ROC #321353.",
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
        href: "https://acptucson.com/commercial-plumbing",
      },
    ],
  }),
  component: CommercialPlumbingPage,
});
