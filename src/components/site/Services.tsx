import { motion } from "framer-motion";
import {
  ArrowRight,
  Home,
  Building2,
  Siren,
  Flame,
  GitBranch,
  Waves,
  ScanSearch,
  Wrench,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

import resi from "@/assets/service-residential.jpg";
import comm from "@/assets/service-commercial.jpg";
import emer from "@/assets/service-emergency.jpg";
import wh from "@/assets/service-waterheater.jpg";
import sewer from "@/assets/service-sewer.jpg";
import drain from "@/assets/service-drain.jpg";
import leak from "@/assets/service-leak.jpg";
import repipe from "@/assets/service-repiping.jpg";

const services = [
  {
    title: "Residential Plumbing",
    desc: "Premium repairs, full repiping, and bathroom remodeling for Tucson homes.",
    img: resi,
    icon: Home,
  },
  {
    title: "Commercial Plumbing",
    desc: "High-capacity drainage, main lines, and water systems built for business.",
    img: comm,
    icon: Building2,
  },
  {
    title: "Emergency Repairs",
    desc: "Rapid 24/7 dispatching for leak containment and pipe blockages.",
    img: emer,
    icon: Siren,
  },
  {
    title: "Water Heater Services",
    desc: "Eco-friendly tankless installs, replacement, and system flushes.",
    img: wh,
    icon: Flame,
  },
  {
    title: "Sewer Line Repair",
    desc: "Camera inspections, drain scoping, and trenchless pipe relining.",
    img: sewer,
    icon: GitBranch,
  },
  {
    title: "Drain Cleaning",
    desc: "Hydro-jetting solutions that strip grease and roots from lines.",
    img: drain,
    icon: Waves,
  },
  {
    title: "Leak Detection",
    desc: "Non-destructive acoustic and thermal leak tracking technology.",
    img: leak,
    icon: ScanSearch,
  },
  {
    title: "Repiping Services",
    desc: "Complete plumbing repiping with premium PEX and durable copper.",
    img: repipe,
    icon: Wrench,
  },
];

export function Services() {
  const topItems = services.slice(0, 3);
  const slideItems = [...services.slice(3), ...services.slice(3)];

  return (
    <section
      id="services"
      className="relative py-[60px] bg-secondary/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        {/* Top Header Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
            className="lg:col-span-5"
          >
            <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Service Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold leading-tight text-navy tracking-tight capitalize">
              Expert{" "}
              <span className="text-gradient-brand">plumbing services</span>{" "}
              done right.
            </h2>
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed font-semibold">
              American Commercial Plumbing delivers durable, certified plumbing
              operations to Tucson houses and commercial centers. From emergency
              main line fixes to standard remodeling, we guarantee flawless
              outcomes.
            </p>
            <div className="mt-8">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center gap-2 bg-navy hover:bg-primary text-white rounded-xl px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                Request Free Estimate
                <ArrowRight className="w-4 h-4 text-electric" />
              </motion.a>
            </div>
          </motion.div>

          {/* Top 3 Featured Grid Items */}
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-6">
            {topItems.map((s, idx) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 20,
                  delay: idx * 0.08,
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className="group relative rounded-3xl overflow-hidden bg-neutral-950 h-[340px] border border-white/10 cursor-pointer transition-all duration-300 hover:border-primary/30 [will-change:transform]"
              >
                {/* Background image */}
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out [will-change:transform]"
                  loading="lazy"
                />

                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-transparent group-hover:via-navy/85 transition-all duration-500" />

                {/* Card Icon */}
                <div className="absolute top-5 left-5 grid place-items-center h-12 w-12 rounded-2xl bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:border-primary/20 transition-colors duration-300">
                  <s.icon className="h-5 w-5 text-electric group-hover:text-white" />
                </div>

                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 h-full text-left">
                  <div className="flex flex-col gap-1.5 transition-all duration-500 group-hover:-translate-y-1">
                    <h3 className="text-sm font-display font-black text-white leading-tight uppercase tracking-wider">
                      {s.title}
                    </h3>

                    {/* Hover detail drawer */}
                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2">
                      <p className="text-[11px] text-white/70 leading-relaxed mt-1 font-semibold">
                        {s.desc}
                      </p>
                      <div className="pt-2">
                        <a
                          href="#contact"
                          className="relative inline-flex items-center gap-1.5 text-cta font-bold text-[9px] uppercase tracking-wider pb-0.5"
                        >
                          <span>Get Service</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-cta" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel slide showcase */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
            delay: 0.1,
          }}
          className="relative px-2 md:px-0"
        >
          <Carousel
            plugins={[
              AutoScroll({
                speed: 0.8,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-6 [will-change:transform]">
              {slideItems.map((s, idx) => (
                <CarouselItem
                  key={`${s.title}-${idx}`}
                  className="pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 [will-change:transform]"
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="group relative rounded-3xl overflow-hidden bg-neutral-950 h-[340px] border border-white/10 cursor-pointer transition-all duration-300 hover:border-primary/30 [will-change:transform]"
                  >
                    {/* Background image */}
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out [will-change:transform]"
                      loading="lazy"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/55 to-transparent group-hover:via-navy/85 transition-all duration-500" />

                    {/* Card Icon */}
                    <div className="absolute top-5 left-5 grid place-items-center h-12 w-12 rounded-2xl bg-white/20 text-white border border-white/20 group-hover:bg-primary group-hover:border-primary/20 transition-colors duration-300">
                      <s.icon className="h-5 w-5 text-electric group-hover:text-white" />
                    </div>

                    {/* Card Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 h-full text-left">
                      <div className="flex flex-col gap-1.5 transition-all duration-500 group-hover:-translate-y-1">
                        <h3 className="text-sm font-display font-black text-white leading-tight uppercase tracking-wider">
                          {s.title}
                        </h3>

                        {/* Hover detail drawer */}
                        <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[140px] group-hover:opacity-100 transition-all duration-500 ease-out space-y-2">
                          <p className="text-[11px] text-white/70 leading-relaxed mt-1 font-semibold">
                            {s.desc}
                          </p>
                          <div className="pt-2">
                            <a
                              href="#contact"
                              className="relative inline-flex items-center gap-1.5 text-cta font-bold text-[9px] uppercase tracking-wider pb-0.5"
                            >
                              <span>Get Service</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-cta" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
