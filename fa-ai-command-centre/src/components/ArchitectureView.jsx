import { ChevronDown } from 'lucide-react';

const layers = [
  {
    label: 'Source Systems',
    color: '#6eb3ff',
    items: ['SAP ECC', 'Telkom Banking', 'SharePoint', 'ZOHO Travel', 'OMS Billing', 'BSS Platform'],
  },
  {
    label: 'Data Layer',
    color: '#00d4ff',
    items: ['Data Ingestion Pipelines', 'Master Data Repository', 'Transaction Store', 'Reconciliation Engine'],
  },
  {
    label: 'Analytics Layer',
    color: '#00e5a0',
    items: ['Cashflow Forecasting', 'Open Item Analytics', 'SLA Performance', 'GL Exception Detection'],
  },
  {
    label: 'AI Agent Layer',
    color: '#c084fc',
    items: ['Cashflow Agent', 'Reconciliation Agent', 'Audit Agent', 'Payments Agent', 'CFO Insight Agent'],
  },
  {
    label: 'Executive Command Centre',
    color: '#ffb800',
    items: ['Finance Intelligence Dashboard', 'Real-Time KPIs', 'Board Reporting', 'Strategic Decision Support'],
    highlight: true,
  },
];

export default function ArchitectureView() {
  return (
    <section id="architecture" className="section">
      <div className="section-eyebrow">Module 08</div>
      <h2 className="section-title">Architecture View</h2>
      <p className="section-sub">The technology stack powering intelligent finance — from raw data to executive command.</p>

      <div style={{ maxWidth: 860, display: 'flex', flexDirection: 'column', gap: 0 }}>
        {layers.map((layer, i) => (
          <div key={i}>
            <div className="arch-layer" style={{ borderLeft: `3px solid ${layer.color}`, background: layer.highlight ? `${layer.color}08` : undefined }}>
              <div className="arch-layer-label" style={{ color: layer.color }}>{layer.label}</div>
              <div className="arch-items">
                {layer.items.map((item, ii) => (
                  <span key={ii} className="arch-item">{item}</span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="arch-arrow">
                <ChevronDown size={18} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 860 }}>
        {[
          { title: 'Integration Approach', desc: 'Event-driven data pipelines with near-real-time sync from source systems. No data duplication — single source of truth.' },
          { title: 'Security Posture', desc: 'Role-based access control, encrypted data at rest and in transit, full audit logging at every layer.' },
          { title: 'Scalability', desc: 'Cloud-native components. Agent workloads scale elastically. New data sources connect via standard adapters.' },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: '18px 20px' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 11, fontWeight: 700, color: 'var(--white)', marginBottom: 8, letterSpacing: '0.04em' }}>{c.title}</div>
            <p style={{ fontSize: 11, color: 'var(--white-40)', lineHeight: 1.5 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
