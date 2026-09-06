import { useState } from "react";
import { motion } from "motion/react";
import { ChefHat, Bath, Home, Hammer, Trees, Ruler } from "lucide-react";

const services = [
  {
    n: "01",
    title: "Kitchen Remodeling",
    icon: ChefHat,
    text: "Custom cabinetry, stone fabrication and lighting design engineered around how you actually cook.",
  },
  {
    n: "02",
    title: "Bathroom & Spa",
    icon: Bath,
    text: "Wet-room detailing, radiant floors and slab work with waterproofing done to the millimetre.",
  },
  {
    n: "03",
    title: "Whole-Home Renovation",
    icon: Home,
    text: "Full gut renovations for Craftsman, mid-century and modern Seattle homes — one crew, one timeline.",
  },
  {
    n: "04",
    title: "Additions & Structural",
    icon: Hammer,
    text: "Dormers, ADUs and load-bearing reworks permitted and engineered in-house.",
  },
  {
    n: "05",
    title: "Exteriors & Decks",
    icon: Trees,
    text: "Cedar siding, rain screens and covered outdoor rooms built for Northwest weather.",
  },
  {
    n: "06",
    title: "Design & Permitting",
    icon: Ruler,
    text: "Drawings, 3D walkthroughs and city permitting handled before a single wall comes down.",
  },
];

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="ink-panel grain relative overflow-hidden py-24 md:py-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-verdigris">What we build</p>
            <h2 className="mt-5 max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[1.02] text-bone">
              Six disciplines, one <em className="italic">standard</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/55">
            Every project runs through the same in-house team of carpenters,
            tile setters and finish specialists — no rotating subcontractors.
          </p>
        </div>

        <div className="mt-16 border-t border-bone/12">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isActive = active === i;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.06 }}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative border-b border-bone/12"
              >
                <div
                  className={`absolute inset-0 origin-left bg-verdigris/12 transition-transform duration-500 ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
                <div className="relative flex flex-col gap-4 px-1 py-8 md:flex-row md:items-center md:gap-10 md:py-10">
                  <span className="font-display text-sm text-verdigris md:w-16">
                    {s.n}
                  </span>
                  <div className="flex items-center gap-4 md:w-[38%]">
                    <Icon className="h-5 w-5 shrink-0 text-bone/50" />
                    <h3 className="text-2xl text-bone md:text-3xl">{s.title}</h3>
                  </div>
                  <p className="max-w-xl flex-1 text-sm leading-relaxed text-bone/55 md:pl-6">
                    {s.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
