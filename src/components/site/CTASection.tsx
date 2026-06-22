import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ChevronDown, ArrowRight } from "lucide-react";

export function CTASection() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    // Simulate API submission delay
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit estimate request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-[#fafbfe] pt-4 pb-0 px-[15px] md:px-6 lg:px-8">
      <section
        id="cta-estimate"
        className="mx-auto max-w-7xl w-full rounded-t-[32px] rounded-b-none bg-[#0c2357] py-8 sm:py-12 px-4 sm:px-6 md:px-12 lg:px-16 border border-slate-800 shadow-[0_12px_45px_rgba(0,0,0,0.035)] relative overflow-hidden text-center"
      >
        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />

        {/* Inner Card Container with pure CSS dot pattern */}
        <div
          className="w-full rounded-2xl border border-slate-200/50 shadow-[0_10px_35px_rgba(0,0,0,0.02)] relative z-10 p-6 sm:p-8 md:p-10 lg:p-12"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
            backgroundColor: "#ffffff",
          }}
        >
          {/* Badge */}
          <div className="inline-block bg-[#0c2357] text-white text-[10px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full mb-6 select-none shadow-sm">
            Contact Us
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-[32px] font-extrabold text-navy leading-tight tracking-tight mt-[-15px] mb-[10px]">
            Ready to Schedule Your Estimate?
          </h2>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-[24px] text-xs sm:text-sm font-medium">
            Contact American Commercial Plumbing for a free, no-obligation estimate. We're here to diagnose your issues, discuss your project, and provide the expert solutions you need in Tucson.
          </p>

          {isSubmitted ? (
            <div className="flex flex-col justify-center items-center text-center w-full py-12 space-y-4">
              <div className="bg-emerald-50 text-emerald-600 p-4 rounded-full shadow-sm animate-bounce">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy">
                Request Received
              </h3>
              <p className="text-sm text-slate-600 max-w-md">
                Thank you! A Tucson dispatch specialist will review your details and contact you within 60 minutes.
              </p>
            </div>
          ) : (
            /* Contact Form */
            <form className="w-full space-y-4 text-left" onSubmit={handleSubmit}>

              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full Name"
                  className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.01)] py-3.5 px-4 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.01)] py-3.5 px-4 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                />
              </div>

              {/* Row 2: Email and Address with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.01)] py-3.5 pl-4 pr-10 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                  />
                  <Mail className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
                <div className="relative w-full">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Project Address"
                    className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.01)] py-3.5 pl-4 pr-10 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all"
                  />
                  <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Row 3: Services select dropdown */}
              <div className="relative w-full">
                <select
                  required
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.01)] py-3.5 pl-4 pr-10 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled hidden>
                    Select Service Needed
                  </option>
                  <option value="commercial">Commercial Plumbing</option>
                  <option value="residential">Residential Plumbing</option>
                  <option value="emergency">24/7 Emergency Service</option>
                  <option value="water-heaters">Water Heater Install & Repair</option>
                  <option value="leak-detection">Advanced Leak Detection</option>
                  <option value="drain-sewer">Drain Scoping & Sewer Repair</option>
                  <option value="repiping">Whole-Home/Building Repiping</option>
                </select>
                <div className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 flex items-center">
                  <ChevronDown className="h-4 w-4 text-slate-400" />
                </div>
              </div>

              {/* Row 4: Message Textarea */}
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your plumbing needs or request details..."
                className="w-full bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.01)] py-3.5 px-4 text-xs font-semibold text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all resize-none"
              />

              {/* Row 5: Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cta to-red-600 hover:brightness-110 text-white text-xs font-bold uppercase tracking-wider rounded-xl py-4 transition-all duration-300 shadow-cta select-none cursor-pointer text-center disabled:opacity-75 disabled:pointer-events-none flex items-center justify-center gap-2"
              >
                <span>{isSubmitting ? "Submitting..." : "Send Estimate Request"}</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

            </form>
          )}
        </div>
      </section>
    </div>
  );
}
