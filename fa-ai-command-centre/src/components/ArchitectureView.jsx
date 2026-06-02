import { ChevronDown } from 'lucide-react';

const layers = [
  { label: 'Source Systems', color: '#0066cc', items: ['SAP ECC','Telkom Banking','SharePoint','ZOHO Travel','OMS Billing','BSS Platform'] },
  { label: 'Data Layer', color: '#0891b2', items: ['Data Ingestion Pipelines','Master Data Repository','Transaction Store','Reconciliation Engine'] },
  { label: 'Analytics Layer', color: '#059669', items: ['Cashflow Forecasting','Open Item Analytics','SLA Performance','GL Exception Detection'] },
  { label: 'AI Agent Layer', color: '#7c3aed', items: ['Cashflow Agent','Reconciliation Agent','Audit Agent','Payments Agent','CFO Insight Agent'] },
  { label: 'Executive Command Centre', color: '#d97706', items: ['Finance Intelligence Dashboard','Real-Time KPIs','Board Reporting','Strategic Decision Support'], highlight: true },
];

export default function ArchitectureView() {
  return (
    <section id="architecture" className="section">
      <div className="section-eyebrow">Module 08</div>
      <h2 className="section-title">Architecture View</h2>
      <p className="section-sub">The technology stack powering intelligent finance — from raw data to executive command.</p>

      <div style={{ maxWidth: 820, display: 'flex', flexDirection: 'column', gap: 0 }}>
        {layers.map((layer, i) => (
          <div key={i}>
            <div className="arch-layer" style={{ borderLeft: `3px solid ${layer.color}`, background: layer.highlight ? '#fffbeb' : undefined }}>
              <div className="arch-layer-label" style={{ color: layer.color }}>{layer.label}</div>
              <div className="arch-items">
                {layer.items.map((item, ii) => (
                  <span key={ii} className="arch-item">{item}</span>
                ))}
              </div>
            </div>
            {i < layers.length - 1 && (
              <div className="arch-arrow"><ChevronDown size={16} /></div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 820 }}>
        {[
          { title: 'Integration Approach', desc: 'Event-driven data pipelines with near-real-time sync from source systems. Single source of truth — no data duplication.' },
          { title: 'Security Posture', desc: 'Role-based access control, encrypted data at rest and in transit, full audit logging at every layer.' },
          { title: 'Scalability', desc: 'Cloud-native components. Agent workloads scale elastically. New data sources connect via standard adapters.' },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px 20px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--navy)', marginBottom: 7 }}>{c.title}</div>
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
