import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
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

      // Easing: easeOutQuad
      const easeProgress = progress * (2 - progress);

      const currentValue = Math.floor(easeProgress * (end - start) + start);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
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
    <section id="about" className="relative py-[60px] overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Overlapping Premium Collage */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 100, damping: 18 }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Team Image */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-neutral-200/10 shadow-glow cursor-pointer transition-[box-shadow] duration-300"
            >
              <img
                src={about}
                alt="American Commercial Plumbing team"
                loading="lazy"
                width={1200}
                height={1400}
                className="h-full w-full object-cover transition-transform duration-[1.2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
            </motion.div>

            {/* Secondary Layered Image */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
              whileHover={{ scale: 1.04 }}
              className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 aspect-square overflow-hidden rounded-[2rem] ring-8 ring-background shadow-soft hidden sm:block cursor-pointer transition-[box-shadow] duration-300"
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

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-6 -left-6 glass rounded-[1.5rem] px-6 py-5 border border-white/20 shadow-glow cursor-pointer"
            >
              <div className="text-3xl font-display font-black text-gradient-brand leading-none">
                25+
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-wider text-muted-foreground font-black">
                Years Operations
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 180, damping: 20 }}
            >
              <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight tracking-tight text-balance capitalize">
                Tucson's most{" "}
                <span className="text-gradient-brand">trusted</span> plumbing
                experts since 1999.
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed font-semibold max-w-2xl">
                American Commercial Plumbing LLC is a family-run enterprise led by owner Shawn Holton,
                built on a heritage of clean engineering, integrity, and client
                satisfaction. From commercial sewer operations to standard home
                kitchen leaks, we deliver flat-rate diagnostic answers.
              </p>
            </motion.div>

            {/* Checklist */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
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
                    delay: i * 0.05,
                  }}
                  className="flex items-center gap-3 text-foreground/90 font-semibold text-sm"
                >
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-emerald-100 text-emerald-600">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Block grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                    delay: i * 0.05,
                  }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`rounded-2xl border-t-4 border-x border-b border-white/20 bg-white/40 glass p-5 shadow-soft hover:shadow-glow cursor-pointer transition-[box-shadow] duration-300 ${s.accent}`}
                >
                  <div className="text-2xl font-display font-black text-navy leading-none">
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-[10px] text-muted-foreground font-black uppercase tracking-wider leading-snug">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10">
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="#services"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-primary to-electric hover:brightness-110 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-soft hover:shadow-glow transition-all duration-300 cursor-pointer"
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
