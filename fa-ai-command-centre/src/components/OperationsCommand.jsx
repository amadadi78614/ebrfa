import { CheckCircle2, Database, BarChart2, ShieldCheck, Users, Cpu } from 'lucide-react';

const ops = [
  {
    icon: CheckCircle2,
    title: 'Year-End Closure',
    desc: 'Full year-end closure executed on schedule. All reconciliations, journals, and statutory submissions completed within deadline with zero material exceptions.',
    tag: 'Completed',
    tagType: 'delivered',
  },
  {
    icon: Users,
    title: 'SME Support — BSS, ZOHO Travel, Direct Deposits',
    desc: 'Dedicated SME coverage provided across BSS billing queries, ZOHO Travel expense reconciliations, and Direct Deposit exception handling. Turnaround maintained within SLA.',
    tag: 'Active',
    tagType: 'active',
  },
  {
    icon: Cpu,
    title: 'System Stabilisation',
    desc: 'FAM write-off processing stabilised. Suspense account change requests resolved. Core system integrity maintained post migration with zero data loss incidents.',
    tag: 'Delivered',
    tagType: 'delivered',
  },
  {
    icon: BarChart2,
    title: 'Analytics Support',
    desc: 'Cashflow reporting cadence established. Predictive outputs delivered to treasury team. Liquidity dashboards refreshed weekly with forward-looking 13-week projections.',
    tag: 'In Flight',
    tagType: 'inflight',
  },
  {
    icon: ShieldCheck,
    title: 'Governance & Reporting Accuracy',
    desc: 'Month-end reporting accuracy at 99.8%. Governance dashboards aligned to Telkom internal audit requirements. Exception escalation pathways clearly defined.',
    tag: 'Active',
    tagType: 'active',
  },
  {
    icon: Database,
    title: 'Open Item Management',
    desc: 'Structured campaign to reduce open item ageing below 2-month threshold. BOT-assisted matching initiative underway targeting 70% automation of repeat items.',
    tag: 'In Progress',
    tagType: 'inflight',
  },
];

export default function OperationsCommand() {
  return (
    <section id="operations" className="section">
      <div className="section-eyebrow">Module 02</div>
      <h2 className="section-title">Operations Command Centre</h2>
      <p className="section-sub">Core operational delivery — the foundation on which intelligent finance is built.</p>

      <div className="grid-3">
        {ops.map((op, i) => {
          const Icon = op.icon;
          return (
            <div key={i} className="ops-card">
              <div className="ops-icon"><Icon size={18} /></div>
              <div className="ops-title">{op.title}</div>
              <p className="ops-desc">{op.desc}</p>
              <div style={{ marginTop: 12 }}>
                <span className={`badge badge-${op.tagType}`}>{op.tag}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {[
          { label: 'Reporting Accuracy', value: '99.8%', color: 'var(--green)' },
          { label: 'SLA Adherence', value: '96.4%', color: 'var(--cyan)' },
          { label: 'Exceptions Cleared', value: '847', color: 'var(--white)' },
          { label: 'System Uptime', value: '99.9%', color: 'var(--green)' },
        ].map((s, i) => (
          <div key={i} style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: 12, padding: '18px 20px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 900, color: s.color, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 10, color: 'var(--white-40)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
