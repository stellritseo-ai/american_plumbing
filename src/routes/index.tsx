import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { Process } from "@/components/site/Process";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Projects } from "@/components/site/Projects";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceArea } from "@/components/site/ServiceArea";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
// import { CTASection } from "@/components/site/CTASection";
import { StatsSection } from "@/components/site/StatsSection";
import { Footer } from "@/components/site/Footer";
import { BackgroundBlobs } from "@/components/site/BackgroundBlobs";
import { FloatingChat } from "@/components/site/FloatingChat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "American Commercial Plumbing LLC — Tucson, AZ Plumbers | 24/7 Service",
      },
      {
        name: "description",
        content:
          "Licensed commercial & residential plumbers in Tucson, AZ. 25+ years experience. 24/7 emergency dispatch, hydro jetting, water heaters, leak detection & repiping. ROC #321353.",
      },
      {
        name: "keywords",
        content:
          "plumber tucson az, commercial plumbing tucson, residential plumbing tucson, emergency plumber tucson az, 24 7 plumber tucson, water heater repair tucson, drain cleaning tucson, hydro jetting tucson, leak detection tucson, sewer camera inspection tucson, licensed plumbing contractor tucson, shawn holton plumbing, roc 321353",
      },
      {
        property: "og:title",
        content: "American Commercial Plumbing LLC — Tucson, AZ Plumbers",
      },
      {
        property: "og:description",
        content:
          "Licensed commercial & residential plumbing specialists in Tucson, AZ. 24/7 rapid dispatch, transparent flat-rate pricing & guaranteed craftsmanship. ROC #321353.",
      },
      {
        property: "og:url",
        content: "https://acptucson.com/",
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
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "American Commercial Plumbing LLC - Tucson Plumbers",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "American Commercial Plumbing LLC — Tucson, AZ Plumbers",
      },
      {
        name: "twitter:description",
        content:
          "Licensed commercial & residential plumbing contractors in Tucson, AZ. 24/7 emergency dispatch, upfront pricing. ROC #321353.",
      },
      {
        name: "twitter:image",
        content: "https://acptucson.com/og-image.png",
      },
    ],
    links: [
      { rel: "canonical", href: "https://acptucson.com/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["PlumbingService", "HomeAndConstructionBusiness"],
        "@id": "https://acptucson.com/#business",
        name: "American Commercial Plumbing LLC",
        alternateName: "ACP Tucson",
        url: "https://acptucson.com/",
        logo: "https://acptucson.com/logo.png",
        image: "https://acptucson.com/og-image.png",
        description:
          "Licensed commercial and residential plumbing contractors serving Tucson and Southern Arizona since 1999. 24/7 emergency service, hydro jetting, water heaters, leak detection & repiping.",
        telephone: "+15202212010",
        email: "shawn@acptucson.com",
        founder: {
          "@type": "Person",
          name: "Shawn Holton",
        },
        priceRange: "$$",
        paymentAccepted: "Cash, Credit Card, Check, Invoice",
        currenciesAccepted: "USD",
        address: {
          "@type": "PostalAddress",
          streetAddress: "226 E Forrest Feezor St",
          addressLocality: "Vail",
          addressRegion: "AZ",
          postalCode: "85641",
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 32.0468,
          longitude: -110.7121,
        },
        areaServed: [
          { "@type": "City", name: "Tucson" },
          { "@type": "City", name: "Vail" },
          { "@type": "City", name: "Oro Valley" },
          { "@type": "City", name: "Marana" },
          { "@type": "City", name: "Sahuarita" },
          { "@type": "City", name: "Green Valley" },
          { "@type": "City", name: "Catalina Foothills" },
        ],
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "16:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
            description: "24/7 Emergency Plumbing Dispatch",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "128",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Plumbing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Commercial Plumbing Services",
                url: "https://acptucson.com/commercial-plumbing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Residential Plumbing Services",
                url: "https://acptucson.com/residential-plumbing",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "24/7 Emergency Plumbing Repairs",
                url: "https://acptucson.com/emergency-repairs",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Drain Cleaning & Hydro Jetting",
                url: "https://acptucson.com/drain-cleaning",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Water Heater Repair & Installation",
                url: "https://acptucson.com/water-heaters",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Water Leak Detection & Repair",
                url: "https://acptucson.com/leak-detection",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Sewer Line Camera Inspection",
                url: "https://acptucson.com/sewer-line-inspection",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Whole-Home Repiping & Gas Lines",
                url: "https://acptucson.com/repiping-gas-lines",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://acptucson.com/#website",
        url: "https://acptucson.com/",
        name: "American Commercial Plumbing LLC",
        publisher: {
          "@id": "https://acptucson.com/#business",
        },
      },
    ],
  };

  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <BackgroundBlobs />
      <Header />
      <Hero />
      <TrustStrip />
      <About />
      <Services />
      <EmergencyCTA />
      <Process />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <ServiceArea />
      <FAQ />
      <Contact />
      {/* <CTASection /> */}
      <StatsSection />
      <Footer />
      <FloatingChat />
    </main>
  );
}
