import React from 'react';
import { Link } from 'react-router-dom';
import { skillColumns } from '../data/skills';

export default function SkillsPage() {
  const softwareDetails = [
    {
      tool: 'SPSS',
      domain: 'Statistical Analysis & Hypothesis Testing',
      desc: 'Dataset coding, variable dictionary setup, descriptive parameters, One-way / Two-way ANOVA, Tukey & Dunnett post-hoc comparisons, and translating raw SPSS output into readable manuscript tables.'
    },
    {
      tool: 'GraphPad Prism',
      domain: 'Experimental Data & Scientific Figures',
      desc: 'Generating publication-standard biological figures, dose-response non-linear regression curves, IC₅₀ calculations, bar charts with mean ± SEM error bars, and statistical significance notation.'
    },
    {
      tool: 'Microsoft Excel',
      domain: 'Data Organization & Assay Kinetics',
      desc: 'Structuring raw laboratory bench sheets, enzyme inhibition kinetics, Bradford assay standard curves, automated calculations, and summary pivot matrices.'
    },
    {
      tool: 'Python (In Progress)',
      domain: 'Computational Foundations',
      status: 'LEARNING',
      desc: 'Actively building scripting competencies for automated dataset cleaning, exploratory data workflows, and reproducible scientific workflows.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="content-container">
          <div className="section-eyebrow">
            04 — SKILLS, TOOLS &amp; CAPABILITIES
          </div>
          <h1 className="page-main-heading">
            The work behind the result.
          </h1>
          <p className="page-intro-text">
            Methodological discipline, specialized statistical software, and academic editorial rigor applied to turn raw findings into defensible scholarship.
          </p>
        </div>
      </section>

      {/* 3 Editorial Columns */}
      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="content-container">
          <div className="skills-columns-grid">
            {skillColumns.map((col) => (
              <div key={col.id} className="skill-card">
                <div className="skill-card-header">
                  <span className="skill-card-label">{col.label}</span>
                  <span className="skill-card-index">{col.number} / 03</span>
                </div>

                <div className="skill-items-list">
                  {col.items.map((item, idx) => (
                    <div key={idx} className="skill-line-item">
                      <div className="skill-line-top">
                        <span className="skill-name">{item.name}</span>
                        {item.status && (
                          <span className="skill-learning-pill">{item.status}</span>
                        )}
                      </div>
                      {item.desc && (
                        <span className="skill-desc">{item.desc}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Depth Software Breakdown */}
      <section className="editorial-section">
        <div className="content-container">
          <div className="section-eyebrow">
            SOFTWARE &amp; ANALYTICAL TOOLKIT
          </div>
          <h2 className="section-heading">
            Analytical precision in practice.
          </h2>
          <p className="section-subtext">
            How software packages are deployed to structure datasets, perform inferential calculations, and format findings.
          </p>

          <div className="tools-deep-grid">
            {softwareDetails.map((s) => (
              <div key={s.tool} className="tool-deep-card">
                <div className="tool-deep-top">
                  <span className="tool-deep-name">{s.tool}</span>
                  {s.status && (
                    <span className="skill-learning-pill">{s.status}</span>
                  )}
                </div>
                <span className="tool-deep-domain">{s.domain}</span>
                <p className="tool-deep-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Step Banner */}
      <section className="editorial-section" style={{ borderBottom: 'none' }}>
        <div className="content-container">
          <div className="consultation-banner">
            <div className="banner-left">
              <div className="section-eyebrow">NEXT SECTION</div>
              <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
                Ready to Discuss Your Research?
              </h2>
              <p className="banner-text">
                Reach out to schedule research consultation, data cleaning, or manuscript review.
              </p>
            </div>
            <div className="banner-right">
              <Link to="/contact" className="btn-primary">
                GO TO CONTACT &amp; CONSULTATION
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
