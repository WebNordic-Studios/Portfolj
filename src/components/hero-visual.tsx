"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function HeroVisual({
  coverA,
  coverB,
  coverC,
}: {
  coverA: string;
  coverB: string;
  coverC: string;
}) {
  return (
    <div className="relative mx-auto mt-10 w-full max-w-xl md:mt-0">
      <div className="pointer-events-none absolute -inset-8 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent-a)/0.22),transparent_52%),radial-gradient(circle_at_70%_30%,rgba(var(--accent-b)/0.18),transparent_52%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 16, rotate: -1.25 }}
        animate={{ opacity: 1, y: 0, rotate: -1.25 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="relative overflow-hidden rounded-[22px] border bg-[rgb(var(--card))] shadow-[0_40px_120px_-55px_rgba(0,0,0,0.55)]"
          style={{ borderColor: "rgb(var(--card-line))" }}
        >
          <div className="flex items-center gap-2 border-b px-4 py-3 text-xs text-[rgb(var(--muted))]" style={{ borderColor: "rgb(var(--line))" }}>
            <span className="h-2 w-2 rounded-full bg-black/20 dark:bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="h-2 w-2 rounded-full bg-black/10 dark:bg-white/10" />
            <span className="ml-2">Selected work previews</span>
          </div>

          <div className="grid gap-3 p-4">
            <FloatingScreen src={coverA} delay={0.0} />
            <div className="grid grid-cols-2 gap-3">
              <FloatingScreen src={coverB} delay={0.08} />
              <FloatingScreen src={coverC} delay={0.14} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function FloatingScreen({ src, delay }: { src: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border bg-black/5 dark:bg-white/5"
      style={{ borderColor: "rgb(var(--line))" }}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px 220px at 20% 20%, rgba(var(--accent-a)/0.16), transparent 55%), radial-gradient(600px 220px at 80% 20%, rgba(var(--accent-b)/0.14), transparent 55%)",
        }}
      />
      <Image
        src={src}
        alt=""
        width={1200}
        height={750}
        className="h-auto w-full"
        unoptimized={src.startsWith("data:")}
        priority={delay === 0}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        animate={{ y: ["-20%", "120%"] }}
        transition={{ duration: 6.5, ease: "linear", repeat: Infinity, delay: 0.2 }}
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.00), rgba(255,255,255,0.10), rgba(255,255,255,0.00))",
          mixBlendMode: "overlay",
          opacity: 0.55,
        }}
      />
    </motion.div>
  );
}

