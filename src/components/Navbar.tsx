"use client";

type NavbarProps = {
  progress: number;
  mobileMenuOpen: boolean;
  onToggleTheme: () => void;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function Navbar({
  progress,
  mobileMenuOpen,
  onToggleTheme,
  onToggleMenu,
  onCloseMenu,
}: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#" className="logo">
          ⚡ MASTERY.30
        </a>

        <div
          className={`nav-links${mobileMenuOpen ? " mobile-open" : ""}`}
          id="navLinksMenu"
        >
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
          <button
            className="theme-toggle"
            id="globalThemeToggleBtn"
            aria-label="Toggle Theme"
            type="button"
            onClick={onToggleTheme}
          >
            🌓
          </button>
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
