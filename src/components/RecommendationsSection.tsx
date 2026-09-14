import React from 'react';
import { GTM_RECOMMENDATIONS, CASE_STUDY_META } from '../data/caseStudyData';
import { CheckCircle, ArrowRight, ShieldAlert, Award, FileText } from 'lucide-react';

export const RecommendationsSection: React.FC = () => {
  return (
    <section id="section-recommendations" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 07 & 08
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            What I'd Recommend If This Were a Live GTM
          </h3>
        </div>
      </div>

      {/* 5 Recommendations */}
      <div className="space-y-3 mb-8">
        {GTM_RECOMMENDATIONS.map((rec) => (
          <div
            key={rec.id}
            className="p-5 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-3.5">
              <span className="w-6 h-6 rounded-full bg-[#EBF1EB] text-[#406346] border border-[#DCE8DC] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                0{rec.id}
              </span>
              <div>
                <h4 className="text-sm sm:text-base font-serif font-semibold text-[#24262B] mb-1">
                  {rec.title}
                </h4>
                <p className="text-xs text-[#525763] leading-relaxed max-w-2xl">
                  {rec.description}
                </p>
                <p className="text-[11px] text-[#7E8492] mt-1.5 flex items-center gap-1">
                  <span className="font-semibold text-[#666B77]">Strategic Why:</span> {rec.whyItMatters}
                </p>
              </div>
            </div>

            <div className="shrink-0 self-start md:self-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#FAF9F5] text-[#584F77] border border-[#E2DFD4]">
                <FileText className="w-3.5 h-3.5 text-[#675E88]" />
                <span>{rec.deliverableType}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Section 08: What This Project Demonstrates */}
      <div className="p-6 rounded-xl bg-[#F8F7F2] border border-[#E8E5DC]">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-[#78633B]" />
          <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2C2E33]">
            What This Project Demonstrates (The Deliverable vs The Process)
          </h4>
        </div>
        <p className="text-xs sm:text-sm text-[#4E525E] leading-relaxed mb-4">
          “This is the same sequence I run for client work: understand the product honestly (including its scars, not just its feature list), go to unfiltered customer language instead of the vendor's own copy, place it against real competitive alternatives, and only then write positioning. The output here is a case study; the process is the actual deliverable.”
        </p>

        <div className="p-3.5 rounded-lg bg-[#FFFFFF] border border-[#E2DFD4] text-xs text-[#6B717E] leading-relaxed">
          <strong className="text-[#3A3D44] font-medium">Where I'd go further with internal access:</strong> Usage/retention data instead of review-site sampling, actual customer interviews per segment, and win/loss telemetry against ClickUp and Confluence specifically — none of which are available from the outside, which is the honest limit of any competitor teardown like this one.
        </div>
      </div>
    </section>
  );
};
