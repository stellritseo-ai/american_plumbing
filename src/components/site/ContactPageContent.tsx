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
  Award,
  AlertTriangle,
  ChevronDown,
  Building2,
  Home,
  Wrench,
  Siren,
  Sparkles,
  ArrowRight,
  Printer,
  BadgeCheck,
  MessageSquare,
} from "lucide-react";

import { submitLead } from "../../lib/send-lead";

export function ContactPageContent() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    serviceAddress: "",
    propertyType: "Residential",
    serviceNeeded: "Emergency Repair",
    preferredContact: "Phone",
    message: "",
    smsConsent: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await submitLead({
      formTitle: "Contact Page - Service & Estimate Form",
      name: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      address: formData.serviceAddress,
      propertyType: formData.propertyType,
      service: formData.serviceNeeded,
      preferredContact: formData.preferredContact,
      message: `${formData.message}${formData.smsConsent ? "\n[Customer consented to SMS updates]" : ""}`,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const scrollToForm = () => {
    const el = document.getElementById("contact-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whyChoosePoints = [
    {
      title: "25+ Years Serving Tucson",
      desc: "A family-run enterprise proudly founded and led by Shawn Holton since 1999. Navigating local plumbing dynamics with unmatched expertise.",
      icon: Award,
      badge: "Since 1999",
      accent: "from-blue-600 to-indigo-700",
    },
    {
      title: "Licensed, Bonded & Insured",
      desc: "Fully compliant with Arizona state regulations (ROC #321353) carrying comprehensive liability protection for your peace of mind.",
      icon: ShieldCheck,
      badge: "ROC #321353",
      accent: "from-emerald-600 to-teal-700",
    },
    {
      title: "Certified Technicians",
      desc: "Background-checked, drug-tested, and certified master technicians arrive in uniform to treat your home or facility with respect.",
      icon: CheckCircle2,
      badge: "Vetted Pros",
      accent: "from-indigo-600 to-purple-700",
    },
    {
      title: "Upfront Pricing",
      desc: "Transparent, flat-rate estimates before any work begins. Absolutely zero hidden diagnostic surprises or surprise charges.",
      icon: BadgeCheck,
      badge: "Zero Hidden Fees",
      accent: "from-rose-600 to-cta",
    },
    {
      title: "100% Satisfaction Guarantee",
      desc: "We stand firmly behind our workmanship. We aren't happy until your water flows safely, cleanly, and reliably.",
      icon: Sparkles,
      badge: "100% Guaranteed",
      accent: "from-amber-500 to-orange-600",
    },
  ];

  const faqs = [
    {
      q: "Do you offer emergency plumbing services?",
      a: "Yes. We understand plumbing emergencies don't stick to a 9-to-5 schedule. We offer 24/7 emergency response for burst pipes, major leaks, sewer backups, and more. Call (520) 221-2010 immediately if you have an emergency.",
    },
    {
      q: "How quickly will you respond to my inquiry?",
      a: "During normal business hours (Mon-Fri, 7 AM - 4 PM), we aim to respond to all web inquiries and estimate requests within one hour. For after-hours emergencies, please call our main line directly at (520) 221-2010.",
    },
    {
      q: "What areas do you serve?",
      a: "We proudly serve Tucson and the surrounding Southern Arizona communities, including Vail, Sahuarita, Marana, Green Valley, Catalina, Drexel Heights, and Sahuarita.",
    },
    {
      q: "Are you licensed and insured?",
      a: "Absolutely. American Commercial Plumbing LLC is fully licensed, bonded, and insured in the state of Arizona. Our ROC License Number is #321353.",
    },
    {
      q: "Do you charge for estimates?",
      a: "We provide free estimates on a wide range of installation and replacement projects. For diagnostic service calls, there may be a dispatch fee, which we will always disclose upfront before scheduling.",
    },
  ];

  return (
    <div className="bg-white text-[#111111]">
      {/* ── 1. QUICK CONTACT & TRUST BAR (BELOW PAGEHEADER) ─────────── */}
      <section className="relative z-20 -mt-10 sm:-mt-12 mx-auto w-[92%] max-w-6xl">
        <div className="bg-white/95 backdrop-blur-xl border border-slate-200/90 rounded-3xl p-5 sm:p-7 shadow-[0_15px_40px_-10px_rgba(12,35,87,0.12)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary mb-1">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                24/7 Live Emergency Dispatch
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-navy tracking-tight">
                Experience 100% Upfront & Honest Service
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="tel:+15202212010"
                className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>📞 Call (520) 221-2010</span>
              </a>

              <button
                onClick={scrollToForm}
                className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Siren className="w-4 h-4 text-cta" />
                <span>🚨 24/7 Emergency Service</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. HOW CAN WE HELP YOU TODAY? & CONTACT INFO CARDS ──────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Introductory Narrative Card */}
          <div className="mb-14 p-8 sm:p-10 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-sm relative overflow-hidden text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>How Can We Help You Today?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-navy tracking-tight">
              Fast, Reliable, and Professional Plumbing Support
            </h2>
            <div className="mt-4 text-slate-700 text-sm sm:text-base leading-relaxed font-medium space-y-3">
              <p>
                At American Commercial Plumbing LLC, we understand that plumbing issues can't always
                wait for normal business hours. That’s why we offer flexible scheduling and true 24/7
                emergency response for both residential and commercial clients across Southern
                Arizona.
              </p>
              <p>
                No matter the size of the job—from a leaky faucet to a major sewer line
                replacement—you can count on our licensed, bonded, and background-checked technicians
                to arrive on time and get it done right.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 1 Column: Contact Details Cards */}
            <div className="lg:col-span-1 space-y-6 text-left">
              {/* Phone & Text Card */}
              <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs hover:border-primary transition">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mb-4 shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-navy">Phone & Text</h3>
                <div className="mt-2">
                  <a
                    href="tel:+15202212010"
                    className="block text-lg font-black text-primary hover:text-electric transition-colors"
                  >
                    (520) 221-2010
                  </a>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200/60 text-xs font-bold text-emerald-800 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Available 24/7 for Emergency Dispatch</span>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs hover:border-primary transition">
                <div className="w-12 h-12 rounded-2xl bg-navy text-white flex items-center justify-center mb-4 shadow-sm">
                  <Mail className="w-6 h-6 text-electric" />
                </div>
                <h3 className="text-lg font-black text-navy">Email Communications</h3>
                <div className="mt-3 space-y-2">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                      Direct & General Dispatch
                    </div>
                    <a
                      href="mailto:shawn@acptucson.com"
                      className="text-xs sm:text-sm font-bold text-primary hover:underline break-all"
                    >
                      shawn@acptucson.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours & Office Location Card */}
              <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs hover:border-primary transition">
                <div className="w-12 h-12 rounded-2xl bg-cta text-white flex items-center justify-center mb-4 shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-navy">Office & Operating Hours</h3>

                <div className="mt-3 text-xs text-slate-700 space-y-1.5 font-medium">
                  <div className="font-extrabold text-navy">Monday – Friday:</div>
                  <div className="text-slate-600">7:00 AM – 4:00 PM</div>
                  <div className="font-extrabold text-navy pt-1">Saturday – Sunday:</div>
                  <div className="text-slate-600">Closed for routine calls</div>
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 font-black text-cta text-[11px] uppercase tracking-wider">
                      <span className="h-2 w-2 rounded-full bg-cta animate-pulse" />
                      Emergencies: Available 24/7
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs text-slate-700">
                  <div className="font-extrabold text-navy flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>Office Location:</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=226+E+Forrest+Feezor+St,+Vail,+AZ+85641"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-slate-600 hover:text-primary transition-colors block mt-1"
                  >
                    226 E Forrest Feezor St, Vail, AZ 85641
                  </a>
                  <p className="text-[11px] text-slate-500 mt-1 italic">
                    Serving Tucson, Vail, Sahuarita, Marana, Green Valley, Catalina, and surrounding
                    communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Right 2 Columns: Google Map & Comprehensive Request Form */}
            <div id="contact-form-section" className="lg:col-span-2 space-y-8">
              {/* Google Map Container */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md h-72 relative group">
                <iframe
                  title="American Commercial Plumbing LLC Location Map"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=226%20E%20Forrest%20Feezor%20St,%20Vail,%20AZ%2085641&t=&z=13&ie=UTF8&iwloc=&output=embed"
                />
              </div>

              {/* Comprehensive Service Request / Free Estimate Form */}
              <div className="rounded-3xl border border-slate-200 bg-[#F7F7F7] p-6 sm:p-10 shadow-lg text-left">
                <div className="mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
                    Request Service or a Free Estimate
                  </span>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-black text-navy tracking-tight">
                    Send Us a Message
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
                    Fill out the form below to request a free estimate or schedule a service call. Please
                    provide as much detail as possible about your plumbing issue or project. A member
                    of our team will review your request and get back to you within one hour during normal
                    business hours.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-black text-navy uppercase tracking-wider">
                        Message Received!
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium max-w-md mx-auto leading-relaxed">
                        Thank you, {formData.fullName || "valued client"}! A member of the American
                        Commercial Plumbing team will review your request and get back to you within one
                        hour during normal business hours.
                      </p>
                      <div className="mt-6 flex justify-center gap-4">
                        <button
                          onClick={() => setSubmitted(false)}
                          className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-black uppercase tracking-wider hover:bg-primary/90 transition cursor-pointer"
                        >
                          Send Another Message
                        </button>
                        <a
                          href="tel:+15202212010"
                          className="px-6 py-2.5 rounded-full bg-white border border-slate-300 text-navy text-xs font-black uppercase tracking-wider hover:bg-slate-100 transition"
                        >
                          Call (520) 221-2010
                        </a>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Shawn Holton"
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(520) 221-2010"
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                          />
                        </div>
                      </div>

                      {/* Email & Service Address */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@domain.com"
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                            Service Address (Street, City, Zip)
                          </label>
                          <input
                            type="text"
                            value={formData.serviceAddress}
                            onChange={(e) =>
                              setFormData({ ...formData, serviceAddress: e.target.value })
                            }
                            placeholder="226 E Forrest Feezor St, Vail, AZ 85641"
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                          />
                        </div>
                      </div>

                      {/* Property Type & Service Needed */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                            Property Type
                          </label>
                          <select
                            value={formData.propertyType}
                            onChange={(e) =>
                              setFormData({ ...formData, propertyType: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition cursor-pointer"
                          >
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                            Service Needed
                          </label>
                          <select
                            value={formData.serviceNeeded}
                            onChange={(e) =>
                              setFormData({ ...formData, serviceNeeded: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition cursor-pointer"
                          >
                            <option value="Emergency Repair">Emergency Repair</option>
                            <option value="Water Heater">Water Heater</option>
                            <option value="Drain Cleaning">Drain Cleaning</option>
                            <option value="Leak Detection">Leak Detection</option>
                            <option value="Sewer Line">Sewer Line</option>
                            <option value="Remodeling">Remodeling</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Preferred Contact Method */}
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-2">
                          Preferred Contact Method
                        </label>
                        <div className="flex gap-4">
                          {["Phone", "Email", "Text"].map((method) => (
                            <label
                              key={method}
                              className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name="preferredContact"
                                value={method}
                                checked={formData.preferredContact === method}
                                onChange={(e) =>
                                  setFormData({ ...formData, preferredContact: e.target.value })
                                }
                                className="text-primary focus:ring-primary cursor-pointer"
                              />
                              <span>{method}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Message Box */}
                      <div>
                        <label className="block text-[11px] font-black uppercase tracking-wider text-navy mb-1.5">
                          How can we help you? *
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide details about your plumbing issue or project scope..."
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium text-navy focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition resize-none"
                        />
                      </div>

                      {/* SMS Consent Checkbox */}
                      <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-slate-200">
                        <input
                          type="checkbox"
                          id="smsConsent"
                          checked={formData.smsConsent}
                          onChange={(e) =>
                            setFormData({ ...formData, smsConsent: e.target.checked })
                          }
                          className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 cursor-pointer mt-0.5"
                        />
                        <label
                          htmlFor="smsConsent"
                          className="text-xs font-semibold text-slate-700 cursor-pointer select-none"
                        >
                          I consent to receive SMS updates regarding my service request.
                        </label>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-cta transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <Send className="w-4 h-4" />
                        <span>{submitting ? "Sending..." : "Send Message"}</span>
                      </button>

                      <p className="text-center text-[11px] text-slate-500 font-semibold">
                        100% Upfront & Honest Guarantee · ROC #321353 · Replies within 1 hour during business hours
                      </p>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US SECTION (EXACT BROWN STYLE) ───────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              The ACP Difference
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Why Choose American Commercial Plumbing?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              When you contact us, you aren't just getting a plumber; you're getting a dedicated
              partner committed to your safety and satisfaction.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {whyChoosePoints.map((point, idx) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl bg-white p-7 border border-slate-200 hover:border-cta/60 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${point.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-slate-50 px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                        {point.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-navy tracking-tight group-hover:text-primary transition-colors">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-extrabold text-primary">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Certified Standard</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. FREQUENTLY ASKED QUESTIONS (EXACT BROWN ACCORDION) ───── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Got Questions?
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-slate-600 text-sm font-medium">
              Common questions about our contact response, emergency services, and pricing.
            </p>
          </div>

          <div className="space-y-3.5 text-left">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-[#F7F7F7] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-navy hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-cta" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-3">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. BOTTOM CALL TO ACTION (FOOTER BANNER) ────────────────── */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-navy via-[#0d2b6b] to-primary text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-cta/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Don't Let a Plumbing Problem Turn into a Disaster.
          </h2>
          <p className="mt-4 text-slate-200 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            Contact American Commercial Plumbing LLC today for fast, reliable, and honest service.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+15202212010"
              className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>📞 Call (520) 221-2010</span>
            </a>
            <button
              onClick={scrollToForm}
              className="bg-white hover:bg-slate-100 text-navy text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Siren className="w-4 h-4 text-cta" />
              <span>🚨 Request Emergency Service</span>
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-xs font-bold text-slate-300 flex flex-col items-center gap-1">
            <div className="text-white font-black uppercase tracking-widest text-[11px]">
              American Commercial Plumbing LLC — Family Owned & Operated Since 1999 · ROC #321353
            </div>
            <div className="text-slate-300 text-[10px]">
              Serving Tucson, Vail, Sahuarita, Marana, Green Valley, Catalina, and all of Southern
              Arizona.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
