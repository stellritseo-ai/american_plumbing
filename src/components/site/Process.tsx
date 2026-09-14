import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule Service",
    desc: "Book online in 60 seconds or call our 24/7 dispatcher.",
  },
  {
    icon: Search,
    title: "Inspection & Diagnosis",
    desc: "Detailed inspection scoping using digital detection tools.",
  },
  {
    icon: FileText,
    title: "Transparent Estimate",
    desc: "Get upfront, itemized quotes. What we quote is what you pay.",
  },
  {
    icon: Wrench,
    title: "Professional Repair",
    desc: "Certified plumbers execute clean, code-compliant operations.",
  },
  {
    icon: BadgeCheck,
    title: "Final Quality Check",
    desc: "System pressure tests, debris cleanup, and warranty active.",
  },
];

const desktopPositions = [
  { left: "20%", top: "50px" }, // Step 1 (x=240, y=50)
  { left: "50%", top: "50px" },    // Step 2 (x=600, y=50)
  { left: "80%", top: "50px" },    // Step 3 (x=960, y=50)
  { left: "20%", top: "310px" }, // Step 4 (x=240, y=310)
  { left: "50%", top: "310px" },    // Step 5 (x=600, y=310)
];

export function Process() {
  return (
    <section className="relative py-12 sm:py-14 lg:py-[60px] overflow-hidden bg-white border-y border-slate-100">
      {/* CSS Animation for dripping water drop */}
      <style>{`
        @keyframes drip {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          20% { transform: translateY(0) scale(1); opacity: 1; }
          80% { transform: translateY(50px) scale(0.8); opacity: 0; }
          100% { transform: translateY(50px) scale(0.8); opacity: 0; }
        }
        @keyframes waterFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -12; }
        }
        @keyframes pipeFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 45; }
        }
        @keyframes verticalWaterFlow {
          0% { background-position: 0 0; }
          100% { background-position: 0 -40px; }
        }
        .dripping-drop {
          animation: drip 2.4s infinite cubic-bezier(0.4, 0, 1, 1);
          transform-origin: 45px 80px;
        }
        .water-flow {
          stroke-dasharray: 4 4;
          animation: waterFlow 0.3s infinite linear;
        }
        .pipe-flow {
          stroke-dasharray: 15 30;
          animation: pipeFlow 2s infinite linear;
        }
        .mobile-pipe-flow {
          background: linear-gradient(
            to bottom,
            #3b82f6 0%,
            #3b82f6 30%,
            #93c5fd 50%,
            #3b82f6 70%,
            #3b82f6 100%
          );
          background-size: 100% 40px;
          animation: verticalWaterFlow 1.5s infinite linear;
        }
      `}</style>



      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-16">
          <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            Step by step process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-navy tracking-tight text-balance">
            We Complete Every{" "}
            <span className="text-gradient-brand">Step Carefully.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium leading-relaxed mb-6 sm:mb-8 lg:mb-[-45px]">
            Our step-by-step methodology guarantees precision, transparency, and clean, code-compliant results from scheduling to final quality check.
          </p>
        </div>

        {/* 1. Desktop S-Curve Connected Layout (Large Screens) */}
        <div className="hidden lg:block relative w-full h-[480px] select-none">
          {/* Curved S-Path Connection Line */}
          <svg
            viewBox="0 0 1200 360"
            className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* SVG Gradients for 3D metallic pipe appearance */}
            <defs>
              <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1d4ed8" />
                <stop offset="40%" stopColor="#60a5fa" />
                <stop offset="60%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="tankGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0284c7" />
                <stop offset="30%" stopColor="#38bdf8" />
                <stop offset="60%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
            </defs>

            {/* A. 3D Volumetric Pipe Layering */}
            {/* 1. Drop Shadow */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#0f172a"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.07"
            />
            {/* 2. Outer Pipe Case */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#1e3a8a"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* 3. Volumetric Blue Core */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#3b82f6"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            {/* 3.5. Animated Water Flow Pulse */}
            <path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#93c5fd"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.6"
              className="pipe-flow"
            />
            {/* 4. Glossy Center Light Highlight Reflection */}
            <motion.path
              d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
              stroke="#ffffff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />

            {/* B. Detailed Water Tap / Faucet at Pipe Entry (x=80, y=50) */}
            <g>
              {/* Valve handle crossbar stem */}
              <rect x="85" y="24" width="8" height="10" rx="1" fill="#1e3a8a" />
              <rect x="87" y="24" width="4" height="10" fill="#60a5fa" opacity="0.6" />

              {/* Handle crossbar */}
              <rect x="72" y="16" width="34" height="8" rx="2" fill="#0284c7" />
              <rect x="72" y="17" width="34" height="2" fill="#38bdf8" />
              <circle cx="89" cy="20" r="2.5" fill="#ffffff" />

              {/* Main Faucet Body Cylinder */}
              <path d="M 60 50 L 114 50" stroke="#3b82f6" strokeWidth="22" strokeLinecap="round" />
              <path d="M 60 46 L 114 46" stroke="#60a5fa" strokeWidth="3" strokeLinecap="round" opacity="0.75" />
              <path d="M 60 54 L 114 54" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" opacity="0.4" />

              {/* Connection collar / Flange flange */}
              <rect x="110" y="34" width="8" height="32" rx="1" fill="#1e3a8a" />
              <rect x="112" y="34" width="2" height="32" fill="#60a5fa" opacity="0.5" />

              {/* Curved Faucet Spout pointing down */}
              <path d="M 68 50 C 45 50, 45 58, 45 74" fill="none" stroke="#3b82f6" strokeWidth="22" strokeLinecap="round" />
              <path d="M 68 46 C 49 46, 49 53, 49 74" fill="none" stroke="#60a5fa" strokeWidth="3" opacity="0.75" />
              <path d="M 68 54 C 41 54, 41 62, 41 74" fill="none" stroke="#1d4ed8" strokeWidth="3" opacity="0.4" />

              {/* Animated Dripping Drop (teardrop path) */}
              <g className="dripping-drop">
                <path
                  d="M 45 78 C 45 78 41 84 41 88 C 41 90.2 42.8 92 45 92 C 47.2 92 49 90.2 49 88 C 49 84 45 78 45 78 Z"
                  fill="#2563eb"
                />
              </g>
            </g>

            {/* C. Water Storage Tank at pipe end (translated horizontally by 240px) */}
            <g transform="translate(240, 0)">
              {/* Connection Flange Joining Pipe to Tank */}
              <rect x="676" y="294" width="6" height="32" rx="1" fill="#1e3a8a" />
              <rect x="678" y="294" width="2" height="32" fill="#60a5fa" opacity="0.5" />

              {/* Sloped-shoulder Tank Body */}
              <path
                d="M 700 246 L 730 246 Q 736 246, 738 250 L 746 260 Q 750 265, 750 270 L 750 332 Q 750 340, 742 340 L 688 340 Q 680 340, 680 332 L 680 270 Q 680 265, 684 260 L 692 250 Q 694 246, 700 246 Z"
                fill="url(#tankGrad)"
              />

              {/* Black Cap & Neck */}
              <rect x="702" y="240" width="26" height="6" fill="#1e293b" rx="1" />
              <rect x="698" y="234" width="34" height="6" fill="#0f172a" rx="1.5" />

              {/* Horizontal Rib Ridges (Glossy cylindrical surface overlays) */}
              <rect x="678" y="268" width="74" height="5" rx="2" fill="#38bdf8" opacity="0.4" />
              <rect x="678" y="284" width="74" height="5" rx="2" fill="#38bdf8" opacity="0.4" />
              <rect x="678" y="300" width="74" height="5" rx="2" fill="#38bdf8" opacity="0.4" />
              <rect x="678" y="316" width="74" height="5" rx="2" fill="#38bdf8" opacity="0.4" />
              <rect x="678" y="332" width="74" height="5" rx="2" fill="#38bdf8" opacity="0.4" />

              {/* Water Tank Tap/Faucet on the Right Side */}
              <rect x="750" y="312" width="12" height="6" fill="#cbd5e1" />
              <rect x="756" y="306" width="4" height="6" fill="#ef4444" />
              <path d="M 762 315 C 766 315, 766 318, 766 324" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" fill="none" />

              {/* Animated Running Water Stream */}
              <line x1="766" y1="322" x2="766" y2="352" stroke="#3b82f6" strokeWidth="3" className="water-flow" strokeLinecap="round" />

              {/* Splashing ripples at bottom of stream */}
              <ellipse cx="766" cy="352" rx="4" ry="1.5" fill="#60a5fa" opacity="0.8">
                <animate attributeName="rx" values="3;7;3" dur="1.2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0;0.8" dur="1.2s" repeatCount="indefinite" />
              </ellipse>
            </g>
          </svg>

          {/* D. Centered Step Nodes & Text Blocks */}
          {steps.map((s, i) => {
            const pos = desktopPositions[i];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle Badge (Centered on the line via absolute positioning) */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white shadow-[0_12px_36px_rgba(18,58,140,0.06)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(43,132,255,0.16)] group-hover:border-electric/30">
                  {/* Concentric outer ring on hover */}
                  <div className="absolute -inset-2.5 rounded-full border border-primary/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                  {/* Inner ring border on hover */}
                  <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-electric/45 transition-all duration-300" />

                  {/* Icon */}
                  <s.icon className="h-7 w-7 text-slate-500 group-hover:text-electric transition-colors duration-300" />
                </div>

                {/* Content Details (Positioned absolute below circle, preventing overlap) */}
                <div className="absolute top-[44px] -translate-x-1/2 text-center w-[210px] flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-electric transition-colors duration-300">
                    Step 0{i + 1}
                  </span>
                  <h3 className="font-display font-bold text-base text-navy leading-tight mt-1 mb-2 group-hover:text-electric transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold px-2">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 2. Responsive Mobile Connected layout (Small/Tablet Screens) */}
        <div className="relative grid gap-10 pl-16 sm:pl-20 lg:hidden">
          {/* Volumetric vertical pipe background */}
          <div className="absolute left-[23px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
            {/* Drop shadow */}
            <div className="absolute inset-0 bg-slate-900/10 rounded-full blur-[2px]" />
            {/* Pipe case */}
            <div className="absolute inset-0 bg-[#1e3a8a] rounded-full" />
            {/* Vibrant Core with flowing animation */}
            <div className="absolute inset-[2px] rounded-full mobile-pipe-flow" />
            {/* Glossy highlight */}
            <div className="absolute left-[2px] top-[2px] bottom-[2px] w-[1px] bg-white/75 rounded-full" />
          </div>

          {/* Small mobile faucet at top of line */}
          <div className="absolute left-[16px] -top-6 pointer-events-none z-10 w-[48px] h-[48px]">
            <svg viewBox="0 0 80 80" className="w-full h-full" fill="none">
              {/* Handle */}
              <rect x="36" y="6" width="20" height="5" rx="1" fill="#0284c7" />
              <rect x="44" y="11" width="4" height="6" fill="#1e3a8a" />
              {/* Body */}
              <rect
                x="24"
                y="17"
                width="36"
                height="12"
                rx="1"
                fill="#3b82f6"
              />
              {/* Spout */}
              <path
                d="M 28 23 C 14 23, 14 38, 14 38"
                stroke="#3b82f6"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col group text-left"
            >
              {/* Circle Node */}
              <div className="absolute -left-16 top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_15px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105">
                <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-primary/45 transition-colors duration-300" />
                <div className="absolute -inset-1.5 rounded-full border border-primary/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                <s.icon className="h-5 w-5 text-slate-500 group-hover:text-primary transition-colors duration-300" />
              </div>

              {/* Content text */}
              <div className="pl-2">
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-primary transition-colors duration-300">
                  Step 0{i + 1}
                </span>
                <h3 className="font-display font-bold text-base text-navy leading-tight mt-0.5 mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed font-semibold max-w-sm">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
