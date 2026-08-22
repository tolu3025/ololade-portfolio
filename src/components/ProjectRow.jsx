import React from 'react';

export default function ProjectRow({ project, isExpanded, onToggle }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div className="project-row-wrapper">
      <button
        type="button"
        className={`project-row ${isExpanded ? 'is-expanded' : ''}`}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isExpanded}
        aria-controls={`detail-${project.id}`}
        id={`row-${project.id}`}
      >
        {/* Mobile group for year + tag */}
        <div className="project-meta-mobile-group">
          <span className="project-year">{project.year}</span>
          <span className="project-tag-col" aria-hidden="true">
            <span className="project-tag">{project.tag}</span>
          </span>
        </div>

        {/* Desktop Title & Desc Column */}
        <div className="project-main-col">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.description}</p>
        </div>

        {/* Desktop Tag Column */}
        <div className="project-tag-col">
          <span className="project-tag">{project.tag}</span>
        </div>

        {/* Toggle Indicator Column */}
        <div className="project-toggle-col" aria-hidden="true">
          <span className="toggle-icon">+</span>
        </div>
      </button>

      {/* Expanded Inline Detail Panel */}
      {isExpanded && (
        <div
          id={`detail-${project.id}`}
          className="project-detail-panel"
          role="region"
          aria-labelledby={`row-${project.id}`}
        >
          <div className="detail-content-grid">
            <div className="detail-block">
              <span className="detail-block-header">RESEARCH CONTEXT</span>
              <p className="detail-text">{project.details.study}</p>
            </div>

            <div className="detail-block">
              <span className="detail-block-header">CONSULTANT ROLE &amp; METHODOLOGY</span>
              <p className="detail-text">{project.details.role}</p>
            </div>
          </div>

          {project.metadata && (
            <div className="detail-metadata-bar">
              <div className="meta-item">
                <span className="meta-label">METHOD</span>
                <span className="meta-val">{project.metadata.method}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">ANALYSIS</span>
                <span className="meta-val">{project.metadata.analysis}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">OUTPUT</span>
                <span className="meta-val">{project.metadata.output}</span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
