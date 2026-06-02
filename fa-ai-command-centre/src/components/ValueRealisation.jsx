import { Clock, TrendingDown, BarChart2, ShieldCheck, Target, AlertTriangle } from 'lucide-react';

const tiles = [
  { icon: Clock, num: '1,200+', label: 'Hours Saved Annually', sub: 'Across BOT and automation portfolio', color: '#0066cc', bg: '#e8f0fb' },
  { icon: TrendingDown, num: '65%', label: 'Reporting Time Reduced', sub: 'SLA, GL, and cashflow reporting', color: '#059669', bg: '#ecfdf5' },
  { icon: BarChart2, num: '60%', label: 'Open Items Reduced', sub: 'Automated matching campaign', color: '#0891b2', bg: '#ecfeff' },
  { icon: ShieldCheck, num: '40%', label: 'Controls Strengthened', sub: 'AI-monitored compliance checks', color: '#7c3aed', bg: '#f5f3ff' },
  { icon: Target, num: '92%', label: 'Forecast Accuracy', sub: 'Cashflow AI model — 13-week horizon', color: '#d97706', bg: '#fffbeb' },
  { icon: AlertTriangle, num: '75%', label: 'Risk Reduced', sub: 'Payment fraud, duplicate, VAT error', color: '#dc2626', bg: '#fef2f2' },
];

export default function ValueRealisation() {
  return (
    <section id="value" className="section">
      <div className="section-eyebrow">Module 10</div>
      <h2 className="section-title">Value Realisation</h2>
      <p className="section-sub">Quantified business outcomes — the measurable return on F&A transformation.</p>

      <div className="grid-3">
        {tiles.map((t, i) => {
          const Icon = t.icon;
          return (
            <div key={i} className="value-tile" style={{ borderTop: `3px solid ${t.color}` }}>
              <div className="value-tile-icon" style={{ background: t.bg }}>
                <Icon size={20} color={t.color} />
              </div>
              <div className="value-tile-num" style={{ color: t.color }}>{t.num}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--navy)', marginBottom: 4 }}>{t.label}</div>
              <div className="value-tile-sub">{t.sub}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 28, background: 'linear-gradient(135deg, #e8f0fb, #f0f7ff)', border: '1px solid #c7ddf8', borderRadius: 14, padding: '28px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--blue)', textTransform: 'uppercase', marginBottom: 10 }}>Total Programme Value Statement</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--navy)', marginBottom: 10 }}>A Decade of Measurable Impact</div>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          Every initiative in the transformation portfolio is designed with measurable outcomes. From BOT-driven hour savings to AI-powered risk reduction — value is tracked, reported, and continuously improved.
        </p>
      </div>
    </section>
  );
}
