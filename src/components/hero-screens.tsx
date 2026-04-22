"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroScreens({
  covers,
}: {
  covers: Array<{ src: string; alt?: string }>;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto mt-10 w-full max-w-xl md:mt-0">
      <div className="pointer-events-none absolute -inset-10 rounded-[28px] bg-[radial-gradient(circle_at_30%_20%,rgba(var(--accent-a)/0.22),transparent_52%),radial-gradient(circle_at_70%_30%,rgba(var(--accent-b)/0.18),transparent_52%)] blur-2xl" />

      <motion.div
        initial={{ opacity: 0, y: 18, rotate: -1.25 }}
        animate={{ opacity: 1, y: 0, rotate: -1.25 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div
          className="relative overflow-hidden rounded-[22px] border bg-[rgb(var(--card))] shadow-[0_40px_120px_-55px_rgba(0,0,0,0.55)]"
          style={{ borderColor: "rgb(var(--card-line))" }}
        >
          <div
            className="flex items-center justify-between gap-2 border-b px-4 py-3 text-xs text-[rgb(var(--muted))]"
            style={{ borderColor: "rgb(var(--line))" }}
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-black/20 dark:bg-white/20" />
              <span className="h-2 w-2 rounded-full bg-black/10 dark:bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-black/10 dark:bg-white/10" />
              <span className="ml-2">Selected previews</span>
            </div>
            <span className="hidden sm:inline">Scroll</span>
          </div>

          <div className="grid gap-3 p-4">
            <AutoScrollScreen src={covers[0]!.src} alt={covers[0]!.alt} speed={reduce ? 0 : 18} />
            <div className="grid grid-cols-2 gap-3">
              <AutoScrollScreen src={covers[1]!.src} alt={covers[1]!.alt} speed={reduce ? 0 : 20} />
              <AutoScrollScreen src={covers[2]!.src} alt={covers[2]!.alt} speed={reduce ? 0 : 22} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AutoScrollScreen({
  src,
  alt,
  speed,
}: {
  src: string;
  alt?: string;
  speed: number; // seconds per loop; 0 disables
}) {
  const img = (
    <Image
      src={src}
      alt={alt ?? ""}
      width={1200}
      height={900}
      className="h-auto w-full"
      unoptimized={src.startsWith("data:")}
      priority={false}
    />
  );

  return (
    <div
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

      <div className="relative">
        <motion.div
          className="relative will-change-transform"
          animate={
            speed > 0
              ? { y: ["0%", "-32%"] }
              : undefined
          }
          transition={
            speed > 0
              ? { duration: speed, ease: "linear", repeat: Infinity }
              : undefined
          }
        >
          {img}
          <div aria-hidden="true">{img}</div>
        </motion.div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-18"
          style={{
            background:
              "linear-gradient(to bottom, rgba(var(--bg)/1), rgba(var(--bg)/0.0))",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-18"
          style={{
            background:
              "linear-gradient(to top, rgba(var(--bg)/1), rgba(var(--bg)/0.0))",
          }}
        />
      </div>
    </div>
  );
}

