import Link from "next/link";
import { LandingNav } from "./LandingNav";
import { LandingFooter } from "./LandingFooter";

const WEEKS = [
  {
    num: "01",
    title: "Foundations & Mindset",
    copy: "Reprogram money beliefs, audit assets, and lock a structural vision.",
  },
  {
    num: "02",
    title: "Customer Psychology",
    copy: "Run discovery conversations and isolate real purchase triggers.",
  },
  {
    num: "03",
    title: "Monetization Architecture",
    copy: "Map unit economics, pricing tiers, and a one-page business canvas.",
  },
  {
    num: "04",
    title: "Execution & Strategy",
    copy: "Ship a 90-day plan and take your first live market action.",
  },
];

const INSIDE = [
  {
    title: "Daily roadmap",
    copy: "28 structured days with tasks, outcomes, and progress tracking that saves locally.",
  },
  {
    title: "Strategic sandboxes",
    copy: "TAM/SAM/SOM and pricing calculators for live market math—not theory.",
  },
  {
    title: "Business model canvas",
    copy: "A persistent one-page workspace for partners, value, costs, and revenue.",
  },
  {
    title: "Knowledge vault",
    copy: "Curated books and links wired into the days that need them most.",
  },
];

export function LandingPage() {
  return (
    <div className="lp" id="top">
      <LandingNav />

      <section className="lp-hero" aria-label="Hero">
        <div className="lp-hero-glow" aria-hidden />
        <div className="lp-hero-grid" aria-hidden />
        <div className="lp-hero-orbit" aria-hidden>
          <svg viewBox="0 0 480 480" className="lp-hero-ring">
            <circle cx="240" cy="240" r="180" />
            <circle cx="240" cy="240" r="130" />
            <circle cx="240" cy="240" r="80" />
          </svg>
        </div>

        <div className="container lp-hero-content">
          <p className="lp-brand-hero">MASTERY.30</p>
          <h1>Thirty days to founder-grade execution.</h1>
          <p className="lp-hero-lead">
            An intensive workspace that moves you from employee mindset to a
            verified high-growth founder track—one structured sprint at a time.
          </p>
          <div className="lp-hero-actions">
            <Link href="/workspace/" className="lp-btn lp-btn-primary">
              Enter Workspace
            </Link>
            <a href="#path" className="lp-btn lp-btn-ghost">
              See the path
            </a>
          </div>
        </div>
      </section>

      <section className="lp-section" id="path">
        <div className="container">
          <div className="lp-section-head">
            <p className="lp-kicker">The Path</p>
            <h2>Four weeks. One operating system.</h2>
            <p>
              Each block compounds into the next—mindset, customers, monetization,
              then launch.
            </p>
          </div>

          <ol className="lp-path-list">
            {WEEKS.map((week) => (
              <li key={week.num} className="lp-path-row">
                <span className="lp-path-num">{week.num}</span>
                <div>
                  <h3>{week.title}</h3>
                  <p>{week.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="lp-section lp-section-alt" id="inside">
        <div className="container">
          <div className="lp-section-head">
            <p className="lp-kicker">Inside</p>
            <h2>Everything you need to execute.</h2>
            <p>
              Open the workspace once—your progress, canvas, and checkpoints stay
              with you.
            </p>
          </div>

          <div className="lp-inside-list">
            {INSIDE.map((item) => (
              <article key={item.title} className="lp-inside-item">
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-cta" id="start">
        <div className="container lp-cta-inner">
          <h2>Start Day 1 today.</h2>
          <p>
            No signup wall. Enter the workspace, track every milestone, and build
            the system that compounds.
          </p>
          <Link href="/workspace/" className="lp-btn lp-btn-primary">
            Open MASTERY.30 Workspace
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
