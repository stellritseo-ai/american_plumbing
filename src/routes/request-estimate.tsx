import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { RequestEstimateContent } from "@/components/site/RequestEstimateContent";

function RequestEstimatePage() {
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
        name: "Request an Estimate",
        item: "https://americancommercialplumbing.com/request-estimate",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Plumbing Estimate Services",
    serviceType: "Free Plumbing Estimates on Installations, Replacements & Commercial Projects",
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
      "Get 100% upfront and honest flat-rate plumbing estimates in Tucson, AZ. Free estimates on water heaters, repiping, sewer lines, and commercial plumbing. ROC #321353.",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are estimates really free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We provide free estimates on installations, replacements, and large-scale projects. For diagnostic service calls (like finding a leak or diagnosing a repair), a standard dispatch fee applies, which we disclose upfront.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly will I receive my estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For simple projects, we can often provide an estimate over the phone or via email within one business day. For larger projects requiring an on-site assessment, we will schedule a visit at your convenience and provide the estimate shortly after.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to be home for the estimate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For an accurate estimate on larger projects, it is best if you or a representative are present to discuss your needs and answer questions. For simpler projects, we may be able to provide an estimate based on photos and descriptions.",
        },
      },
      {
        "@type": "Question",
        name: "What if I decide not to proceed with the work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "That's completely fine. Our estimates are no-obligation. We provide the information you need to make the best decision for your property, with zero pressure.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer financing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Please contact our office at (520) 221-2010 to discuss financing options for larger projects.",
        },
      },
      {
        "@type": "Question",
        name: "Can you provide an estimate for commercial properties?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We provide free estimates for commercial plumbing projects of all sizes. Please provide details about your facility and project needs in the form.",
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
        title="Request a Free Estimate"
        subtitle="100% upfront, transparent flat-rate pricing. Know the exact cost before we start, with zero surprise fees and zero high-pressure sales."
        badge="Transparent Pricing"
        backTo="/"
        backLabel="Back to Home"
      />
      <RequestEstimateContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/request-estimate")({
  head: () => ({
    meta: [
      {
        title: "Request a Free Plumbing Estimate Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Get 100% upfront & honest pricing from American Commercial Plumbing LLC. Free estimates on water heaters, repiping, sewer lines, and commercial plumbing in Tucson, AZ. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "free plumbing estimate tucson, plumbing quote tucson az, flat rate plumber tucson, water heater estimate, repiping estimate, shawn hamilton plumbing",
      },
      {
        property: "og:title",
        content: "Request a Free Estimate | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Get 100% upfront & honest pricing. No hidden fees. No surprise charges. Transparent flat-rate estimates across Tucson and Southern Arizona.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/request-estimate",
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
        href: "https://americancommercialplumbing.com/request-estimate",
      },
    ],
  }),
  component: RequestEstimatePage,
});
