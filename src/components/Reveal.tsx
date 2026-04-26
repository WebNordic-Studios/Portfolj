"use client";

import { MotionConfig, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type RevealVariant = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "none";
type MarginType = string | undefined;

export function Reveal({
  children,
  delay = 0,
  className,
  variant = "fade-up",
  distance = 16,
  blur = 6,
  duration = 0.6,
  once = true,
  activateOnScroll = false,
  // Use px margins for broad IntersectionObserver compatibility.
  // (Percent rootMargin has inconsistent support and can prevent triggers.)
  margin = "-120px 0px -120px 0px",
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
  activateOnScroll?: boolean;
  margin?: MarginType;
  amount?: "some" | "all" | number;
}) {
  const reduceMotion = useReducedMotion();
  const [armed, setArmed] = useState(() => !activateOnScroll);

  useEffect(() => {
    if (!activateOnScroll) return;
    if (armed) return;

    const arm = () => setArmed(true);

    // Any scroll/wheel/touch indicates user intent.
    window.addEventListener("scroll", arm, { passive: true, once: true });
    window.addEventListener("wheel", arm, { passive: true, once: true });
    window.addEventListener("touchmove", arm, { passive: true, once: true });

    return () => {
      window.removeEventListener("scroll", arm);
      window.removeEventListener("wheel", arm);
      window.removeEventListener("touchmove", arm);
    };
  }, [activateOnScroll, armed]);

  const { hidden, shown } = useMemo(() => {
    const shownState = { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" };

    if (variant === "none") {
      return { hidden: shownState, shown: shownState };
    }

    // Reduced motion: fade only (no movement/blur).
    if (reduceMotion) {
      return {
        hidden: { ...shownState, opacity: 0 },
        shown: shownState,
      };
    }

    const x =
      variant === "fade-left" ? distance : variant === "fade-right" ? -distance : 0;
    const y =
      variant === "fade-up" ? distance : variant === "fade-down" ? -distance : 0;

    return {
      hidden: {
        opacity: 0,
        x,
        y,
        scale: variant === "scale" ? 0.98 : 1,
        filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
      },
      shown: shownState,
    };
  }, [blur, distance, reduceMotion, variant]);

  return (
    <MotionConfig reducedMotion="never">
      <motion.div
        className={className}
        initial={hidden}
        whileInView={armed ? shown : undefined}
        animate={!armed ? hidden : undefined}
        viewport={{ once, margin, amount }}
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
    </MotionConfig>
  );
}

