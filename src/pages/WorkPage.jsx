import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectRow from '../components/ProjectRow';

export default function WorkPage() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [expandedId, setExpandedId] = useState('proj-01'); // First project expanded by default on Work page

  const filterOptions = [
    { id: 'ALL', label: 'ALL DISCIPLINES' },
    { id: 'PHARMACOLOGY', label: 'PHARMACOLOGY' },
    { id: 'TOXICOLOGY', label: 'TOXICOLOGY' },
    { id: 'BIOCHEMISTRY', label: 'BIOCHEMISTRY / NUTRITION' },
    { id: 'PHYSIOLOGY', label: 'PHYSIOLOGY' },
    { id: 'SURVEY', label: 'SURVEY / NURSING' },
    { id: 'SPSS', label: 'DATA / SPSS' },
    { id: 'WRITING', label: 'ACADEMIC WRITING' }
  ];

  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') return projects;
    if (selectedFilter === 'PHARMACOLOGY') {
      return projects.filter((p) => p.tag.includes('PHARMACOLOGY'));
    }
    if (selectedFilter === 'TOXICOLOGY') {
      return projects.filter((p) => p.tag.includes('TOXICOLOGY'));
    }
    if (selectedFilter === 'BIOCHEMISTRY') {
      return projects.filter((p) => p.tag.includes('BIOCHEMISTRY') || p.tag.includes('NUTRITION'));
    }
    if (selectedFilter === 'PHYSIOLOGY') {
      return projects.filter((p) => p.tag.includes('PHYSIOLOGY'));
    }
    if (selectedFilter === 'SURVEY') {
      return projects.filter((p) => p.tag.includes('SURVEY') || p.tag.includes('NURSING'));
    }
    if (selectedFilter === 'SPSS') {
      return projects.filter((p) => p.tag.includes('SPSS') || p.tag.includes('DATA'));
    }
    if (selectedFilter === 'WRITING') {
      return projects.filter((p) => p.tag.includes('WRITING') || p.tag.includes('BIOTECHNOLOGY'));
    }
    return projects;
  }, [selectedFilter]);

  const toggleProject = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="page-wrapper">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="content-container">
          <div className="section-eyebrow">
            03 — SELECTED WORK &amp; RESEARCH ARCHIVE
          </div>
          <h1 className="page-main-heading">
            Research support, from question to interpretation.
          </h1>
          <p className="page-intro-text">
            An archival registry of 10 research projects spanning experimental pharmacology, toxicology, nutritional biochemistry, physiology, survey analysis, and academic manuscript refinement.
          </p>

          {/* Discipline Filter Bar */}
          <div className="filter-bar-container" aria-label="Filter Projects by Discipline">
            <span className="filter-label">DISCIPLINE FILTER:</span>
            <div className="filter-tags-scroll">
              {filterOptions.map((f) => {
                const isActive = selectedFilter === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    className={`filter-tag-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedFilter(f.id)}
                    aria-pressed={isActive}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Research Index */}
      <section className="editorial-section" style={{ paddingTop: '2rem' }}>
        <div className="content-container">
          {/* Research Index Header (Desktop) */}
          <div className="research-index-header" aria-hidden="true">
            <span>YEAR</span>
            <span>STUDY TITLE / SUMMARY</span>
            <span>CATEGORY</span>
            <span style={{ textAlign: 'right' }}>DETAIL</span>
          </div>

          {/* Accordion Registry */}
          <div className="research-index" role="list">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectRow
                  key={project.id}
                  project={project}
                  isExpanded={expandedId === project.id}
                  onToggle={() => toggleProject(project.id)}
                />
              ))
            ) : (
              <div className="no-results-box">
                <p>No projects found in this category.</p>
              </div>
            )}
          </div>

          {/* Anonymity & Academic Ethics Disclosure */}
          <div className="archive-confidentiality-notice">
            <div className="notice-icon">ℹ</div>
            <div className="notice-content">
              <span className="notice-title">CONFIDENTIALITY &amp; ACADEMIC INTEGRITY STATEMENT</span>
              <p className="notice-text">
                To protect client confidentiality, matriculation privacy, and institutional intellectual property, all projects are presented as anonymized case studies. No student names, supervisor identities, or unverified statistical figures are published.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="editorial-section" style={{ borderBottom: 'none' }}>
        <div className="content-container">
          <div className="consultation-banner">
            <div className="banner-left">
              <div className="section-eyebrow">NEXT SECTION</div>
              <h2 className="section-heading" style={{ marginBottom: '0.75rem' }}>
                Technical &amp; Methodological Capabilities
              </h2>
              <p className="banner-text">
                Learn about analytical software proficiencies including SPSS, GraphPad Prism, and statistical test framing.
              </p>
            </div>
            <div className="banner-right">
              <Link to="/skills" className="btn-primary">
                EXPLORE SKILLS &amp; TOOLS
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
