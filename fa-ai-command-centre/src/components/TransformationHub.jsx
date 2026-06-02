const columns = [
  {
    title: 'Delivered',
    tag: 'delivered',
    color: 'var(--green)',
    icon: '✓',
    items: [
      'FlexiBill Combined TB Reports',
      'Recurring Deposits Automation',
      'EFT Portal Enhancements',
      'OMS Self-Help Functionalities',
      'VAT Correction Logic',
      'Year-End Reporting Pack',
    ],
  },
  {
    title: 'In Flight',
    tag: 'inflight',
    color: 'var(--cyan)',
    icon: '⟳',
    items: [
      'SLA Report Automation',
      'Open GL Ageing Reports',
      'All Payments BOT',
      'Debit Order Matching',
      'Cashflow Reporting Dashboard',
      'GL Exception Workflow',
    ],
  },
  {
    title: 'Pipeline',
    tag: 'pipeline',
    color: 'var(--amber)',
    icon: '◈',
    items: [
      'AI Cashflow Agent',
      'AI Reconciliation Agent',
      'AI Audit Agent',
      'AI Payment Risk Agent',
      'Agentic Finance Reporting',
      'CFO Insight Assistant',
    ],
  },
];

export default function TransformationHub() {
  return (
    <section id="transformation" className="section">
      <div className="section-eyebrow">Module 03</div>
      <h2 className="section-title">Transformation Hub</h2>
      <p className="section-sub">A structured view of the transformation portfolio — from delivered value to the agentic frontier.</p>

      <div className="grid-3">
        {columns.map((col, ci) => (
          <div key={ci} className="transform-col">
            <div className="transform-col-header">
              <span style={{ fontSize: 18, color: col.color }}>{col.icon}</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: col.color, letterSpacing: '0.08em' }}>{col.title}</span>
              <span className={`badge badge-${col.tag}`} style={{ marginLeft: 'auto' }}>{col.items.length} items</span>
            </div>
            <div className="transform-col-body">
              {col.items.map((item, ii) => (
                <div key={ii} className="transform-item">{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: 14, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 32 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginBottom: 6 }}>Transformation Trajectory</div>
          <p style={{ fontSize: 12, color: 'var(--white-40)', lineHeight: 1.5 }}>Every delivered initiative creates the data substrate and process stability needed for intelligent automation — each pipeline item builds on the last.</p>
        </div>
        <div style={{ display: 'flex', gap: 24 }}>
          {[['6', 'Delivered', 'var(--green)'], ['6', 'In Flight', 'var(--cyan)'], ['6', 'Pipeline', 'var(--amber)']].map(([n, l, c]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 900, color: c }}>{n}</div>
              <div style={{ fontSize: 9, color: 'var(--white-40)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
