import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import reel1 from "@/assets/reel-1.mp4.asset.json";
import reel2 from "@/assets/reel-2.mp4.asset.json";
import reel3 from "@/assets/reel-3.mp4.asset.json";
import reel4 from "@/assets/reel-4.mp4.asset.json";

/**
 * Reels section.
 * To swap in the client's real Reels, replace the `src` values below
 * (and optionally poster images) — layout and behavior stay the same.
 */
const reels = [
  { src: reel1.url, label: "Herringbone oak, set by hand" },
  { src: reel2.url, label: "Architectural shingles, golden hour" },
  { src: reel3.url, label: "Large-format porcelain, primary bath" },
  { src: reel4.url, label: "Walnut cabinetry, final finish" },
];

function ReelCard({
  src,
  label,
  index,
  active,
  onFocus,
}: {
  src: string;
  label: string;
  index: number;
  active: boolean;
  onFocus: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    if (next) v.play().catch(() => {});
    setMuted(next);
  };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onClick={onFocus}
      className={`group relative aspect-[9/16] w-[62vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-md transition-all duration-500 ease-out sm:w-[240px] md:w-[260px] ${
        active
          ? "scale-100 opacity-100 shadow-lift md:-translate-y-6"
          : "scale-[0.94] opacity-70 shadow-frame hover:opacity-100 hover:scale-[0.97]"
      }`}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />
      <figcaption className="pointer-events-none absolute bottom-4 left-4 right-4 text-left">
        <span className="text-[0.6rem] uppercase tracking-[0.25em] text-bone/70">
          Reel {String(index + 1).padStart(2, "0")}
        </span>
        <p className="mt-1 font-display text-lg leading-snug text-bone">
          {label}
        </p>
      </figcaption>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          toggleSound();
        }}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-bone/30 bg-forest-deep/70 text-bone opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100 focus-visible:opacity-100"
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </motion.figure>
  );
}

export function Reels() {
  const [active, setActive] = useState(1);

  return (
    <section
      id="reels"
      className="relative overflow-hidden bg-background py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="eyebrow text-verdigris">Reels</p>
            <h2 className="mt-5 max-w-xl text-[clamp(2rem,5vw,4rem)] leading-[1.02] text-foreground">
              See the craftsmanship in <em className="italic">motion</em>.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Short clips from active job sites — flooring, roofing, tile and
            millwork — captured as the work happens.
          </p>
        </motion.div>
      </div>

      <div className="mt-14 overflow-hidden">
        <div
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[19vw] pb-10 pt-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:gap-8"
        >
          {reels.map((reel, i) => (
            <ReelCard
              key={reel.src}
              src={reel.src}
              label={reel.label}
              index={i}
              active={active === i}
              onFocus={() => setActive(i)}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2">
          {reels.map((reel, i) => (
            <button
              key={reel.src}
              type="button"
              aria-label={`Go to reel ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-8 bg-verdigris" : "w-1.5 bg-foreground/20 hover:bg-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
