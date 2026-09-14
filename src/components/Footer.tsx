import React from 'react';
import { CASE_STUDY_META } from '../data/caseStudyData';
import { BookMarked, ExternalLink, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 border-t border-[#EAE7DF] bg-[#FAF9F5] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 pb-8 border-b border-[#EBE8DE]">
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-2">
              <span className="font-serif font-semibold text-[#24262B] text-base">
                {CASE_STUDY_META.title} Teardown
              </span>
              <span className="text-xs text-[#8F95A3]">·</span>
              <span className="text-xs text-[#7E8492]">Product Marketing Case Study</span>
            </div>
            <p className="text-xs text-[#6B717E] leading-relaxed mb-3">
              Authored by <strong className="text-[#383B40]">{CASE_STUDY_META.author}</strong> ({CASE_STUDY_META.brand}). A self-directed exercise analyzing product architecture, customer pain points, and positioning strategy.
            </p>
            <div className="text-[11px] text-[#8F95A3]">
              {CASE_STUDY_META.role} · {CASE_STUDY_META.date}
            </div>
          </div>

          <div className="max-w-sm">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-[#7E8492] mb-2 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#406346]" />
              <span>Research Citations & Sources</span>
            </h5>
            <p className="text-xs text-[#6B717E] leading-relaxed">
              {CASE_STUDY_META.sources}. Pain points synthesized from recurring customer language across thousands of verified user submissions.
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8F95A3] gap-3">
          <p>
            Prepared as a portfolio & project teardown deck. Applied product marketing methodology.
          </p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-[#666B77]">
              Soft Pastel & Clean Gray Palette
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
