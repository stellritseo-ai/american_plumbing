import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { TestimonialsPageContent } from "@/components/site/TestimonialsPageContent";

function TestimonialsPage() {
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
        name: "Testimonials",
        item: "https://americancommercialplumbing.com/testimonials",
      },
    ],
  };

  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    name: "American Commercial Plumbing LLC",
    image: "https://americancommercialplumbing.com/logo.png",
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1000",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Maria G." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Shawn and his team were incredible. Our water heater burst on a Sunday morning, and they had a technician out to our house within 45 minutes. He was polite, explained exactly what needed to be done, and the upfront pricing was exactly what we paid.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "David C." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Finally, a plumber I can trust. They diagnosed a complex leak issue quickly, showed me the camera footage, and gave me all my options without pressure. The repair was flawless.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sarah T." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "True 24/7 Emergency Service. A main line backup at 2:00 AM is a nightmare. I called American Commercial Plumbing, and a real person answered the phone. They dispatched a technician immediately.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Elena R." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Saved our restaurant from a major shutdown. American Commercial Plumbing responded to our grease clog emergency immediately and worked efficiently after hours.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Robert M." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Flawless Whole-Home Copper Repiping. Shawn came out personally, walked us through the repiping plan, and had his crew re-plumb the entire house with minimal drywall cuts.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos & Linda V." },
        reviewRating: { "@type": "Rating", ratingValue: "5" },
        reviewBody:
          "Best drain cleaning service in Pima County. Hydro-jetted the line clear, and showed us that a simple localized spot repair was all we needed. Saved us over $4,000.",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsSchema) }}
      />
      <PageHeader
        eyebrow="Client Testimonials"
        title="Trusted by Tucson Homeowners & Businesses Since 1999"
        subtitle="We don’t just fix pipes; we build lasting relationships. Read what your neighbors and local business owners have to say about their experience with American Commercial Plumbing LLC."
      />
      <TestimonialsPageContent />
    </SiteLayout>
  );
}

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      {
        title: "Client Testimonials & 5-Star Reviews | American Commercial Plumbing LLC — Tucson, AZ",
      },
      {
        name: "description",
        content:
          "Read verified 5-star customer reviews and testimonials for American Commercial Plumbing LLC in Tucson, AZ. Over 25 years of trusted residential and commercial plumbing.",
      },
      {
        name: "keywords",
        content:
          "american commercial plumbing reviews, tucson plumber testimonials, emergency plumber reviews tucson, shawn hamilton plumbing reviews, commercial plumber ratings az",
      },
      {
        property: "og:title",
        content: "Client Testimonials & 5-Star Reviews | American Commercial Plumbing LLC",
      },
      {
        property: "og:description",
        content:
          "Read what Tucson homeowners and business owners say about American Commercial Plumbing LLC. 4.9 Star rated, 24/7 emergency service, ROC #321353.",
      },
      {
        property: "og:url",
        content: "https://americancommercialplumbing.com/testimonials",
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
        href: "https://americancommercialplumbing.com/testimonials",
      },
    ],
  }),
  component: TestimonialsPage,
});
