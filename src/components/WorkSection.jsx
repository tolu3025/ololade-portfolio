import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectRow from './ProjectRow';

export default function WorkSection() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleProject = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="work" className="editorial-section" aria-label="Selected Work Section">
      <div className="content-container">
        <div className="section-eyebrow">
          03 — SELECTED WORK
        </div>

        <h2 className="section-heading">
          Research support, from question to interpretation.
        </h2>

        <p className="section-subtext">
          A selection of research projects spanning pharmacology, toxicology, nutrition, physiology, nursing and biotechnology. All projects are presented as anonymized case studies to protect client confidentiality.
        </p>

        {/* Archival Research Index Header (Desktop) */}
        <div className="research-index-header" aria-hidden="true">
          <span>YEAR</span>
          <span>STUDY TITLE / SUMMARY</span>
          <span>CATEGORY</span>
          <span style={{ textAlign: 'right' }}>DETAIL</span>
        </div>

        {/* Accordion Research Index */}
        <div className="research-index" role="list">
          {projects.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              isExpanded={expandedId === project.id}
              onToggle={() => toggleProject(project.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
