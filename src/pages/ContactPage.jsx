import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    discipline: 'Pharmacology',
    stage: 'Statistical Analysis & Interpretation',
    notes: ''
  });

  const contactLinks = [
    {
      type: 'EMAIL',
      display: 'ololadejoseph2003@gmail.com',
      href: 'mailto:ololadejoseph2003@gmail.com',
      isExternal: false
    },
    {
      type: 'PHONE',
      display: '+234 706 568 4718',
      href: 'tel:+2347065684718',
      isExternal: false
    },
    {
      type: 'LINKEDIN',
      display: 'Joseph Ololade',
      href: 'https://www.linkedin.com/in/joseph-ololade',
      isExternal: true
    },
    {
      type: 'RESUME',
      display: 'Download CV (PDF)',
      href: '/assets/Ololade-Berachiah-Joseph-CV.pdf',
      isExternal: true
    }
  ];

  const consultationScopes = [
    {
      level: 'UNDERGRADUATE THESIS',
      items: [
        'Methodology & protocol structuring',
        'Data cleaning & error checking',
        'SPSS descriptive & ANOVA testing',
        'Clear results presentation & defence prep'
      ]
    },
    {
      level: 'POSTGRADUATE DISSERTATION',
      items: [
        'Literature review & theoretical framing',
        'Multi-factorial experimental analysis',
        'GraphPad Prism dose-response curves',
        'Defensible statistical interpretation'
      ]
    },
    {
      level: 'ACADEMIC EDITING & AUDIT',
      items: [
        'Manuscript flow & coherence check',
        'Scientific terminology precision',
        'Referencing & citation audit',
        'Traceable argument refinement'
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Research Consultation Inquiry — ${formData.discipline || 'Academic Project'}`
    );
    const body = encodeURIComponent(
      `Dear Ololade,\n\nI am reaching out regarding a research consultation.\n\n` +
      `Researcher/Client Name: ${formData.name || '[My Name]'}\n` +
      `Discipline/Field: ${formData.discipline}\n` +
      `Current Project Stage: ${formData.stage}\n\n` +
      `Study Summary & Specific Assistance Needed:\n${formData.notes || '[Describe your research question or dataset here]'}\n\n` +
      `Best regards,\n${formData.name || ''}`
    );
    return `mailto:ololadejoseph2003@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="content-container">
          <div className="section-eyebrow">
            05 — CONTACT &amp; CONSULTATION
          </div>
          <h1 className="page-main-heading">
            Let&apos;s work together.
          </h1>
          <p className="page-intro-text">
            Have a research question, experimental dataset, or academic manuscript that needs methodological rigor and analytical clarity?
          </p>
        </div>
      </section>

      {/* Main Communication Channels */}
      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="content-container">
          <div className="contact-layout">
            <div className="contact-intro">
              <h2 className="section-heading" style={{ fontSize: '1.8rem', marginBottom: '1.25rem' }}>
                Direct Channels
              </h2>
              <p className="contact-body">
                Whether you need help structuring an experimental protocol, auditing a raw dataset in Excel, running inferential tests in SPSS, graphing in GraphPad Prism, or editing your thesis for academic defense, get in touch through any of the channels below.
              </p>
              <p className="contact-body">
                Response time is typically within 24 hours. Initial discussions focus on scoping research questions, evaluating data readiness, and defining clear deliverables.
              </p>
            </div>

            <div className="contact-links-container" role="list">
              {contactLinks.map((item) => (
                <a
                  key={item.type}
                  href={item.href}
                  className="contact-link-row"
                  role="listitem"
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                >
                  <span className="contact-link-type">{item.type}</span>
                  <span className="contact-link-value">{item.display}</span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Scopes */}
      <section className="editorial-section">
        <div className="content-container">
          <div className="section-eyebrow">
            SERVICE SCOPES
          </div>
          <h2 className="section-heading">
            How we can collaborate.
          </h2>
          <p className="section-subtext">
            Tailored research support structured to maintain academic integrity while maximizing analytical quality.
          </p>

          <div className="scopes-grid">
            {consultationScopes.map((scope) => (
              <div key={scope.level} className="scope-card">
                <span className="scope-level-tag">{scope.level}</span>
                <ul className="scope-items-list">
                  {scope.items.map((item, idx) => (
                    <li key={idx} className="scope-item">
                      <span className="scope-bullet" aria-hidden="true">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Inquiry Builder */}
      <section className="editorial-section">
        <div className="content-container">
          <div className="section-eyebrow">
            PROJECT SCOPING HELPER
          </div>
          <h2 className="section-heading">
            Draft a consultation inquiry.
          </h2>
          <p className="section-subtext">
            Fill in your study details below to generate a pre-formatted email directly to Ololade.
          </p>

          <form className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="inquiry-name" className="form-label">YOUR NAME</label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  placeholder="e.g. Adeyemi Adeleke"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inquiry-discipline" className="form-label">RESEARCH DISCIPLINE</label>
                <select
                  id="inquiry-discipline"
                  name="discipline"
                  value={formData.discipline}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Pharmacology">Pharmacology</option>
                  <option value="Toxicology">Toxicology</option>
                  <option value="Biochemistry & Nutrition">Biochemistry &amp; Nutrition</option>
                  <option value="Physiology">Physiology</option>
                  <option value="Nursing & Public Health">Nursing &amp; Public Health</option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Social Science / Survey">Social Science / Survey</option>
                  <option value="Other Discipline">Other Discipline</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="inquiry-stage" className="form-label">CURRENT PROJECT STAGE</label>
                <select
                  id="inquiry-stage"
                  name="stage"
                  value={formData.stage}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="Proposal & Methodology Design">Proposal &amp; Methodology Design</option>
                  <option value="Raw Data Entry & Data Cleaning">Raw Data Entry &amp; Data Cleaning</option>
                  <option value="Statistical Analysis & Interpretation">Statistical Analysis &amp; Interpretation</option>
                  <option value="Results Presentation & GraphPad Charts">Results Presentation &amp; GraphPad Charts</option>
                  <option value="Full Manuscript Editing & Proofreading">Full Manuscript Editing &amp; Proofreading</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="inquiry-notes" className="form-label">BRIEF STUDY SUMMARY / OBJECTIVES</label>
                <textarea
                  id="inquiry-notes"
                  name="notes"
                  rows="4"
                  placeholder="Briefly state your study objective, experimental groups, sample size, or specific statistical test needed..."
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="form-textarea"
                />
              </div>
            </div>

            <div className="form-actions">
              <a href={getMailtoLink()} className="btn-primary">
                SEND EMAIL INQUIRY
                <span aria-hidden="true">✉</span>
              </a>
              <span className="form-hint">
                Opens your default email client with structured research notes.
              </span>
            </div>
          </form>
        </div>
      </section>

      {/* Archival Closing Statement */}
      <section className="editorial-section" style={{ borderBottom: 'none' }}>
        <div className="content-container">
          <div className="contact-statement-box">
            <div className="contact-statement-eyebrow">
              RESEARCH / DATA / EVIDENCE
            </div>
            <p className="contact-statement-text">
              Available for selected undergraduate, postgraduate and independent research projects across Nigeria and remote international scholars.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
