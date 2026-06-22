import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  show: {
    opacity: 1,
    height: "auto",
    transition: {
      height: { type: "spring", stiffness: 260, damping: 26 },
      staggerChildren: 0.04,
      delayChildren: 0.02,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      height: { type: "spring", stiffness: 260, damping: 26 },
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, x: -5 },
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] duration-500 glass ring-soft border border-white/10 shadow-soft">
          <a href="#home" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="American Commercial Plumbing LLC Logo"
              className="h-14 sm:h-16 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <motion.a
                whileHover={{ y: -0.5 }}
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className="relative px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors duration-300 text-navy hover:text-primary"
              >
                {l.label}
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-cta"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2.5">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+15202212010"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 text-navy hover:bg-secondary"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <Phone className="h-3.5 w-3.5" />
              <span>Call 24/7</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-cta text-cta-foreground hover:brightness-110 active:scale-95 transition-all duration-300 shadow-cta"
            >
              Request Estimate
            </motion.a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center h-11 w-11 rounded-xl cursor-pointer transition-colors duration-300 bg-secondary text-navy"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="lg:hidden mt-3 bg-white/95 backdrop-blur-2xl rounded-[2rem] p-5 overflow-hidden shadow-[0_24px_50px_-12px_rgba(0,0,0,0.15)] border border-white/40 z-50"
            >
              <motion.nav className="flex flex-col gap-1">
                {links.map((l, i) => (
                  <motion.a
                    variants={itemVariants}
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-2xl hover:bg-slate-100/80 transition-colors duration-200 text-navy group"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-[10px] font-bold text-primary/60 font-mono tracking-widest">
                        0{i + 1}
                      </span>
                      <span className="text-sm font-extrabold uppercase tracking-widest text-navy">
                        {l.label}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  </motion.a>
                ))}

                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-2 gap-2.5 pt-4 mt-2 border-t border-slate-100"
                >
                  <a
                    href="tel:+15202212010"
                    className="flex items-center justify-center gap-2.5 px-3 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-navy transition-colors duration-200 border border-slate-200/50 shadow-sm"
                  >
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <Phone className="h-3.5 w-3.5 text-primary" />
                    <span>Call 24/7</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-2 px-3 py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider bg-cta text-white hover:brightness-110 active:scale-95 transition-all duration-300 shadow-cta"
                  >
                    <span>Estimate</span>
                  </a>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
