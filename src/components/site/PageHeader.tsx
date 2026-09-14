import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  badge,
  title,
  subtitle,
  backTo,
  backLabel,
}: {
  eyebrow?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  backTo?: string;
  backLabel?: string;
}) {
  const displayEyebrow = eyebrow || badge;
  return (
    <section className="relative isolate overflow-hidden bg-[#07132b] pt-32 sm:pt-40 pb-20 sm:pb-28 text-white">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
        >
          <source
            src="https://res.cloudinary.com/ki6vfkhw/video/upload/v1789399007/acp-plumbing.mov"
            type="video/quicktime"
          />
          <source
            src="https://res.cloudinary.com/ki6vfkhw/video/upload/v1789399007/acp-plumbing.mov"
            type="video/mp4"
          />
        </video>
        {/* Deep layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07132b]/70 via-[#07132b]/85 to-[#07132b]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-cta/10" />
      </div>

      {/* Ambient glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-56 w-56 rounded-full bg-cta/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-electric/15 blur-3xl" />
      </div>

      {/* Dot grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, #2b84ff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {displayEyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest text-cta-foreground mb-7 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cta animate-pulse" />
              <span>{displayEyebrow}</span>
            </div>
          )}
          <h1 className="font-display text-3xl sm:text-5xl lg:text-[56px] font-black leading-tight tracking-tight text-white mb-5 max-w-4xl mx-auto">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Decorative bottom divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-cta/70 to-transparent"
        />
      </div>
    </section>
  );
}
