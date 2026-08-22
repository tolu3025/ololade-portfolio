import React from 'react';
import { skillColumns } from '../data/skills';

export default function SkillsSection() {
  return (
    <section id="skills" className="editorial-section" aria-label="Skills & Capabilities Section">
      <div className="content-container">
        <div className="section-eyebrow">
          04 — SKILLS
        </div>

        <h2 className="section-heading">
          The work behind the result.
        </h2>

        <p className="section-subtext">
          Methodological discipline, specialized statistical software, and academic editorial rigor applied to turn raw findings into defensible scholarship.
        </p>

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
  );
}
