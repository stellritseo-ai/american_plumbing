import { motion } from "framer-motion";
import { ShieldCheck, Video, Clock, CheckCircle2, Phone, Zap } from "lucide-react";

export function CommitmentGuarantee() {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-slate-900 text-white">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-cta/15 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#0c2357] via-[#0e2c6e] to-[#071638] border border-white/15 p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          {/* Subtle water pipe flow line */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-[20px] border-white/5 pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Headline & Text */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-extrabold uppercase tracking-widest mb-5">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Our Commitment To You</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                100% Upfront & Honest Guarantee
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                We believe in doing things the right way. That is why we offer a{" "}
                <strong className="text-white font-bold">100% Upfront & Honest Guarantee</strong>. We
                combine state-of-the-art tools—like advanced leak detection and camera
                inspections—with decades of practical experience to offer you the best possible
                service experience.
              </p>

              <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Whether it’s a routine maintenance check or a{" "}
                <span className="text-electric font-bold">2:00 AM emergency</span>, our team is ready
                to serve you with professionalism and speed.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-electric/20 border border-electric/40 text-electric flex items-center justify-center shrink-0">
                    <Video className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider">
                      Advanced HD Camera Inspections
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Visual proof inside your pipes before any repairs begin.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-9 w-9 rounded-xl bg-cta/20 border border-cta/40 text-cta flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white uppercase tracking-wider">
                      2:00 AM Or 2:00 PM Readiness
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">
                      Prompt, courteous dispatch on nights, weekends, and holidays.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Golden Shield Seal Badge */}
            <div className="lg:col-span-4 flex flex-col items-center text-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl flex flex-col items-center max-w-sm w-full"
              >
                <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg mb-5 text-white">
                  <ShieldCheck className="h-10 w-10" />
                </div>

                <div className="text-2xl font-black text-white uppercase tracking-wider">
                  Upfront & Honest
                </div>
                <div className="text-xs uppercase tracking-widest text-emerald-300 font-extrabold mt-1">
                  Official ACP Guarantee
                </div>

                <ul className="mt-6 space-y-2 text-left w-full text-xs font-semibold text-slate-200">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Exact Quote Before Starting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>No Surprise Diagnostic Add-ons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Master Craftsmanship Guaranteed</span>
                  </li>
                </ul>

                <a
                  href="tel:+15202212010"
                  className="mt-6 w-full py-3 px-4 rounded-xl bg-cta hover:bg-cta/95 text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-cta"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call (520) 221-2010</span>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
