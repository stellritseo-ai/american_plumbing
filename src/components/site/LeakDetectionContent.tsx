import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Search,
  Crosshair,
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
  Wrench,
  Building2,
  Home,
  Flame,
  Activity,
  Waves,
  Eye,
  Volume2,
  Gauge,
  Thermometer,
  ShieldAlert,
  Zap,
  Droplets,
  DollarSign,
  UserCheck,
  FileText,
} from "lucide-react";

import leakImg from "@/assets/service-leak.jpg";

export function LeakDetectionContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "Residential Home",
    leakArea: "Slab / Under Foundation",
    address: "",
    preferredTime: "Next Available Tech",
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
      icon: Search,
      title: "Acoustic & Thermal Detection",
      subtitle: "State-of-the-art non-invasive diagnostic sensors",
      badge: "High-Tech",
    },
    {
      icon: Crosshair,
      title: "Pinpoint Surgical Accuracy",
      subtitle: "No guesswork · zero unnecessary demolition",
      badge: "Precision",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      subtitle: "Arizona ROC #321353 · Full liability protection",
      badge: "ROC #321353",
    },
    {
      icon: Star,
      title: "4.9 Star Verified Rating",
      subtitle: "1,000+ happy Southern Arizona property owners",
      badge: "Top Rated",
    },
  ];

  const silentThreats = [
    {
      icon: Building2,
      title: "Compromise Your Foundation",
      desc: "Water eroding soil beneath your slab creates voids and differential settling, triggering catastrophic foundation shifts.",
      impact: "Structural Risk",
    },
    {
      icon: AlertTriangle,
      title: "Cause Mold & Mildew Growth",
      desc: "Concealed dampness behind sheetrock fosters toxic black mold colonies within 24 to 48 hours, posing serious respiratory hazards.",
      impact: "Health Threat",
    },
    {
      icon: Home,
      title: "Destroy Drywall & Flooring",
      desc: "Sub-surface seepage warps expensive hardwood, buckles tile grout lines, bubbles latex paint, and rots wooden baseboards.",
      impact: "Cosmetic & Subfloor Damage",
    },
    {
      icon: ShieldAlert,
      title: "Attract Termites & Pests",
      desc: "Damp timber and saturated wall cavities are prime nesting territory for wood-destroying subterranean desert termites.",
      impact: "Pest Infestation",
    },
    {
      icon: Gauge,
      title: "Skyrocket Your Water Bill",
      desc: "A single pinhole leak running continuously at 60 PSI can bleed over 3,000 to 10,000 gallons of municipal water every single month.",
      impact: "Financial Waste",
    },
  ];

  const techStack = [
    {
      icon: Volume2,
      title: "Acoustic Listening Equipment",
      tag: "Audio Telemetry",
      highlight: "Ground Mics & Hydrophones",
      desc: "Water escaping from a pressurized pipe creates a distinct high-frequency frequency signature. We use laboratory-grade acoustic microphones, contact transducers, and ground sensors to listen through concrete slabs and walls, pinpointing the exact hiss or rush of pressurized water.",
    },
    {
      icon: Thermometer,
      title: "Thermal Imaging Cameras",
      tag: "Infrared Radiometry",
      highlight: "High-Res Thermal Scanners",
      desc: "Our calibrated thermal imaging cameras detect microscopic surface temperature deltas behind drywall, tile, and concrete. A hot water supply line leak creates a distinct bloom of radiant warmth, while cold supply leaks show a thermal absorption sink—allowing us to see inside structures without opening walls.",
    },
    {
      icon: Eye,
      title: "Video Camera Inspection",
      tag: "Optical Scoping",
      highlight: "Fiber-Optic Color Sensors",
      desc: "For drain lines, sewer mains, and buried DWV conduits, we feed high-definition, self-leveling color cameras equipped with 512 Hz sonde transmitters into the line to visually diagnose fractures, shifted bellies, root punctures, and interior pipe corrosion.",
    },
    {
      icon: Gauge,
      title: "Pressure Isolation Testing",
      tag: "Manifold Diagnostics",
      highlight: "Digital Manometer Testing",
      desc: "By isolating municipal meter lines from interior manifolds and taking continuous hydrostatic pressure readings, we mathematically determine if the pressure loss is located on the potable main, a dedicated branch line, or an outdoor irrigation backflow circuit.",
    },
    {
      icon: Crosshair,
      title: "Electronic Leak Detection",
      tag: "Slab Diagnostics",
      highlight: "Electromagnetic Sonde Tracing",
      desc: "For deeply buried slab piping and underground utility lines, we deploy frequency-matched electronic pulse generators and surface sensors to trace pipe paths and localize the leak to within inches before any repair begins.",
    },
  ];

  const leakTypes = [
    {
      icon: Home,
      title: "Slab Leaks",
      badge: "Emergency Severity",
      desc: "Pinhole leaks and pipe fractures beneath concrete foundations. We locate them acoustically and provide surgical options: localized access, trenchless repair, or complete overhead PEX reroutes without tearing up your floor.",
    },
    {
      icon: Droplets,
      title: "Shower & Bathtub Leaks",
      badge: "Interior Moisture",
      desc: "Leaks hidden behind tile surrounds, deteriorated shower pans, loose tub shoes, or faulty mixing valves that quietly rot framing studs and ruin subflooring.",
    },
    {
      icon: Wrench,
      title: "Toilet Leaks",
      badge: "High Water Loss",
      desc: "From cracked porcelain bases and deteriorated wax seals that leak sewage into the subfloor, to silent fill-valve overflow leaks wasting 200+ gallons a day.",
    },
    {
      icon: Sparkles,
      title: "Faucet & Sink Leaks",
      badge: "Fixture Repair",
      desc: "Pressurized supply lines under kitchen and bathroom cabinets, failing angle stops, and worn ceramic disc cartridges causing hidden cabinet warping.",
    },
    {
      icon: Waves,
      title: "Pool & Irrigation Leaks",
      badge: "Outdoor & Buried",
      desc: "Underground PVC sprinkler lines, pool equipment manifolds, and backflow preventers bleeding water into desert soil and sinking turf.",
    },
    {
      icon: Flame,
      title: "Water Heater Leaks",
      badge: "Rapid Flooding",
      desc: "Failing T&P relief valves, corroded dielectric nipples, or tank inner jacket failures. We diagnose if a fast component fix or a modern replacement is required.",
    },
    {
      icon: Building2,
      title: "Commercial & Multi-Family Leaks",
      badge: "Complex Infrastructure",
      desc: "High-volume main headers, multi-story vertical risers, boiler circuits, and grease trap lines for hotels, restaurants, and medical centers with zero disruption.",
    },
  ];

  const repairSteps = [
    {
      num: "01",
      title: "Accurate Diagnosis",
      desc: "We deploy acoustic sensors and thermal imagers to pinpoint the leak with mathematical accuracy. We show you the live data readings and explain the root cause in plain English.",
      icon: Search,
    },
    {
      num: "02",
      title: "100% Upfront Pricing",
      desc: "Before a single tool touches your plumbing, we give you a transparent, flat-rate quote detailing your repair options. You approve the exact scope—zero hidden surprises.",
      icon: DollarSign,
    },
    {
      num: "03",
      title: "Expert Surgical Repair",
      desc: "We perform the cleanest, least invasive solution: precision pipe patching, trenchless restoration, overhead PEX rerouting for slab leaks, or full line replacement.",
      icon: Wrench,
    },
    {
      num: "04",
      title: "Verification & Spotless Cleanup",
      desc: "We re-pressurize and verify zero pressure drops across the system. Our technicians clean up all dust and debris, leaving your home or commercial building immaculate.",
      icon: ShieldCheck,
    },
  ];

  const advantages = [
    {
      icon: Clock,
      title: "25+ Years of Tucson Experience",
      desc: "Serving Southern Arizona since 1999. We know how Tucson's hard water, expansive clay soil, and caliche affect subterranean pipes.",
    },
    {
      icon: Search,
      title: "Non-Invasive Technology",
      desc: "We locate hidden leaks through walls, slabs, and yards without damaging exploratory demo, protecting your property and budget.",
    },
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "Flat-rate transparent quotes provided and approved before work begins. No hidden overtime fees or emergency markups.",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Every technician entering your property is certified, drug-tested, background-verified, and trained in clean engineering standards.",
    },
    {
      icon: Sparkles,
      title: "Clean Engineering Protocol",
      desc: "We use protective floor coverings, containment sheeting, and thorough post-job sanitization. We leave your property cleaner than we found it.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "Fully compliant Arizona ROC #321353 holder led by founder Shawn Hamilton for complete consumer protection and peace of mind.",
    },
    {
      icon: Zap,
      title: "24/7 Emergency Response",
      desc: "Active leaks don't wait for business hours. Our rapid dispatch response teams are equipped and on-call around the clock.",
    },
  ];

  const warningSigns = [
    {
      title: "Unexplained High Water Bills",
      desc: "A sudden or gradual increase in your monthly water utility bill without a change in household usage is the #1 sign of a pressurized water leak.",
    },
    {
      title: "Sound of Running Water",
      desc: "Hearing water hissing, trickling, or rushing inside walls or under floorboards when all fixtures, appliances, and ice-makers are turned off.",
    },
    {
      title: "Warm Spots on the Floor",
      desc: "A localized area of warm tile, hardwood, or carpet indicates a hot water slab leak running directly beneath your concrete foundation.",
    },
    {
      title: "Musty or Mildewy Odors",
      desc: "A persistent earthy or sour smell in bathrooms, closets, or hallways caused by hidden moisture festering inside drywall or crawlspaces.",
    },
    {
      title: "Visible Mold or Mildew",
      desc: "Black, green, or discolored growth appearing along baseboards, lower drywall seams, or behind bathroom vanities.",
    },
    {
      title: "Peeling Paint or Warped Wallpaper",
      desc: "Water traveling along studs causes drywall backing to swell, loosening wallpaper adhesives and causing interior wall paint to blister.",
    },
    {
      title: "Bubbling or Cracking Stucco / Drywall",
      desc: "Moisture pushing through structural materials causes hairline drywall fissures, chalky efflorescence, and exterior stucco spalling.",
    },
    {
      title: "Wet Spots in the Yard",
      desc: "Patches of unusually lush, spongy, or standing mud in your desert landscaping when the irrigation system has not run.",
    },
    {
      title: "Cracks in the Foundation",
      desc: "Soil swelling or shifting from prolonged subterranean water saturation puts pressure on concrete footing, cracking slabs and brickwork.",
    },
    {
      title: "Low Water Pressure",
      desc: "A noticeable drop in dynamic flow at showers or faucets indicates pressurized water escaping through a fissure before reaching fixtures.",
    },
  ];

  const faqs = [
    {
      q: "How do I know if I have a slab leak?",
      a: "Common signs include the sound of running water when everything is off, warm or hot spots on your tile or carpet, unexplained high water bills, damp spots on baseboards, and small cracks in your flooring or foundation. If you notice any of these signs, call us immediately at (520) 221-2010 for an acoustic inspection.",
    },
    {
      q: "Will you have to break my concrete to find the leak?",
      a: "In most cases, no! We can pinpoint the exact location of the leak using acoustic listening devices and infrared thermal technology before any concrete is touched. This surgical pinpointing minimizes the area we need to access for the repair, often avoiding floor demolition entirely if an overhead reroute is preferred.",
    },
    {
      q: "Can you fix a leak without digging up my yard?",
      a: "Yes. For many underground water supply and sewer line leaks, we utilize trenchless repair techniques and pipe lining technology that requires only small access points, preserving your pavers, grass, desert landscaping, and driveway.",
    },
    {
      q: "How much does leak detection cost?",
      a: "We charge a standard, transparent diagnostic fee for professional electronic leak detection services, which we disclose upfront before dispatch. If a repair is authorized and performed by our team, this diagnostic fee is often credited directly toward the cost of your repair.",
    },
    {
      q: "Is a slab leak dangerous?",
      a: "Yes. Beyond structural water damage and aggressive mold contamination, a continuous slab leak can wash away the supporting soil beneath your foundation, creating voids that cause the concrete slab to buckle, crack, and compromise the structural stability of your entire building.",
    },
    {
      q: "Do you offer emergency leak repair?",
      a: "Yes. If you have an active, uncontrolled water leak or a flooded room, call us immediately at (520) 221-2010. We offer true 24/7 rapid emergency dispatch across Tucson and Southern Arizona to shut off the source and perform emergency stabilization.",
    },
    {
      q: "Do you repair leaks in commercial properties?",
      a: "Absolutely. We provide industrial-grade leak detection and high-pressure repairs for commercial buildings, multi-family HOAs, restaurants, medical centers, and industrial facilities. We understand the critical urgency of minimizing tenant downtime and operational interruption.",
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
              <Search className="w-3.5 h-3.5 text-cta" />
              <span>Tucson Precision Diagnostics · Non-Invasive Technology</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy tracking-tight leading-[1.1] mb-6"
            >
              Find the Leak. <br className="hidden sm:inline" />
              Fix the Problem. <br />
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
              Hidden leaks waste thousands of gallons of water and cause severe structural damage.
              American Commercial Plumbing LLC uses state-of-the-art technology to pinpoint leaks with
              surgical accuracy—no guesswork, no unnecessary digging.
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
                href="#leak-form"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-navy text-white font-extrabold text-base hover:bg-slate-800 active:scale-98 transition-all shadow-md"
              >
                <Calendar className="w-5 h-5 text-cta" />
                <span>Schedule a Leak Inspection</span>
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

      {/* ── 3. THE SILENT THREAT (NARRATIVE SECTION) ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Text */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-black uppercase tracking-wider mb-4">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>The Silent Threat to Your Property</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-6 leading-tight">
                Small Leaks Become <br />
                <span className="text-primary">Big Problems.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                A hidden water leak is one of the most destructive and costly issues a property owner can face.
                Unlike a burst pipe that announces itself with a dramatic flood, hidden leaks silently drip behind walls,
                beneath concrete slabs, or under your foundation.
              </p>
              <p className="text-slate-600 leading-relaxed text-base mb-8">
                Over time, this constant moisture silently degrades building integrity:
              </p>

              {/* 5 Threat Cards */}
              <div className="space-y-3.5 mb-8">
                {silentThreats.map((threat, idx) => {
                  const Icon = threat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 hover:border-primary/40 hover:bg-white transition-all flex items-start gap-3.5 shadow-2xs"
                    >
                      <div className="w-9 h-9 rounded-lg bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h4 className="text-sm font-black text-navy tracking-tight">
                            {threat.title}
                          </h4>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-red-100 text-red-700">
                            {threat.impact}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {threat.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Shawn Hamilton / Clean Engineering Note */}
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-200/70 text-slate-700 text-sm leading-relaxed">
                <div className="flex items-center gap-2.5 mb-2 font-black text-navy">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>25+ Years of Tucson Craftsmanship · Shawn Hamilton</span>
                </div>
                At American Commercial Plumbing LLC, we believe in solving problems at the source.
                Led by owner Shawn Hamilton, our family-run business has been protecting Tucson properties since 1999.
                We combine 25+ years of clean engineering expertise with cutting-edge diagnostic technology to find and
                fix leaks with minimal disruption to your home or business.
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-900 group">
                <img
                  src={leakImg}
                  alt="High-Tech Thermal Imaging Leak Detection in Tucson"
                  className="w-full h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-cta/15 text-cta flex items-center justify-center shrink-0">
                      <Thermometer className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-navy uppercase tracking-wider">
                        Thermal Imaging & Sonar
                      </div>
                      <div className="text-[11px] text-slate-600 font-medium">
                        Sub-surface heat bloom pinpointing pressurized line faults without tearing walls.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. OUR ADVANCED LEAK DETECTION TECHNOLOGY ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <Crosshair className="w-3.5 h-3.5 text-cta" />
              <span>Non-Invasive Diagnostic Suite</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              We Don't Guess Where the Leak Is— <br />
              <span className="text-primary">We Prove It.</span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our licensed technicians use a suite of non-invasive diagnostic tools to locate hidden leaks
              without tearing your property apart.
            </p>
          </div>

          {/* 5 Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <div
                  key={i}
                  className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 group-hover:bg-primary border border-primary/20 flex items-center justify-center text-primary group-hover:text-white transition-colors duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                        {tech.tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-navy mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {tech.title}
                    </h3>
                    <div className="text-xs font-bold text-cta mb-3">
                      {tech.highlight}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tech.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1 text-[11px] font-extrabold text-primary">
                    <span>Non-Destructive Method</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 ml-auto" />
                  </div>
                </div>
              );
            })}

            {/* Bonus Card: Fast Dispatch Callout */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-navy to-slate-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cta/15 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-cta/20 border border-cta/30 flex items-center justify-center text-cta mb-5">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-xs font-black uppercase tracking-widest text-cta mb-1">
                  Active Flooding?
                </div>
                <h3 className="text-xl font-black tracking-tight mb-3">
                  24/7 Rapid Emergency Dispatch
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  If water is actively rising or your water meter dial is spinning out of control,
                  our emergency leak teams are ready for rapid dispatch across Tucson and Pima County.
                </p>
              </div>
              <a
                href="tel:+15202212010"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cta text-white font-black text-xs uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call (520) 221-2010</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. TYPES OF LEAKS WE DETECT & REPAIR ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-primary text-xs font-black uppercase tracking-wider mb-4">
              <Wrench className="w-3.5 h-3.5 text-cta" />
              <span>Comprehensive Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              Types of Leaks We Detect & Repair
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Our team is equipped to handle any leak, anywhere on your property—from residential slabs
              to multi-story commercial facilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leakTypes.map((type, idx) => {
              const Icon = type.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-cta/40 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                        {type.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-black text-navy mb-2 tracking-tight">
                      {type.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {type.desc}
                    </p>
                  </div>
                  <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-navy">
                    <span className="text-slate-500">Diagnosis & Repair:</span>
                    <span className="text-primary font-black">Guaranteed Work</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 6. OUR LEAK REPAIR PROCESS ── */}
      <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
        <div className="absolute -top-40 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto w-[90%] max-w-7xl relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-cta/15 border border-cta/30 text-cta text-xs font-black uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-cta" />
              <span>Step-by-Step Methodology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
              Our Leak Repair Process
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Once we locate the leak, we provide a clear, upfront solution. Our repair process is designed to be
              efficient, code-compliant, and minimally invasive.
            </p>
          </div>

          {/* 4 Process Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-cta/50 transition-all flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-2xl font-black text-cta font-mono">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-700/80 border border-slate-600 flex items-center justify-center text-slate-300 group-hover:text-cta transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                    <Check className="w-3.5 h-3.5" />
                    <span>Customer Approved</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Repair options pill bar */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-800/60 border border-slate-700/80 flex flex-wrap items-center justify-between gap-4 text-xs">
            <span className="font-extrabold text-slate-200 uppercase tracking-wider">
              Common Repair Modalities:
            </span>
            <div className="flex flex-wrap gap-2 text-slate-300 font-semibold">
              <span className="px-3 py-1 rounded-lg bg-slate-700/80 border border-slate-600">
                🔧 Pipe Patching & Coupling
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-700/80 border border-slate-600">
                🌿 Trenchless No-Dig Repairs
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-700/80 border border-slate-600">
                🔄 Overhead PEX Rerouting
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-700/80 border border-slate-600">
                🛡️ Full Section Line Replacement
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. THE ACP ADVANTAGE ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-black uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Why Tucson Trusts Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              The American Commercial Plumbing Advantage
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              When you choose us for leak detection and repair, you are choosing a partner with the experience
              and technology to get it right the first time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-primary/40 hover:shadow-md transition-all flex items-start gap-4"
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

      {/* ── 8. SIGNS YOU MIGHT HAVE A HIDDEN LEAK ── */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200">
        <div className="mx-auto w-[90%] max-w-7xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 text-xs font-black uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              <span>Diagnostic Warning Indicators</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight mb-4">
              Signs You Might Have a Hidden Leak
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Don't wait for visible pooling or catastrophic foundation settlement. If you notice any of these
              10 warning signs, call us for a professional inspection:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {warningSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-cta/40 transition-all flex items-start gap-4"
              >
                <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-sm font-black text-navy tracking-tight mb-1">
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

      {/* ── 9. INTERACTIVE BOOKING / INSPECTION FORM ── */}
      <section id="leak-form" className="py-20 lg:py-28 bg-white scroll-mt-20">
        <div className="mx-auto w-[90%] max-w-5xl">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xl">
            <div className="max-w-2xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-3">
                <Calendar className="w-3.5 h-3.5 text-cta" />
                <span>Online Booking · Instant Confirmation</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
                Schedule a Leak Inspection
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Request an acoustic & thermal inspection with upfront flat-rate pricing.
                For urgent active leaks, please call{" "}
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
                  Inspection Request Received!
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  Thank you, <strong>{formData.name}</strong>. Our leak diagnostic dispatch team has received your details
                  and will call you shortly at <strong>{formData.phone}</strong> to confirm your technician window.
                </p>
                <a
                  href="tel:+15202212010"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cta text-white font-black text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-cta"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call (520) 221-2010 for Emergency Dispatch</span>
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
                      placeholder="e.g. Robert Smith"
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
                      placeholder="robert@example.com"
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
                      <option value="Residential Home">Residential Home</option>
                      <option value="Commercial Business">Commercial Business</option>
                      <option value="Restaurant / Food Service">Restaurant / Food Service</option>
                      <option value="Multi-Family / HOA">Multi-Family / HOA</option>
                      <option value="Industrial / Warehouse">Industrial / Warehouse</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Suspected Leak Area
                    </label>
                    <select
                      value={formData.leakArea}
                      onChange={(e) =>
                        setFormData({ ...formData, leakArea: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-navy text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="Slab / Under Foundation">Slab / Under Foundation</option>
                      <option value="Behind Wall / Ceiling">Behind Wall / Ceiling</option>
                      <option value="Shower / Bathroom">Shower / Bathroom</option>
                      <option value="Yard / Main Irrigation Line">Yard / Main Irrigation Line</option>
                      <option value="Under Kitchen / Faucet Sink">Under Kitchen / Faucet Sink</option>
                      <option value="Water Heater System">Water Heater System</option>
                      <option value="High Water Bill (Unknown Location)">High Water Bill (Unknown Location)</option>
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
                    Describe Symptoms / Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    placeholder="Provide details: warm spots, high meter reading, hissing sound in wall..."
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
                        <span>Submit Inspection Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-500 mt-2">
                    🔒 We respect your privacy. No spam. 100% honest flat-rate service.
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
              Frequently Asked Questions (Leak Detection & Repair)
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers from Tucson's premier leak detection specialists.
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
            <Search className="w-3.5 h-3.5 text-cta" />
            <span>Protect Your Foundation & Valuables</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-6">
            Stop Wasting Water. Stop the Damage.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            Don't let a hidden leak compromise your property. Contact American Commercial Plumbing LLC today
            for expert leak detection and repair.
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
              href="#leak-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-navy font-extrabold text-base hover:bg-slate-100 active:scale-98 transition-all shadow-md"
            >
              <Calendar className="w-5 h-5 text-primary" />
              <span>Schedule Your Leak Inspection</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
