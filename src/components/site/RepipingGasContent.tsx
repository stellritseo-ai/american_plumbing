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
  AlertTriangle,
  ArrowRight,
  Send,
  Check,
  Building2,
  Home,
  Layers,
  FileCheck,
  DollarSign,
  UserCheck,
  FileText,
  Zap,
  Gauge,
  Droplets,
  Search,
  CheckCircle,
  Activity,
  Trees,
} from "lucide-react";

import repipeImg from "@/assets/service-repiping.jpg";

export function RepipingGasContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Whole-Home Repipe (PEX/Copper)",
    propertyType: "Residential Home",
    homeAge: "Built 1970-1990",
    address: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const trustBadges = [
    {
      icon: Wrench,
      title: "Whole-Home Repiping Experts",
      subtitle: "Commercial-grade PEX & type-L copper installations",
      badge: "Piping Specialists",
    },
    {
      icon: Flame,
      title: "Licensed Gas Line Services",
      subtitle: "Certified high-pressure fuel gas testing & installation",
      badge: "Gas Certified",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      subtitle: "Arizona ROC #321353 · Full code-compliant protection",
      badge: "ROC #321353",
    },
    {
      icon: Star,
      title: "4.9 Star Verified Rating",
      subtitle: "1,000+ satisfied Southern Arizona property owners",
      badge: "Top Rated",
    },
  ];

  const repipingServices = [
    {
      icon: Home,
      title: "Whole-Home Repiping",
      tag: "Residential Full System",
      desc: "If your home has old, failing pipes, we can replace your entire water supply system—both hot and cold lines—with modern, durable materials. We work efficiently with strategic access points, often completing the entire job in just 3 to 7 days with minimal disruption.",
    },
    {
      icon: Building2,
      title: "Commercial Repiping",
      tag: "Multi-Family & Business",
      desc: "For businesses, property managers, HOA communities, and multi-family complexes, we engineer large-scale repiping solutions designed to minimize operational downtime and protect revenue while adhering to strict commercial building codes.",
    },
    {
      icon: Layers,
      title: "Partial Repiping",
      tag: "Targeted Solutions",
      desc: "Sometimes only a specific wing, second-story riser, or newly added bathroom needs replacement. We isolate the chronic leak areas and tie new premium lines seamlessly into sound existing plumbing to keep project costs manageable.",
    },
    {
      icon: Droplets,
      title: "Water Main Line Replacement",
      tag: "Yard & Meter Supply",
      desc: "If the underground main water line running from the municipal meter to your foundation is corroded or fractured, we provide high-durability replacement using trenchless boring or surgical excavation to safeguard desert landscaping.",
    },
  ];

  const pipeMaterials = [
    {
      name: "PEX Piping (Cross-Linked Polyethylene)",
      badge: "Most Popular Residential",
      pros: [
        "Flexible routing reduces joints and 90-degree elbows",
        "100% immune to desert hard water mineral scale & corrosion",
        "Resistant to freeze-expansion bursts",
        "Significantly faster installation & lower cost",
      ],
      desc: "PEX is the modern gold standard in residential plumbing. Engineered for flexibility and thermal efficiency, it eliminates pinhole corrosion and provides superior water flow.",
    },
    {
      name: "Copper Piping (Rigid Type-L Copper)",
      badge: "Traditional & Commercial Standard",
      pros: [
        "Time-tested 50+ year structural lifespan",
        "Naturally bacteriostatic and UV-resistant",
        "Withstands extreme hydraulic pressure & temperatures",
        "Ideal for exposed mechanical rooms & commercial headers",
      ],
      desc: "Heavy-gauge copper offers unmatched durability and rigid aesthetics. It is widely preferred for commercial facilities, boiler rooms, and exposed exterior plumbing manifolds.",
    },
  ];

  const repipeWarningSigns = [
    {
      title: "Frequent Leaks",
      desc: "If you've had multiple pinhole leaks or repaired more than one pipe in recent years, the piping system is systematically failing.",
    },
    {
      title: "Discolored Water",
      desc: "Rusty, brown, or yellowish water emerging from taps indicates internal oxidation and flaking inside galvanized steel lines.",
    },
    {
      title: "Metallic Taste or Smell",
      desc: "Drinking water that tastes of iron, copper, or bitter mineral deposits signals deteriorating pipe walls leaching into your potable water.",
    },
    {
      title: "Low Water Pressure",
      desc: "When multiple showers and faucets suffer low flow simultaneously, hard water calcium and rust have choked the internal pipe diameter.",
    },
    {
      title: "Noisy Pipes & Water Hammer",
      desc: "Banging, rattling, or shuttering noises when valves close indicate loose fittings, water hammer shocks, and compromised brackets.",
    },
    {
      title: "Visible Corrosion & Efflorescence",
      desc: "Rust spots, greenish copper oxidation, or chalky white mineral crust on exposed water lines in your garage, basement, or water heater.",
    },
    {
      title: "Age of Home (Pre-1990)",
      desc: "Homes built before 1990 frequently have galvanized steel or defective polybutylene ('Quest') piping that has surpassed its design life.",
    },
    {
      title: "Frequent Clogs & Scale Restrictions",
      desc: "Flakes of mineral scale continually plugging aerators, washing machine valves, and shower cartridges across your property.",
    },
  ];

  const gasServices = [
    {
      icon: Flame,
      title: "New Gas Line Installation",
      desc: "Whether adding a luxury gas range, tankless water heater, outdoor BBQ kitchen, or pool heater, we install high-capacity, code-compliant gas lines with all Tucson and Pima County permitting.",
    },
    {
      icon: Wrench,
      title: "Gas Line Repair",
      desc: "Prompt, certified repair for damaged fuel gas lines, corroded couplings, or failing valves. We perform pressure drop isolation tests to guarantee 100% gastight seals before restoring service.",
    },
    {
      icon: Gauge,
      title: "Gas Line Replacement",
      desc: "Older underground steel gas lines corrode over decades in desert soil. We replace hazardous legacy piping with yellow poly gas lines or heavy-gauge CSST/black iron.",
    },
    {
      icon: Search,
      title: "Gas Leak Detection",
      desc: "If you smell mercaptan ('rotten egg') odor or hear a hissing pipe, our technicians use electronic combustible gas sniffers and manometer gauges to pinpoint the leak instantly.",
    },
    {
      icon: Sparkles,
      title: "Appliance Gas Connections",
      desc: "Safe hookup and disconnection for stoves, ovens, dryers, gas water heaters, indoor fireplaces, outdoor fire pits, patio heaters, and commercial gas equipment.",
    },
    {
      icon: Building2,
      title: "Commercial Gas Line Services",
      desc: "High-volume manifold sizing, commercial kitchen gas supply, restaurant fryers, commercial bakery ovens, and industrial boiler fuel circuits adhering to strict safety codes.",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Comprehensive Assessment",
      desc: "We evaluate your existing water or gas piping infrastructure, calculate fixture demands, inspect pipe materials, and discuss your goals.",
      icon: Search,
    },
    {
      num: "02",
      title: "Clear Plan & Upfront Pricing",
      desc: "We provide an itemized, flat-rate proposal detailing the exact routing, materials (PEX or copper), and permit requirements before work starts.",
      icon: DollarSign,
    },
    {
      num: "03",
      title: "Professional Installation",
      desc: "Certified technicians execute the repiping with surgical precision. We protect floors, furnishings, and walls with drop cloths and plastic containment.",
      icon: Wrench,
    },
    {
      num: "04",
      title: "Inspection & Pressure Testing",
      desc: "We conduct high-pressure hydrostatic tests on water lines and code-required manometer tests on gas systems. We coordinate all municipal inspections.",
      icon: FileCheck,
    },
    {
      num: "05",
      title: "Spotless Cleanup & Walkthrough",
      desc: "We clean up all debris, patch access points cleanly, restore water/gas service, and walk you through your brand-new plumbing system.",
      icon: ShieldCheck,
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "25+ Years of Tucson Experience",
      desc: "Serving Tucson and Southern Arizona since 1999. We understand local water chemistry, mineral hardness, and regional municipal codes.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Gas Certified",
      desc: "Fully licensed, bonded, and insured (ROC #321353). Our technicians undergo rigorous ongoing safety and fuel gas certifications.",
    },
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "Flat-rate quotes provided in writing before any work begins. No hidden overtime fees, no surprise contractor charges.",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Every technician entering your property is drug-tested, background-verified, and trained in clean engineering standards.",
    },
    {
      icon: Sparkles,
      title: "Clean Engineering Protocols",
      desc: "We treat your property like our own. We use floor runners, dust protection barriers, and thoroughly vacuum work areas every evening.",
    },
    {
      icon: FileCheck,
      title: "Code Compliance Guaranteed",
      desc: "We pull all required city and county permits, schedule municipal inspections, and ensure 100% compliance with Arizona building codes.",
    },
    {
      icon: CheckCircle,
      title: "Warranty on Parts & Labor",
      desc: "We stand firmly behind our repiping and gas line craftsmanship with comprehensive parts and labor warranty protections.",
    },
  ];

  const faqs = [
    {
      q: "How long does a whole-home repipe take?",
      a: "Most residential repiping projects are completed in 3 to 7 days, depending on the square footage of the home, number of bathrooms, and whether you select PEX or copper. We work efficiently with strategic access points so your water service is turned back on at the end of each workday, minimizing disruption to your daily routine.",
    },
    {
      q: "Is repiping worth the cost?",
      a: "Absolutely. While repiping is a significant investment, it permanently eliminates the cycle of expensive emergency leak repairs, prevents catastrophic drywall and foundation flooding, restores full shower water pressure, eliminates rusty tap water, and adds substantial resale value to your home. It pays for itself in peace of mind and avoided flood damage.",
    },
    {
      q: "What is the best material for repiping?",
      a: "Both PEX and copper are excellent, durable choices. PEX is more affordable, flexible, immune to hard water scale, and requires fewer wall penetrations, making it the ideal choice for 90% of residential homes. Copper is rigid, time-tested for 50+ years, naturally bacteriostatic, and often preferred for commercial buildings and exposed plumbing headers. We will evaluate your property and recommend the optimal material.",
    },
    {
      q: "How do I know if I have a gas leak?",
      a: "Common signs of a gas leak include a distinct sulfur or 'rotten egg' smell (mercaptan additive), hissing or whistling sounds near gas appliances or buried lines, dead or brown patches in grass/vegetation directly over a buried line, and physical symptoms such as dizziness, nausea, headache, or eye irritation. If you suspect a gas leak, evacuate the building immediately, avoid flipping any electrical switches, and call us or 911 from a safe distance.",
    },
    {
      q: "Can you install a gas line for my outdoor grill or pool heater?",
      a: "Yes! We specialize in running new underground and exterior gas lines for outdoor kitchens, patio fire pits, barbecue grills, and high-BTU pool/spa heaters. We size the pipe capacity properly to ensure all appliances operate at peak efficiency and handle all Tucson/Pima County permits and safety inspections.",
    },
    {
      q: "Do you handle emergency gas line repairs?",
      a: "Yes. If you smell gas, have a damaged line from digging, or Southwest Gas has shut off your meter due to a pressure test failure, call us immediately at (520) 221-2010. We offer 24/7 rapid emergency dispatch to locate the leak, repair the line, pass the municipal pressure test, and restore your gas service quickly.",
    },
    {
      q: "Will repiping damage my walls and landscaping?",
      a: "We use 'clean engineering' techniques to keep structural impact to an absolute minimum. Rather than tearing down walls, we make small, strategic access cuts (usually behind vanities, closets, or small baseboard cutouts). After the pipes are tested, we patch the drywall so your home is left clean. For main water lines, we often employ trenchless boring to protect your desert landscaping, pavers, and driveway.",
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
              <Wrench className="w-3.5 h-3.5 text-cta" />
              <span>Tucson Repiping & Fuel Gas Specialists · ROC #321353</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.1] mb-6"
            >
              Restore Your Plumbing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-600 to-cta">
                Protect Your Property.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8 max-w-2xl mx-auto"
            >
              From whole-home repiping to safe, code-compliant gas line installation and repair,
              American Commercial Plumbing LLC delivers durable, long-term solutions for Tucson homes and businesses.
            </motion.p>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="tel:+15202212010"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-cta text-white font-extrabold text-base shadow-cta hover:brightness-110 active:scale-98 transition-all"
              >
                <Phone className="w-5 h-5 text-white" />
                <span>Call (520) 221-2010</span>
              </a>
              <a
                href="#repipe-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-extrabold text-base hover:bg-slate-800 active:scale-98 transition-all shadow-md"
              >
                <Calendar className="w-5 h-5 text-cta" />
                <span>Schedule a Consultation</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST BAR (STANDALONE CLEAN CARDS) ── */}
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

      {/* ── 3. NARRATIVE: WHEN YOUR PIPES REACH THE END OF THE ROAD ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-black uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>When Your Pipes Reach the End of the Road</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-6 leading-tight">
                Old Pipes Don't Get <br />
                <span className="text-primary">Better with Age.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                Your home's plumbing system is only as reliable as the pipes that carry the water.
                Over time, even the most well-installed pipes deteriorate due to age, internal corrosion,
                Southern Arizona's hard water mineral buildup, and shifting desert clay soil.
              </p>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                In Tucson and Pima County, many homes built before 1990 still rely on galvanized steel or defective
                polybutylene pipes that were never designed to last this long. The result? Discolored water, low water pressure,
                frequent pinhole leaks, and the constant fear of a major flood.
              </p>
              <p className="text-slate-600 leading-relaxed text-base mb-8">
                Patching one leak after another quickly becomes an expensive, losing battle. At some point, the smartest
                and most cost-effective financial decision is to replace the entire system with modern, high-efficiency piping.
              </p>

              {/* Shawn Hamilton / Clean Engineering Note */}
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-slate-700 text-sm leading-relaxed">
                <div className="flex items-center gap-2.5 mb-2 font-black text-navy">
                  <ShieldCheck className="w-4.5 h-4.5 text-primary" />
                  <span>25+ Years of Tucson Experience · Led by Shawn Hamilton</span>
                </div>
                At American Commercial Plumbing LLC, we specialize in whole-home and commercial repiping.
                Led by owner Shawn Hamilton, our family-run business has been serving Tucson since 1999.
                We bring 25+ years of clean engineering expertise to every repiping project, ensuring your new system
                is installed to code, built to last, and backed by our commitment to complete customer satisfaction.
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">
                <img
                  src={repipeImg}
                  alt="Precision Copper and PEX Repiping Craftsmanship in Tucson"
                  className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cta/15 text-cta flex items-center justify-center shrink-0">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-navy uppercase tracking-wider">
                        Clean Engineering Standards
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Custom soldered copper manifolds & premium PEX piping engineered for zero-leak longevity.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. WHOLE-HOME & COMMERCIAL REPIPING SERVICES ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5 text-cta" />
              <span>Plumbing Infrastructure Overhaul</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              Whole-Home & Commercial Repiping
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We provide complete repiping solutions for residential and commercial properties,
              using only certified, highest-quality materials.
            </p>
          </div>

          {/* 4 Repiping Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {repipingServices.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary border border-primary/20 flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {srv.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-black text-navy mb-3 tracking-tight group-hover:text-primary transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-extrabold text-primary">
                    <span>100% Upfront Pricing & Code Guarantee</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-auto" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pipe Material Comparison: PEX vs Copper */}
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <span className="text-xs font-black uppercase tracking-widest text-primary">
                Material Engineering
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mt-1 mb-2">
                Pipe Material Upgrades: PEX vs. Copper
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                We replace outdated galvanized and polybutylene pipes with modern, reliable options.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {pipeMaterials.map((mat, i) => (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-slate-50/80 border border-slate-200/90 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-black text-navy">{mat.name}</h4>
                      <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded bg-primary/10 text-primary border border-primary/20">
                        {mat.badge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-5">
                      {mat.desc}
                    </p>
                    <div className="space-y-2.5">
                      {mat.pros.map((pro, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/80 text-[11px] font-bold text-navy flex items-center justify-between">
                    <span>Clean Engineering Spec:</span>
                    <span className="text-primary font-black">ASTM Certified</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SIGNS YOU NEED REPIPING ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-black uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Early Warning Indicators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              Signs You Need Repiping
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Don't wait for a catastrophic water line rupture. If you notice any of these 8 warning signs,
              it's time to consider a professional whole-home repiping inspection:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {repipeWarningSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cta/40 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-black mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-sm font-black text-navy tracking-tight mb-2">
                    {sign.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {sign.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. GAS LINE SERVICES (SAFETY & CODE COMPLIANCE) ── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-cta/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-[90%] max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cta/15 border border-cta/30 text-cta text-xs font-black uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5 text-cta" />
              <span>Fuel Gas Safety · Certified Technicians</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Safe, Code-Compliant Gas Line Solutions
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Natural gas is a highly efficient and convenient energy source, but it is also hazardous
              if not installed and tested by certified professionals. We bring complete safety and code compliance to every line.
            </p>
          </div>

          {/* Gas Line Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gasServices.map((gas, i) => {
              const Icon = gas.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-cta/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-slate-700/80 border border-slate-600 flex items-center justify-center text-cta mb-5 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white mb-2 tracking-tight group-hover:text-cta transition-colors">
                      {gas.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {gas.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>Permit & Inspection Ready</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Emergency Gas Alert Callout Bar */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-red-950/80 via-slate-800 to-red-950/80 border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 animate-pulse">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-black text-white">
                  Smell Gas or Have an Active Gas Leak Emergency?
                </h4>
                <p className="text-xs text-slate-300">
                  Evacuate immediately. Do not use light switches. Call us 24/7 from a safe location.
                </p>
              </div>
            </div>
            <a
              href="tel:+15202212010"
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs uppercase tracking-wider whitespace-nowrap shadow-lg transition-all active:scale-95"
            >
              🚨 Emergency: (520) 221-2010
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. THE REPIPING & GAS LINE PROCESS ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <FileCheck className="w-3.5 h-3.5 text-cta" />
              <span>Clean, Predictable Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              The Repiping & Gas Line Process
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We believe in transparent, organized, and clean work. Here is what you can expect from our certified team:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-primary/50 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-cta font-mono">
                        {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                    </div>
                    <h3 className="text-base font-black text-navy mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1 text-[11px] font-extrabold text-primary">
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span>Transparent</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 8. THE ACP ADVANTAGE ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Why Tucson Chooses Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              The American Commercial Plumbing Advantage
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              When you choose us for repiping or gas line work, you are partnering with certified specialists
              committed to clean engineering, safety, and lasting quality.
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

      {/* ── 9. INTERACTIVE CONSULTATION / ESTIMATE FORM ── */}
      <section id="repipe-form" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto w-[90%] max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5 text-cta" />
                <span>On-Site Estimate · Flat-Rate Pricing</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
                Schedule a Repiping or Gas Consultation
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Request a comprehensive evaluation of your water or gas system with 100% upfront flat-rate pricing.
                For urgent gas leaks or pipe bursts, please call{" "}
                <a
                  href="tel:+15202212010"
                  className="font-bold text-primary underline hover:text-cta"
                >
                  (520) 221-2010
                </a>{" "}
                directly.
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
                  Consultation Request Received!
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our repiping and gas project manager will call you shortly at{" "}
                  <strong>{formData.phone}</strong> to confirm your on-site assessment.
                </p>
                <a
                  href="tel:+15202212010"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cta text-white font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-cta"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (520) 221-2010 for Immediate Service</span>
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. David Miller"
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="david@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) =>
                        setFormData({ ...formData, serviceType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Whole-Home Repipe (PEX/Copper)">Whole-Home Repipe (PEX/Copper)</option>
                      <option value="Commercial Facility Repiping">Commercial Facility Repiping</option>
                      <option value="Gas Line Installation (Appliance/Pool/Grill)">Gas Line Installation (Appliance/Pool/Grill)</option>
                      <option value="Gas Line Repair & Leak Testing">Gas Line Repair & Leak Testing</option>
                      <option value="Partial / Addition Repiping">Partial / Addition Repiping</option>
                      <option value="Water Main Line Replacement">Water Main Line Replacement</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Approximate Home Age
                    </label>
                    <select
                      value={formData.homeAge}
                      onChange={(e) =>
                        setFormData({ ...formData, homeAge: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Built 1970-1990 (High Priority)">Built 1970-1990 (Galvanized/Polybutylene Risk)</option>
                      <option value="Built Before 1970">Built Before 1970 (Galvanized Steel)</option>
                      <option value="Built 1990-2010">Built 1990-2010 (Copper/Early PEX)</option>
                      <option value="Built After 2010">Built After 2010 (Modern Addition)</option>
                      <option value="Commercial Building">Commercial Building</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Property Address / ZIP
                    </label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="e.g. 226 E Forrest Feezor St, Vail, AZ"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                    Project Details / Specific Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Provide details: frequent pinhole leaks, low pressure, gas stove connection, outdoor BBQ line..."
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <div className="text-center pt-2">
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-cta text-white font-black text-sm uppercase tracking-wider shadow-cta hover:brightness-110 active:scale-98 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {formSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2">
                    🔒 100% upfront pricing. Clean engineering. Arizona ROC #321353.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 10. FREQUENTLY ASKED QUESTIONS ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200">
        <div className="mx-auto w-[90%] max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cta" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Frequently Asked Questions (Repiping & Gas Lines)
            </h2>
            <p className="text-slate-600 text-base">
              Clear, transparent answers from Tucson's premier repiping and gas line specialists.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-50/70 transition-colors"
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
                        <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
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

      {/* ── 11. BOTTOM CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-navy via-slate-900 to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-[90%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cta/20 border border-cta/30 text-cta text-xs font-black uppercase tracking-widest mb-6">
            <Wrench className="w-3.5 h-3.5 text-cta" />
            <span>Durable Long-Term Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Upgrade Your Plumbing. Protect Your Property.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Whether you need whole-home repiping or expert gas line services, trust Tucson’s most
            experienced plumbing professionals.
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
              href="#repipe-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-navy font-extrabold text-base hover:bg-slate-100 active:scale-98 transition-all shadow-md"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Schedule Your Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
