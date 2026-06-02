const roadmap = [
  {
    q: 'Q1',
    period: 'Jul – Sep 2026',
    color: '#6eb3ff',
    initiatives: [
      { title: 'SLA Report Automation', desc: 'Full BOT deployment for SLA reporting across all F&A towers.' },
      { title: 'Open GL Ageing Reports', desc: 'Automated GL ageing generation with exception flagging.' },
      { title: 'Open Item Campaign Launch', desc: 'Structured programme to reduce ageing below 2 months.' },
    ],
  },
  {
    q: 'Q2',
    period: 'Oct – Dec 2026',
    color: '#00d4ff',
    initiatives: [
      { title: 'All Payments BOT', desc: 'End-to-end payment run automation with fraud pre-screen.' },
      { title: 'Debit Order Matching', desc: 'Three-way automated matching for debit order reconciliation.' },
      { title: 'Analytics Dashboard Live', desc: 'Cashflow and KPI dashboards embedded in finance operations.' },
    ],
  },
  {
    q: 'Q3',
    period: 'Jan – Mar 2027',
    color: '#00e5a0',
    initiatives: [
      { title: 'Cashflow Forecasting AI', desc: 'ML-powered 13-week liquidity forecasting model deployed.' },
      { title: 'Reconciliation Agent', desc: 'AI agent for automated transaction matching and exception investigation.' },
      { title: 'Audit Evidence Pack', desc: 'AI-generated audit evidence aligned to internal control framework.' },
    ],
  },
  {
    q: 'Q4',
    period: 'Apr – Jun 2027',
    color: '#c084fc',
    initiatives: [
      { title: 'Agentic Finance Operations', desc: 'Full agent suite operational — cashflow, payments, audit.' },
      { title: 'Autonomous Reporting', desc: 'CFO Insight Agent producing board packs with minimal human touch.' },
      { title: 'FY27 Close Review', desc: 'First fully AI-assisted year-end close with agentic evidence trails.' },
    ],
  },
];

export default function StrategicRoadmap() {
  return (
    <section id="roadmap" className="section">
      <div className="section-eyebrow">Module 09</div>
      <h2 className="section-title">FY27 Strategic Roadmap</h2>
      <p className="section-sub">The sequenced journey from automation maturity to full agentic finance operations.</p>

      <div className="roadmap-grid">
        {roadmap.map((q, qi) => (
          <div key={qi} className="roadmap-quarter">
            <div className="roadmap-q-header" style={{ borderLeft: `3px solid ${q.color}`, borderBottom: '1px solid var(--glass-border)' }}>
              <div>
                <div className="roadmap-q-num" style={{ color: q.color }}>{q.q}</div>
                <div className="roadmap-q-period">{q.period}</div>
              </div>
            </div>
            <div className="roadmap-q-body">
              {q.initiatives.map((init, ii) => (
                <div key={ii} className="roadmap-initiative">
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 10, fontWeight: 700, color: q.color, marginBottom: 4, letterSpacing: '0.04em' }}>{init.title}</div>
                  <div style={{ fontSize: 10, color: 'var(--white-40)', lineHeight: 1.4 }}>{init.desc}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 0, background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: 14, overflow: 'hidden' }}>
        {roadmap.map((q, i) => (
          <div key={i} style={{ flex: 1, padding: '16px 20px', borderRight: i < 3 ? '1px solid var(--glass-border)' : undefined, textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 900, color: q.color, marginBottom: 2 }}>{q.q}</div>
            <div style={{ fontSize: 9, color: 'var(--white-40)', letterSpacing: '0.06em' }}>{q.initiatives.length} initiatives</div>
          </div>
        ))}
        <div style={{ flex: 2, padding: '16px 24px', borderLeft: '1px solid var(--glass-border)' }}>
          <div style={{ fontSize: 9, color: 'var(--cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginBottom: 4 }}>Total FY27</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 900, color: 'var(--white)' }}>12 Initiatives</div>
          <div style={{ fontSize: 11, color: 'var(--white-40)' }}>Across automation, AI agents & agentic operations</div>
        </div>
      </div>
    </section>
  );
}
