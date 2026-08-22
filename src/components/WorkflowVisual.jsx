import React from 'react';

export default function WorkflowVisual() {
  const steps = [
    { num: '01', name: 'Literature Review' },
    { num: '02', name: 'Method Design' },
    { num: '03', name: 'Data Handling' },
    { num: '04', name: 'Statistical Analysis' },
    { num: '05', name: 'Interpretation & Defence' }
  ];

  return (
    <div className="workflow-section" aria-label="Research Consultancy Workflow">
      <div className="content-container">
        <div className="workflow-container">
          <div className="workflow-label-meta">
            CONSULTANCY WORKFLOW
          </div>

          <div className="workflow-steps-track">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="workflow-step">
                  <span className="workflow-step-num">{step.num}</span>
                  <span className="workflow-step-name">{step.name}</span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="workflow-arrow" aria-hidden="true">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
