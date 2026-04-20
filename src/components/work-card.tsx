"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { WorkCaseStudy } from "@/lib/work";

export function WorkCard({ work }: { work: WorkCaseStudy }) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className="group block overflow-hidden rounded-3xl border bg-[rgb(var(--card))] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
      style={{ borderColor: "rgb(var(--card-line))" }}
    >
      <div className="relative">
        <motion.div
          className="relative overflow-hidden"
          whileHover={{ scale: 1.015 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={work.hero.cover}
            alt={work.hero.coverAlt}
            width={1600}
            height={1000}
            className="h-auto w-full"
            unoptimized={work.hero.cover.startsWith("data:")}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/35" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm text-white/70 opacity-0 transition group-hover:opacity-100">
                View case
              </p>
            </div>
            <div className="opacity-0 transition group-hover:opacity-100">
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                Open
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-2 px-5 py-5">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-base font-semibold tracking-tight">{work.title}</h3>
          <div className="flex flex-wrap gap-2">
            {work.tags.slice(0, 3).map((t) => (
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
        <p className="text-sm leading-6 text-[rgb(var(--muted))]">{work.description}</p>
      </div>
    </Link>
  );
}

