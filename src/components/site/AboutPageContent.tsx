import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  Building2,
  Home,
  Users,
  Star,
  ArrowRight,
  Heart,
  CalendarCheck,
  Search,
  Receipt,
  Wrench,
  CheckSquare,
  Droplets,
  Flame,
  Pipette,
  ShieldAlert,
  Send,
  Video,
} from "lucide-react";

import welImg from "@/assets/wel-img.jpg";
import commImg from "@/assets/service-commercial.jpg";
import resiImg from "@/assets/service-residential.jpg";
import waterheaterImg from "@/assets/service-waterheater.jpg";
import sewerImg from "@/assets/service-sewer.jpg";
import drainImg from "@/assets/service-drain.jpg";
import leakImg from "@/assets/service-leak.jpg";
import logo from "@/assets/logo.png";

import { submitLead } from "../../lib/send-lead";

export function AboutPageContent() {
  const [activeCategory, setActiveCategory] = useState<
    "commercial" | "residential" | "waterheater" | "sewer" | "drain" | "leak"
  >("commercial");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Commercial Plumbing",
    isEmergency: false,
    message: "",
  });

  // ── WHAT SETS US APART (5 FEATURE CARDS) ──
  const differentiators = [
    {
      icon: Award,
      title: "25+ Years of Excellence",
      desc: "Since 1999, we have navigated the ever-changing plumbing codes and technologies to bring you the most reliable solutions available in Tucson.",
      badge: "Since 1999",
      accent: "from-blue-600 to-indigo-700",
    },
    {
      icon: Users,
      title: "Family-Owned & Operated",
      desc: "As a family business, our name is on the line with every job. We treat your property with the same respect we would our own.",
      badge: "Shawn Holton & Family",
      accent: "from-amber-600 to-orange-600",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "Your peace of mind is our priority. We are fully compliant with Arizona state regulations (ROC #321353) and carry comprehensive insurance.",
      badge: "ROC #321353",
      accent: "from-emerald-600 to-teal-700",
    },
    {
      icon: CheckCircle2,
      title: "Background-Checked Technicians",
      desc: "We send only certified, background-checked professionals to your door. You can feel safe knowing exactly who is working in your home or business.",
      badge: "Certified Pros",
      accent: "from-indigo-600 to-purple-700",
    },
    {
      icon: Receipt,
      title: "Upfront, Transparent Pricing",
      desc: "No hidden fees. No surprises. We provide transparent pricing before any work begins so you can make informed decisions.",
      badge: "Zero Hidden Fees",
      accent: "from-rose-600 to-cta",
    },
  ];

  // ── OUR COMMITMENT (4 PILLARS) ──
  const commitments = [
    {
      title: "Advanced HD Camera Inspections",
      desc: "We combine state-of-the-art diagnostic cameras and leak detection to inspect your pipes before any repairs begin.",
    },
    {
      title: "2:00 AM & 2:00 PM Readiness",
      desc: "Whether it’s a routine maintenance check or a 2:00 AM midnight emergency, our team is ready to serve you with professionalism and speed.",
    },
    {
      title: "100% Upfront Honest Pricing",
      desc: "Transparent estimates provided before work starts with zero hidden fees, diagnostic markups, or unpleasant surprises.",
    },
    {
      title: "Decades of Practical Experience",
      desc: "Combining old-school integrity with modern plumbing technology to deliver the highest standard in Southern Arizona.",
    },
  ];

  // ── CORE VALUES ──
  const coreValues = [
    {
      icon: Heart,
      title: "Family-Owned & Community Trust",
      desc: "Led by founder Shawn Holton, we believe in doing things the right way. Every client is treated with neighborly respect.",
    },
    {
      icon: Award,
      title: "Commercial-Grade Standards",
      desc: "Commercial grade quality shouldn't just be for businesses—it is our baseline standard for every home and family we serve.",
    },
    {
      icon: ShieldAlert,
      title: "Clean Engineering & Safety",
      desc: "We take pride in protecting the health and safety of Tucson’s water systems with immaculate job-site cleanliness.",
    },
    {
      icon: Clock,
      title: "Punctuality & 24/7 Response",
      desc: "We respect your schedule and your urgent needs, delivering rapid response dispatch across Southern Arizona.",
    },
  ];

  // ── 5-STEP PROCESS ──
  const steps = [
    {
      num: "01",
      icon: CalendarCheck,
      title: "Schedule & Request",
      desc: "Call (520) 221-2010 or request online. Rapid 24/7 dispatch tailored to your urgent plumbing needs.",
    },
    {
      num: "02",
      icon: Search,
      title: "On-Site Diagnostic",
      desc: "Non-destructive acoustic leak detection and high-definition video sewer camera evaluations.",
    },
    {
      num: "03",
      icon: Receipt,
      title: "Transparent Estimate",
      desc: "Receive an upfront, honest quote before any work starts with zero hidden charges.",
    },
    {
      num: "04",
      icon: Wrench,
      title: "Professional Execution",
      desc: "Master plumbing craftsmanship using commercial-grade parts, fixtures, and precision pipe engineering.",
    },
    {
      num: "05",
      icon: CheckSquare,
      title: "Testing & Guarantee",
      desc: "Comprehensive pressure testing, clean job-site clean-up, and our 100% Upfront & Honest Guarantee.",
    },
  ];

  // ── SERVICES OFFERED (INTERACTIVE TABS) ──
  const serviceCategories = {
    commercial: {
      title: "Commercial Plumbing Operations",
      icon: Building2,
      image: commImg,
      desc: "We understand that downtime costs money. We provide rapid response and preventative maintenance for Tucson businesses, ensuring your operations run smoothly without plumbing interruptions.",
      items: [
        "Rapid response and preventative maintenance for commercial facilities",
        "Commercial sewer, grease, and main drain clearing",
        "Industrial water heater and boiler maintenance",
        "Backflow prevention testing and Arizona code compliance",
        "Zero-business-downtime maintenance schedules",
      ],
    },
    residential: {
      title: "Full Residential Plumbing",
      icon: Home,
      image: resiImg,
      desc: "From leaky faucets to full repiping, we keep your home’s water running clean and safe with commercial-grade durability.",
      items: [
        "Whole-home copper and PEX repiping",
        "Kitchen and bathroom fixture repair & replacement",
        "Main water shut-off valve upgrades and pressure regulation",
        "Toilet, sink, and garbage disposal troubleshooting",
        "Water filtration and softening installation",
      ],
    },
    waterheater: {
      title: "Water Heater Repair & Installation",
      icon: Flame,
      image: waterheaterImg,
      desc: "Continuous hot water solutions for residential homes and commercial operations across Tucson.",
      items: [
        "High-efficiency tankless water heater installation",
        "Standard gas and electric water heater repairs",
        "System descaling, sediment flushing, and anode rod replacement",
        "Emergency hot water restoration and replacement",
        "Thermostat, thermocouple, and pressure relief valve maintenance",
      ],
    },
    sewer: {
      title: "Sewer Line Inspection & Repair",
      icon: Video,
      image: sewerImg,
      desc: "Advanced video camera diagnostics to locate tree root intrusions, breaks, and line collapses without digging up your entire yard.",
      items: [
        "High-definition video sewer camera inspections",
        "Trenchless pipe repair and sewer line replacement",
        "Root intrusion clearing and mechanical snaking",
        "Sewer gas odor detection and smoke testing",
        "Cleanout installation and main lateral maintenance",
      ],
    },
    drain: {
      title: "Drain Cleaning & Hydro Jetting",
      icon: Droplets,
      image: drainImg,
      desc: "Commercial-grade hydro jet scouring to clear the stubbornest grease, sediment, and mineral scale.",
      items: [
        "High-pressure hydro jetting for commercial & residential lines",
        "Main sewer line and branch line unclogging",
        "Kitchen grease trap and drain maintenance",
        "Bathroom tub, shower, and sink drain clearance",
        "Safe, eco-friendly drain restoration without harsh chemicals",
      ],
    },
    leak: {
      title: "Leak Detection & Gas Line Services",
      icon: Pipette,
      image: leakImg,
      desc: "Non-destructive acoustic and thermal leak detection, plus licensed gas line installations and safety testing.",
      items: [
        "Non-invasive acoustic slab leak detection",
        "Thermal imaging to locate hidden wall and ceiling leaks",
        "Licensed gas line installation, testing, and appliance hookups",
        "Emergency gas leak detection and shutoff valve repairs",
        "24/7 rapid emergency repair dispatch",
      ],
    },
  };

  // ── SERVICE AREAS (3 REGIONS) ──
  const areas = {
    tucson: [
      "Central Tucson",
      "Foothills",
      "Eastside",
      "Westside",
      "Downtown",
      "South Tucson",
    ],
    pima: [
      "Vail",
      "Sahuarita",
      "Green Valley",
      "Corona de Tucson",
      "Rita Ranch",
    ],
    corridor: [
      "Marana",
      "Catalina",
      "Oro Valley",
      "Continental Ranch",
      "Gladden Farms",
    ],
  };

  const scrollToEstimate = () => {
    const el = document.getElementById("estimate-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white">
      {/* ── 1. WELCOME & OUR STORY (BROWN STYLE SPLIT HERO) ─────────── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest text-primary mb-4">
                <Star className="w-3.5 h-3.5 text-cta fill-current" />
                <span>Founded by Shawn Holton in 1999</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
                A Legacy of Craftsmanship & Community Trust
              </h2>

              <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                American Commercial Plumbing LLC is a family-run enterprise proudly founded and led by
                owner <strong className="text-navy font-bold">Shawn Holton</strong>. For over two
                decades, we have been a staple in the Tucson community, building a reputation not just
                on the quality of our pipes and fixtures, but on the foundation of clean engineering,
                integrity, and client satisfaction.
              </p>

              {/* Story Highlights Card (Exact Brown Style) */}
              <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary mb-2.5">
                  <Award className="w-4 h-4 text-cta" />
                  <span>Commercial-Grade Quality For Every Home</span>
                </div>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold">
                  What started as a commitment to doing the job right has grown into a full-service
                  operation capable of handling everything from minor residential repairs to complex
                  commercial infrastructure. At American Commercial Plumbing, we believe that
                  "commercial grade" quality shouldn't just be for businesses—it should be the standard
                  for every home and family we serve.
                </p>
                <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  We are more than just plumbers; we are your neighbors. We are deeply rooted in
                  Tucson and Southern Arizona, and we take pride in protecting the health and safety of
                  our community’s water systems.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:+15202212010"
                  className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call (520) 221-2010</span>
                </a>

                <button
                  onClick={scrollToEstimate}
                  className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4 text-electric" />
                </button>
              </div>
            </motion.div>

            {/* Right Visual Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={welImg}
                  alt="American Commercial Plumbing LLC Craftsmanship"
                  className="w-full h-[440px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Glass Badge (Brown Style) */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-primary">
                        ROC #321353 Arizona State Compliant
                      </div>
                      <div className="text-sm font-extrabold text-navy mt-0.5">
                        Licensed · Insured · Bonded
                      </div>
                    </div>
                    <img src={logo} alt="ACP Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Floating Counter Badges (Brown Style) */}
              <div className="hidden sm:flex absolute -top-6 -left-6 bg-primary text-white p-4 rounded-2xl shadow-xl border border-white/20 flex-col items-center">
                <span className="text-2xl font-black text-white">25+</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-200 text-center leading-tight mt-0.5">
                  Years Exp.
                </span>
              </div>

              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-navy text-white p-3.5 rounded-2xl shadow-xl border border-white/20 flex-col items-center">
                <span className="text-xl font-black text-electric">100%</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-300 text-center leading-tight mt-0.5">
                  Upfront Pricing
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT SETS US APART (5 FEATURE CARDS, EXACT BROWN STYLE) ── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              The American Commercial Plumbing Difference
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              When you hire us, you aren't just getting a contractor; you are getting a dedicated
              partner who ensures the job is done safely, efficiently, and correctly the first time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-cta/60 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${diff.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                        {diff.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-navy tracking-tight group-hover:text-primary transition-colors">
                      {diff.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-extrabold text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Certified Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. OUR COMMITMENT & CORE VALUES (BROWN STYLE DARK BOX + GRID) ── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Commitment Box */}
          <div className="rounded-3xl bg-[#0c2357] text-white p-8 sm:p-12 relative overflow-hidden border border-white/15 shadow-2xl mb-16">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 w-80 h-80 bg-electric/20 rounded-full blur-3xl pointer-events-none"
            />
            <div
              aria-hidden
              className="absolute -left-20 -bottom-20 w-80 h-80 bg-cta/15 rounded-full blur-3xl pointer-events-none"
            />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-cta bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                100% Upfront & Honest
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Our Commitment to You
              </h2>
              <p className="mt-2 text-slate-200 text-sm sm:text-base font-medium">
                We believe in doing things the right way. That is why we offer a 100% Upfront & Honest
                Guarantee. We combine state-of-the-art tools—like advanced leak detection and camera
                inspections—with decades of practical experience to offer you the best possible service
                experience.
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {commitments.map((item) => (
                  <div
                    key={item.title}
                    className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 border border-white/20 shadow-md">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-white">{item.title}</h4>
                      <p className="mt-1 text-xs text-slate-200 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Guiding Principles
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Our Core Values
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-base font-black text-navy tracking-tight">{val.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. OUR 5-STEP PROCESS TIMELINE (EXACT BROWN STYLE) ──────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              How We Work
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Our Simple 5-Step Process
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              From initial dispatch to final walkthrough, we keep everything streamlined, clear, and
              hassle-free.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="rounded-3xl bg-[#F7F7F7] p-6 border border-slate-200/90 relative flex flex-col justify-between hover:bg-white hover:border-cta/60 hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-primary">{st.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-black text-navy group-hover:text-primary transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES WE OFFER (INTERACTIVE TABS, EXACT BROWN STYLE) ── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Full Capability Spectrum
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Expert Solutions for Every Pipe, Drain, and Fixture
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              Whether you are a property manager maintaining a large facility or a homeowner dealing
              with a midnight emergency, we have the tools and expertise to handle it.
            </p>

            {/* Category Filter Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {(Object.keys(serviceCategories) as Array<keyof typeof serviceCategories>).map(
                (catKey) => {
                  const cat = serviceCategories[catKey];
                  const Icon = cat.icon;
                  const active = activeCategory === catKey;
                  return (
                    <button
                      key={catKey}
                      onClick={() => setActiveCategory(catKey)}
                      className={`px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                        active
                          ? "bg-primary text-white shadow-md border border-primary/50"
                          : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{cat.title.split(" ")[0]}</span>
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* Active Category Display Panel */}
          <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest mb-3">
                  Service Spotlight
                </div>
                <h3 className="text-2xl font-black text-navy">
                  {serviceCategories[activeCategory].title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  {serviceCategories[activeCategory].desc}
                </p>

                <ul className="mt-6 space-y-3">
                  {serviceCategories[activeCategory].items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-800 text-sm font-semibold">
                      <div className="p-1 rounded-full bg-emerald-100 text-emerald-600 shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={scrollToEstimate}
                    className="inline-flex items-center gap-2 bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full shadow-cta transition cursor-pointer"
                  >
                    <span>Request This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="/#services"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-primary transition-colors px-4 py-3"
                  >
                    <span>View All Services</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-h-[360px]">
                  <img
                    src={serviceCategories[activeCategory].image}
                    alt={serviceCategories[activeCategory].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. AREAS WE SERVE (3 REGIONS IN DARK CARD, EXACT BROWN STYLE) ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#0c2357] text-white p-8 sm:p-12 border border-white/15 shadow-2xl relative overflow-hidden">
            <div
              aria-hidden
              className="absolute -right-20 -bottom-20 w-80 h-80 bg-electric/20 rounded-full blur-3xl pointer-events-none"
            />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-cta bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                Southern Arizona Coverage
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                Proudly Serving Tucson & Surrounding Communities
              </h2>
              <p className="mt-3 text-slate-200 text-sm font-medium">
                We are locally owned and deeply invested in the safety of Southern Arizona. We proudly
                serve:
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left">
              {/* Region 1: Greater Tucson */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                  <MapPin className="w-5 h-5 text-electric" />
                  <h3 className="text-lg font-black text-white">Greater Tucson</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.tucson.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-semibold text-slate-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Region 2: Pima County Communities */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                  <MapPin className="w-5 h-5 text-electric" />
                  <h3 className="text-lg font-black text-white">Pima County</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.pima.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-semibold text-slate-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Region 3: Northwest Corridor */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                  <MapPin className="w-5 h-5 text-electric" />
                  <h3 className="text-lg font-black text-white">North & Northwest</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.corridor.map((city) => (
                    <span
                      key={city}
                      className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-semibold text-slate-200"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center relative z-10">
              <p className="text-xs text-slate-300 font-semibold italic">
                "And surrounding areas. Don't see your neighborhood? Give our dispatch team a quick
                call at (520) 221-2010—we serve throughout Southern Arizona."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. OUR REPUTATION SPEAKS FOR ITSELF (EXACT BROWN STYLE) ── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Social Proof & Trust
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Our Reputation Speaks for Itself
            </h2>
            <p className="mt-4 text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              Join the thousands of satisfied Tucson homeowners and businesses who trust American
              Commercial Plumbing LLC for their plumbing needs.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-primary">1,000+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">
                  Projects Completed
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-primary">25+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">
                  Years in Tucson
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-primary">ROC #321353</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">
                  Licensed & Bonded
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-primary">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">
                  Upfront Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. LET'S WORK TOGETHER / MEET THE TEAM & CONTACT (BROWN STYLE) ── */}
      <section id="estimate-section" className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-cta bg-cta/10 px-3.5 py-1 rounded-full border border-cta/20">
              Experience The Difference Today
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-black text-navy tracking-tight">
              Let's Work Together
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              Whether it’s a routine maintenance check or a 2:00 AM emergency, our team is ready to
              serve you with professionalism and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Direct Contact Details Card */}
            <div className="lg:col-span-5 rounded-3xl bg-[#0c2357] text-white p-8 sm:p-10 border border-white/15 shadow-xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-electric mb-2">
                  Contact Information
                </div>
                <h3 className="text-2xl font-black text-white">
                  American Commercial Plumbing LLC
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium">
                  Family-run enterprise led by Shawn Holton. Serving Southern Arizona since 1999.
                </p>

                <div className="mt-8 space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+15202212010"
                    className="flex items-start gap-3.5 text-white hover:text-electric transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-electric group-hover:bg-electric/20 transition-all">
                      <Phone className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Phone
                      </div>
                      <div className="text-base font-bold text-white">(520) 221-2010</div>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:shawn@acptucson.com"
                    className="flex items-start gap-3.5 text-white hover:text-electric transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-electric group-hover:bg-electric/20 transition-all">
                      <Send className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Email
                      </div>
                      <div className="text-sm font-bold text-white break-all">
                        shawn@acptucson.com
                      </div>
                    </div>
                  </a>

                  {/* Address */}
                  <a
                    href="https://maps.google.com/?q=226+E+Forrest+Feezor+St,+Vail,+AZ+85641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 text-white hover:text-electric transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-electric group-hover:bg-electric/20 transition-all">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Address
                      </div>
                      <div className="text-sm font-bold text-white leading-snug">
                        226 E Forrest Feezor St<br />
                        Vail, AZ 85641
                      </div>
                    </div>
                  </a>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5 text-white">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 text-cta">
                      <Clock className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        Operating Hours
                      </div>
                      <div className="text-sm font-bold text-white">
                        Monday - Friday: 7:00 AM - 4:00 PM
                      </div>
                      <div className="text-xs font-bold text-cta mt-0.5 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cta animate-pulse" />
                        <span>24/7 Emergency Service Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-300">ROC #321353 Licensed</span>
                <a
                  href="tel:+15202212010"
                  className="px-4 py-2 rounded-full bg-cta text-white text-xs font-black uppercase tracking-wider hover:brightness-110 transition shadow-cta"
                >
                  Contact Us Today
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Estimate & Service Request Form */}
            <div className="lg:col-span-7 rounded-3xl bg-[#F7F7F7] p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-black text-navy uppercase tracking-wider">
                      Request Received!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 font-medium max-w-sm mx-auto">
                      Thank you! Our Tucson team will review your request and contact you within the hour.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-primary/90 transition cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setFormSubmitting(true);
                      await submitLead({
                        formTitle: "About Page - Service Request Form",
                        name: formData.name,
                        phone: formData.phone,
                        email: formData.email,
                        service: formData.serviceType,
                        urgency: formData.isEmergency ? "URGENT 24/7 EMERGENCY" : "Standard Scheduling",
                        message: formData.message,
                      });
                      setFormSubmitting(false);
                      setFormSubmitted(true);
                    }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl font-black text-navy">Request Service Online</h3>
                      <p className="text-xs text-slate-500 font-medium mt-1">
                        Fill in your details below for upfront pricing and fast scheduling.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(520) 221-2010"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                          Service Needed
                        </label>
                        <select
                          value={formData.serviceType}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceType: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition cursor-pointer"
                        >
                          <option value="Commercial Plumbing">Commercial Plumbing</option>
                          <option value="Residential Plumbing">Residential Plumbing</option>
                          <option value="Water Heater Repair & Installation">
                            Water Heater Repair & Installation
                          </option>
                          <option value="Sewer Line Inspection & Repair">
                            Sewer Line Inspection & Repair
                          </option>
                          <option value="Drain Cleaning & Hydro Jetting">
                            Drain Cleaning & Hydro Jetting
                          </option>
                          <option value="Leak Detection & Repair">Leak Detection & Repair</option>
                          <option value="Gas Line Services">Gas Line Services</option>
                          <option value="Emergency Repairs (24/7)">Emergency Repairs (24/7)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                        Describe the Issue / Scope
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about the issue or project details..."
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                      />
                    </div>

                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-slate-200">
                      <input
                        type="checkbox"
                        id="emergency-toggle"
                        checked={formData.isEmergency}
                        onChange={(e) =>
                          setFormData({ ...formData, isEmergency: e.target.checked })
                        }
                        className="w-4 h-4 rounded text-cta focus:ring-cta border-slate-300 cursor-pointer"
                      />
                      <label
                        htmlFor="emergency-toggle"
                        className="text-xs font-bold text-slate-700 cursor-pointer select-none"
                      >
                        Urgent 24/7 emergency dispatch requested
                      </label>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={formSubmitting}
                        className="flex-1 min-w-[180px] bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-8 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <span>{formSubmitting ? "Submitting..." : "Request Service"}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <a
                        href="tel:+15202212010"
                        className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Phone className="w-4 h-4 text-electric" />
                        <span>Call (520) 221-2010</span>
                      </a>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
