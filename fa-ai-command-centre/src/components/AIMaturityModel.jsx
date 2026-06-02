const levels = [
  {
    num: '1',
    name: 'Reactive',
    desc: 'Manual processes, spreadsheet-driven, high error rate, retrospective reporting only.',
    fill: 20,
    color: '#ff4466',
  },
  {
    num: '2',
    name: 'Managed',
    desc: 'Standardised workflows, basic controls, consistent SLA adherence, structured reporting.',
    fill: 40,
    color: '#ffb800',
  },
  {
    num: '3',
    name: 'Automated',
    desc: 'BOT-driven processes, RPA coverage, rule-based exception handling, reduced manual touchpoints.',
    fill: 70,
    color: '#0066cc',
    active: true,
    label: '← Current State (3.5)',
  },
  {
    num: '4',
    name: 'Predictive',
    desc: 'ML-powered forecasting, anomaly detection, prescriptive analytics, proactive risk signals.',
    fill: 55,
    color: '#00d4ff',
  },
  {
    num: '5',
    name: 'Agentic',
    desc: 'Autonomous AI agents execute end-to-end finance workflows. Human oversight for strategic decisions only.',
    fill: 0,
    color: '#00e5a0',
    target: true,
    label: '← FY27 Target',
  },
];

export default function AIMaturityModel() {
  return (
    <section id="maturity" className="section">
      <div className="section-eyebrow">Module 06</div>
      <h2 className="section-title">AI Maturity Model</h2>
      <p className="section-sub">Our F&A maturity journey — from reactive operations to agentic intelligence.</p>

      <div style={{ maxWidth: 820 }}>
        <div className="maturity-track">
          {levels.map((lv, i) => (
            <div key={i} className={`maturity-level${lv.active ? ' active' : ''}${lv.target ? ' target' : ''}`}>
              <div className="maturity-num">{lv.num}</div>
              <div className="maturity-info">
                <div className="maturity-name">{lv.name}</div>
                <div className="maturity-desc">{lv.desc}</div>
                {lv.label && (
                  <div style={{ marginTop: 6, fontSize: 10, fontFamily: 'var(--font-display)', color: lv.color, letterSpacing: '0.08em' }}>
                    {lv.label}
                  </div>
                )}
              </div>
              <div style={{ textAlign: 'right', minWidth: 140 }}>
                <div className="maturity-bar-wrap">
                  <div className="maturity-bar" style={{ width: `${lv.active ? 70 : lv.target ? 100 : lv.fill}%`, background: lv.color }} />
                </div>
                {lv.active && (
                  <div style={{ marginTop: 4, fontSize: 9, color: 'var(--cyan)', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>LEVEL 3.5</div>
                )}
                {lv.target && (
                  <div style={{ marginTop: 4, fontSize: 9, color: 'var(--green)', letterSpacing: '0.1em', fontFamily: 'var(--font-display)' }}>TARGET</div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: 'rgba(0,212,255,0.06)', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 12, padding: '16px 20px' }}>
            <div style={{ fontSize: 9, color: 'var(--cyan)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginBottom: 8 }}>Current Position</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--cyan)' }}>Level 3.5</div>
            <div style={{ fontSize: 12, color: 'var(--white-40)', marginTop: 4 }}>Automated — transitioning to Predictive. BOT infrastructure stable, analytics outputs live.</div>
          </div>
          <div style={{ background: 'rgba(0,229,160,0.06)', border: '1px solid rgba(0,229,160,0.15)', borderRadius: 12, padding: '16px 20px' }}>
            <div style={{ fontSize: 9, color: 'var(--green)', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginBottom: 8 }}>FY27 Target</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 900, color: 'var(--green)' }}>Level 5</div>
            <div style={{ fontSize: 12, color: 'var(--white-40)', marginTop: 4 }}>Agentic Finance — AI agents handle routine execution; finance team focuses on strategy and oversight.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
