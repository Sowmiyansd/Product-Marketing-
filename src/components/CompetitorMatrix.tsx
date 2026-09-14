import React from 'react';
import { COMPETITOR_DATA } from '../data/caseStudyData';
import { Scale, Check, X, ShieldAlert, Sparkles } from 'lucide-react';

export const CompetitorMatrix: React.FC = () => {
  return (
    <section id="section-competitors" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 05
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            Competitive Positioning & Matrix
          </h3>
          <p className="text-xs text-[#7E8492] mt-0.5">
            How prospects evaluate Notion against ClickUp (task-first) and Confluence (governance-first).
          </p>
        </div>
      </div>

      {/* Comparison Table / Cards */}
      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl overflow-hidden shadow-xs mb-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[640px]">
            <thead>
              <tr className="border-b border-[#EAE7DF] bg-[#FAF9F5]">
                <th className="py-3.5 px-4 text-xs font-semibold text-[#666B77] uppercase tracking-wider w-1/4">
                  Evaluation Dimension
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold text-[#24262B] uppercase tracking-wider w-1/4 bg-[#F2F0F8]/50">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#675E88]" />
                    Notion (Docs-First)
                  </span>
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold text-[#666B77] uppercase tracking-wider w-1/4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#78633B]" />
                    ClickUp (Tasks-First)
                  </span>
                </th>
                <th className="py-3.5 px-4 text-xs font-semibold text-[#666B77] uppercase tracking-wider w-1/4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#3E5F78]" />
                    Confluence (Enterprise Wiki)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EBE8DE] text-xs sm:text-sm">
              {COMPETITOR_DATA.map((row, idx) => (
                <tr
                  key={row.dimension}
                  className={idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#FAF9F5]/40'}
                >
                  <td className="py-3.5 px-4 font-semibold text-[#2C2E33] border-r border-[#EBE8DE]">
                    {row.dimension}
                  </td>
                  <td className="py-3.5 px-4 text-[#383B40] bg-[#F2F0F8]/30 font-medium border-r border-[#EBE8DE]">
                    <div className="flex items-start gap-1.5">
                      <span className="mt-0.5 shrink-0">
                        {row.notionAdvantage ? (
                          <Check className="w-3.5 h-3.5 text-[#406346]" />
                        ) : (
                          <ShieldAlert className="w-3.5 h-3.5 text-[#8A4A45]" />
                        )}
                      </span>
                      <span>{row.notion}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-[#525763] border-r border-[#EBE8DE]">
                    {row.clickUp}
                  </td>
                  <td className="py-3.5 px-4 text-[#525763]">
                    {row.confluence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sowmiya's Strategic Read Callout */}
        <div className="p-5 bg-[#FAF9F5] border-t border-[#EAE7DF]">
          <div className="flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#675E88] shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#675E88] block mb-1">
                PMM Strategic Read on the Market:
              </span>
              <p className="text-xs sm:text-sm text-[#424650] leading-relaxed">
                “Notion doesn't win on being the best task tool or the best governed wiki — it wins on being good enough at both that a small team stops paying for two tools. That's a <strong>consolidation pitch</strong>, not a best-in-class pitch, and the messaging should say so directly instead of implying category leadership in project management, which is not where it's strongest.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
