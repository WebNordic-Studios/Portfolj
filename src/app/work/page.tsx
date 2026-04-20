import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { WORK } from "@/lib/work";

export const metadata = {
  title: "Work",
  description: "Selected work and case studies by WebNordic Studios.",
};

export default function WorkPage() {
  return (
    <div className="studio-bg flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
          <Reveal>
            <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">
              SELECTED WORK
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-5xl">
              Selected work by <span className="text-gradient">WebNordic Studios</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex h-11 items-center rounded-full px-5 text-sm font-medium text-white transition hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--accent-a)), rgb(var(--accent-b)))",
                }}
              >
                Start a project
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center rounded-full border px-5 text-sm font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                style={{ borderColor: "rgb(var(--line))" }}
              >
                Back to home
              </Link>
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            {WORK.map((w, i) => (
              <Reveal key={w.slug} delay={0.02 + i * 0.04}>
                <WorkCard work={w} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

