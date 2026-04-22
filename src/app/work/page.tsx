import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore selected case studies by WebNordic Studios.",
};

export default function WorkPage() {
  return (
    <div className="container-x pb-16 sm:pb-24">
      <section className="pt-6 sm:pt-10">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-white/60">WORK</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 text-balance font-[var(--font-display)] text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Case studies built for{" "}
            <span className="text-gradient">clarity + impact</span>.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/70 sm:text-lg">
            A small, curated selection—visual-first, motion-driven, and engineered
            for performance.
          </p>
        </Reveal>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((p, idx) => (
          <ProjectCard key={p.slug} project={p} eager={idx === 0} />
        ))}
      </section>
    </div>
  );
}

