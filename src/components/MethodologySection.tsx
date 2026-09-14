import React from 'react';
import { METHODOLOGY_STEPS, CASE_STUDY_META } from '../data/caseStudyData';
import { Search, MessageSquare, Target, GitCompare, Info } from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const getIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-4 h-4 text-[#3E5F78]" />;
      case '02':
        return <MessageSquare className="w-4 h-4 text-[#406346]" />;
      case '03':
        return <GitCompare className="w-4 h-4 text-[#78633B]" />;
      case '04':
      default:
        return <Target className="w-4 h-4 text-[#675E88]" />;
    }
  };

  return (
    <section id="section-methodology" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 01
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            Why This Project & How I Approached It
          </h3>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 mb-6 shadow-xs">
        <p className="text-sm text-[#525763] leading-relaxed mb-6">
          This deck is a self-directed exercise: pick a product I don't work on professionally, and run it through the same process a product marketer uses before writing a single line of messaging. The goal was to prove the muscle, not just describe it — research the product, pull real customer language from review sites, map it against the market, and turn it into a positioning point of view.
        </p>

        {/* 4-Step Method Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono font-medium text-[#7E8492]">
                    Step {step.step}
                  </span>
                  <div className="p-1.5 rounded-md bg-[#FFFFFF] border border-[#E2DFD4]">
                    {getIcon(step.step)}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-[#2C2E33] mb-1.5">
                  {step.title}
                </h4>
                <p className="text-xs text-[#5E6472] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#EAE7DF]/80">
                <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-[#707684]">
                  {step.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Caveat Callout */}
        <div className="mt-6 p-4 rounded-lg bg-[#F9F5EB] border border-[#ECE2CF] text-[#6B5A35] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#8A7347] mt-0.5 shrink-0" />
          <div className="text-xs leading-relaxed">
            <strong className="font-semibold text-[#574624]">Honest Caveat Up Front:</strong> This is desk research on public reviews and comparison sites ({CASE_STUDY_META.sources}), not internal telemetry or confidential first-party customer interviews. Treat the pain points as directionally strong (repeating across hundreds of independent reviews) but not a substitute for internal user interviews.
          </div>
        </div>
      </div>
    </section>
  );
};
