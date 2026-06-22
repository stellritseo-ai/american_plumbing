import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

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
              href="tel:+15205550100"
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
              initial={{ opacity: 0, height: 0, scale: 0.95 }}
              animate={{ opacity: 1, height: "auto", scale: 1 }}
              exit={{ opacity: 0, height: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="lg:hidden mt-2 glass rounded-2xl p-4 overflow-hidden shadow-xl"
            >
              <nav className="grid gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-3 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors duration-200 text-foreground"
                  >
                    {l.label}
                  </a>
                ))}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="tel:+15205550100"
                    className="px-3 py-3 rounded-lg text-center text-sm font-semibold bg-secondary text-navy transition-colors duration-200"
                  >
                    Call 24/7
                  </a>
                  <a
                    href="#contact"
                    className="px-3 py-3 rounded-lg text-center text-sm font-semibold bg-cta text-cta-foreground transition-colors duration-200"
                  >
                    Estimate
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
