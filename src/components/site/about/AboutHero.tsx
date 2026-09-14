import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Award, Clock, Star } from "lucide-react";
import teamImg from "@/assets/about-team.jpg";
import welImg from "@/assets/wel-img.jpg";

export function AboutHero() {
  const scrollToForm = () => {
    const el = document.getElementById("estimate-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/50">
      {/* Background Decorative Ambient Elements */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-44 right-10 w-96 h-96 bg-cta/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Breadcrumb & Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <a
            href="/"
            className="text-xs font-semibold text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <span>Home</span>
            <span className="text-slate-300">/</span>
          </a>
          <span className="text-xs font-bold text-primary tracking-wide">About Us</span>

          <span className="ml-auto inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>ROC #321353 · Bonded & Insured</span>
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-widest mb-5">
              <Star className="h-3.5 w-3.5 fill-current text-cta" />
              <span>About American Commercial Plumbing LLC</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-navy leading-[1.08] tracking-tight">
              Tucson’s Most{" "}
              <span className="text-gradient-brand underline decoration-cta/30 decoration-wavy decoration-2 underline-offset-8">
                Trusted
              </span>{" "}
              Plumbing Experts Since 1999.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Combining old-school integrity with modern technology to deliver the highest standard of
              commercial and residential plumbing services in Southern Arizona.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-4 rounded-2xl bg-cta text-white font-extrabold text-sm uppercase tracking-wider shadow-cta hover:brightness-110 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="h-4 w-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:+15202212010"
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-4 rounded-2xl bg-white border border-slate-200/80 text-navy font-extrabold text-sm uppercase tracking-wider shadow-sm hover:border-primary/40 hover:bg-slate-50/80 transition-all duration-300"
              >
                <div className="h-7 w-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span>Call (520) 221-2010</span>
              </motion.a>
            </div>

            {/* Micro Trust Stats */}
            <div className="mt-10 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-navy leading-none">25+</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Years in Tucson
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-navy leading-none">ROC #321353</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Licensed & Insured
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cta/10 text-cta flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-navy leading-none">24/7</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Emergency Line
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Premium Layered Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Primary Hero Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-2xl bg-white p-2">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative">
                <img
                  src={aboutTeamImageFallback(welImg, teamImg)}
                  alt="American Commercial Plumbing LLC Team and Craftsmanship"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                {/* Overlay Card on Primary Image */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark text-white border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-electric">
                        Leadership & Heritage
                      </p>
                      <h4 className="text-base font-bold text-white mt-0.5">
                        Shawn Holton, Founder
                      </h4>
                      <p className="text-xs text-white/70 mt-0.5 font-medium">
                        Leading Southern Arizona plumbing with integrity since 1999
                      </p>
                    </div>
                    <div className="h-11 w-11 rounded-xl bg-cta/20 border border-cta/30 flex items-center justify-center text-cta shrink-0 font-black text-sm">
                      ACP
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlapping Floating Badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-4 sm:-right-6 glass rounded-2xl p-4 sm:p-5 border border-white/60 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black text-base shadow-sm">
                  100%
                </div>
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-navy">
                    Upfront & Honest
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Zero Hidden Fees Guarantee
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Bottom Left Badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-6 -left-4 sm:-left-6 glass rounded-2xl p-4 border border-white/60 shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-primary text-white flex items-center justify-center">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs font-black text-navy uppercase tracking-wider">
                    Commercial Grade
                  </div>
                  <div className="text-[11px] text-slate-500 font-medium">
                    Standard for Every Tucson Home
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function aboutTeamImageFallback(img1: string, img2: string) {
  return img1 || img2;
}
