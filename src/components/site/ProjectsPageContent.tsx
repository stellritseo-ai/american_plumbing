import { useState, useEffect } from "react";
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
  Flame,
  Droplets,
  Layers,
  MapPin,
  ExternalLink,
  Maximize2,
  X,
  Filter,
  Award,
} from "lucide-react";

// Import all 16 project images from assets/gallery
import img1 from "@/assets/gallery/project-thumbnail-1.png";
import img2 from "@/assets/gallery/project-thumbnail-2.png";
import img3 from "@/assets/gallery/project-thumbnail-3.png";
import img4 from "@/assets/gallery/project-thumbnail-4.png";
import img5 from "@/assets/gallery/project-thumbnail-5.png";
import img6 from "@/assets/gallery/project-thumbnail-6.png";
import img7 from "@/assets/gallery/project-thumbnail-7.png";
import img8 from "@/assets/gallery/project-thumbnail-8.png";
import img9 from "@/assets/gallery/project-thumbnail-9.png";
import img10 from "@/assets/gallery/project-thumbnail-10.png";
import img11 from "@/assets/gallery/project-thumbnail-11.png";
import img12 from "@/assets/gallery/project-thumbnail-12.png";
import img13 from "@/assets/gallery/project-thumbnail-13.png";
import img14 from "@/assets/gallery/project-thumbnail-14.png";
import img15 from "@/assets/gallery/project-thumbnail-15.png";
import img16 from "@/assets/gallery/project-thumbnail-16.png";

interface ProjectItem {
  id: number;
  image: string;
  title: string;
  category: "Residential" | "Commercial" | "Water Heaters" | "Repiping & Fixtures" | "Drain & Sewer";
  location: string;
  scope: string;
  highlights: string[];
}

