import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export function StatsSection() {
  return (
    <section id="stats" className="relative py-12 sm:py-16 lg:py-[80px] overflow-hidden">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />
      
      {/* Premium Blurred Gradient Blobs */}
      <div className="absolute -top-10 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-35 pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-[400px] h-[400px] bg-electric/5 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center w-full relative">

          {/* Left Column: Title, Description, and Buttons */}
          <div className="w-full flex flex-col justify-between lg:col-span-3">
            <div className="flex flex-col justify-center h-full">
              {/* Badge */}
              <div className="inline-flex self-start items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-black uppercase tracking-widest mb-6 select-none">
                Our Impact
              </div>

              {/* Title */}
              <h2 className="text-3xl lg:text-[35px] font-extrabold text-navy leading-tight mb-[10px] tracking-tight text-balance capitalize">
                25+ years of plumbing <span className="text-gradient-brand">excellence in Tucson</span>
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-8 max-w-[680px]">
                Every emergency call, diagnostic visit, and commercial installation represents a story of integrity, rapid response, and dedicated plumbing craftsmanship. These metrics are the foundation of the lasting reputation American Commercial Plumbing has built across Southern Arizona. They reflect our unwavering commitment to serving Tucson's homeowners and businesses with licensed, bonded, and 24/7 emergency support.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-wrap gap-3 sm:gap-4 select-none">
                {/* Call Us Now */}
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  href="tel:+15202212010"
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-cta to-[#d62828] text-white text-xs font-bold uppercase tracking-wider rounded-xl px-6 sm:px-9 py-3.5 sm:py-4 shadow-cta transition-all duration-300 hover:brightness-110 cursor-pointer gap-2"
                >
                  <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                  <span>Call Us Now</span>
                </motion.a>

                {/* Get a Free Consultation */}
                <motion.a
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  href="/request-estimate"
                  className="group inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-navy text-xs font-bold uppercase tracking-wider rounded-xl px-6 sm:px-9 py-3.5 sm:py-4 transition-all duration-300 shadow-sm cursor-pointer gap-2"
                >
                  <span>Free Estimate</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column: Jobsite Video Container with premium floating/zoom styling */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.02 }}
            className="w-full lg:col-span-2 relative rounded-[2rem] overflow-hidden border border-slate-200/50 shadow-glow min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] cursor-pointer group"
          >
            <video
              src="https://res.cloudinary.com/ki6vfkhw/video/upload/v1789399007/acp-plumbing.mov"
              playsInline
              autoPlay
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            
            {/* Live Indicator overlay badge */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[10px] font-bold text-white tracking-wider shadow-sm select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cta"></span>
              </span>
              ON JOBSITE
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
