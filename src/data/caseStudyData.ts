import {
  SegmentInfo,
  PainPoint,
  CompetitorComparison,
  MessagePillar,
  GtmRecommendation,
} from '../types';

export const CASE_STUDY_META = {
  title: 'Notion',
  subtitle: 'Product analysis, customer pain points & positioning',
  tagline: 'How a product marketer breaks down a product — applied and documented',
  author: 'Sowmiya',
  role: 'Freelance Digital Marketing Strategist — SEO & GEO/AEO',
  brand: 'marketingwithsowmiya',
  date: 'September 2026',
  docType: 'Product Marketing Case Study & Portfolio Teardown',
  sources: 'G2 product reviews (12,000+), AWS Marketplace review mirrors, and public 2026 comparison coverage of Notion vs. Confluence/ClickUp',
};

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    title: 'Product & Market Scan',
    description: 'Official positioning, tier ladder, recent feature bets, category framing.',
    badge: 'Category Mapping',
  },
  {
    step: '02',
    title: 'Voice-of-Customer Mining',
    description: 'Read through G2 and AWS Marketplace reviews (12,000+ on G2 alone) and pulled recurring customer language, not just star ratings.',
    badge: '12,000+ Reviews',
  },
  {
    step: '03',
    title: 'Competitive Triangulation',
    description: 'Checked how Notion is framed against Confluence and ClickUp, since prospects evaluate it in that core consideration set.',
    badge: 'Triangulation',
  },
  {
    step: '04',
    title: 'Synthesis & Messaging',
    description: 'Grouped raw complaints into pain-point themes, then built a positioning and messaging point of view from them.',
    badge: 'GTM Strategy',
  },
];

export const PRODUCT_SNAPSHOT = {
  category: 'All-in-one workspace: docs, wiki, databases, project tracking, AI agents, calendar, mail',
  founded: '2016 · Notion Labs, Inc. · San Francisco',
  scale: '100M+ users reported; positioned as docs-and-database leader vs. task-first tools',
  tiers: 'Free / Plus / Business / Enterprise, plus a paid Notion AI add-on',
  futureBet: 'Notion AI 2.0 (web search, cross-workspace Q&A) + Notion Calendar — consolidating more of daily workflow into one surface',
  coreNarrative: '"Docs-first, everything else grows out of it" — opposite of ClickUp’s "tasks-first" story',
};

