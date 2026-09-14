import React, { useState } from 'react';
import { POSITIONING_FRAMEWORK, MESSAGE_PILLARS } from '../data/caseStudyData';
import { Target, Copy, Check, Sparkles, Lightbulb, AlertTriangle } from 'lucide-react';

export const MessagingFramework: React.FC = () => {
  const [copiedStatement, setCopiedStatement] = useState(false);

  const copyStatement = () => {
    const text = `For: ${POSITIONING_FRAMEWORK.for}
Who need: ${POSITIONING_FRAMEWORK.whoNeed}
Notion is: ${POSITIONING_FRAMEWORK.notionIs}
Unlike: ${POSITIONING_FRAMEWORK.unlike}
Notion: ${POSITIONING_FRAMEWORK.valuePitch}`;

    navigator.clipboard.writeText(text);
    setCopiedStatement(true);
    setTimeout(() => setCopiedStatement(false), 2000);
  };

  return (
    <section id="section-framework" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 06
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            Messaging & Positioning Framework
          </h3>
        </div>
      </div>

      {/* The Core Positioning Statement Card */}
      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 mb-6 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EBE8DE]">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-[#675E88]" />
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#24262B]">
              Core Positioning Formula (PMM Standard)
            </h4>
          </div>
          <button
            type="button"
            onClick={copyStatement}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium text-[#584F77] bg-[#F1EFF7] hover:bg-[#E8E4F2] border border-[#DCD7EB] transition-colors"
          >
            {copiedStatement ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#406346]" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Framework</span>
              </>
            )}
          </button>
        </div>

        <div className="space-y-3 font-mono text-xs sm:text-sm">
          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="font-semibold text-[#8A7347] uppercase tracking-wider sm:w-24 shrink-0 font-sans text-xs">
              For:
            </span>
            <span className="text-[#2C2E33] font-sans font-medium">
              {POSITIONING_FRAMEWORK.for}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="font-semibold text-[#8A7347] uppercase tracking-wider sm:w-24 shrink-0 font-sans text-xs">
              Who need:
            </span>
            <span className="text-[#2C2E33] font-sans">
              {POSITIONING_FRAMEWORK.whoNeed}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="font-semibold text-[#675E88] uppercase tracking-wider sm:w-24 shrink-0 font-sans text-xs">
              Notion is:
            </span>
            <span className="text-[#2C2E33] font-sans">
              {POSITIONING_FRAMEWORK.notionIs}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="font-semibold text-[#8A4A45] uppercase tracking-wider sm:w-24 shrink-0 font-sans text-xs">
              Unlike:
            </span>
            <span className="text-[#2C2E33] font-sans">
              {POSITIONING_FRAMEWORK.unlike}
            </span>
          </div>

          <div className="p-3 rounded-lg bg-[#EBF1EB] border border-[#DCE8DC] flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <span className="font-semibold text-[#406346] uppercase tracking-wider sm:w-24 shrink-0 font-sans text-xs">
              Notion:
            </span>
            <span className="text-[#28442D] font-sans font-semibold">
              {POSITIONING_FRAMEWORK.valuePitch}
            </span>
          </div>
        </div>
      </div>

      {/* 4 Content Message Pillars */}
      <div>
        <h4 className="text-sm font-semibold text-[#4A4D55] uppercase tracking-wider mb-3">
          Message Pillars to Take into Content
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MESSAGE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-5 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-5 h-5 rounded-full bg-[#FAF9F5] border border-[#E0DDD1] text-[11px] font-mono font-medium text-[#7E8492] flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <h5 className="text-sm font-serif font-semibold text-[#24262B]">
                    {pillar.title}
                  </h5>
                </div>
                <p className="text-xs text-[#4A4E58] leading-relaxed mb-3">
                  {pillar.description}
                </p>
              </div>

              <div className="space-y-2 mt-2 pt-3 border-t border-[#F0ECE1]">
                <div className="flex items-start gap-1.5 text-[11px] text-[#78633B] bg-[#F9F5EB] p-2 rounded border border-[#ECE2CF]">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#8A7347] shrink-0 mt-0.5" />
                  <span><strong>Risk of status quo:</strong> {pillar.riskOfStatusQuo}</span>
                </div>
                <div className="flex items-start gap-1.5 text-[11px] text-[#406346] bg-[#EBF1EB] p-2 rounded border border-[#DCE8DC]">
                  <Lightbulb className="w-3.5 h-3.5 text-[#406346] shrink-0 mt-0.5" />
                  <span><strong>Campaign deliverable:</strong> {pillar.actionableContentIdea}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
