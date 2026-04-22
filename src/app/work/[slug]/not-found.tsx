import Link from "next/link";
import { Reveal } from "@/components/Reveal";

export default function NotFound() {
  return (
    <div className="container-x pb-16 sm:pb-24">
      <section className="pt-10">
        <Reveal>
          <p className="text-xs tracking-[0.22em] text-white/60">NOT FOUND</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            This case study doesn’t exist.
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-white/70">
            Head back to the work page to explore projects.
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <Link
            href="/work"
            data-cursor="active"
            className="mt-10 inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium text-white ring-1 ring-white/15 bg-white/5 transition hover:bg-white/10"
          >
            Back to work →
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