export const ICP_SEGMENTS: SegmentInfo[] = [
  {
    id: 'solo',
    name: 'Solo Operators & Freelancers',
    jobToBeDone: 'One place for notes, tasks, light CRM',
    whatPullsThemIn: 'Free tier, no per-seat pricing pressure, aesthetic flexibility',
    realityCheck: 'Thrives initially. Low data volume means performance remains smooth and custom layout joy is high.',
    riskLevel: 'Low',
    tag: 'Highest Delight',
  },
  {
    id: 'startups',
    name: 'Startups & Small Product Teams',
    jobToBeDone: 'Replace 3–4 tools (wiki + docs + roadmap + tracker) with one',
    whatPullsThemIn: 'Templates, fast onboarding, databases-as-source-of-truth',
    realityCheck: 'Core sweet spot. Begins to creak as database relations compound and team crosses 15-20 members.',
    riskLevel: 'Medium',
    tag: 'Core Growth Engine',
  },
  {
    id: 'midmarket',
    name: 'Mid-Market Ops & Knowledge Teams',
    jobToBeDone: 'Central knowledge base with structured, linked data',
    whatPullsThemIn: 'Relations/rollups, integrations, workspace-wide search (in theory)',
    realityCheck: 'Where search and loading latency start hitting friction. Needs strict workspace governance.',
    riskLevel: 'High',
    tag: 'Friction Boundary',
  },
  {
    id: 'enterprise',
    name: 'Enterprise (Harder Sell)',
    jobToBeDone: 'Governed, scalable knowledge management',
    whatPullsThemIn: 'AI search across workspace; loses to Confluence on admin depth & performance at scale',
    realityCheck: 'Hard sell. Loses against Atlassian Confluence on permission granularity, audit logs, and enterprise speed.',
    riskLevel: 'High',
    tag: 'Vulnerable Ground',
  },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 1,
    title: 'Performance degrades as workspaces grow',
    summary:
      'The single most repeated complaint. Large pages, nested databases and heavy workspaces slow down noticeably — loading lag, slow selection, sluggish databases. Hits power users hardest.',
    quote: 'Really slow, doing anything is slow. Now even selection function is slow.',
    quoteAuthor: 'G2 Verified Reviewer',
    tag: 'Performance & Scale',
    tagColor: 'rose',
    affectedSegments: ['Startups', 'Mid-market', 'Enterprise'],
    pmmImplication:
      'Publish real workspace-size benchmarks and scaling best practices instead of pretending infinite scale exists.',
  },
  {
    id: 2,
    title: 'Steep learning curve, no guided path',
    summary:
      'Users consistently say the product is powerful but onboarding is a scattered pile of YouTube tutorials rather than a structured path. Advanced features like relations, rollups, and formulas go unused.',
    quote: 'A simple, guided step-by-step onboarding path would make it much easier to unlock everything.',
    quoteAuthor: 'G2 Verified Reviewer',
    tag: 'Onboarding & UX',
    tagColor: 'amber',
    affectedSegments: ['Solo operators', 'Startups', 'Mid-market'],
    pmmImplication:
      'A structured "First 30 Minutes" activation path is both a high-leverage product fix and a high-converting marketing asset.',
  },
  {
    id: 3,
    title: 'Offline mode and sync are unreliable',
    summary:
      'Repeatedly called "raw" or "limited." When connectivity drops, the workspace becomes unusable or sync gets buggy — a critical gap for a tool positioned as the single place for someone’s work.',
    quote: 'Offline mode still feels raw... synchronization is sometimes buggy.',
    quoteAuthor: 'G2 Verified Reviewer',
    tag: 'Reliability & Trust',
    tagColor: 'rose',
    affectedSegments: ['Solo operators', 'Startups', 'Mid-market'],
    pmmImplication:
      'Treat offline sync as a core trust issue, not an edge case. In a knowledge base, "it didn’t sync" triggers customer churn.',
  },
  {
    id: 4,
    title: 'Search breaks down at scale',
    summary:
      'In large workspaces with many pages, finding a specific note or database entry takes longer than expected — undermining the "single source of truth" pitch.',
    quote: 'The search is also annoying... finding what you need can take longer than you would like.',
    quoteAuthor: 'G2 Verified Reviewer',
    tag: 'Knowledge Retrieval',
    tagColor: 'lavender',
    affectedSegments: ['Mid-market', 'Enterprise'],
    pmmImplication:
      'A source of truth you can’t find quickly isn’t a source of truth. AI search must be backed by fast indexing fundamentals.',
  },
  {
    id: 5,
    title: 'Notion AI is inconsistent',
    summary:
      'Praised for turning dictated notes into tasks, but multiple reviewers flagged repetitive or shallow answers from the AI layer — a risk given Notion AI 2.0 is the headline differentiator.',
    quote: 'Sometimes the LLM in Notion just starts giving repetitive answers.',
    quoteAuthor: 'G2 Verified Reviewer',
    tag: 'AI Quality',
    tagColor: 'sky',
    affectedSegments: ['Startups', 'Mid-market', 'Enterprise'],
    pmmImplication:
      'Earn the AI claim before marketing it. Highlight grounded accuracy and verifiable team use cases rather than generic AI 2.0 claims.',
  },
  {
    id: 6,
    title: 'Mobile experience trails desktop',
    summary:
      'Called out across multiple comparison sources as less intuitive than desktop/web, and more exposed to the same performance issues on top of a smaller viewport.',
    quote: 'The mobile app is less intuitive than the desktop version.',
    quoteAuthor: 'Comparison Reviewer',
    tag: 'Cross-Platform',
    tagColor: 'sage',
    affectedSegments: ['Solo operators', 'Startups'],
    pmmImplication:
      'Position mobile explicitly as a companion capture tool (quick notes, task triage) rather than a full canvas editor.',
  },
];

export const COMPETITOR_DATA: CompetitorComparison[] = [
  {
    dimension: 'Core Identity',
    notion: 'Docs-first, everything grows from a page',
    clickUp: 'Tasks-first, docs bolted on',
    confluence: 'Enterprise wiki, built for governance',
    notionAdvantage: true,
  },
  {
    dimension: 'Entry Pricing',
    notion: 'From ~$10/user/mo (generous free tier for solo/small)',
    clickUp: 'From ~$7/user/mo (cheaper at team scale)',
    confluence: 'From ~$6/user/mo (strong admin controls included)',
    notionAdvantage: false,
  },
  {
    dimension: 'Strongest Wedge',
    notion: 'Flexibility — one single page can become a wiki, tracker, or CRM',
    clickUp: 'Built-in time tracking, sprints, 15+ native views',
    confluence: 'Deep integration with Jira; enterprise permissioning',
    notionAdvantage: true,
  },
  {
    dimension: 'Weakest Point',
    notion: 'Performance at scale, steep learning curve',
    clickUp: 'Feature sprawl steep curve; lags on large projects',
    confluence: 'Less flexible, less visually modern, siloed feel',
    notionAdvantage: false,
  },
  {
    dimension: 'Wins When Buyer Thinks In…',
    notion: 'Documents, knowledge, aesthetic modularity',
    clickUp: 'Granular tasks, sprints, time tracking',
    confluence: 'Compliance, auditability, Jira ecosystem structure',
    notionAdvantage: true,
  },
];

