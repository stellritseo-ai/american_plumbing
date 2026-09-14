import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Calendar,
  Sparkles,
  Building2,
  Home,
  Clock,
  DollarSign,
  UserCheck,
  Sparkle,
  Wrench,
  ExternalLink,
  MessageSquarePlus,
  X,
  Send,
  ThumbsUp,
  Award,
  BadgeCheck,
} from "lucide-react";

interface Testimonial {
  id: string;
  category: "residential" | "commercial";
  rating: number;
  title: string;
  quote: string;
  author: string;
  location: string;
  serviceTag: string;
  initials: string;
  avatarColor: string;
  ownerReply?: string;
  dateBadge?: string;
}

const testimonials: Testimonial[] = [
  {
    id: "maria-g",
    category: "residential",
    rating: 5,
    title: "Fast, professional, and honest.",
    quote:
      "Shawn and his team were incredible. Our water heater burst on a Sunday morning, and they had a technician out to our house within 45 minutes. He was polite, explained exactly what needed to be done, and the upfront pricing was exactly what we paid. No hidden fees, no upselling. Just great service. We won't use anyone else for our home plumbing needs.",
    author: "Maria G.",
    location: "Tucson Homeowner",
    serviceTag: "Water Heater Emergency",
    initials: "MG",
    avatarColor: "#0284c7",
    dateBadge: "Verified Homeowner",
    ownerReply:
      "Thank you so much Maria! Sunday morning emergencies are stressful, and we are glad our on-call technician could get your hot water restored and prevent any water damage to your floors.",
  },
  {
    id: "david-c",
    category: "residential",
    rating: 5,
    title: "Finally, a plumber I can trust.",
    quote:
      "I've had bad experiences with plumbers in the past trying to charge for unnecessary work. American Commercial Plumbing was the exact opposite. They diagnosed a complex leak issue quickly, showed me the camera footage, and gave me all my options without pressure. The repair was flawless. Highly recommend their leak detection services!",
    author: "David C.",
    location: "Vail Resident",
    serviceTag: "Leak Detection & Camera Inspection",
    initials: "DC",
    avatarColor: "#0d9488",
    dateBadge: "Verified Customer",
    ownerReply:
      "David, transparency with video inspection is our gold standard. You should always see the exact issue before spending a dime. Glad we could resolve it smoothly for you!",
  },
  {
    id: "sarah-t",
    category: "residential",
    rating: 5,
    title: "True 24/7 Emergency Service.",
    quote:
      "A main line backup at 2:00 AM is a nightmare. I called American Commercial Plumbing, and a real person answered the phone. They dispatched a technician immediately. The tech was professional, clean, and got our sewer line cleared and flowing again before the morning rush. Worth every penny for the peace of mind.",
    author: "Sarah T.",
    location: "Sahuarita Homeowner",
    serviceTag: "24/7 Emergency Sewer Line",
    initials: "ST",
    avatarColor: "#4f46e5",
    dateBadge: "Emergency Dispatch",
  },
  {
    id: "james-l",
    category: "residential",
    rating: 5,
    title: "Top-Tier Water Heater Installation.",
    quote:
      "We needed a new tankless water heater installed. The team was punctual, laid down floor protection, and walked me through how to use the new system. The craftsmanship on the copper piping was beautiful. You can tell they take pride in their work. 5 stars!",
    author: "James L.",
    location: "Marana Resident",
    serviceTag: "Tankless Water Heater Installation",
    initials: "JL",
    avatarColor: "#2563eb",
    dateBadge: "Verified Customer",
    ownerReply:
      "Clean engineering and immaculate copper pipe work are things we treat as craft. Enjoy the endless hot water and lower energy bills, James!",
  },
  {
    id: "elena-r",
    category: "commercial",
    rating: 5,
    title: "Saved our restaurant from a major shutdown.",
    quote:
      "As a restaurant owner in downtown Tucson, a plumbing failure means lost revenue and health code violations. American Commercial Plumbing responded to our grease clog emergency immediately. They worked efficiently after hours to ensure we could open on time the next morning. They are now our dedicated commercial plumbing partners.",
    author: "Elena R.",
    location: "Restaurant Owner",
    serviceTag: "Commercial Grease Trap & Jetting",
    initials: "ER",
    avatarColor: "#d97706",
    dateBadge: "Commercial Partner",
    ownerReply:
      "Commercial kitchens cannot afford downtime. We take immense pride in keeping Tucson's culinary establishments running without interruptions. Proud to partner with your team!",
  },
  {
    id: "mark-s",
    category: "commercial",
    rating: 5,
    title: "Reliable Property Management Partners.",
    quote:
      "Managing multiple commercial properties requires a plumbing company that is responsive, insured, and communicates well with tenants. American Commercial Plumbing handles all our routine maintenance and emergency calls. Their background-checked technicians give our tenants peace of mind, and their upfront pricing makes my job easier.",
    author: "Mark S.",
    location: "Property Manager",
    serviceTag: "Commercial Property Maintenance",
    initials: "MS",
    avatarColor: "#059669",
    dateBadge: "Property Portfolio",
  },
  {
    id: "robert-m",
    category: "residential",
    rating: 5,
    title: "Flawless Whole-Home Copper Repiping.",
    quote:
      "Our 1980s Foothills home suffered two pinhole leaks within three months. Shawn came out personally, walked us through the repiping plan, and had his crew re-plumb the entire house with minimal drywall cuts. They finished ahead of schedule and left the house spotless. True craftsmen who care about quality.",
    author: "Robert M.",
    location: "Catalina Foothills Homeowner",
    serviceTag: "Whole-Home Repiping & PEX Upgrades",
    initials: "RM",
    avatarColor: "#0369a1",
    dateBadge: "Verified Customer",
    ownerReply:
      "Appreciate your business Robert! Repiping a custom Foothills residence takes precision and clean execution. Glad you now have total peace of mind for decades to come.",
  },
  {
    id: "carlos-v",
    category: "residential",
    rating: 5,
    title: "Best drain cleaning service in Pima County.",
    quote:
      "We had tree roots continuously invading our mainline out to the sewer. Another company quoted us thousands for an immediate trench dig. Shawn's team ran an HD camera first, hydro-jetted the line clear, and showed us that a simple localized spot repair was all we needed. Saved us over $4,000. Honest and genuine people.",
    author: "Carlos & Linda V.",
    location: "Oro Valley Residents",
    serviceTag: "Hydro Jetting & Root Removal",
    initials: "CV",
    avatarColor: "#047857",
    dateBadge: "Verified Customer",
    ownerReply:
      "Camera verification always comes first! We never recommend expensive excavation when a precision repair solves the problem. Thank you for your trust.",
  },
  {
    id: "dr-arthur-b",
    category: "commercial",
    rating: 5,
    title: "Impeccable Commercial Backflow & Code Compliance.",
    quote:
      "Our outpatient surgical clinic requires annual backflow testing and zero-tolerance water quality standards. American Commercial Plumbing has managed our certification and maintenance for over five years. They coordinate after-hours testing seamlessly so patient schedules are never interrupted.",
    author: "Dr. Arthur B.",
    location: "Medical Clinic Director",
    serviceTag: "Commercial Backflow Certification",
    initials: "AB",
    avatarColor: "#6d28d9",
    dateBadge: "Healthcare Partner",
    ownerReply:
      "Thank you Dr. Arthur. Medical compliance and pristine water safety require meticulous attention to code, and we're honored to support your clinic.",
  },
  {
    id: "patricia-h",
    category: "residential",
    rating: 5,
    title: "Courteous, prompt, and crystal-clear pricing.",
    quote:
      "Living in a retirement community in Green Valley, it's easy to worry about contractors taking advantage of seniors. ACP's technician was polite, wore shoe covers, explained that my bathroom faucet only needed a new valve cartridge rather than a full replacement, and charged the exact flat rate quoted on the phone. Will recommend to all my neighbors!",
    author: "Patricia H.",
    location: "Green Valley Resident",
    serviceTag: "Fixture Repair & Valve Replacement",
    initials: "PH",
    avatarColor: "#b45309",
    dateBadge: "Verified Homeowner",
  },
  {
    id: "greg-k",
    category: "commercial",
    rating: 5,
    title: "Fast commercial restroom overhaul & drainage.",
    quote:
      "We operate a high-volume car dealership on Auto Mall Drive. When our customer lounge restrooms backed up on a busy Saturday, ACP dispatched within 35 minutes. They snaked the trunk line, sanitized the area, and had us operational before our afternoon rush. Outstanding commercial partner.",
    author: "Greg K.",
    location: "Dealership General Manager",
    serviceTag: "Commercial Emergency Jetting",
    initials: "GK",
    avatarColor: "#1d4ed8",
    dateBadge: "Commercial Partner",
  },
  {
    id: "jennifer-w",
    category: "residential",
    rating: 5,
    title: "Tankless water heater conversion was seamless.",
    quote:
      "Our old 50-gallon tank gave out right before Thanksgiving family arrived. ACP installed a high-efficiency Navien tankless system the next morning. The technician re-routed the gas line and venting cleanly, and we haven't run out of hot water once with 8 guests in the house. Outstanding work!",
    author: "Jennifer & Scott W.",
    location: "Rita Ranch Homeowners",
    serviceTag: "Navien Tankless Installation",
    initials: "JW",
    avatarColor: "#be185d",
    dateBadge: "Verified Customer",
    ownerReply:
      "Holidays with no hot water is an emergency we take seriously! Thank you Jennifer and Scott for letting us upgrade your home to endless hot water.",
  },
  {
    id: "frank-d",
    category: "commercial",
    rating: 5,
    title: "The only plumbing contractor our 80-unit HOA trusts.",
    quote:
      "Managing an 80-unit townhome community means constant plumbing variables—pressure regulator valves, main water line shutoffs, and irrigation tie-ins. Shawn Hamilton has been our trusted contractor for 8 years. Their invoicing is crystal-clear, transparent, and compliant with HOA reserve audits.",
    author: "Frank D.",
    location: "HOA Board President",
    serviceTag: "HOA Community Infrastructure",
    initials: "FD",
    avatarColor: "#374151",
    dateBadge: "HOA Partner",
  },
  {
    id: "rachel-m",
    category: "residential",
    rating: 5,
    title: "Slab leak detected with zero drywall damage.",
    quote:
      "Our water bill spiked unexpectedly by $180. ACP arrived with acoustic listening gear and thermal imaging, pinpointed the hot water slab leak under our hallway closet in 20 minutes, and rerouted the line overhead through the attic. No jackhammering our tile floors! Cannot praise them enough.",
    author: "Rachel M.",
    location: "Drexel Heights Homeowner",
    serviceTag: "Electronic Slab Leak Detection",
    initials: "RM",
    avatarColor: "#059669",
    dateBadge: "Verified Homeowner",
  },
  {
    id: "chef-marcus",
    category: "commercial",
    rating: 5,
    title: "Grease interceptor & high-temp dish line experts.",
    quote:
      "Commercial kitchens put intense demand on plumbing. Shawn’s team redesigned our brewery floor drains and grease interceptor tie-in. Inspection passed on the very first round with zero citations from the county. If you run a food or beverage business in Tucson, call ACP.",
    author: "Chef Marcus L.",
    location: "Brewpub & Kitchen Owner",
    serviceTag: "Commercial Kitchen & Interceptor",
    initials: "ML",
    avatarColor: "#7c2d12",
    dateBadge: "Brewery Owner",
    ownerReply:
      "Cheers Marcus! Designing industrial-grade kitchen drains that sail through county health inspection is what we do best. Honored to keep the taps flowing.",
  },
];

