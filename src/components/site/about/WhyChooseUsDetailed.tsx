import { motion } from "framer-motion";
import { Award, Users, ShieldCheck, UserCheck, ReceiptText, Sparkles, Check } from "lucide-react";

export function WhyChooseUsDetailed() {
  const reasons = [
    {
      id: "01",
      icon: Award,
      title: "25+ Years of Excellence",
      badge: "Since 1999",
      accent: "from-blue-500/10 to-primary/10",
      iconBg: "bg-primary/10 text-primary",
      description:
        "Since 1999, we have navigated the ever-changing plumbing codes and technologies to bring you the most reliable solutions available. Two-and-a-half decades in the Tucson climate means we know local pipe dynamics inside and out.",
      highlights: ["Local Code Experts", "25+ Years Field Record", "Master Plumber Led"],
    },
    {
      id: "02",
      icon: Users,
      title: "Family-Owned & Operated",
      badge: "Shawn Hamilton & Family",
      accent: "from-amber-500/10 to-orange-500/10",
      iconBg: "bg-cta/10 text-cta",
      description:
        "As a family business, our name is on the line with every job. We treat your property with the same respect we would our own. No corporate middlemen—just genuine personal accountability.",
      highlights: ["Direct Owner Oversight", "Personal Accountability", "White-Glove Cleanliness"],
    },
    {
      id: "03",
      icon: ShieldCheck,
      title: "Licensed, Bonded & Insured",
      badge: "ROC #321353",
      accent: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-100 text-emerald-700",
      description:
        "Your peace of mind is our priority. We are fully compliant with Arizona state regulations (ROC #321353) and carry comprehensive liability and worker compensation insurance on every project.",
      highlights: ["Arizona ROC #321353", "Comprehensive Insurance", "Bonded Protection"],
    },
    {
      id: "04",
      icon: UserCheck,
      title: "Background-Checked Technicians",
      badge: "Certified Pros",
      accent: "from-indigo-500/10 to-purple-500/10",
      iconBg: "bg-indigo-100 text-indigo-700",
      description:
        "We send only certified, background-checked professionals to your door. You can feel safe knowing exactly who is working in your home or business, fully badged, uniformed, and drug-tested.",
      highlights: ["Rigorous Background Checks", "Uniformed & Badged", "Drug-Tested Technicians"],
    },
    {
      id: "05",
      icon: ReceiptText,
      title: "Upfront, Transparent Pricing",
      badge: "Zero Surprises",
      accent: "from-rose-500/10 to-pink-500/10",
      iconBg: "bg-rose-100 text-rose-700",
      description:
        "No hidden fees. No surprises. We provide transparent pricing before any work begins so you can make informed decisions. We explain your options clearly so you remain in complete control.",
      highlights: ["Clear Invoices Ahead", "No Hidden Charges", "Flat-Rate Options"],
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50/70">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-4">
            <Sparkles className="h-3.5 w-3.5 text-cta" />
            <span>Why Choose Us?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
            The American Commercial Plumbing Difference
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            When you hire us, you aren't just getting a contractor; you are getting a dedicated
            partner who ensures the job is done safely, efficiently, and correctly the first time.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => {
            const Icon = r.icon;
            const isWide = i === 0 || i === 1;

            return (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group relative rounded-[2rem] bg-white border border-slate-200/80 p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isWide ? "lg:col-span-1.5" : ""
                }`}
              >
                {/* Accent top gradient stripe */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${r.accent} opacity-90`}
                />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl ${r.iconBg} flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform duration-300`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                      {r.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-navy tracking-tight leading-snug">
                    {r.title}
                  </h3>

                  <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {r.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100">
                  <div className="space-y-2">
                    {r.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
