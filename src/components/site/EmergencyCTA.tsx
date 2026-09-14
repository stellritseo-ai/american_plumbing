import { motion } from "framer-motion";
import { Phone, Clock, Zap, ShieldCheck, CheckCircle2 } from "lucide-react";
import heroVideo from "@/assets/herovideo.mp4";

export function EmergencyCTA() {
  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-[50px] text-white bg-navy border-y border-white/5">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden translate-z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover [will-change:transform] translate-z-0"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Modern dark gradient overlay for visual depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/65 to-[#0c2357]/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-navy/35" />
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-cta/15 border border-cta/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
              </span>
              Emergency Dispatch Active
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold capitalize tracking-tight leading-tight text-balance"
            >
              Need immediate plumbing assistance?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/80 max-w-xl leading-relaxed font-medium"
            >
              Burst pipe? Flooding? Main sewer line backup? Don't wait and let
              water damage spread. Our certified plumbers are on call 24/7 with
              fully equipped response trucks.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-md pt-2"
            >
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/15 text-electric shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  24/7 Emergency Response
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/15 text-electric shrink-0">
                  <Zap className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  30 Min Average Arrival
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/15 text-electric shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  Licensed & Insured Pros
                </span>
              </li>
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/15 text-electric shrink-0">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm font-medium">
                  100% Satisfaction Guarantee
                </span>
              </li>
            </motion.ul>
          </div>

          {/* Right Action Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4"
          >
            <div className="relative group w-full max-w-sm">
              {/* Outer pulsing ring background effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cta to-electric rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>

              <a
                href="tel:+15202212010"
                className="relative flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-cta to-[#d62828] p-4 sm:p-6 font-semibold text-white shadow-2xl hover:brightness-110 transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-4">
                  <span className="relative grid place-items-center h-12 w-12 rounded-full bg-white/10 ring-4 ring-white/5 pulse-ring shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/80 font-bold">
                      Emergency Hotline
                    </span>
                    <span className="block text-xl sm:text-2xl font-display font-black leading-tight tracking-tight mt-0.5">
                      (520) 221-2010
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Micro-trust glass badge */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white/70 w-full max-w-sm justify-center lg:justify-start">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Plumbers are active & ready to dispatch in Tucson</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
