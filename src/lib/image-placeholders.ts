export function svgGradientPlaceholder(opts: {
  seed: string;
  title?: string;
  subtitle?: string;
}) {
  const { seed, title = "WebNordic", subtitle = "Case study preview" } = opts;

  // Deterministic-ish variation from seed (simple hash).
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const a = (h % 360) | 0;
  const b = ((a + 38 + (h % 27)) % 360) | 0;

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${a} 90% 60%)" stop-opacity="0.95"/>
      <stop offset="1" stop-color="hsl(${b} 90% 60%)" stop-opacity="0.92"/>
    </linearGradient>
    <radialGradient id="v" cx="50%" cy="55%" r="65%">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.14"/>
      <stop offset="1" stop-color="#000000" stop-opacity="0.38"/>
    </radialGradient>
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 0.10 0"/>
    </filter>
  </defs>
  <rect width="1600" height="1000" fill="url(#g)"/>
  <rect width="1600" height="1000" fill="url(#v)"/>
  <rect width="1600" height="1000" filter="url(#n)" opacity="0.5"/>
  <g fill="none" stroke="rgba(255,255,255,0.24)" stroke-width="1">
    <path d="M220 210h1160" opacity="0.55"/>
    <path d="M220 270h740" opacity="0.35"/>
    <path d="M220 330h980" opacity="0.28"/>
    <path d="M220 820h1160" opacity="0.22"/>
  </g>
  <g fill="rgba(255,255,255,0.92)">
    <text x="220" y="520" font-size="52" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI" letter-spacing="-0.04em">${escapeXml(
      title
    )}</text>
    <text x="220" y="580" font-size="22" font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI" opacity="0.86">${escapeXml(
      subtitle
    )}</text>
  </g>
</svg>`.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

