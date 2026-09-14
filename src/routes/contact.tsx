import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { ContactPageContent } from "@/components/site/ContactPageContent";

function ContactPage() {
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
        name: "Contact Us",
        item: "https://americancommercialplumbing.com/contact",
      },
    ],
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact American Commercial Plumbing LLC",
    url: "https://americancommercialplumbing.com/contact",
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
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "07:00",
          closes: "16:00",
        },
      ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <PageHeader
        eyebrow="Contact American Commercial Plumbing LLC"
        title="Get In Touch With Tucson’s Plumbing Experts"
        subtitle="Whether you have a plumbing emergency, need a routine inspection, or are ready to start a remodeling project, our team is ready to help."
      />
      <ContactPageContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Us & Free Estimates | American Commercial Plumbing LLC — Tucson, AZ",
      },
      {
        name: "description",
        content:
          "Contact American Commercial Plumbing LLC in Tucson, AZ. Call (520) 221-2010 for 24/7 emergency service, commercial plumbing, residential repairs, and free estimates.",
      },
      {
        name: "keywords",
        content:
          "contact american commercial plumbing, tucson plumbers phone number, emergency plumber tucson az, plumbing estimates tucson, shawn hamilton plumbing, roc 321353",
      },
      {
        property: "og:title",
        content: "Contact Us & Free Estimates | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Fast, reliable, and honest plumbing service in Tucson and Southern Arizona. Call (520) 221-2010 or request a free estimate online.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/contact",
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
        href: "https://americancommercialplumbing.com/contact",
      },
    ],
  }),
  component: ContactPage,
});
