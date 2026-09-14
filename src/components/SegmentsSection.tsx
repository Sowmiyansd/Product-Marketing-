import React, { useState } from 'react';
import { ICP_SEGMENTS } from '../data/caseStudyData';
import { Users, CheckCircle2, AlertCircle, ChevronRight } from 'lucide-react';

export const SegmentsSection: React.FC = () => {
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>('startups');

  const selectedSegment =
    ICP_SEGMENTS.find((s) => s.id === selectedSegmentId) || ICP_SEGMENTS[0];

  return (
    <section id="section-segments" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 03
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            Who Actually Buys This (ICP & Segments)
          </h3>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 shadow-xs">
        <p className="text-sm text-[#525763] leading-relaxed mb-6">
          Where a PMM should push back on the company's own story: Notion markets itself as one workspace for every segment below, but the pain-point data shows the product genuinely strains once a workspace matures — meaning the ICP that gets the best experience is smaller than the ICP the marketing targets.
        </p>

        {/* Segment Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-6">
          {ICP_SEGMENTS.map((segment) => {
            const isSelected = segment.id === selectedSegmentId;
            return (
              <button
                key={segment.id}
                id={`btn-segment-${segment.id}`}
                type="button"
                onClick={() => setSelectedSegmentId(segment.id)}
                className={`text-left p-3.5 rounded-lg border transition-all ${
                  isSelected
                    ? 'bg-[#FAF9F5] border-[#2C2E33] shadow-xs'
                    : 'bg-[#FFFFFF] border-[#EBE8DE] hover:border-[#D6D3C8]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-semibold text-[#2C2E33] truncate">
                    {segment.name}
                  </span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2C2E33]" />
                  )}
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium ${
                      segment.riskLevel === 'Low'
                        ? 'bg-[#EBF1EB] text-[#406346]'
                        : segment.riskLevel === 'Medium'
                        ? 'bg-[#F9F5EB] text-[#78633B]'
                        : 'bg-[#FDF1F0] text-[#8A4A45]'
                    }`}
                  >
                    {segment.tag}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card for Selected Segment */}
        <div className="p-5 sm:p-6 rounded-xl bg-[#FAF9F5] border border-[#EBE8DE]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#EAE7DF] gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#7E8492]">
                Active Segment Inspection
              </span>
              <h4 className="text-lg font-serif font-semibold text-[#24262B] mt-0.5">
                {selectedSegment.name}
              </h4>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#666B77]">Maturity Friction Risk:</span>
              <span
                className={`px-2 py-0.5 rounded text-xs font-medium ${
                  selectedSegment.riskLevel === 'Low'
                    ? 'bg-[#EBF1EB] text-[#406346]'
                    : selectedSegment.riskLevel === 'Medium'
                    ? 'bg-[#F9F5EB] text-[#78633B]'
                    : 'bg-[#FDF1F0] text-[#8A4A45]'
                }`}
              >
                {selectedSegment.riskLevel} Friction
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#406346]">
                <CheckCircle2 className="w-4 h-4 text-[#406346]" />
                <span>Job to Be Done (JTBD)</span>
              </div>
              <p className="text-sm text-[#383B40] leading-relaxed p-3.5 rounded-lg bg-[#FFFFFF] border border-[#EAE7DF]">
                {selectedSegment.jobToBeDone}
              </p>

              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#584F77]">
                  <Users className="w-4 h-4 text-[#584F77]" />
                  <span>What Pulls Them In</span>
                </div>
                <p className="text-sm text-[#383B40] leading-relaxed p-3.5 rounded-lg bg-[#FFFFFF] border border-[#EAE7DF]">
                  {selectedSegment.whatPullsThemIn}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#8A4A45]">
                <AlertCircle className="w-4 h-4 text-[#8A4A45]" />
                <span>PMM Reality Check & Vulnerability</span>
              </div>
              <div className="p-4 rounded-lg bg-[#FDF1F0]/60 border border-[#F3D3D1] text-[#452725] text-sm leading-relaxed">
                {selectedSegment.realityCheck}
              </div>

              <div className="mt-4 p-3.5 rounded-lg bg-[#FFFFFF] border border-[#EAE7DF]">
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#7E8492] block mb-1">
                  PMM Strategic Takeaway:
                </span>
                <p className="text-xs text-[#525763]">
                  {selectedSegment.id === 'solo' &&
                    'Focus marketing on joy of personal productivity and template aesthetics; avoid enterprise jargon.'}
                  {selectedSegment.id === 'startups' &&
                    'Position as tool consolidation ("replace 4 subs with 1"); supply scaling templates before data expands.'}
                  {selectedSegment.id === 'midmarket' &&
                    'Must provide workspace health guides & structured archiving; otherwise search latency drives churn.'}
                  {selectedSegment.id === 'enterprise' &&
                    'Do not over-promise on granular enterprise RBAC/Jira parity; position for department wikis, not core IT.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
