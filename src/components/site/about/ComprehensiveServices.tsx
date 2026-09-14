import { motion } from "framer-motion";
import {
  Building2,
  Home,
  Flame,
  Search,
  Droplets,
  Wrench,
  ShieldAlert,
  Pipette,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import commImg from "@/assets/service-commercial.jpg";
import resiImg from "@/assets/service-residential.jpg";

export function ComprehensiveServices() {
  const residentialServices = [
    {
      icon: Flame,
      title: "Water Heater Repair & Installation",
      desc: "Tankless and standard hot water systems installed, flushed, and repaired for continuous hot water.",
      tag: "Tank & Tankless",
    },
    {
      icon: Search,
      title: "Sewer Line Inspection & Repair",
      desc: "High-definition camera diagnostics to pinpoint breaks, tree root intrusions, and line collapses.",
      tag: "HD Camera Tech",
    },
    {
      icon: Droplets,
      title: "Drain Cleaning & Hydro Jetting",
      desc: "Clearing the toughest kitchen, bath, and main line clogs using commercial-grade hydro jet scouring.",
      tag: "High-Pressure",
    },
    {
      icon: Pipette,
      title: "Leak Detection & Repair",
      desc: "Non-invasive acoustic and thermal detection to locate slab leaks and hidden pipe fractures without tearing up floors.",
      tag: "Non-Destructive",
    },
    {
      icon: Wrench,
      title: "Gas Line Services",
      desc: "Licensed gas pipe installation, leak diagnostics, appliance line hookups, and safety valve testing.",
      tag: "Certified & Safe",
    },
    {
      icon: ShieldAlert,
      title: "Emergency Repairs (24/7)",
      desc: "Rapid response dispatch 24 hours a day, 7 days a week for burst pipes, sewage backups, and catastrophic leaks.",
      tag: "Always On Call",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-4">
            <Building2 className="h-3.5 w-3.5" />
            <span>Our Comprehensive Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
            Expert Solutions for Every Pipe, Drain, and Fixture
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Whether you are a property manager maintaining a large facility or a homeowner dealing
            with a midnight emergency, we have the tools and expertise to handle it.
          </p>
        </div>

        {/* 2 Primary Pillars: Commercial & Residential */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {/* Commercial Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-[2.5rem] overflow-hidden bg-slate-900 text-white shadow-xl flex flex-col justify-between"
          >
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={commImg}
                alt="Commercial Plumbing in Tucson"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-electric/90 text-white backdrop-blur-md">
                <Building2 className="h-3.5 w-3.5" />
                <span>Commercial Plumbing</span>
              </div>
            </div>

            <div className="p-7 sm:p-9 relative">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Tucson Commercial Plumbing Operations
              </h3>

              <p className="mt-4 text-slate-300 text-base leading-relaxed font-normal">
                We understand that downtime costs money. We provide rapid response and preventative
                maintenance for Tucson businesses, ensuring your operations run smoothly without
                plumbing interruptions.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Rapid Dispatch Protocols</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Facility Maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Code & Grease Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Zero Business Interruption</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Residential Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-[2.5rem] overflow-hidden bg-white border border-slate-200/80 shadow-xl flex flex-col justify-between"
          >
            <div className="relative h-64 sm:h-72 overflow-hidden">
              <img
                src={resiImg}
                alt="Residential Plumbing in Tucson"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-cta text-white backdrop-blur-md">
                <Home className="h-3.5 w-3.5" />
                <span>Residential Plumbing</span>
              </div>
            </div>

            <div className="p-7 sm:p-9 relative">
              <h3 className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
                Full-Service Residential Solutions
              </h3>

              <p className="mt-4 text-slate-600 text-base leading-relaxed font-normal">
                From leaky faucets to full repiping, we keep your home’s water running clean and
                safe. We bring commercial-grade fixtures and heavy-duty pipe craftsmanship to your
                residence.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Clean Domestic Water</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Complete Whole-Home Repiping</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Fixture Replacement</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span>Same-Day Appointments</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Highlighted Sub-Services Grid */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-navy uppercase tracking-wider">
                Specialized Service Capabilities
              </h4>
              <p className="text-sm text-slate-500 font-medium">
                Engineered for longevity, tested for reliability
              </p>
            </div>
            <a
              href="/#services"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-primary hover:text-electric transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-slate-50/70 border border-slate-200/70 p-6 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-slate-600">
                        {s.tag}
                      </span>
                    </div>

                    <h5 className="text-lg font-bold text-navy leading-snug">
                      {s.title}
                    </h5>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
