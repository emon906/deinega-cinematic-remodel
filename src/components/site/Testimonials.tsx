import { motion } from "motion/react";
import {
  TestimonialsColumn,
  type Testimonial,
} from "@/components/ui/testimonials-columns-1";

const testimonials: Testimonial[] = [
  {
    text: "Deinega gutted our 1920s Queen Anne kitchen and somehow kept the character intact. The cabinetry fit is flawless and they finished two days early.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
    name: "Briana Patel",
    role: "Homeowner, Queen Anne",
  },
  {
    text: "We interviewed five contractors. Pavlo was the only one who walked the crawlspace before quoting. That honesty carried through the whole build.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
    name: "Marcus Hale",
    role: "Whole-home remodel, Madrona",
  },
  {
    text: "Our primary bath is genuinely spa-level. The tile layout, the radiant floor, the lighting scenes — every detail was drawn before demo started.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces",
    name: "Elena Voss",
    role: "Bathroom renovation, Ballard",
  },
  {
    text: "They handled permitting for our ADU end to end. Weekly updates, clean site every Friday, and the budget landed within one percent.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
    name: "Daniel Okafor",
    role: "ADU addition, Greenwood",
  },
  {
    text: "Living through a renovation with two kids was my worst fear. Their crew dust-walled everything and treated our house like their own.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
    name: "Sofia Marchetti",
    role: "Kitchen + living, Wallingford",
  },
  {
    text: "As an architect I'm picky about execution. Their millwork and tile setters are the best I've specified to in Seattle.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=faces",
    name: "Owen Brady",
    role: "Architect, collaborating partner",
  },
  {
    text: "Structural work on a hillside lot terrified us. They engineered it, permitted it, and the great room now opens straight to the trees.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=faces",
    name: "Hannah Ruiz",
    role: "Homeowner, Bellevue",
  },
  {
    text: "Two years later there isn't a single settled joint or grout crack. That's the part you only find out long after the photos.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=faces",
    name: "Theo Lindqvist",
    role: "Repeat client, Magnolia",
  },
  {
    text: "They rebuilt our cedar deck and covered porch before the rains hit. Craft, communication and cleanup were all first class.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=faces",
    name: "Priya Raman",
    role: "Exterior remodel, West Seattle",
  },
];

const first = testimonials.slice(0, 3);
const second = testimonials.slice(3, 6);
const third = testimonials.slice(6, 9);

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="ink-panel grain relative overflow-hidden py-24 md:py-32"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="eyebrow text-verdigris">Client voices</p>
          <h2 className="mt-5 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] text-bone">
            What Seattle homeowners <em className="italic">say</em>.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-bone/55">
            Referrals and repeat clients make up most of our calendar.
          </p>
        </motion.div>

        <div className="relative mt-14 flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]">
          <TestimonialsColumn testimonials={first} duration={17} />
          <TestimonialsColumn
            testimonials={second}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={third}
            className="hidden lg:block"
            duration={19}
          />
        </div>
      </div>
    </section>
  );
}
