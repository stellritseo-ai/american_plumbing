import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { submitLead } from "../../lib/send-lead";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  return (
    <section id="contact" className="relative py-12 sm:py-14 lg:py-[60px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            Get In Touch
          </span>
          <h2 className="text-3xl lg:text-[40px] font-bold text-navy leading-tight mt-[-10px] mb-[5px] tracking-tight capitalize">
            Get your <span className="text-gradient-brand">free estimate</span> today.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">
            Tell us about your diagnostic issue or project details — replies within one hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Dispatch Office Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c2357] via-[#0d2866] to-primary text-white p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-electric/20 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Dispatch Desk Live
              </span>
              <h3 className="text-2xl font-bold uppercase tracking-wider">
                Contact Details
              </h3>
              <p className="mt-3 text-sm text-white/80 font-medium leading-relaxed">
                We stand ready 24/7 for urgent leak mitigation and standard quote operations.
              </p>

              <ul className="mt-8 space-y-6">
                <Item
                  icon={Phone}
                  label="Emergency Dispatch"
                  value="(520) 221-2010"
                  href="tel:+15202212010"
                  isCall
                />
                <Item
                  icon={Mail}
                  label="Corporate Email"
                  value="shawn@acptucson.com"
                  href="mailto:shawn@acptucson.com"
                />
                <Item
                  icon={MapPin}
                  label="Corporate Office"
                  value="226 E Forrest Feezor St, Vail, AZ 85641"
                />
                <Item
                  icon={Clock}
                  label="Operational Hours"
                  value="24/7 Emergency · Office Mon–Fri 7am–6pm"
                />
              </ul>
            </div>

            <div className="relative mt-10 pt-6 border-t border-white/10 flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-cta shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                Licensed Contractor ROC #321353
              </span>
            </div>
          </motion.div>

          {/* Right: Glass Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid place-items-center text-center py-16"
                >
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-5 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-navy uppercase tracking-wider">
                    Request Received
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground font-semibold max-w-sm">
                    Thank you! A Tucson dispatch specialist will contact you in
                    under 60 minutes.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setSubmitting(true);
                    const fd = new FormData(e.currentTarget);
                    await submitLead({
                      formTitle: "Home Page - Free Estimate / Diagnostic Request",
                      name: String(fd.get("name") || ""),
                      phone: String(fd.get("phone") || ""),
                      email: String(fd.get("email") || ""),
                      service: String(fd.get("service") || ""),
                      message: String(fd.get("message") || ""),
                    });
                    setSubmitting(false);
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                    />
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(520) 221-2010"
                      required
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="sm:col-span-2"
                    />

                    <div className="sm:col-span-2">
                      <Label>Service Needed</Label>
                      <select
                        name="service"
                        required
                        className="mt-2.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 cursor-pointer"
                      >
                        <option value="">Select diagnostic service...</option>
                        <option>Residential Plumbing</option>
                        <option>Commercial Plumbing</option>
                        <option>Emergency Repair</option>
                        <option>Water Heater Services</option>
                        <option>Sewer / Drain Scoping</option>
                        <option>Leak Detection</option>
                        <option>Whole-Home Repiping</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <Label>Project Scope / Problem Description</Label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Describe the leak location, fixtures, or scheduling needs..."
                        className="mt-2.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-cta px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-cta-foreground shadow-cta hover:brightness-110 cursor-pointer transition-[box-shadow] duration-300 disabled:opacity-50"
                  >
                    <span>{submitting ? "Sending Request..." : "Send Diagnostic Request"}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  <p className="text-center text-[10px] text-muted-foreground font-semibold">
                    We secure your data. Info only used to dispatch tech
                    updates.
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

function Item({
  icon: Icon,
  label,
  value,
  href,
  isCall,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  isCall?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`grid place-items-center h-10 w-10 rounded-xl text-white shrink-0 transition-all duration-300 ${
          isCall 
            ? "bg-cta shadow-[0_0_12px_rgba(245,158,11,0.3)]" 
            : "bg-white/10 border border-white/10 hover:bg-white/15"
        }`}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <div>
        <div className="text-[9px] uppercase tracking-wider text-white/70 font-bold">
          {label}
        </div>
        <div
          className={`font-display font-bold leading-tight ${isCall ? "text-lg text-white" : "text-sm text-white/95"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <motion.a
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        href={href}
        className="block hover:opacity-90 transition-opacity"
      >
        {inner}
      </motion.a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: any) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-300"
      />
    </div>
  );
}
