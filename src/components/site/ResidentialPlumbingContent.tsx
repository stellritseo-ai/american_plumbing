import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Star,
  ShieldCheck,
  UserCheck,
  Clock,
  Wrench,
  Flame,
  Search,
  Droplets,
  Pipette,
  Layers,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Send,
  Check,
  Home,
  ShieldAlert,
  AlertTriangle,
  BadgeCheck,
  FileText,
  DollarSign,
  HeartHandshake,
  MapPin,
  Compass,
  Hammer,
} from "lucide-react";
import { submitLead } from "../../lib/send-lead";

import residentialCraftsmanshipImg from "@/assets/service-residential-craftsmanship.jpg";

export function ResidentialPlumbingContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "24/7 Emergency Repair",
    preferredTime: "As soon as possible",
    message: "",
  });

  const scrollToSchedule = () => {
    const el = document.getElementById("residential-schedule-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    await submitLead({
      formTitle: "Residential Plumbing - Service Request Form",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      propertyType: "Residential",
      service: formData.serviceType,
      urgency: formData.preferredTime,
      message: formData.message,
    });
    setFormSubmitting(false);
    setFormSubmitted(true);
  };

  // ── 8 RESIDENTIAL SERVICES ──
  const services = [
    {
      icon: ShieldAlert,
      title: "24/7 Emergency Residential Repair",
      desc: "Plumbing disasters don't wait for a convenient time. Whether it's a burst pipe at midnight or a flooded laundry room on a Sunday, our emergency response team is on call 24/7 to stop the damage and restore your peace of mind.",
      badge: "24/7 On-Call",
      accent: "from-rose-600 to-cta",
      bullets: [
        "Immediate emergency technician dispatch across Tucson",
        "Rapid burst pipe shutoff & emergency flooding mitigation",
        "Overflowing toilet & severe mainline backup containment",
      ],
    },
    {
      icon: Flame,
      title: "Water Heater Repair & Installation",
      desc: "Enjoy reliable hot water again. We service, repair, and install both traditional tank and modern tankless water heaters. We'll help you choose the most energy-efficient option for your household's needs.",
      badge: "Tank & Tankless",
      accent: "from-amber-500 to-orange-600",
      bullets: [
        "High-efficiency tankless water heater installation",
        "Traditional gas & electric tank replacements & repairs",
        "Sediment descaling, anode rod checks & thermostat tuning",
      ],
    },
    {
      icon: Search,
      title: "Leak Detection & Repair",
      desc: "Hidden leaks can silently destroy your home's foundation and drive up your water bill. Using state-of-the-art acoustic and thermal technology, we pinpoint leaks behind walls or under slabs without unnecessary demolition.",
      badge: "Non-Destructive",
      accent: "from-blue-600 to-indigo-700",
      bullets: [
        "Acoustic listening & thermal infrared leak localization",
        "Slab leak detection with zero guess-work and minimal disruption",
        "Underground yard line & indoor supply line repairs",
      ],
    },
    {
      icon: Droplets,
      title: "Drain Cleaning & Hydro Jetting",
      desc: "From slow kitchen sinks to completely blocked main sewer lines, we clear stubborn clogs using professional-grade hydro jetting and snaking equipment. We don't just clear the clog; we clean the pipe walls to prevent future backups.",
      badge: "Hydro-Power",
      accent: "from-emerald-600 to-teal-700",
      bullets: [
        "High-pressure hydro jet scouring for grease & hair build-up",
        "Motorized mechanical snake clearing for tough blocks",
        "Kitchen sink, tub, shower & main floor drain clearing",
      ],
    },
    {
      icon: Pipette,
      title: "Sewer Line Inspection & Repair",
      desc: "Using advanced video camera technology, we inspect your sewer lines to diagnose root intrusions, bellies, or cracks. We offer both traditional excavation and trenchless sewer line repair to save your landscaping.",
      badge: "HD Camera Scoping",
      accent: "from-cyan-600 to-blue-700",
      bullets: [
        "High-definition video camera sewer line scoping",
        "Tree root intrusion removal & pipe descaling",
        "Trenchless pipe lining & minimal-dig repairs",
      ],
    },
    {
      icon: Wrench,
      title: "Fixture Installation & Repair",
      desc: "We install and repair all types of residential fixtures to ensure flawless daily performance, aesthetic appeal, and water conservation throughout your home.",
      badge: "Complete Fixtures",
      accent: "from-indigo-600 to-purple-700",
      bullets: [
        "Faucets, designer sinks & kitchen fixture upgrades",
        "Toilets, smart bidets & low-flow water-saving models",
        "Garbage disposals, shower & tub valves, and sump pumps",
      ],
    },
    {
      icon: Layers,
      title: "Whole-Home Repiping",
      desc: "If your home has old, corroded galvanized pipes or failing polybutylene lines, we provide complete whole-home repiping services using high-quality PEX or copper piping, ensuring safe water for years to come.",
      badge: "PEX & Copper",
      accent: "from-sky-600 to-blue-800",
      bullets: [
        "Failing polybutylene & galvanized iron pipe replacements",
        "Commercial-grade PEX-A expansion & copper repiping",
        "Enhanced water pressure, clean taste & zero discoloration",
      ],
    },
    {
      icon: Flame,
      title: "Gas Line Services",
      desc: "We provide safe, code-compliant gas line installation, repair, and leak detection for your stove, dryer, water heater, or outdoor grill.",
      badge: "Code-Compliant Gas",
      accent: "from-rose-500 to-red-700",
      bullets: [
        "Safe natural gas & propane pipe installation & testing",
        "Outdoor kitchen, patio heater & fire pit gas hookups",
        "Electronic gas leak detection & emergency shutoff repair",
      ],
    },
  ];

  // ── 5 ACP ADVANTAGES ──
  const advantages = [
    {
      icon: DollarSign,
      title: "100% Upfront & Honest Pricing",
      desc: "We believe in transparency. We diagnose the issue, explain your options, and provide a flat-rate price before any work begins. No hidden fees, no surprise charges.",
      badge: "Flat-Rate Quote",
      accent: "from-blue-600 to-indigo-700",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Your family's safety is paramount. Every technician we send to your home is certified, drug-tested, and background-checked.",
      badge: "Vetted & Certified",
      accent: "from-emerald-600 to-teal-700",
    },
    {
      icon: Sparkles,
      title: "Clean Engineering",
      desc: "We treat your home like our own. Our technicians use shoe covers, drop cloths, and clean up all debris before leaving.",
      badge: "Floor Protection",
      accent: "from-amber-500 to-orange-600",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "We are fully compliant with Arizona state regulations (ROC #321353) and carry comprehensive insurance for your complete protection.",
      badge: "ROC #321353",
      accent: "from-indigo-600 to-purple-700",
    },
    {
      icon: Clock,
      title: "Same-Day Emergency Response",
      desc: "We know a plumbing emergency can't wait. We prioritize rapid response to mitigate damage to your home.",
      badge: "Fast Dispatch",
      accent: "from-rose-600 to-cta",
    },
  ];

  // ── 6 EXPECTATION STEPS ──
  const expectations = [
    {
      step: "01",
      title: "Prompt Arrival",
      desc: "We respect your time and arrive when we say we will, keeping you updated with dispatch notifications.",
    },
    {
      step: "02",
      title: "Thorough Diagnosis",
      desc: "We find the root cause of the plumbing issue, not just a temporary surface symptom.",
    },
    {
      step: "03",
      title: "Clear Explanation",
      desc: "We explain the issue in plain English and answer all your questions with zero pressure.",
    },
    {
      step: "04",
      title: "Upfront Pricing",
      desc: "You approve the clear, flat-rate price before we turn a single wrench. Never any hidden fees.",
    },
    {
      step: "05",
      title: "Expert Repair",
      desc: "We fix it right the first time using top-quality parts and commercial-grade craftsmanship.",
    },
    {
      step: "06",
      title: "Clean Exit",
      desc: "We clean up our entire workspace, pack out all debris, and ensure your home is left tidy.",
    },
  ];

  // ── 6 RESIDENTIAL FAQS ──
  const faqs = [
    {
      q: "Do you offer emergency plumbing services for homes?",
      a: "Yes. We offer true 24/7 emergency response for residential plumbing issues, including burst pipes, major leaks, sewage backups, and no-hot-water situations. Call (520) 221-2010 immediately if you have an emergency.",
    },
    {
      q: "How quickly will you respond to my call?",
      a: "During normal business hours (Mon-Fri, 7 AM - 4 PM), we aim to respond to all service calls and web inquiries within one hour. For after-hours emergencies, we dispatch technicians immediately.",
    },
    {
      q: "Are your plumbers background-checked?",
      a: "Absolutely. We understand that inviting someone into your home requires trust. Every technician dispatched by American Commercial Plumbing LLC is fully background-checked and drug-tested.",
    },
    {
      q: "Do you charge for estimates?",
      a: "We provide free estimates on a wide range of installation and replacement projects (like water heaters or repiping). For diagnostic service calls, there is a standard dispatch fee, which we will always disclose upfront before scheduling.",
    },
    {
      q: "What areas do you serve?",
      a: "We proudly serve Tucson and the surrounding Southern Arizona communities, including Vail, Sahuarita, Marana, Green Valley, Catalina, and Drexel Heights.",
    },
    {
      q: "Do you guarantee your work?",
      a: "Yes. We stand behind all of our repairs and installations. We offer a warranty on both our labor and the parts we install. Ask your technician for specific warranty details on your service.",
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
                Live Residential Dispatch Available
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Direct Emergency Assistance & Service Scheduling
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
                <span>📅 Schedule Your Service</span>
              </button>
            </div>
          </div>

          {/* 4 Trust Bar Cards (Visual Elements) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                <Star className="h-5 w-5 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">4.9 Star Rating</span>
                <span className="text-[11px] font-bold text-slate-500">1,000+ Verified Reviews</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">ROC #321353</span>
                <span className="text-[11px] font-bold text-slate-500">Licensed, Bonded & Insured</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center shrink-0">
                <UserCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Vetted Technicians</span>
                <span className="text-[11px] font-bold text-slate-500">100% Background-Checked</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-cta" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">24/7 Emergency</span>
                <span className="text-[11px] font-bold text-slate-500">Rapid Home Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROTECTING YOUR HOME & FAMILY SINCE 1999 ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-4">
                <Home className="h-3.5 w-3.5" />
                Protecting Your Home & Family Since 1999
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy tracking-tight leading-tight mb-6">
                The Comfort of Your Home is Our Priority
              </h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  Your home is your sanctuary, and its plumbing system is the lifeline that keeps it running smoothly. A leaky pipe, a broken water heater, or a stubborn clog can disrupt your entire day and lead to costly water damage.
                </p>
                <p>
                  At <strong className="text-navy font-bold">American Commercial Plumbing LLC</strong>, we believe your home deserves the same precision, clean engineering, and high-quality materials we provide to large commercial facilities. Led by owner <strong className="text-navy font-bold">Shawn Holton</strong>, our family-run business has been serving Tucson homeowners for over 25 years. We treat your home with the respect it deserves—which means wearing shoe covers, laying down floor protection, and leaving your space cleaner than we found it.
                </p>
                <p>
                  When you invite us into your home, you aren't just getting a plumber; you're getting a trusted neighbor dedicated to your safety and comfort.
                </p>
              </div>

              {/* Founder Quote Card */}
              <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 flex items-start gap-4 shadow-xs">
                <div className="h-12 w-12 rounded-xl bg-blue-100/80 border border-blue-200 flex items-center justify-center shrink-0 text-primary font-black text-lg">
                  SH
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 italic leading-snug">
                    "Every home we step into receives the exact same meticulous engineering and honest pricing we demand for our own families. No shortcuts, no hidden fees—just genuine craftsmanship."
                  </p>
                  <div className="mt-2 text-xs font-black text-navy uppercase tracking-wider">
                    Shawn Holton <span className="font-normal text-slate-500">· Founder & Master Plumber</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Image with Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src={residentialCraftsmanshipImg}
                  alt="Precision residential plumbing craftsmanship in Tucson home"
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
                      <div className="text-xs font-black text-navy">Clean Engineering Promise</div>
                      <div className="text-[11px] text-slate-500 font-medium">Shoe covers, floor protection & spotless clean exit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OUR RESIDENTIAL PLUMBING SERVICES (8 DEDICATED CARDS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Wrench className="h-3.5 w-3.5" />
              Complete Home Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Our Residential Plumbing Services
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We offer a comprehensive suite of residential plumbing solutions, ensuring your home's water runs clean, safe, and efficiently:
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
                      <span>Book This Service</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. THE AMERICAN COMMERCIAL PLUMBING ADVANTAGE ── */}
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
              Why do thousands of Tucson homeowners choose us? Because we go above and beyond the standard plumbing call.
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

      {/* ── 5. OUR COMMITMENT TO YOUR HOME & 6-STEP PROCESS ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-4">
                <HeartHandshake className="h-3.5 w-3.5" />
                Our Commitment to Your Home
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-5">
                100% Satisfaction Guaranteed
              </h2>
              <p className="text-slate-700 text-base leading-relaxed mb-4">
                We aren't happy until you are. When you choose American Commercial Plumbing LLC, you are choosing a partner who stands behind their work. If you aren't completely satisfied with our service, we will make it right. That's our promise to you.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-slate-600">
                  Backed by 25+ years of Tucson family ownership
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-black text-navy mb-2">What to expect when you hire us:</h3>
                <p className="text-xs text-slate-500 mb-6 font-medium">A seamless, courteous, professional experience from your first call to our clean exit.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {expectations.map((exp, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                      <div className="text-xs font-black text-primary mb-1">
                        {exp.step} · {exp.title}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. SCHEDULE YOUR SERVICE INTERACTIVE FORM ── */}
      <section id="residential-schedule-form" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
                <Calendar className="h-3.5 w-3.5" />
                Schedule Online
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-2">
                Schedule Your Residential Service
              </h2>
              <p className="text-slate-600 text-sm">
                Fill out the quick request below or call us directly at <a href="tel:+15202212010" className="text-primary font-bold hover:underline">(520) 221-2010</a>. We confirm all appointments promptly.
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
                  Thank you for contacting American Commercial Plumbing LLC. One of our Tucson residential dispatch specialists will call you within one business hour to confirm your appointment time and details.
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
                      placeholder="e.g. Sarah Jenkins"
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
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Service Needed *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="24/7 Emergency Repair">24/7 Emergency Repair</option>
                      <option value="Water Heater Repair & Installation">Water Heater Repair & Installation</option>
                      <option value="Leak Detection & Pipe Repair">Leak Detection & Pipe Repair</option>
                      <option value="Drain Cleaning & Hydro Jetting">Drain Cleaning & Hydro Jetting</option>
                      <option value="Sewer Line Inspection & Repair">Sewer Line Inspection & Repair</option>
                      <option value="Fixture Installation & Repair">Fixture Installation & Repair</option>
                      <option value="Whole-Home Repiping">Whole-Home Repiping (PEX/Copper)</option>
                      <option value="Gas Line Services">Gas Line Services</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Preferred Scheduling / Urgency
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  >
                    <option value="As soon as possible">As soon as possible (Emergency)</option>
                    <option value="Today - Next Available Tech">Today - Next Available Tech</option>
                    <option value="Tomorrow Morning (7 AM - 11 AM)">Tomorrow Morning (7 AM - 11 AM)</option>
                    <option value="Tomorrow Afternoon (11 AM - 3 PM)">Tomorrow Afternoon (11 AM - 3 PM)</option>
                    <option value="Flexible / Just Need an Estimate">Flexible / Just Need an Estimate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Tell us about the issue
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what's happening (e.g., slow kitchen drain, water heater leaking from base, need new toilet installed)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    🔒 100% Upfront Pricing · Zero Hidden Fees · Background-Checked Techs
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

      {/* ── 7. FREQUENTLY ASKED QUESTIONS (RESIDENTIAL) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <FileText className="h-3.5 w-3.5" />
              Helpful Answers
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
              Frequently Asked Questions (Residential)
            </h2>
            <p className="text-slate-600 text-sm">
              Quick answers to common questions from Tucson homeowners.
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

      {/* ── 8. BOTTOM CALL TO ACTION (FOOTER BANNER) ── */}
      <section className="py-20 bg-navy relative overflow-hidden text-white">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-cta/15 blur-3xl pointer-events-none" />

        <div className="mx-auto w-[92%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-electric mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            Tucson's Trusted Family Plumbers
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Experience the Best in Home Plumbing.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Join thousands of satisfied Tucson homeowners. Contact us today for fast, reliable, and honest residential plumbing services.
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
              <span>📅 Request Your Free Estimate</span>
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
              <span>Drug-Tested & Vetted Technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>24/7 Rapid Emergency Response</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
