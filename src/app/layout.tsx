import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TransitionLayout } from "@/components/TransitionLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const space = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WebNordic Studios — Selected Work",
    template: "%s — WebNordic Studios",
  },
  description:
    "A modern web agency crafting premium, motion-first digital experiences. Explore selected work, process, and services.",
  metadataBase: new URL("https://webnordic.studio"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${space.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <Cursor />
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-grid opacity-[0.18]" />
          <div className="absolute inset-0 noise opacity-[0.32]" />
          <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-400/20 blur-3xl" />
        </div>

        <Nav />
        <main className="flex-1 pt-24">
          <TransitionLayout>{children}</TransitionLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
