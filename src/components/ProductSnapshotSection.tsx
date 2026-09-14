import React from 'react';
import { PRODUCT_SNAPSHOT } from '../data/caseStudyData';
import { Database, Calendar, Layers, Sparkles, Building, BookmarkCheck } from 'lucide-react';

export const ProductSnapshotSection: React.FC = () => {
  return (
    <section id="section-snapshot" className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-[11px] font-semibold text-[#7E8492] uppercase tracking-widest block mb-1">
            Section 02
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#24262B]">
            Product Snapshot
          </h3>
        </div>
      </div>

      <div className="bg-[#FFFFFF] border border-[#EAE7DF] rounded-xl p-6 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {/* Category */}
          <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE]">
            <div className="flex items-center gap-2 mb-2">
              <Layers className="w-4 h-4 text-[#675E88]" />
              <span className="text-xs font-semibold text-[#666B77] uppercase tracking-wider">
                Category
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#2C2E33] leading-snug">
              {PRODUCT_SNAPSHOT.category}
            </p>
          </div>

          {/* Founded & HQ */}
          <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE]">
            <div className="flex items-center gap-2 mb-2">
              <Building className="w-4 h-4 text-[#78633B]" />
              <span className="text-xs font-semibold text-[#666B77] uppercase tracking-wider">
                Founded & Scale
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#2C2E33] leading-snug">
              {PRODUCT_SNAPSHOT.founded}
            </p>
            <p className="text-xs text-[#6B717E] mt-1">
              {PRODUCT_SNAPSHOT.scale}
            </p>
          </div>

          {/* Pricing Tiers */}
          <div className="p-4 rounded-lg bg-[#FAF9F5] border border-[#EBE8DE]">
            <div className="flex items-center gap-2 mb-2">
              <BookmarkCheck className="w-4 h-4 text-[#406346]" />
              <span className="text-xs font-semibold text-[#666B77] uppercase tracking-wider">
                Tier Ladder
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-[#2C2E33] leading-snug">
              {PRODUCT_SNAPSHOT.tiers}
            </p>
          </div>
        </div>

        {/* 2025-26 Bet & Core Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#EDF3F7] border border-[#D8E5EF]">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#3E5F78]" />
              <span className="text-xs font-semibold text-[#3E5F78] uppercase tracking-wider">
                2025–26 Strategic Bet
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#384E60] leading-relaxed">
              {PRODUCT_SNAPSHOT.futureBet}
            </p>
          </div>

          <div className="p-4 rounded-lg bg-[#F1EFF7] border border-[#DCD7EB]">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-[#584F77]" />
              <span className="text-xs font-semibold text-[#584F77] uppercase tracking-wider">
                Core Narrative
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#463F60] leading-relaxed">
              <span className="font-semibold">{PRODUCT_SNAPSHOT.coreNarrative}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
