import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  ShieldAlert,
  Building2,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Wrench,
  Flame,
  Droplets,
  Pipette,
  Search,
  FileText,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Utensils,
  Store,
  Stethoscope,
  GraduationCap,
  Briefcase,
  DollarSign,
  UserCheck,
  CalendarCheck,
  Send,
  Zap,
} from "lucide-react";

import commercialFacilityImg from "@/assets/service-commercial-facility.jpg";
import commercialWorkImg from "@/assets/service-commercial.jpg";

export function CommercialPlumbingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    facilityType: "Restaurant / Food Service",
    serviceNeeded: "Emergency Repair",
    message: "",
  });

  const scrollToForm = () => {
    const el = document.getElementById("commercial-service-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  // ── 6 COMMERCIAL CAPABILITIES ──
  const capabilities = [
    {
      icon: ShieldAlert,
      title: "24/7 Emergency Commercial Repair",
      desc: "Burst pipes, sewer backups, and major leaks don't wait for business hours. Our on-call commercial dispatch team is ready 24/7 to mitigate damage and restore your plumbing systems fast, minimizing operational downtime.",
      badge: "24/7 Rapid Dispatch",
      accent: "from-rose-600 to-cta",
      bullets: [
        "Immediate emergency technician dispatch across Tucson",
        "Rapid water main isolation & slab leak emergency mitigation",
        "Midnight sewer backup clearing & sanitary containment",
      ],
    },
    {
      icon: Wrench,
      title: "Commercial Restroom & Fixture Services",
      desc: "We service, repair, and install all types of heavy-duty commercial plumbing fixtures engineered for high-traffic environments.",
      badge: "High-Traffic Fixtures",
      accent: "from-blue-600 to-indigo-700",
      bullets: [
        "Commercial toilets and flush valves (Sloan, Zurn, etc.)",
        "Urinals and hands-free sensor-operated faucets",
        "Commercial multi-compartment sinks and grease traps",
        "ADA-compliant commercial fixture upgrades & retrofits",
      ],
    },
    {
      icon: Flame,
      title: "Water Heater & Boiler Systems",
      desc: "From routine preventative maintenance to full-scale replacement, we handle heavy-duty commercial water heating systems, ensuring your business has a consistent, reliable hot water supply.",
      badge: "Commercial Hot Water",
      accent: "from-amber-600 to-orange-600",
      bullets: [
        "Commercial tankless multi-unit manifolds & commercial boilers",
        "Gas & electric commercial water heater replacements",
        "Sediment descaling, flushing & thermal expansion tanks",
        "Recirculation pump diagnostic repair & installation",
      ],
    },
    {
      icon: Search,
      title: "Advanced Leak Detection & Pipe Repair",
      desc: "Using state-of-the-art acoustic and thermal imaging technology, we locate hidden leaks beneath concrete slabs or behind walls without unnecessary demolition.",
      badge: "Non-Destructive",
      accent: "from-indigo-600 to-purple-700",
      bullets: [
        "Acoustic & infrared thermal imaging pipe localization",
        "Commercial slab leak diagnostics with zero surface destruction",
        "Underground main line water pipe repair & bypass piping",
        "Complete commercial facility repiping (PEX & Copper)",
      ],
    },
    {
      icon: Droplets,
      title: "Sewer & Drain Line Services",
      desc: "We keep your commercial facility flowing smoothly with industrial-grade clearing equipment and trenchless technology.",
      badge: "Industrial Jetting",
      accent: "from-emerald-600 to-teal-700",
      bullets: [
        "High-pressure Hydro Jetting for heavy grease & scale blockages",
        "Commercial drain root-cutting and mechanical snaking",
        "High-definition video camera sewer line inspections",
        "Trenchless sewer line repair, spot lining & replacement",
      ],
    },
    {
      icon: Pipette,
      title: "Backflow Prevention & Testing",
      desc: "Protect your facility and the public municipal water supply. We provide certified backflow testing, repair, and installation to ensure your property remains fully compliant with local and state health codes.",
      badge: "Certified Compliance",
      accent: "from-cyan-600 to-blue-700",
      bullets: [
        "Annual certified backflow assembly testing & filing",
        "Reduced Pressure Zone (RPZ) valve rebuilds & installs",
        "Pima County & City of Tucson code compliance certificates",
        "Cross-connection survey & backflow emergency repairs",
      ],
    },
  ];

  // ── 5 INDUSTRIES WE SERVE ──
  const industries = [
    {
      icon: Utensils,
      title: "Restaurants & Food Service",
      desc: "Grease trap maintenance, health code compliance, and emergency drain clearing to keep your commercial kitchen open and operating smoothly.",
      tag: "Culinary & Dining",
    },
    {
      icon: Building2,
      title: "Property Management & HOAs",
      desc: "Reliable, respectful service for multi-family units, apartment complexes, and homeowner associations with transparent audit-ready billing.",
      tag: "Multi-Family Units",
    },
    {
      icon: Store,
      title: "Retail & Office Spaces",
      desc: "Maintaining restrooms, breakrooms, and main water lines for a clean, comfortable environment for employees and visiting customers.",
      tag: "Commercial Retail",
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Medical Facilities",
      desc: "Specialized plumbing services adhering to strict sanitation, backflow prevention, and sterile regulatory requirements.",
      tag: "Medical & Dental",
    },
    {
      icon: GraduationCap,
      title: "Schools & Municipal Buildings",
      desc: "Large-scale infrastructure maintenance, drinking fountain safety, and rapid repairs for high-occupancy public facilities.",
      tag: "Public Infrastructure",
    },
  ];

  // ── 5 ADVANTAGE POINTS ──
  const advantages = [
    {
      icon: DollarSign,
      title: "Upfront, Transparent Pricing",
      desc: "No surprise invoices. We provide detailed, flat-rate pricing before any commercial work begins, making facility budgeting easy.",
      badge: "Flat-Rate Bids",
      accent: "from-blue-600 to-indigo-700",
    },
    {
      icon: ShieldCheck,
      title: "Clean Engineering & Code Compliance",
      desc: "Every repair and installation is performed to the highest standards (ROC #321353), ensuring your property passes municipal inspections with flying colors.",
      badge: "ROC #321353",
      accent: "from-emerald-600 to-teal-700",
    },
    {
      icon: Zap,
      title: "Minimized Operational Downtime",
      desc: "We work efficiently and offer flexible after-hours and weekend scheduling to ensure your commercial operations continue uninterrupted.",
      badge: "Zero Business Interruption",
      accent: "from-amber-600 to-orange-600",
    },
    {
      icon: UserCheck,
      title: "Fully Vetted Technicians",
      desc: "Every technician dispatched to your commercial property is background-checked, drug-tested, and highly trained in commercial infrastructure.",
      badge: "Background-Checked Pros",
      accent: "from-indigo-600 to-purple-700",
    },
    {
      icon: CalendarCheck,
      title: "Preventative Maintenance Programs",
      desc: "Don't wait for a disaster. We offer customized maintenance plans to inspect your infrastructure, catch small issues early, and extend equipment lifespan.",
      badge: "Proactive Protection",
      accent: "from-rose-600 to-cta",
    },
  ];

  // ── 5 COMMERCIAL FAQS ──
  const faqs = [
    {
      q: "Do you offer after-hours or weekend commercial service?",
      a: "Yes. We understand that many plumbing repairs require shutting off water or making noise, which is disruptive during business hours. We offer flexible scheduling, including nights and weekends, to work around your operational needs. We also offer true 24/7 emergency dispatch.",
    },
    {
      q: "Are your technicians qualified to work in sensitive commercial environments?",
      a: "Absolutely. Our commercial technicians are background-checked, drug-tested, and trained to work professionally in occupied spaces, including healthcare facilities and restaurants. We prioritize cleanliness and safety on every job site.",
    },
    {
      q: "Can you handle large-scale commercial installations?",
      a: "Yes. From new construction plumbing to complete commercial repiping projects, our team has the manpower, equipment, and engineering expertise to handle projects of all sizes.",
    },
    {
      q: "Are you fully licensed and insured for commercial work?",
      a: "Yes. American Commercial Plumbing LLC is fully licensed, bonded, and insured in the state of Arizona. Our ROC License Number is #321353, and we carry comprehensive liability insurance to protect your property.",
    },
    {
      q: "Do you provide free estimates for commercial projects?",
      a: "Yes, we provide free estimates for commercial installations, replacements, and large-scale repair projects. For diagnostic service calls, a standard dispatch fee applies, which will be disclosed upfront.",
    },
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* ── 1. TOP QUICK ACTION & TRUST BAR (PIXEL-PERFECT) ─────────── */}
      <section className="py-8 sm:py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          {/* Quick Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8 pb-8 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Commercial Dispatch Available
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Direct Emergency Assistance & Commercial Bidding
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="tel:+15202212010"
                className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>📞 Call (520) 221-2010</span>
              </a>

              <button
                onClick={scrollToForm}
                className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-electric" />
                <span>📋 Request Commercial Service</span>
              </button>
            </div>
          </div>

          {/* 4 Trust Bar Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">25+ Years</span>
                <span className="text-[11px] font-bold text-slate-500">Serving Tucson</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">ROC #321353</span>
                <span className="text-[11px] font-bold text-slate-500">Licensed & Insured</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-cta" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">24/7 Rapid</span>
                <span className="text-[11px] font-bold text-slate-500">Emergency Dispatch</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center shrink-0">
                <UserCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">100% Vetted</span>
                <span className="text-[11px] font-bold text-slate-500">Certified Techs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BUILT FOR BUSINESS. ENGINEERED FOR RELIABILITY. ─────── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest text-primary mb-4">
                <Building2 className="w-3.5 h-3.5 text-cta" />
                <span>Built for Business · Engineered for Reliability</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
                Expert Plumbing Infrastructure for Commercial Properties
              </h2>

              <div className="mt-6 space-y-4 text-base text-slate-700 leading-relaxed font-medium">
                <p>
                  In the commercial sector, a plumbing failure isn't just an inconvenience—it’s a costly
                  operational hazard. From health code violations to water damage and forced shutdowns,
                  plumbing issues can cripple your business.
                </p>
                <p>
                  At American Commercial Plumbing LLC, we understand the high stakes of commercial
                  property management. Led by owner <strong className="text-navy font-bold">Shawn Hamilton</strong>,
                  our team brings over two decades of clean engineering and large-scale diagnostic
                  expertise to every job. We don't just patch problems; we provide long-term, durable
                  solutions that keep your business running smoothly.
                </p>
                <p>
                  Whether you manage a retail center, a multi-family complex, or a large-scale
                  industrial facility, we have the tools, licensing, and workforce to handle your
                  plumbing infrastructure.
                </p>
              </div>

              {/* Callout Highlights Card (Exact Brown Style) */}
              <div className="mt-8 p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary mb-2">
                  <Sparkles className="w-4 h-4 text-cta" />
                  <span>Licensed Commercial Plumbing Contractor · ROC #321353</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
                  Fully bonded and carrying comprehensive liability insurance across Pima County. We
                  handle engineering plan submissions, county permits, and scheduled shutoffs with
                  extreme care.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+15202212010"
                  className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Speak With a Commercial Specialist</span>
                </a>
                <button
                  onClick={scrollToForm}
                  className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Request a Commercial Bid</span>
                  <ArrowRight className="w-4 h-4 text-electric" />
                </button>
              </div>
            </motion.div>

            {/* Right Visual Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={commercialFacilityImg}
                  alt="Industrial Commercial Plumbing Mechanical Room with Copper Piping"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Glass Badge (Brown Style) */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary">
                        Commercial Mechanical Infrastructure
                      </div>
                      <div className="text-sm font-extrabold text-navy mt-0.5">
                        Clean Engineering & Code Compliance
                      </div>
                    </div>
                    <span className="text-xs font-black uppercase text-cta bg-cta/10 px-2.5 py-1 rounded-lg">
                      Tucson, AZ
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Counter Badges */}
              <div className="hidden sm:flex absolute -top-5 -left-5 bg-primary text-white p-4 rounded-2xl shadow-xl border border-white/20 flex-col items-center">
                <span className="text-2xl font-black text-white">25+</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-200 text-center leading-tight mt-0.5">
                  Years In Tucson
                </span>
              </div>

              <div className="hidden sm:flex absolute top-1/2 -right-5 -translate-y-1/2 bg-navy text-white p-3.5 rounded-2xl shadow-xl border border-white/20 flex-col items-center">
                <span className="text-xl font-black text-cta">100%</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-300 text-center leading-tight mt-0.5">
                  Upfront Pricing
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR COMMERCIAL PLUMBING CAPABILITIES ─────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Full-Spectrum Solutions
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Our Commercial Plumbing Capabilities
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              We offer comprehensive plumbing services tailored to the unique demands of commercial
              and industrial properties across Southern Arizona.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="rounded-3xl bg-white p-7 border border-slate-200 hover:border-cta/60 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cap.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-slate-50 px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy tracking-tight group-hover:text-primary transition-colors">
                      {cap.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {cap.desc}
                    </p>

                    <ul className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                      {cap.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={scrollToForm}
                      className="text-xs font-black uppercase tracking-wider text-primary hover:text-cta transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire For Facility</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Code Compliant
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRIES WE SERVE ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Sector Expertise
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              Our commercial plumbing expertise spans a wide range of industries across Tucson and
              Southern Arizona, ensuring code compliance and seamless operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-primary/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                        {ind.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy">{ind.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Dedicated Industry Protocols</span>
                  </div>
                </motion.div>
              );
            })}

            {/* Custom Consultation Box */}
            <div className="rounded-3xl bg-gradient-to-br from-navy to-[#0a235c] p-7 text-white flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-cta bg-white/10 px-2.5 py-1 rounded-full border border-white/20 inline-block mb-4">
                  Custom Facilities
                </span>
                <h3 className="text-lg font-black text-white">Have a Specialty Facility?</h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  We service distribution warehouses, manufacturing plants, laboratories, and athletic
                  complexes. Let our engineering team review your site plans.
                </p>
              </div>

              <a
                href="tel:+15202212010"
                className="mt-6 inline-flex items-center justify-center gap-2 bg-cta hover:brightness-110 text-white font-black text-xs uppercase tracking-wider py-3.5 px-6 rounded-full transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call (520) 221-2010</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE ACP ADVANTAGE (5 FEATURE CARDS) ─────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Why Choose Us
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              The American Commercial Plumbing Advantage
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              When you partner with us, you get more than just a contractor—you get a dedicated ally
              in facility maintenance and risk mitigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {advantages.map((adv, idx) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={adv.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  className="rounded-3xl bg-white p-7 border border-slate-200 hover:border-cta/60 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${adv.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-slate-50 px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                        {adv.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy tracking-tight group-hover:text-primary transition-colors">
                      {adv.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-black text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Commercial Guarantee</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. PREVENTATIVE MAINTENANCE PROGRAM ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#F7F7F7] border border-slate-200 p-8 sm:p-12 lg:p-14 shadow-sm relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 text-left">
                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest text-primary mb-4">
                  <CalendarCheck className="w-3.5 h-3.5 text-cta" />
                  <span>Preventative Maintenance for Commercial Properties</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-navy leading-tight tracking-tight">
                  Protect Your Investment with a Maintenance Plan
                </h2>

                <p className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  The best way to handle a plumbing emergency is to prevent it from happening in the
                  first place. Our commercial preventative maintenance programs are designed to save
                  you money on costly repairs, avoid unexpected shutdowns, and extend the lifespan of
                  your plumbing infrastructure.
                </p>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-navy mb-3">
                    Our Commercial Maintenance Plans Include:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Routine video camera inspections of main sewer lines",
                      "Water pressure and flow rate diagnostic testing",
                      "Water heater/boiler flushing and anode rod inspection",
                      "Electronic slab leak and acoustic surveys",
                      "Grease trap and backflow preventer annual checks",
                      "Documented facility audit for management & insurance",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={scrollToForm}
                    className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request a Maintenance Consultation</span>
                    <ArrowRight className="w-4 h-4 text-electric" />
                  </button>
                  <a
                    href="tel:+15202212010"
                    className="bg-white hover:bg-slate-50 text-navy font-black text-xs uppercase tracking-wider px-7 py-4 rounded-full border border-slate-300 shadow-xs transition-all flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-primary" />
                    <span>(520) 221-2010</span>
                  </a>
                </div>
              </div>

              {/* Right Image Feature */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                  <img
                    src={commercialWorkImg}
                    alt="Commercial plumbing technician servicing main lines"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. COMMERCIAL SERVICE REQUEST FORM (INTERACTIVE) ───────── */}
      <section id="commercial-service-form" className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Commercial Bids & Dispatch
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Request Commercial Service or Consultation
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-medium">
              Submit your property details below. A commercial plumbing manager will respond within one
              hour during business hours.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl text-left">
            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-navy mb-2">Request Received</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                    Thank you! Our commercial dispatch team has received your project details. Shawn
                    Hamilton or a senior commercial specialist will follow up shortly.
                  </p>
                  <div className="mt-6">
                    <a
                      href="tel:+15202212010"
                      className="inline-flex items-center gap-2 bg-cta text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full shadow-cta"
                    >
                      <Phone className="h-4 w-4" />
                      <span>For Immediate Dispatch: (520) 221-2010</span>
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Business / Property Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Foothills Plaza / Downtown Bistro"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mark Stevens (Facility Mgr)"
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Phone Number (Direct) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(520) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="manager@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Facility / Property Sector
                      </label>
                      <select
                        value={formData.facilityType}
                        onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white"
                      >
                        <option value="Restaurant / Food Service">Restaurant / Food Service</option>
                        <option value="Property Management / HOA">Property Management / HOA</option>
                        <option value="Retail / Shopping Center">Retail / Shopping Center</option>
                        <option value="Office Building">Office Building</option>
                        <option value="Medical / Dental Clinic">Medical / Dental Clinic</option>
                        <option value="Industrial / Warehouse">Industrial / Warehouse</option>
                        <option value="School / Municipal">School / Municipal</option>
                        <option value="Other Commercial">Other Commercial</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Commercial Service Needed
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white"
                      >
                        <option value="Emergency Repair">🚨 24/7 Emergency Repair</option>
                        <option value="Restroom & Fixture Services">Restroom & Flush Valve Services</option>
                        <option value="Commercial Water Heater / Boiler">Commercial Water Heater / Boiler</option>
                        <option value="Hydro Jetting & Drain Cleaning">Hydro Jetting & Drain Snaking</option>
                        <option value="Sewer Camera & Line Repair">Sewer Camera & Line Repair</option>
                        <option value="Backflow Testing & Certification">Backflow Testing & Certification</option>
                        <option value="Preventative Maintenance Plan">Preventative Maintenance Program</option>
                        <option value="Full Commercial Repiping / Bidding">Commercial Bid / Repiping Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Scope of Work / Issue Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Please describe symptoms, number of units affected, or bidding requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full bg-cta hover:brightness-110 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-cta transition-all cursor-pointer active:scale-95 disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      <span>{formSubmitting ? "Sending Request..." : "Submit Commercial Request"}</span>
                    </button>
                    <p className="text-center text-[11px] text-slate-500 font-semibold mt-3">
                      ROC #321353 · Licensed, Bonded & Insured · 100% Upfront Flat-Rate Pricing
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 8. FREQUENTLY ASKED QUESTIONS (COMMERCIAL) ─────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Commercial Support
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Frequently Asked Questions (Commercial)
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-medium">
              Important details about after-hours scheduling, sensitive environments, and licensing.
            </p>
          </div>

          <div className="space-y-3.5 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-[#F7F7F7] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-navy hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cta" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-3">
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

      {/* ── 9. BOTTOM CALL TO ACTION (FOOTER BANNER) ────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-navy via-[#0d2b6b] to-primary text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-cta/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-sm">
            <ShieldAlert className="w-3.5 h-3.5 text-cta" />
            <span>Protect Your Bottom Line</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Don't Let a Plumbing Failure Shut Down Your Business.
          </h2>

          <p className="mt-4 text-slate-200 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Partner with Tucson’s most trusted commercial plumbing experts. Contact us today for rapid
            response, preventative maintenance, and code-compliant solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+15202212010"
              className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>📞 Call (520) 221-2010</span>
            </a>

            <button
              onClick={scrollToForm}
              className="bg-white hover:bg-slate-100 text-navy text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <ShieldAlert className="w-4 h-4 text-cta" />
              <span>🚨 Request Emergency Commercial Service</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              24/7 Commercial Dispatch
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              100% Upfront Pricing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              ROC #321353 Licensed & Insured
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
