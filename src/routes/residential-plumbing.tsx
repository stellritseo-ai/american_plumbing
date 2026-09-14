import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { ResidentialPlumbingContent } from "@/components/site/ResidentialPlumbingContent";

function ResidentialPlumbingPage() {
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
        name: "Residential Plumbing",
        item: "https://americancommercialplumbing.com/residential-plumbing",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Residential Plumbing Services",
    serviceType: "Residential Plumbing Repair & Installation",
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
      { "@type": "City", name: "Oro Valley" },
      { "@type": "City", name: "Sahuarita" },
      { "@type": "City", name: "Green Valley" },
      { "@type": "City", name: "Catalina" },
      { "@type": "City", name: "Drexel Heights" },
    ],
    description:
      "Tucson’s most trusted residential plumbing experts. From dripping faucets to whole-home repiping, 24/7 emergency repair, water heaters, leak detection, and hydro jetting. Family-owned since 1999. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer emergency plumbing services for homes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer true 24/7 emergency response for residential plumbing issues, including burst pipes, major leaks, sewage backups, and no-hot-water situations. Call (520) 221-2010 immediately if you have an emergency.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly will you respond to my call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "During normal business hours (Mon-Fri, 7 AM - 4 PM), we aim to respond to all service calls and web inquiries within one hour. For after-hours emergencies, we dispatch technicians immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Are your plumbers background-checked?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We understand that inviting someone into your home requires trust. Every technician dispatched by American Commercial Plumbing LLC is fully background-checked and drug-tested.",
        },
      },
      {
        "@type": "Question",
        name: "Do you charge for estimates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide free estimates on a wide range of installation and replacement projects (like water heaters or repiping). For diagnostic service calls, there is a standard dispatch fee, which we will always disclose upfront before scheduling.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We proudly serve Tucson and the surrounding Southern Arizona communities, including Vail, Sahuarita, Marana, Green Valley, Catalina, and Drexel Heights.",
        },
      },
      {
        "@type": "Question",
        name: "Do you guarantee your work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We stand behind all of our repairs and installations. We offer a warranty on both our labor and the parts we install. Ask your technician for specific warranty details on your service.",
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
        eyebrow="Residential Plumbing Services"
        title="Tucson’s Most Trusted Residential Plumbing Experts"
        subtitle="From dripping faucets to complete repiping, experience commercial-grade quality and 100% upfront, honest pricing for your home. Family-owned and operated since 1999."
      />
      <ResidentialPlumbingContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/residential-plumbing")({
  head: () => ({
    meta: [
      {
        title: "Residential Plumbing Services Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Tucson's trusted residential plumbers. Upfront flat-rate pricing, 24/7 emergency repairs, water heaters, leak detection, drain clearing, and repiping. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "residential plumbing tucson, residential plumbers tucson az, emergency plumber tucson, water heater repair tucson, drain cleaning tucson, slab leak detection tucson, repiping tucson, shawn hamilton plumbing",
      },
      {
        property: "og:title",
        content: "Residential Plumbing Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Experience commercial-grade quality and 100% upfront, honest pricing for your home. Family-owned and operated in Tucson since 1999.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/residential-plumbing",
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
        href: "https://americancommercialplumbing.com/residential-plumbing",
      },
    ],
  }),
  component: ResidentialPlumbingPage,
});
