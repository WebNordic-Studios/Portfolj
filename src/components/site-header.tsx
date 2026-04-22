import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-[rgb(var(--bg))]/80 backdrop-blur">
      <div
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"
        style={{ borderColor: "rgb(var(--line))" }}
      >
        <Link
          href="/"
          className="inline-flex items-baseline gap-2 tracking-tight"
        >
          <span className="text-sm font-semibold">WebNordic</span>
          <span className="text-sm text-[rgb(var(--muted))]">Studios</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href="/#work" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition">
            Work
          </Link>
          <Link href="/#about" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition">
            About
          </Link>
          <Link href="/#services" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition">
            Services
          </Link>
          <Link href="/#process" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition">
            Process
          </Link>
          <Link href="/#contact" className="text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/#contact"
            className="hidden md:inline-flex h-10 items-center rounded-full border px-4 text-sm font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
            style={{ borderColor: "rgb(var(--line))" }}
          >
            Let’s talk
          </Link>
        </div>
      </div>
      <div className="h-px w-full hairline" />
    </header>
  );
}