const commitments = [
  {
    title: "100% Upfront & Honest Pricing",
    desc: "You approve the price before we start the work. No surprise surcharges or hidden dispatch add-ons.",
    icon: DollarSign,
    badge: "Flat-Rate Guarantee",
    accent: "from-blue-600 to-indigo-700",
  },
  {
    title: "Certified & Background-Checked Techs",
    desc: "Safety and professionalism at your door. Every technician undergoes drug screening and stringent criminal background vetting.",
    icon: UserCheck,
    badge: "100% Vetted",
    accent: "from-emerald-600 to-teal-700",
  },
  {
    title: "Clean Engineering",
    desc: "We treat your property like our own. We use floor protection, clean boots, and leave your space cleaner than we found it.",
    icon: Sparkles,
    badge: "Spotless Clean",
    accent: "from-amber-600 to-orange-600",
  },
  {
    title: "24/7 Rapid Response",
    desc: "Plumbing disasters don't wait for business hours. Our on-call master technicians respond around the clock across Tucson.",
    icon: Clock,
    badge: "Live 24/7 Dispatch",
    accent: "from-rose-600 to-cta",
  },
];

export function TestimonialsPageContent() {
  const [filter, setFilter] = useState<"all" | "residential" | "commercial">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [modalForm, setModalForm] = useState({
    name: "",
    email: "",
    location: "",
    serviceType: "residential",
    rating: 5,
    headline: "",
    reviewText: "",
  });

  const filteredTestimonials = testimonials.filter((t) => {
    if (filter === "all") return true;
    return t.category === filter;
  });

  const residentialCount = testimonials.filter((t) => t.category === "residential").length;
  const commercialCount = testimonials.filter((t) => t.category === "commercial").length;

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsModalOpen(false);
      setModalForm({
        name: "",
        email: "",
        location: "",
        serviceType: "residential",
        rating: 5,
        headline: "",
        reviewText: "",
      });
    }, 2500);
  };

  return (
    <div className="bg-white text-[#111111]">
      {/* ── 1. TRUST BAR (VISUAL ELEMENTS - PIXEL PERFECT & STANDALONE) ── */}
      <section className="py-8 sm:py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="mx-auto w-[92%] max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 1: 4.9 Star Rating */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-amber-400/50 transition-all flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Star className="h-6 w-6 text-amber-500 fill-amber-500" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-display font-black text-navy leading-none">
                    4.9
                  </span>
                  <div className="flex text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-700 mt-1.5 leading-snug">
                  Based on 1,000+ Verified Reviews
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Residential & Commercial Clients
                </p>
              </div>
            </div>

            {/* Card 2: Google Reviews */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-blue-400/50 transition-all flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                <svg className="h-6 w-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-navy tracking-tight">
                    Google Reviews
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="h-3 w-3" /> Verified
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-700 mt-1.5 leading-snug">
                  Top-Rated Plumbing Specialists in Tucson
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  Consistently 5-Star Rated Experience
                </p>
              </div>
            </div>

            {/* Card 3: ROC #321353 */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-emerald-400/50 transition-all flex items-start gap-4">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-navy tracking-tight">
                    Licensed, Bonded & Insured
                  </span>
                </div>
                <p className="text-xs font-bold text-slate-700 mt-1.5 leading-snug">
                  Arizona ROC #321353 · Shawn Hamilton
                </p>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                  State Compliant & Fully Bonded Since 1999
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. WHY OUR CLIENTS TRUST US ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative Column */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest text-primary mb-4">
                <Sparkle className="h-3.5 w-3.5 text-cta" />
                <span>Why Our Clients Trust Us</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
                The Difference is in the Details—and the Service
              </h2>

              <div className="mt-6 space-y-4 text-base text-slate-700 leading-relaxed font-medium">
                <p>
                  At American Commercial Plumbing LLC, we believe that a job isn't finished until the
                  customer is 100% satisfied. As a family-owned and operated business led by Shawn
                  Hamilton, we treat every home and commercial property with the same respect and
                  urgency we would our own.
                </p>
                <p>
                  From transparent, upfront pricing to background-checked technicians, we strive to make
                  every plumbing experience stress-free. But don't just take our word for it—hear from
                  the residents and business owners of Southern Arizona.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-slate-100">
                <a
                  href="tel:+15202212010"
                  className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-cta transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call (520) 221-2010</span>
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                >
                  <MessageSquarePlus className="w-4 h-4 text-electric" />
                  <span>Submit a Testimonial</span>
                </button>
              </div>
            </motion.div>

            {/* Right Stat Grid Card (Exact Brown Style) */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="rounded-3xl bg-[#F7F7F7] p-7 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary">
                      Southern Arizona Trust Metrics
                    </span>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                    Since 1999
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs">
                    <div className="text-3xl sm:text-4xl font-black font-display text-navy">25+</div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-600 mt-1">
                      Years Serving Tucson
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Continuous Operations</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs">
                    <div className="text-3xl sm:text-4xl font-black font-display text-emerald-600">98%</div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-600 mt-1">
                      Satisfaction Rate
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Over 1,000+ Clients</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs">
                    <div className="text-3xl sm:text-4xl font-black font-display text-amber-500">4.9★</div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-600 mt-1">
                      Google Rating
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Top-Ranked Tucson</p>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-2xl p-5 text-left shadow-2xs">
                    <div className="text-3xl sm:text-4xl font-black font-display text-cta">100%</div>
                    <p className="text-xs font-black uppercase tracking-wider text-slate-600 mt-1">
                      Upfront Pricing
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Zero Hidden Surcharges</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-semibold">
                  <span>ROC #321353 · Shawn Hamilton</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                    24/7 Dispatch Ready
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 3. FEATURED TESTIMONIALS (RESIDENTIAL & COMMERCIAL) ──────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header & Filter Pills */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
                Verified Feedback
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
                What Our Customers Say
              </h2>
              <p className="text-slate-600 text-sm mt-1 font-medium">
                Explore real experiences from homeowners and local businesses across Southern Arizona.
              </p>
            </div>

            {/* Filter Pills (Brown Style) */}
            <div className="flex items-center bg-white border border-slate-200 p-1.5 rounded-full shadow-2xs">
              <button
                onClick={() => setFilter("all")}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                  filter === "all"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-600 hover:text-navy"
                }`}
              >
                All Reviews ({testimonials.length})
              </button>
              <button
                onClick={() => setFilter("residential")}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === "residential"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-600 hover:text-navy"
                }`}
              >
                <Home className="h-3.5 w-3.5" />
                Residential ({residentialCount})
              </button>
              <button
                onClick={() => setFilter("commercial")}
                className={`px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                  filter === "commercial"
                    ? "bg-primary text-white shadow-xs"
                    : "text-slate-600 hover:text-navy"
                }`}
              >
                <Building2 className="h-3.5 w-3.5" />
                Commercial ({commercialCount})
              </button>
            </div>
          </div>

          {/* Testimonials Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
            <AnimatePresence mode="popLayout">
              {filteredTestimonials.map((t, index) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  className="rounded-3xl bg-white p-7 border border-slate-200 hover:border-cta/60 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  {/* Top: Stars + Verified Badge */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex text-amber-400 gap-0.5">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400" />
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        <BadgeCheck className="h-3.5 w-3.5 text-emerald-600" />
                        {t.dateBadge || "Verified Review"}
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-lg font-black text-navy tracking-tight group-hover:text-primary transition-colors mb-3">
                      "{t.title}"
                    </h3>

                    {/* Review Body */}
                    <div className="relative mb-5">
                      <Quote className="absolute -top-1 -left-1 h-5 w-5 text-slate-200 pointer-events-none" />
                      <p className="text-slate-700 text-sm leading-relaxed font-medium pl-4">
                        {t.quote}
                      </p>
                    </div>

                    {/* Service Tag */}
                    <div className="mb-5">
                      <span className="inline-flex items-center gap-1 bg-[#F7F7F7] border border-slate-200 text-slate-700 text-[11px] font-bold px-3 py-1 rounded-lg">
                        <Wrench className="h-3 w-3 text-primary" />
                        {t.serviceTag}
                      </span>
                    </div>

                    {/* Owner reply if available */}
                    {t.ownerReply && (
                      <div className="mb-5 bg-[#F7F7F7] border border-slate-200/90 rounded-2xl p-4 text-xs">
                        <div className="flex items-center gap-1.5 font-black text-primary mb-1 text-[10px] uppercase tracking-wider">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          Shawn Hamilton (Owner) Response:
                        </div>
                        <p className="text-slate-600 leading-relaxed italic font-medium">
                          "{t.ownerReply}"
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Bottom: Author metadata */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center font-black text-white text-xs shrink-0 shadow-sm"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-black text-navy leading-snug">{t.author}</p>
                      <p className="text-xs text-slate-500 font-medium">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── 4. OUR COMMITMENT TO YOU (4 PILLARS, EXACT BROWN STYLE) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
              Our Promise
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-navy tracking-tight">
              Experience the American Commercial Plumbing Difference
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              We are proud to maintain a 4.9-star average rating and a 98% customer satisfaction rate.
              When you choose us, you are choosing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {commitments.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-cta/60 hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${c.accent} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                        {c.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-navy tracking-tight group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {c.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-black text-emerald-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Guaranteed on Every Call</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. SHARE YOUR EXPERIENCE ───────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl bg-white p-8 sm:p-14 border border-slate-200 shadow-lg relative overflow-hidden">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1 text-xs font-black uppercase tracking-widest text-primary mb-4">
              <Sparkles className="h-3.5 w-3.5 text-cta" />
              <span>Share Your Experience</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-display font-black text-navy tracking-tight mb-4">
              We Value Your Feedback!
            </h2>

            <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed font-medium mb-8">
              Did our team recently help you with a plumbing issue? We would love to hear about your
              experience! Your feedback helps us continue to provide the highest level of service to the
              Tucson community and helps other homeowners and businesses find reliable plumbing experts.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {/* Button: Leave a Google Review */}
              <a
                href="https://search.google.com/local/writereview?placeid=ChIJAmericanCommercialPlumbing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-slate-50 text-navy font-black text-xs uppercase tracking-wider px-8 py-4 rounded-full border border-slate-300 shadow-sm transition-all active:scale-95 flex items-center gap-3 cursor-pointer group"
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
                <span>Leave a Google Review</span>
                <ExternalLink className="h-4 w-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Button: Submit a Testimonial */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-navy hover:bg-navy/90 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
              >
                <MessageSquarePlus className="h-4 w-4 text-electric" />
                <span>Submit a Testimonial</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. BOTTOM CALL TO ACTION (FOOTER BANNER, EXACT BROWN STYLE) ── */}
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-black uppercase tracking-widest mb-4 backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-cta" />
            <span>Tucson’s #1 Choice Since 1999</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight leading-tight">
            Ready to Experience 5-Star Service?
          </h2>

          <p className="mt-4 text-slate-200 text-sm sm:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied Tucson residents and business owners. Contact us today for fast,
            reliable, and honest plumbing solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+15202212010"
              className="bg-cta hover:brightness-110 text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>📞 Call (520) 221-2010</span>
            </a>

            <a
              href="/contact"
              className="bg-white hover:bg-slate-100 text-navy text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-cta" />
              <span>📅 Get Your Free Estimate</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-bold text-slate-300 uppercase tracking-wider">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              24/7 Emergency Dispatch
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              100% Upfront Pricing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              ROC #321353 Licensed & Insured
            </span>
          </div>
        </div>
      </section>

      {/* ── 7. INTERACTIVE "SUBMIT A TESTIMONIAL" MODAL (LIGHT THEME) ── */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              className="relative w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 text-left"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 h-9 w-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-navy transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="h-4 w-4" />
              </button>

              {submittedSuccess ? (
                <div className="py-12 text-center">
                  <div className="h-16 w-16 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <ThumbsUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black text-navy mb-2">Thank You For Your Review!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                    Shawn and our entire team greatly appreciate your trust. Your testimonial will be
                    reviewed and added to our wall of customer stories!
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-2">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      Client Feedback
                    </div>
                    <h3 className="text-2xl font-black text-navy">Share Your Story</h3>
                    <p className="text-xs text-slate-500 mt-1 font-medium">
                      Tell the Tucson community about your experience with American Commercial Plumbing.
                    </p>
                  </div>

                  <form onSubmit={handleModalSubmit} className="space-y-4">
                    {/* Rating Selector */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-600 mb-2">
                        Your Rating
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setModalForm({ ...modalForm, rating: star })}
                            className="p-1 cursor-pointer transition-transform hover:scale-110"
                          >
                            <Star
                              className={`h-7 w-7 ${
                                star <= modalForm.rating
                                  ? "text-amber-400 fill-amber-400"
                                  : "text-slate-200"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-bold text-slate-700 ml-2">
                          {modalForm.rating} of 5 Stars
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Maria G."
                          value={modalForm.name}
                          onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                          className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Location / Role *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tucson Homeowner"
                          value={modalForm.location}
                          onChange={(e) => setModalForm({ ...modalForm, location: e.target.value })}
                          className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Property Type
                        </label>
                        <select
                          value={modalForm.serviceType}
                          onChange={(e) =>
                            setModalForm({ ...modalForm, serviceType: e.target.value })
                          }
                          className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white"
                        >
                          <option value="residential">Residential Home</option>
                          <option value="commercial">Commercial Property / Business</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1.5">
                          Headline / Summary
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Fast, honest and professional"
                          value={modalForm.headline}
                          onChange={(e) => setModalForm({ ...modalForm, headline: e.target.value })}
                          className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Your Review *
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe what our technicians fixed and how your service went..."
                        value={modalForm.reviewText}
                        onChange={(e) =>
                          setModalForm({ ...modalForm, reviewText: e.target.value })
                        }
                        className="w-full bg-[#F7F7F7] border border-slate-200 rounded-xl px-3.5 py-2.5 text-sm font-medium text-navy focus:outline-none focus:border-primary focus:bg-white placeholder:text-slate-400 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 bg-cta hover:brightness-110 text-white font-black text-xs uppercase tracking-wider py-4 px-6 rounded-full shadow-cta transition-all cursor-pointer active:scale-95"
                      >
                        <Send className="h-4 w-4" />
                        <span>Submit My Testimonial</span>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
