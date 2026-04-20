"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorkCaseStudy } from "@/lib/work";

export function FeaturedWorkRow({
  work,
  index,
}: {
  work: WorkCaseStudy;
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Link
      href={`/work/${work.slug}`}
      className="group relative block overflow-hidden rounded-[28px] border bg-[rgb(var(--card))] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      style={{ borderColor: "rgb(var(--card-line))" }}
    >
      <div className="grid gap-0 md:grid-cols-12 md:items-stretch">
        <div className={`relative md:col-span-8 ${isEven ? "md:order-1" : "md:order-2"}`}>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={work.hero.cover}
              alt={work.hero.coverAlt}
              width={2000}
              height={1250}
              className="h-auto w-full"
              unoptimized={work.hero.cover.startsWith("data:")}
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/35" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-end justify-between gap-4">
              <p className="text-sm text-white/75 opacity-0 transition group-hover:opacity-100">
                View case
              </p>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                Open
              </span>
            </div>
          </div>
        </div>

        <div className={`p-7 md:col-span-4 md:p-9 ${isEven ? "md:order-2" : "md:order-1"}`}>
          <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">
            CASE STUDY
          </p>
          <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">
            {work.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))]">
            {work.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {work.tags.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-1 text-[11px] tracking-tight text-[rgb(var(--muted))]"
                style={{ borderColor: "rgb(var(--line))" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

