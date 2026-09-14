import React from 'react';
import { ActiveView } from '../types';
import { CASE_STUDY_META } from '../data/caseStudyData';
import { BookOpen, Sparkles, Scale, Share2, Check } from 'lucide-react';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  onShareOrCopy: () => void;
  copied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  onShareOrCopy,
  copied,
}) => {
  return (
    <header className="border-b border-[#EAE7DF] bg-[#FAF9F5]/90 backdrop-blur-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Brand & Author Intro */}
          <div>
            <div className="flex items-center gap-2.5 mb-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium tracking-wide uppercase bg-[#EBF1EB] text-[#406346] border border-[#DCE8DC]">
                PMM Teardown
              </span>
              <span className="text-xs text-[#7E8492]">
                {CASE_STUDY_META.docType}
              </span>
            </div>
            <h1 className="text-xl sm:text-2xl font-serif font-semibold text-[#24262B] tracking-tight flex items-center gap-2">
              <span>{CASE_STUDY_META.title}</span>
              <span className="text-[#8F95A3] font-sans font-light text-sm sm:text-base">
                — Product Analysis & Positioning
              </span>
            </h1>
            <p className="text-xs text-[#666B77] mt-0.5">
              By <span className="text-[#3A3D44] font-medium">{CASE_STUDY_META.author}</span> · {CASE_STUDY_META.role} · {CASE_STUDY_META.date}
            </p>
          </div>

          {/* Navigation Controls & Action */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            {/* View Switcher Tabs */}
            <div className="inline-flex p-1 bg-[#EFECE3] rounded-lg border border-[#E2DFD4]">
              <button
                id="tab-case-study"
                type="button"
                onClick={() => setActiveView('case-study')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeView === 'case-study'
                    ? 'bg-[#FFFFFF] text-[#24262B] shadow-xs'
                    : 'text-[#666B77] hover:text-[#24262B]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Case Study</span>
              </button>

              <button
                id="tab-mini-project"
                type="button"
                onClick={() => setActiveView('mini-project')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeView === 'mini-project'
                    ? 'bg-[#FFFFFF] text-[#24262B] shadow-xs'
                    : 'text-[#666B77] hover:text-[#24262B]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#675E88]" />
                <span className="flex items-center gap-1">
                  PMM Mini Project
                  <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-[#F1EFF7] text-[#584F77] border border-[#DCD7EB]">
                    Interactive
                  </span>
                </span>
              </button>

              <button
                id="tab-matrix"
                type="button"
                onClick={() => setActiveView('matrix')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                  activeView === 'matrix'
                    ? 'bg-[#FFFFFF] text-[#24262B] shadow-xs'
                    : 'text-[#666B77] hover:text-[#24262B]'
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Battlecard</span>
              </button>
            </div>

            {/* Copy / Share brief button */}
            <button
              id="btn-share-brief"
              type="button"
              onClick={onShareOrCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FFFFFF] border border-[#E0DDD1] text-[#4A4D55] hover:bg-[#F5F4EE] transition-colors"
              title="Copy Case Study Executive Summary"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#406346]" />
                  <span className="text-[#406346]">Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#7E8492]" />
                  <span>Share Brief</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
