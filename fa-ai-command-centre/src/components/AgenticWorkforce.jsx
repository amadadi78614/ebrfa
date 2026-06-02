const agents = [
  { emoji: '💧', name: 'Cashflow Agent', role: 'Liquidity Intelligence', color: '#0891b2', bg: '#ecfeff',
    caps: ['Predicts liquidity pressure 13 weeks forward using ML trend models','Recommends cash deployment or funding actions with supporting rationale','Tracks intra-day cash movement and alerts on threshold breaches'] },
  { emoji: '🔁', name: 'Reconciliation Agent', role: 'Transaction Matching & Exceptions', color: '#059669', bg: '#ecfdf5',
    caps: ['Auto-matches transactions across bank, GL, sub-ledger and billing systems','Investigates exceptions using pattern history and proposes resolution','Escalates anomalies to human reviewer with full audit trail and evidence'] },
  { emoji: '🛡️', name: 'Audit Agent', role: 'Controls & Compliance Monitor', color: '#7c3aed', bg: '#f5f3ff',
    caps: ['Generates audit evidence packs aligned to internal control frameworks','Continuously monitors control effectiveness and flags deviations','Identifies compliance gaps against IFRS, SARS, and internal policy'] },
  { emoji: '💳', name: 'Payments Agent', role: 'Payment Validation & Risk', color: '#d97706', bg: '#fffbeb',
    caps: ['Validates payment files against mandate, limit, and beneficiary rules before release','Detects duplicate payment risk across historical and current run data','Identifies fraud patterns using behavioural and velocity analytics'] },
  { emoji: '📊', name: 'CFO Insight Agent', role: 'Executive Intelligence', color: '#0066cc', bg: '#e8f0fb',
    caps: ['Produces weekly executive finance summaries with commentary and risk flags','Generates board-ready insight packs from raw operational data','Supports strategic decision-making with scenario modelling and what-if analysis'] },
];

export default function AgenticWorkforce() {
  return (
    <section id="agents" className="section">
      <div className="section-eyebrow">Module 07</div>
      <h2 className="section-title">Agentic Finance Workforce</h2>
      <p className="section-sub">The future team — AI agents working autonomously alongside your finance professionals.</p>

      <div className="grid-3">
        {agents.map((ag, i) => (
          <div key={i} className="agent-card">
            <div className="agent-header">
              <div className="agent-icon" style={{ background: ag.bg }}>
                <span style={{ fontSize: 22 }}>{ag.emoji}</span>
              </div>
              <div className="agent-name">{ag.name}</div>
              <div className="agent-role" style={{ color: ag.color }}>{ag.role}</div>
            </div>
            <div className="agent-body">
              {ag.caps.map((cap, ci) => (
                <div key={ci} className="agent-cap">
                  <div className="agent-cap-dot" style={{ background: ag.color }} />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 12, padding: '18px 24px', display: 'flex', alignItems: 'center', gap: 24, boxShadow: 'var(--shadow-sm)' }}>
        <p style={{ flex: 1, fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.55 }}>Agentic AI does not replace finance professionals — it amplifies them. Agents handle execution; humans own judgement, strategy, and client relationships.</p>
        <div style={{ display: 'flex', gap: 24, flexShrink: 0 }}>
          {[['5','AI Agents'],['24/7','Coverage'],['100%','Auditability']].map(([n,l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--blue)' }}>{n}</div>
              <div style={{ fontSize: 9, color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
