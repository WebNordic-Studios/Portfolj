"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("wns-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("wns-theme", theme);
  }, [theme]);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="group inline-flex h-10 items-center gap-2 rounded-full border px-4 text-sm tracking-tight backdrop-blur transition hover:bg-black/5 dark:hover:bg-white/5"
      style={{ borderColor: "rgb(var(--line))" }}
      aria-label="Toggle theme"
    >
      <span className="text-[rgb(var(--muted))] group-hover:text-[rgb(var(--fg))] transition">
        {theme === "dark" ? "Dark" : "Light"}
      </span>
      <span className="text-[rgb(var(--muted))]">·</span>
      <span className="font-medium">Toggle</span>
    </button>
  );
}

