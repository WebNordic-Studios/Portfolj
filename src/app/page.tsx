import Link from "next/link";
import { CursorGlow } from "@/components/cursor-glow";
import { HeroVisual } from "@/components/hero-visual";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WorkCard } from "@/components/work-card";
import { WORK } from "@/lib/work";

export default function Home() {
  return (
    <div className="studio-bg flex min-h-full flex-col">
      <CursorGlow />
      <SiteHeader />

      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10">
            <div>
              <Reveal>
                <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">
                  WEBNORDIC STUDIOS
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-6xl">
                  We design websites that{" "}
                  <span className="text-gradient">stand out.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-[rgb(var(--muted))] md:text-lg">
                  High-performing websites for modern brands. Visual-first work,
                  minimal copy, and measurable improvements.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    href="/#work"
                    className="inline-flex h-11 items-center rounded-full px-5 text-sm font-medium text-white transition hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(90deg, rgb(var(--accent-a)), rgb(var(--accent-b)))",
                    }}
                  >
                    View our work
                  </Link>
                  <Link
                    href="/#contact"
                    className="inline-flex h-11 items-center rounded-full border px-5 text-sm font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                    style={{ borderColor: "rgb(var(--line))" }}
                  >
                    Start a project
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-10 grid grid-cols-3 gap-4">
                  <Stat value="AA" label="accessibility" />
                  <Stat value="1–2w" label="typical first build" />
                  <Stat value="∞" label="clean handover" />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <HeroVisual
                coverA={WORK[0]!.hero.cover}
                coverB={WORK[1]!.hero.cover}
                coverC={WORK[2]!.hero.cover}
              />
            </Reveal>
          </div>
        </section>

        {/* FEATURED WORK */}
        <section id="work" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <div>
              <Reveal>
                <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  Featured work
                </h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[rgb(var(--muted))] md:text-base">
                  Selected case studies. Visuals first — with the outcomes that
                  matter.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.08}>
              <Link
                href="/work"
                className="hidden rounded-full border px-4 py-2 text-sm transition hover:bg-black/5 dark:hover:bg-white/5 md:inline-flex"
                style={{ borderColor: "rgb(var(--line))" }}
              >
                View all
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {WORK.map((w, i) => (
              <Reveal key={w.slug} delay={0.06 + i * 0.04}>
                <WorkCard work={w} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <Reveal>
              <div>
                <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">
                  ABOUT
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Modern studio. Scandinavian restraint.
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-sm leading-7 text-[rgb(var(--muted))] md:text-base">
                <p>
                  We believe great design should drive real results. Our work is
                  minimal on purpose: fewer elements, better hierarchy, faster
                  pages, clearer choices.
                </p>
                <p>
                  The goal is simple — create digital experiences that feel
                  premium and perform like a product.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVICES (LIGHT) */}
        <section id="services" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Services
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Service title="Web Design" desc="Systems, layout, typography, direction." />
            <Service title="Development" desc="Fast builds with clean handover." />
            <Service title="SEO" desc="Structure that earns visibility over time." />
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Process
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[rgb(var(--muted))] md:text-base">
              A small, focused process — built to ship quality without noise.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <ProcessStep n="01" title="Discover" />
            <ProcessStep n="02" title="Design" />
            <ProcessStep n="03" title="Build" />
            <ProcessStep n="04" title="Launch" />
          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <div>
                <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">
                  SOCIAL PROOF
                </p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
                  Proof without the pitch.
                </h2>
                <p className="mt-3 text-sm leading-6 text-[rgb(var(--muted))] md:text-base">
                  Outcomes, clarity, and craftsmanship — the things clients feel.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4">
              <Testimonial
                quote="“The new site feels premium, loads instantly, and clients finally understand what we do in seconds.”"
                author="Client feedback"
                meta="Project lead"
              />
              <Testimonial
                quote="“Clean, calm, and incredibly effective. It’s the first time our work looks as good online as it does in real life.”"
                author="Client feedback"
                meta="Founder"
              />
            </div>
          </div>
        </section>

        {/* SOFT CTA */}
        <section id="contact" className="mx-auto max-w-6xl px-5 pb-20 pt-10 md:px-8 md:pb-28">
          <div
            className="rounded-4xl overflow-hidden rounded-[32px] border bg-[rgb(var(--card))] p-10 md:p-14"
            style={{ borderColor: "rgb(var(--card-line))" }}
          >
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Have a project in mind?
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[rgb(var(--muted))] md:text-base">
                Send a short note. We’ll reply with next steps, timelines, and a
                clear scope — no pressure.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@webnordicstudios.com?subject=Project%20enquiry%20—%20WebNordic%20Studios"
                  className="inline-flex h-11 items-center rounded-full px-5 text-sm font-medium text-white transition hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(90deg, rgb(var(--accent-a)), rgb(var(--accent-b)))",
                  }}
                >
                  Let’s talk
                </a>
                <Link
                  href="/work"
                  className="inline-flex h-11 items-center rounded-full border px-5 text-sm font-medium transition hover:bg-black/5 dark:hover:bg-white/5"
                  style={{ borderColor: "rgb(var(--line))" }}
                >
                  Browse case studies
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border px-4 py-3" style={{ borderColor: "rgb(var(--line))" }}>
      <p className="text-lg font-semibold tracking-tight">{value}</p>
      <p className="mt-0.5 text-xs text-[rgb(var(--muted))]">{label}</p>
    </div>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <Reveal>
      <div
        className="rounded-3xl border bg-[rgb(var(--card))] px-6 py-7"
        style={{ borderColor: "rgb(var(--card-line))" }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-base font-semibold tracking-tight">{title}</p>
            <p className="mt-2 text-sm leading-6 text-[rgb(var(--muted))]">{desc}</p>
          </div>
          <div
            aria-hidden="true"
            className="h-9 w-9 rounded-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(var(--accent-a)/0.20), rgba(var(--accent-b)/0.18))",
              border: "1px solid rgb(var(--line))",
            }}
          />
        </div>
      </div>
    </Reveal>
  );
}

function ProcessStep({ n, title }: { n: string; title: string }) {
  return (
    <Reveal>
      <div className="rounded-3xl border px-6 py-7" style={{ borderColor: "rgb(var(--line))" }}>
        <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">{n}</p>
        <p className="mt-3 text-base font-semibold tracking-tight">{title}</p>
      </div>
    </Reveal>
  );
}

function Testimonial({
  quote,
  author,
  meta,
}: {
  quote: string;
  author: string;
  meta: string;
}) {
  return (
    <Reveal>
      <div
        className="rounded-3xl border bg-[rgb(var(--card))] px-7 py-7"
        style={{ borderColor: "rgb(var(--card-line))" }}
      >
        <p className="text-sm leading-7">{quote}</p>
        <div className="mt-6 flex items-baseline justify-between gap-4">
          <p className="text-sm font-medium">{author}</p>
          <p className="text-xs text-[rgb(var(--muted))]">{meta}</p>
        </div>
      </div>
    </Reveal>
  );
}
