import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Droplets,
  Video,
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
  Wrench,
  Utensils,
  Building2,
  Store,
  Stethoscope,
  DollarSign,
  UserCheck,
  FileText,
  Flame,
  Activity,
  Trees,
  ShieldAlert,
} from "lucide-react";

import drainImg from "@/assets/service-drain.jpg";

export function DrainCleaningContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Residential Home",
    drainIssue: "Kitchen Sink / Disposal",
    address: "",
    preferredTime: "Next Available Tech",
    notes: "",
  });

  const scrollToSchedule = () => {
    const el = document.getElementById("drain-cleaning-schedule-form");
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

  // ── 6 DRAIN SERVICES ──
  const drainServices = [
    {
      icon: Droplets,
      title: "Hydro Jetting Services",
      desc: "Hydro jetting is the gold standard in drain cleaning. Using a specialized hose with a high-pressure nozzle, we blast water at up to 4,000 PSI into your pipes. This powerful stream scours the interior walls of your pipes, removing grease, roots, and mineral scale.",
      badge: "Up to 4,000 PSI",
      accent: "from-blue-600 to-cyan-600",
      bullets: [
        "Cleans the entire circumference of the pipe walls",
        "Obliterates heavy grease, sludge, and cooking oil buildup",
        "Shears invasive desert tree roots and hard water scale",
        "Flushes sand, silt, and decades of accumulated debris",
      ],
    },
    {
      icon: Wrench,
      title: "Professional Drain Snaking & Augering",
      desc: "For certain clogs, mechanical snaking is the right tool for the job. We use professional-grade augers and rooter machines to break through tough blockages and pull out debris. This is often the first step before hydro jetting to establish flow.",
      badge: "Mechanical Rooter",
      accent: "from-emerald-600 to-teal-700",
      bullets: [
        "Heavy-duty motorized cables to penetrate solid clogs",
        "Rapid flow restoration for emergency backups",
        "Safe mechanical retrieval of lodged foreign obstructions",
      ],
    },
    {
      icon: ShieldAlert,
      title: "Toilet & Main Line Clogs",
      desc: "A blocked toilet is a plumbing emergency. If plunging hasn't worked, our team has the tools to clear the clog without damaging your fixture or flooring. We also specialize in clearing main sewer line blockages that affect your entire property.",
      badge: "Emergency Clearing",
      accent: "from-rose-600 to-cta",
      bullets: [
        "Protects delicate porcelain toilet traps from scratching",
        "Clears whole-property main sewer line bottlenecks fast",
        "Eliminates hazardous sanitary sewage overflow risks",
      ],
    },
    {
      icon: Utensils,
      title: "Kitchen Sink & Grease Line Clearing",
      desc: "Kitchen sinks are prone to grease and food buildup that hardens over time. We use specialized equipment and environmentally safe degreasers to clear these stubborn blockages, especially critical for restaurants and commercial kitchens.",
      badge: "Grease Removal",
      accent: "from-amber-500 to-orange-600",
      bullets: [
        "Dissolves stubborn congealed fat, oil, and grease (FOG)",
        "Disposal unit and secondary branch pipe clearing",
        "Commercial kitchen grease line maintenance & code compliance",
      ],
    },
    {
      icon: Sparkles,
      title: "Shower & Bathtub Drain Cleaning",
      desc: "Hair, soap scum, and conditioner residue are the primary culprits for slow shower drains. We remove these blockages and thoroughly clean the P-trap and drain line to restore free-flowing drainage.",
      badge: "Hair & Scum Clear",
      accent: "from-indigo-600 to-purple-700",
      bullets: [
        "Cleans bathtub P-traps and shower floor drain strainers",
        "Removes deep-seated hair tangles and slimy soap deposits",
        "Stops standing dirty shower water from pooling around feet",
      ],
    },
    {
      icon: Video,
      title: "Post-Cleaning Video Inspection",
      desc: "After clearing your drain, we can run a high-definition video camera down the line to verify the clog is completely gone and check for any underlying structural issues like cracks, bellies, or root intrusion.",
      badge: "HD Verification",
      accent: "from-cyan-600 to-blue-700",
      bullets: [
        "Visual verification that pipes are restored to 100% bore",
        "Screening for hidden pipe fractures, bellies, or offsets",
        "Recorded video documentation for your property records",
      ],
    },
  ];

  // ── COMMERCIAL SECTORS ──
  const commercialSectors = [
    {
      icon: Utensils,
      title: "Restaurants & Food Service",
      desc: "Grease trap lines, kitchen drains, prep sinks, and floor drains. We help you maintain strict health code compliance and prevent grease backups during peak dining hours.",
    },
    {
      icon: Building2,
      title: "Property Management & HOAs",
      desc: "Main sewer lateral clogs, communal laundry room drains, and multi-unit bathroom stack clearing with transparent reporting.",
    },
    {
      icon: Store,
      title: "Retail & Office Spaces",
      desc: "Customer restroom drains, employee breakroom sinks, and main sewer lines maintained to keep facilities clean and welcoming.",
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Dental Facilities",
      desc: "Specialized drain cleaning that adheres strictly to medical sanitation standards, minimizing operational disruption.",
    },
  ];

  // ── 6 WARNING SIGNS ──
  const warningSigns = [
    {
      title: "Slow Draining Water",
      desc: "Water pools around your feet in the shower or takes minutes to empty from the kitchen sink.",
      icon: Droplets,
      badge: "Drain Sluggish",
    },
    {
      title: "Gurgling Sounds",
      desc: "You hear bubbling or gurgling sounds from toilet bowls or sink traps when running appliances or water.",
      icon: Activity,
      badge: "Trapped Air",
    },
    {
      title: "Foul Drain Odors",
      desc: "Unpleasant rotting food or sewage smells emanating from drain openings throughout the house.",
      icon: AlertTriangle,
      badge: "Rotting Sludge",
    },
    {
      title: "Recurrent Clogs",
      desc: "You find yourself plunging the same toilet or pouring hot water down the same drain every couple of weeks.",
      icon: Clock,
      badge: "Chronic Issue",
    },
    {
      title: "Multiple Clogged Fixtures",
      desc: "When running the washing machine causes the shower to back up, you have a primary sewer line blockage.",
      icon: ShieldAlert,
      badge: "Main Line Block",
    },
    {
      title: "Water Backup",
      desc: "Wastewater surfaces in your lowest tubs, showers, or floor drains—an urgent emergency warning.",
      icon: Flame,
      badge: "Active Backup",
    },
  ];

  // ── 6 ADVANTAGES ──
  const advantages = [
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "We provide flat-rate pricing before any work begins. No hidden dispatch fees, no surprise add-ons.",
      badge: "Flat-Rate Bids",
    },
    {
      icon: Droplets,
      title: "Advanced Equipment",
      desc: "Our fleet carries commercial-grade high-pressure hydro jetting trailers and high-definition video inspection cameras for any size job.",
      badge: "Modern Tools",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Your safety is paramount. Every technician entering your property is certified, drug-tested, and background-checked.",
      badge: "100% Vetted",
    },
    {
      icon: Sparkles,
      title: "Clean Engineering",
      desc: "We protect your floors and fixtures with drop cloths, and we clean up all debris before we leave. We treat your property like our own.",
      badge: "Zero Mess",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "Fully compliant with Arizona state regulations (ROC #321353) and carrying comprehensive liability insurance.",
      badge: "ROC #321353",
    },
    {
      icon: Clock,
      title: "25+ Years of Tucson Experience",
      desc: "We understand the unique plumbing challenges of Southern Arizona, from hard water calcium scale to aggressive mesquite roots.",
      badge: "Local Experts",
    },
  ];

  // ── 7 DRAIN FAQS ──
  const faqs = [
    {
      q: "Is hydro jetting safe for my pipes?",
      a: "Yes, hydro jetting is safe for most pipes when performed by a trained professional. However, we always assess the condition and material of your pipes first. For older, fragile pipes, we may recommend a gentler mechanical snaking approach or perform a video camera inspection before jetting.",
    },
    {
      q: "How often should I have my drains cleaned?",
      a: "For residential homes, we recommend professional drain cleaning every 1-2 years as preventative maintenance. For commercial kitchens and restaurants, we recommend quarterly or bi-annual hydro jetting depending on grease volume and seating capacity.",
    },
    {
      q: "Will hydro jetting damage my pipes?",
      a: "No. Hydro jetting uses pressurized water, not harsh corrosive chemicals or abrasive blades. When performed correctly by our certified technicians, it safely scours away grease and scale without compromising pipe integrity.",
    },
    {
      q: "Can you clear tree roots from my sewer line?",
      a: "Yes. Hydro jetting equipped with specialized rotating root-cutting nozzles is highly effective at cutting through and flushing away invasive tree roots. If roots have created severe structural breaks, we will also advise you on trenchless repair options.",
    },
    {
      q: "Do you use chemical drain cleaners?",
      a: "We do not recommend or use harsh chemical drain cleaners. Store-bought acid or lye cleaners generate intense heat that softens PVC pipes, corrodes cast iron, and creates severe splash hazards for plumbers. We rely on water pressure and mechanical tools that are safe and effective.",
    },
    {
      q: "What should I do if I have a complete drain blockage?",
      a: "Stop using water immediately! Do not flush toilets or run faucets, dishwashers, or washing machines. Call us immediately at (520) 221-2010 for rapid emergency dispatch. If you know where your main shut-off valve is, you can turn it off to prevent overflow.",
    },
    {
      q: "Do you offer drain cleaning for commercial grease lines?",
      a: "Absolutely. We specialize in commercial grease line hydro jetting and preventative maintenance for restaurants, hotels, food trucks, and cafeterias across Tucson, helping you maintain city code compliance and avoid grease trap failures.",
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
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Live Drain Dispatch · Up to 4,000 PSI Jetting
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Rapid Emergency Drain Clearing & Hydro Jetting
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
                <span>📅 Schedule Drain Service</span>
              </button>
            </div>
          </div>

          {/* 4 Trust Bar Cards (Visual Elements) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                <Droplets className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Hydro Jetting</span>
                <span className="text-[11px] font-bold text-slate-500">Up to 4,000 PSI</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center shrink-0">
                <Video className="h-5 w-5 text-cyan-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Video Scoping</span>
                <span className="text-[11px] font-bold text-slate-500">Camera Verified</span>
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
              <div className="h-11 w-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
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

      {/* ── 2. MORE THAN JUST A CLOG ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                <Droplets className="h-3.5 w-3.5" />
                More Than Just a Clog
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy tracking-tight leading-tight mb-6">
                We Don't Just Clear Pipes—We Clean Them
              </h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  A slow drain or a backed-up toilet is more than an inconvenience; it's a warning sign. Most store-bought chemicals and basic hand snakes only poke a hole through the blockage, leaving behind grease, scale, and debris that will cause another clog in a few weeks or months.
                </p>
                <p>
                  At <strong className="text-navy font-bold">American Commercial Plumbing LLC</strong>, we take a different approach. We don't just remove the blockage—we restore your pipes to their original diameter, removing the buildup that causes recurrent clogs in the first place.
                </p>
                <p>
                  Led by owner <strong className="text-navy font-bold">Shawn Hamilton</strong>, our family-run business has been serving Tucson and Southern Arizona since 1999. We bring commercial-grade equipment and 25+ years of clean engineering expertise to every drain cleaning job, whether it's a residential kitchen sink or a commercial grease line.
                </p>
              </div>

              {/* Founder Quote Card */}
              <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-4 shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 text-primary font-black text-lg">
                  SH
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 italic leading-snug">
                    "Snaking pokes a small hole; hydro jetting restores the entire pipe. We clean all 360 degrees of the pipe wall so you don't have to deal with the same frustrating clog month after month."
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
                  src={drainImg}
                  alt="High pressure hydro jetting machine blasting water into commercial plumbing drain"
                  className="w-full h-auto object-cover max-h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-blue-100 text-primary flex items-center justify-center shrink-0 font-bold">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-navy">Up to 4,000 PSI Hydro Scouring</div>
                      <div className="text-[11px] text-slate-500 font-medium">Scours grease, roots & scale to original pipe bore</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR DRAIN CLEANING SERVICES (6 CARDS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Droplets className="h-3.5 w-3.5" />
              Complete Drain Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Our Drain Cleaning Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We offer a comprehensive suite of drain services to handle any blockage, from the simplest sink to the most stubborn main sewer line:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {drainServices.map((svc, idx) => {
              const IconComp = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-90 group-hover:h-2 transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-200/80 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
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
          </div>
        </div>
      </section>

      {/* ── 4. HYDRO JETTING VS. SNAKING: WHAT'S THE DIFFERENCE? ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-5xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Layers className="h-3.5 w-3.5" />
              Method Comparison
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Hydro Jetting vs. Snaking: What's the Difference?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Many homeowners and business owners ask us which method is better. The answer depends on the situation, but here is a clear breakdown:
            </p>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm mb-10 bg-white">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F8FAFC] border-b border-slate-200">
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-navy w-1/4">Feature</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-slate-700 w-3/8">Drain Snaking</th>
                  <th className="py-4 px-6 text-xs font-black uppercase tracking-wider text-primary w-3/8 bg-blue-50/50">Hydro Jetting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs font-semibold text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-black text-navy">Method</td>
                  <td className="py-4 px-6">Mechanical rotating cable cuts hole through clog</td>
                  <td className="py-4 px-6 font-bold text-primary bg-blue-50/20">High-pressure water scours 360° of pipe walls</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-black text-navy">Result</td>
                  <td className="py-4 px-6">Clears a temporary path through the blockage</td>
                  <td className="py-4 px-6 font-bold text-primary bg-blue-50/20">Cleans the entire pipe circumference to original bore</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-black text-navy">Effectiveness</td>
                  <td className="py-4 px-6">Temporary; buildup remains and clog often returns</td>
                  <td className="py-4 px-6 font-bold text-primary bg-blue-50/20">Long-lasting; eliminates buildup and prevents future blocks</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-black text-navy">Best For</td>
                  <td className="py-4 px-6">Emergency flow opening, solid toy/wipe obstructions</td>
                  <td className="py-4 px-6 font-bold text-primary bg-blue-50/20">Grease, mineral scale, roots, full preventative maintenance</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-4 px-6 font-black text-navy">Risk Assessment</td>
                  <td className="py-4 px-6">Can punch holes in fragile, heavily corroded older pipes</td>
                  <td className="py-4 px-6 font-bold text-primary bg-blue-50/20">Extremely safe for most pipes; camera-evaluated first</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Our Approach Callout Box */}
          <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200">
            <h3 className="text-base font-black text-navy mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Our Professional Approach:
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-semibold">
              We often use a combination of both. We may snake first to establish flow, then follow with hydro jetting to thoroughly clean the line. We always assess your pipe material and condition before recommending a method.
            </p>
          </div>
        </div>
      </section>

      {/* ── 5. COMMERCIAL DRAIN CLEANING SERVICES ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Building2 className="h-3.5 w-3.5" />
              Built for Business
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Commercial Drain Cleaning Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              For businesses, a clogged drain is a costly disruption. We provide rapid-response drain cleaning and preventative maintenance for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {commercialSectors.map((sector, idx) => {
              const SectorIcon = sector.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary mb-4">
                      <SectorIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-black text-navy mb-2">{sector.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{sector.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Preventative Maintenance Callout */}
          <div className="p-8 rounded-3xl bg-navy text-white shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-electric block mb-1">Preventative Maintenance Plans</span>
              <h3 className="text-xl font-black text-white mb-2">Avoid Emergency Restaurant & Facility Shutdowns</h3>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                We offer scheduled quarterly and bi-annual jetting maintenance plans for commercial clients to keep grease lines flowing smoothly and ensure continuous health inspection compliance.
              </p>
            </div>
            <button
              onClick={scrollToSchedule}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-cta"
            >
              Consult Maintenance Plans
            </button>
          </div>
        </div>
      </section>

      {/* ── 6. SIGNS YOU NEED DRAIN CLEANING (6 SIGNS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
              <AlertTriangle className="h-3.5 w-3.5" />
              Warning Signals
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Signs You Need Drain Cleaning
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Don't wait for a complete backup. If you notice any of these warning signs, call us for professional drain cleaning:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {warningSigns.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-xs">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-navy mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7. THE ACP ADVANTAGE (6 PILLARS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              The Tucson Standard
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              The American Commercial Plumbing Advantage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you choose us for your drain cleaning needs, you are choosing a partner committed to doing the job right.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary shadow-xs">
                        <AdvIcon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
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

      {/* ── 8. SCHEDULE DRAIN SERVICE INTERACTIVE FORM ── */}
      <section id="drain-cleaning-schedule-form" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Calendar className="h-3.5 w-3.5" />
                Easy Scheduling
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-2">
                Schedule Drain Cleaning & Jetting
              </h2>
              <p className="text-slate-600 text-sm">
                Book a service appointment or call us directly at <a href="tel:+15202212010" className="text-primary font-bold hover:underline">(520) 221-2010</a> for immediate dispatch.
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
                  Thank you for contacting American Commercial Plumbing LLC. Our dispatch team will call you within one business hour to confirm technician arrival and service details.
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
                      placeholder="e.g. Jason Scott"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Residential Home">Residential Home / Condo</option>
                      <option value="Restaurant / Food Service">Restaurant / Food Service Facility</option>
                      <option value="Commercial Business / Retail">Commercial Business / Retail</option>
                      <option value="Property Management / HOA">Property Management / HOA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Clog / Service Needed *
                    </label>
                    <select
                      value={formData.drainIssue}
                      onChange={(e) => setFormData({ ...formData, drainIssue: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Kitchen Sink / Garbage Disposal">Kitchen Sink / Garbage Disposal</option>
                      <option value="Toilet Blockage / Overflow">Toilet Blockage / Overflow</option>
                      <option value="Shower / Bathtub Drain">Shower / Bathtub Drain</option>
                      <option value="High-Pressure Hydro Jetting">High-Pressure Hydro Jetting</option>
                      <option value="Main Sewer Lateral Backup">Main Sewer Lateral Backup</option>
                      <option value="Commercial Grease Trap Lines">Commercial Grease Trap Lines</option>
                      <option value="Camera Video Inspection">Camera Video Verification</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Property Address in Tucson Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 7890 N Oracle Rd, Tucson (or Marana, Oro Valley, Vail)"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Describe what is happening
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe symptoms (e.g. multiple sinks backing up, water gurgling in tub, standing water on floor)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    🔒 100% Upfront Pricing · Clean Engineering · Commercial-Grade Technology
                  </div>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider shadow-cta transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Drain Service</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 9. FREQUENTLY ASKED QUESTIONS (DRAIN CLEANING & JETTING) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <FileText className="h-3.5 w-3.5" />
              Drain FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
              Frequently Asked Questions (Drain Cleaning & Jetting)
            </h2>
            <p className="text-slate-600 text-sm">
              Clear answers to common questions about hydro jetting, snaking, and drain clearing in Tucson.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs transition-all"
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
                        <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
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

      {/* ── 10. BOTTOM CALL TO ACTION (FOOTER BANNER) ── */}
      <section className="py-20 bg-navy relative overflow-hidden text-white">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cta/15 blur-3xl pointer-events-none" />

        <div className="mx-auto w-[92%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Tucson’s Hydro Jetting Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Don't Let a Clog Slow You Down.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Restore your drains to full flow with professional hydro jetting and drain cleaning from Tucson’s most trusted plumbing experts.
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
              <span>📅 Schedule Your Drain Cleaning Service</span>
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
              <span>Background-Checked Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-amber-400" />
              <span>Up to 4,000 PSI Water Scouring</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
