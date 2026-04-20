import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { getWork, WORK } from "@/lib/work";

export async function generateStaticParams() {
  return WORK.map((w) => ({ slug: w.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  return (
    <div className="studio-bg flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-5 pb-10 pt-14 md:px-8 md:pb-14 md:pt-20">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--fg))] transition"
            >
              <span aria-hidden="true">←</span>
              <span>Back to work</span>
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.03] tracking-[-0.05em] md:text-6xl">
              {work.title}
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[rgb(var(--muted))] md:text-base">
              {work.description}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap gap-2">
              {work.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1.5 text-xs text-[rgb(var(--muted))]"
                  style={{ borderColor: "rgb(var(--line))" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div
              className="overflow-hidden rounded-[32px] border bg-[rgb(var(--card))]"
              style={{ borderColor: "rgb(var(--card-line))" }}
            >
              <Image
                src={work.hero.cover}
                alt={work.hero.coverAlt}
                width={1600}
                height={1000}
                className="h-auto w-full"
                priority
                unoptimized={work.hero.cover.startsWith("data:")}
              />
            </div>
          </Reveal>
        </section>

        {/* OVERVIEW */}
        <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-3">
            <Reveal>
              <div>
                <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">
                  OVERVIEW
                </p>
                <h2 className="mt-4 text-xl font-semibold tracking-tight">
                  The essentials.
                </h2>
              </div>
            </Reveal>
            <div className="md:col-span-2">
              <div className="grid gap-4 md:grid-cols-3">
                <Meta label="Client" value={work.overview.client} />
                <Meta label="Industry" value={work.overview.industry} />
                <Meta label="Goal" value={work.overview.goal} />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM / SOLUTION / RESULTS */}
        <section className="mx-auto max-w-6xl px-5 pb-14 md:px-8 md:pb-20">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal>
              <Block title="Problem">{work.problem}</Block>
            </Reveal>
            <Reveal delay={0.05}>
              <Block title="Solution">{work.solution}</Block>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {work.results.map((r, i) => (
              <Reveal key={r.label} delay={0.02 + i * 0.04}>
                <div
                  className="rounded-3xl border bg-[rgb(var(--card))] px-6 py-6"
                  style={{ borderColor: "rgb(var(--card-line))" }}
                >
                  <p className="text-2xl font-semibold tracking-tight">
                    {r.value}
                  </p>
                  <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                    {r.label}
                  </p>
                  {r.note ? (
                    <p className="mt-3 text-xs text-[rgb(var(--muted))]">
                      {r.note}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* GALLERY */}
        <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8 md:pb-24">
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight">Visual gallery</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {work.gallery.map((g, i) => (
              <Reveal key={g.alt} delay={0.03 + i * 0.05}>
                <div
                  className="overflow-hidden rounded-3xl border bg-[rgb(var(--card))]"
                  style={{ borderColor: "rgb(var(--card-line))" }}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1200}
                    height={750}
                    className="h-auto w-full"
                    unoptimized={g.src.startsWith("data:")}
                  />
                  {g.hint ? (
                    <div className="border-t px-5 py-4" style={{ borderColor: "rgb(var(--line))" }}>
                      <p className="text-xs text-[rgb(var(--muted))]">{g.hint}</p>
                    </div>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SOFT CTA */}
        <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8 md:pb-28">
          <div
            className="rounded-[32px] border bg-[rgb(var(--card))] p-10 md:p-14"
            style={{ borderColor: "rgb(var(--card-line))" }}
          >
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Have a project in mind?
              </h2>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[rgb(var(--muted))] md:text-base">
                If you want a site that feels premium and performs like a product,
                we’d love to hear what you’re building.
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
                  More work
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

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <Reveal>
      <div className="rounded-3xl border px-6 py-6" style={{ borderColor: "rgb(var(--line))" }}>
        <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">{label}</p>
        <p className="mt-3 text-sm font-medium">{value}</p>
      </div>
    </Reveal>
  );
}

function Block({ title, children }: { title: string; children: string }) {
  return (
    <div
      className="rounded-3xl border bg-[rgb(var(--card))] px-7 py-7"
      style={{ borderColor: "rgb(var(--card-line))" }}
    >
      <p className="text-xs tracking-[0.26em] text-[rgb(var(--muted))]">{title}</p>
      <p className="mt-4 text-sm leading-7 text-[rgb(var(--muted))]">{children}</p>
    </div>
  );
}

