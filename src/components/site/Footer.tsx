import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/logo.png";

// Inline SVG Social Icons for maximum reliability (avoiding version mismatch in lucide-react)
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: TwitterIcon, href: "#", label: "Twitter" },
  { icon: LinkedinIcon, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/projects" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Request Estimate", href: "/request-estimate" },
  { label: "Contact", href: "/contact" },
];

const servicesLinks = [
  { label: "Residential Plumbing", href: "/residential-plumbing" },
  { label: "Commercial Plumbing", href: "/commercial-plumbing" },
  { label: "Emergency Services", href: "/emergency-repairs" },
  { label: "Water Heaters", href: "/water-heaters" },
  { label: "Sewer Repair", href: "/sewer-line-inspection" },
  { label: "Drain Cleaning & Jetting", href: "/drain-cleaning" },
  { label: "Leak Detection & Repair", href: "/leak-detection" },
  { label: "Repiping & Gas Lines", href: "/repiping-gas-lines" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#050b1a] text-white overflow-hidden border-t border-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-40 right-10 w-[350px] h-[350px] bg-electric/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="relative mx-auto w-[90%] max-w-7xl pt-14 sm:pt-20 lg:pt-24 pb-[20px] z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10">

          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4">
            <div className="flex items-center">
              <img
                src={logo}
                alt="American Commercial Plumbing LLC Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm font-semibold">
              Tucson's premier commercial & residential plumbing specialists.
              Delivering licensed, bonded, and guaranteed plumbing solutions across Southern Arizona since 1999.
            </p>

            {/* Socials row */}
            <div className="mt-8 flex gap-3 select-none">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, scale: 1.05, backgroundColor: "rgba(43, 132, 255, 0.15)", borderColor: "rgba(43, 132, 255, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center h-10 w-10 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-colors shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-2 select-none">
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ROC #321353
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Licensed & Bonded
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                A+ BBB Rated
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <Col title="Quick Links" items={quickLinks} />

          {/* Services Column */}
          <Col title="Our Services" items={servicesLinks} />

          {/* Contact & Hours Column (4-span grid layout subsplit) */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6">

            {/* Contact Details */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                Contact Us
              </div>
              <ul className="space-y-4.5 text-sm">
                <li>
                  <a
                    href="tel:+15202212010"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-electric group-hover:bg-electric/10 group-hover:border-electric/30 transition-all shrink-0">
                      <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5">(520) 221-2010</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:shawn@acptucson.com"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-electric group-hover:bg-electric/10 group-hover:border-electric/30 transition-all shrink-0">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5 text-wrap break-all">shawn@acptucson.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=226+E+Forrest+Feezor+St,+Vail,+AZ+85641"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-electric group-hover:bg-electric/10 group-hover:border-electric/30 transition-all shrink-0">
                      <MapPin className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Office</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5 leading-snug">
                        226 E Forrest Feezor St<br />
                        Vail, AZ 85641
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours Info */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                Service Hours
              </div>
              <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5">
                <span className="text-cta font-black uppercase tracking-wider block mb-3 text-[10px] flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cta opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cta"></span>
                  </span>
                  Emergency Line Active
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  We are available 24/7 for emergency dispatches across Tucson.<br /><br />
                  <span className="text-white block font-bold mb-1">Standard Office:</span>
                  Mon–Fri: 7:00 AM – 4:00 PM<br />
                  Sat–Sun: Emergency Dispatch
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copy/Trademark Row with Back to Top trigger */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <p className="text-xs text-slate-500 font-semibold">
            © {new Date().getFullYear()} American Commercial Plumbing LLC. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-slate-500 font-semibold hidden sm:block">
              ROC #321353 · Licensed, Bonded & Insured
            </p>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-slate-400 hover:text-white transition-colors font-bold flex items-center gap-2 cursor-pointer select-none"
            >
              <span>Back to Top</span>
              <ArrowRight className="h-4 w-4 -rotate-90 text-electric" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-5 sm:mb-6">
        {title}
      </div>
      <ul className="space-y-3.5 sm:space-y-4">
        {items.map(({ label, href }) => (
          <li key={label}>
            <motion.a
              whileHover={{ x: 4, color: "#2b84ff" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors block font-semibold"
            >
              {label}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}
