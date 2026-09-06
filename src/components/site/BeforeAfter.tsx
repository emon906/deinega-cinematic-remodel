import { useCallback, useRef, useState } from "react";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  return (
    <section
      id="before-after"
      className="ink-panel grain relative overflow-hidden py-24 md:py-36"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-verdigris">Before &amp; after</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2rem,5vw,4rem)] leading-[1.02] text-bone">
              Drag to see the <em className="italic">difference</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-bone/55">
            A 1978 Ballard kitchen taken down to studs and rebuilt in nine
            weeks — new layout, structure, lighting and cabinetry.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14"
        >
          <div
            ref={ref}
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              setFromClientX(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerLeave={() => (dragging.current = false)}
            className="relative aspect-[16/11] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-sm shadow-lift"
          >
            <img
              src={afterImg}
              alt="Kitchen after the remodel"
              width={1600}
              height={1100}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src={beforeImg}
                alt="Kitchen before the remodel"
                width={1600}
                height={1100}
                loading="lazy"
                className="absolute inset-0 h-full w-full max-w-none object-cover"
                style={{ width: ref.current?.offsetWidth ?? "100vw" }}
              />
              <span className="absolute left-4 top-4 rounded-sm bg-forest-deep/80 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-bone/80 md:left-6 md:top-6">
                Before
              </span>
            </div>
            <span className="absolute right-4 top-4 rounded-sm bg-verdigris/90 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.25em] text-bone md:right-6 md:top-6">
              After
            </span>

            <div
              className="absolute inset-y-0 w-px bg-bone/80"
              style={{ left: `${pos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-bone/40 bg-forest-deep/85 backdrop-blur">
                <MoveHorizontal className="h-5 w-5 text-bone" />
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-bone/12 pt-8 md:grid-cols-4">
            {[
              ["9 weeks", "On-site duration"],
              ["1978", "Original build"],
              ["Ballard", "Neighborhood"],
              ["Zero", "Change orders"],
            ].map(([v, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-bone">{v}</div>
                <div className="mt-1 text-[0.7rem] uppercase tracking-[0.2em] text-bone/45">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
