"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  className,
  eager,
}: {
  project: Project;
  className?: string;
  eager?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative", className)}
    >
      <Link
        href={`/work/${project.slug}`}
        data-cursor="active"
        className="block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition will-change-transform hover:border-white/20"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={project.hero.src}
              alt={project.hero.alt}
              fill
              priority={eager}
              className="object-cover"
            />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90" />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-white/60">{project.tag}</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight text-white">
                  {project.title}
                </h3>
              </div>
              <motion.span
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white ring-1 ring-white/15 bg-white/5"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                View case
                <span aria-hidden="true" className="text-white/70">
                  →
                </span>
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

