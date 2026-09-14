import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Send,
  Check,
  Building2,
  Home,
  Wrench,
  DollarSign,
  UserCheck,
  FileText,
  HelpCircle,
  MessageSquare,
  Flame,
  Droplets,
  Layers,
  MapPin,
  Mail,
  Smartphone,
  Info,
} from "lucide-react";
import { submitLead } from "../../lib/send-lead";

export function RequestEstimateContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    propertyType: "Residential",
    serviceNeeded: "Water Heater",
    projectDescription: "",
    contactMethod: "Phone",
    contactTime: "Morning",
    hearAboutUs: "Google",
    smsConsent: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    await submitLead({
      formTitle: "Request Estimate Page Form",
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      propertyType: formData.propertyType,
      service: formData.serviceNeeded,
      urgency: `Preferred time: ${formData.contactTime}`,
      preferredContact: formData.contactMethod,
      message: `${formData.projectDescription}\n[Referral: ${formData.hearAboutUs}]${formData.smsConsent ? "\n[SMS updates consent: Yes]" : ""}`,
    });
    setFormSubmitting(false);
    setFormSubmitted(true);
  };

  const trustBadges = [
    {
      icon: CheckCircle2,
      title: "Free Estimates",
      subtitle: "On installations & whole-system replacements",
      badge: "Zero Obligation",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      subtitle: "Arizona ROC #321353 · Full liability protection",
      badge: "ROC #321353",
    },
    {
      icon: Star,
      title: "4.9 Star Rating",
      subtitle: "1,000+ verified Tucson customer reviews",
      badge: "Top Rated",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Techs",
      subtitle: "Certified, drug-tested, clean engineering professionals",
      badge: "Verified Pros",
    },
  ];

  const whyPillars = [
    {
      icon: SearchIcon,
      title: "A Thorough Assessment",
      desc: "We don't guess. We inspect the issue or project site to understand exactly what's needed before proposing any solution.",
    },
    {
      icon: Sparkles,
      title: "Clear, Plain-English Options",
      desc: "We explain your choices clearly, outlining the pros, cons, energy efficiency, and longevity of different systems without plumbing jargon.",
    },
    {
      icon: DollarSign,
      title: "100% Flat-Rate Pricing",
      desc: "You receive a detailed, upfront quote for the completed project—not an open-ended hourly rate that balloons unexpectedly.",
    },
    {
      icon: ShieldCheck,
      title: "Zero High-Pressure Sales",
      desc: "We never push unnecessary services or parts. We provide honest facts so you make the best decision for your home or business.",
    },
  ];

  const residentialProjects = [
    "Water Heater Installation & Replacement (Tank & Tankless)",
    "Whole-Home Repiping (PEX & Copper replacing failing lines)",
    "Sewer Line Replacement (Traditional excavation & trenchless)",
    "Fixture Upgrades (Toilets, designer sinks, faucets, showers, tubs)",
    "Bathroom & Kitchen Remodels (Rough-in and custom finish work)",
    "Water Softener & Whole-Home Filtration Systems",
    "Gas Line Installation (Ranges, outdoor BBQ, fire pits, pool heaters)",
  ];

  const commercialProjects = [
    "Commercial Water Heater & Boiler Systems (Installation & replacement)",
    "Commercial Facility Repiping (Vertical risers & main distribution)",
    "Sewer Line Replacement (Restaurants, hospitality & multi-family)",
    "ADA-Compliant Restroom Fixture Upgrades & Code Renovations",
    "Backflow Prevention Assembly Installation & Testing",
    "Commercial Kitchen Grease Trap Line Installation",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Submit Your Request",
      desc: "Fill out the online form below or call (520) 221-2010. Provide as much detail as possible about your project or issue.",
      icon: FileText,
    },
    {
      step: "02",
      title: "Initial Consultation",
      desc: "Our team contacts you within 1 hour during business hours (Mon-Fri 7 AM - 4 PM) to review details and schedule a site visit if needed.",
      icon: Clock,
    },
    {
      step: "03",
      title: "On-Site Assessment",
      desc: "For larger jobs (repipe, water heater, remodel), a certified technician visits your property to measure and evaluate scope.",
      icon: MapPin,
    },
    {
      step: "04",
      title: "Receive Upfront Estimate",
      desc: "We present a transparent, flat-rate proposal detailing materials, scope, timeline, and total cost with zero surprise add-ons.",
      icon: DollarSign,
    },
    {
      step: "05",
      title: "Approve & Schedule",
      desc: "Once you approve the estimate, we lock in your preferred installation date. No work begins until you give the green light.",
      icon: CheckCircle2,
    },
  ];

  const infoPreparation = [
    { title: "Contact Information", detail: "Full name, phone number, and preferred email address." },
    { title: "Service Address", detail: "Street address, city, and ZIP code where work will take place." },
    { title: "Property Type", detail: "Single-family residential, HOA/multi-family, or commercial facility." },
    { title: "Project or Issue Description", detail: "What you need done, fixtures involved, or symptoms observed." },
    { title: "Photos (If Applicable)", detail: "Visual snapshots of the existing equipment, leaks, or layout." },
    { title: "Preferred Timeline", detail: "When you need the project started or completed." },
    { title: "Budget Considerations", detail: "Sharing target budgets helps us tailor the most value-driven solutions." },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "25+ Years of Tucson Experience",
      desc: "Family-owned and operated since 1999. We understand Southern Arizona's water chemistry and building codes.",
    },
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "The price we quote is the price you pay. No hidden service charges, trip surprises, or inflated overtime.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "Arizona ROC #321353 with comprehensive commercial and residential liability coverage.",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Every technician entering your home is certified, drug-tested, and background-screened for your safety.",
    },
    {
      icon: Sparkles,
      title: "Clean Engineering Standard",
      desc: "We protect your floors with runners, clean up thoroughly, and leave your property cleaner than we found it.",
    },
    {
      icon: Wrench,
      title: "Warranty on Parts & Labor",
      desc: "We stand firmly behind our workmanship and the top-tier materials we install.",
    },
  ];

  const faqs = [
    {
      q: "Are estimates really free?",
      a: "Yes! We provide 100% free, no-obligation estimates on all installations, replacements, and large-scale projects (such as water heater replacements, whole-home repiping, sewer line replacements, and bathroom/kitchen remodels). For diagnostic service calls (like finding an active hidden leak, clearing a stubborn drain clog, or troubleshooting an unknown malfunction), a standard dispatch diagnostic fee applies, which we disclose upfront before dispatch. If you proceed with the repair, this fee is often credited toward the work!",
    },
    {
      q: "How quickly will I receive my estimate?",
      a: "For straightforward replacements or simple projects, we can often provide an accurate estimate over the phone or via email within one business day. For larger projects requiring on-site measurements, we schedule a convenient visit and deliver your detailed flat-rate proposal promptly after the inspection.",
    },
    {
      q: "Do I need to be home for the estimate?",
      a: "For an accurate assessment on major projects, it is best if the property owner or an authorized representative is present to discuss preferences, review options, and provide access to equipment. For exterior main line replacements or commercial bids, unaccompanied site access can often be coordinated.",
    },
    {
      q: "What if I decide not to proceed with the work?",
      a: "That is completely fine! Our estimates are 100% no-obligation. We provide honest information, transparent options, and flat-rate pricing with zero sales pressure. You are always in full control of your project.",
    },
    {
      q: "Do you offer financing?",
      a: "Yes! We understand major plumbing infrastructure projects like repiping or commercial boilers can be unexpected. Please contact our office at (520) 221-2010 to discuss flexible financing solutions tailored to your project budget.",
    },
    {
      q: "Can you provide an estimate for commercial properties?",
      a: "Absolutely. We specialize in commercial plumbing for restaurants, property management groups, HOA boards, healthcare facilities, and retail centers. Provide your facility details in the form or call our commercial team directly.",
    },
    {
      q: "What areas do you serve?",
      a: "We proudly serve Tucson and all surrounding Southern Arizona communities, including Vail, Sahuarita, Marana, Oro Valley, Green Valley, Catalina, and Drexel Heights.",
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cta/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-[90%] max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6"
            >
              <DollarSign className="w-3.5 h-3.5 text-cta" />
              <span>100% Upfront & Flat-Rate Pricing · Zero Obligation</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.1] mb-6"
            >
              Get 100% Upfront & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cta">
                Honest Pricing.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto"
            >
              No hidden fees. No surprise charges. Tell us about your plumbing project or issue,
              and we'll provide you with a transparent, flat-rate estimate before any work begins.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#estimate-form-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-cta text-white font-extrabold text-base shadow-cta hover:brightness-110 active:scale-98 transition-all"
              >
                <FileText className="w-5 h-5 text-white" />
                <span>Fill Out the Form Below</span>
              </a>
              <a
                href="tel:+15202212010"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-navy text-white font-extrabold text-base hover:bg-slate-800 active:scale-98 transition-all shadow-md"
              >
                <Phone className="w-5 h-5 text-cta" />
                <span>Call (520) 221-2010</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR (STANDALONE PIXEL-PERFECT CARDS) ── */}
      <section className="py-8 bg-slate-100/70 border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-black text-navy tracking-tight truncate">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-tight">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. WHY REQUEST AN ESTIMATE (NARRATIVE SECTION) ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
                <DollarSign className="w-3.5 h-3.5 text-cta" />
                <span>Total Pricing Transparency</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-6 leading-tight">
                Know the Cost <br />
                <span className="text-primary">Before We Start.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                We believe that genuine trust begins with transparency. Homeowners and business owners deserve
                to know exactly what a plumbing project will cost before making a commitment. That's why we offer
                free, no-obligation estimates on a wide range of plumbing installations, replacements, and large-scale projects.
              </p>
              <p className="text-slate-600 leading-relaxed text-base mb-8">
                Led by owner Shawn Holton, our family-run business has been serving Tucson since 1999.
                We combine 25+ years of clean engineering expertise with a commitment to honest, responsive communication.
                When you request an estimate from us, you get straight answers and real engineering precision.
              </p>

              {/* Founder quote box */}
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-slate-700 text-sm leading-relaxed">
                <div className="flex items-center gap-2.5 mb-2 font-black text-navy">
                  <ShieldCheck className="w-4.5 h-4.5 text-primary" />
                  <span>The Shawn Holton Commitment · Tucson Since 1999</span>
                </div>
                "Plumbing should never come with fine print or surprise invoices. We quote the actual scope,
                stand by our flat rates, and treat your property with the same care we would our own."
              </div>
            </div>

            {/* Right 4 Pillars Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyPillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-black text-navy mb-2 tracking-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHAT PROJECTS QUALIFY FOR A FREE ESTIMATE ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Eligible Project Scope</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              What Projects Qualify for a Free Estimate?
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We provide free estimates for a wide variety of installation, replacement, and remodeling projects
              across residential and commercial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Residential Projects Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                    <Home className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-navy tracking-tight">
                      Residential Projects
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      Homes, condos, townhomes & private estates
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {residentialProjects.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
                <span>Free On-Site Assessment</span>
                <ArrowRight className="w-4 h-4 text-cta" />
              </div>
            </div>

            {/* Commercial Projects Card */}
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-navy/10 text-navy border border-navy/20 flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-navy tracking-tight">
                      Commercial Projects
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">
                      Restaurants, facilities, retail, HOAs & industrial
                    </span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {commercialProjects.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
                <span>Commercial Bidding & Consultation</span>
                <ArrowRight className="w-4 h-4 text-cta" />
              </div>
            </div>
          </div>

          {/* Diagnostic Service Call Note Box */}
          <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/90 border border-amber-300/80 shadow-xs flex items-start gap-4 text-slate-700 text-xs sm:text-sm leading-relaxed">
            <Info className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-black text-navy mb-1">
                Note on Diagnostic Service Calls
              </h4>
              <p className="text-slate-600 leading-relaxed">
                For diagnostic service calls (e.g., locating an unknown hidden leak, troubleshooting a faulty water heater,
                or scoping a stubborn drain clog), a standard dispatch fee applies. This fee covers the cost of sending a
                certified technician to your property equipped with diagnostic gear. We will always disclose this fee upfront
                before scheduling. <strong>If you proceed with the recommended repair, this diagnostic fee is often credited directly toward the cost of the work.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. HOW OUR ESTIMATE PROCESS WORKS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <Clock className="w-3.5 h-3.5 text-cta" />
              <span>Simple, Transparent & Stress-Free</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              How Our Estimate Process Works
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We've designed our estimate workflow to be fast, clear, and organized from first click to final walkthrough.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-cta font-mono">
                        {s.step}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>
                    <h3 className="text-base font-black text-navy mb-2 tracking-tight">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-extrabold text-primary">
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Customer Approved</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. WHAT INFORMATION SHOULD YOU HAVE READY ── */}
      <section className="py-16 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-5xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-2">
              What Information Should You Have Ready?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
              Having these quick details on hand helps us provide the fastest, most accurate pricing possible:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {infoPreparation.map((info, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-md bg-primary/10 text-primary flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-xs font-black text-navy">{info.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {info.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. REQUEST YOUR ESTIMATE NOW (INTERACTIVE FORM) ── */}
      <section id="estimate-form-section" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto w-[90%] max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-3">
                <Send className="w-3.5 h-3.5 text-cta" />
                <span>Direct Dispatch · 1-Hour Response Time</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
                Request Your Estimate Now
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Please provide as much detail as possible. A member of our team will review your request
                and get back to you within one hour during normal business hours (Mon-Fri, 7 AM - 4 PM).
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center max-w-lg mx-auto"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-navy mb-2">
                  Estimate Request Received!
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Thank you, <strong>{formData.fullName}</strong>. Our estimating coordinator has received your project details
                  and will contact you via <strong>{formData.contactMethod}</strong> shortly.
                </p>
                <a
                  href="tel:+15202212010"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cta text-white font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-cta"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (520) 221-2010 for Instant Assistance</span>
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name, Phone, Email */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(520) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                {/* Address, Property Type, Service Needed */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Service Address
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="Street, City, ZIP"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) =>
                        setFormData({ ...formData, propertyType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Residential">Residential Home</option>
                      <option value="Commercial">Commercial Facility</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceNeeded: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Water Heater">Water Heater Installation / Repair</option>
                      <option value="Repiping">Whole-Home / Commercial Repiping</option>
                      <option value="Sewer Line">Sewer Line Inspection / Replacement</option>
                      <option value="Leak Detection">Leak Detection & Slab Repair</option>
                      <option value="Drain Cleaning">Drain Cleaning & Hydro Jetting</option>
                      <option value="Gas Line">Gas Line Installation / Repair</option>
                      <option value="Remodel">Bathroom / Kitchen Remodel</option>
                      <option value="Other">Other Plumbing Project</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                    Project Description (Please describe your project or issue in detail)
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDescription}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectDescription: e.target.value,
                      })
                    }
                    placeholder="Provide details: symptoms, age of home, tankless vs tank preference, remodel timing..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                {/* Contact Method, Contact Time, Hear About Us */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) =>
                        setFormData({ ...formData, contactMethod: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="Email">Email</option>
                      <option value="Text">SMS / Text Message</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Preferred Time for Contact
                    </label>
                    <select
                      value={formData.contactTime}
                      onChange={(e) =>
                        setFormData({ ...formData, contactTime: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Morning">Morning (7 AM - 11 AM)</option>
                      <option value="Afternoon">Afternoon (11 AM - 3 PM)</option>
                      <option value="Evening">Evening (3 PM - 6 PM)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      How Did You Hear About Us?
                    </label>
                    <select
                      value={formData.hearAboutUs}
                      onChange={(e) =>
                        setFormData({ ...formData, hearAboutUs: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Google">Google Search</option>
                      <option value="Referral">Friend / Neighbor Referral</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Repeat Customer">Repeat Customer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* SMS Checkbox */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="smsConsent"
                    checked={formData.smsConsent}
                    onChange={(e) =>
                      setFormData({ ...formData, smsConsent: e.target.checked })
                    }
                    className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary/20 cursor-pointer"
                  />
                  <label htmlFor="smsConsent" className="text-xs text-slate-600 cursor-pointer">
                    I consent to receive SMS updates regarding my service request. Message and data rates may apply.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-3">
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-cta text-white font-black text-sm uppercase tracking-wider shadow-cta hover:brightness-110 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {formSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Estimate Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Estimate Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2">
                    🔒 100% upfront flat-rate pricing. No obligation. ROC #321353.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. THE ACP ADVANTAGE ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Peace of Mind</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              The American Commercial Plumbing Advantage
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              When you request an estimate from us, you're not just getting a price—you're getting total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-primary/40 transition-all flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-navy mb-1.5 tracking-tight">
                      {adv.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-cta" />
              <span>Clear Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Frequently Asked Questions (Estimates)
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about our honest, upfront estimating process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50/70 border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-100/70 transition-colors"
                  >
                    <span className="text-base font-black text-navy pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cta" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 10. BOTTOM CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-navy via-slate-900 to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-[90%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta/20 border border-cta/30 text-cta text-xs font-black uppercase tracking-widest mb-6">
            <DollarSign className="w-3.5 h-3.5 text-cta" />
            <span>Honest Tucson Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Don't wait for a small issue to become a big expense. Contact American Commercial Plumbing LLC today
            for your free, upfront estimate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+15202212010"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cta text-white font-extrabold text-base shadow-cta hover:brightness-110 active:scale-98 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Call (520) 221-2010</span>
            </a>
            <a
              href="#estimate-form-section"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-navy font-extrabold text-base hover:bg-slate-100 active:scale-98 transition-all shadow-md"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Request Your Estimate</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
