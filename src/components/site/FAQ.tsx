import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import heroVideo from "@/assets/herovideo.mp4";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are you licensed and insured in Arizona?",
      a: "Yes, American Commercial Plumbing is fully licensed, bonded, and insured. Our ROC license number is ROC #321353, and we carry comprehensive general liability and workman's compensation insurance for your complete peace of mind."
    },
    {
      q: "Do you offer residential plumbing, or only commercial?",
      a: "We specialize in both! While our name reflects our capacity for large-scale commercial contracts, our dispatch fleet regularly handles residential projects, including whole-home repiping, leak detection, water heaters, and drain cleaning."
    },
    {
      q: "Do you offer 24/7 emergency services?",
      a: "Absolutely. We stand ready 24/7 for urgent plumbing emergencies such as slab leaks, water heater failures, and sewer line backups. A dispatch technician is typically on-site in under 60 minutes."
    },
    {
      q: "What should I do immediately during a burst pipe emergency?",
      a: "First, locate your main water shut-off valve (usually near your street water meter or where the main line enters the home) and turn it off clockwise. Once the water is shut off to prevent property damage, call our dispatch team immediately."
    },
    {
      q: "How do you handle pricing and estimates?",
      a: "We provide up-front, transparent quotes before any work begins. There are no hidden fees or surprise markups. For residential or commercial diagnostic visits, we analyze the issue and present itemized choices."
    },
    {
      q: "What areas in Southern Arizona do you serve?",
      a: "We service Tucson and all surrounding areas, including Oro Valley, Marana, Vail, Sahuarita, Catalina, Green Valley, Drexel Heights, and Casas Adobes. Our standard response radius is within 40 miles of our Tucson hub."
    }
  ];

  return (
    <section id="faq" className="relative py-12 sm:py-14 lg:py-[60px] bg-[#fafbfe] border-b border-slate-100">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] items-start w-full relative">
          
          {/* Left Column: Badge, Title, Description, Video & CTA (50% width) */}
          <div className="flex flex-col items-start w-full lg:sticky lg:top-24">
            
            {/* Badge & Floating Logo */}
            <div className="w-full flex items-center justify-between mb-6 pr-4">
              <div className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider select-none">
                FAQ'S
              </div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/80 backdrop-blur border border-slate-200/50 rounded-2xl p-2 shadow-md w-14 h-14 flex items-center justify-center rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300 select-none"
              >
                <img src={logo} alt="ACP Logo" className="h-9 w-9 object-contain" />
              </motion.div>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-[38px] font-bold text-navy leading-tight mt-[-20px] mb-[5px] tracking-tight">
              Got Questions? <span className="text-gradient-brand">We Have Answers.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed mb-6">
              Find quick information on our most common plumbing services below. For direct, expert advice on your specific project or diagnostic issue in Tucson, call our dispatch desk at (520) 221-2010.
            </p>

            {/* Video Player Container */}
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-neutral-200/50 bg-black mb-6">
              <video
                src={heroVideo}
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            {/* Consultation CTA Button */}
            <div className="relative group/btn select-none mt-2">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cta to-electric rounded-xl blur opacity-25 group-hover/btn:opacity-50 transition duration-500" />
              <motion.a
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="/request-estimate"
                className="relative group inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-cta to-red-600 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-cta hover:brightness-110 transition-all duration-300 cursor-pointer"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Accordion Card Wrapper (50% width) */}
          <div className="w-full lg:sticky lg:top-24">
            <div className="w-full bg-white rounded-[32px] p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.025)] border border-neutral-100/80 space-y-4">
              {faqs.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="w-full">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-[#f4f6f8] hover:bg-[#ebedf0] transition-colors duration-200 rounded-2xl text-left"
                    >
                      <span className="font-bold text-neutral-900 text-sm md:text-[15px] leading-snug">
                        {f.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-neutral-800 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-6 py-4 text-xs md:text-sm text-neutral-600 leading-relaxed">
                          {f.a}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
