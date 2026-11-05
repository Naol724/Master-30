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
          <Link href="/workspace/" className="lp-nav-cta" onClick={close}>
            Enter Workspace
          </Link>
        </nav>

        <div className="lp-nav-actions">
          <button
            type="button"
            className="lp-theme-toggle"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
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
