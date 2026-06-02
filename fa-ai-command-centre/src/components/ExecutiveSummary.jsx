export default function ExecutiveSummary() {
  const kpis = [
    { label: 'Year-End Closure', value: 'Completed', tag: 'success', tagText: '✓ On Time', accent: 'kpi-card-green' },
    { label: 'System Stabilisation', value: 'Delivered', tag: 'success', tagText: '✓ Stable', accent: 'kpi-card-green' },
    { label: 'Automation Initiatives', value: '12 Active', tag: 'info', tagText: '↑ In Flight', accent: 'kpi-card-accent' },
    { label: 'AI Opportunities', value: '24 Mapped', tag: 'info', tagText: '↑ Identified', accent: 'kpi-card-accent' },
    { label: 'Open Item Target', value: '< 2 Months', tag: 'warn', tagText: '⬡ In Progress', accent: 'kpi-card-amber' },
    { label: 'VOC Performance', value: 'Award Winner', tag: 'success', tagText: '★ Consistent', accent: 'kpi-card-green' },
  ];

  return (
    <section id="executive" className="hero-section">
      <div className="hero-logos">
        <img src="/logos.png" alt="WNS Part of Capgemini | Telkom" />
      </div>

      <div className="hero-eyebrow">F&A Executive Business Review · May 2026</div>

      <h1 className="hero-title">
        Finance<br />
        <em>Intelligence</em><br />
        Command Centre
      </h1>

      <div className="hero-divider" />

      <p className="hero-subtitle">
        Telkom Shared Services &nbsp;·&nbsp; Powered by WNS BPET &nbsp;·&nbsp; May 2026
      </p>

      <div className="grid-3">
        {kpis.map((k, i) => (
          <div key={i} className={`kpi-card ${k.accent}`}>
            <div className="kpi-label">{k.label}</div>
            <div className="kpi-value">{k.value}</div>
            <span className={`kpi-tag ${k.tag}`}>{k.tagText}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, maxWidth: 640 }}>
        <div className="callout">
          <div className="callout-label">Strategic Narrative</div>
          <p>
            This command centre maps our journey from <strong>Operational Excellence</strong> through <strong>Intelligent Automation</strong> to a fully <strong>Agentic Finance Workforce</strong> — transforming the EBR from a slide deck into a living intelligence platform.
          </p>
        </div>
      </div>
    </section>
  );
}
