import {
  ShieldCheck,
  Award,
  BadgeCheck,
  Star,
  FileCheck,
  Wrench,
} from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed Contractor" },
  { icon: BadgeCheck, label: "Fully Insured" },
  { icon: Award, label: "Workmanship Warranty" },
  { icon: FileCheck, label: "Bonded Business" },
  { icon: Star, label: "Google 5-Star" },
  { icon: Wrench, label: "Certified Technicians" },
  { icon: ShieldCheck, label: "BBB Accredited" },
  { icon: Award, label: "Tucson Chamber" },
];

export function TrustStrip() {
  const loop = [...items, ...items];
  return (
    <section className="border-y border-border bg-secondary/40 py-8 overflow-hidden">
      <div className="mx-auto w-[90%] max-w-7xl">
        <p className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Trusted, certified, and accredited
        </p>
        <div className="relative">
          <div className="flex gap-12 marquee w-max">
            {loop.map((it, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-navy/80 whitespace-nowrap"
              >
                <it.icon className="h-5 w-5 text-primary" />
                <span className="font-semibold tracking-tight">{it.label}</span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-secondary/80 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-secondary/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}
