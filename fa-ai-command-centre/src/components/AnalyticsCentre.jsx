import { Line, Bar, Doughnut, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend, Filler } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, RadialLinearScale, Title, Tooltip, Legend, Filler);

const gridColor = 'rgba(0,0,0,0.05)';
const tickColor = '#94a3b8';
const legendColor = '#4a5568';

const baseOpts = {
  responsive: true, maintainAspectRatio: false,
  plugins: { legend: { labels: { color: legendColor, font: { size: 11, family: 'DM Sans' }, boxWidth: 12 } } },
  scales: {
    x: { ticks: { color: tickColor, font: { size: 10 } }, grid: { color: gridColor } },
    y: { ticks: { color: tickColor, font: { size: 10 } }, grid: { color: gridColor } },
  },
};

const cashflowData = {
  labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep'],
  datasets: [
    { label: 'Actual (Rm)', data: [142,138,155,149,163,null,null,null,null], borderColor: '#0066cc', backgroundColor: 'rgba(0,102,204,0.07)', pointBackgroundColor: '#0066cc', tension: 0.4, fill: true },
    { label: 'AI Forecast (Rm)', data: [null,null,null,null,163,171,168,179,185], borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.05)', borderDash: [5,5], pointBackgroundColor: '#059669', tension: 0.4, fill: false },
  ],
};

const openItemData = {
  labels: ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May'],
  datasets: [{ label: 'Open Items', data: [1240,1180,1090,980,870,760,680,590,480,390,310], backgroundColor: 'rgba(0,102,204,0.55)', borderColor: '#0066cc', borderRadius: 5, borderWidth: 1 }],
};

const benefitsData = {
  labels: ['Hours Saved','Error Reduction','Cycle Time','Compliance','Forecast Accuracy'],
  datasets: [{ data: [35,20,18,14,13], backgroundColor: ['rgba(0,102,204,0.75)','rgba(5,150,105,0.7)','rgba(217,119,6,0.7)','rgba(124,58,237,0.7)','rgba(8,145,178,0.7)'], borderColor: '#fff', borderWidth: 2 }],
};

const aiAdoptionData = {
  labels: ['Process Automation','Predictive Analytics','Agentic Workflows','AI Reporting','Risk Intelligence','Compliance AI'],
  datasets: [
    { label: 'Current State', data: [70,45,20,50,35,30], borderColor: '#0066cc', backgroundColor: 'rgba(0,102,204,0.08)', pointBackgroundColor: '#0066cc' },
    { label: 'FY27 Target', data: [90,80,70,85,75,70], borderColor: '#059669', backgroundColor: 'rgba(5,150,105,0.07)', pointBackgroundColor: '#059669' },
  ],
};

export default function AnalyticsCentre() {
  const noScale = { responsive: true, maintainAspectRatio: false, plugins: { legend: { labels: { color: legendColor, font: { size: 11 } }, boxWidth: 12 } } };
  const radarOpts = { ...noScale, scales: { r: { ticks: { color: tickColor, backdropColor: 'transparent', font: { size: 9 } }, grid: { color: gridColor }, pointLabels: { color: legendColor, font: { size: 10 } } } } };

  return (
    <section id="analytics" className="section">
      <div className="section-eyebrow">Module 05</div>
      <h2 className="section-title">Analytics Centre</h2>
      <p className="section-sub">Turning operational data into predictive intelligence — the bridge from automated to agentic.</p>
      <div className="grid-2">
        <div className="chart-card"><div className="chart-title">Cashflow Forecast — Actual vs AI Prediction</div><div style={{height:220}}><Line data={cashflowData} options={baseOpts} /></div></div>
        <div className="chart-card"><div className="chart-title">Open Item Reduction Campaign</div><div style={{height:220}}><Bar data={openItemData} options={baseOpts} /></div></div>
        <div className="chart-card"><div className="chart-title">Automation Benefit Distribution</div><div style={{height:220,display:'flex',justifyContent:'center'}}><Doughnut data={benefitsData} options={noScale} /></div></div>
        <div className="chart-card"><div className="chart-title">AI Adoption — Current vs FY27 Target</div><div style={{height:220}}><Radar data={aiAdoptionData} options={radarOpts} /></div></div>
      </div>
    </section>
  );
}
