import React from 'react';
import { CASE_STUDY_META } from '../data/caseStudyData';
import { Quote, Layers, AlertTriangle, Users, Compass } from 'lucide-react';

export const ExecutiveSummary: React.FC = () => {
  return (
    <section className="mb-12">
      {/* Editorial Title Banner */}
      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 sm:p-8 mb-6 shadow-xs">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium bg-[#F9F5EB] text-[#78633B] border border-[#ECE2CF] mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Product Marketing Teardown Deck</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-[#24262B] leading-snug tracking-tight mb-4">
            How a product marketer breaks down a product — applied and documented.
          </h2>
          <p className="text-sm sm:text-base text-[#525763] leading-relaxed mb-6 font-normal">
            This study is a self-directed exercise by <strong className="text-[#2C2E33] font-semibold">{CASE_STUDY_META.author}</strong> ({CASE_STUDY_META.brand}): pick a category-defining product, run it through the exact rigorous process a PMM uses before drafting a single line of messaging, pull real unfiltered customer sentiment from 12,000+ reviews, and turn friction into an actionable positioning point of view.
          </p>

          <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] flex items-start gap-3.5">
            <Quote className="w-4 h-4 text-[#8F95A3] mt-0.5 shrink-0" />
            <div>
              <p className="text-xs sm:text-sm italic text-[#4A4E58] leading-relaxed">
                “Notion doesn't win on being the best task tool or the best governed wiki — it wins on being good enough at both that a small team stops paying for two tools. That's a consolidation pitch, not a best-in-class pitch.”
              </p>
              <span className="block text-[11px] font-medium text-[#7E8492] mt-1.5 uppercase tracking-wider">
                — Core Strategic Synthesis
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Snapshot High-Level Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#7E8492]">Scale</span>
            <Users className="w-4 h-4 text-[#675E88]" />
          </div>
          <div className="text-xl sm:text-2xl font-serif font-semibold text-[#24262B]">
            100M+
          </div>
          <p className="text-xs text-[#6B717E] mt-1">
            Reported global users across solo to enterprise.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#7E8492]">Research Base</span>
            <Layers className="w-4 h-4 text-[#406346]" />
          </div>
          <div className="text-xl sm:text-2xl font-serif font-semibold text-[#24262B]">
            12,000+
          </div>
          <p className="text-xs text-[#6B717E] mt-1">
            G2 & AWS Marketplace customer reviews analyzed.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#7E8492]">Core Pain Themes</span>
            <AlertTriangle className="w-4 h-4 text-[#8A4A45]" />
          </div>
          <div className="text-xl sm:text-2xl font-serif font-semibold text-[#24262B]">
            6 Friction Points
          </div>
          <p className="text-xs text-[#6B717E] mt-1">
            Performance, onboarding, offline sync, search, AI, mobile.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#7E8492]">PMM Strategy</span>
            <Compass className="w-4 h-4 text-[#3E5F78]" />
          </div>
          <div className="text-xl sm:text-2xl font-serif font-semibold text-[#24262B]">
            Consolidation
          </div>
          <p className="text-xs text-[#6B717E] mt-1">
            Docs-first flex vs. ClickUp and Confluence rigidity.
          </p>
        </div>
      </div>
    </section>
  );
};
