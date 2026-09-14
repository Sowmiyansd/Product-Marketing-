import React, { useState } from 'react';
import { PAIN_POINTS } from '../data/caseStudyData';
import { Quote, MessageSquare, Filter, AlertTriangle } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const [filterTag, setFilterTag] = useState<string>('all');

  const tags = ['all', 'Performance & Scale', 'Onboarding & UX', 'Reliability & Trust', 'Knowledge Retrieval', 'AI Quality', 'Cross-Platform'];

  const filteredPainPoints =
    filterTag === 'all'
      ? PAIN_POINTS
      : PAIN_POINTS.filter((p) => p.tag === filterTag);

  const getTagBadgeStyle = (color: string) => {
    switch (color) {
      case 'rose':
        return 'bg-[#FDF1F0] text-[#8A4A45] border-[#F3D3D1]';
      case 'amber':
        return 'bg-[#F9F5EB] text-[#78633B] border-[#EADBBE]';
      case 'lavender':
        return 'bg-[#F1EFF7] text-[#584F77] border-[#D9D4E8]';
      case 'sky':
        return 'bg-[#EDF3F7] text-[#3E5F78] border-[#D0E2EE]';
      case 'sage':
      default:
        return 'bg-[#EBF1EB] text-[#406346] border-[#CDE0CF]';
    }
  };

  return (
    <section id="section-pain-points" className="mb-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-4 gap-2">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 04
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            Customer Pain Points — In Their Own Words
          </h3>
          <p className="text-xs text-[#7E8492] mt-0.5">
            Pulled from G2 (12,000+ reviews) & AWS Marketplace (2023–2026). Recurring dislikes across ratings.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 max-w-full">
          <Filter className="w-3.5 h-3.5 text-[#8F95A3] shrink-0 mr-1" />
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setFilterTag(tag)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium whitespace-nowrap transition-colors border ${
                filterTag === tag
                  ? 'bg-[#2C2E33] text-[#FAF9F5] border-[#2C2E33]'
                  : 'bg-[#FFFFFF] text-[#6B717E] border-[#E5E2D8] hover:bg-[#F5F4EE]'
              }`}
            >
              {tag === 'all' ? 'All 6 Friction Points' : tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Pain Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPainPoints.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-xl bg-[#FFFFFF] border border-[#EAE7DF] shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Header with Number & Category Tag */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold text-[#8F95A3]">
                  0{item.id}
                </span>
                <span
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${getTagBadgeStyle(
                    item.tagColor
                  )}`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-base font-serif font-semibold text-[#24262B] mb-2 leading-snug">
                {item.title}
              </h4>

              {/* Summary Description */}
              <p className="text-xs text-[#525763] leading-relaxed mb-4">
                {item.summary}
              </p>
            </div>

            <div>
              {/* Customer Voice Verbatim Quote */}
              <div className="p-3 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE] mb-3">
                <div className="flex items-start gap-2">
                  <Quote className="w-3.5 h-3.5 text-[#8A4A45] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs italic text-[#383B40] leading-relaxed">
                      “{item.quote}”
                    </p>
                    <span className="block text-[10px] text-[#7E8492] font-medium mt-1">
                      — {item.quoteAuthor}
                    </span>
                  </div>
                </div>
              </div>

              {/* PMM Implication Footer */}
              <div className="pt-2 border-t border-[#F0ECE1]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7E8492] block mb-0.5">
                  PMM Action:
                </span>
                <p className="text-xs text-[#4A4E58]">
                  {item.pmmImplication}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