export const POSITIONING_FRAMEWORK = {
  for: 'Small-to-mid teams juggling 3+ tools for docs, tracking, and knowledge',
  whoNeed: 'One flexible workspace instead of stitched-together point solutions',
  notionIs: 'A docs-first workspace that flexes into project tracking, wikis, and light CRM',
  unlike: 'ClickUp (task-rigid) or Confluence (structure-rigid)',
  valuePitch: 'Lets one page become whatever the team needs it to be',
};

export const MESSAGE_PILLARS: MessagePillar[] = [
  {
    title: 'Consolidation, not features',
    description:
      'Lead with "stop paying for four separate tools," not with database/relation jargon that only power users understand.',
    riskOfStatusQuo: 'Talking about schemas and rollups alienates the average buyer who just wants fewer browser tabs open.',
    actionableContentIdea: 'ROI Calculator: "How many $12/user licenses does one Notion team plan replace?"',
  },
  {
    title: 'Address performance head-on before prospects find it',
    description:
      'Publish real workspace-size benchmarks and a scaling hygiene guide; silence here reads as hiding a known, universally documented weakness.',
    riskOfStatusQuo: 'Prospects read G2 reviews mentioning lag, assume it crashes, and abandon during evaluation.',
    actionableContentIdea: '"Scaling Notion to 5,000 Pages": Official Architecture & Workspace Hygiene Playbook.',
  },
  {
    title: 'Fix onboarding as a marketing asset',
    description:
      'A structured "First 30 Minutes" path is both a critical product fix and a high-converting piece of content the reviews say is missing.',
    riskOfStatusQuo: 'Users get dumped into a blank canvas, look up 45-minute fragmented YouTube videos, and bounce.',
    actionableContentIdea: 'Interactive 3-minute interactive setup wizard embedded directly into registration.',
  },
  {
    title: 'Earn the AI claim before repeating it',
    description:
      '"AI 2.0" as a headline pillar is risky while users report repetitive answers; proof (accuracy, verifiable workflows) matters more than buzzwords.',
    riskOfStatusQuo: 'Overpromising on generic AI triggers immediate disillusionment when the LLM hallucinates or repeats.',
    actionableContentIdea: 'Use-case video shorts: "How Notion AI synthesizes 30 customer call notes into a prioritized backlog in 10s".',
  },
];

export const GTM_RECOMMENDATIONS: GtmRecommendation[] = [
  {
    id: 1,
    title: 'Segment the pitch by workspace maturity, not just company size',
    description:
      'A 2-person team and a 200-page power user have opposite needs; one generic marketing message cannot serve both successfully.',
    whyItMatters: 'Maturity dictates pain: young workspaces love flexibility; mature workspaces dread search latency and database bloat.',
    deliverableType: 'Lifecycle Messaging Framework',
  },
  {
    id: 2,
    title: 'Build a "Workspace Health" content series',
    description:
      'Create archiving guides, database structuring frameworks, and performance hygiene checklists that turn the #1 complaint into a retention asset.',
    whyItMatters: 'Transforms a perceived technical bug into proactive operational education that customer success can champion.',
    deliverableType: 'Educational Content & Templates',
  },
  {
    id: 3,
    title: 'Ship and market a real guided onboarding path',
    description:
      'Competitively, this is the lowest-cost fix with the highest activation payoff, and reviewers are asking for it verbatim.',
    whyItMatters: 'Reduces time-to-value from days of YouTube rabbit holes to 15 guided minutes.',
    deliverableType: 'Product-Led Onboarding & Micro-courses',
  },
  {
    id: 4,
    title: 'Don’t contest ClickUp on task-management depth',
    description:
      'Contest ClickUp on tool-count reduction and total cost of the stack it replaces. Notion is docs-first, not a Gantt-chart specialist.',
    whyItMatters: 'Arguing feature-for-feature against dedicated sprint tools loses credibility; winning the consolidation argument wins the contract.',
    deliverableType: 'Sales Battlecard & Objection Handling',
  },
  {
    id: 5,
    title: 'Treat offline reliability as a trust issue, not an edge case',
    description:
      'For a knowledge base that teams depend on daily, "it didn’t sync" is a churn reason, not a minor bug report.',
    whyItMatters: 'Trust is binary in B2B knowledge management. Clear offline status indicators prevent data anxiety.',
    deliverableType: 'Product Roadmap & Trust Center Update',
  },
];
