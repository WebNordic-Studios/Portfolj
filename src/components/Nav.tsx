"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const links = [
  { href: "/", label: "Studio" },
  { href: "/work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="mt-4 flex items-center justify-between rounded-2xl px-4 py-3 glass"
        >
          <Link
            href="/"
            className="group flex items-baseline gap-2 rounded-xl px-2 py-1 transition hover:bg-white/5"
          >
            <span className="text-sm font-semibold tracking-tight">
              WebNordic
            </span>
            <span className="text-sm text-white/55 group-hover:text-white/75 transition">
              Studios
            </span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {links.map((l) => {
              const active =
                l.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(l.href.replace("/#", "/"));

              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-xl px-3 py-2 text-sm text-white/70 transition hover:text-white hover:bg-white/5",
                    active && "text-white"
                  )}
                >
                  {l.label}
                  {active ? (
                    <span className="absolute inset-x-3 -bottom-1 h-px bg-gradient-to-r from-blue-400/70 via-purple-400/70 to-cyan-300/70" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm text-white/70 transition hover:text-white hover:bg-white/5"
            >
              View projects
            </Link>
            <Link
              href="mailto:hello@webnordic.studio?subject=New%20project%20inquiry"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl px-3 py-2 text-sm font-medium text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500/35 via-purple-500/35 to-cyan-400/35 opacity-80 blur-xl" />
              <span className="absolute inset-0 bg-white/10 transition group-hover:bg-white/15" />
              <span className="relative">Work with us</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
}

