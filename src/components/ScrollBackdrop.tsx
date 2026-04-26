"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollBackdrop() {
  const { scrollY } = useScroll();

  // Subtle parallax so scrolling always feels "alive".
  const blobY = useTransform(scrollY, [0, 1200], [0, 140]);
  const blobScale = useTransform(scrollY, [0, 1200], [1, 1.06]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-grid opacity-[0.18]" />
      <div className="absolute inset-0 noise opacity-[0.32]" />
      <motion.div
        className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl"
        style={{ y: blobY, scale: blobScale }}
      />
    </div>
  );
}

