import { libraryData } from "@/data/library";

export function VaultSection() {
  return (
    <section className="vault-section" id="vault">
      <div className="container">
        <div style={{ maxWidth: 700 }}>
          <span className="hero-tagline">Curated Strategic Library Asset</span>
          <h2>The Elite Knowledge Vault</h2>
          <p style={{ color: "var(--text-secondary)" }}>
            Master foundational blueprints recommended within curriculum
            milestones.
          </p>
        </div>

        <div className="vault-grid-layout" id="vaultBooksAnchor">
          {libraryData.map((book) => (
            <div className="vault-book-card" key={book.title}>
              <div>
                <span className={`book-tier-tag tier-${book.tier}`}>
                  {book.tier}
                </span>
                <h4>{book.title}</h4>
                <div className="book-author">By {book.author}</div>
                <p className="book-description">{book.desc}</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                {book.link ? (
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-btn"
                    style={{
                      background: "var(--accent-primary)",
                      color: "#fff",
                      borderColor: "var(--accent-secondary)",
                    }}
                  >
                    <span>Read Online</span>
                    <span>➔</span>
                  </a>
                ) : (
                  <div
                    className="resource-btn"
                    style={{ opacity: 0.5, cursor: "not-allowed" }}
                  >
                    <span>No Link Available</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
