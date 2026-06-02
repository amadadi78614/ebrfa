import { Clock, TrendingDown, BarChart2, ShieldCheck, Target, AlertTriangle } from 'lucide-react';

const tiles = [
  {
    icon: Clock,
    num: '1,200+',
    label: 'Hours Saved Annually',
    sub: 'Across BOT and automation portfolio',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.08)',
  },
  {
    icon: TrendingDown,
    num: '65%',
    label: 'Reporting Time Reduced',
    sub: 'SLA, GL, and cashflow reporting',
    color: '#00e5a0',
    bg: 'rgba(0,229,160,0.08)',
  },
  {
    icon: BarChart2,
    num: '60%',
    label: 'Open Items Reduced',
    sub: 'Automated matching campaign',
    color: '#6eb3ff',
    bg: 'rgba(110,179,255,0.08)',
  },
  {
    icon: ShieldCheck,
    num: '40%',
    label: 'Controls Strengthened',
    sub: 'AI-monitored compliance checks',
    color: '#c084fc',
    bg: 'rgba(192,132,252,0.08)',
  },
  {
    icon: Target,
    num: '92%',
    label: 'Forecast Accuracy',
    sub: 'Cashflow AI model — 13-week horizon',
    color: '#ffb800',
    bg: 'rgba(255,184,0,0.08)',
  },
  {
    icon: AlertTriangle,
    num: '75%',
    label: 'Risk Reduced',
    sub: 'Payment fraud, duplicate, VAT error',
    color: '#00e5a0',
    bg: 'rgba(0,229,160,0.08)',
  },
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
            <div key={i} className="value-tile" style={{ background: t.bg, borderColor: `${t.color}20` }}>
              <div className="value-tile-icon" style={{ background: `${t.color}15`, border: `1px solid ${t.color}25` }}>
                <Icon size={20} color={t.color} />
              </div>
              <div className="value-tile-num" style={{ color: t.color }}>{t.num}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 12, fontWeight: 700, color: 'var(--white)', marginBottom: 6, letterSpacing: '0.03em' }}>{t.label}</div>
              <div className="value-tile-label">{t.sub}</div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 32, background: 'linear-gradient(135deg, rgba(0,102,204,0.1), rgba(0,212,255,0.05))', border: '1px solid rgba(0,212,255,0.15)', borderRadius: 14, padding: '28px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--cyan)', textTransform: 'uppercase', fontFamily: 'var(--font-display)', marginBottom: 12 }}>Total Programme Value Statement</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 900, color: 'var(--white)', marginBottom: 10 }}>Decades of Measurable Impact</div>
        <p style={{ fontSize: 13, color: 'var(--white-40)', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
          Every initiative in the transformation portfolio is designed with measurable outcomes. From BOT-driven hour savings to AI-powered risk reduction — value is tracked, reported, and continuously improved.
        </p>
      </div>
    </section>
  );
}
