import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";

const projects = [
  {
    img: p1,
    w: 1280,
    h: 1600,
    title: "Queen Anne Kitchen",
    meta: "Full gut · 620 sq ft · 2025",
    text: "Hand-built inset cabinetry in deep green with honed marble and aged brass.",
    span: "md:col-span-7",
    offset: "md:mt-0",
  },
  {
    img: p2,
    w: 1280,
    h: 1600,
    title: "Madrona Primary Bath",
    meta: "Spa suite · 210 sq ft · 2025",
    text: "Book-matched stone, curbless shower and radiant limestone floors.",
    span: "md:col-span-5",
    offset: "md:mt-28",
  },
  {
    img: p3,
    w: 1600,
    h: 1100,
    title: "Bellevue Great Room",
    meta: "Whole home · 3,400 sq ft · 2024",
    text: "Structural reframe opening the main floor to the treeline beyond.",
    span: "md:col-span-12",
    offset: "md:mt-10",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-background py-24 md:py-36">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-verdigris">Selected work</p>
            <h2 className="mt-5 text-[clamp(2rem,5vw,4rem)] leading-[1.02]">
              Projects that hold up
              <span className="block italic text-forest/70">close-up.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-forest"
          >
            Plan yours
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
              className={`group ${p.span} ${p.offset}`}
            >
              <div className="relative overflow-hidden rounded-sm bg-forest-deep shadow-frame">
                <img
                  src={p.img}
                  alt={p.title}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,oklch(0.18_0.03_166/0.85)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <p className="eyebrow text-verdigris">{p.meta}</p>
                  <h3 className="mt-2 text-2xl text-bone md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-bone/65 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {p.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
