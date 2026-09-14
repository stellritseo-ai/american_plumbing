import { motion } from "framer-motion";
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ServiceAreasGrid() {
  const serviceAreas = [
    {
      city: "Tucson",
      badge: "Metro Hub",
      dispatch: "15–30 Min Response",
      desc: "Central, Downtown, Foothills, Eastside, Westside, and South Tucson commercial and residential districts.",
    },
    {
      city: "Vail",
      badge: "Full Coverage",
      dispatch: "20–35 Min Response",
      desc: "Corona de Tucson, Rita Ranch, and Greater Vail neighborhoods with dedicated regional dispatch.",
    },
    {
      city: "Sahuarita",
      badge: "Full Coverage",
      dispatch: "25–40 Min Response",
      desc: "Rancho Sahuarita and surrounding residential master-planned communities.",
    },
    {
      city: "Marana",
      badge: "Full Coverage",
      dispatch: "20–35 Min Response",
      desc: "Gladden Farms, Dove Mountain, Continental Ranch, and Northwest corridor businesses.",
    },
    {
      city: "Green Valley",
      badge: "Full Coverage",
      dispatch: "30–45 Min Response",
      desc: "Comprehensive residential plumbing, repiping, and water heater services for Green Valley properties.",
    },
    {
      city: "Catalina",
      badge: "Full Coverage",
      dispatch: "25–40 Min Response",
      desc: "Catalina, SaddleBrooke, and North Oracle corridor residential and commercial plumbing.",
    },
    {
      city: "And Surrounding Areas",
      badge: "Southern Arizona",
      dispatch: "Prompt Dispatch",
      desc: "Oro Valley, Tanque Verde, South Tucson, and adjacent Pima County communities.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/70">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-4">
            <MapPin className="h-3.5 w-3.5 text-cta" />
            <span>Service Areas</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
            Proudly Serving Tucson & Surrounding Communities
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            We are locally owned and deeply invested in the safety of Southern Arizona. Wherever you
            are located in the greater Tucson valley, our fleet is fully stocked and ready to roll.
          </p>
        </div>

        {/* Grid of Areas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceAreas.map((area, i) => (
            <motion.div
              key={area.city}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`rounded-2xl bg-white border border-slate-200/80 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                i === serviceAreas.length - 1 ? "sm:col-span-2 lg:col-span-1 xl:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                    <Navigation className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60">
                    {area.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-navy tracking-tight">{area.city}</h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {area.desc}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{area.dispatch}</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-extrabold text-primary">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Available Now</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">
                Unsure if your neighborhood is within our service perimeter?
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Give our Tucson dispatch team a quick call to check real-time availability.
              </div>
            </div>
          </div>

          <a
            href="tel:+15202212010"
            className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-primary/90 transition-colors shrink-0"
          >
            Check Availability: (520) 221-2010
          </a>
        </div>
      </div>
    </section>
  );
}
