import Link from "next/link";

const FOOTER_LINKS = [
  { href: "#path", label: "The Path" },
  { href: "#inside", label: "Inside the Workspace" },
  { href: "/workspace/", label: "Open Workspace" },
  { href: "/workspace/#roadmap", label: "30-Day Roadmap" },
  { href: "/workspace/#tools", label: "Strategic Sandboxes" },
  { href: "/workspace/#vault", label: "Knowledge Vault" },
];

export function LandingFooter() {
  return (
    <footer className="lp-footer">
      <div className="container lp-footer-grid">
        <div className="lp-footer-brand">
          <Link href="/" className="lp-brand">
            <span className="lp-brand-mark" aria-hidden>
              ⚡
            </span>
            <span className="lp-brand-name">MASTERY.30</span>
          </Link>
          <p>
            A 30-day execution system for founders who build wealth through
            structure—not guesswork.
          </p>
        </div>

        <div className="lp-footer-col">
          <h4>Navigate</h4>
          <ul>
            {FOOTER_LINKS.slice(0, 3).map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link href={link.href}>{link.label}</Link>
                ) : (
                  <a href={link.href}>{link.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lp-footer-col">
          <h4>Workspace</h4>
          <ul>
            {FOOTER_LINKS.slice(3).map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container lp-footer-bottom">
        <p>&copy; {new Date().getFullYear()} MASTERY.30. Built for execution.</p>
        <a href="#top" className="lp-footer-top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