const galleryProjects: ProjectItem[] = [
  {
    id: 1,
    image: img1,
    title: "Luxury Soaking Tub Installation",
    category: "Residential",
    location: "Catalina Foothills, Tucson",
    scope: "Complete bathroom remodel fixture installation, deep oval soaking tub rough-in, and custom brass deck faucet integration.",
    highlights: ["Custom Tile Surrounds", "Pressure-Balanced Valves", "Clean Rough-In"],
  },
  {
    id: 2,
    image: img2,
    title: "Precision Faucet Valve Restoration",
    category: "Repiping & Fixtures",
    location: "Sam Hughes, Tucson",
    scope: "Disassembly and valve seat machining to stop chronic hard water leakage without having to replace vintage architectural fixtures.",
    highlights: ["Zero-Drip Precision", "Ceramic Cartridge Rebuild", "Surface Protection"],
  },
  {
    id: 3,
    image: img3,
    title: "Exterior Sewer Main Trench & Backfill",
    category: "Drain & Sewer",
    location: "Oro Valley, AZ",
    scope: "Excavation, grading, high-density PVC sewer replacement, and gravel bedding compaction safeguarding desert landscape drainage.",
    highlights: ["SDR-35 PVC Main", "Grade Verification", "Landscape Preservation"],
  },
  {
    id: 4,
    image: img4,
    title: "Commercial Kitchen Disposal & Waste Line",
    category: "Commercial",
    location: "Downtown Tucson Culinary District",
    scope: "High-horsepower commercial garbage disposal install, reinforced vibration baffling, and grease-resistant waste arm plumbing.",
    highlights: ["Health Code Compliant", "Heavy-Duty Baffling", "High-Flow Drain Traps"],
  },
  {
    id: 5,
    image: img5,
    title: "Motorized Mechanical Rooter Augering",
    category: "Drain & Sewer",
    location: "Central Tucson",
    scope: "Heavy-duty electric snake cleanout running C-cutter blades through a 4-inch main stack to shear invasive eucalyptus tree roots.",
    highlights: ["Heavy-Duty Steel Cable", "Root Shearing Cutters", "Zero-Mess Cleanup"],
  },
  {
    id: 6,
    image: img6,
    title: "Modern Chrome Shower Fixture Installation",
    category: "Residential",
    location: "Rancho Vistoso, Oro Valley",
    scope: "Dual-head thermostatic shower system with adjustable slide rail, integrated diverter valve, and calcium-resistant spray nozzles.",
    highlights: ["Anti-Scald Thermostatic", "Chrome Slide Bar", "Flow Restrictor Tuning"],
  },
  {
    id: 7,
    image: img7,
    title: "Toilet Flange & Clean Porcelain Replacement",
    category: "Repiping & Fixtures",
    location: "Midtown Tucson",
    scope: "Before & After wax ring failure repair, subfloor sanitization, cast-iron flange leveling, and dual-flush comfort height toilet installation.",
    highlights: ["Heavy-Duty Wax Ring", "Subfloor Waterproofing", "Before & After Quality"],
  },
  {
    id: 8,
    image: img8,
    title: "Contemporary Freestanding Acrylic Tub",
    category: "Residential",
    location: "Dove Mountain, Marana",
    scope: "Seamless floor rough-in with freestanding chrome floor filler and concealed P-trap alignment for a luxury desert retreat.",
    highlights: ["Freestanding Floor Mount", "Sub-Slab P-Trap", "Mirror-Finish Trim"],
  },
  {
    id: 9,
    image: img9,
    title: "Dual Vessel Sinks & High-Arc Faucets",
    category: "Repiping & Fixtures",
    location: "Tanque Verde, Tucson",
    scope: "Twin porcelain vessel basins installed on granite vanity with individual quarter-turn angle stops and braided stainless supply lines.",
    highlights: ["Dual Ceramic Sinks", "Stainless Steel Braids", "Under-Counter Manifold"],
  },
  {
    id: 10,
    image: img10,
    title: "Perimeter Footing & Channel Drain",
    category: "Drain & Sewer",
    location: "Sabino Canyon Area",
    scope: "Deep footing drainage channel and rock filtration embedment to prevent monsoon flash flood erosion from pooling along foundation slabs.",
    highlights: ["Monsoon Flood Protection", "Slotted Channel Pipe", "Clean Rock Backfill"],
  },
  {
    id: 11,
    image: img11,
    title: "Multi-Zone PEX Home Plumbing Manifold",
    category: "Repiping & Fixtures",
    location: "Eastside Tucson",
    scope: "Whole-home repiping central distribution manifold with labeled individual ball valves for tub, basin, and toilet supply isolation.",
    highlights: ["Individual Zone Shutoffs", "PEX-A Expansion Fittings", "Zero Pressure Drop"],
  },
  {
    id: 12,
    image: img12,
    title: "High-Efficiency Outdoor Tankless Water Heater",
    category: "Water Heaters",
    location: "Marana, AZ",
    scope: "Exterior wall-mounted condensing tankless gas water heater with insulated copper lines, seismic mounting, and dedicated gas supply.",
    highlights: ["Endless Hot Water", "Exterior Space Saver", "Condensing 0.96 UEF"],
  },
  {
    id: 13,
    image: img13,
    title: "High-Capacity Commercial Electric Water Heater",
    category: "Commercial",
    location: "South Tucson Medical Suites",
    scope: "Commercial storage water heater installation adjacent to main power panel, with expansion tank, thermal relief valve, and drain pan.",
    highlights: ["Commercial Spec", "ASME Pressure Relief", "Code-Compliant Pan"],
  },
  {
    id: 14,
    image: img14,
    title: "Gas Water Heater & Copper Manifold Buildout",
    category: "Water Heaters",
    location: "Vail, AZ",
    scope: "In-progress installation of high-recovery atmospheric gas water heater, soldered copper cold/hot headers, and black iron fuel pipe.",
    highlights: ["Soldered Copper Headers", "Rigid Gas Piping", "Draft Flue Verification"],
  },
  {
    id: 15,
    image: img15,
    title: "Whirlpool Spa Tub Deep Restoration",
    category: "Residential",
    location: "Green Valley, AZ",
    scope: "Before & After jet line decontamination, calcium scale removal, and mechanical air switch rebuild restoring 100% whirlpool circulation.",
    highlights: ["Circulation Line Flush", "Scale Dissolution", "Before & After Finish"],
  },
  {
    id: 16,
    image: img16,
    title: "High-Velocity Drain Flow & Trap Inspection",
    category: "Drain & Sewer",
    location: "University District, Tucson",
    scope: "Dynamic hydrostatic flow testing through newly cleared bathroom drain following hydro jetting, confirming instantaneous vortex drainage.",
    highlights: ["Full Vortex Flow", "Camera Verified Clean", "Zero Siphoning Noise"],
  },
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Water Heaters",
  "Repiping & Fixtures",
  "Drain & Sewer",
] as const;

