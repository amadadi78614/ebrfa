import { useState, useEffect } from 'react';
import { LayoutDashboard, Activity, GitBranch, Zap, BarChart2, Brain, Users, Layers, Map, TrendingUp, Globe } from 'lucide-react';

import ExecutiveSummary from './components/ExecutiveSummary';
import OperationsCommand from './components/OperationsCommand';
import TransformationHub from './components/TransformationHub';
import AutomationFactory from './components/AutomationFactory';
import AnalyticsCentre from './components/AnalyticsCentre';
import AIMaturityModel from './components/AIMaturityModel';
import AgenticWorkforce from './components/AgenticWorkforce';
import ArchitectureView from './components/ArchitectureView';
import StrategicRoadmap from './components/StrategicRoadmap';
import ValueRealisation from './components/ValueRealisation';
import AILandscape from './components/AILandscape';

const navItems = [
  { id: 'executive', label: 'Executive Summary', Icon: LayoutDashboard, num: '01' },
  { id: 'operations', label: 'Operations', Icon: Activity, num: '02' },
  { id: 'transformation', label: 'Transformation', Icon: GitBranch, num: '03' },
  { id: 'automation', label: 'Automation', Icon: Zap, num: '04' },
  { id: 'analytics', label: 'Analytics', Icon: BarChart2, num: '05' },
  { id: 'maturity', label: 'AI Maturity', Icon: Brain, num: '06' },
  { id: 'agents', label: 'AI Agents', Icon: Users, num: '07' },
  { id: 'architecture', label: 'Architecture', Icon: Layers, num: '08' },
  { id: 'roadmap', label: 'FY27 Roadmap', Icon: Map, num: '09' },
  { id: 'value', label: 'Value', Icon: TrendingUp, num: '10' },
  { id: 'ai-landscape', label: 'AI Landscape', Icon: Globe, num: '11' },
];

export default function App() {
  const [active, setActive] = useState('executive');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
    );
    navItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-logo-bar">
            <img src="/logos.png" alt="WNS | Telkom" />
          </div>
          <div className="sidebar-title-bar">
            <div className="sidebar-title">Finance Intelligence<br />Command Centre</div>
            <div className="sidebar-subtitle">F&A EBR · May 2026</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section-label">Sections</div>
          {navItems.map(({ id, label, Icon, num }) => (
            <button key={id} className={`nav-item ${active === id ? 'active' : ''}`} onClick={() => scrollTo(id)}>
              <Icon size={13} />
              <span style={{ flex: 1 }}>{label}</span>
              <span className="nav-num">{num}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div><span className="live-dot" />Live Dashboard</div>
          <div style={{ marginTop: 4 }}>Telkom Shared Services</div>
          <div>Powered by WNS BPET</div>
        </div>
      </aside>

      <main className="main-content">
        <ExecutiveSummary />
        <OperationsCommand />
        <TransformationHub />
        <AutomationFactory />
        <AnalyticsCentre />
        <AIMaturityModel />
        <AgenticWorkforce />
        <ArchitectureView />
        <StrategicRoadmap />
        <ValueRealisation />
        <AILandscape />
      </main>
    </div>
  );
}
