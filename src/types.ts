export type ActiveView = 'case-study' | 'mini-project' | 'matrix';

export interface SegmentInfo {
  id: string;
  name: string;
  jobToBeDone: string;
  whatPullsThemIn: string;
  realityCheck: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  tag: string;
}

export interface PainPoint {
  id: number;
  title: string;
  summary: string;
  quote: string;
  quoteAuthor: string;
  tag: string;
  tagColor: 'rose' | 'amber' | 'lavender' | 'sky' | 'sage';
  affectedSegments: string[];
  pmmImplication: string;
}

export interface CompetitorComparison {
  dimension: string;
  notion: string;
  clickUp: string;
  confluence: string;
  notionAdvantage: boolean;
}

export interface MessagePillar {
  title: string;
  description: string;
  riskOfStatusQuo: string;
  actionableContentIdea: string;
}

export interface GtmRecommendation {
  id: number;
  title: string;
  description: string;
  whyItMatters: string;
  deliverableType: string;
}
