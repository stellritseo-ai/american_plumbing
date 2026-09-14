import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Star,
} from "lucide-react";
import heroVideo from "@/assets/herovideo.mp4";

const trust = [
  {
    icon: ShieldCheck,
    title: "Licensed Contractor",
    subtitle: "ROC #321353 · Bonded",
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/15",
    borderColor: "border-blue-400/30",
  },
  {
    icon: Award,
    title: "25+ Years Experience",
    subtitle: "Serving Tucson Since 1999",
    iconColor: "text-cta",
    bgColor: "bg-cta/15",
    borderColor: "border-cta/30",
  },
  {
    icon: Clock,
    title: "24/7 Rapid Response",
    subtitle: "Emergency Dispatch",
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/15",
    borderColor: "border-emerald-400/30",
  },
  {
    icon: Star,
    title: "5-Star Service",
    subtitle: "1,000+ Verified Reviews",
    iconColor: "text-amber-400 fill-amber-400/25",
    bgColor: "bg-amber-400/15",
    borderColor: "border-amber-400/30",
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and fade-out scroll effects
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "140px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-dvh flex items-center text-white pt-[100px] sm:pt-[140px] lg:pt-0 pb-10 sm:pb-16 lg:pb-0 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2357]/85 via-[#0c2357]/60 to-[#123a8c]/35" />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-7xl z-10">
        {/* Heading, Subheading, CTAs, and Trust Badges */}
        <motion.div
          style={{
            y: contentY,
            opacity: contentOpacity,
            scale: contentScale,
          }}
          className="max-w-3xl lg:max-w-4xl flex flex-col justify-center text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex self-start items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90 mb-6 mt-[222px]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Emergency Dispatch Active
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[28px] sm:text-[40px] md:text-[50px] leading-[34px] sm:leading-[46px] md:leading-[57px] mt-0 lg:-mt-[9px] mb-0 lg:-mb-[15px] font-extrabold tracking-tight"
          >
            Tucson's Elite{" "}
            <span className="bg-gradient-to-r from-electric via-white to-cta bg-clip-text text-transparent">
              Commercial & Residential
            </span>{" "}
            Plumbing.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-white/80 leading-relaxed font-medium"
          >
            Licensed, bonded, and backed by 25+ years of local craftsmanship.
            We deliver upfront, transparent pricing and emergency support for
            commercial complexes and local homes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 sm:mt-7 flex flex-row flex-wrap items-center gap-3 sm:gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="/request-estimate"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cta px-5 py-3 sm:px-6 sm:py-3 text-xs font-extrabold uppercase tracking-wider text-cta-foreground shadow-cta hover:brightness-110 transition-all duration-300 text-center"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 shrink-0" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="tel:+15202212010"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 px-5 py-3 sm:px-6 sm:py-3 text-xs font-extrabold uppercase tracking-wider text-white transition-all duration-300 text-center"
            >
              <Phone className="h-3.5 w-3.5 text-electric shrink-0" />
              <span>Call (520) 221-2010</span>
            </motion.a>
          </motion.div>

          {/* ── ULTRA-PREMIUM PIXEL-PERFECT TRUST BADGES DOCK ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 sm:mt-11 pt-6 sm:pt-7 border-t border-white/10 max-w-4xl"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
              {trust.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.title}
                    className="group flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] backdrop-blur-md border border-white/10 hover:border-white/25 shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-default"
                  >
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl ${t.bgColor} border ${t.borderColor} flex items-center justify-center ${t.iconColor} group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-xs`}
                    >
                      <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${t.iconColor}`} />
                    </div>
                    <div className="flex flex-col min-w-0 text-left">
                      <span className="text-[10px] sm:text-[13px] font-black text-white tracking-wide leading-tight">
                        {t.title}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-medium text-slate-300 leading-tight mt-0.5 sm:mt-1 truncate">
                        {t.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
