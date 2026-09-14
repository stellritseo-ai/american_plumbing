import { motion } from "framer-motion";
import { Wrench, HeartHandshake, ShieldCheck, CheckCircle2, Quote } from "lucide-react";
import teamPhoto from "@/assets/about-team.jpg";

export function OurStory() {
  const storyPoints = [
    {
      title: "Clean Engineering & Craftsmanship",
      description: "Rooted in precision pipework, durable materials, and zero-compromise mechanical standards.",
    },
    {
      title: "Commercial-Grade for Every Home",
      description: "Industrial strength, heavy-duty durability, and safety standards brought right to your family's front door.",
    },
    {
      title: "Deeply Rooted Tucson Neighbors",
      description: "Over 25 years actively protecting the water supply, homes, and businesses of Southern Arizona.",
    },
  ];

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Story Image */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-xl">
              <img
                src={teamPhoto}
                alt="American Commercial Plumbing LLC Team Work & Tools"
                className="w-full h-auto object-cover aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

              {/* Founder Spotlight Card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-800">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Quote className="h-6 w-6 text-cta" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold italic text-slate-700 leading-relaxed">
                      "Commercial grade quality shouldn't just be for big corporations. Every family in
                      Tucson deserves durable, clean, and honest plumbing."
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="text-sm font-black text-navy uppercase tracking-wider">
                          Shawn Holton
                        </div>
                        <div className="text-[11px] font-bold text-primary">
                          Founder & Owner, American Commercial Plumbing LLC
                        </div>
                      </div>
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
                        Since 1999
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Pill */}
            <div className="absolute -top-4 -left-4 sm:-left-6 glass rounded-2xl px-5 py-4 border border-white/80 shadow-lg hidden sm:flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-cta text-white flex items-center justify-center">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-navy">
                  25+ Years Legacy
                </div>
                <div className="text-[11px] text-slate-500 font-medium">Southern AZ Heritage</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cta/10 border border-cta/20 text-cta text-xs font-extrabold uppercase tracking-widest mb-4">
              <HeartHandshake className="h-3.5 w-3.5" />
              <span>Our Story</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy leading-tight tracking-tight">
              A Legacy of Craftsmanship & Community Trust
            </h2>

            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                <strong className="text-navy font-bold">American Commercial Plumbing LLC</strong> is a
                family-run enterprise proudly founded and led by owner{" "}
                <span className="text-primary font-bold">Shawn Holton</span>. For over two decades, we
                have been a staple in the Tucson community, building a reputation not just on the
                quality of our pipes and fixtures, but on the foundation of clean engineering,
                integrity, and client satisfaction.
              </p>

              <p>
                What started as a commitment to doing the job right has grown into a full-service
                operation capable of handling everything from minor residential repairs to complex
                commercial infrastructure. At American Commercial Plumbing, we believe that{" "}
                <span className="text-navy font-bold underline decoration-primary decoration-2 underline-offset-4">
                  "commercial grade" quality shouldn't just be for businesses
                </span>
                —it should be the standard for every home and family we serve.
              </p>

              <p>
                We are more than just plumbers; we are your neighbors. We are deeply rooted in Tucson
                and Southern Arizona, and we take pride in protecting the health and safety of our
                community’s water systems.
              </p>
            </div>

            {/* Key Value Highlights */}
            <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
              {storyPoints.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="h-6 w-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-medium mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500 bg-slate-100 px-4 py-2 rounded-xl">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span>Arizona Registrar of Contractors ROC #321353</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
