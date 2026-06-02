export default function ExecutiveSummary() {
  const kpis = [
    { label: 'Year-End Closure', value: 'Completed', tag: 'success', tagText: '✓ On Time' },
    { label: 'System Stabilisation', value: 'Delivered', tag: 'success', tagText: '✓ Stable' },
    { label: 'Automation Initiatives', value: '12', tag: 'info', tagText: '↑ Active' },
    { label: 'AI Opportunities', value: '24', tag: 'info', tagText: '↑ Identified' },
    { label: 'Open Item Target', value: '<2 Months', tag: 'warn', tagText: '⬡ In Progress' },
    { label: 'VOC Performance', value: 'Award Winner', tag: 'success', tagText: '★ Consistent' },
  ];

  return (
    <section id="executive" className="hero-section">
      <div className="hero-grid-bg" />
      <div className="hero-scanline" />

      <div className="hero-eyebrow fade-in">
        <div className="hero-eyebrow-line" />
        <span className="hero-eyebrow-text">Telkom Shared Services · WNS · May 2026</span>
        <div className="hero-eyebrow-line" />
      </div>

      <h1 className="hero-title fade-in-2">
        <div className="line-1">Finance</div>
        <div className="line-2">Intelligence</div>
        <div className="line-3">Command Centre</div>
      </h1>

      <p className="hero-subtitle fade-in-3">
        Telkom Shared Services &nbsp;|&nbsp; F&A Executive Business Review &nbsp;|&nbsp; May 2026
      </p>

      <div className="hero-divider fade-in-4" />

      <div className="grid-3 fade-in-4">
        {kpis.map((k, i) => (
          <div key={i} className="kpi-card">
            <div className="kpi-label">{k.label}</div>
            <div className={`kpi-value ${i >= 2 && i <= 3 ? 'cyan' : i === 4 ? 'amber' : ''}`}>
              {k.value}
            </div>
            <span className={`kpi-tag ${k.tag}`}>{k.tagText}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 40, padding: '20px 24px', background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.12)', borderRadius: 12, maxWidth: 680 }}>
        <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'var(--cyan)', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'var(--font-display)' }}>Strategic Narrative</div>
        <p style={{ fontSize: 13, color: 'var(--white-80)', lineHeight: 1.7, fontWeight: 300 }}>
          This command centre transforms the F&A EBR from a slide deck into a living intelligence platform — mapping our journey from <strong style={{color:'var(--white)'}}>Operational Excellence</strong> through <strong style={{color:'var(--cyan)'}}>Intelligent Automation</strong> to a fully <strong style={{color:'var(--green)'}}>Agentic Finance Workforce</strong>. Each section tells one chapter of that story.
        </p>
      </div>
    </section>
  );
}
