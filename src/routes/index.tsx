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
      { title: "American Commercial Plumbing LLC — Tucson, AZ Plumbers" },
      {
        name: "description",
        content:
          "Licensed plumbers in Tucson, AZ. 25+ years of commercial & residential plumbing. 24/7 emergency service, transparent pricing, satisfaction guaranteed.",
      },
      {
        property: "og:title",
        content: "American Commercial Plumbing LLC — Tucson, AZ",
      },
      {
        property: "og:description",
        content:
          "Premium commercial & residential plumbing in Tucson and surrounding areas.",
      },
    ],
    links: [
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
  return (
    <main className="relative bg-background text-foreground min-h-screen overflow-x-clip">
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
