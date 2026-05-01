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
      "A premium real-estate experience built around what buyers actually do: scan listings fast, compare details, and enquire without friction—wrapped in a calm, high-end visual system.",
    problem:
      "The old site looked generic and made property discovery feel slow. Filters were limited, key details were buried, and the enquiry path pushed users into back-and-forth emails—leading to drop-offs on mobile.",
    solution:
      "We redesigned the site around a search-first IA (grid + quick filters), a detail page that surfaces what matters (pricing, features, floor plan, location), and a single, confident enquiry flow. Under the hood we shipped performance-first media, SEO-ready listing structure, and clear trust signals (agent profiles, reviews, and process clarity).",
    results: [
      { label: "Qualified enquiries", value: "+41%" },
      { label: "Mobile load time", value: "-39%" },
      { label: "Local search traffic", value: "+58%" },
    ],
    hero: { src: "/projects/real-estate/hero.svg", alt: "Northline Estates hero" },
    gallery: [
      { src: "/projects/real-estate/01.svg", alt: "Listings grid with filters and quick actions" },
      { src: "/projects/real-estate/02.svg", alt: "Listing detail page highlighting key property info" },
      { src: "/projects/real-estate/03.svg", alt: "Fast enquiry flow optimized for mobile" },
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
      "A high-converting coaching site that makes the offer instantly clear—programs, proof, and pricing—then gets prospects into a booking or intake flow in a few taps.",
    problem:
      "The brand was strong on social, but the website didn’t do the selling. Visitors couldn’t quickly understand who the coaching is for, what’s included, or what to do next—so they bounced or DM’d with repetitive questions.",
    solution:
      "We rebuilt the page narrative around outcomes and clarity: a tight hero promise, three program tiers, proof blocks (testimonials, transformations, credentials), and an FAQ that removes objections. We then designed an intake-first conversion path (short questionnaire → booking) to qualify leads and reduce manual admin.",
    results: [
      { label: "Program sign-ups", value: "+36%" },
      { label: "Booking completion", value: "+28%" },
      { label: "FAQ-related DMs", value: "-32%" },
    ],
    hero: { src: "/projects/fitness-coaching/hero.svg", alt: "Pulse Coaching hero" },
    gallery: [
      { src: "/projects/fitness-coaching/01.svg", alt: "Program tier overview with clear inclusions" },
      { src: "/projects/fitness-coaching/02.svg", alt: "Social proof section with testimonials and outcomes" },
      { src: "/projects/fitness-coaching/03.svg", alt: "Intake + booking flow optimized for speed" },
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
      "A warm, modern café site where the essentials are effortless: menu, hours, location, and events—designed to feel handcrafted while staying lightning fast on mobile.",
    problem:
      "Guests couldn’t quickly find the menu, opening hours, or how to book. On mobile, the site loaded slowly and lacked clear local SEO structure—hurting discovery and causing avoidable calls/messages.",
    solution:
      "We rebuilt the experience around top tasks: a scroll-friendly menu, a persistent location/hours block, and clear booking/event CTAs. We also shipped local SEO improvements (clean page structure, metadata, and fast media) so the café shows up when people search nearby.",
    results: [
      { label: "Direction clicks", value: "+47%" },
      { label: "Menu views", value: "+62%" },
      { label: "Call/message requests", value: "-26%" },
    ],
    hero: { src: "/projects/cafe/hero.svg", alt: "Ember Café hero" },
    gallery: [
      { src: "/projects/cafe/01.svg", alt: "Typography-led menu layout designed for scanning" },
      { src: "/projects/cafe/02.svg", alt: "Location, hours, and contact information layout" },
      { src: "/projects/cafe/03.svg", alt: "Reservations and events call-to-action section" },
    ],
    accent: { from: "#A78BFA", to: "#60A5FA" },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

