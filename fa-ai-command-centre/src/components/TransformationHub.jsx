const columns = [
  {
    title: 'Delivered', tag: 'delivered', color: 'var(--green)', icon: '✓',
    items: ['FlexiBill Combined TB Reports','Recurring Deposits Automation','EFT Portal Enhancements','OMS Self-Help Functionalities','VAT Correction Logic','Year-End Reporting Pack'],
  },
  {
    title: 'In Flight', tag: 'inflight', color: 'var(--blue)', icon: '⟳',
    items: ['SLA Report Automation','Open GL Ageing Reports','All Payments BOT','Debit Order Matching','Cashflow Reporting Dashboard','GL Exception Workflow'],
  },
  {
    title: 'Pipeline', tag: 'pipeline', color: 'var(--amber)', icon: '◈',
    items: ['AI Cashflow Agent','AI Reconciliation Agent','AI Audit Agent','AI Payment Risk Agent','Agentic Finance Reporting','CFO Insight Assistant'],
  },
];

export default function TransformationHub() {
  return (
    <section id="transformation" className="section">
      <div className="section-eyebrow">Module 03</div>
      <h2 className="section-title">Transformation Hub</h2>
      <p className="section-sub">A structured view of the portfolio — from delivered value to the agentic frontier.</p>

      <div className="grid-3">
        {columns.map((col, ci) => (
          <div key={ci} className="transform-col">
            <div className="transform-col-header">
              <span style={{ fontSize: 16, color: col.color }}>{col.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)' }}>{col.title}</span>
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

      <div style={{ marginTop: 24, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 32, boxShadow: 'var(--shadow-sm)' }}>
        <p style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.55 }}>Every delivered initiative builds the data substrate and process stability needed for intelligent automation — each pipeline item stands on the shoulders of the last.</p>
        <div style={{ display: 'flex', gap: 28, flexShrink: 0 }}>
          {[['6', 'Delivered', 'var(--green)'], ['6', 'In Flight', 'var(--blue)'], ['6', 'Pipeline', 'var(--amber)']].map(([n, l, c]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: c, lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 3 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
