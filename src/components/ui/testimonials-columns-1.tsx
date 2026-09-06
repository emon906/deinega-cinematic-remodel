"use client";

import { motion } from "motion/react";
import React from "react";

export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration ?? 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[0, 1].map((iteration) => (
          <React.Fragment key={iteration}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="w-full max-w-xs rounded-sm border border-bone/12 bg-bone/[0.04] p-8 backdrop-blur-sm md:max-w-sm"
                key={`${iteration}-${i}`}
              >
                <p className="text-sm leading-relaxed text-bone/80">{text}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    loading="lazy"
                    className="h-10 w-10 rounded-full object-cover grayscale"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm font-medium tracking-tight text-bone">
                      {name}
                    </span>
                    <span className="text-xs tracking-tight text-bone/50">
                      {role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
