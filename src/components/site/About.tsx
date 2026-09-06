import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yWord = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const yImg = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-background py-28 md:py-40"
    >
      <motion.div
        style={{ y: yWord }}
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 select-none text-center font-display text-[clamp(5rem,22vw,20rem)] leading-none text-forest/[0.07]"
      >
        CRAFT
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          <motion.div
            style={{ y: yImg }}
            className="relative md:col-span-5 md:col-start-1"
          >
            <motion.img
              initial={{ opacity: 0, scale: 1.06 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              src={about1}
              alt="Pavlo Deinega reviewing plans on site"
              width={1100}
              height={1400}
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-lift"
            />
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              src={about2}
              alt="Hand-finished walnut cabinetry detail"
              width={1200}
              height={900}
              loading="lazy"
              className="absolute -bottom-14 right-[-8%] hidden w-[62%] rounded-sm border-4 border-background object-cover shadow-lift sm:block"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-6 md:col-start-7 md:pt-24"
          >
            <p className="eyebrow text-verdigris">The studio</p>
            <h2 className="mt-5 text-[clamp(2rem,4.6vw,3.75rem)] leading-[1.05]">
              A small shop that
              <span className="block italic text-forest/70">
                refuses to rush.
              </span>
            </h2>
            <div className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                Deinega Remodel began with one carpenter, a truck and a
                stubborn belief that a remodel should be quiet, clean and
                exactly on schedule. Nearly two decades later we still run
                one project lead per home, from first sketch to final walk.
              </p>
              <p>
                We build across Seattle and the Eastside — Craftsman kitchens
                in Wallingford, hillside great rooms in Bellevue, spa baths in
                Madrona. Same crew, same standard, whatever the address.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {[
                ["In-house", "Carpentry & tile"],
                ["Weekly", "Client updates"],
                ["Licensed", "Bonded & insured"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl text-forest">{v}</div>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-12 font-display text-2xl leading-snug text-forest md:text-3xl">
              &ldquo;If it wouldn&rsquo;t pass in my own house, it doesn&rsquo;t
              pass here.&rdquo;
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Pavlo Deinega — Founder
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
