import React from 'react';
import FactLedger from './FactLedger';

export default function AboutSection() {
  return (
    <section id="about" className="editorial-section" aria-label="About Section">
      <div className="content-container">
        <div className="section-eyebrow">
          02 — ABOUT
        </div>

        <h2 className="section-heading">
          Research is only useful when the evidence is clear.
        </h2>

        <div className="about-grid">
          {/* Left Narrative Column */}
          <div className="about-text-column">
            <p className="about-paragraph">
              Ololade provides independent research support to undergraduate and postgraduate students across disciplines, helping them move from initial research questions and literature to structured methodology, clean datasets, statistical analysis and understandable results.
            </p>

            <p className="about-paragraph">
              The approach is <strong>evidence-first</strong>. The goal is not simply to make a project look complete or chase a particular grade. The work should be traceable, appropriately analysed and explained clearly enough for the researcher to defend the decisions behind it.
            </p>

            <p className="about-paragraph">
              With a background in Pharmacology and active work in scientific education as an NYSC Teaching Corps Member in Biology, every project is treated with methodological discipline — ensuring that statistical tests match experimental hypotheses and that conclusions remain firmly anchored in the data.
            </p>
          </div>

          {/* Right Archival Fact Ledger */}
          <div className="about-ledger-column">
            <FactLedger />
          </div>
        </div>
      </div>
    </section>
  );
}
