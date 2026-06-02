import React from 'react';
import { createRoot } from 'react-dom/client';
import { Radar, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';
import {
  Bot,
  BrainCircuit,
  ShieldCheck,
  TrendingUp,
  DatabaseZap,
  Workflow,
  Sparkles,
  Gauge,
  CloudCog,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Zap,
  FileSearch,
  Landmark,
  RadioTower
} from 'lucide-react';
import './styles.css';

ChartJS.register(
  RadialLinearScale,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const TELKOM = {
  blue: '#0072CE',
  deepBlue: '#003B71',
  cyan: '#00AEEF',
  yellow: '#FFD200',
  lime: '#A6CE39',
  ink: '#061525',
  slate: '#102A43'
};

const focusAreas = [
  { title: 'SLA Report Automation', detail: 'Extract and age open GL reports automatically.', icon: FileSearch },
  { title: 'All Payments Bot', detail: 'Generate the all-payments report without manual compilation.', icon: Bot },
  { title: 'Debit Order Matching', detail: 'Automated reporting and matching for debit order files.', icon: Workflow },
  { title: 'Cash Flow Intelligence', detail: 'Align Free Cash Flow vs Bank Cash Flow through predictive analytics.', icon: TrendingUp },
  { title: 'Open Items < 2 Months', detail: 'Reduce bank-account open items through guided exception workflows.', icon: Gauge },
  { title: 'TBI Known Damages Tracker', detail: 'SharePoint tracking, LMS integration and dashboard visibility.', icon: DatabaseZap }
];

const aiTrends = [
  ['Agentic AI', 'Autonomous agents execute reconciliations, reporting and close-cycle workflows.'],
  ['Predictive Analytics', 'Cash flow, risk and scenario models move finance into advisory mode.'],
  ['Fraud & Risk Detection', 'Anomaly monitoring strengthens governance, audit trails and control.'],
  ['Cloud AI Platforms', 'Unified platforms support real-time reporting and distributed teams.'],
  ['ESG & Compliance', 'Automated reporting supports evolving ESG, tax and accounting obligations.'],
  ['Advisory Shift', 'Finance effort moves from clerical processing to strategic insights.']
];

const roadmap = [
  { phase: '0–12 Months', label: 'Automate + Clean Data', value: 12, maturity: 35, bullets: ['Invoice/recon automation', 'Data governance', 'Quick ROI use cases'] },
  { phase: '1–3 Years', label: 'Predict + Control', value: 24, maturity: 68, bullets: ['Cash forecasting', 'Fraud detection', 'AI literacy training'] },
  { phase: '3–5 Years', label: 'Agentic Finance', value: 36, maturity: 92, bullets: ['Autonomous close cycles', 'Real-time finance', 'Strategic advisory model'] }
];

const riskCards = [
  { title: 'Data Governance', text: 'AI exposes weak master data, process gaps and inconsistent controls.', level: 'High', icon: DatabaseZap },
  { title: 'Talent Gap', text: 'Finance teams need AI literacy, analytics capability and exception-management skills.', level: 'Medium', icon: BrainCircuit },
  { title: 'Regulatory Uncertainty', text: 'AI adoption can move faster than legislation, audit standards and policy.', level: 'Medium', icon: ShieldCheck },
  { title: 'Cyber + Access', text: 'Bot accounts, role-based access and audit trails must be designed upfront.', level: 'High', icon: AlertTriangle }
];

function SectionHeader({ eyebrow, title, body }) {
  return <div className="section-header">
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>;
}

function Metric({ value, label, sub }) {
  return <div className="metric glass">
    <strong>{value}</strong>
    <span>{label}</span>
    <small>{sub}</small>
  </div>;
}

function App() {
  const radarData = {
    labels: ['Automation', 'Predictive Analytics', 'Controls', 'Integration', 'Advisory', 'Governance'],
    datasets: [
      { label: 'Current', data: [42, 38, 58, 45, 36, 62], backgroundColor: 'rgba(0,114,206,.18)', borderColor: TELKOM.blue, pointBackgroundColor: TELKOM.blue, borderWidth: 2 },
      { label: 'Target FY27+', data: [86, 78, 88, 82, 75, 90], backgroundColor: 'rgba(255,210,0,.18)', borderColor: TELKOM.yellow, pointBackgroundColor: TELKOM.yellow, borderWidth: 2 }
    ]
  };

  const roadmapData = {
    labels: roadmap.map(r => r.phase),
    datasets: [{ label: 'Transformation intensity', data: roadmap.map(r => r.maturity), backgroundColor: [TELKOM.blue, TELKOM.cyan, TELKOM.yellow], borderRadius: 18, borderSkipped: false }]
  };

  const doughnutData = {
    labels: ['Automation', 'Analytics', 'Integration', 'Governance'],
    datasets: [{ data: [34, 28, 21, 17], backgroundColor: [TELKOM.blue, TELKOM.cyan, TELKOM.yellow, TELKOM.lime], borderWidth: 0 }]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { labels: { color: '#D9ECFF', font: { size: 12 } } } },
    scales: { r: { ticks: { color: '#AFCBE8', backdropColor: 'transparent' }, grid: { color: 'rgba(255,255,255,.12)' }, angleLines: { color: 'rgba(255,255,255,.16)' }, pointLabels: { color: '#EAF6FF', font: { size: 12 } } } }
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: { x: { ticks: { color: '#D9ECFF' }, grid: { display: false } }, y: { ticks: { color: '#AFCBE8' }, grid: { color: 'rgba(255,255,255,.10)' }, max: 100 } }
  };

  return <main>
    <nav className="topbar">
      <div className="brand"><div className="logo">T</div><div><b>F&A AI Command Centre</b><span>Telkom Shared Services • May 2026</span></div></div>
      <div className="nav-pills"><a href="#dashboard">Dashboard</a><a href="#roadmap">Roadmap</a><a href="#risks">Controls</a></div>
    </nav>

    <section className="hero" id="dashboard">
      <div className="hero-copy">
        <span className="tag"><Sparkles size={16}/> Next Frontier of Finance</span>
        <h1>From F&A operations to an <em>agentic finance nerve centre</em>.</h1>
        <p>Scale AI-driven automation, expand predictive analytics, integrate end-to-end processes, and convert finance from month-end processing into real-time advisory intelligence.</p>
        <div className="hero-actions"><a className="btn primary" href="#roadmap">View Roadmap <ArrowRight size={16}/></a><a className="btn ghost" href="#visuals">AI Adoption Radar</a></div>
      </div>
      <div className="hero-panel glass">
        <div className="orb"></div>
        <RadioTower className="tower" size={82}/>
        <h3>FY27 Mission</h3>
        <p>Execute AI-driven automations, seamless integration and the next frontier of analytics.</p>
        <div className="mini-grid">
          <Metric value="<2m" label="Open Items" sub="bank GL target" />
          <Metric value="24/7" label="Bot Reporting" sub="SLA + payments" />
          <Metric value="AI" label="Cash Flow" sub="forecast + variance" />
        </div>
      </div>
    </section>

    <section className="metrics-row">
      <Metric value="6" label="FY27 focus areas" sub="automation + analytics + integration" />
      <Metric value="3" label="Roadmap phases" sub="quick wins to agentic AI" />
      <Metric value="4" label="Risk lenses" sub="data, talent, regulation, cyber" />
      <Metric value="360°" label="Executive view" sub="operations, transformation, analytics" />
    </section>

    <section className="grid-section">
      <SectionHeader eyebrow="Operational focus" title="FY27 execution portfolio" body="Practical MVP-ready initiatives from the EBR focus areas, framed as a command centre backlog." />
      <div className="cards six">
        {focusAreas.map((item) => <article className="card" key={item.title}><item.icon size={26}/><h3>{item.title}</h3><p>{item.detail}</p><span>Ready for MVP discovery</span></article>)}
      </div>
    </section>

    <section className="visuals" id="visuals">
      <div className="chart-card glass large">
        <SectionHeader eyebrow="Chart.js visual" title="AI adoption radar" body="Current vs target maturity across automation, analytics, controls and advisory capability." />
        <div className="chart-box"><Radar data={radarData} options={chartOptions}/></div>
      </div>
      <div className="chart-card glass">
        <SectionHeader eyebrow="Portfolio mix" title="Transformation emphasis" />
        <div className="chart-box small"><Doughnut data={doughnutData} options={{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{ position:'bottom', labels:{ color:'#D9ECFF' }}}}}/></div>
      </div>
    </section>

    <section className="roadmap" id="roadmap">
      <SectionHeader eyebrow="Strategic roadmap" title="0–5 year AI transformation path" body="A board-friendly sequence: automate first, predict next, then move to autonomous/agentic finance." />
      <div className="roadmap-layout">
        <div className="timeline">
          {roadmap.map((r, index) => <div className="phase" key={r.phase}>
            <div className="phase-dot">{index + 1}</div>
            <div><b>{r.phase}</b><h3>{r.label}</h3>{r.bullets.map(b => <p key={b}><CheckCircle2 size={15}/>{b}</p>)}</div>
          </div>)}
        </div>
        <div className="chart-card glass"><h3>Roadmap intensity bar</h3><div className="chart-box small"><Bar data={roadmapData} options={barOptions}/></div></div>
      </div>
    </section>

    <section className="grid-section">
      <SectionHeader eyebrow="AI trends" title="What F&A must become in 2026" />
      <div className="cards trend-grid">
        {aiTrends.map(([title, text]) => <article className="trend" key={title}><Zap size={18}/><b>{title}</b><p>{text}</p></article>)}
      </div>
    </section>

    <section id="risks" className="risk-section">
      <SectionHeader eyebrow="Control tower" title="Risks and strategic considerations" body="The MVP must not look like a toy. It needs governance, traceability, clear ownership and executive-grade audit confidence." />
      <div className="cards four">
        {riskCards.map(r => <article className="risk card" key={r.title}><div className="risk-top"><r.icon size={24}/><span>{r.level}</span></div><h3>{r.title}</h3><p>{r.text}</p></article>)}
      </div>
    </section>

    <section className="cta glass">
      <Landmark size={36}/>
      <div><h2>Suggested CBO storyline</h2><p>“We are not pitching another dashboard. We are building the F&A AI operating layer: one place to sense issues, automate actions, predict risk and govern outcomes.”</p></div>
      <a className="btn primary" href="#dashboard">Back to top</a>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
