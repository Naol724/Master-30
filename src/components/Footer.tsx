import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer workspace-footer">
      <div className="container workspace-footer-grid">
        <div>
          <Link
            href="/"
            style={{ fontFamily: "var(--font-mono)", fontSize: "1.25rem" }}
          >
            MASTERY.30
          </Link>
          <p>
            Sustainable Wealth is Structured Through Action. Formulate
            Frameworks. Build Assets.
          </p>
        </div>

        <div className="workspace-footer-links">
          <Link href="/">Home</Link>
          <a href="#roadmap">Roadmap</a>
          <a href="#tools">Sandboxes</a>
          <a href="#vault">Vault</a>
        </div>
      </div>

      <div className="container">
        <p
          style={{
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            marginTop: "2rem",
          }}
        >
          &copy; {new Date().getFullYear()} Mastery Execution Engine Workspace.
          Built for founders who ship.
        </p>
      </div>
    </footer>
  );
}
