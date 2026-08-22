import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import WorkflowVisual from '../components/WorkflowVisual';
import FactLedger from '../components/FactLedger';
import { projects } from '../data/projects';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="page-wrapper">
      <Hero />
      <WorkflowVisual />

      {/* Overview Section: Selected Work Highlight */}
      <section className="editorial-section">
        <div className="content-container">
          <div className="section-eyebrow">
            03 — SELECTED WORK PREVIEW
          </div>

          <div className="section-header-split">
            <h2 className="section-heading">
              Research support, from question to interpretation.
            </h2>
            <Link to="/work" className="btn-secondary">
              VIEW ALL 10 PROJECTS
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="section-subtext">
            A snapshot of experimental pharmacology, nutritional biochemistry, and academic data projects. All case studies are anonymized.
          </p>

          <div className="featured-projects-grid">
            {featuredProjects.map((p) => (
              <div key={p.id} className="featured-project-card">
                <div className="featured-card-top">
                  <span className="featured-year">{p.year}</span>
                  <span className="project-tag">{p.tag}</span>
                </div>
                <h3 className="featured-title">{p.title}</h3>
                <p className="featured-desc">{p.description}</p>
                <div className="featured-card-footer">
                  <Link to="/work" className="featured-explore-link">
                    Open Research Entry
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section: About & Fact Ledger */}
      <section className="editorial-section">
        <div className="content-container">
          <div className="section-eyebrow">
            02 — ABOUT &amp; PRINCIPLES
          </div>

          <div className="about-grid">
            <div className="about-text-column">
              <h2 className="section-heading">
                Research is only useful when the evidence is clear.
              </h2>
              <p className="about-paragraph">
                Ololade provides independent research support to undergraduate and postgraduate students across disciplines, helping them move from research questions and literature to structured methodology, clean datasets, statistical analysis and understandable results.
              </p>
              <p className="about-paragraph">
                The approach is <strong>evidence-first</strong>. The goal is not simply to make a project look complete or chase a particular grade. The work should be traceable, appropriately analysed and explained clearly enough for the researcher to defend the decisions behind it.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <Link to="/about" className="btn-secondary">
                  READ ACADEMIC PROFILE
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="about-ledger-column">
              <FactLedger />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Scoping Banner */}
      <section className="editorial-section" style={{ borderBottom: 'none' }}>
        <div className="content-container">
          <div className="consultation-banner">
            <div className="banner-left">
              <div className="section-eyebrow">
                05 — GET IN TOUCH
              </div>
              <h2 className="section-heading" style={{ marginBottom: '1rem' }}>
                Have research that needs analytical clarity?
              </h2>
              <p className="banner-text">
                Whether you need help structuring experimental methodology, running ANOVA in SPSS, graphing in GraphPad Prism, or editing your thesis for academic defense, let&apos;s discuss your study.
              </p>
            </div>
            <div className="banner-right">
              <Link to="/contact" className="btn-primary">
                START CONSULTATION
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
