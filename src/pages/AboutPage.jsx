import React from 'react';
import { Link } from 'react-router-dom';
import FactLedger from '../components/FactLedger';

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Traceable Methodology',
      desc: 'Research protocols must be transparent, logically sequenced, and rigorously documented so that every experimental decision can be audited and defended.'
    },
    {
      num: '02',
      title: 'Sound Statistical Framing',
      desc: 'Statistical tools must fit the data structure. Choosing ANOVA, post-hoc Tukey tests, or non-parametric alternatives is guided strictly by distributional assumptions and research hypotheses.'
    },
    {
      num: '03',
      title: 'Data Integrity & Cleaning',
      desc: 'Uncleaned data produces untrustworthy results. Systematic screening for input errors, coding inconsistencies, and missing-variable patterns precedes all inferential testing.'
    },
    {
      num: '04',
      title: 'Defensible Interpretation',
      desc: 'The objective is never to inflate findings or chase predetermined conclusions, but to communicate what the evidence genuinely proves with precision and academic modesty.'
    }
  ];

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="content-container">
          <div className="section-eyebrow">
            02 — ACADEMIC PROFILE &amp; PHILOSOPHY
          </div>
          <h1 className="page-main-heading">
            Research is only useful when the evidence is clear.
          </h1>
          <p className="page-intro-text">
            An independent research consultant and pharmacology graduate helping undergraduate and postgraduate scholars turn raw hypotheses and complex datasets into structured, defensible academic scholarship.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="content-container">
          <div className="about-grid">
            <div className="about-text-column">
              <h2 className="section-heading" style={{ fontSize: '1.8rem', marginBottom: '1.25rem' }}>
                Bridging Laboratory Science &amp; Statistical Interpretation
              </h2>

              <p className="about-paragraph">
                Ololade provides independent research support to undergraduate and postgraduate students across biological, health, and social sciences. The work spans the entire research lifecycle: moving from broad research questions and literature synthesis to structured experimental methodology, clean datasets, statistical analysis, and understandable results.
              </p>

              <p className="about-paragraph">
                The approach is <strong>evidence-first</strong>. The goal is not simply to make a project look complete or chase a particular grade. The work should be traceable, appropriately analysed, and explained clearly enough for the researcher to defend every decision behind it before supervisors, review boards, and external examiners.
              </p>

              <p className="about-paragraph">
                With a foundational background in <strong>Pharmacology from Nigeria</strong> and active work in scientific education as an <strong>NYSC Teaching Corps Member in Biology</strong>, Ololade brings pedagogical clarity to complex experimental concepts — ensuring scholars truly understand the statistical machinery behind their findings.
              </p>

              <div className="about-quote-box">
                <p className="about-quote-text">
                  &ldquo;A thesis is not evaluated by the volume of data generated, but by the rigor of its analysis and the clarity of its defense.&rdquo;
                </p>
              </div>
            </div>

            <div className="about-ledger-column">
              <FactLedger />
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="editorial-section">
        <div className="content-container">
          <div className="section-eyebrow">
            METHODOLOGICAL PILLARS
          </div>
          <h2 className="section-heading">
            Standards that govern every project.
          </h2>
          <p className="section-subtext">
            Consultancy support is built on four core principles to ensure academic integrity and defensibility.
          </p>

          <div className="principles-grid">
            {principles.map((item) => (
              <div key={item.num} className="principle-card">
                <div className="principle-num">{item.num}</div>
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Footer Banner */}
      <section className="editorial-section" style={{ borderBottom: 'none' }}>
        <div className="content-container">
          <div className="consultation-banner">
            <div className="banner-left">
              <div className="section-eyebrow">NEXT SECTION</div>
              <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
                Explore Selected Research Case Studies
              </h2>
              <p className="banner-text">
                Review 10 anonymized case studies across pharmacology, toxicology, biochemistry, and survey research.
              </p>
            </div>
            <div className="banner-right">
              <Link to="/work" className="btn-primary">
                VIEW SELECTED WORK
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
