import { motion } from "motion/react";
import { ArrowDownRight, MapPin } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

const stats = [
  { value: "18+", label: "Years building" },
  { value: "240", label: "Homes transformed" },
  { value: "100%", label: "Seattle-based crews" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Cinematic view of a remodeled Seattle home interior at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.16_0.03_166/0.82)_0%,oklch(0.16_0.03_166/0.55)_45%,oklch(0.16_0.03_166/0.95)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1400px] flex-col justify-end px-6 pb-14 pt-32 md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="eyebrow flex items-center gap-2 text-bone/60"
        >
          <MapPin className="h-3.5 w-3.5" /> Seattle, Washington
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-5xl text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.92] text-bone"
        >
          Homes rebuilt with
          <span className="block italic text-verdigris">quiet precision.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-10 flex flex-col gap-10 border-t border-bone/15 pt-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-sm leading-relaxed text-bone/70">
            Deinega Remodel is a Seattle design-build studio crafting kitchens,
            baths and whole-home renovations for people who notice the details.
          </p>

          <div className="flex flex-wrap items-center gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-bone">{s.value}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-bone/45">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center justify-between gap-6 rounded-sm bg-verdigris px-7 py-5 text-sm font-medium tracking-wide text-bone transition-colors hover:bg-bone hover:text-forest-deep"
          >
            Start your project
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
