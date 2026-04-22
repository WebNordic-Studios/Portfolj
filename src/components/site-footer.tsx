import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div
        className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8"
        style={{ borderColor: "rgb(var(--line))" }}
      >
        <div>
          <Link href="/" className="inline-flex items-baseline gap-2 tracking-tight">
            <span className="text-sm font-semibold">WebNordic</span>
            <span className="text-sm text-[rgb(var(--muted))]">Studios</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-[rgb(var(--muted))]">
            A premium digital studio for modern brands. Visual-first work, minimal copy,
            real results.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-3">
            <p className="text-[rgb(var(--muted))]">Explore</p>
            <div className="flex flex-col gap-2">
              <Link href="/#work" className="hover:opacity-80 transition">
                Work
              </Link>
              <Link href="/#about" className="hover:opacity-80 transition">
                About
              </Link>
              <Link href="/#process" className="hover:opacity-80 transition">
                Process
              </Link>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-[rgb(var(--muted))]">Contact</p>
            <div className="flex flex-col gap-2">
              <a className="hover:opacity-80 transition" href="mailto:hello@webnordicstudios.com">
                hello@webnordicstudios.com
              </a>
              <a className="hover:opacity-80 transition" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a className="hover:opacity-80 transition" href="https://www.instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="text-sm text-[rgb(var(--muted))] md:text-right">
          <p>Stockholm · Remote</p>
          <p className="mt-2">© {new Date().getFullYear()} WebNordic Studios</p>
        </div>
      </div>
    </footer>
  );
}

