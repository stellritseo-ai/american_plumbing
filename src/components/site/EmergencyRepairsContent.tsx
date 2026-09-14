import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  Clock,
  Zap,
  ShieldCheck,
  UserCheck,
  Droplets,
  Flame,
  Search,
  AlertTriangle,
  ChevronDown,
  ArrowRight,
  Send,
  Check,
  Sparkles,
  ShieldAlert,
  Pipette,
  Layers,
  Wrench,
  HelpCircle,
  FileText,
  Truck,
  DollarSign,
  Info,
  CheckCircle2,
  Wind,
} from "lucide-react";
import { submitLead } from "../../lib/send-lead";

import emergencyTechImg from "@/assets/service-emergency-dispatch.jpg";

export function EmergencyRepairsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "Residential",
    emergencyType: "Burst Pipe / Major Leak",
    location: "",
    details: "",
  });

  const scrollToTriage = () => {
    const el = document.getElementById("emergency-triage-guide");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById("emergency-request-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);
    await submitLead({
      formTitle: "Emergency Repairs - Priority Dispatch Request",
      name: formData.name,
      phone: formData.phone,
      propertyType: formData.propertyType,
      service: `Emergency: ${formData.emergencyType}`,
      urgency: "CRITICAL 24/7 EMERGENCY",
      address: formData.location,
      message: formData.details,
    });
    setFormSubmitting(false);
    setFormSubmitted(true);
  };

  // ── 6 EMERGENCY SITUATIONS WE HANDLE ──
  const emergencySituations = [
    {
      icon: Droplets,
      title: "Burst Pipes & Major Water Leaks",
      desc: "Freezing temperatures, root intrusions, or old pipes can cause sudden ruptures. We specialize in rapid leak isolation and pipe repair to stop water damage in its tracks.",
      badge: "Water Flooding Hazard",
      accent: "from-blue-600 to-cyan-600",
      urgentAction: "Shut off main water valve immediately.",
    },
    {
      icon: Pipette,
      title: "Sewer Line Backups",
      desc: "Raw sewage backing up into your home or business is a severe health hazard. We deploy advanced hydro-jetting and camera equipment to clear the main line and sanitize the area.",
      badge: "Biohazard Warning",
      accent: "from-amber-600 to-red-600",
      urgentAction: "Cease all plumbing & water use immediately.",
    },
    {
      icon: Flame,
      title: "Water Heater Failures & Leaks",
      desc: "A leaking or burst water heater tank can flood a room instantly. We handle emergency water heater repairs, replacements, and safe shut-offs.",
      badge: "Hot Water Flooding",
      accent: "from-orange-600 to-amber-600",
      urgentAction: "Turn off water heater supply & breaker/gas line.",
    },
    {
      icon: ShieldAlert,
      title: "Overflowing Toilets & Clogged Main Lines",
      desc: "A single overflowing toilet can ruin flooring. If plunging hasn't worked, our team has the professional tools to clear the blockage without damaging your fixtures.",
      badge: "Flooring Damage Risk",
      accent: "from-purple-600 to-indigo-600",
      urgentAction: "Turn valve behind toilet clockwise to shut off water.",
    },
    {
      icon: Wind,
      title: "Gas Line Leaks",
      desc: "If you smell gas or suspect a gas leak, evacuate the premises immediately and call us from a safe location. We provide 24/7 emergency gas line leak detection and repair.",
      badge: "Critical Life Safety",
      accent: "from-rose-600 to-red-700",
      urgentAction: "Evacuate immediately. Do NOT toggle light switches.",
    },
    {
      icon: Search,
      title: "Slab Leaks",
      desc: "A slab leak can silently undermine your home's foundation. If you hear running water when everything is off, or notice unexplained hot spots on your floor, call us immediately.",
      badge: "Foundation Threat",
      accent: "from-teal-600 to-emerald-600",
      urgentAction: "Check water meter movement with all faucets shut off.",
    },
  ];

  // ── 5 RESPONSE PROCESS STEPS ──
  const responseProcess = [
    {
      step: "01",
      title: "Immediate Dispatch & Triage",
      desc: "A real person answers your call 24/7. We ask key questions to understand the severity of the situation and give you immediate instructions on how to minimize damage (like where to find your main water shut-off valve).",
    },
    {
      step: "02",
      title: "Rapid Arrival",
      desc: "Our on-call technicians are strategically positioned throughout Tucson and surrounding areas. We aim for a 60-minute average arrival time for true emergencies.",
    },
    {
      step: "03",
      title: "Emergency Stabilization",
      desc: "Upon arrival, our first priority is stopping the damage. We will quickly isolate the issue, shut off the necessary valves, and stabilize the situation to prevent further water or gas damage.",
    },
    {
      step: "04",
      title: "Transparent Diagnosis & Upfront Pricing",
      desc: "Once the crisis is contained, we thoroughly diagnose the root cause. We explain the necessary repairs in plain English and provide you with 100% upfront, flat-rate pricing before any repair work begins. No hidden fees, no price gouging during emergencies.",
    },
    {
      step: "05",
      title: "Expert Repair & Cleanup",
      desc: "We complete the repair efficiently using top-quality parts. We treat your property with respect, cleaning up our workspace and ensuring you are left with a safe, functioning plumbing system.",
    },
  ];

  // ── 5 ACP EMERGENCY ADVANTAGES ──
  const emergencyAdvantages = [
    {
      icon: Clock,
      title: "True 24/7 Availability",
      desc: "We don't close. Our emergency lines are staffed 24 hours a day, 365 days a year by experienced local dispatchers.",
      badge: "Live 24/7/365",
      accent: "from-rose-600 to-cta",
    },
    {
      icon: DollarSign,
      title: "No Overtime Price Gouging",
      desc: "While emergency calls may incur a standard dispatch fee, we maintain our transparent, upfront pricing model. You will know the cost before we start.",
      badge: "100% Flat-Rate",
      accent: "from-blue-600 to-indigo-700",
    },
    {
      icon: Truck,
      title: "Fully Stocked Trucks",
      desc: "Our emergency vehicles are stocked with the most common parts and tools, allowing us to complete most repairs on the first visit.",
      badge: "Onboard Warehouse",
      accent: "from-emerald-600 to-teal-700",
    },
    {
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      desc: "We are fully compliant (ROC #321353), protecting you from liability and ensuring the work is done to code.",
      badge: "ROC #321353",
      accent: "from-purple-600 to-indigo-700",
    },
    {
      icon: UserCheck,
      title: "Background-Checked Technicians",
      desc: "Even in an emergency, your safety is our priority. We only send vetted, professional technicians to your property.",
      badge: "100% Vetted Pros",
      accent: "from-amber-600 to-orange-600",
    },
  ];

  // ── 5 EMERGENCY FAQS ──
  const faqs = [
    {
      q: "Do you really answer the phone at 3:00 AM?",
      a: "Yes. We are a true 24/7 emergency plumbing service. When you call (520) 221-2010, you will speak to a live person who can dispatch a technician immediately.",
    },
    {
      q: "How much does an emergency plumber cost?",
      a: "We understand that emergency repairs are unexpected. We charge a standard emergency dispatch fee, and we provide 100% upfront, flat-rate pricing for the repair before we begin. You will never be surprised by the bill.",
    },
    {
      q: "How quickly can you get to my house?",
      a: "We strive for a 60-minute average arrival time for true emergencies, depending on your location and traffic conditions. We will give you an estimated arrival time when you call.",
    },
    {
      q: "Do you handle commercial emergency calls?",
      a: "Absolutely. We understand that a plumbing failure can shut down your business. We prioritize commercial emergency calls to minimize your downtime and protect your inventory.",
    },
    {
      q: "What areas do you serve for emergencies?",
      a: "We provide 24/7 emergency service to Tucson and the surrounding Southern Arizona communities, including Vail, Sahuarita, Marana, Green Valley, Catalina, and Drexel Heights.",
    },
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* ── 1. TOP QUICK ACTION & TRUST BAR (PIXEL-PERFECT, ZERO CLIPPING) ── */}
      <section className="py-8 sm:py-10 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          {/* Quick Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 mb-8 pb-8 border-b border-slate-200/80">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-600 mb-1">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-600 animate-ping" />
                Live 24/7 Tucson Dispatch Active
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Immediate Emergency Plumbing Assistance
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="tel:+15202212010"
                className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>🚨 Call Now: (520) 221-2010</span>
              </a>

              <a
                href="sms:+15202212010?&body=Hello,%20I%20have%20an%20urgent%20plumbing%20emergency:"
                className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-electric" />
                <span>📱 Text for Emergency Service</span>
              </a>
            </div>
          </div>

          {/* 4 Trust Bar Cards (Visual Elements) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-cta" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">24/7 Emergency</span>
                <span className="text-[11px] font-bold text-slate-500">Live Dispatch</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs flex items-center gap-3.5 hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center shrink-0">
                <Zap className="h-5 w-5 text-amber-500" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">60-Min Average</span>
                <span className="text-[11px] font-bold text-slate-500">Arrival Target</span>
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
                <UserCheck className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <span className="text-sm font-black text-navy block leading-tight">Background-Checked</span>
                <span className="text-[11px] font-bold text-slate-500">Certified Techs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHEN EVERY MINUTE COUNTS ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Narrative Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-4">
                <ShieldAlert className="h-3.5 w-3.5 text-rose-600" />
                When Every Minute Counts
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-navy tracking-tight leading-tight mb-6">
                Fast, Decisive Action to Protect Your Property
              </h2>
              <div className="space-y-4 text-slate-700 text-base leading-relaxed">
                <p>
                  A plumbing emergency is more than just an inconvenience—it’s a race against time. A burst pipe can dump hundreds of gallons of water into your home or commercial facility in a matter of minutes, leading to catastrophic structural damage, mold growth, and ruined inventory.
                </p>
                <p>
                  When disaster strikes, you don't need a call center that puts you on hold. You need a local, expert team that answers the phone immediately and dispatches a certified technician to your door.
                </p>
                <p>
                  At <strong className="text-navy font-bold">American Commercial Plumbing LLC</strong>, we have been Tucson’s trusted emergency plumbing partner since 1999. Whether it’s 2:00 PM on a Tuesday or 3:00 AM on a holiday, our on-call emergency team is fully equipped to diagnose, isolate, and repair your plumbing crisis fast.
                </p>
              </div>

              {/* Instant Emergency Phone Bar */}
              <div className="mt-8 p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div className="h-12 w-12 rounded-xl bg-cta text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-5 h-5 fill-current animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-rose-700">Immediate Phone Dispatch</div>
                    <div className="text-xl sm:text-2xl font-black text-navy">(520) 221-2010</div>
                  </div>
                </div>

                <a
                  href="tel:+15202212010"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-cta text-white text-xs font-black uppercase tracking-wider hover:brightness-110 shadow-cta transition-all text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Column: Visual Image with Floating Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <img
                  src={emergencyTechImg}
                  alt="Rapid response emergency plumber inspecting copper valves with precision"
                  className="w-full h-auto object-cover max-h-[520px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-slate-200/80 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-rose-100 text-cta flex items-center justify-center shrink-0 font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-navy">60-Minute Arrival Target</div>
                      <div className="text-[11px] text-slate-500 font-medium">Strategically positioned technicians across Tucson</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. EMERGENCY SITUATIONS WE HANDLE (6 DEDICATED CARDS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
              <AlertTriangle className="h-3.5 w-3.5" />
              Immediate Situations
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Emergency Situations We Handle
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              If you are experiencing any of the following, stop reading and call us immediately at <a href="tel:+15202212010" className="text-cta font-bold hover:underline">(520) 221-2010</a>:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {emergencySituations.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-90 group-hover:h-2 transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="h-12 w-12 rounded-2xl bg-rose-50 border border-rose-200/80 flex items-center justify-center text-cta group-hover:scale-105 transition-transform">
                        <IconComp className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-rose-50 text-rose-700 border border-rose-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-black text-navy mb-3 group-hover:text-cta transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-6">
                      <div className="text-[11px] font-black uppercase tracking-wider text-rose-700 mb-1 flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        Immediate Action:
                      </div>
                      <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                        {item.urgentAction}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="tel:+15202212010"
                      className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-cta text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                    >
                      <Phone className="h-3.5 w-3.5 fill-current" />
                      <span>Dispatch Tech: (520) 221-2010</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. WHAT TO DO WHILE YOU WAIT FOR US TO ARRIVE ── */}
      <section id="emergency-triage-guide" className="py-20 lg:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
              <Info className="h-3.5 w-3.5" />
              Critical Immediate Steps
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              What to Do While You Wait for Us to Arrive
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              If you have a plumbing emergency, every second counts. While our team is en route, take these immediate steps to minimize damage:
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Card 1: Burst Pipes */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border-2 border-blue-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block">Damage Control</span>
                    <h3 className="text-lg font-black text-navy">For Burst Pipes or Major Leaks</h3>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[11px] font-black">1</span>
                    <span><strong>Shut off the main water valve.</strong> (Usually located near the street curb box or where the main line enters your home).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[11px] font-black">2</span>
                    <span><strong>Turn off the electricity</strong> to affected rooms if it is safe to reach the breaker panel without standing in water.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[11px] font-black">3</span>
                    <span><strong>Move furniture, electronics, and valuables</strong> away from standing water immediately.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 text-[11px] font-black">4</span>
                    <span><strong>Use towels, buckets, or a wet/dry vac</strong> to contain and extract standing moisture.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2: Sewer Backups */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border-2 border-amber-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Pipette className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 block">Sanitation Safety</span>
                    <h3 className="text-lg font-black text-navy">For Sewer Backups</h3>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs font-semibold text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-[11px] font-black">1</span>
                    <span><strong>Stop using all water completely.</strong> Do NOT flush toilets, run sinks, showers, or dishwashers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-[11px] font-black">2</span>
                    <span><strong>Do NOT pour chemical drain cleaners.</strong> They will not resolve a mainline backup and create severe chemical splash hazards for plumbers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shrink-0 text-[11px] font-black">3</span>
                    <span><strong>Keep children and pets away</strong> from all contaminated drains and wet floor zones.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3: Gas Leaks */}
            <div className="p-8 rounded-3xl bg-rose-50/70 border-2 border-rose-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-rose-100 text-cta flex items-center justify-center shrink-0">
                    <Wind className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-rose-700 block">Immediate Evacuation</span>
                    <h3 className="text-lg font-black text-navy">For Gas Leaks</h3>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs font-semibold text-slate-800">
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 text-[11px] font-black">1</span>
                    <span><strong>DO NOT turn on or off any lights</strong>, switches, garage doors, or electronics that might spark.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 text-[11px] font-black">2</span>
                    <span><strong>Evacuate the building immediately</strong> with all family members and pets. Leave doors open to ventilate if safe.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="h-5 w-5 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center shrink-0 text-[11px] font-black">3</span>
                    <span><strong>Call us from a safe outdoor location</strong> or call 911 / Southwest Gas if a severe leak is suspected.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. OUR EMERGENCY RESPONSE PROCESS (5 STEPS) ── */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Wrench className="h-3.5 w-3.5" />
              Prepared & Decisive
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              Our Emergency Response Process
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We don't just show up; we show up prepared to solve the problem. Here is what you can expect when you call our emergency line:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {responseProcess.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden"
              >
                <div>
                  <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-primary font-black text-sm mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-black text-navy mb-2.5">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}

            {/* Final Contact Card */}
            <div className="bg-navy rounded-3xl p-7 text-white shadow-md flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-electric mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Live Dispatch
                </div>
                <h3 className="text-xl font-black text-white mb-2">Need Help Right Now?</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  Call our live on-call dispatcher. We will guide you through triage and dispatch a technician immediately.
                </p>
              </div>

              <a
                href="tel:+15202212010"
                className="w-full py-3 px-4 rounded-xl bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-cta"
              >
                <Phone className="h-3.5 w-3.5 fill-current" />
                <span>Call (520) 221-2010</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. THE ACP EMERGENCY ADVANTAGE (5 CARDS) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <ShieldCheck className="h-3.5 w-3.5" />
              Trusted in a Crisis
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-4">
              The American Commercial Plumbing Emergency Advantage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you have a plumbing emergency, you can't afford to gamble on an unvetted contractor. Here is why Tucson trusts us in a crisis:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyAdvantages.map((adv, idx) => {
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

      {/* ── 7. ONLINE EMERGENCY DISPATCH / CONTACT FORM ── */}
      <section id="emergency-request-form" className="py-20 lg:py-24 bg-[#F8FAFC] border-b border-slate-200 scroll-mt-20">
        <div className="mx-auto w-[92%] max-w-5xl">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-700 mb-3">
                <Zap className="h-3.5 w-3.5" />
                Priority Triage
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight mb-2">
                Fast Online Emergency Triage
              </h2>
              <p className="text-slate-600 text-sm">
                Can't speak on the phone right now? Submit this rapid triage form or call our direct emergency line at <a href="tel:+15202212010" className="text-cta font-bold hover:underline">(520) 221-2010</a>.
              </p>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-rose-50 border border-rose-200 rounded-2xl p-8 text-center"
              >
                <div className="h-16 w-16 rounded-full bg-rose-100 text-cta mx-auto flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-black text-navy mb-2">Emergency Alert Dispatched!</h3>
                <p className="text-sm text-slate-700 max-w-md mx-auto mb-6">
                  Our on-call emergency dispatcher is reviewing your request immediately and will phone you back within minutes. If water is spraying, please shut off your main water valve.
                </p>
                <a
                  href="tel:+15202212010"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cta text-white text-xs font-black uppercase tracking-wider shadow-cta"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Direct: (520) 221-2010</span>
                </a>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Martinez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Phone Number (For Immediate Callback) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(520) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
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
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                    >
                      <option value="Residential">Residential (Home / Condo / Apartment)</option>
                      <option value="Commercial">Commercial (Business / Facility / Restaurant)</option>
                      <option value="Property Management">Property Management / HOA</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                      Type of Emergency *
                    </label>
                    <select
                      value={formData.emergencyType}
                      onChange={(e) => setFormData({ ...formData, emergencyType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                    >
                      <option value="Burst Pipe / Major Leak">Burst Pipe / Major Leak</option>
                      <option value="Sewer Line Backup">Sewer Line Backup</option>
                      <option value="Water Heater Bursting / Flooding">Water Heater Bursting / Flooding</option>
                      <option value="Overflowing Toilet / Main Drain Block">Overflowing Toilet / Main Drain Block</option>
                      <option value="Gas Line Odor / Leak">Gas Line Odor / Leak</option>
                      <option value="Slab Leak Suspicion">Slab Leak Suspicion</option>
                      <option value="Other Urgent Issue">Other Urgent Issue</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Address / Neighborhood in Tucson Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 1234 E Broadway Blvd, Tucson (or Vail, Marana, etc.)"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-navy mb-2">
                    Current Situation Details
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Is the water shut off? Where is the water leaking? Any structural damage?"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-medium">
                    ⚡ Live 24/7/365 On-Call Dispatch · True Emergency Rapid Response
                  </div>
                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider shadow-cta transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {formSubmitting ? (
                      <span>Alerting Tech...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Emergency Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── 8. FREQUENTLY ASKED QUESTIONS (EMERGENCY) ── */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-4xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-blue-50/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <FileText className="h-3.5 w-3.5" />
              Emergency Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight mb-3">
              Frequently Asked Questions (Emergency)
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to critical questions during plumbing emergencies in Tucson.
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
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-cta/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />

        <div className="mx-auto w-[92%] max-w-5xl relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-400/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-300 mb-6">
            <ShieldAlert className="h-3.5 w-3.5" />
            Active 24/7 Emergency Dispatch
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-5 max-w-3xl mx-auto leading-tight">
            Don't Wait. Stop the Damage Now.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Every minute you wait increases the risk of severe water damage and costly repairs. Call American Commercial Plumbing LLC now for immediate 24/7 emergency assistance.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+15202212010"
              className="bg-cta hover:brightness-110 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>🚨 Call Now: (520) 221-2010</span>
            </a>

            <a
              href="sms:+15202212010?&body=Hello,%20I%20have%20an%20urgent%20plumbing%20emergency:"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-black uppercase tracking-wider px-8 py-4 rounded-full backdrop-blur-sm transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-electric" />
              <span>📱 Text (520) 221-2010</span>
            </a>
          </div>

          {/* Guarantee Badges Row */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>True 24/7 Live Response</span>
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
              <Clock className="w-4 h-4 text-amber-400" />
              <span>60-Minute Arrival Target</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
