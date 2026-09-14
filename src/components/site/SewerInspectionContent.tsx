import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Video,
  Search,
  ShieldCheck,
  Star,
  Clock,
  Home,
  Building2,
  AlertTriangle,
  FileText,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Send,
  Check,
  Droplets,
  Wrench,
  Layers,
  Sparkles,
  MapPin,
  Trees,
  Compass,
  DollarSign,
  UserCheck,
  ShieldAlert,
} from "lucide-react";

import sewerImg from "@/assets/service-sewer.jpg";

export function SewerInspectionContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Residential Homeowner",
    inspectionReason: "Recurrent Clogs / Slow Drains",
    address: "",
    preferredDate: "Next Available Day",
    notes: "",
  });

  const scrollToSchedule = () => {
    const el = document.getElementById("sewer-inspection-schedule-form");
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

  // ── 5 INSPECTION SCENARIOS ──
  const scenarios = [
    {
      icon: Home,
      title: "Real Estate Transactions",
      desc: "Buying a home in Southern Arizona? A standard home inspection often misses major sewer line defects. A pre-purchase sewer inspection can save you tens of thousands of dollars by revealing root intrusions, collapsed pipes, or bellies before you sign the dotted line.",
      badge: "Buyer Protection",
      accent: "from-blue-600 to-indigo-700",
      bullets: [
        "Pre-closing escrow sewer video inspection",
        "Full digital video recording for seller credits or negotiations",
        "Prevents surprise $10k+ sewer replacement surprises after move-in",
      ],
    },
    {
      icon: Droplets,
      title: "Recurrent Clogs & Slow Drains",
      desc: "If you find yourself plunging the same toilet or sink every few months, there is a deeper issue than simple buildup. An inspection reveals the root cause—whether it's roots, scale, or a structural break.",
      badge: "Definitive Diagnosis",
      accent: "from-cyan-600 to-blue-700",
      bullets: [
        "Uncovers chronic blockages snaking can't permanently solve",
        "Differentiates simple hair/grease from broken sewer pipes",
        "Saves money on repeated emergency plunge & snake callouts",
      ],
    },
    {
      icon: Building2,
      title: "Commercial Property Maintenance",
      desc: "For restaurants, hotels, and multi-family properties, a sewer backup can shut down operations and violate health codes. Routine inspections are a critical part of a preventative maintenance plan.",
      badge: "Zero Downtime",
      accent: "from-amber-600 to-orange-600",
      bullets: [
        "Annual proactive scoping for grease traps & main laterals",
        "Health department compliance documentation & audit logs",
        "Multi-family HOA tenant line diagnostic mapping",
      ],
    },
    {
      icon: Wrench,
      title: "Pre-Construction & Remodeling",
      desc: "Planning an addition or major landscaping? We inspect your sewer lines before you dig to avoid striking a pipe and causing costly damage.",
      badge: "Prevent Dig Disasters",
      accent: "from-emerald-600 to-teal-700",
      bullets: [
        "Precision depth and pipe run surface marking",
        "Verification that existing lines can handle added bathroom load",
        "Avoids catastrophic excavator strikes on unmarked laterals",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Unexplained Water Bills or Odors",
      desc: "If you smell sewage in your yard or have unexplained wet spots, an inspection can locate the source of the leak.",
      badge: "Odor & Sinkholes",
      accent: "from-rose-600 to-red-700",
      bullets: [
        "Identifies underground seepage before yard sinkholes develop",
        "Pinpoints cracked joints venting sewer gas into living areas",
        "Protects home foundations from subterranean soil erosion",
      ],
    },
  ];

  // ── 6 WHAT WE LOOK FOR ──
  const defectTypes = [
    {
      title: "Root Intrusions",
      desc: "Tree roots seeking moisture in the arid desert are the #1 cause of sewer blockages. They penetrate tiny pipe seams and create massive internal nets.",
      icon: Trees,
      badge: "#1 Tucson Issue",
    },
    {
      title: "Pipe Bellies (Sagging)",
      desc: "Sections of pipe that have settled or sagged over time, creating low pockets where heavy solids pool and repeatedly clog drainage.",
      icon: Layers,
      badge: "Standing Waste",
    },
    {
      title: "Cracks & Fractures",
      desc: "Earth movement, expansive clay soils, or aging materials crack pipes, allowing wastewater to seep into soil and sinkhole foundations.",
      icon: AlertTriangle,
      badge: "Structural Leak",
    },
    {
      title: "Corrosion & Scale Buildup",
      desc: "Common in older cast iron or galvanized pipes. Rust blisters narrow the pipe diameter and snag toilet paper and organic waste.",
      icon: Droplets,
      badge: "Narrowed Bore",
    },
    {
      title: "Offset Joint Separation",
      desc: "Shifted ground causes pipe sections to disconnect at seams, creating a sharp ledge that halts waste flow and invites root entry.",
      icon: Compass,
      badge: "Shifted Seams",
    },
    {
      title: "Foreign Object Blocks",
      desc: "Non-flushable wipes, construction debris, hygiene products, or children's toys lodged deep in the main line that plungers cannot reach.",
      icon: Search,
      badge: "Foreign Items",
    },
  ];

  // ── 4 REPAIR SOLUTIONS ──
  const repairSolutions = [
    {
      icon: Droplets,
      title: "Hydro Jetting",
      desc: "High-pressure water clearing (up to 4,000 PSI) to scrub pipe walls clean of heavy grease, mineral scale, and intrusive tree roots without damaging pipes.",
      badge: "Hydro-Scour",
    },
    {
      icon: Layers,
      title: "Trenchless Sewer Repair",
      desc: "We can repair or replace damaged sections of pipe with minimal digging using epoxy CIPP lining, preserving your driveway, patio, and landscaping.",
      badge: "No-Dig Tech",
    },
    {
      icon: Wrench,
      title: "Traditional Sewer Line Replacement",
      desc: "For collapsed, crushed, or back-pitched lines where lining isn't possible, our heavy equipment team provides expert excavation and code-compliant replacement.",
      badge: "Full Excavation",
    },
    {
      icon: Sparkles,
      title: "Professional Rooter Service",
      desc: "Heavy-duty mechanical blades and motorized snaking to shear invasive roots from pipe walls and restore free flow immediately.",
      badge: "Root Removal",
    },
  ];

  // ── 6 ACP ADVANTAGES ──
  const advantages = [
    {
      icon: Clock,
      title: "25+ Years of Tucson Experience",
      desc: "We know the unique soil conditions, caliche clay, and aggressive mesquite/eucalyptus root systems of Southern Arizona that compromise sewer lines.",
      badge: "Tucson Native",
    },
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "We provide transparent pricing for the inspection and any recommended repairs before work begins. No hidden fees or surprise upcharges.",
      badge: "Flat-Rate Bids",
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
      desc: "We treat your property with respect, wearing boot covers, using sanitary containment trays, and ensuring no mess is left behind.",
      badge: "Zero Mess",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "Fully compliant with Arizona state regulations (ROC #321353) and carrying comprehensive liability insurance for your complete protection.",
      badge: "ROC #321353",
    },
    {
      icon: Building2,
      title: "Commercial & Residential Expertise",
      desc: "From single-family homes to large-scale commercial facilities, we have industrial equipment capable of inspecting pipes from 2” to 12”+ in diameter.",
      badge: "Any Diameter",
    },
  ];

  // ── 7 SEWER FAQS ──
  const faqs = [
    {
      q: "How often should I have my sewer line inspected?",
      a: "For residential homes, we recommend an inspection every 1-2 years, especially if you have mature trees on your property or live in an older neighborhood with cast-iron or clay pipes. For commercial properties, especially restaurants, annual inspections are highly recommended.",
    },
    {
      q: "How long does a sewer line inspection take?",
      a: "A standard residential sewer inspection typically takes 30 to 60 minutes, depending on the cleanout accessibility and the length of your main sewer lateral.",
    },
    {
      q: "Will the camera damage my pipes?",
      a: "No. Our cameras are specifically designed for sewer lines. The camera head is rounded, smooth, and mounted on a flexible push rod designed to glide safely through bends and PVC, ABS, clay, or cast iron pipes without causing any abrasion.",
    },
    {
      q: "Can you inspect a sewer line for a real estate purchase?",
      a: "Yes. We provide pre-purchase sewer inspections for home buyers throughout Tucson and surrounding areas. We can provide a recorded video and a written report of our findings for your inspection contingency period.",
    },
    {
      q: "What if you find a problem?",
      a: "If we find a defect, we will show you the live video footage on our monitor, pinpoint its exact location in your yard with radio sonde locating, and provide you with upfront options for repair. We never pressure you into unnecessary work.",
    },
    {
      q: "Do you charge for sewer line inspections?",
      a: "We charge a standard fee for the inspection and camera service, which we will disclose upfront before scheduling. If a significant repair or replacement is needed, this fee is often credited toward the cost of the repair work.",
    },
    {
      q: "Can you inspect commercial sewer lines?",
      a: "Absolutely. We have specialized long-distance reels, self-leveling HD cameras, and tractor cameras with the equipment and expertise to inspect large-diameter commercial sewer lines for restaurants, apartment complexes, hotels, and industrial facilities.",
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
                HD Video Camera Scoping & Radio Locating
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Non-Destructive Underground Diagnostics
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
                <span>📅 Schedule a Sewer Inspection</span>
              </button>
            </div>
          </div>

          {/* 4 Trust Bar Cards (Visual Elements) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                <Video className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">HD Camera Tech</span>
                <span className="text-[11px] font-bold text-slate-500">Live Video Scoping</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center shrink-0">
                <Search className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Pinpoint Accuracy</span>
                <span className="text-[11px] font-bold text-slate-500">Radio Sonar Depth</span>
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

      {/* ── 2. THE MOST IMPORTANT PIPE YOU CAN'T SEE ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                <Video className="h-3.5 w-3.5" />
                The Most Important Pipe You Can't See
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy tracking-tight leading-tight mb-6">
                Protect Your Property from the Inside Out
              </h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Your sewer line is the main artery of your plumbing system. It carries all wastewater away from your home or business to the city main. Because it is buried underground, problems with your sewer line often go unnoticed until they become a major, costly disaster—like a raw sewage backup into your basement or a sinkhole in your front yard.
                </p>
                <p>
                  At <strong className="text-navy font-bold">American Commercial Plumbing LLC</strong>, we believe in solving problems before they become emergencies. With over 25 years of experience serving Tucson, we have the technology and expertise to see exactly what is happening beneath your property without destructive digging.
                </p>
                <p>
                  Whether you are a homeowner experiencing recurrent clogs or a commercial property manager conducting due diligence, our advanced sewer line inspections provide the definitive answers you need.
                </p>
              </div>

              {/* Founder Quote Card */}
              <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-4 shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 text-primary font-black text-lg">
                  SH
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 italic leading-snug">
                    "Never guess what is happening underground. A camera inspection tells the truth—showing you the exact depth, location, and condition of your pipe so you never pay for unnecessary digging."
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
                  src={sewerImg}
                  alt="High resolution sewer video camera crawling into underground pipe"
                  className="w-full h-auto object-cover max-h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 font-bold">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-navy">Non-Invasive Diagnostic Guarantee</div>
                      <div className="text-[11px] text-slate-500 font-medium">Real-time color monitor, surface sonar depth locating & video copy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY SCHEDULE A SEWER LINE INSPECTION? (5 SCENARIOS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Search className="h-3.5 w-3.5" />
              When You Need It
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Why Schedule a Sewer Line Inspection?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              A professional video sewer inspection is the only way to truly know the condition of your underground pipes. We recommend an inspection for:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {scenarios.map((item, idx) => {
              const IconComp = item.icon;
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
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-navy mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      {item.bullets.map((bullet, bIdx) => (
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
                      <span>Book Inspection</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Real Estate Highlight Box */}
            <div className="bg-navy rounded-3xl p-7 text-white shadow-md flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-electric mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  Buying a Home in Tucson?
                </div>
                <h3 className="text-2xl font-black text-white mb-3">Pre-Purchase Sewer Scopes</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Standard home inspections do not cover buried sewer lines. Protect your investment before closing with our official video scope and written report.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href="tel:+15202212010"
                  className="w-full py-3.5 px-4 rounded-xl bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-cta"
                >
                  <Phone className="h-4 w-4 fill-current" />
                  <span>Call (520) 221-2010</span>
                </a>
                <div className="text-[11px] text-center text-slate-400 font-bold">
                  Quick Turnaround for Inspection Deadlines
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR ADVANCED INSPECTION TECHNOLOGY & DEFECTS ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          {/* Tech Explanation Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary mb-5">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-navy mb-2.5">High-Resolution Video Camera</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We feed a specialized, waterproof camera mounted on a flexible rod directly into your sewer line. The camera transmits a live, high-definition video feed to a monitor, allowing us to see every crack, root, and blockage in real-time.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200">
              <div className="h-12 w-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-navy mb-2.5">Precision Locating</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Once we identify a defect, we use a sonar or radio transmitter to pinpoint its exact location and depth on the surface. This means when it's time for a repair, we dig only where necessary—saving your driveway, landscaping, and money.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-[#F8FAFC] border border-slate-200">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-navy mb-2.5">Detailed Findings & Reporting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                After the inspection, we provide a clear explanation of our findings. For commercial clients or real estate transactions, we can provide a recorded video and a written report detailing the condition of the line and any recommended repairs.
              </p>
            </div>
          </div>

          {/* What We Look For */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Search className="h-3.5 w-3.5" />
              Underground Diagnostics
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              What We Look For
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our high-definition camera reveals the exact conditions inside your sewer main:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {defectTypes.map((defect, idx) => {
              const DefectIcon = defect.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-primary shadow-xs">
                        <DefectIcon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-200/80 text-slate-700">
                        {defect.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-navy mb-2">{defect.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{defect.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. FROM INSPECTION TO SOLUTION (4 REPAIR OPTIONS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-3">
              <Wrench className="h-3.5 w-3.5" />
              Complete Resolution
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              From Inspection to Solution
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              An inspection is only valuable if it leads to a solution. If we find an issue, we don't just hand you a list of problems—we provide clear, upfront options for repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairSolutions.map((rep, idx) => {
              const RepIcon = rep.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-11 w-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary mb-4">
                      <RepIcon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 mb-2 inline-block">
                      {rep.badge}
                    </span>
                    <h3 className="text-base font-black text-navy mb-2">{rep.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-semibold">{rep.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. THE ACP ADVANTAGE (6 PILLARS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
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
              When you choose us for your sewer line inspection, you are choosing a partner with decades of experience and a commitment to honesty.
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

      {/* ── 7. SCHEDULE SEWER INSPECTION INTERACTIVE FORM ── */}
      <section id="sewer-inspection-schedule-form" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Calendar className="h-3.5 w-3.5" />
                Online Booking
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-2">
                Schedule a Sewer Line Video Inspection
              </h2>
              <p className="text-slate-600 text-sm">
                Book your inspection online or call our dispatch desk directly at <a href="tel:+15202212010" className="text-primary font-bold hover:underline">(520) 221-2010</a>.
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
                <h3 className="text-xl font-black text-navy mb-2">Inspection Request Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you for booking with American Commercial Plumbing LLC. One of our Tucson inspection dispatchers will call you within one business hour to confirm cleanout access and your appointment window.
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
                      placeholder="e.g. Michael Vance"
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
                      Property Type *
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Residential Homeowner">Residential Homeowner</option>
                      <option value="Homebuyer / Escrow Inspection">Homebuyer / Escrow Inspection</option>
                      <option value="Commercial Business / Restaurant">Commercial Business / Restaurant</option>
                      <option value="Property Management / HOA">Property Management / HOA</option>
                      <option value="Contractor / Pre-Construction">Contractor / Pre-Construction</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Reason for Inspection *
                    </label>
                    <select
                      value={formData.inspectionReason}
                      onChange={(e) => setFormData({ ...formData, inspectionReason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="Recurrent Clogs / Slow Drains">Recurrent Clogs / Slow Drains</option>
                      <option value="Real Estate Pre-Purchase Inspection">Real Estate Pre-Purchase Inspection</option>
                      <option value="Recent Sewer Backup / Flooding">Recent Sewer Backup / Flooding</option>
                      <option value="Sewer Gas Odor in Yard or Home">Sewer Gas Odor in Yard or Home</option>
                      <option value="Routine Preventative Check">Routine Preventative Check</option>
                      <option value="Pre-Construction / Remodeling Scoping">Pre-Construction / Remodeling Scoping</option>
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
                    placeholder="e.g. 5432 E Speedway Blvd, Tucson (or Marana, Oro Valley, Vail)"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Notes or Symptoms Observed
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe any symptoms (e.g., gurgling toilets, tree roots nearby, cleanout location in front yard)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    🔒 High-Resolution Digital Recording · Depth Sonar Locating · Upfront Pricing
                  </div>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider shadow-cta transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formSubmitting ? (
                      <span>Scheduling...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Confirm Inspection Schedule</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. FREQUENTLY ASKED QUESTIONS (SEWER LINE INSPECTION) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <FileText className="h-3.5 w-3.5" />
              Inspection FAQs
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
              Frequently Asked Questions (Sewer Line Inspection)
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about video sewer inspection technology in Tucson.
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
            Tucson’s Sewer Line Camera Specialists
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Don't Wait for a Sewer Backup.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Get peace of mind with a professional video sewer line inspection from Tucson’s most trusted plumbing experts.
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
              <span>📅 Schedule Your Sewer Inspection</span>
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
              <Video className="w-4 h-4 text-amber-400" />
              <span>HD Video & Sonar Depth Mapping</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
