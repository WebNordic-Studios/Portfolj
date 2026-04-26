"use client";

import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function isTouchDevice() {
  if (typeof window === "undefined") return true;
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia?.("(pointer: coarse)").matches
  );
}

export function Cursor() {
  const [enabled] = useState(() =>
    typeof window === "undefined" ? false : !isTouchDevice()
  );
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 900, damping: 55, mass: 0.18 });
  const sy = useSpring(y, { stiffness: 900, damping: 55, mass: 0.18 });

  const size = useMemo(() => ({ base: 10, active: 64 }), []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    const onOver = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("[data-cursor='active']")) setActive(true);
    };

    const onOut = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      if (el.closest("[data-cursor='active']")) setActive(false);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOut, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOut);
    };
  }, [enabled, x, y]);

  useEffect(() => {
    if (!enabled) return;
    animate(
      document.documentElement,
      { cursor: "none" },
      { duration: 0.01 }
    );
  }, [enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] mix-blend-difference"
      style={{
        translateX: sx,
        translateY: sy,
      }}
    >
      <motion.div
        className="rounded-full bg-white"
        animate={{
          width: active ? size.active : size.base,
          height: active ? size.active : size.base,
          x: active ? -size.active / 2 : -size.base / 2,
          y: active ? -size.active / 2 : -size.base / 2,
          opacity: active ? 0.9 : 0.8,
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

