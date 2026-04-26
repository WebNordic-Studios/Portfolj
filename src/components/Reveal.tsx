"use client";

import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useRef } from "react";

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
  amount = 0.25,
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
  amount?: "some" | "all" | number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once, margin, amount });

  const hidden = useMemo(() => {
    if (variant === "none") return { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

    // Reduced motion: still allow a subtle fade-in on scroll, no movement/blur.
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
  }, [blur, distance, reduceMotion, variant]);

  const shown = useMemo(
    () => ({ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }),
    []
  );

  useEffect(() => {
    if (variant === "none") return;
    if (isInView) controls.start(shown);
  }, [controls, isInView, shown, variant]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={hidden}
      animate={variant === "none" ? undefined : controls}
      style={{
        willChange: variant === "none" ? undefined : "transform, opacity, filter",
      }}
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

