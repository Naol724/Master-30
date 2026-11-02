"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#path", label: "The Path" },
  { href: "#inside", label: "Inside" },
  { href: "#start", label: "Start" },
  { href: "/workspace/", label: "Workspace" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function close() {
    setOpen(false);
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
    </header>
  );
}
