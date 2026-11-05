"use client";

import Link from "next/link";
import { startTransition, useEffect, useState } from "react";
import { readTheme, writeTheme, type ThemeMode } from "@/lib/storage";

const LINKS = [
  { href: "#path", label: "The Path" },
  { href: "#inside", label: "Inside" },
  { href: "#start", label: "Start" },
  { href: "/workspace/", label: "Workspace" },
];

function ThemeIcon({ theme }: { theme: ThemeMode }) {
  if (theme === "dark") {
    return (
      <svg
        viewBox="0 0 24 24"
        width="16"
        height="16"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 14.5A8.5 8.5 0 1 1 9.5 3a7 7 0 0 0 11.5 11.5z" />
    </svg>
  );
}

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const saved = readTheme();
    document.documentElement.setAttribute("data-theme", saved);
    startTransition(() => setTheme(saved));
  }, []);

  function close() {
    setOpen(false);
  }

  function toggleTheme() {
    const next: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    writeTheme(next);
  }

  return (
    <header className={`lp-nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="container lp-nav-inner">
        <Link href="/" className="lp-brand" onClick={close}>
          <span className="lp-brand-mark" aria-hidden>
            ⚡
          </span>
          <span className="lp-brand-name">MASTERY.30</span>
        </Link>

        <nav
          className={`lp-nav-links${open ? " is-open" : ""}`}
          aria-label="Primary"
        >
          {LINKS.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                className="lp-nav-link"
                onClick={close}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="lp-nav-link"
                onClick={close}
              >
                {link.label}
              </a>
            ),
          )}
          <button
            type="button"
            className="lp-theme-toggle lp-theme-toggle-mobile"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            onClick={toggleTheme}
          >
            <ThemeIcon theme={theme} />
            <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
          </button>
          <Link href="/workspace/" className="lp-nav-cta" onClick={close}>
            Enter Workspace
          </Link>
        </nav>

        <div className="lp-nav-actions">
          <button
            type="button"
            className="lp-theme-toggle lp-theme-toggle-desktop"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={toggleTheme}
          >
            <ThemeIcon theme={theme} />
            <span className="lp-theme-label">
              {theme === "dark" ? "Light" : "Dark"}
            </span>
          </button>
          <Link href="/workspace/" className="lp-nav-cta lp-nav-cta-desktop">
            Enter Workspace
          </Link>
          <button
            type="button"
            className={`lp-menu-btn${open ? " is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
