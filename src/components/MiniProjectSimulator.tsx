import React, { useState } from 'react';
import { ICP_SEGMENTS, PAIN_POINTS, COMPETITOR_DATA, GTM_RECOMMENDATIONS } from '../data/caseStudyData';
import {
  Sparkles,
  Sliders,
  AlertTriangle,
  CheckCircle2,
  Quote,
  Copy,
  Check,
  RefreshCw,
  Compass,
  ArrowRight,
  ShieldCheck,
  Layers,
} from 'lucide-react';

export const MiniProjectSimulator: React.FC = () => {
  // Simulator State
  const [segmentId, setSegmentId] = useState<'solo' | 'startups' | 'midmarket' | 'enterprise'>('startups');
  const [maturityStage, setMaturityStage] = useState<'stage1' | 'stage2' | 'stage3'>('stage2');
  const [primaryNeed, setPrimaryNeed] = useState<'consolidation' | 'knowledge' | 'tasks'>('consolidation');

  // Custom Positioning Canvas State
  const [customFor, setCustomFor] = useState('Small-to-mid teams juggling 3+ tools for docs, tracking, and knowledge');
  const [customWhoNeed, setCustomWhoNeed] = useState('One flexible workspace instead of stitched-together point solutions');
  const [customIs, setCustomIs] = useState('A docs-first workspace that flexes into project tracking, wikis, and light CRM');
  const [customUnlike, setCustomUnlike] = useState('ClickUp (task-rigid) or Confluence (structure-rigid)');
  const [customWedge, setCustomWedge] = useState('Lets one page become whatever the team needs it to be');
  const [copiedCanvas, setCopiedCanvas] = useState(false);

  // Health Calculator Sliders
  const [pageCount, setPageCount] = useState<number>(250);
  const [relationDepth, setRelationDepth] = useState<number>(3);
  const [teamSize, setTeamSize] = useState<number>(12);
  const [offlineNeeded, setOfflineNeeded] = useState<boolean>(false);

  // Calculate Friction Risk
  const calculateFrictionScore = () => {
    let base = 20;
    if (segmentId === 'solo') base += 5;
    if (segmentId === 'startups') base += 25;
    if (segmentId === 'midmarket') base += 50;
    if (segmentId === 'enterprise') base += 65;

    if (maturityStage === 'stage1') base += 5;
    if (maturityStage === 'stage2') base += 20;
    if (maturityStage === 'stage3') base += 35;

    return Math.min(Math.max(base, 15), 96);
  };

  const frictionScore = calculateFrictionScore();

  // Determine Primary Triggered Pain Point
  const getTriggeredPainPoint = () => {
    if (maturityStage === 'stage3') {
      return PAIN_POINTS[0]; // Performance degrades
    }
    if (maturityStage === 'stage1') {
      return PAIN_POINTS[1]; // Steep learning curve
    }
    if (offlineNeeded) {
      return PAIN_POINTS[2]; // Offline sync
    }
    if (segmentId === 'midmarket' || segmentId === 'enterprise') {
      return PAIN_POINTS[3]; // Search breaks down
    }
    return PAIN_POINTS[4]; // Notion AI
  };

  const triggeredPain = getTriggeredPainPoint();

  // Determine Competitive Threat
  const getCompetitiveThreat = () => {
    if (primaryNeed === 'tasks') {
      return {
        competitor: 'ClickUp',
        badge: 'Tasks-first Threat',
        why: 'Prospects crave native sprint burndowns, time tracking, and task rigidity rather than blank page databases.',
        counterPMM: 'Do NOT fight on Gantt chart depth. Position on tool consolidation ($7-$12 per seat saved across 4 tools).',
      };
    }
    if (segmentId === 'enterprise' || segmentId === 'midmarket') {
      return {
        competitor: 'Confluence',
        badge: 'Enterprise Governance Threat',
        why: 'IT leadership demands strict Atlassian Jira ecosystem integration, granular access audits, and proven enterprise speeds.',
        counterPMM: 'Pitch Notion for department agile agility and beautiful docs, rather than enterprise compliance lock-in.',
      };
    }
    return {
      competitor: 'Point Solutions (Obsidian / Bear / Trello)',
      badge: 'Fragmented Niche Threat',
      why: 'Simplicity and speed of single-purpose apps without database overhead.',
      counterPMM: 'Highlight Notion’s frictionless page flexibility that expands as team grows.',
    };
  };

  const threat = getCompetitiveThreat();

  const handleCopyCanvas = () => {
    const text = `Positioning Framework:
For: ${customFor}
Who need: ${customWhoNeed}
Category: ${customIs}
Unlike: ${customUnlike}
Key Value Pitch: ${customWedge}`;
    navigator.clipboard.writeText(text);
    setCopiedCanvas(true);
    setTimeout(() => setCopiedCanvas(false), 2000);
  };

  const resetToSowmiyaTemplate = () => {
    setCustomFor('Small-to-mid teams juggling 3+ tools for docs, tracking, and knowledge');
    setCustomWhoNeed('One flexible workspace instead of stitched-together point solutions');
    setCustomIs('A docs-first workspace that flexes into project tracking, wikis, and light CRM');
    setCustomUnlike('ClickUp (task-rigid) or Confluence (structure-rigid)');
    setCustomWedge('Lets one page become whatever the team needs it to be');
  };

  return (
    <div className="space-y-12">
      {/* Intro to Mini Project */}
      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-[#F1EFF7] text-[#584F77] border border-[#DCD7EB] mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#675E88]" />
          <span>Interactive PMM Sandbox</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-medium text-[#24262B] mb-3">
          Workspace Maturity & Positioning Simulator
        </h2>
        <p className="text-sm text-[#525763] leading-relaxed max-w-3xl">
          Based on Sowmiya’s 8-part case study, this interactive simulator models how Notion's customer perception, friction points, and competitive vulnerabilities shift as workspace scale and buyer segments evolve. Test different configurations to see the live PMM diagnosis.
        </p>
      </div>

      {/* Interactive Controls & Live Diagnosis Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Controls (5 cols) */}
        <div className="lg:col-span-5 space-y-5">
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
            <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#EBE8DE]">
              <Sliders className="w-4 h-4 text-[#78633B]" />
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#2C2E33]">
                1. Select Buyer Segment & Context
              </h3>
            </div>

            {/* Segment Selector */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-[#525763] block">
                Target ICP Segment:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'solo', label: 'Solo Operator' },
                  { id: 'startups', label: 'Early Startup (2-15)' },
                  { id: 'midmarket', label: 'Mid-Market (15-80)' },
                  { id: 'enterprise', label: 'Enterprise (80+)' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSegmentId(s.id as any)}
                    className={`p-2.5 rounded-lg text-xs font-medium border text-left transition-colors ${
                      segmentId === s.id
                        ? 'bg-[#2C2E33] text-[#FAF9F5] border-[#2C2E33]'
                        : 'bg-[#FAF9F5] text-[#525763] border-[#E5E2D8] hover:bg-[#F2EFE8]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Maturity Stage */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-[#525763] block">
                Workspace Maturity Stage:
              </label>
              <div className="space-y-1.5">
                {[
                  { id: 'stage1', title: 'Day 1–30: Blank Slate / Scratchpad', desc: '<50 pages, single user testing' },
                  { id: 'stage2', title: 'Month 2–6: Team Wiki & Tracker', desc: '50–500 pages, light team collaboration' },
                  { id: 'stage3', title: 'Year 1+: Deep Multi-Database Scale', desc: '1,000+ pages, complex rollups & formulas' },
                ].map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    onClick={() => setMaturityStage(st.id as any)}
                    className={`w-full p-2.5 rounded-lg text-xs border text-left transition-colors ${
                      maturityStage === st.id
                        ? 'bg-[#F9F5EB] border-[#D9CAAA] text-[#544320]'
                        : 'bg-[#FAF9F5] border-[#EBE8DE] text-[#525763] hover:bg-[#F2EFE8]'
                    }`}
                  >
                    <div className="font-medium">{st.title}</div>
                    <div className="text-[11px] text-[#7E8492] mt-0.5">{st.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Primary Need */}
            <div className="space-y-2 mb-4">
              <label className="text-xs font-medium text-[#525763] block">
                Primary Buyer Intent:
              </label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'consolidation', label: 'Consolidation' },
                  { id: 'knowledge', label: 'Wiki / Docs' },
                  { id: 'tasks', label: 'Tasks & Sprints' },
                ].map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => setPrimaryNeed(n.id as any)}
                    className={`p-2 rounded text-center text-xs font-medium border transition-colors ${
                      primaryNeed === n.id
                        ? 'bg-[#EBF1EB] text-[#305236] border-[#BCD4BE]'
                        : 'bg-[#FAF9F5] text-[#525763] border-[#E5E2D8] hover:bg-[#F2EFE8]'
                    }`}
                  >
                    {n.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle: Offline sync essential? */}
            <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between">
              <span className="text-xs text-[#525763]">
                Require reliable offline access?
              </span>
              <button
                type="button"
                onClick={() => setOfflineNeeded(!offlineNeeded)}
                className={`px-3 py-1 rounded text-xs font-medium border transition-colors ${
                  offlineNeeded
                    ? 'bg-[#FDF1F0] text-[#8A4A45] border-[#F3D3D1]'
                    : 'bg-[#FAF9F5] text-[#7E8492] border-[#E5E2D8]'
                }`}
              >
                {offlineNeeded ? 'Yes (Critical)' : 'No (Cloud OK)'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Diagnosis & PMM Synthesis (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          {/* Risk Metric Card */}
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7E8492] block">
                  Simulated Workspace Health Index
                </span>
                <h4 className="text-lg font-serif font-semibold text-[#24262B]">
                  Friction & Churn Risk Probability
                </h4>
              </div>
              <div className="text-right">
                <span className="text-2xl font-serif font-bold text-[#24262B]">
                  {frictionScore}%
                </span>
                <span
                  className={`block text-[11px] font-medium ${
                    frictionScore > 70
                      ? 'text-[#8A4A45]'
                      : frictionScore > 40
                      ? 'text-[#78633B]'
                      : 'text-[#406346]'
                  }`}
                >
                  {frictionScore > 70
                    ? 'High Churn Danger'
                    : frictionScore > 40
                    ? 'Moderate Friction'
                    : 'Optimal Sweet Spot'}
                </span>
              </div>
            </div>

            {/* Progress Bar with Soft Pastel Accents */}
            <div className="w-full bg-[#FAF9F5] h-2.5 rounded-full overflow-hidden border border-[#EBE8DE] mb-4">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  frictionScore > 70
                    ? 'bg-[#E58882]'
                    : frictionScore > 40
                    ? 'bg-[#D6B575]'
                    : 'bg-[#7EAA86]'
                }`}
                style={{ width: `${frictionScore}%` }}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE]">
                <span className="text-[#7E8492] block text-[10px] uppercase">Search Speed:</span>
                <span className="font-medium text-[#2C2E33]">
                  {maturityStage === 'stage3' ? 'Laggy (Review Flag)' : 'Fast / Instant'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE]">
                <span className="text-[#7E8492] block text-[10px] uppercase">Onboarding Friction:</span>
                <span className="font-medium text-[#2C2E33]">
                  {maturityStage === 'stage1' ? 'High (Blank Canvas)' : 'Resolved'}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE]">
                <span className="text-[#7E8492] block text-[10px] uppercase">Sync Reliability:</span>
                <span className="font-medium text-[#2C2E33]">
                  {offlineNeeded ? 'Risk of Desync' : 'Standard Web'}
                </span>
              </div>
            </div>
          </div>

          {/* Triggered Customer Voice Quote */}
          <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#EAE7DF] shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Quote className="w-4 h-4 text-[#8A4A45]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#8A4A45]">
                Most Likely Customer Objection at this Stage
              </span>
            </div>
            <p className="text-sm font-serif italic text-[#383B40] mb-2 leading-relaxed">
              “{triggeredPain.quote}”
            </p>
            <div className="text-xs text-[#6B717E] flex items-center justify-between">
              <span>Verified Theme: <strong>{triggeredPain.title}</strong></span>
              <span className="text-[11px] text-[#8F95A3]">— {triggeredPain.quoteAuthor}</span>
            </div>

            <div className="mt-4 pt-3 border-t border-[#EAE7DF] text-xs text-[#525763]">
              <strong className="text-[#2C2E33]">Sowmiya’s PMM Fix:</strong> {triggeredPain.pmmImplication}
            </div>
          </div>

          {/* Competitive Threat & Battlecard Advice */}
          <div className="p-5 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#78633B]" />
                <h5 className="text-xs font-semibold uppercase tracking-wider text-[#78633B]">
                  Competitive Threat in this Setup: {threat.competitor}
                </h5>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-[#F9F5EB] text-[#78633B] border border-[#ECE2CF]">
                {threat.badge}
              </span>
            </div>
            <p className="text-xs text-[#525763] mb-3 leading-relaxed">
              {threat.why}
            </p>
            <div className="p-3 rounded-lg bg-[#EBF1EB] border border-[#DCE8DC] text-xs text-[#29462E] leading-relaxed">
              <span className="font-semibold block mb-0.5">Recommended PMM Wedge:</span>
              {threat.counterPMM}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Positioning Canvas Builder */}
      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#EBE8DE] gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#675E88] mb-1">
              <Compass className="w-3.5 h-3.5" />
              <span>Interactive Positioning Canvas</span>
            </div>
            <h3 className="text-xl font-serif font-semibold text-[#24262B]">
              Customize the PMM Messaging Statement
            </h3>
            <p className="text-xs text-[#6B717E] mt-0.5">
              Edit the five standard positioning pillars below to draft messaging for Notion or your own SaaS product.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={resetToSowmiyaTemplate}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#6B717E] bg-[#FAF9F5] hover:bg-[#F2EFE8] border border-[#E0DDD1] transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Deck</span>
            </button>
            <button
              type="button"
              onClick={handleCopyCanvas}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium text-[#FAF9F5] bg-[#2C2E33] hover:bg-[#1A1C20] transition-colors"
            >
              {copiedCanvas ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#A5D6A7]" />
                  <span>Copied Brief</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Statement</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#78633B] uppercase tracking-wider block">
              1. FOR (Target Customer / Segment)
            </label>
            <textarea
              rows={2}
              value={customFor}
              onChange={(e) => setCustomFor(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2D8] focus:border-[#2C2E33] focus:outline-hidden text-[#2C2E33]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#78633B] uppercase tracking-wider block">
              2. WHO NEED (Core Unmet JTBD)
            </label>
            <textarea
              rows={2}
              value={customWhoNeed}
              onChange={(e) => setCustomWhoNeed(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2D8] focus:border-[#2C2E33] focus:outline-hidden text-[#2C2E33]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#675E88] uppercase tracking-wider block">
              3. PRODUCT IS (Category Framing)
            </label>
            <textarea
              rows={2}
              value={customIs}
              onChange={(e) => setCustomIs(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2D8] focus:border-[#2C2E33] focus:outline-hidden text-[#2C2E33]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#8A4A45] uppercase tracking-wider block">
              4. UNLIKE (Primary Competitive Contrast)
            </label>
            <textarea
              rows={2}
              value={customUnlike}
              onChange={(e) => setCustomUnlike(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2D8] focus:border-[#2C2E33] focus:outline-hidden text-[#2C2E33]"
            />
          </div>

          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-[#406346] uppercase tracking-wider block">
              5. KEY VALUE PITCH (The Consolidation Wedge)
            </label>
            <input
              type="text"
              value={customWedge}
              onChange={(e) => setCustomWedge(e.target.value)}
              className="w-full text-xs p-2.5 rounded-lg bg-[#FAF9F5] border border-[#E5E2D8] focus:border-[#2C2E33] focus:outline-hidden text-[#2C2E33] font-medium"
            />
          </div>
        </div>

        {/* Live Formatted Editorial Box */}
        <div className="p-5 rounded-xl bg-[#FAF9F5] border border-[#EBE8DE]">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-[#7E8492] block mb-2">
            Generated Positioning Narrative (Readout)
          </span>
          <p className="text-sm sm:text-base font-serif text-[#2C2E33] leading-relaxed">
            “For <strong>{customFor}</strong> who need <strong>{customWhoNeed}</strong>, Notion is <strong>{customIs}</strong>. Unlike <strong>{customUnlike}</strong>, Notion <strong>{customWedge}</strong>.”
          </p>
        </div>
      </div>
    </div>
  );
};
