import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { ProjectsPageContent } from "@/components/site/ProjectsPageContent";

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
      name: "Projects & Portfolio",
      item: "https://americancommercialplumbing.com/projects",
    },
  ],
};

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "American Commercial Plumbing Project Portfolio Tucson, AZ",
  description:
    "A comprehensive showcase of commercial plumbing, residential repiping, water heater installations, drain cleaning, and luxury bathroom fixtures completed by American Commercial Plumbing LLC across Tucson and Southern Arizona.",
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
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you provide references or examples of similar projects in my neighborhood?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Having served Tucson, Vail, Oro Valley, Marana, and Green Valley since 1999, we have completed hundreds of projects in nearly every major neighborhood. We are happy to discuss relevant case studies and examples during your initial consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Are all the projects in this portfolio permitted and inspected by local building departments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every water heater replacement, gas line installation, sewer line replacement, and whole-building repipe complies strictly with the International Plumbing Code (IPC) and municipal building codes for the City of Tucson, Town of Marana, Town of Oro Valley, or Pima County.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle both small residential fixture upgrades and large-scale commercial buildouts?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team is equipped and licensed for both. Whether you need a luxury freestanding tub or vessel sink installed in your home, or a multi-fixture grease line and commercial disposal system for an industrial kitchen, we bring the same commercial-grade precision to every job.",
      },
    },
    {
      "@type": "Question",
      name: "How do you protect my home or commercial property during messy plumbing jobs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clean engineering is our hallmark. Our technicians lay heavy-duty neoprene runners and shoe covers before setting foot inside. For dusty drywall or subfloor cuts, we deploy plastic containment barriers and negative air scrubbers. Every work area is thoroughly vacuumed and sanitized before we pack up.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a detailed estimate for a project similar to one shown here?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer 100% upfront flat-rate pricing. You can request a free estimate online through our request form or call our dispatch team directly at (520) 221-2010 to review your project scope with Shawn Hamilton and our master technicians.",
      },
    },
  ],
};

function ProjectsPage() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHeader
        eyebrow="Tucson Plumbing Portfolio & Project Gallery"
        title="Real Projects. Clean Engineering in Action."
        subtitle="Explore our portfolio of commercial facility buildouts, whole-home repiping, high-efficiency water heaters, luxury bathroom fixtures, and emergency restorations across Tucson."
      />
      <ProjectsPageContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      {
        title: "Plumbing Projects & Work Portfolio Tucson, AZ | American Commercial Plumbing LLC",
      },
      {
        name: "description",
        content:
          "Browse real Tucson plumbing projects by American Commercial Plumbing LLC. Commercial buildouts, whole-home repiping, tankless water heaters, drain jetting & luxury fixtures. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "plumbing projects tucson, plumbing portfolio tucson az, commercial plumbing jobs, repiping pictures tucson, water heater installation photos, shawn hamilton plumbing work",
      },
      {
        property: "og:title",
        content: "Plumbing Projects & Portfolio | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "View authentic photo documentation of commercial and residential plumbing projects across Tucson and Southern Arizona. Clean engineering, code compliance, and guaranteed craftsmanship.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/projects",
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
        href: "https://americancommercialplumbing.com/projects",
      },
    ],
  }),
  component: ProjectsPage,
});
