import React, { useState } from 'react';
import { ActiveView } from './types';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { MethodologySection } from './components/MethodologySection';
import { ProductSnapshotSection } from './components/ProductSnapshotSection';
import { SegmentsSection } from './components/SegmentsSection';
import { PainPointsSection } from './components/PainPointsSection';
import { CompetitorMatrix } from './components/CompetitorMatrix';
import { MessagingFramework } from './components/MessagingFramework';
import { RecommendationsSection } from './components/RecommendationsSection';
import { MiniProjectSimulator } from './components/MiniProjectSimulator';
import { Footer } from './components/Footer';
import { CASE_STUDY_META, POSITIONING_FRAMEWORK } from './data/caseStudyData';
import { Sparkles, ArrowUpRight, Check, BookOpen, Layers } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('case-study');
  const [copied, setCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleShareBrief = () => {
    const briefText = `NOTION PRODUCT MARKETING CASE STUDY & TEARDOWN
By ${CASE_STUDY_META.author} (${CASE_STUDY_META.role}) · ${CASE_STUDY_META.date}

Core Thesis: Notion doesn't win on being the best task tool or the best governed wiki — it wins on being good enough at both that a small team stops paying for two tools. That's a consolidation pitch, not a best-in-class pitch.

Positioning Statement:
For: ${POSITIONING_FRAMEWORK.for}
Who need: ${POSITIONING_FRAMEWORK.whoNeed}
Notion is: ${POSITIONING_FRAMEWORK.notionIs}
Unlike: ${POSITIONING_FRAMEWORK.unlike}
Notion: ${POSITIONING_FRAMEWORK.valuePitch}

Source: G2 (12,000+ reviews), AWS Marketplace & 2026 Competitive Triangulation.`;

    navigator.clipboard.writeText(briefText);
    setCopied(true);
    showToast('Executive summary copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { label: '01 Approach', href: '#section-methodology' },
    { label: '02 Snapshot', href: '#section-snapshot' },
    { label: '03 ICP Segments', href: '#section-segments' },
    { label: '04 Pain Points', href: '#section-pain-points' },
    { label: '05 Battlecard', href: '#section-competitors' },
    { label: '06 Framework', href: '#section-framework' },
    { label: '07 Live GTM', href: '#section-recommendations' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#383B40]">
      {/* Top Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        onShareOrCopy={handleShareBrief}
        copied={copied}
      />

      {/* Quick In-Page Section Anchor Bar (for Case Study view) */}
      {activeView === 'case-study' && (
        <div className="border-b border-[#EAE7DF] bg-[#FAF9F5] py-2 px-4 sticky top-[73px] z-30 overflow-x-auto shadow-2xs">
          <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-1 sm:gap-2">
              <span className="text-[11px] font-semibold text-[#8F95A3] uppercase tracking-wider mr-1 hidden sm:inline">
                Jump to:
              </span>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2 py-1 rounded text-[#666B77] hover:text-[#24262B] hover:bg-[#EFECE3] transition-colors whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveView('mini-project')}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-[#584F77] hover:text-[#2C2E33] whitespace-nowrap bg-[#F1EFF7] px-2.5 py-1 rounded border border-[#DCD7EB] transition-colors"
            >
              <Sparkles className="w-3 h-3 text-[#675E88]" />
              <span>Launch Simulator</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeView === 'case-study' && (
          <div>
            <ExecutiveSummary />
            <MethodologySection />
            <ProductSnapshotSection />
            <SegmentsSection />
            <PainPointsSection />
            <CompetitorMatrix />
            <MessagingFramework />
            <RecommendationsSection />
          </div>
        )}

        {activeView === 'mini-project' && (
          <div>
            <MiniProjectSimulator />
          </div>
        )}

        {activeView === 'matrix' && (
          <div className="space-y-8">
            <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 sm:p-8 shadow-xs">
              <span className="text-xs font-semibold text-[#7E8492] uppercase tracking-wider block mb-1">
                Deep Dive Battlecard
              </span>
              <h2 className="text-2xl font-serif font-semibold text-[#24262B] mb-2">
                Notion vs. ClickUp vs. Confluence
              </h2>
              <p className="text-sm text-[#525763] leading-relaxed">
                Examine how buyer psychology differs between docs-first flexibility, task-first rigidity, and enterprise-grade compliance governance.
              </p>
            </div>
            <CompetitorMatrix />
            <MessagingFramework />
          </div>
        )}
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2C2E33] text-[#FAF9F5] px-4 py-2.5 rounded-lg shadow-lg text-xs font-medium flex items-center gap-2 border border-[#444852] animate-fade-in">
          <Check className="w-4 h-4 text-[#A5D6A7]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
