type HeroProps = {
  progress: number;
};

const CIRCLE_CIRCUMFERENCE = 502;

export function Hero({ progress }: HeroProps) {
  const strokeDashoffset =
    CIRCLE_CIRCUMFERENCE - CIRCLE_CIRCUMFERENCE * (progress / 100);

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text-block">
          <span className="hero-tagline">30-Day Business Mastery Blueprint</span>
          <h1>Master Entrepreneurship, Build Sustainable Wealth.</h1>
          <p>
            An intensive, actionable digital workspace designed to transition
            you from an employee mindset to a verified high-growth founder
            strategy in 4 structural sprint phases.
          </p>

          <div className="hero-stats">
            <div className="stat-card">
              <span className="stat-val">3-4 Hrs</span>
              <span className="stat-lbl">Daily Commitment</span>
            </div>
            <div className="stat-card">
              <span className="stat-val">30 Days</span>
              <span className="stat-lbl">Execution Track</span>
            </div>
            <div className="stat-card">
              <span className="stat-val">04 Weeks</span>
              <span className="stat-lbl">Curriculum Blocks</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="radial-progress-card">
            <div className="svg-circle-container">
              <svg width="180" height="180">
                <circle className="circle-bg" cx="90" cy="90" r="80" />
                <circle
                  className="circle-progress"
                  id="radialCircleProgress"
                  cx="90"
                  cy="90"
                  r="80"
                  style={{ strokeDashoffset }}
                />
              </svg>
              <div className="circle-percentage" id="radialProgressText">
                {progress}%
              </div>
            </div>
            <h3 style={{ marginBottom: "0.5rem" }}>Your Roadmap Velocity</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Track completion across all milestones globally inside local state
              storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
