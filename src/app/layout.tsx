import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WebNordic Studios — Premium Web Design Portfolio",
    template: "%s — WebNordic Studios",
  },
  description:
    "A premium digital studio crafting high-performing websites for modern brands. Selected work, case studies, and results by WebNordic Studios.",
  metadataBase: new URL("https://webnordicstudios.com"),
  openGraph: {
    title: "WebNordic Studios",
    description:
      "Selected work by WebNordic Studios — high-performing websites for modern brands.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebNordic Studios",
    description:
      "Selected work by WebNordic Studios — high-performing websites for modern brands.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[rgb(var(--bg))] text-[rgb(var(--fg))] selection:bg-white/10 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
