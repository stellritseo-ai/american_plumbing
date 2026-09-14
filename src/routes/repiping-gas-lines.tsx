import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { RepipingGasContent } from "@/components/site/RepipingGasContent";

function RepipingGasPage() {
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
        name: "Repiping & Gas Line Services",
        item: "https://americancommercialplumbing.com/repiping-gas-lines",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Repiping & Gas Line Services",
    serviceType: "Whole-Home & Commercial Repiping, PEX & Copper Material Upgrades, Code-Compliant Gas Line Installation & Leak Repair",
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
      "Whole-home and commercial repiping with PEX and copper, plus licensed gas line installation, testing, and emergency leak repairs in Tucson, AZ. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a whole-home repipe take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most residential repiping projects are completed in 3 to 7 days, depending on the size of the home and the complexity of the system. We work efficiently to minimize disruption to your daily routine.",
        },
      },
      {
        "@type": "Question",
        name: "Is repiping worth the cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. While repiping is an investment, it eliminates the cycle of costly emergency repairs, restores water pressure and quality, and increases the value of your home. It is a long-term solution that pays for itself over time.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best material for repiping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PEX and copper are both excellent choices. PEX is more affordable, flexible, and resistant to scale, making it ideal for most residential applications. Copper is more traditional, highly durable, and often preferred for commercial applications. We will recommend the best option for your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I have a gas leak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs include a rotten egg or sulfur smell, hissing sounds near gas lines, dead vegetation over buried lines, and physical symptoms like dizziness or nausea. If you suspect a gas leak, evacuate immediately and call us from a safe location.",
        },
      },
      {
        "@type": "Question",
        name: "Can you install a gas line for my outdoor grill or pool heater?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We install new gas lines for all types of outdoor appliances, including grills, fire pits, and pool heaters. We handle all permitting and inspection requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Do you handle emergency gas line repairs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If you have a gas leak or a damaged gas line, call us immediately at (520) 221-2010. We offer 24/7 emergency response for gas line emergencies.",
        },
      },
      {
        "@type": "Question",
        name: "Will repiping damage my walls and landscaping?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We make every effort to minimize disruption. For interior walls, we make small, strategic access points and patch them after the work is complete. For main lines, we often use trenchless technology to preserve your landscaping.",
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
        title="Repiping & Gas Line Services"
        subtitle="Whole-home copper and PEX repiping plus certified, code-compliant natural gas line installation and emergency leak repair across Tucson."
        badge="Tucson Piping & Gas Specialists"
        backTo="/#services"
        backLabel="Back to All Services"
      />
      <RepipingGasContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/repiping-gas-lines")({
  head: () => ({
    meta: [
      {
        title: "Repiping & Gas Line Installation Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Restore your plumbing and protect your property. American Commercial Plumbing LLC delivers whole-home PEX & copper repiping and certified gas line services in Tucson, AZ. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "repiping tucson, gas line repair tucson az, whole home repipe tucson, copper repiping, pex pipe installation, gas line installation outdoor grill, shawn hamilton plumbing",
      },
      {
        property: "og:title",
        content: "Repiping & Gas Line Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Restore your plumbing. Protect your property. Whole-home repiping and safe, code-compliant gas line solutions across Tucson and Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/repiping-gas-lines",
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
        href: "https://americancommercialplumbing.com/repiping-gas-lines",
      },
    ],
  }),
  component: RepipingGasPage,
});
