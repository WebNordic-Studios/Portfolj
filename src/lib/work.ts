export type WorkTag = "Web Design" | "Development" | "Branding" | "SEO" | "UI Systems";

export type WorkResult = {
  label: string;
  value: string;
  note?: string;
};

export type WorkGalleryItem = {
  src: string;
  alt: string;
  hint?: string;
};

export type WorkCaseStudy = {
  slug: string;
  title: string;
  description: string;
  tags: WorkTag[];
  hero: {
    cover: string; // can be /public path or data URL
    coverAlt: string;
  };
  overview: {
    client: string;
    industry: string;
    goal: string;
  };
  problem: string;
  solution: string;
  results: WorkResult[];
  gallery: WorkGalleryItem[];
};

import { svgGradientPlaceholder } from "@/lib/image-placeholders";

// Note: These are representative case studies. Replace with real client work when ready.
export const WORK: WorkCaseStudy[] = [
  {
    slug: "solsidan-kaffe",
    title: "Sunny Side Coffee",
    description: "A calm, photo-driven café site with frictionless booking and menu discovery.",
    tags: ["Web Design", "Development", "Branding"],
    hero: {
      cover: svgGradientPlaceholder({
        seed: "solsidan-kaffe",
        title: "Sunny Side Coffee",
        subtitle: "Hospitality · Web Design + Dev",
      }),
      coverAlt: "Sunny Side Coffee website preview mockup",
    },
    overview: {
      client: "Sunny Side Coffee",
      industry: "Hospitality",
      goal: "Increase table bookings and reduce repetitive enquiries.",
    },
    problem:
      "The old site buried essentials (menu, hours, booking) behind clutter. Mobile users bounced before finding what they needed.",
    solution:
      "We rebuilt the information architecture around the top tasks, paired it with a minimal Scandinavian visual system, and designed a fast, accessible layout that keeps focus on the photography and booking path.",
    results: [
      { value: "+120%", label: "table booking clicks", note: "after redesign launch" },
      { value: "1.2s", label: "LCP on mobile", note: "image + layout tuning" },
      { value: "-34%", label: "repetitive enquiries", note: "hours/menu made obvious" },
    ],
    gallery: [
      {
        src: svgGradientPlaceholder({
          seed: "solsidan-1",
          title: "Homepage",
          subtitle: "Hero + booking path",
        }),
        alt: "Homepage hero with booking CTA",
        hint: "Hero + booking",
      },
      {
        src: svgGradientPlaceholder({
          seed: "solsidan-2",
          title: "Menu",
          subtitle: "Typography-led layout",
        }),
        alt: "Menu section with typography-led layout",
        hint: "Menu",
      },
      {
        src: svgGradientPlaceholder({
          seed: "solsidan-3",
          title: "Mobile",
          subtitle: "Fast booking flow",
        }),
        alt: "Mobile view showing booking flow",
        hint: "Mobile",
      },
    ],
  },
  {
    slug: "johanssons-rormokeri",
    title: "Johansson Plumbing",
    description: "Service clarity, on-call visibility, and a quote flow built for mobile urgency.",
    tags: ["Web Design", "Development", "SEO"],
    hero: {
      cover: svgGradientPlaceholder({
        seed: "johanssons-rormokeri",
        title: "Johansson Plumbing",
        subtitle: "Home Services · Web Design + SEO",
      }),
      coverAlt: "Johansson Plumbing website preview mockup",
    },
    overview: {
      client: "Johansson Plumbing",
      industry: "Home Services",
      goal: "Make on-call contact instant and increase qualified quote requests.",
    },
    problem:
      "Calls and quote requests were inconsistent because key information was scattered and CTAs competed with each other—especially on mobile.",
    solution:
      "We created a clean hierarchy with one primary action per view, improved trust signals, and structured the site for local SEO with service pages and clear internal linking.",
    results: [
      { value: "+68%", label: "quote form completions", note: "mobile-first improvements" },
      { value: "3×", label: "faster load time", note: "shipping less + better images" },
      { value: "+41%", label: "call clicks", note: "on-call always visible" },
    ],
    gallery: [
      {
        src: svgGradientPlaceholder({
          seed: "johansson-1",
          title: "Landing",
          subtitle: "On-call always visible",
        }),
        alt: "Service landing with on-call CTA",
        hint: "Landing",
      },
      {
        src: svgGradientPlaceholder({
          seed: "johansson-2",
          title: "Services",
          subtitle: "Clarity without noise",
        }),
        alt: "Service grid with icons",
        hint: "Services",
      },
      {
        src: svgGradientPlaceholder({
          seed: "johansson-3",
          title: "Mobile",
          subtitle: "Quote flow tuned for urgency",
        }),
        alt: "Mobile contact bar and form",
        hint: "Mobile",
      },
    ],
  },
  {
    slug: "nord-build-partners",
    title: "Nord Build Partners",
    description: "A premium construction portfolio that sells craftsmanship through imagery and proof.",
    tags: ["Web Design", "Development", "UI Systems"],
    hero: {
      cover: svgGradientPlaceholder({
        seed: "nord-build-partners",
        title: "Nord Build Partners",
        subtitle: "Construction · Portfolio system",
      }),
      coverAlt: "Nord Build Partners website preview mockup",
    },
    overview: {
      client: "Nord Build Partners",
      industry: "Construction",
      goal: "Show credibility and drive quote requests for higher-ticket projects.",
    },
    problem:
      "The team had strong projects but weak presentation—no consistent system, no results framing, and projects were hard to browse.",
    solution:
      "We designed a restrained grid system with generous whitespace, created a modular case study layout, and emphasized outcomes with small but confident metrics and testimonials.",
    results: [
      { value: "+52%", label: "qualified leads", note: "quote requests with scope details" },
      { value: "+29%", label: "time on site", note: "gallery-led browsing" },
      { value: "AA", label: "accessibility target", note: "contrast + semantics" },
    ],
    gallery: [
      {
        src: svgGradientPlaceholder({
          seed: "nordbuild-1",
          title: "Grid",
          subtitle: "Hover + focus states",
        }),
        alt: "Project grid with hover overlay",
        hint: "Grid",
      },
      {
        src: svgGradientPlaceholder({
          seed: "nordbuild-2",
          title: "Case Study",
          subtitle: "Big imagery, minimal copy",
        }),
        alt: "Case study layout with big imagery",
        hint: "Case study",
      },
      {
        src: svgGradientPlaceholder({
          seed: "nordbuild-3",
          title: "Mobile",
          subtitle: "Touch-first browsing",
        }),
        alt: "Mobile project page",
        hint: "Mobile",
      },
    ],
  },
];

export function getWork(slug: string) {
  return WORK.find((w) => w.slug === slug) ?? null;
}

