"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-x py-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20% 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex items-baseline gap-2">
            <span className="text-sm font-semibold tracking-tight text-white">
              WebNordic
            </span>
            <span className="text-sm text-white/60">Studios</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-sm text-white/60">
            <Link className="hover:text-white transition" href="/work">
              Work
            </Link>
            <Link className="hover:text-white transition" href="/#about">
              About
            </Link>
            <Link className="hover:text-white transition" href="/#services">
              Services
            </Link>
            <a
              className="hover:text-white transition"
              href="mailto:hello@webnordic.studio"
            >
              Let’s talk
            </a>
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} WebNordic Studios. All rights reserved.
          </p>
          <p className="text-white/40">Crafted with speed, restraint, and taste.</p>
        </div>
      </div>
    </footer>
  );
}

