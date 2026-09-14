import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areasData = [
  { name: "Tucson", x: "55%", y: "50%", primary: true },
  { name: "Oro Valley", x: "62%", y: "30%" },
  { name: "Marana", x: "38%", y: "32%" },
  { name: "Vail", x: "72%", y: "62%" },
  { name: "Sahuarita", x: "46%", y: "72%" },
  { name: "Catalina", x: "65%", y: "22%" },
  { name: "Green Valley", x: "42%", y: "78%" },
  { name: "Drexel Heights", x: "47%", y: "56%" },
  { name: "Casas Adobes", x: "52%", y: "38%" },
];

export function ServiceArea() {
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section className="relative py-12 sm:py-14 lg:py-[60px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Chips (50% width) */}
          <div className="z-10">
            <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Service Area
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-navy leading-tight mb-5 tracking-tight">
              Proudly Serving <span className="text-gradient-brand">Tucson</span> & Surrounding Communities.
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-lg mb-8">
              We provide prompt, dependable plumbing solutions across Southern Arizona — typically within a 40-mile radius of our downtown Tucson dispatch hub.
            </p>
            
            {/* Premium Capsule Chips */}
            <div className="flex flex-wrap gap-2.5">
              {areasData.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <motion.div
                    key={a.name}
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    whileHover={{ scale: 1.03, y: -1 }}
                    className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider rounded-xl py-2 px-3.5 transition-all duration-300 shadow-sm cursor-pointer border ${
                      isActive
                        ? "bg-primary/10 border-primary/45 text-primary scale-[1.03] -translate-y-0.5 shadow-md shadow-primary/5"
                        : "text-slate-600 bg-slate-50 border-slate-100 hover:bg-primary/5 hover:border-primary/25 hover:text-primary"
                    }`}
                  >
                    <MapPin className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                      isActive ? "text-primary" : "text-primary/75"
                    }`} />
                    {a.name}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Sleek Dispatch Telemetry Map (50% width) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1324] to-[#040814] border border-slate-800 shadow-glow"
          >
            {/* Embedded Google Map Background */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.425192608353!2d-110.77042252427177!3d31.94935977402047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d68c796ee63f45%3A0x2dabef043be16021!2s226%20E%20Forrest%20Feezor%20St%2C%20Vail%2C%20AZ%2085641%2C%20USA!5e0!3m2!1sen!2snp!4v1782159191322!5m2!1sen!2snp"
              className="absolute inset-0 w-full h-full opacity-85 grayscale invert contrast-[1.2] brightness-[0.85] pointer-events-none"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />
            
            {/* Stylized map grid and contour boundary */}
            <svg
              viewBox="0 0 600 450"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <defs>
                <radialGradient id="mapGlow" cx="55%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                  <stop offset="60%" stopColor="#3b82f6" stopOpacity="0.05" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Coverage radial glow under Tucson */}
              <circle cx="330" cy="225" r="200" fill="url(#mapGlow)" />

              {/* Radar Sweep Line */}
              <line
                x1="330"
                y1="225"
                x2="330"
                y2="45"
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="1.5"
                className="radar-sweep-line"
              />

              {/* Styled coverage contour boundary */}
              <path
                d="M 120 280 C 150 160, 230 110, 350 140 S 530 200, 520 310 C 470 380, 350 400, 230 370 S 100 340, 120 280 Z"
                fill="rgba(59, 130, 246, 0.01)"
                stroke="#3b82f6"
                strokeWidth="2"
                className="animated-boundary"
                opacity="0.6"
              />

              {/* Grid coordinates overlay */}
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={i}
                  x1={60 + i * 90}
                  y1="0"
                  x2={60 + i * 90 - 30}
                  y2="450"
                  stroke="#1e293b"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line
                  key={`h${i}`}
                  x1="0"
                  y1={60 + i * 80}
                  x2="600"
                  y2={40 + i * 80}
                  stroke="#1e293b"
                  strokeWidth="1"
                  opacity="0.4"
                />
              ))}
            </svg>

            {/* Pins with glowing radar rings */}
            {areasData.map((pin) => (
              <Pin
                key={pin.name}
                x={pin.x}
                y={pin.y}
                label={pin.name}
                primary={pin.primary}
                active={hoveredArea === pin.name}
                onMouseEnter={() => setHoveredArea(pin.name)}
                onMouseLeave={() => setHoveredArea(null)}
              />
            ))}

            {/* Coverage badge */}
            <div className="absolute bottom-5 left-5 bg-slate-950/75 border border-slate-800/80 backdrop-blur-md text-white rounded-2xl px-4 py-3 select-none z-20">
              <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                Coverage Radius
              </div>
              <div className="font-display font-bold text-sm text-cyan-400 mt-0.5">
                ~40 Mile Tucson Hub
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes radar-sweep {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes boundary-dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        .radar-sweep-line {
          transform-origin: 330px 225px;
          animation: radar-sweep 10s linear infinite;
        }
        .animated-boundary {
          stroke-dasharray: 6 4;
          animation: boundary-dash 15s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5">
        {/* Glowing hotspot */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          {/* Pulsing ring */}
          <span className={`animate-ping absolute inline-flex h-6 w-6 rounded-full opacity-75 transition-all duration-300 ${
            active 
              ? "bg-primary scale-125" 
              : primary 
                ? "bg-cta" 
                : "bg-cyan-400"
          }`}></span>
          {/* Inner solid ring */}
          <span className={`relative inline-flex rounded-full h-4.5 w-4.5 items-center justify-center text-white shadow-md transition-all duration-300 ${
            active 
              ? "bg-primary scale-110 shadow-[0_0_12px_rgba(59,130,246,0.5)]" 
              : primary 
                ? "bg-cta" 
                : "bg-gradient-to-r from-primary to-cyan-500"
          }`}>
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
          </span>
        </div>
        
        {/* Label frame */}
        <span className={`px-2.5 py-0.5 rounded-lg backdrop-blur-sm border transition-all duration-300 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${
          primary || active ? "inline-block" : "hidden sm:inline-block"
        } ${
          active
            ? "bg-primary border-primary text-white scale-105 shadow-[0_4px_12px_rgba(59,130,246,0.3)]"
            : "bg-navy/85 border-slate-800/80 text-white group-hover:bg-primary group-hover:border-primary/50 group-hover:text-white"
        }`}>
          {label}
        </span>
      </div>
    </div>
  );
}