export function ProjectsPageContent() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);


  const trustBadges = [
    {
      icon: Award,
      title: "1,000+ Completed Jobs",
      subtitle: "Commercial & residential projects across Pima County",
      badge: "Proven Track Record",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Code Compliant",
      subtitle: "Arizona ROC #321353 · Shawn Holton quality control",
      badge: "ROC #321353",
    },
    {
      icon: Star,
      title: "4.9 Star Average Rating",
      subtitle: "Verified homeowner & property manager reviews",
      badge: "Top Rated",
    },
    {
      icon: Clock,
      title: "25+ Years Serving Tucson",
      subtitle: "Family-owned and locally operated since 1999",
      badge: "Since 1999",
    },
  ];

  const craftPillars = [
    {
      title: "Clean Engineering Protocol",
      desc: "We protect your property with floor runners, dust barriers, and spotless daily cleanup. We treat your home or business with absolute respect.",
      icon: Sparkles,
    },
    {
      title: "Rigid Code Compliance",
      desc: "Every fitting, slope, pipe diameter, and relief valve is installed to meet or exceed International Plumbing Code (IPC) and Tucson municipal standards.",
      icon: CheckCircle2,
    },
    {
      title: "Commercial-Grade Materials",
      desc: "We never cut corners with cheap hardware. We install Type-L copper, ASTM-rated PEX-A, heavy-gauge brass, and commercial-grade fixtures.",
      icon: ShieldCheck,
    },
    {
      title: "100% Upfront Transparency",
      desc: "Detailed scopes, clear estimates, and flat-rate pricing before work begins. No surprises, no hidden line items, and no high-pressure tactics.",
      icon: DollarSign,
    },
  ];

  const projectFaqs = [
    {
      q: "Can you provide references or examples of similar projects in my neighborhood?",
      a: "Yes! Having served Tucson, Vail, Oro Valley, Marana, and Green Valley since 1999, we have completed hundreds of projects in nearly every major neighborhood. We are happy to discuss relevant case studies and examples during your initial consultation.",
    },
    {
      q: "Do you handle city and county plumbing permits?",
      a: "Absolutely. American Commercial Plumbing LLC handles all necessary municipal permitting and coordinates on-site inspections for water heater replacements, commercial buildouts, repiping, and gas lines across Tucson and Pima County.",
    },
    {
      q: "How do you protect floors and interiors during large projects?",
      a: "Our signature 'Clean Engineering' standard means we lay down protective neoprene floor runners, erect plastic dust containment when needed, and maintain clean job sites. At the end of each workday, we vacuum and tidy up so your home remains livable.",
    },
    {
      q: "What is your warranty on project installations?",
      a: "We stand firmly behind our craftsmanship. In addition to full manufacturer warranties on water heaters, piping, and fixtures, we back our labor with our ACP Workmanship Guarantee.",
    },
    {
      q: "Can you work around commercial business operating hours?",
      a: "Yes. For restaurants, medical clinics, retail stores, and property management accounts, we offer after-hours and weekend scheduling to ensure zero disruption to your daily operations.",
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* ── 1. TOP QUICK ACTION & TRUST BAR (PIXEL-PERFECT) ─────────── */}
      <section className="py-8 sm:py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-7xl">
          {/* Quick Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8 pb-8 border-b border-slate-200/80">
            <div className="text-center sm:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-primary">
                Tucson Field Documentation
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-navy mt-1">
                Explore Our Recent Commercial & Residential Craftsmanship
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="tel:+15202212010"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cta text-white font-extrabold text-sm shadow-cta hover:brightness-110 active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call (520) 221-2010</span>
              </a>
              <a
                href="/request-estimate"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-extrabold text-sm hover:bg-slate-800 active:scale-98 transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-cta" />
                <span>Request Project Estimate</span>
              </a>
            </div>
          </div>

          {/* 4 Trust Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustBadges.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all"
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

      {/* ── 3. PROJECT GALLERY ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5 text-cta" />
              <span>Field Documentation · 16 Featured Projects</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight">
              Our Work Speaks for Itself
            </h2>
          </div>

          {/* 16-Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
                  {galleryProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setSelectedProject(project)}
                  className="group rounded-3xl overflow-hidden shadow-2xs hover:shadow-xl border border-slate-200/90 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-slate-900 relative h-56"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - American Commercial Plumbing LLC`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-navy/90 backdrop-blur-md cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm border border-white/10 transition-all cursor-pointer shadow-sm"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image only */}
            <motion.img
              key={selectedProject.id}
              src={selectedProject.image}
              alt={selectedProject.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl max-h-[88vh] w-full h-auto object-contain rounded-3xl shadow-2xl border border-white/10 cursor-default"
            />
          </div>
        )}
      </AnimatePresence>

      {/* ── 5. BEHIND THE CRAFTSMANSHIP (NARRATIVE SECTION) ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-cta" />
              <span>Clean Engineering In Every Job</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              The Standards Behind Every Project
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Behind every clean solder joint, flawless drain line, and quiet water heater is a commitment
              to rigorous craftsmanship and clean engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {craftPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-navy mb-2 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-primary flex items-center gap-1">
                    <span>Guaranteed Work</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-auto" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key Metrics Strip */}
          <div className="p-8 sm:p-10 rounded-3xl bg-navy text-white shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cta font-mono">
                25+
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mt-2">
                Years Serving Tucson
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono">
                1,000+
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mt-2">
                Verified 5-Star Reviews
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-cta font-mono">
                100%
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mt-2">
                Upfront Flat-Rate Pricing
              </div>
            </div>
            <div className="relative z-10">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono">
                24/7
              </div>
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-300 mt-2">
                Emergency Rapid Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-cta" />
              <span>Project Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Frequently Asked Questions (Projects)
            </h2>
            <p className="text-slate-600 text-base">
              Everything you need to know about planning and scheduling your plumbing project with us.
            </p>
          </div>

          <div className="space-y-4">
            {projectFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-slate-50/80 border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
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

      {/* ── 7. BOTTOM CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-navy via-slate-900 to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-[90%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta/20 border border-cta/30 text-cta text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cta" />
            <span>Ready for Your Next Project?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Have a Plumbing Project in Mind?
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            From luxury residential bath upgrades and whole-home repiping to complex commercial mechanical buildouts,
            our licensed specialists deliver clean, durable, code-compliant results.
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
              href="/request-estimate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-navy font-extrabold text-base hover:bg-slate-100 active:scale-98 transition-all shadow-md"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Get a Free Project Estimate</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
