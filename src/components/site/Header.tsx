import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Phone,
  Clock,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Building2,
  Home,
  ShieldAlert,
  Flame,
  Video,
  Droplets,
  Search,
  Wrench,
  Sparkles,
  ArrowRight,
  Calendar,
  ShieldCheck,
} from "lucide-react";
import { useRouterState } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const containerVariants: Variants = {
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

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  exit: { opacity: 0, x: -5 },
};

const navVariants: Variants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 0.96)",
    borderColor: "rgba(226, 232, 240, 0.8)",
    boxShadow: "0 4px 20px -2px rgba(15, 23, 42, 0.04)",
  },
  scrolled: {
    backgroundColor: "rgba(255, 255, 255, 0.98)",
    borderColor: "rgba(203, 213, 225, 0.85)",
    boxShadow: "0 12px 35px -6px rgba(12, 35, 87, 0.12)",
  },
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });
  const isAbout = pathname === "/about";
  const isContact = pathname === "/contact";
  const isTestimonials = pathname === "/testimonials" || pathname === "/testimonial";
  const isCommercial =
    pathname === "/commercial-plumbing" || pathname.startsWith("/services/commercial-plumbing");
  const isResidential =
    pathname === "/residential-plumbing" || pathname.startsWith("/services/residential-plumbing");
  const isEmergency =
    pathname === "/emergency-repairs" ||
    pathname === "/emergency-plumbing" ||
    pathname.startsWith("/services/emergency-repairs") ||
    pathname.startsWith("/services/emergency-plumbing");
  const isWaterHeaters =
    pathname === "/water-heaters" ||
    pathname === "/water-heater-services" ||
    pathname.startsWith("/services/water-heaters") ||
    pathname.startsWith("/services/water-heater-services");
  const isSewer =
    pathname === "/sewer-line-inspection" ||
    pathname === "/sewer-inspection" ||
    pathname.startsWith("/services/sewer-line-inspection") ||
    pathname.startsWith("/services/sewer-inspection");
  const isDrain =
    pathname === "/drain-cleaning" ||
    pathname === "/drain-cleaning-jetting" ||
    pathname.startsWith("/services/drain-cleaning");
  const isLeak =
    pathname === "/leak-detection" ||
    pathname === "/leak-detection-repair" ||
    pathname.startsWith("/services/leak-detection");
  const isRepiping =
    pathname === "/repiping-gas-lines" ||
    pathname === "/repiping" ||
    pathname === "/gas-lines" ||
    pathname.startsWith("/services/repiping") ||
    pathname.startsWith("/services/gas-lines");
  const isProjects =
    pathname === "/projects" ||
    pathname === "/gallery" ||
    pathname === "/portfolio" ||
    pathname === "/our-work" ||
    pathname === "/project";
  const isEstimate =
    pathname === "/request-estimate" ||
    pathname === "/estimate" ||
    pathname === "/free-estimate";
  const isInnerPage =
    isAbout ||
    isContact ||
    isTestimonials ||
    isProjects ||
    isCommercial ||
    isResidential ||
    isEmergency ||
    isWaterHeaters ||
    isSewer ||
    isDrain ||
    isLeak ||
    isRepiping ||
    isEstimate;

  const servicesList = [
    {
      title: "Commercial Plumbing",
      desc: "Preventative maintenance, main lines & facility drainage built for business.",
      icon: Building2,
      tag: "Commercial",
      href: "/commercial-plumbing",
    },
    {
      title: "Residential Plumbing",
      desc: "Premium fixture repairs, clean water piping & full home diagnostics.",
      icon: Home,
      tag: "Residential",
      href: "/residential-plumbing",
    },
    {
      title: "Emergency Repairs (24/7)",
      desc: "Rapid response dispatch for burst pipes, slab leaks & midnight backups.",
      icon: ShieldAlert,
      tag: "24/7 Live",
      href: "/emergency-repairs",
    },
    {
      title: "Water Heater Services",
      desc: "Tankless & conventional tank repair, installation, and sediment flushes.",
      icon: Flame,
      tag: "Tank & Tankless",
      href: "/water-heaters",
    },
    {
      title: "Sewer Line Inspection",
      desc: "High-definition video scoping, trenchless repair & root clearing.",
      icon: Video,
      tag: "HD Camera",
      href: "/sewer-line-inspection",
    },
    {
      title: "Drain Cleaning & Jetting",
      desc: "Commercial-grade hydro jet scouring stripping grease and line blocks.",
      icon: Droplets,
      tag: "High-Pressure",
      href: "/drain-cleaning",
    },
    {
      title: "Leak Detection & Repair",
      desc: "Non-destructive acoustic & thermal tracking for hidden slab leaks.",
      icon: Search,
      tag: "Non-Invasive",
      href: "/leak-detection",
    },
    {
      title: "Repiping & Gas Lines",
      desc: "Complete copper/PEX repiping & licensed gas line safety installations.",
      icon: Wrench,
      tag: "Certified",
      href: "/repiping-gas-lines",
    },
  ];

  const links = isInnerPage
    ? [
      { label: "Home", href: "/#home" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/#services", hasDropdown: true },
      { label: "Projects", href: "/projects" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ]
    : [
      { label: "Home", href: "#home" },
      { label: "About", href: "/about" },
      { label: "Services", href: "#services", hasDropdown: true },
      { label: "Projects", href: "/projects" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact", href: "/contact" },
    ];

  const getInitialActive = () => {
    if (isProjects) return "/projects";
    if (isEstimate) return "/request-estimate";
    if (isRepiping) return "/repiping-gas-lines";
    if (isLeak) return "/leak-detection";
    if (isDrain) return "/drain-cleaning";
    if (isSewer) return "/sewer-line-inspection";
    if (isWaterHeaters) return "/water-heaters";
    if (isEmergency) return "/emergency-repairs";
    if (isResidential) return "/residential-plumbing";
    if (isCommercial) return "/commercial-plumbing";
    if (isTestimonials) return "/testimonials";
    if (isContact) return "/contact";
    if (isAbout) return "/about";
    return "#home";
  };

  const [active, setActive] = useState(getInitialActive());

  useEffect(() => {
    if (isProjects) setActive("/projects");
    else if (isEstimate) setActive("/request-estimate");
    else if (isRepiping) setActive("/repiping-gas-lines");
    else if (isLeak) setActive("/leak-detection");
    else if (isDrain) setActive("/drain-cleaning");
    else if (isSewer) setActive("/sewer-line-inspection");
    else if (isWaterHeaters) setActive("/water-heaters");
    else if (isEmergency) setActive("/emergency-repairs");
    else if (isResidential) setActive("/residential-plumbing");
    else if (isCommercial) setActive("/commercial-plumbing");
    else if (isTestimonials) setActive("/testimonials");
    else if (isContact) setActive("/contact");
    else if (isAbout) setActive("/about");
    else setActive("#home");
  }, [
    isAbout,
    isContact,
    isTestimonials,
    isProjects,
    isCommercial,
    isResidential,
    isEmergency,
    isWaterHeaters,
    isSewer,
    isDrain,
    isLeak,
    isRepiping,
    isEstimate,
  ]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── TOP ANNOUNCEMENT / EMERGENCY STRIP ── */}
      <div className="bg-gradient-to-r from-[#06142e] via-[#0b1e42] to-[#06142e] text-white text-[11px] sm:text-xs font-semibold tracking-wide border-b border-white/10 relative z-50 shadow-xs">
        <div className="mx-auto w-[92%] max-w-7xl py-2 flex flex-wrap items-center justify-between gap-2.5">
          {/* Left badge & credentials */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/15 text-red-400 text-[10px] font-black uppercase tracking-wider border border-red-500/30 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
              </span>
              24/7 Rapid Dispatch
            </span>
            <div className="hidden sm:flex items-center gap-2 text-slate-300 text-[11px] font-medium">
              <span className="w-1 h-1 rounded-full bg-slate-500" />
              <span className="flex items-center gap-1 text-slate-200 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-cta" />
                Licensed ROC #321353
              </span>
              <span className="hidden md:inline w-1 h-1 rounded-full bg-slate-500" />
              <span className="hidden md:inline text-slate-300">Tucson & Pima County</span>
            </div>
          </div>

          {/* Right contact / hours */}
          <div className="flex items-center gap-3 sm:gap-4 text-slate-200">
            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-medium text-slate-300">
              <Clock className="w-3.5 h-3.5 text-cta" />
              <span>Mon-Fri 7AM-6PM · 24/7 Emergency Line</span>
            </div>
            <a
              href="tel:+15202212010"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-black text-[11px] sm:text-xs tracking-wide transition-all duration-200 hover:border-cta/60 hover:text-cta group"
            >
              <Phone className="w-3 h-3 text-cta group-hover:rotate-12 transition-transform" />
              <span>(520) 221-2010</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN FLOATING HEADER ── */}
      <motion.header
        animate={scrolled ? "scrolled" : "top"}
        variants={navVariants}
        transition={{ duration: 0.25 }}
        className={`fixed inset-x-0 z-40 backdrop-blur-2xl border-b transition-all duration-300 ${scrolled ? "top-0" : "top-8 sm:top-9"
          }`}
      >
        <div className="mx-auto w-[92%] max-w-7xl">
          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${scrolled ? "h-18 sm:h-20" : "h-20 sm:h-22"
              }`}
          >
            {/* Brand Logo */}
            <a
              href="/"
              onClick={() => setActive("#home")}
              className="flex items-center group shrink-0 mt-[10px] lg:mt-0"
              aria-label="American Commercial Plumbing LLC - Home"
            >
              <img
                src={logo}
                alt="American Commercial Plumbing LLC"
                className="h-16 sm:h-14 md:h-15 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xs"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 lg:ml-auto lg:mr-2 xl:mr-3">
              {links.map((l) => {
                const isItemActive = isContact
                  ? l.href === "/contact"
                  : isAbout
                    ? l.href === "/about"
                    : isTestimonials
                      ? l.href === "/testimonials"
                      : isProjects
                        ? l.href === "/projects"
                        : (isCommercial ||
                          isResidential ||
                          isEmergency ||
                          isWaterHeaters ||
                          isSewer ||
                          isDrain ||
                          isLeak ||
                          isRepiping) &&
                          l.label === "Services"
                          ? true
                          : active === l.href;

                if (l.hasDropdown) {
                  return (
                    <div key={l.label} className="relative group/nav">
                      <motion.a
                        whileHover={{ y: -0.5 }}
                        href={l.href}
                        onClick={() => setActive(l.href)}
                        className={`relative px-4 py-2 text-[13px] font-extrabold uppercase tracking-wider rounded-xl transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${isItemActive
                            ? "text-primary bg-primary/10 shadow-xs"
                            : "text-navy hover:text-primary hover:bg-slate-100/70"
                          }`}
                      >
                        <span>{l.label}</span>
                        <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover/nav:text-primary group-hover/nav:rotate-180 transition-transform duration-300" />
                        {isItemActive && (
                          <motion.span
                            layoutId="nav-active"
                            className="absolute inset-x-3 -bottom-0.5 h-[2.5px] rounded-full bg-gradient-to-r from-cta to-amber-500 shadow-[0_2px_8px_rgba(255,102,0,0.5)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                      </motion.a>

                      {/* ── PREMIUM PIXEL-PERFECT DESKTOP SERVICES SUBMENU DROPDOWN ── */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50 opacity-0 invisible pointer-events-none group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:pointer-events-auto transition-all duration-300 transform group-hover/nav:translate-y-0 translate-y-2">
                        <div className="w-[780px] max-w-[calc(100vw-32px)] bg-white/98 backdrop-blur-2xl border border-slate-200/90 rounded-[28px] shadow-[0_25px_70px_-15px_rgba(12,35,87,0.22)] p-6 flex flex-col gap-4.5 relative overflow-hidden text-left">
                          {/* Background subtle glow blobs */}
                          <div className="absolute -top-16 -right-16 w-52 h-52 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                          <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-cta/10 rounded-full blur-3xl pointer-events-none" />

                          {/* Submenu Top Header Bar */}
                          <div className="flex justify-between items-center border-b border-slate-100 pb-3.5 relative z-10">
                            <div className="flex items-center gap-2.5">
                              <span className="p-1.5 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                <Sparkles className="w-4 h-4 text-cta" />
                              </span>
                              <div>
                                <span className="text-xs font-black text-navy uppercase tracking-wider block">
                                  Commercial & Residential Solutions
                                </span>
                                <span className="text-[10px] text-slate-400 font-medium">
                                  Licensed Pima County Plumbing Contractors · ROC #321353
                                </span>
                              </div>
                            </div>
                            <a
                              href={isInnerPage ? "/#services" : "#services"}
                              onClick={() => setActive("#services")}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary text-primary hover:text-white text-[11px] font-extrabold uppercase tracking-wider transition-all duration-200 group/link"
                            >
                              <span>Explore All Services</span>
                              <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                            </a>
                          </div>

                          {/* 2-Column Pixel-Perfect Service Cards Grid */}
                          <div className="grid grid-cols-2 gap-3 relative z-10">
                            {servicesList.map((srv) => {
                              const Icon = srv.icon;
                              return (
                                <a
                                  key={srv.title}
                                  href={srv.href}
                                  onClick={() => setActive("#services")}
                                  className="group/item flex items-start gap-3.5 rounded-2xl p-3.5 bg-slate-50/70 hover:bg-white border border-slate-200/70 hover:border-cta/40 hover:shadow-[0_8px_20px_-6px_rgba(12,35,87,0.12)] transition-all duration-200 text-left relative overflow-hidden"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover/item:from-primary group-hover/item:to-electric border border-primary/20 flex items-center justify-center text-primary group-hover/item:text-white transition-all duration-200 shrink-0 shadow-xs group-hover/item:scale-105 mt-0.5">
                                    <Icon className="h-5 w-5" />
                                  </div>
                                  <div className="flex flex-col text-left min-w-0 pr-1 flex-1">
                                    <div className="flex items-center justify-between gap-1">
                                      <span className="text-[13px] font-black text-navy group-hover/item:text-primary transition-colors leading-tight truncate">
                                        {srv.title}
                                      </span>
                                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 shrink-0">
                                        {srv.tag}
                                      </span>
                                    </div>
                                    <span className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1 line-clamp-2">
                                      {srv.desc}
                                    </span>
                                  </div>
                                </a>
                              );
                            })}
                          </div>

                          {/* Submenu Bottom Banner */}
                          <div className="pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 relative z-10">
                            <a
                              href="tel:+15202212010"
                              className="flex items-center gap-2.5 text-xs font-black text-navy hover:text-primary transition-colors"
                            >
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                              </span>
                              <span className="text-cta">Emergency Hotline:</span>
                              <span className="underline decoration-slate-300 underline-offset-2 font-bold">(520) 221-2010</span>
                            </a>

                            <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                              <ShieldCheck className="w-3.5 h-3.5 text-cta" />
                              <span>100% Upfront Pricing · Free Estimates</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <motion.a
                    whileHover={{ y: -0.5 }}
                    key={l.label}
                    href={l.href}
                    onClick={() => setActive(l.href)}
                    className={`relative px-4 py-2 text-[13px] font-extrabold uppercase tracking-wider rounded-xl transition-all duration-200 ${isItemActive
                        ? "text-primary bg-primary/10 shadow-xs"
                        : "text-navy hover:text-primary hover:bg-slate-100/70"
                      }`}
                  >
                    {l.label}
                    {isItemActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-[2.5px] rounded-full bg-gradient-to-r from-cta to-amber-500 shadow-[0_2px_8px_rgba(255,102,0,0.5)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </nav>

            {/* Desktop Right CTAs */}
            <div className="hidden md:flex items-center gap-3">
              {/* Call 24/7 Pill Button */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+15202212010"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 text-navy bg-slate-100/80 hover:bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm group"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <Phone className="h-3.5 w-3.5 text-primary group-hover:rotate-12 transition-transform" />
                <span>Call 24/7</span>
              </motion.a>

              {/* Request Estimate Luxury Gradient Button */}
              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href={isEstimate ? "#estimate-form-section" : "/request-estimate"}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cta via-[#ff731d] to-[#ff570a] text-white hover:brightness-105 active:scale-95 transition-all duration-300 shadow-[0_4px_16px_rgba(255,102,0,0.35)] hover:shadow-[0_8px_24px_rgba(255,102,0,0.5)] border border-white/20 overflow-hidden group"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>Request Estimate</span>
                {/* Subtle sheen highlight on hover */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 pointer-events-none" />
              </motion.a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid place-items-center h-11 w-11 rounded-2xl cursor-pointer transition-all duration-200 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 text-navy"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* ── MOBILE ACCORDION DRAWER ──────────────────────────────── */}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="lg:hidden mt-3 bg-white/98 backdrop-blur-2xl rounded-[28px] p-5 overflow-hidden shadow-[0_25px_60px_-15px_rgba(12,35,87,0.2)] border border-slate-200/80 z-50 max-h-[85vh] overflow-y-auto"
              >
                <motion.nav className="flex flex-col gap-1.5">
                  {links.map((l, i) => {
                    if (l.hasDropdown) {
                      return (
                        <div key="mobile-services" className="flex flex-col">
                          <motion.button
                            variants={itemVariants}
                            onClick={() => setMobileServicesOpen((v) => !v)}
                            className="flex items-center justify-between px-4 py-3.5 rounded-2xl hover:bg-slate-100/90 transition-colors duration-200 text-navy group cursor-pointer w-full text-left bg-slate-50/60 border border-slate-100"
                          >
                            <div className="flex items-center gap-3.5">
                              <span className="text-[10px] font-black text-primary/70 font-mono tracking-widest px-2 py-0.5 rounded-md bg-primary/10">
                                0{i + 1}
                              </span>
                              <span className="text-sm font-extrabold uppercase tracking-wider text-navy">
                                {l.label}
                              </span>
                            </div>
                            <ChevronDown
                              className={`h-4 w-4 text-slate-400 group-hover:text-primary transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : ""
                                }`}
                            />
                          </motion.button>

                          {/* Mobile Submenu Accordion */}
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.25 }}
                                className="ml-3 pl-3 border-l-2 border-primary/25 space-y-1.5 my-2 overflow-hidden"
                              >
                                {servicesList.map((srv) => {
                                  const Icon = srv.icon;
                                  return (
                                    <a
                                      key={srv.title}
                                      href={srv.href}
                                      onClick={() => {
                                        setActive("#services");
                                        setOpen(false);
                                      }}
                                      className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-xs font-bold text-navy hover:text-primary hover:bg-slate-100 transition-colors"
                                    >
                                      <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <Icon className="h-4 w-4" />
                                      </div>
                                      <span className="truncate flex-1">{srv.title}</span>
                                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
                                        {srv.tag}
                                      </span>
                                    </a>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <motion.a
                        variants={itemVariants}
                        key={l.label}
                        href={l.href}
                        onClick={() => {
                          setActive(l.href);
                          setOpen(false);
                        }}
                        className="flex items-center justify-between px-4 py-3.5 rounded-2xl hover:bg-slate-100/90 transition-colors duration-200 text-navy group bg-slate-50/40 border border-slate-100/80"
                      >
                        <div className="flex items-center gap-3.5">
                          <span className="text-[10px] font-black text-primary/70 font-mono tracking-widest px-2 py-0.5 rounded-md bg-primary/10">
                            0{i + 1}
                          </span>
                          <span className="text-sm font-extrabold uppercase tracking-wider text-navy">
                            {l.label}
                          </span>
                        </div>
                        <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      </motion.a>
                    );
                  })}

                  <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-slate-200/80"
                  >
                    <a
                      href="tel:+15202212010"
                      className="flex items-center justify-center gap-2 px-3 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-navy transition-colors duration-200 border border-slate-200 shadow-xs"
                    >
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <Phone className="h-3.5 w-3.5 text-primary" />
                      <span>Call 24/7</span>
                    </a>
                    <a
                      href={isEstimate ? "#estimate-form-section" : "/request-estimate"}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 px-3 py-3.5 rounded-2xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-cta to-[#ff570a] text-white hover:brightness-110 active:scale-95 transition-all duration-300 shadow-cta"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Free Estimate</span>
                    </a>
                  </motion.div>
                </motion.nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}
