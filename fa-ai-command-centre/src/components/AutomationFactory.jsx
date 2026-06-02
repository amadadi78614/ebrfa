import { Zap, RefreshCw, CreditCard, FileCheck, BarChart } from 'lucide-react';

const bots = [
  {
    icon: BarChart,
    name: 'SLA Reporting BOT',
    purpose: 'Automates the generation and distribution of daily/weekly SLA performance reports across all F&A towers.',
    impact: 'Eliminates 8 hours of manual compilation per week. Consistent format, zero transcription errors.',
    status: 'In Flight',
    statusType: 'inflight',
    benefit: '~416 hrs/yr saved',
  },
  {
    icon: CreditCard,
    name: 'All Payments BOT',
    purpose: 'End-to-end automation of payment run validations, EFT release, and remittance generation across all payment types.',
    impact: 'Reduces payment processing cycle from 4 hrs to under 30 min. Fraud pre-screening on every run.',
    status: 'In Flight',
    statusType: 'inflight',
    benefit: '~200 hrs/yr + fraud prevention',
  },
  {
    icon: RefreshCw,
    name: 'Debit Order Matching BOT',
    purpose: 'Automated three-way matching of debit order mandates, bank statements, and GL postings.',
    impact: 'Reduces open item backlog by an estimated 60%. Exceptions only require human review.',
    status: 'In Flight',
    statusType: 'inflight',
    benefit: '60% open item reduction',
  },
  {
    icon: FileCheck,
    name: 'VAT Correction Automation',
    purpose: 'Detects and corrects VAT coding errors in AP invoices before GL posting, using rules-based validation against SARS requirements.',
    impact: 'Eliminates manual VAT rework. Reduces risk of SARS audit exposure on miscoded transactions.',
    status: 'Delivered',
    statusType: 'delivered',
    benefit: 'Zero VAT reclassification incidents',
  },
  {
    icon: Zap,
    name: 'Open Item Reduction BOT',
    purpose: 'Systematically matches unreconciled GL items using pattern recognition across bank statements, journals, and sub-ledgers.',
    impact: 'Target: reduce open item ageing below 2 months across all accounts. Weekly matching runs with audit trail.',
    status: 'Pipeline',
    statusType: 'pipeline',
    benefit: '<2 month ageing target',
  },
];

export default function AutomationFactory() {
  return (
    <section id="automation" className="section">
      <div className="section-eyebrow">Module 04</div>
      <h2 className="section-title">Automation Factory</h2>
      <p className="section-sub">BOT portfolio: purpose-built automations transforming manual F&A processes into reliable, auditable workflows.</p>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {bots.map((bot, i) => {
          const Icon = bot.icon;
          return (
            <div key={i} className="bot-card">
              <div className="bot-card-header">
                <div className="bot-icon"><Icon size={20} /></div>
                <div className="bot-name">{bot.name}</div>
                <span className={`badge badge-${bot.statusType}`} style={{ marginTop: 6 }}>{bot.status}</span>
              </div>
              <div className="bot-card-body">
                <div className="bot-field">
                  <div className="bot-field-label">Purpose</div>
                  <div className="bot-field-value">{bot.purpose}</div>
                </div>
                <div className="bot-field">
                  <div className="bot-field-label">Business Impact</div>
                  <div className="bot-field-value">{bot.impact}</div>
                </div>
                <div className="bot-field">
                  <div className="bot-field-label">Estimated Benefit</div>
                  <div className="bot-benefit">{bot.benefit}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
