import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Star,
  ClipboardCheck,
  UserCheck,
  Truck,
} from "lucide-react";
import heroImg from "@/assets/hero-plumber.jpg";
import heroVideo from "@/assets/herovideo.mp4";

const trust = [
  { icon: ShieldCheck, label: "Licensed Contractor" },
  { icon: Award, label: "25+ Years Experience" },
  { icon: Clock, label: "24/7 Rapid Response" },
  { icon: Star, label: "5-Star Service" },
];

const dispatchSteps = [
  {
    icon: ClipboardCheck,
    title: "1. Request Logged",
    desc: "Emergency call or online quote logged in our Tucson triage queue.",
    badge: "Instant",
    color: "from-emerald-400 to-teal-500",
    glow: "rgba(16, 185, 129, 0.2)",
  },
  {
    icon: UserCheck,
    title: "2. Dispatch Match",
    desc: "System routes nearest certified plumber based on GPS location.",
    badge: "2-3 Mins",
    color: "from-electric to-[#1a73e8]",
    glow: "rgba(43, 132, 255, 0.2)",
  },
  {
    icon: Truck,
    title: "3. Crew Dispatched",
    desc: "Technician heads to your location with a fully stocked service truck.",
    badge: "< 60 Mins",
    color: "from-cta to-red-600",
    glow: "rgba(255, 47, 25, 0.2)",
  },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax and fade-out scroll effects
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "24%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0px", "140px"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-dvh flex items-center text-white pt-[250px] pb-20 overflow-hidden"
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
            poster={heroImg}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2357]/85 via-[#0c2357]/60 to-[#123a8c]/35" />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative mx-auto w-[90%] max-w-7xl z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and CTAs */}
          <motion.div
            style={{
              y: contentY,
              opacity: contentOpacity,
              scale: contentScale,
            }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex self-start items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white/90 mb-6"
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
              className="text-3xl sm:text-4xl lg:text-[50px] lg:leading-[71px] font-extrabold tracking-tight"
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
              className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed font-medium"
            >
              Licensed, bonded, and backed by 25+ years of local craftsmanship.
              We deliver upfront, transparent pricing and emergency support for
              commercial complexes and local homes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-row gap-3 sm:gap-4 w-full max-w-xl"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-3 py-3.5 sm:px-7 sm:py-4.5 text-[11px] sm:text-sm font-bold uppercase tracking-wider text-cta-foreground shadow-cta hover:brightness-110 transition-all duration-300 flex-1 text-center"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:translate-x-1 shrink-0" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="tel:+15202212010"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 px-3 py-3.5 sm:px-7 sm:py-4.5 text-[11px] sm:text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 flex-1 text-center"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-electric shrink-0" />
                <span className="hidden min-[370px]:inline">Call (520) 221-2010</span>
                <span className="inline min-[370px]:hidden">Call Now</span>
              </motion.a>
            </motion.div>

            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl border-t border-white/10 pt-8"
            >
              {trust.map((t) => (
                <li
                  key={t.label}
                  className="flex items-center gap-2 text-xs text-white/80 uppercase font-bold tracking-wide"
                >
                  <t.icon className="h-4 w-4 text-electric shrink-0" />
                  <span>{t.label}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Column: Interactive Dispatch Flow Timeline */}
          <div className="lg:col-span-5 relative flex flex-col justify-center min-h-[460px] w-full max-w-[420px] lg:ml-auto lg:mr-0 mx-auto py-8">
            <div className="relative liquid-glass rounded-[2.5rem] p-8 overflow-hidden">
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-black">
                  Live Dispatch Timeline
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-[9px] font-black uppercase tracking-wider border border-emerald-500/20">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live System
                </span>
              </div>

              {/* Vertical timeline connector */}
              <div className="absolute left-[44px] top-[108px] bottom-[64px] w-[2px] bg-white/10 pointer-events-none z-10">
                {/* Active progress height */}
                <motion.div
                  className="w-full bg-gradient-to-b from-emerald-400 via-electric to-cta rounded-full"
                  animate={{
                    height:
                      activeStep === 0
                        ? "0%"
                        : activeStep === 1
                          ? "50%"
                          : "100%",
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
              </div>

              <div className="space-y-6 relative z-10">
                {dispatchSteps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={step.title}
                      onClick={() => setActiveStep(idx)}
                      className={`flex gap-5 p-4 rounded-2xl cursor-pointer select-none transition-all duration-300 ${
                        isActive
                          ? "liquid-glass-active shadow-sm"
                          : "border border-transparent hover:bg-white/[0.02]"
                      }`}
                      animate={{
                        scale: isActive ? 1.02 : 1,
                        borderColor: isActive
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(0,0,0,0)",
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 20,
                      }}
                    >
                      {/* Node Bubble */}
                      <div className="relative shrink-0 z-10">
                        <div
                          className={`grid place-items-center h-12 w-12 rounded-2xl text-white transition-all duration-500 ${
                            isActive
                              ? `bg-gradient-to-br ${step.color} shadow-lg`
                              : "bg-white/5 text-white/40"
                          }`}
                          style={{
                            boxShadow: isActive
                              ? `0 8px 20px ${step.glow}`
                              : "none",
                          }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        {isActive && (
                          <span className="absolute inset-[-4px] rounded-2xl border border-white/20 animate-pulse pointer-events-none" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <h4
                            className={`text-sm font-display font-black tracking-wide uppercase transition-colors duration-300 ${
                              isActive ? "text-white" : "text-white/45"
                            }`}
                          >
                            {step.title}
                          </h4>
                          <span
                            className={`text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md ${
                              isActive
                                ? `bg-white/10 text-white`
                                : "bg-white/[0.02] text-white/30"
                            }`}
                          >
                            {step.badge}
                          </span>
                        </div>
                        <p
                          className={`mt-1.5 text-[11px] leading-relaxed font-semibold transition-colors duration-300 ${
                            isActive ? "text-white/80" : "text-white/35"
                          }`}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider removed to keep dark background cohesive */}
    </section>
  );
}
