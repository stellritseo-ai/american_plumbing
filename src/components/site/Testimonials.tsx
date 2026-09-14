import { motion } from "framer-motion";
import { Star, ArrowRight, ShieldCheck, Quote } from "lucide-react";

const reviews = [
  {
    name: "Maria Gonzalez",
    role: "Homeowner · Tucson",
    initials: "MG",
    rating: 5,
    text: "Showed up within 45 minutes for a burst pipe on a Sunday. Clean, professional, fair price. They saved my floors.",
    date: "1 week ago",
  },
  {
    name: "David Chen",
    role: "Property Manager · Oro Valley",
    initials: "DC",
    rating: 5,
    text: "We manage 14 properties and ACP is the only team we trust. Communication is flawless and the workmanship is top-tier.",
    date: "2 weeks ago",
  },
  {
    name: "Rebecca Hall",
    role: "Restaurant Owner · Marana",
    initials: "RH",
    rating: 5,
    text: "Full commercial kitchen plumbing buildout — on time and on budget. The crew was respectful and meticulous.",
    date: "3 weeks ago",
  },
  {
    name: "James Whitaker",
    role: "Homeowner · Vail",
    initials: "JW",
    rating: 5,
    text: "Diagnosed a slab leak the other companies missed. Honest estimate and they fixed it the next morning. Highly recommend.",
    date: "1 month ago",
  },
];

export function Testimonials() {
  const slideItems = [...reviews, ...reviews];

  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-14 lg:py-[60px] bg-[#fafbfe] border-b border-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.2fr] items-center">
          {/* Left Column: Rating & Trust card */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-sm mx-auto lg:mx-0 w-full z-10">
            <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Client Feedback
            </span>
            <h2 className="text-[29px] font-bold text-navy leading-tight mb-6 tracking-tight">
              Loved by Tucson Homeowners & Businesses.
            </h2>

            {/* Google trust card */}
            <motion.a
              href="/testimonials"
              whileHover={{ scale: 1.02 }}
              className="w-full mb-6 rounded-2xl bg-white border border-slate-100 py-3 px-4 shadow-sm flex flex-col items-center lg:items-start select-none group cursor-pointer hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-base tracking-tight bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent group-hover:underline">
                  Google Reviews
                </span>
                <ShieldCheck className="h-4 w-4 text-emerald-500 fill-emerald-100" />
              </div>
              <div className="flex items-center gap-2.5 mt-2">
                <span className="text-3xl font-display font-bold text-navy leading-none">
                  4.9
                </span>
                <div className="flex flex-col items-start">
                  <div className="flex text-amber-500">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">
                    180+ verified reviews · View All →
                  </span>
                </div>
              </div>
            </motion.a>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 w-full justify-center lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="/request-estimate"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-blue-600 text-xs font-bold uppercase tracking-wider text-white rounded-xl px-6 py-3.5 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Book Service Now</span>
                <ArrowRight className="h-4 w-4 text-white ml-2" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="/testimonials"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-navy rounded-xl px-5 py-3.5 transition-all duration-300 shadow-xs cursor-pointer"
              >
                <span>All Reviews</span>
              </motion.a>
            </div>
          </div>

          {/* Right Column: Infinite Marquee */}
          <div className="relative min-w-0 w-full overflow-hidden select-none">
            {/* Soft fade gradients matching section background */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#fafbfe] to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#fafbfe] to-transparent z-10 pointer-events-none" />

            <div className="w-full overflow-hidden">
              <div className="flex gap-6 w-fit animate-marquee-reviews">
                {slideItems.map((r, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03, y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative shrink-0 w-[300px] md:w-[350px] bg-white rounded-3xl p-6 border border-slate-100 shadow-sm flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                  >
                    {/* Background Quote Mark */}
                    <Quote className="absolute right-6 bottom-4 w-12 h-12 text-slate-100 opacity-30 pointer-events-none" />

                    <div className="relative z-10">
                      {/* User Info */}
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-display font-bold text-xs shrink-0 shadow-sm">
                          {r.initials}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-bold text-navy text-sm leading-tight truncate uppercase tracking-wider">
                            {r.name}
                          </span>
                          <span className="text-[10px] text-slate-400 font-bold leading-tight mt-1 truncate">
                            {r.role} · {r.date}
                          </span>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-0.5 mb-4 text-amber-500">
                        {Array.from({ length: r.rating }).map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold italic">
                        "{r.text}"
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-reviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-reviews {
          animation: marquee-reviews 32s linear infinite;
        }
        .animate-marquee-reviews:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
