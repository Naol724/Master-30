"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { ThemeMode } from "@/lib/storage";

type NavbarProps = {
  progress: number;
  theme: ThemeMode;
  mobileMenuOpen: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Navbar({
  progress,
  theme,
  mobileMenuOpen,
  onToggleTheme,
  onToggleMenu,
  onCloseMenu,
}: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo">
          ⚡ MASTERY.30
        </Link>

        <div
          className={`nav-links${mobileMenuOpen ? " mobile-open" : ""}`}
          id="navLinksMenu"
        >
          <Link href="/" className="nav-link" onClick={onCloseMenu}>
            Home
          </Link>
          <a href="#roadmap" className="nav-link active" onClick={onCloseMenu}>
            Roadmap
          </a>
          <a href="#tools" className="nav-link" onClick={onCloseMenu}>
            Strategic Sandboxes
          </a>
          <a href="#vault" className="nav-link" onClick={onCloseMenu}>
            Knowledge Vault
          </a>
        </div>

        <div className="nav-actions">
          <div className="nav-progress">
            <div className="progress-bar-container">
              <div
                className="progress-bar-fill"
                id="globalProgressBarFill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="progress-text" id="globalProgressText">
              {progress}% Complete
            </span>
          </div>
          <ThemeToggle
            theme={theme}
            onToggle={onToggleTheme}
            showLabel
            className="theme-toggle-bar"
          />
          <button
            className={`mobile-menu-toggle${mobileMenuOpen ? " open" : ""}`}
            id="menuToggleBtn"
            aria-label="Toggle Menu"
            type="button"
            onClick={onToggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
