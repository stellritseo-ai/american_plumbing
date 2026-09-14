import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { LeakDetectionContent } from "@/components/site/LeakDetectionContent";

function LeakDetectionPage() {
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
        name: "Leak Detection & Repair Services",
        item: "https://americancommercialplumbing.com/leak-detection",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Leak Detection & Repair Services",
    serviceType: "Acoustic, Thermal Imaging & Electronic Slab Leak Detection and Non-Invasive Pipe Repair",
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
      "Advanced non-invasive water leak detection and repair in Tucson, AZ. Acoustic listening, thermal imaging, slab leak location, and surgical pipe repairs. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if I have a slab leak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs include the sound of running water when everything is off, warm spots on your floor, unexplained high water bills, and cracks in your flooring or foundation. If you suspect a slab leak, call us immediately at (520) 221-2010.",
        },
      },
      {
        "@type": "Question",
        name: "Will you have to break my concrete to find the leak?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In most cases, we can pinpoint the exact location of the leak using acoustic and thermal technology before any concrete is broken. This minimizes the area we need to access for the repair.",
        },
      },
      {
        "@type": "Question",
        name: "Can you fix a leak without digging up my yard?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. For many underground leaks, we use trenchless technology that requires only small access points, preserving your landscaping and hardscaping.",
        },
      },
      {
        "@type": "Question",
        name: "How much does leak detection cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We charge a standard diagnostic fee for leak detection services, which we will disclose upfront. If a repair is needed, this fee is often credited toward the cost of the repair.",
        },
      },
      {
        "@type": "Question",
        name: "Is a slab leak dangerous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Beyond the water damage and mold risk, a slab leak can undermine your home's foundation, leading to structural instability and expensive repairs. It should be addressed immediately.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer emergency leak repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If you have an active, uncontrolled leak, call us immediately at (520) 221-2010. We offer 24/7 emergency response to stop the water and mitigate damage.",
        },
      },
      {
        "@type": "Question",
        name: "Do you repair leaks in commercial properties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We provide leak detection and repair for commercial buildings, multi-family properties, and industrial facilities. We understand the urgency of minimizing business downtime.",
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
        title="Leak Detection & Repair Services"
        subtitle="Non-invasive acoustic & thermal imaging leak detection. Pinpoint precision for slab leaks, hidden pipe bursts, and foundation protection."
        badge="Tucson Leak Specialists"
        backTo="/#services"
        backLabel="Back to All Services"
      />
      <LeakDetectionContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/leak-detection")({
  head: () => ({
    meta: [
      {
        title: "Water Leak Detection & Repair Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Find the leak. Fix the problem. Protect your property. American Commercial Plumbing LLC offers non-invasive acoustic & thermal leak detection in Tucson, AZ. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "leak detection tucson, slab leak detection tucson, thermal imaging pipe inspection, acoustic water leak detector, hidden water leak repair, shawn hamilton plumbing",
      },
      {
        property: "og:title",
        content: "Leak Detection & Repair Services | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Find the leak. Fix the problem. Protect your property. State-of-the-art acoustic and thermal imaging leak detection across Tucson and Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/leak-detection",
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
        href: "https://americancommercialplumbing.com/leak-detection",
      },
    ],
  }),
  component: LeakDetectionPage,
});
