import { motion } from "framer-motion";

export function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none select-none">
      {/* Warm Orange/CTA glow blob */}
      <div
        className="absolute -top-40 -left-20 w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-cta/8 blur-[100px] sm:blur-[130px] animate-morph-blob"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      />

      {/* Electric Blue blob */}
      <div
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] sm:w-[550px] sm:h-[550px] rounded-full bg-electric/6 blur-[90px] sm:blur-[120px] animate-morph-blob-slow"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      />

      {/* Deep Royal Primary blob */}
      <div
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-primary/6 blur-[110px] sm:blur-[140px] animate-morph-blob-delay"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      />

      {/* Subtle additional accent blob near footer */}
      <div
        className="absolute -bottom-20 -right-20 w-[350px] h-[350px] rounded-full bg-cta/6 blur-[80px] sm:blur-[110px] animate-morph-blob"
        style={{ transform: "translate3d(0,0,0)", willChange: "transform" }}
      />
    </div>
  );
}
