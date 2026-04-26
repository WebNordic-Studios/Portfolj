import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProject, projects } from "@/lib/projects";
import { Reveal } from "@/components/Reveal";
import { ParallaxMedia } from "@/components/ParallaxMedia";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="container-x pb-16 sm:pb-24">
      <section className="pt-6 sm:pt-10">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs tracking-[0.22em] text-white/60">CASE STUDY</p>
            <Link className="text-sm text-white/65 hover:text-white transition" href="/work">
              ← Back to work
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-6 text-balance font-[var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            {project.title}
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
            {project.summary}
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap items-center gap-2 text-xs text-white/60">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
            {project.year}
          </span>
          {project.services.map((s) => (
            <span
              key={s}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5"
            >
              {s}
            </span>
          ))}
          <span className="rounded-full border border-white/10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 px-3 py-1.5 text-white/70">
            {project.tag}
          </span>
        </div>
      </section>

      <section className="mt-10">
        <ParallaxMedia
          src={project.hero.src}
          alt={project.hero.alt}
          strength={26}
          priority
          className="border border-white/10"
        />
      </section>

      <section className="mt-14 grid gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-5" activateOnScroll>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs tracking-[0.22em] text-white/55">PROBLEM</p>
            <p className="mt-4 text-pretty text-sm leading-7 text-white/70">
              {project.problem}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="lg:col-span-7" activateOnScroll>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs tracking-[0.22em] text-white/55">SOLUTION</p>
            <p className="mt-4 text-pretty text-sm leading-7 text-white/70">
              {project.solution}
            </p>
          </div>
        </Reveal>
      </section>

      <section className="mt-10">
        <Reveal activateOnScroll>
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
            <p className="text-xs tracking-[0.22em] text-white/55">RESULTS</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <p className="text-2xl font-semibold tracking-tight text-white">
                    {r.value}
                  </p>
                  <p className="mt-1 text-sm text-white/60">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-14">
        <Reveal activateOnScroll>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">GALLERY</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Visual-first breakdown
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {project.gallery.map((img, idx) => (
            <Reveal key={img.src} delay={0.04 * idx} activateOnScroll>
              <ParallaxMedia
                src={img.src}
                alt={img.alt}
                strength={18}
                className="border border-white/10"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Reveal activateOnScroll>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-400/15"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise opacity-[0.25]" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs tracking-[0.22em] text-white/60">NEXT</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  Want a site that feels like this?
                </h2>
              </div>
              <a
                href="mailto:hello@webnordic.studio?subject=Project%20inquiry"
                data-cursor="active"
                className="group inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm font-medium text-white ring-1 ring-white/15 bg-white/5 transition hover:bg-white/10"
              >
                Let’s talk
                <span className="ml-2 text-white/70 transition group-hover:translate-x-0.5">
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

