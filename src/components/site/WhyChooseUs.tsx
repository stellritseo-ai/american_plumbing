import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  DollarSign,
  Search,
  Award,
} from "lucide-react";
import logo from "@/assets/logo.png";

export function WhyChooseUs() {
  return (
    <section className="relative py-[60px] overflow-hidden bg-[#fafbfe] border-b border-slate-100">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

      {/* CSS Animation definitions */}
      <style>{`
        @keyframes radarSweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes radarPulse {
          0% { transform: scale(0.8); opacity: 0.9; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes laserScan {
          0%, 100% { transform: translateY(12px); opacity: 0.8; }
          50% { transform: translateY(62px); opacity: 0.8; }
        }
        @keyframes laserGlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
        @keyframes orbitCW {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitCCW {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes floatReceipt {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(0.5deg); }
        }
        .anim-radar-sweep {
          animation: radarSweep 4s infinite linear;
          transform-origin: 50px 50px;
        }
        .anim-radar-pulse {
          animation: radarPulse 2s infinite cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: 75px 40px;
        }
        .anim-float-badge {
          animation: floatBadge 4s infinite ease-in-out;
        }
        .anim-laser-scan {
          animation: laserScan 2.4s infinite ease-in-out;
        }
        .anim-laser-glow {
          animation: laserGlow 2.4s infinite ease-in-out;
        }
        .anim-orbit-cw {
          animation: orbitCW 20s infinite linear;
          transform-origin: 50px 50px;
        }
        .anim-orbit-ccw {
          animation: orbitCCW 15s infinite linear;
          transform-origin: 50px 50px;
        }
        .anim-float-receipt {
          animation: floatReceipt 3.5s infinite ease-in-out;
        }
      `}</style>

      <div className="relative mx-auto w-[90%] max-w-7xl z-10">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-navy tracking-tight mb-4 text-balance">
            The Difference is in the <span className="text-gradient-brand">Details.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed">
            We combine state-of-the-art tools with decades of local plumbing expertise to offer a truly premium service experience.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 1. Stat Card: 25+ Years Heritage (Amber/Gold Tint) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-amber-100/70 bg-gradient-to-br from-[#fffdf5] via-white to-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center min-h-[260px]"
          >
            {/* Background Glow */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-gradient-to-br from-amber-200/10 to-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Left Content */}
            <div className="flex-1 pr-0 sm:pr-8 z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-white border border-slate-100 p-1.5 shadow-sm overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                  <img src={logo} alt="American Commercial Plumbing" className="h-full w-full object-contain" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Local Heritage</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-navy tracking-tight mb-3">
                25+ Years Serving Tucson
              </h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-md">
                Locally owned and deeply rooted in Southern Arizona, American Commercial Plumbing delivers exceptional system design and residential maintenance with unmatched local pride.
              </p>
            </div>

            {/* Right Graphic */}
            <div className="relative w-full sm:w-[240px] h-[160px] flex items-center justify-center shrink-0 mt-6 sm:mt-0 select-none">
              {/* Premium Logo Frame */}
              <div className="absolute left-0 bottom-2 bg-white/80 backdrop-blur border border-slate-200/50 rounded-2xl p-3 shadow-md w-28 h-28 flex items-center justify-center -rotate-6 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 z-0">
                <img src={logo} alt="American Commercial Plumbing Logo" className="h-16 w-16 object-contain" />
              </div>

              {/* Gold Badge overlapping */}
              <div className="absolute right-4 top-2 z-10 anim-float-badge">
                <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
                  <defs>
                    <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                    <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#f59e0b" floodOpacity="0.2" />
                    </filter>
                  </defs>
                  {/* Outer Ring */}
                  <circle cx="60" cy="60" r="54" stroke="url(#badgeGold)" strokeWidth="1" opacity="0.3" strokeDasharray="3 3" />
                  {/* Main Badge Plate */}
                  <circle cx="60" cy="60" r="46" fill="url(#badgeGold)" filter="url(#badgeShadow)" />
                  {/* Inner Ring border */}
                  <circle cx="60" cy="60" r="41" fill="none" stroke="#ffffff" strokeWidth="0.8" opacity="0.4" />
                  {/* Stars */}
                  <path d="M 60 25 L 61.5 31.5 L 66 31.5 L 62.5 34 L 63.5 38.5 L 60 36 L 56.5 38.5 L 57.5 34 L 54 31.5 L 58.5 31.5 Z" fill="#ffffff" />
                  {/* Text 25+ */}
                  <text x="60" y="70" textAnchor="middle" fill="#ffffff" fontWeight="900" fontSize="26" fontFamily="sans-serif">25+</text>
                  <text x="60" y="82" textAnchor="middle" fill="#ffffff" fontWeight="800" fontSize="8" letterSpacing="0.8" fontFamily="sans-serif" opacity="0.9">YEARS</text>
                </svg>
              </div>

              {/* Ripple Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[120px] h-[120px] rounded-full border border-primary/20 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                <div className="absolute w-[140px] h-[140px] rounded-full border border-cyan-500/10 scale-75 group-hover:scale-110 opacity-0 group-hover:opacity-75 transition-all duration-1000" />
              </div>
            </div>
          </motion.div>

          {/* 2. Dispatch Card: 24/7 Response (Dark Midnight Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative group overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0c1324] to-[#040814] p-8 shadow-sm hover:shadow-[0_20px_40px_-6px_rgba(37,99,235,0.25)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[260px]"
          >
            {/* Visual Header */}
            <div className="relative h-[90px] w-full flex items-center justify-between mb-4 select-none">
              {/* Radar Graphic */}
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                {/* Radar Grid */}
                <circle cx="50" cy="50" r="45" stroke="#1e293b" strokeWidth="1" opacity="0.4" />
                <circle cx="50" cy="50" r="30" stroke="#1e293b" strokeWidth="1" opacity="0.4" />
                <circle cx="50" cy="50" r="15" stroke="#1e293b" strokeWidth="1" opacity="0.4" />
                <line x1="5" y1="50" x2="95" y2="50" stroke="#1e293b" strokeWidth="1" opacity="0.3" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="#1e293b" strokeWidth="1" opacity="0.3" />
                {/* Sweeper Arm */}
                <path d="M 50 50 L 88.5 27.5 A 45 45 0 0 0 50 5 Z" fill="url(#radarGradient)" className="anim-radar-sweep" />
                <defs>
                  <linearGradient id="radarGradient" x1="50" y1="50" x2="60" y2="10" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                {/* Center Core */}
                <circle cx="50" cy="50" r="3" fill="#3b82f6" />
              </svg>

              {/* Pulsing Beacon Status */}
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 rounded-full px-3 py-1 text-[10px] font-bold text-emerald-400 tracking-wider mr-4 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                LIVE DISPATCH
              </div>
            </div>

            {/* Content Details */}
            <div className="z-10 mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4.5 w-4.5 text-blue-400" />
                <h4 className="font-display font-bold text-lg text-white tracking-tight">24/7 Rapid Response</h4>
              </div>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Emergency dispatch standing by 24 hours a day, 7 days a week, 365 days a year. We arrive on-site fast when you need us most.
              </p>
            </div>
          </motion.div>

          {/* 3. Pricing Card: Upfront Estimates (Emerald Green Tint) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group overflow-hidden rounded-3xl border border-emerald-100/80 bg-gradient-to-br from-[#f0fdf4] via-white to-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[260px]"
          >
            {/* Visual Graphic */}
            <div className="relative h-[90px] w-full flex items-center justify-center mb-4 select-none">
              {/* Receipt mockup */}
              <div className="anim-float-receipt bg-white w-[130px] h-[80px] rounded-xl border border-slate-100 shadow-md p-3.5 flex flex-col justify-between">
                <div className="flex justify-between border-b border-dashed border-slate-100 pb-1.5">
                  <span className="text-[9px] font-black text-slate-400 tracking-wider">ESTIMATE #705</span>
                  <span className="text-[9px] font-bold text-[#10b981] bg-[#ecfdf5] px-1.5 rounded">GUARANTEED</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-[10px] font-bold text-navy">Itemized Quote</span>
                  <span className="text-xs font-black text-primary">$0.00 HIDDEN</span>
                </div>
                <div className="flex gap-1.5 items-center mt-1">
                  <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full origin-left duration-1000" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Details */}
            <div className="z-10 mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="h-4.5 w-4.5 text-emerald-500" />
                <h4 className="font-display font-bold text-lg text-navy tracking-tight">100% Upfront Quotes</h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Clear, transparent invoices and competitive quotes. What we estimate is what you pay—absolutely zero surprise fees.
              </p>
            </div>
          </motion.div>

          {/* 4. Protection Card: Licensed & Insured (Sky Blue Tint) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative group overflow-hidden rounded-3xl border border-sky-100/80 bg-gradient-to-br from-[#f0f9ff] via-white to-white p-8 shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[260px]"
          >
            {/* Visual Graphic */}
            <div className="relative h-[90px] w-full flex items-center justify-center mb-4 select-none">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" className="relative">
                {/* Orbit Rings */}
                <circle cx="50" cy="50" r="32" stroke="#bae6fd" strokeWidth="1" strokeDasharray="3 3" className="anim-orbit-cw" />
                <circle cx="50" cy="50" r="24" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="2 2" className="anim-orbit-ccw" />
                
                {/* Shield Path */}
                <path d="M 50 25 C 50 25, 62 28, 62 38 C 62 48, 50 56, 50 65 C 50 56, 38 48, 38 38 C 38 28, 50 25, 50 25 Z" fill="url(#shieldGrad)" />
                <path d="M 50 25 C 50 25, 62 28, 62 38 C 62 48, 50 56, 50 65" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6" />
                {/* Glow Core */}
                <circle cx="50" cy="42" r="6" fill="#3b82f6" opacity="0.1" />
                {/* Checkmark inside Shield */}
                <path d="M 45 42 L 49 46 L 56 38" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                
                <defs>
                  <linearGradient id="shieldGrad" x1="50" y1="25" x2="50" y2="65" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content Details */}
            <div className="z-10 mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4.5 w-4.5 text-sky-500" />
                <h4 className="font-display font-bold text-lg text-navy tracking-tight">Fully Licensed & Insured</h4>
              </div>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                Enjoy ultimate peace of mind. Our local team is fully bonded, licensed, and insured, meeting all Arizona contractor standards.
              </p>
            </div>
          </motion.div>

          {/* 5. Tech Card: Advanced Diagnostics (Cyberpunk Slate Black) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative group overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-[#0f172a] to-[#020617] p-8 shadow-sm hover:shadow-[0_20px_40px_-6px_rgba(6,182,212,0.25)] transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[260px]"
          >
            {/* Visual Graphic */}
            <div className="relative h-[90px] w-full flex items-center justify-center mb-4 select-none">
              {/* Diagnostic scan display */}
              <div className="relative w-[140px] h-[75px] bg-[#020617] border border-slate-800 rounded-xl overflow-hidden shadow-inner p-2.5">
                {/* Horizontal grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100%_8px]" />
                {/* Pipe Blueprint inside scanner */}
                <svg width="100%" height="100%" viewBox="0 0 120 55" fill="none">
                  {/* Pipes */}
                  <path d="M 10 27 L 70 27 Q 80 27, 80 37 L 80 50" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
                  <path d="M 10 27 L 70 27 Q 80 27, 80 37 L 80 50" stroke="#0ea5e9" strokeWidth="1.5" className="anim-laser-glow" strokeLinecap="round" />
                  {/* Target Crosshair */}
                  <circle cx="75" cy="40" r="10" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="75" cy="40" r="14" stroke="#f43f5e" strokeWidth="0.5" opacity="0.5" />
                  {/* Ping effect */}
                  <circle cx="75" cy="40" r="6" fill="#f43f5e" className="anim-radar-pulse" />
                </svg>
                {/* Laser scan line */}
                <div className="absolute left-0 right-0 h-[1.5px] bg-cyan-400 shadow-[0_0_8px_#22d3ee] opacity-80 anim-laser-scan" />
              </div>
            </div>

            {/* Content Details */}
            <div className="z-10 mt-auto">
              <div className="flex items-center gap-2 mb-2">
                <Search className="h-4.5 w-4.5 text-cyan-400" />
                <h4 className="font-display font-bold text-lg text-white tracking-tight">Precision Diagnostics</h4>
              </div>
              <p className="text-xs text-slate-400 font-semibold leading-relaxed">
                Thermal imaging diagnostics, fiber-optic camera line scopes, and high-pressure jetting to trace, isolate, and solve issues rapidly.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
