"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "none";
type MarginType =
  | `${number}${"px" | "%"}`
  | `${number}${"px" | "%"} ${number}${"px" | "%"}`
  | `${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"}`
  | `${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"} ${number}${"px" | "%"}`
  | undefined;

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "fade-up",
  distance = 16,
  blur = 6,
  duration = 0.6,
  once = true,
  margin = "-10% 0px -10% 0px",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  distance?: number;
  blur?: number;
  duration?: number;
  once?: boolean;
  margin?: MarginType;
}) {
  const reduceMotion = useReducedMotion();

  const initial = (() => {
    if (variant === "none") return { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

    // If the user prefers reduced motion, keep it accessible:
    // no positional movement/blur, but still allow a subtle fade-in.
    if (reduceMotion) return { opacity: 0, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

    return {
      opacity: 0,
      x:
        variant === "fade-left"
          ? distance
          : variant === "fade-right"
            ? -distance
            : 0,
      y:
        variant === "fade-up"
          ? distance
          : variant === "fade-down"
            ? -distance
            : 0,
      scale: variant === "scale" ? 0.98 : 1,
      filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
    };
  })();

  const inView =
    variant === "none" ? undefined : { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={inView}
      viewport={{ once, margin }}
      transition={{
        duration: reduceMotion ? Math.min(0.25, duration) : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

