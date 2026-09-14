import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Wrench,
  Flame,
  ShieldCheck,
  Star,
  Clock,
  Sparkles,
  ChevronDown,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Send,
  Check,
  Layers,
  Zap,
  UserCheck,
  DollarSign,
  FileText,
  RotateCw,
  Droplets,
  HeartHandshake,
  BadgeCheck,
  Activity,
  Home,
  ShieldAlert,
} from "lucide-react";

import waterHeaterImg from "@/assets/service-waterheater.jpg";

export function WaterHeaterContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceNeeded: "Water Heater Repair",
    heaterType: "Traditional Tank (Gas or Electric)",
    timeframe: "Next Available Tech",
    notes: "",
  });

  const scrollToSchedule = () => {
    const el = document.getElementById("water-heater-schedule-form");
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

  // ── 5 WATER HEATER SERVICES ──
  const services = [
    {
      icon: Wrench,
      title: "Water Heater Repair",
      desc: "Strange noises, rusty water, inconsistent temperatures, or puddles around the base? These are signs your water heater needs professional attention. We diagnose and repair all major brands and models.",
      badge: "Diagnostic & Repair",
      accent: "from-blue-600 to-indigo-700",
      bullets: [
        "Pilot light and electronic ignition troubleshooting",
        "Heating element and thermostat testing & replacements",
        "Temperature & pressure relief (T&P) valve replacements",
        "Sediment buildup descaling and high-flow flushes",
        "Leaking tanks, fittings, and thermal expansion tanks",
      ],
    },
    {
      icon: Flame,
      title: "Water Heater Installation & Replacement",
      desc: "When repair is no longer cost-effective, we provide expert installation of new water heaters. We help you navigate the options to find the perfect fit for your home's size, water usage, and budget.",
      badge: "Free In-Home Bids",
      accent: "from-amber-500 to-orange-600",
      bullets: [
        "Traditional gas & electric tank water heaters (30-80+ Gal)",
        "High-efficiency modern tankless water heaters",
        "Hybrid electric heat pump water heating systems",
        "Commercial-grade water heating systems & boiler setups",
        "Free haul-away and eco-friendly disposal of old units",
      ],
    },
    {
      icon: RotateCw,
      title: "Tankless Water Heater Specialists",
      desc: "Upgrade to endless hot water and lower energy bills. Tankless water heaters heat water on demand, taking up less space and lasting up to twice as long as traditional tanks. Our team are certified experts in tankless installation, descaling, and repair.",
      badge: "Endless Hot Water",
      accent: "from-emerald-600 to-teal-700",
      bullets: [
        "Endless, on-demand hot water that never runs out",
        "20-30% reduction in heating energy costs with zero standby loss",
        "Compact wall-mounted design frees up valuable square footage",
        "Annual vinegar descaling, diagnostic flushes & heat exchanger service",
      ],
    },
    {
      icon: Droplets,
      title: "Routine Maintenance & Flushing",
      desc: "Sediment buildup is the #1 killer of water heaters in Southern Arizona due to our mineral-rich hard water. Our annual maintenance service includes flushing the tank, inspecting the anode rod, and testing safety controls to extend unit lifespan and improve efficiency.",
      badge: "Sediment Prevention",
      accent: "from-cyan-600 to-blue-700",
      bullets: [
        "Annual sediment drain & mineral calcification flushing",
        "Sacrificial magnesium/aluminum anode rod wear inspection",
        "Pressure relief valve, thermostat, and emergency shutoff testing",
        "Combustion chamber vacuuming & burner efficiency tuning",
      ],
    },
    {
      icon: ShieldAlert,
      title: "24/7 Emergency Water Heater Service",
      desc: "A leaking or burst water heater tank can flood your home in minutes. If you have a water heater emergency, call us immediately at (520) 221-2010. We offer 24/7 emergency response to shut off the water, mitigate damage, and restore your hot water.",
      badge: "24/7 Rapid Dispatch",
      accent: "from-rose-600 to-cta",
      bullets: [
        "Immediate emergency technician dispatch across Tucson",
        "Urgent cold water supply isolation & flooding containment",
        "Same-day replacement units stocked on emergency vehicles",
      ],
    },
  ];

  // ── 7 WARNING SIGNS ──
  const warningSigns = [
    {
      title: "Age (Over 10 Years)",
      desc: "Traditional tanks generally last 8-12 years. If your unit is approaching or past a decade, replacement planning prevents sudden flood failures.",
      icon: Clock,
      badge: "10+ Years",
    },
    {
      title: "Rumbling or Popping Sounds",
      desc: "Banging, popping, or rumbling sounds indicate hardened sediment mineral layers boiling and trapping steam at the tank bottom.",
      icon: Activity,
      badge: "Sediment Crust",
    },
    {
      title: "Puddles or Active Leaks",
      desc: "Any moisture, standing water, or dripping fittings around the base of your heater requires immediate investigation before a tank rupture occurs.",
      icon: Droplets,
      badge: "Flooding Risk",
    },
    {
      title: "Rusty or Discolored Water",
      desc: "If only hot water comes out tinted yellow or brown, the inner steel lining or sacrificial anode rod is corroding from the inside out.",
      icon: AlertTriangle,
      badge: "Internal Rust",
    },
    {
      title: "Inconsistent Temperatures",
      desc: "Water only staying lukewarm or running out halfway through a shower points to failing heating elements, broken dip tubes, or faulty thermostats.",
      icon: Flame,
      badge: "Cold Showers",
    },
    {
      title: "Spike in Utility Bills",
      desc: "Sediment forces heating elements or gas burners to work twice as hard to penetrate mineral sludge, causing high electric or gas bills.",
      icon: DollarSign,
      badge: "High Energy",
    },
    {
      title: "Visible Tank Corrosion",
      desc: "Corrosion or white mineral crust on top inlet/outlet nipples, pressure relief valves, or the combustion chamber indicates impending failure.",
      icon: ShieldAlert,
      badge: "Corrosion",
    },
  ];

  // ── 6 ACP ADVANTAGES ──
  const advantages = [
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "We provide detailed flat-rate pricing before any work begins. No hidden fees, no surprise dispatch markups.",
      badge: "Flat-Rate Bids",
    },
    {
      icon: ShieldCheck,
      title: "Code-Compliant Installations",
      desc: "Water heaters involve gas, water, and electrical connections. We ensure every install meets strict Arizona building codes and passes municipal inspections.",
      badge: "ROC #321353",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Your family's safety is paramount. Every technician entering your home is certified, drug-tested, and background-checked.",
      badge: "100% Vetted",
    },
    {
      icon: Sparkles,
      title: "Clean Engineering",
      desc: "We protect your floors with drop cloths, clean up all debris, and haul away your old water heater unit for free.",
      badge: "Free Haul-Away",
    },
    {
      icon: BadgeCheck,
      title: "Licensed, Bonded & Insured",
      desc: "We are fully compliant (ROC #321353) and carry comprehensive liability insurance for your complete protection.",
      badge: "Full Protection",
    },
    {
      icon: HeartHandshake,
      title: "Warranty on Parts & Labor",
      desc: "We stand firmly behind our craftsmanship. Ask your technician for manufacturer warranty coverage and our labor guarantee.",
      badge: "Warranty Backed",
    },
  ];

  // ── 7 WATER HEATER FAQS ──
  const faqs = [
    {
      q: "How long does a water heater last?",
      a: "Traditional tank water heaters typically last 8-12 years, while tankless units can last 20+ years with proper maintenance. In Southern Arizona, mineral-rich hard water can shorten the lifespan of tank units if they are not flushed annually.",
    },
    {
      q: "How often should I flush my water heater?",
      a: "We recommend flushing your tank water heater once a year to remove sediment buildup. In Tucson, where hard water calcification is severe, annual flushing dramatically improves heating efficiency and extends the life of your unit.",
    },
    {
      q: "Do you offer free estimates on new water heater installations?",
      a: "Yes! We provide free, no-obligation estimates for water heater replacements and new installations. We will assess your home's water demands, venting, and utility connections to provide transparent, upfront pricing on all suitable options.",
    },
    {
      q: "Can you repair my water heater the same day?",
      a: "In most cases, yes. Our service trucks are stocked with common heating elements, thermostats, thermocouples, and pressure relief valves, allowing us to complete many repairs on the first visit. If a specialized part is required, we provide temporary mitigation and order it immediately.",
    },
    {
      q: "What size water heater do I need?",
      a: "Sizing depends on your household size and peak water usage. As a general rule: 1-2 people need a 30-40 gallon tank, 3-4 people need a 40-50 gallon tank, and 5+ people need a 50-80 gallon tank or a tankless system. Our technicians will calculate your peak hour demand to ensure you never run short.",
    },
    {
      q: "Do you install tankless water heaters?",
      a: "Absolutely. We are certified specialists in high-efficiency tankless water heater installation, repair, and annual descaling. We can evaluate your gas line diameter or electrical panel capacity to confirm your home's compatibility with an on-demand tankless system.",
    },
    {
      q: "What should I do if my water heater is leaking?",
      a: "Immediately turn off the power (flip the circuit breaker for electric) or shut off the gas control knob (for gas units). Next, shut off the cold water inlet valve on top of the heater. If you cannot stop the leak or if flooding has started, call our emergency line immediately at (520) 221-2010.",
    },
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* ── 1. TOP QUICK ACTION & TRUST BAR (PIXEL-PERFECT, STANDALONE) ── */}
      <section className="py-8 sm:py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          {/* Quick Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8 pb-8 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-amber-600 mb-1">
                <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                Live Hot Water Dispatch · Same-Day Repairs
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Direct Assistance & Free Installation Estimates
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
                onClick={scrollToSchedule}
                className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-electric" />
                <span>📅 Schedule Water Heater Service</span>
              </button>
            </div>
          </div>

          {/* 4 Trust Bar Cards (Visual Elements) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Expert Repair</span>
                <span className="text-[11px] font-bold text-slate-500">& New Installations</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                <Flame className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Tank & Tankless</span>
                <span className="text-[11px] font-bold text-slate-500">All Leading Brands</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">ROC #321353</span>
                <span className="text-[11px] font-bold text-slate-500">Licensed & Insured</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center shrink-0">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">4.9 Star Rating</span>
                <span className="text-[11px] font-bold text-slate-500">1,000+ Verified Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THE HEART OF YOUR HOME'S COMFORT ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-4">
                <Flame className="h-3.5 w-3.5 text-amber-600" />
                The Heart of Your Home's Comfort
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy tracking-tight leading-tight mb-6">
                Don't Settle for Cold Showers
              </h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Your water heater works tirelessly behind the scenes, providing comfort for your morning routine, sanitation for your kitchen, and warmth for your family. When it fails, it disrupts your entire household or business operations.
                </p>
                <p>
                  At <strong className="text-navy font-bold">American Commercial Plumbing LLC</strong>, we specialize in keeping your hot water flowing. Whether you need a quick repair on a traditional tank system or are ready to upgrade to a modern, energy-efficient tankless unit, our certified technicians have the expertise to get the job done right.
                </p>
                <p>
                  Led by owner <strong className="text-navy font-bold">Shawn Hamilton</strong>, our family-run business has been serving Tucson since 1999. We bring commercial-grade precision and clean engineering to every residential and commercial water heater project, ensuring your system is installed to code, operates safely, and lasts for years to come.
                </p>
              </div>

              {/* Founder Quote Box */}
              <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-4 shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center shrink-0 text-amber-800 font-black text-lg">
                  SH
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 italic leading-snug">
                    "In Tucson, hard water is ruthless on water heaters. We don't just swap parts; we engineer installations and flushes that maximize lifespan and efficiency, backed by honest, upfront flat-rate pricing."
                  </p>
                  <div className="mt-2 text-xs font-black text-navy uppercase tracking-wider">
                    Shawn Hamilton <span className="font-normal text-slate-500">· Owner & Master Plumber</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Image with Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src={waterHeaterImg}
                  alt="Precision tankless water heater installation with clean copper piping in Tucson"
                  className="w-full h-auto object-cover max-h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-navy">Clean Installation Guarantee</div>
                      <div className="text-[11px] text-slate-500 font-medium">Floor protection, complete debris cleanup & free haul-away</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR COMPREHENSIVE WATER HEATER SERVICES (5 CARDS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Wrench className="h-3.5 w-3.5" />
              Complete Hot Water Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Our Comprehensive Water Heater Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We offer a full suite of services to meet all your hot water needs across Tucson and Southern Arizona:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-90 group-hover:h-2 transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {svc.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-navy mb-3 group-hover:text-primary transition-colors">
                      {svc.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      {svc.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs font-semibold text-slate-700">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={scrollToSchedule}
                      className="w-full py-3 px-4 rounded-xl bg-slate-50 hover:bg-primary hover:text-white border border-slate-200 text-slate-800 text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 group-hover:border-primary cursor-pointer"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Emergency Hotline Promotion Card */}
            <div className="bg-navy rounded-3xl p-7 text-white shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-electric mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  24/7 Water Heater Hotline
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Water Heater Leaking or Burst?</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Don't risk major ceiling collapse or floor water damage. Our emergency plumbers are on standby 24/7 for immediate shutoff and rapid replacement.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+15202212010"
                  className="w-full py-3.5 px-4 rounded-xl bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-cta"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  <span>Call Emergency Dispatch</span>
                </a>
                <div className="text-[11px] text-center text-slate-400 font-bold">
                  Average Arrival: Within 60 Minutes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. TANK VS. TANKLESS: WHICH IS RIGHT FOR YOU? ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <RotateCw className="h-3.5 w-3.5" />
              Equipment Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Tank vs. Tankless: Which is Right for You?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Choosing the right water heater depends on your household size, water usage habits, and budget. Here is a quick comparison to help you decide:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Traditional Tank Card */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Conventional Model</span>
                    <h3 className="text-2xl font-black text-navy">Traditional Tank Water Heaters</h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary font-bold">
                    <Flame className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Pros */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Pros:
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      <li>• Lower initial upfront equipment and installation cost</li>
                      <li>• Simpler, straightforward plug-and-play installation</li>
                      <li>• Readily available replacement tanks on trucks</li>
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-rose-700 mb-2.5 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      Cons:
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      <li>• Standby energy loss constantly reheating standing water</li>
                      <li>• Limited hot water supply (runs out when tank empties)</li>
                      <li>• Larger floor footprint in closets or garages</li>
                      <li>• Shorter lifespan of 8-12 years</li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="p-4 rounded-2xl bg-white border border-slate-200">
                    <div className="text-[11px] font-black uppercase tracking-wider text-navy mb-1">
                      Best For:
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      Budget-conscious homeowners, smaller households, or properties without space or venting for tankless systems.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <button
                  onClick={scrollToSchedule}
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-black uppercase tracking-wider transition-all text-center cursor-pointer"
                >
                  Explore Tank Replacements
                </button>
              </div>
            </div>

            {/* Tankless Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50/50 via-white to-indigo-50/40 border-2 border-primary/30 shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                Popular Upgrade
              </div>
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block mb-1">On-Demand Technology</span>
                    <h3 className="text-2xl font-black text-navy">Tankless Water Heaters</h3>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                    <RotateCw className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Pros */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-emerald-700 mb-2.5 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      Pros:
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      <li>• Endless continuous hot water on demand that never runs out</li>
                      <li>• 20-30% more energy-efficient with zero standby standby loss</li>
                      <li>• Compact wall-mounted design frees up closets & garages</li>
                      <li>• Longer lifespan of 20+ years with annual descaling</li>
                    </ul>
                  </div>

                  {/* Cons */}
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-rose-700 mb-2.5 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4 text-rose-600" />
                      Cons:
                    </div>
                    <ul className="space-y-2 text-xs font-semibold text-slate-700">
                      <li>• Higher upfront initial installation investment</li>
                      <li>• May require electrical panel or gas supply line upgrades</li>
                      <li>• Limited simultaneous flow rate (run showers + laundry together)</li>
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="p-4 rounded-2xl bg-white border border-primary/20 shadow-xs">
                    <div className="text-[11px] font-black uppercase tracking-wider text-primary mb-1">
                      Best For:
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                      Large families, eco-conscious homeowners, or properties with limited storage looking to invest in long-term savings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <button
                  onClick={scrollToSchedule}
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-white text-xs font-black uppercase tracking-wider transition-all text-center cursor-pointer shadow-sm"
                >
                  Explore Tankless Conversions
                </button>
              </div>
            </div>
          </div>

          {/* Expert Advice Banner */}
          <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block">Not sure which is right for your home?</span>
                <span className="text-xs text-slate-600">Our technicians will assess your home's infrastructure and water demands to provide honest, pressure-free recommendations.</span>
              </div>
            </div>
            <a
              href="tel:+15202212010"
              className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider transition-all shrink-0 text-center"
            >
              Call for Advice
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. SIGNS YOU NEED WATER HEATER SERVICE ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
              <AlertTriangle className="h-3.5 w-3.5" />
              Early Warning Indicators
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Signs You Need Water Heater Service
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Don't wait for a catastrophic failure. If you notice any of these warning signs, call us for a diagnostic inspection:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-cta">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-navy mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              );
            })}

            {/* Quick Action Box */}
            <div className="p-6 rounded-3xl bg-navy text-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-electric mb-2">
                  <Sparkles className="w-3 h-3" />
                  Same-Day Diagnosis
                </div>
                <h3 className="text-lg font-black text-white mb-2">Noticed One of These Signs?</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-4">
                  Catching sediment calcification or leaks early saves thousands in emergency restoration costs.
                </p>
              </div>

              <a
                href="tel:+15202212010"
                className="w-full py-2.5 px-4 rounded-xl bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider text-center transition-all shadow-cta"
              >
                Call (520) 221-2010
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE ACP ADVANTAGE (6 PILLARS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <BadgeCheck className="h-3.5 w-3.5" />
              The Tucson Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              The American Commercial Plumbing Advantage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you hire us for your water heater needs, you get more than just a plumber—you get a dedicated partner committed to your safety and satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-xs">
                        <AdvIcon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-primary border border-blue-100">
                        {adv.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-navy mb-2.5">{adv.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. SCHEDULE WATER HEATER SERVICE INTERACTIVE FORM ── */}
      <section id="water-heater-schedule-form" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Calendar className="h-3.5 w-3.5" />
                Easy Scheduling
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-2">
                Schedule Your Water Heater Service
              </h2>
              <p className="text-slate-600 text-sm">
                Request a free installation estimate, repair diagnostic, or annual flush. You can also call us directly at <a href="tel:+15202212010" className="text-primary font-bold hover:underline">(520) 221-2010</a>.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-navy mb-2">Service Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for contacting American Commercial Plumbing LLC. Our water heater dispatch team will contact you within one business hour to confirm your appointment time and provide preliminary options.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-navy/90"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Robert Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(520) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Service Needed *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Water Heater Repair">Water Heater Repair (No Hot Water / Noises)</option>
                      <option value="Water Heater Replacement & Installation">New Installation / Replacement Estimate</option>
                      <option value="Tankless Upgrade Conversion">Tankless Upgrade Conversion</option>
                      <option value="Routine Maintenance & Flush">Routine Annual Flush & Inspection</option>
                      <option value="Emergency Leaking Unit">Emergency Leaking / Flooding Unit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Current Water Heater Type
                    </label>
                    <select
                      value={formData.heaterType}
                      onChange={(e) => setFormData({ ...formData, heaterType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Traditional Tank (Gas or Electric)">Traditional Tank (Gas or Electric)</option>
                      <option value="Tankless Water Heater">Tankless Unit</option>
                      <option value="Heat Pump / Hybrid Unit">Heat Pump / Hybrid Unit</option>
                      <option value="Commercial System">Commercial Boiler / System</option>
                      <option value="Not Sure">Not Sure / Need Help Identifying</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Preferred Timeframe / Urgency
                  </label>
                  <select
                    value={formData.timeframe}
                    onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="Emergency - As Soon As Possible">Emergency - As Soon As Possible</option>
                    <option value="Today - Next Available Tech">Today - Next Available Tech</option>
                    <option value="Tomorrow Morning (7 AM - 11 AM)">Tomorrow Morning (7 AM - 11 AM)</option>
                    <option value="Tomorrow Afternoon (11 AM - 3 PM)">Tomorrow Afternoon (11 AM - 3 PM)</option>
                    <option value="Flexible / Need Free Estimate First">Flexible / Need Free Estimate First</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Tell us about the issue or what you need
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what's happening (e.g., water heater is 12 years old, making knocking noises, or leaking from the bottom)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    🔒 100% Upfront Pricing · Free Replacement Estimates · Clean Engineering
                  </div>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider shadow-cta transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Service Schedule</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. FREQUENTLY ASKED QUESTIONS (WATER HEATERS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <FileText className="h-3.5 w-3.5" />
              Expert Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
              Frequently Asked Questions (Water Heaters)
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers to common questions about repairs, installations, and hard water maintenance in Tucson.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-black text-navy hover:text-primary transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/70 pt-4">
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

      {/* ── 9. BOTTOM CALL TO ACTION (FOOTER BANNER) ── */}
      <section className="py-20 bg-navy relative overflow-hidden text-white">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cta/15 blur-3xl pointer-events-none" />

        <div className="mx-auto w-[92%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Tucson’s Water Heating Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Restore Your Hot Water Today.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Don't suffer through cold showers or risk a flooded home. Contact American Commercial Plumbing LLC for expert water heater repair, maintenance, or installation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15202212010"
              className="bg-cta hover:brightness-110 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>📞 Call (520) 221-2010</span>
            </a>

            <button
              onClick={scrollToSchedule}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-8 py-4 rounded-full backdrop-blur-sm transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-electric" />
              <span>📅 Schedule Your Water Heater Service</span>
            </button>
          </div>

          {/* Guarantee Badges Row */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Upfront Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Arizona ROC #321353</span>
            </div>
            <div className="flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-emerald-400" />
              <span>Free Old Unit Haul-Away</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Same-Day Repair Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
