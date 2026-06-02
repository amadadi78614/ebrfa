const levels = [
  { num: '1', name: 'Reactive', desc: 'Manual processes, spreadsheet-driven, high error rate, retrospective reporting only.', fill: 20, color: '#dc2626' },
  { num: '2', name: 'Managed', desc: 'Standardised workflows, basic controls, consistent SLA adherence, structured reporting.', fill: 40, color: '#d97706' },
  { num: '3', name: 'Automated', desc: 'BOT-driven processes, RPA coverage, rule-based exception handling, reduced manual touchpoints.', fill: 70, color: '#0066cc', active: true, label: '← Current State (Level 3.5)' },
  { num: '4', name: 'Predictive', desc: 'ML-powered forecasting, anomaly detection, prescriptive analytics, proactive risk signals.', fill: 0, color: '#0891b2' },
  { num: '5', name: 'Agentic', desc: 'Autonomous AI agents execute end-to-end finance workflows. Humans focus on strategic decisions only.', fill: 0, color: '#059669', target: true, label: '← FY27 Target' },
];

export default function AIMaturityModel() {
  return (
    <section id="maturity" className="section">
      <div className="section-eyebrow">Module 06</div>
      <h2 className="section-title">AI Maturity Model</h2>
      <p className="section-sub">Our F&A maturity journey — from reactive operations to autonomous intelligence.</p>

      <div style={{ maxWidth: 800 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {levels.map((lv, i) => (
            <div key={i} className={`maturity-level${lv.active ? ' active' : ''}${lv.target ? ' target' : ''}`}>
              <div className="maturity-num">{lv.num}</div>
              <div className="maturity-info">
                <div className="maturity-name">{lv.name}</div>
                <div className="maturity-desc">{lv.desc}</div>
                {lv.label && <div style={{ marginTop: 5, fontSize: 10, fontWeight: 600, color: lv.color, letterSpacing: '0.05em' }}>{lv.label}</div>}
              </div>
              <div style={{ textAlign: 'right', minWidth: 120 }}>
                <div className="maturity-bar-wrap" style={{ marginLeft: 'auto' }}>
                  <div className="maturity-bar" style={{ width: `${lv.active ? 70 : lv.target ? 100 : lv.fill}%`, background: lv.color }} />
                </div>
                {lv.active && <div style={{ marginTop: 4, fontSize: 9, fontWeight: 600, color: lv.color, letterSpacing: '0.08em' }}>LEVEL 3.5</div>}
                {lv.target && <div style={{ marginTop: 4, fontSize: 9, fontWeight: 600, color: lv.color, letterSpacing: '0.08em' }}>TARGET</div>}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: 'var(--blue-pale)', border: '1px solid #c7ddf8', borderRadius: 12, padding: '16px 20px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 8 }}>Current Position</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--navy)' }}>Level 3.5 — Automated</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 5 }}>BOT infrastructure stable, analytics outputs live, transitioning to Predictive.</div>
          </div>
          <div style={{ background: 'var(--green-pale)', border: '1px solid #a7f3d0', borderRadius: 12, padding: '16px 20px' }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--green)', textTransform: 'uppercase', marginBottom: 8 }}>FY27 Target</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--navy)' }}>Level 5 — Agentic</div>
            <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 5 }}>AI agents handle routine execution; finance team owns strategy and client relationships.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
