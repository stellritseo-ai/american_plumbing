import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";
import p7 from "@/assets/service-sewer.jpg";

const projects = [
  {
    img: p1,
    title: "Modern Kitchen Repipe",
    cat: "Residential",
    span: "row-span-2",
  },
  { img: p2, title: "Restaurant Buildout", cat: "Commercial", span: "" },
  { img: p3, title: "Underground Main Line", cat: "Repairs", span: "" },
  {
    img: p4,
    title: "Luxury Bath Remodel",
    cat: "Installations",
    span: "row-span-2",
  },
  { img: p5, title: "Office Water System", cat: "Commercial", span: "" },
  { img: p6, title: "Tankless Heater Install", cat: "Installations", span: "" },
  { img: p7, title: "Sewer Main Replacement", cat: "Repairs", span: "" },
];

const categories = [
  "All",
  "Commercial",
  "Residential",
  "Repairs",
  "Installations",
];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="relative py-[60px] bg-[#fafbfe]/40 border-b border-slate-100">
      <div className="mx-auto w-[90%] max-w-7xl">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
              Featured Projects
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-bold text-navy tracking-tight text-balance">
              Featured <span className="text-gradient-brand">Work</span> Across Tucson.
            </h2>
          </div>
          
          {/* Category Filter Menu Capsule */}
          <div className="flex flex-wrap gap-1.5 items-center bg-slate-100/80 backdrop-blur p-1 rounded-full border border-slate-200/50 select-none">
            {categories.map((c) => (
              <motion.button
                key={c}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilter(c)}
                className={`px-4.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider cursor-pointer relative overflow-hidden transition-all duration-300 ${
                  filter === c
                    ? "text-white shadow-sm font-extrabold"
                    : "text-slate-500 hover:text-navy hover:bg-slate-200/40"
                }`}
              >
                {filter === c && (
                  <motion.span
                    layoutId="active-filter-bg"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-[220px] gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                role="button"
                tabIndex={0}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 26,
                  opacity: { duration: 0.25 },
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => setSelectedImg(p.img)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedImg(p.img);
                  }
                }}
                className={`group relative overflow-hidden rounded-3xl shadow-soft cursor-pointer border border-neutral-200/20 transition-[box-shadow,border-color] duration-300 ${p.span}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-95 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Premium glass card drawer */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-2xl bg-navy/40 backdrop-blur-md border border-white/10 shadow-lg translate-y-3 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-sky-400">
                    {p.cat}
                  </div>
                  <div className="mt-1.5 flex items-center justify-between gap-3">
                    <h3 className="text-base font-display font-bold text-white leading-tight">
                      {p.title}
                    </h3>
                    <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 shrink-0 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-cyan-500 group-hover:border-transparent transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="h-4 w-4 text-white transition-transform duration-500 group-hover:rotate-45" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <motion.a
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 18 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-blue-600 px-7 py-3.5 font-bold uppercase tracking-wider text-xs text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Projects <ArrowUpRight className="h-4 w-4" />
          </motion.a>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-navy/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full border border-white/10 transition-all duration-300 shadow-sm cursor-pointer z-50"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Wrapper */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative max-w-5xl max-h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img
                src={selectedImg}
                alt="Zoomed Project Work"
                className="w-full h-full object-contain max-h-[85vh]"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
