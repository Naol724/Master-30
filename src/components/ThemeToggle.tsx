"use client";

import type { ThemeMode } from "@/lib/storage";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
  /** Show "Light" / "Dark" text next to the icon (desktop nav). */
  showLabel?: boolean;
  className?: string;
};

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

export function ThemeToggle({
  theme,
  onToggle,
  showLabel = false,
  className = "",
}: ThemeToggleProps) {
  const label = theme === "dark" ? "Light" : "Dark";
  const fullLabel = theme === "dark" ? "Light mode" : "Dark mode";

  return (
    <button
      type="button"
      className={`theme-toggle-btn${className ? ` ${className}` : ""}`}
      aria-label={
        theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      title={fullLabel}
      onClick={onToggle}
    >
      <ThemeIcon theme={theme} />
      {showLabel ? <span className="theme-toggle-label">{label}</span> : null}
      <span className="theme-toggle-label-full">{fullLabel}</span>
    </button>
  );
}
