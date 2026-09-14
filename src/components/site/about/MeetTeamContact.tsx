import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building,
  ArrowRight,
} from "lucide-react";

import { submitLead } from "../../../lib/send-lead";

export function MeetTeamContact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Residential Plumbing",
    isEmergency: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitLead({
      formTitle: "Meet The Team - Free Estimate Form",
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: formData.serviceType,
      urgency: formData.isEmergency ? "URGENT 24/7 EMERGENCY" : "Standard",
      message: formData.message,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="estimate-form" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cta/10 border border-cta/20 text-cta text-xs font-extrabold uppercase tracking-widest mb-4">
            <Building className="h-3.5 w-3.5" />
            <span>Meet The Team / Contact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
            Experience the Difference Today
          </h2>

          <p className="mt-5 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Join the thousands of satisfied Tucson homeowners and businesses who trust American
            Commercial Plumbing LLC for their plumbing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 rounded-[2.5rem] bg-gradient-to-br from-[#0c2357] via-[#0d2866] to-primary text-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid opacity-15 pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-white border border-white/20 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Direct Tucson Headquarters</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                American Commercial Plumbing LLC
              </h3>
              <p className="mt-2 text-sm text-slate-300 font-medium leading-relaxed">
                Founded & operated by Shawn Holton. Serving Southern Arizona with licensed master
                plumbing craftsmanship.
              </p>

              {/* Contact Information List */}
              <div className="mt-8 space-y-6">
                {/* Phone */}
                <a
                  href="tel:+15202212010"
                  className="flex items-start gap-4 text-white hover:text-electric transition-colors group"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-electric/20 group-hover:border-electric/40 transition-all">
                    <Phone className="h-5 w-5 text-electric group-hover:rotate-12 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Phone (Click to Call)
                    </div>
                    <div className="text-base sm:text-lg font-extrabold text-white">
                      (520) 221-2010
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:shawn@acptucson.com"
                  className="flex items-start gap-4 text-white hover:text-electric transition-colors group"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-electric/20 group-hover:border-electric/40 transition-all">
                    <Mail className="h-5 w-5 text-electric group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Email Address
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white break-all">
                      shawn@acptucson.com
                    </div>
                  </div>
                </a>

                {/* Address */}
                <a
                  href="https://maps.google.com/?q=226+E+Forrest+Feezor+St,+Vail,+AZ+85641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-white hover:text-electric transition-colors group"
                >
                  <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-electric/20 group-hover:border-electric/40 transition-all">
                    <MapPin className="h-5 w-5 text-electric group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Headquarters Address
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white leading-snug">
                      226 E Forrest Feezor St<br />
                      Vail, AZ 85641
                    </div>
                  </div>
                </a>

                {/* Hours */}
                <div className="flex items-start gap-4 text-white">
                  <div className="h-11 w-11 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                    <Clock className="h-5 w-5 text-cta" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                      Operating Hours
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white">
                      Monday - Friday: 7:00 AM - 4:00 PM
                    </div>
                    <div className="text-xs text-cta font-extrabold mt-0.5 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-cta animate-pulse" />
                      24/7 Emergency Service Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card Action */}
            <div className="relative z-10 mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>ROC #321353 Licensed</span>
              </div>

              <a
                href="tel:+15202212010"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cta text-white text-xs font-extrabold uppercase tracking-wider shadow-cta hover:brightness-110 transition-all"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Request Service / Estimate Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-[2.5rem] bg-slate-50/80 border border-slate-200/80 p-8 sm:p-10 shadow-sm flex flex-col justify-center relative"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 text-center"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-navy uppercase tracking-wider">
                    Service Request Submitted!
                  </h3>
                  <p className="mt-3 text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name || "valued neighbor"}! Shawn Holton and our Tucson
                    dispatch team have received your details. We will contact you within the hour to
                    confirm your free estimate.
                  </p>
                  <div className="mt-8 flex justify-center gap-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-extrabold uppercase tracking-wider hover:bg-primary/90 transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                    <a
                      href="tel:+15202212010"
                      className="px-6 py-3 rounded-xl bg-white border border-slate-300 text-navy text-xs font-extrabold uppercase tracking-wider hover:bg-slate-100 transition-colors"
                    >
                      Call (520) 221-2010
                    </a>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-black text-navy tracking-tight">
                      Request Service & Free Estimate
                    </h3>
                    <p className="mt-1 text-sm text-slate-500 font-medium">
                      Fill out the form below. Transparent pricing and rapid response guaranteed.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Shawn Holton"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300/80 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-xs"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-navy mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(520) 221-2010"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300/80 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300/80 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-xs"
                      />
                    </div>

                    {/* Service Type */}
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-navy mb-2">
                        Service Category
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300/80 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-xs cursor-pointer"
                      >
                        <option value="Commercial Plumbing">Commercial Plumbing</option>
                        <option value="Residential Plumbing">Residential Plumbing</option>
                        <option value="Water Heater Repair & Installation">
                          Water Heater Repair & Installation
                        </option>
                        <option value="Sewer Line Inspection & Repair">
                          Sewer Line Inspection & Repair
                        </option>
                        <option value="Drain Cleaning & Hydro Jetting">
                          Drain Cleaning & Hydro Jetting
                        </option>
                        <option value="Leak Detection & Repair">Leak Detection & Repair</option>
                        <option value="Gas Line Services">Gas Line Services</option>
                        <option value="Emergency Repairs (24/7)">Emergency Repairs (24/7)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Issue details */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-navy mb-2">
                      Describe the Plumbing Issue or Project Scope
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know what fixtures, drains, or systems are affected..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-slate-300/80 text-navy text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all shadow-xs resize-none"
                    />
                  </div>

                  {/* Emergency Toggle */}
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                    <input
                      type="checkbox"
                      id="emergency-check"
                      checked={formData.isEmergency}
                      onChange={(e) =>
                        setFormData({ ...formData, isEmergency: e.target.checked })
                      }
                      className="h-4 w-4 rounded text-cta focus:ring-cta border-slate-300 cursor-pointer"
                    />
                    <label
                      htmlFor="emergency-check"
                      className="text-xs font-bold text-slate-700 cursor-pointer select-none"
                    >
                      This is an urgent / 24/7 emergency repair request
                    </label>
                  </div>

                  {/* Dual Action Submit Buttons */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={submitting}
                      className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-cta text-white font-black text-sm uppercase tracking-wider shadow-cta hover:brightness-110 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                      <span>{submitting ? "Sending Request..." : "Request Service"}</span>
                    </motion.button>

                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href="tel:+15202212010"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white border border-slate-300 text-navy font-black text-sm uppercase tracking-wider hover:bg-slate-100 transition-all cursor-pointer shadow-xs"
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      <span>Contact Us Today</span>
                    </motion.a>
                  </div>

                  <p className="text-center text-[11px] text-slate-400 font-semibold">
                    100% Upfront & Honest Guarantee · No Hidden Fees · ROC #321353
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
