"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/cn";

export function ParallaxMedia({
  src,
  alt,
  className,
  strength = 18,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden rounded-3xl", className)}
    >
      <motion.div style={{ y }} className="relative">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={1000}
          priority={priority}
          className="h-auto w-full select-none"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10"
      />
    </div>
  );
}

