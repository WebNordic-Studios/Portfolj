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
    slug: "northline-estates",
    title: "Northline Estates",
    tag: "Real estate website",
    year: "2026",
    services: ["Web Design", "Development", "SEO"],
    summary:
      "A premium property experience with fast search, elegant listings, and a conversion-focused inquiry flow—built to feel calm, modern, and trustworthy.",
    problem:
      "Listings were hard to browse on mobile, the inquiry flow was fragmented, and the overall presentation didn’t match the quality of the properties.",
    solution:
      "We designed a clean, map-and-grid browsing experience, refined the listing detail layout, and rebuilt performance and SEO foundations for location-based discovery.",
    results: [
      { label: "Inquiry submissions", value: "+41%" },
      { label: "Mobile load time", value: "-39%" },
      { label: "Organic traffic", value: "+58%" },
    ],
    hero: { src: "/projects/real-estate/hero.svg", alt: "Northline Estates hero" },
    gallery: [
      { src: "/projects/real-estate/01.svg", alt: "Property listings grid" },
      { src: "/projects/real-estate/02.svg", alt: "Listing detail layout" },
      { src: "/projects/real-estate/03.svg", alt: "Inquiry flow screens" },
    ],
    accent: { from: "#22D3EE", to: "#A78BFA" },
  },
  {
    slug: "pulse-coaching",
    title: "Pulse Coaching",
    tag: "Fitness coaching brand",
    year: "2026",
    services: ["Web Design", "Development"],
    summary:
      "A bold coaching website that turns visitors into clients with clear programs, strong social proof, and frictionless booking.",
    problem:
      "Messaging was scattered across platforms, the site didn’t communicate program value quickly, and booking required too many steps.",
    solution:
      "We rebuilt the content around a simple offer hierarchy, added proof-driven sections, and shipped a streamlined intake + booking flow.",
    results: [
      { label: "Program sign-ups", value: "+36%" },
      { label: "Booking completion", value: "+28%" },
      { label: "Bounce rate", value: "-17%" },
    ],
    hero: { src: "/projects/fitness-coaching/hero.svg", alt: "Pulse Coaching hero" },
    gallery: [
      { src: "/projects/fitness-coaching/01.svg", alt: "Coaching program overview" },
      { src: "/projects/fitness-coaching/02.svg", alt: "Testimonials and results" },
      { src: "/projects/fitness-coaching/03.svg", alt: "Booking and intake flow" },
    ],
    accent: { from: "#60A5FA", to: "#A78BFA" },
  },
  {
    slug: "ember-cafe",
    title: "Ember Café",
    tag: "Café website + menu",
    year: "2026",
    services: ["Web Design", "Development", "SEO"],
    summary:
      "A warm, modern café site with a beautiful menu, clear location info, and lightweight performance—built to drive foot traffic.",
    problem:
      "The old site made it hard to find the menu and opening hours, and it didn’t show up well for local search.",
    solution:
      "We designed a scroll-friendly menu system, highlighted essentials (hours, location, booking), and tuned local SEO for discovery.",
    results: [
      { label: "Direction clicks", value: "+47%" },
      { label: "Menu views", value: "+62%" },
      { label: "Core Web Vitals", value: "Pass" },
    ],
    hero: { src: "/projects/cafe/hero.svg", alt: "Ember Café hero" },
    gallery: [
      { src: "/projects/cafe/01.svg", alt: "Menu layout" },
      { src: "/projects/cafe/02.svg", alt: "Location and hours" },
      { src: "/projects/cafe/03.svg", alt: "Reservations and events" },
    ],
    accent: { from: "#A78BFA", to: "#60A5FA" },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

