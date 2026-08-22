import React from 'react';

export default function ContactSection() {
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

  return (
    <section id="contact" className="editorial-section" aria-label="Contact Section">
      <div className="content-container">
        <div className="section-eyebrow">
          05 — CONTACT
        </div>

        <div className="contact-layout">
          {/* Left Intro Text */}
          <div className="contact-intro">
            <h2 className="section-heading">
              Let&apos;s work together.
            </h2>

            <p className="contact-subheading">
              Have a research question, dataset or project that needs a second pair of analytical eyes?
            </p>

            <p className="contact-body">
              Whether you need help structuring a study, cleaning a dataset, interpreting statistical output, reviewing a literature section or improving the clarity of an academic document, get in touch.
            </p>
          </div>

          {/* Right Editorial Link Registry */}
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

        {/* Archival Closing Statement */}
        <div className="contact-statement-box">
          <div className="contact-statement-eyebrow">
            RESEARCH / DATA / EVIDENCE
          </div>
          <p className="contact-statement-text">
            Available for selected undergraduate, postgraduate and independent research projects.
          </p>
        </div>
      </div>
    </section>
  );
}
