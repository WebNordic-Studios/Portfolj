import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { TransitionLayout } from "@/components/TransitionLayout";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { ScrollBackdrop } from "@/components/ScrollBackdrop";

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
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground"
        suppressHydrationWarning
      >
        <ScrollProgress />
        <Cursor />
        <ScrollBackdrop />

        <Nav />
        <main className="flex-1 pt-24 w-full">
          <TransitionLayout>{children}</TransitionLayout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
