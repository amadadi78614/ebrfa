const topics = [
  { n: '01', title: 'Agentic AI', desc: 'Autonomous AI systems that plan, execute, and adapt across multi-step finance workflows — from reconciliation to reporting — without constant human intervention.', color: '#7c3aed' },
  { n: '02', title: 'Automation of Routine Tasks', desc: 'RPA and rule-based bots handling high-volume, low-judgment tasks: data entry, report generation, payment validation, and GL posting at scale.', color: '#0066cc' },
  { n: '03', title: 'Predictive & Prescriptive Analytics', desc: 'ML models forecasting cashflow, ageing trends, and payment risk. Prescriptive outputs recommend specific actions with expected outcomes quantified.', color: '#059669' },
  { n: '04', title: 'Cloud-Based AI Platforms', desc: 'Azure OpenAI, Google Vertex AI, and AWS Bedrock provide the foundation for scalable AI deployment without on-premise infrastructure constraints.', color: '#0891b2' },
  { n: '05', title: 'Fraud Detection & Risk Management', desc: 'Real-time behavioural analytics on payment runs, vendor master changes, and GL postings. Anomaly detection reduces financial crime exposure materially.', color: '#d97706' },
  { n: '06', title: 'ESG & Regulatory Compliance', desc: 'AI-assisted monitoring of ESG reporting obligations, IFRS compliance, and SARS regulatory requirements — reducing manual compliance overhead significantly.', color: '#dc2626' },
  { n: '07', title: 'Shift to Advisory Services', desc: 'As routine tasks become automated, the finance function pivots to strategic advisory — scenario planning, business partnering, and value chain optimisation.', color: '#059669' },
];

export default function AILandscape() {
  return (
    <section id="ai-landscape" className="section">
      <div className="section-eyebrow">Module 11</div>
      <h2 className="section-title">AI Landscape</h2>
      <p className="section-sub">The macro forces shaping the future of finance — and how WNS × Telkom is positioned within each.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
        {topics.map((t, i) => (
          <div key={i} className="ai-item" style={{ borderLeft: `3px solid ${t.color}` }}>
            <div className="ai-item-num">{t.n}</div>
            <div>
              <div className="ai-item-title" style={{ color: t.color }}>{t.title}</div>
              <div className="ai-item-desc">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '22px 26px', display: 'flex', alignItems: 'center', gap: 24, boxShadow: 'var(--shadow-sm)' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 8 }}>WNS × Telkom Positioning</div>
          <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>We are not following the AI wave — we are building ahead of it. The Finance Intelligence Command Centre is evidence of a partnership that turns industry trends into live operational capability.</p>
        </div>
        <div style={{ textAlign: 'center', padding: '0 24px', borderLeft: '1px solid var(--border)', flexShrink: 0 }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: 'var(--blue)' }}>7</div>
          <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>AI Themes<br />Addressed</div>
        </div>
      </div>
    </section>
  );
}
