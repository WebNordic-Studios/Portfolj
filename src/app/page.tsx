import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { ParallaxMedia } from "@/components/ParallaxMedia";

export default function Home() {
  return (
    <div>
      <section className="container-x">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] px-6 py-16 shadow-[var(--shadow)] sm:px-10 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-400/10"
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise opacity-[0.26]" />

          <div className="relative grid gap-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <Reveal>
                <p className="text-xs tracking-[0.22em] text-white/60">
                  MODERN WEB AGENCY
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-6 text-balance font-[var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  Selected work by{" "}
                  <span className="text-gradient">WebNordic Studios</span>
                </h1>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
                  We craft premium, motion-first websites that feel futuristic,
                  clean, and undeniably high-end.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/work"
                    data-cursor="active"
                    className="group inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 bg-white/5 transition hover:bg-white/10"
                  >
                    View projects
                    <span className="ml-2 text-white/70 transition group-hover:translate-x-0.5">
                      →
                    </span>
                  </Link>
                  <a
                    href="mailto:hello@webnordic.studio?subject=Work%20with%20us"
                    data-cursor="active"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-5 py-3 text-sm font-medium text-white"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500/35 via-purple-500/35 to-cyan-400/35 opacity-80 blur-xl" />
                    <span className="absolute inset-0 bg-white/10 transition group-hover:bg-white/15" />
                    <span className="relative">Work with us</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-cyan-400/25 blur-2xl" />
                <div className="relative grid gap-4">
                  <ParallaxMedia
                    src={projects[0].hero.src}
                    alt={projects[0].hero.alt}
                    strength={22}
                    priority
                    className="border border-white/10"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <ParallaxMedia
                      src={projects[1].gallery[0].src}
                      alt={projects[1].gallery[0].alt}
                      strength={14}
                      className="border border-white/10"
                    />
                    <ParallaxMedia
                      src={projects[2].gallery[1].src}
                      alt={projects[2].gallery[1].alt}
                      strength={14}
                      className="border border-white/10"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-x mt-16 sm:mt-24">
        <Reveal activateOnScroll>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">WORK</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Featured projects
              </h2>
            </div>
            <Link
              href="/work"
              className="hidden text-sm text-white/70 transition hover:text-white md:inline-flex"
            >
              Explore all →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal
              key={p.slug}
              delay={0.06 * idx}
              margin="0px 0px -60px 0px"
              amount={0.55}
              distance={24}
              duration={0.7}
              activateOnScroll
            >
              <ProjectCard project={p} eager={idx === 0} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="container-x mt-20 sm:mt-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal activateOnScroll>
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">ABOUT</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                Minimal, bold, and obsessed with motion.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.08} activateOnScroll>
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-pretty text-base leading-7 text-white/70">
                WebNordic Studios is a modern creative studio building premium
                web experiences. We design with restraint, ship with precision,
                and add motion that feels effortless—not noisy.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/60 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-white/80">Philosophy</p>
                  <p className="mt-1">Clarity first. Impact always.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-white/80">Taste</p>
                  <p className="mt-1">Grid, whitespace, and glow.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="services" className="container-x mt-16 sm:mt-24">
        <Reveal activateOnScroll>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs tracking-[0.22em] text-white/60">SERVICES</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                What we do
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Web Design", "Development", "SEO"].map((s, i) => (
            <Reveal key={s} delay={0.05 * i} activateOnScroll>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:bg-white/[0.05]">
                <p className="text-lg font-semibold tracking-tight text-white">
                  {s}
                </p>
                <p className="mt-2 text-sm text-white/60">
                  Minimal copy. Maximum outcome.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-16 sm:mt-24">
        <Reveal activateOnScroll>
          <div>
            <p className="text-xs tracking-[0.22em] text-white/60">PROCESS</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              A clean, focused flow
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {["Discover", "Design", "Build", "Launch"].map((step, i) => (
            <Reveal key={step} delay={0.06 * i} activateOnScroll>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs text-white/55">0{i + 1}</p>
                <p className="mt-3 text-lg font-semibold tracking-tight text-white">
                  {step}
                </p>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-blue-400/50 via-purple-400/40 to-cyan-300/40" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-16 sm:mt-24">
        <Reveal activateOnScroll>
          <div>
            <p className="text-xs tracking-[0.22em] text-white/60">
              SOCIAL PROOF
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
              Trusted by teams who care about craft
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            {
              quote:
                "WebNordic nailed the vibe—premium, fast, and genuinely fun to explore.",
              name: "Product Lead",
              company: "Nordwave",
            },
            {
              quote:
                "The motion is subtle but addictive. Our work finally looks as good as it is.",
              name: "Founder",
              company: "Fjord Architecture",
            },
            {
              quote:
                "Best build quality we’ve had. Performance and polish, both delivered.",
              name: "Head of Growth",
              company: "Aurora Commerce",
            },
          ].map((t, i) => (
            <Reveal key={t.company} delay={0.06 * i} activateOnScroll>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <p className="text-sm leading-7 text-white/70">“{t.quote}”</p>
                <p className="mt-5 text-sm text-white/55">
                  <span className="text-white/80">{t.name}</span> · {t.company}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08} activateOnScroll>
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-7">
            <p className="text-xs tracking-[0.22em] text-white/55">
              CLIENTS (SAMPLE)
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-white/60 sm:grid-cols-4">
              {["Radius", "Triangle", "AskThemis", "Thunderbolt"].map((c) => (
                <div
                  key={c}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center"
                >
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-x mt-16 pb-16 sm:mt-24 sm:pb-24">
        <Reveal activateOnScroll>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-500/15 via-purple-500/15 to-cyan-400/15"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 noise opacity-[0.25]" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs tracking-[0.22em] text-white/60">CTA</p>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-4xl">
                  Have a project in mind?
                </h2>
              </div>
              <a
                href="mailto:hello@webnordic.studio?subject=Let%E2%80%99s%20talk"
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
