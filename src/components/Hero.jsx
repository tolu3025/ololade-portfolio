import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero" className="hero-section" aria-label="Hero Section">
      <div className="content-container">
        <div className="hero-grid">
          {/* Main Editorial Column */}
          <div className="hero-main">
            <div className="hero-eyebrow">
              RESEARCH &amp; DATA CONSULTANT
            </div>

            <h1 className="hero-name">
              <span className="hero-name-part">Ololade</span>
              <span className="hero-name-part">Berachiah</span>
              <span className="hero-name-part">Joseph</span>
            </h1>

            <div className="hero-accent-line">
              evidence you can defend.
            </div>

            <p className="hero-paragraph">
              Independent research consultant helping undergraduate and postgraduate researchers make sense of literature, methodology, data and statistical results — with an emphasis on clear evidence, sound analysis and work that can withstand academic scrutiny.
            </p>

            <div className="hero-meta-row">
              <div className="hero-meta-block">
                <span className="hero-meta-label">LOCATION</span>
                <span className="hero-meta-value">Nigeria / Remote</span>
              </div>
              <div className="hero-meta-block">
                <span className="hero-meta-label">AVAILABILITY</span>
                <span className="hero-meta-value">
                  <span className="status-dot" aria-hidden="true" />
                  Open to research projects
                </span>
              </div>
              <div className="hero-meta-block">
                <span className="hero-meta-label">CURRENT ROLE</span>
                <span className="hero-meta-value">NYSC Teaching Corps Member</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link to="/work" className="btn-primary">
                SEE THE WORK
                <span aria-hidden="true">→</span>
              </Link>
              <a
                href="/assets/Ololade-Berachiah-Joseph-CV.pdf"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                DOWNLOAD CV (PDF)
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* Right Archival Metadata Sidebar */}
          <div className="hero-archive-sidebar" aria-label="Archival Index Notation">
            <div className="archive-notation-group">
              <div className="archive-folio">01 / 05</div>
              <div className="archive-badge">
                RESEARCH / DATA / INTERPRETATION
              </div>
              <div className="archive-rule" aria-hidden="true" />
              <div className="archive-badge">
                PHARMACOLOGY &amp; EXPERIMENTAL DESIGN
              </div>
            </div>

            <div className="archive-principles">
              <span className="archive-principle-item">Traceable methodology</span>
              <span className="archive-principle-item">Defensible statistics</span>
              <span className="archive-principle-item">Clarity of argument</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
