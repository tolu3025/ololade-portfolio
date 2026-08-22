import React from 'react';

export default function FactLedger() {
  const ledgerRows = [
    { num: '01', label: 'ROLE', value: 'Research & Data Consultant' },
    { num: '02', label: 'BACKGROUND', value: 'Pharmacology Graduate' },
    { num: '03', label: 'CURRENT', value: 'NYSC Teaching Corps Member — Biology' },
    { num: '04', label: 'TOOLS', value: 'SPSS / GraphPad Prism / Excel' },
    { num: '05', label: 'DEVELOPING', value: 'Python' },
    {
      num: '06',
      label: 'AVAILABILITY',
      value: 'Open to selected projects',
      isBadge: true,
      badgeText: 'ACTIVE'
    },
    { num: '07', label: 'LOCATION', value: 'Nigeria / Remote' }
  ];

  return (
    <div className="fact-ledger" aria-label="Field Notes Ledger">
      <div className="fact-ledger-header">
        <span className="fact-ledger-title">FIELD NOTES / 001</span>
        <span className="fact-ledger-stamp">LEDGER REGISTRY</span>
      </div>

      <div className="fact-ledger-rows">
        {ledgerRows.map((row) => (
          <div key={row.num} className="fact-ledger-row">
            <span className="fact-num">{row.num}</span>
            <span className="fact-label">{row.label}</span>
            <div className={`fact-value ${row.isBadge ? 'with-badge' : ''}`}>
              <span>{row.value}</span>
              {row.isBadge && (
                <span className="badge-sage">{row.badgeText}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
