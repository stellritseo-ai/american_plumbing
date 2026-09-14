import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, ShieldCheck, Star, Clock } from "lucide-react";
import about from "@/assets/wel-img.jpg";
import resi from "@/assets/service-residential.jpg";

const features = [
  "Family-owned & operated since 1999",
  "Upfront, transparent pricing estimates",
  "Background-checked, certified technicians",
  "Same-day emergency response available",
];

const stats = [
  { target: 1000, suffix: "+", label: "Projects Done", accent: "border-t-cta" },
  {
    target: 24,
    suffix: "/7",
    label: "Emergency Dispatch",
    accent: "border-t-electric",
  },
  {
    target: 98,
    suffix: "%",
    label: "Satisfaction Rate",
    accent: "border-t-emerald-400",
  },
  {
    target: 25,
    suffix: "+",
    label: "Years in Tucson",
    accent: "border-t-primary",
  },
];

const trustPills = [
  { icon: ShieldCheck, text: "Licensed ROC #321353", color: "text-primary" },
  { icon: Star, text: "4.9★ Google Rating", color: "text-amber-500" },
  { icon: Clock, text: "24/7 Emergency Line", color: "text-emerald-500" },
];

function Counter({
  target,
  duration = 1.8,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;
    const start = 0;
    const end = target;
    if (start === end) return;
    const totalMilliseconds = duration * 1000;
    const startTime = performance.now();
    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / totalMilliseconds, 1);
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * (end - start) + start);
      setCount(currentValue);
      if (progress < 1) requestAnimationFrame(updateCount);
    };
    requestAnimationFrame(updateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-[70px] overflow-hidden">
      {/* Subtle background blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-electric/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-20 items-center">

          {/* ── LEFT COLUMN: Image Collage ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer wrapper: top padding reserves space for the badge */}
            <div className="relative pt-7 sm:pt-8 pl-2 sm:pl-4">

              {/* Experience Badge — anchored top-left, always visible */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.35 }}
                whileHover={{ scale: 1.06 }}
                className="absolute top-0 left-0 z-20 glass rounded-2xl px-3.5 py-2.5 sm:px-5 sm:py-4 border border-white/20 shadow-glow cursor-pointer select-none"
              >
                <div className="text-xl sm:text-3xl font-display font-black text-gradient-brand leading-none">
                  25+
                </div>
                <div className="mt-0.5 text-[8px] sm:text-[9px] uppercase tracking-wider text-muted-foreground font-black whitespace-nowrap">
                  Years Operations
                </div>
              </motion.div>

              {/* Primary Image */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.015 }}
                className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-200/10 shadow-glow cursor-pointer transition-[box-shadow] duration-300"
              >
                <img
                  src={about}
                  alt="American Commercial Plumbing team"
                  loading="lazy"
                  width={1200}
                  height={1400}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/45 via-transparent to-transparent" />
              </motion.div>

              {/* Secondary Overlay Image — hidden on xs, visible sm+ */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                whileHover={{ scale: 1.04 }}
                className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 w-32 sm:w-48 lg:w-52 aspect-square overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] ring-4 sm:ring-8 ring-background shadow-soft hidden sm:block cursor-pointer transition-[box-shadow] duration-300 z-10"
              >
                <img
                  src={resi}
                  alt="Premium residential plumbing"
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
                />
              </motion.div>

              {/* Trust pills — mobile only, shown below image */}
              <div className="flex flex-wrap gap-2 mt-5 sm:hidden">
                {trustPills.map((p) => {
                  const Icon = p.icon;
                  return (
                    <span
                      key={p.text}
                      className="inline-flex items-center gap-1.5 bg-white border border-slate-100 rounded-full px-3 py-1.5 text-[10px] font-bold text-slate-600 shadow-xs"
                    >
                      <Icon className={`h-3 w-3 ${p.color} shrink-0`} />
                      {p.text}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Text Content ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
                Who We Are
              </span>
              <h2 className="text-[26px] sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance capitalize">
                Tucson's most{" "}
                <span className="text-gradient-brand">trusted</span> plumbing
                experts since 1999.
              </h2>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed font-semibold max-w-2xl">
                American Commercial Plumbing LLC is a family-run enterprise led by
                owner Shawn Holton, built on a heritage of clean engineering,
                integrity, and client satisfaction. From commercial sewer operations
                to standard home kitchen leaks, we deliver flat-rate diagnostic
                answers.
              </p>
            </motion.div>

            {/* Trust Pills — desktop only */}
            <div className="hidden sm:flex flex-wrap gap-2 mt-5 lg:mt-6">
              {trustPills.map((p) => {
                const Icon = p.icon;
                return (
                  <span
                    key={p.text}
                    className="inline-flex items-center gap-1.5 bg-white border border-slate-100 rounded-full px-3 py-1.5 text-[11px] font-bold text-slate-600 shadow-xs"
                  >
                    <Icon className={`h-3.5 w-3.5 ${p.color} shrink-0`} />
                    {p.text}
                  </span>
                );
              })}
            </div>

            {/* Checklist */}
            <ul className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5">
              {features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                    delay: i * 0.06,
                  }}
                  className="flex items-center gap-3 bg-white/60 border border-slate-100 rounded-xl px-3.5 py-2.5 text-foreground/90 font-semibold text-sm shadow-xs"
                >
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="leading-snug">{f}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Block */}
            <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: i * 0.06,
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`rounded-2xl border-t-4 border-x border-b border-white/20 bg-white/40 glass p-3 sm:p-4 lg:p-5 shadow-soft hover:shadow-glow cursor-pointer transition-[box-shadow] duration-300 ${s.accent}`}
                >
                  <div className="text-xl sm:text-2xl font-display font-black text-navy leading-none">
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-[9px] sm:text-[10px] text-muted-foreground font-black uppercase tracking-wider leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-7 sm:mt-10">
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="/about"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-electric hover:brightness-110 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer"
              >
                <span>Learn more about us</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-white shrink-0" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


