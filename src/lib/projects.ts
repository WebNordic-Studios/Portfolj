export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  services: Array<"Web Design" | "Development" | "SEO">;
  summary: string;
  problem: string;
  solution: string;
  results: Array<{ label: string; value: string }>;
  gallery: Array<{ src: string; alt: string }>;
  hero: { src: string; alt: string };
  accent: { from: string; to: string };
};

export const projects: Project[] = [
  {
    slug: "aurora-commerce",
    title: "Aurora Commerce",
    tag: "E-commerce redesign",
    year: "2026",
    services: ["Web Design", "Development", "SEO"],
    summary:
      "A high-end storefront experience built for speed, clarity, and conversion—without sacrificing the brand’s editorial feel.",
    problem:
      "The old site felt template-driven, loaded slowly on mobile, and buried product discovery under cluttered navigation.",
    solution:
      "We rebuilt the experience around cinematic product storytelling, a frictionless cart, and a lean component system with performance-first implementation.",
    results: [
      { label: "Conversion rate", value: "+38%" },
      { label: "Mobile load time", value: "-42%" },
      { label: "Organic traffic", value: "+61%" },
    ],
    hero: { src: "/projects/aurora/hero.svg", alt: "Aurora Commerce hero" },
    gallery: [
      { src: "/projects/aurora/01.svg", alt: "Aurora product grid" },
      { src: "/projects/aurora/02.svg", alt: "Aurora PDP layout" },
      { src: "/projects/aurora/03.svg", alt: "Aurora checkout flow" },
    ],
    accent: { from: "#60A5FA", to: "#A78BFA" },
  },
  {
    slug: "fjord-architecture",
    title: "Fjord Architecture",
    tag: "Studio portfolio",
    year: "2026",
    services: ["Web Design", "Development"],
    summary:
      "A minimal, gallery-first website that lets large imagery breathe—paired with subtle motion that feels calm and premium.",
    problem:
      "The studio’s work was strong, but their site read as a static brochure with inconsistent typography and weak hierarchy.",
    solution:
      "We created a grid-based system with oversized type, nuanced transitions, and a case study format optimized for exploration.",
    results: [
      { label: "Time on site", value: "+46%" },
      { label: "Project inquiries", value: "+29%" },
      { label: "Bounce rate", value: "-18%" },
    ],
    hero: { src: "/projects/fjord/hero.svg", alt: "Fjord Architecture hero" },
    gallery: [
      { src: "/projects/fjord/01.svg", alt: "Fjord projects overview" },
      { src: "/projects/fjord/02.svg", alt: "Fjord case study layout" },
      { src: "/projects/fjord/03.svg", alt: "Fjord image gallery" },
    ],
    accent: { from: "#22D3EE", to: "#A78BFA" },
  },
  {
    slug: "nordwave-saas",
    title: "Nordwave SaaS",
    tag: "Product marketing site",
    year: "2026",
    services: ["Web Design", "Development", "SEO"],
    summary:
      "A futuristic, conversion-ready marketing site with a clean narrative, interactive sections, and motion that guides attention.",
    problem:
      "Prospects struggled to understand the product value quickly, and content wasn’t structured for SEO or scannability.",
    solution:
      "We restructured messaging, designed a modular page system, and shipped an SEO-focused implementation with performance budgets.",
    results: [
      { label: "Qualified leads", value: "+54%" },
      { label: "Demo bookings", value: "+33%" },
      { label: "Core Web Vitals", value: "Pass" },
    ],
    hero: { src: "/projects/nordwave/hero.svg", alt: "Nordwave SaaS hero" },
    gallery: [
      { src: "/projects/nordwave/01.svg", alt: "Nordwave hero section" },
      { src: "/projects/nordwave/02.svg", alt: "Nordwave features" },
      { src: "/projects/nordwave/03.svg", alt: "Nordwave pricing block" },
    ],
    accent: { from: "#A78BFA", to: "#60A5FA" },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

