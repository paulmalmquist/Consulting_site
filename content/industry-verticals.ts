export type IndustryCard = {
  title: string;
  description: string;
};

export type ReconstructCard = {
  title: string;
  description: string;
  outcome: string;
};

export type IndustrySection = {
  title: string;
  intro?: string;
  items: string[];
  closing?: string[];
};

export type IndustryVertical = {
  slug: 'real-estate-private-equity' | 'consumer-credit' | 'medical' | 'legal';
  label: string;
  themeKey: 'cyan' | 'amber' | 'rose' | 'violet';
  teaser: string;
  contactLabel: string;
  heroImageUrl: string;
  heroHeadline: string;
  heroSubheadline: string;
  whyItBreaks: IndustrySection;
  whatWeChange: IndustrySection;
  buyerProfile: string[];
  buyerSentence: string;
  reconstructCards: ReconstructCard[];
  engagementModel: {
    intro: string;
    principles: string[];
  };
  credibility: {
    intro: string;
    pillars: Array<{
      title: string;
      description: string;
    }>;
  };
  controlStatement: string;
  outcomeCards: IndustryCard[];
};

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    slug: 'real-estate-private-equity',
    label: 'Real Estate Private Equity',
    themeKey: 'amber',
    teaser: 'Stabilize investor reporting, waterfall logic, and portfolio controls without rebuilding the entire investment stack.',
    contactLabel: 'Real Estate Private Equity',
    heroImageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
    heroHeadline: 'Make Fund Math Deterministic',
    heroSubheadline:
      'Replace spreadsheet-dependent fund operations with controlled execution across underwriting, waterfall logic, capital activity, and investor reporting. The objective is continuity across the capital stack, with calculations, approvals, and reporting outputs that remain reviewable under scrutiny.',
    whyItBreaks: {
      title: 'Why It Breaks',
      intro: 'The model is not the problem. The operating chain around it is.',
      items: [
        'Underwriting assumptions drift across analyst versions before investment committee review.',
        'Waterfall logic is defended from spreadsheets instead of governed from a controlled source.',
        'Capital call and distribution workflows depend on manual tie-outs.',
        'Portfolio rollups arrive too late to support timely decisions.',
        'Investor reporting is rebuilt each cycle from disconnected asset data.'
      ],
      closing: [
        'The breakdown is not in financial intent.',
        'It is in version drift, weak ownership, and reporting logic that cannot be traced end to end.'
      ]
    },
    whatWeChange: {
      title: 'What We Change',
      intro:
        'We turn fund operations into a governed execution layer that preserves calculation integrity from deal evaluation through reporting.',
      items: [
        'Version-controlled underwriting assumptions and approval checkpoints',
        'Deterministic waterfall logic with explicit rule governance',
        'Capital activity workflows with auditable state transitions',
        'Portfolio-level covenant and reporting controls across assets',
        'Investor reporting assembled from workflow-native data instead of manual reconsolidation'
      ],
      closing: [
        'No uncontrolled model forks.',
        'No last-mile reporting reconstruction.',
        'Fund math becomes repeatable, reviewable, and operational.'
      ]
    },
    buyerProfile: [
      'Fund operations and portfolio teams managing LP reporting pressure across multiple assets.',
      'CFO, COO, finance, and investor relations leaders accountable for reporting integrity.',
      'Firms with spreadsheet-dependent waterfalls, capital events, and covenant workflows.',
      'Teams that need audit-ready controls before adding more automation.'
    ],
    buyerSentence: 'Built for operators who need cleaner fund execution without disrupting the full investment stack.',
    reconstructCards: [
      {
        title: 'LP Reporting System',
        description:
          'Automate LP reporting package assembly with documented logic, approval checkpoints, and version traceability.',
        outcome: 'Defensible performance reporting with lower manual reconciliation load.'
      },
      {
        title: 'Standardized Waterfall Engine',
        description:
          'Replace spreadsheet drift with controlled waterfall calculations and explicit model governance.',
        outcome: 'Standardized waterfall logic and improved IRR integrity controls.'
      },
      {
        title: 'Capital Activity Control Layer',
        description:
          'Structure capital call, notice, and capital account statement workflows around auditable state transitions.',
        outcome: 'Reduced capital call errors and cleaner investor communication trails.'
      },
      {
        title: 'Audit-Ready Portfolio Reporting Infrastructure',
        description:
          'Build portfolio-level data consistency checks across asset updates, debt covenants, and IC materials.',
        outcome: 'Portfolio-level data consistency with traceable, audit-ready reporting outputs.'
      }
    ],
    engagementModel: {
      intro:
        'Execution systems are designed to produce measurable outcomes: traceable logic, governed approvals, and audit-ready reporting evidence.',
      principles: [
        'Fixed scope tied to one high-friction workflow.',
        'Fixed fee with explicit acceptance criteria.',
        'Parallel run before cutover to verify output integrity.',
        'Documented logic and transfer of operational control to the client.'
      ]
    },
    credibility: {
      intro:
        'Operational performance in real estate private equity depends on reporting integrity, model discipline, and controlled execution across asset-level workflows. We work at the point where LP expectations, investment committee cadence, and portfolio operations intersect.',
      pillars: [
        {
          title: 'Investment Operations Fluency',
          description:
            'Asset management reporting, capital events, and investment committee preparation are treated as one operating system, not disconnected tasks.'
        },
        {
          title: 'Financial Model Integrity',
          description:
            'Waterfall modeling logic, IRR sensitivity assumptions, and allocation pathways remain controlled, versioned, and reviewable.'
        },
        {
          title: 'Audit-Ready Reporting',
          description:
            'LP reporting packages, capital account statements, and covenant compliance outputs are built for traceability under scrutiny.'
        },
        {
          title: 'Workflow Reconstruction',
          description:
            'Spreadsheet-dependent reporting chains are replaced with structured execution layers that reduce reconciliation risk across asset classes.'
        }
      ]
    },
    controlStatement:
      'AI that improves IRR modeling is useful. AI that produces defensible LP reporting is strategic.',
    outcomeCards: [
      {
        title: 'Defensible Performance Reporting',
        description: 'Improve LP and IC confidence with documented controls, evidence trails, and reproducible portfolio reporting outputs.'
      },
      {
        title: 'Standardized Waterfall Logic',
        description: 'Reduce review friction by enforcing governed waterfall calculations and explicit change control.'
      },
      {
        title: 'Reduced Capital Call Errors',
        description: 'Lower manual exceptions through controlled capital activity workflows and traceable approval states.'
      },
      {
        title: 'Audit-Ready Reporting Infrastructure',
        description: 'Strengthen governance with portfolio-level traceability, documented logic, and clear control ownership.'
      }
    ]
  },
  {
    slug: 'consumer-credit',
    label: 'Consumer Credit',
    themeKey: 'cyan',
    teaser: 'Tighten underwriting, servicing, and compliance workflows so throughput improves without losing control.',
    contactLabel: 'Consumer Credit',
    heroImageUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1800&q=80',
    heroHeadline: 'Make Credit Logic Operational',
    heroSubheadline:
      'Embed underwriting discipline, servicing controls, segmentation logic, and regulatory documentation directly into observable workflows. Credit risk management improves when portfolio risk monitoring, covenant tracking, and underwriting exception management operate inside the same controlled system.',
    whyItBreaks: {
      title: 'Why It Breaks',
      intro: 'Credit policy is rarely the issue. Execution is.',
      items: [
        'Exception queues grow without visibility.',
        'Risk overrides lose audit clarity.',
        'Segmentation remains static when portfolio conditions change.',
        'Servicing handoffs create exposure gaps between teams.',
        'Documentation is assembled after the fact instead of generated from workflow state.'
      ],
      closing: [
        'The risk is not bad intent.',
        'It is invisible breakdown across credit exposure aggregation, counterparty risk review, and day-to-day execution.'
      ]
    },
    whatWeChange: {
      title: 'What We Change',
      intro:
        'We embed credit logic directly into execution systems so control survives volume, handoffs, and review.',
      items: [
        'Dynamic portfolio segmentation tied to live workflow states',
        'Rule-based exposure triggers for portfolio risk monitoring',
        'Real-time covenant tracking and concentration monitoring',
        'Structured underwriting exception management with explicit queue ownership',
        'Workflow-native documentation generation for audits, examinations, and stress testing support'
      ],
      closing: [
        'No parallel spreadsheets.',
        'No shadow tracking systems.',
        'Credit discipline becomes operational.'
      ]
    },
    buyerProfile: [
      'Lenders running high-volume exception queues across underwriting and servicing.',
      'Risk, compliance, and operations leaders under pressure to prove decision integrity.',
      'Teams managing delinquency, documentation, and handoff drift across multiple systems.',
      'Organizations that need explainable automation before broader AI rollout.'
    ],
    buyerSentence: 'Built for credit teams that need faster throughput and stronger evidence at the same time.',
    reconstructCards: [
      {
        title: 'Documented Credit Decision Engine',
        description: 'Embed decision support with explicit rule lineage, approval states, and exception evidence.',
        outcome: 'Shortened underwriting decision cycles with documented decision logic.'
      },
      {
        title: 'Underwriting and Servicing Workflow Controls',
        description: 'Standardize handoffs, queue ownership, and escalation thresholds across the credit lifecycle.',
        outcome: 'Servicing workflow traceability and reduced reconciliation drift.'
      },
      {
        title: 'Portfolio Stratification and Risk Layer',
        description: 'Unify delinquency tracking, loss forecasting, and cohort-level performance visibility.',
        outcome: 'Audit-aligned portfolio reporting and clearer risk governance.'
      },
      {
        title: 'Regulatory Documentation Pipeline',
        description: 'Generate reproducible compliance artifacts from workflow states instead of manual backfill.',
        outcome: 'Reduced compliance friction and stronger control defensibility.'
      }
    ],
    engagementModel: {
      intro:
        'AI-native workflows with measurable operational impact require evidence-first execution: controls, documentation, and reviewable logic at each decision point.',
      principles: [
        'Fixed scope aligned to one workflow with quantifiable throughput and control metrics.',
        'Fixed fee and explicit stage-gate deliverables.',
        'Parallel run before cutover to validate underwriting and servicing integrity.',
        'Documented logic and transfer of operational control to internal owners.'
      ]
    },
    credibility: {
      intro:
        'Credit operations fail at handoffs between underwriting, servicing, and compliance when decision logic is not observable. We build systems around explainable decisions, queue integrity, and documentation readiness.',
      pillars: [
        {
          title: 'Credit Logic Awareness',
          description:
            'Underwriting exception queues, risk score overrides, and adjudication pathways are mapped to where failures actually occur.'
        },
        {
          title: 'Explainability & Traceability',
          description:
            'Decision systems are structured so credit logic, overrides, and portfolio stratification outcomes can be reviewed and defended.'
        },
        {
          title: 'Servicing Workflow Reconstruction',
          description:
            'Fragmented servicing handoffs and delinquency tracking loops are rebuilt into measurable operational chains with clear ownership.'
        },
        {
          title: 'Compliance Alignment',
          description:
            'Regulatory documentation is generated from workflow states and control events, not assembled late through manual backfill.'
        }
      ]
    },
    controlStatement:
      'Automation is only valuable when it can be measured and defended.',
    outcomeCards: [
      {
        title: 'Shortened Underwriting Decision Cycles',
        description: 'Reduce exception latency with controlled routing and documented adjudication paths.'
      },
      {
        title: 'Documented Decision Logic',
        description: 'Maintain traceable credit logic that can be reviewed during internal and external audits.'
      },
      {
        title: 'Reduced Compliance Friction',
        description: 'Lower audit prep burden through continuously generated regulatory documentation.'
      },
      {
        title: 'Audit-Aligned Portfolio Reporting',
        description: 'Improve governance with portfolio stratification outputs tied to reconciled operational data.'
      }
    ]
  },
  {
    slug: 'medical',
    label: 'Medical',
    themeKey: 'rose',
    teaser: 'Reduce revenue-cycle leakage across prior auth, denial management, and payer reconciliation with governed workflow control.',
    contactLabel: 'Medical',
    heroImageUrl: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1800&q=80',
    heroHeadline: 'Make Clinical Operations Observable',
    heroSubheadline:
      'Create operational control across prior authorization, denial management, payer reconciliation, and reimbursement workflows without adding compliance risk. The goal is observable execution, cleaner handoffs, and measurable financial continuity across care delivery administration.',
    whyItBreaks: {
      title: 'Why It Breaks',
      intro:
        'Clinical and revenue-cycle workflows do not usually fail because teams lack effort. They fail because operational state disappears between steps.',
      items: [
        'Authorization status changes are lost between payer portals and internal teams.',
        'Denials are triaged late, after avoidable backlog has already formed.',
        'Coding, billing, and reconciliation rely on repeated manual tie-outs.',
        'Ownership blurs across intake, clinical support, and billing operations.',
        'Reporting is assembled from fragmented systems instead of live workflow evidence.'
      ],
      closing: [
        'The exposure is not abstract inefficiency.',
        'It is reimbursement leakage, delayed cash, and limited visibility into where care-adjacent operations are actually breaking.'
      ]
    },
    whatWeChange: {
      title: 'What We Change',
      intro:
        'We build an execution layer that keeps operational state visible across administrative care workflows and ties every exception to an owner, a rule, and an audit trail.',
      items: [
        'Prior authorization workflows with governed status transitions',
        'Denial management routed through controlled exception states',
        'Payer reconciliation and coding checks tied to documented control points',
        'Queue ownership and escalation logic across reimbursement handoffs',
        'Reporting generated from workflow evidence instead of retrospective assembly'
      ],
      closing: [
        'No hidden queue drift.',
        'No reconciliation by folklore.',
        'Operational control stays visible from intake through reimbursement.'
      ]
    },
    buyerProfile: [
      'Provider groups and MSOs with margin pressure tied to administrative execution.',
      'Revenue cycle, finance, and operations leaders responsible for reimbursement continuity.',
      'Teams buried in prior auth, denial, and reconciliation queues across payer touchpoints.',
      'Organizations that need audit-ready process improvement without destabilizing billing operations.'
    ],
    buyerSentence: 'Built for healthcare operators who need cleaner reimbursement workflows without adding compliance risk.',
    reconstructCards: [
      {
        title: 'Revenue Cycle Exception Control',
        description: 'Detect and route high-risk claim exceptions before downstream denial accumulation.',
        outcome: 'Reduced claim denials and fewer manual correction loops.'
      },
      {
        title: 'Prior Auth and Denial Workflow System',
        description: 'Structure lifecycle states, owner accountability, and escalation logic across payer touchpoints.',
        outcome: 'Faster reimbursement cycles with stronger traceability.'
      },
      {
        title: 'Payer Reconciliation and Coding Alignment',
        description: 'Standardize payer reconciliation and CPT coding control checks under documented governance.',
        outcome: 'Clean payer reporting trails and lower compliance documentation friction.'
      },
      {
        title: 'Structured Operational Dashboards',
        description: 'Publish practice-level reporting tied directly to workflow states and evidence-ready metrics.',
        outcome: 'Lower administrative overhead and clearer leadership control.'
      }
    ],
    engagementModel: {
      intro:
        'AI embedded in controlled operational systems creates value only when outputs are measurable, traceable, and defensible in compliance review.',
      principles: [
        'Fixed scope and fixed fee centered on one operational workflow.',
        'Parallel run before cutover to protect continuity and reimbursement timing.',
        'Documented logic across authorization, denial, and reconciliation steps.',
        'Transfer of operational control to internal leaders with governance artifacts.'
      ]
    },
    credibility: {
      intro:
        'Healthcare operating margin is heavily influenced by administrative execution quality in revenue cycle workflows. We work inside prior authorization, denial management, and payer reconciliation realities where leakage occurs.',
      pillars: [
        {
          title: 'Revenue Cycle Depth',
          description:
            'Denial rates, payer reconciliation variance, and reimbursement timing are handled as operational control issues with financial impact.'
        },
        {
          title: 'Workflow Before AI',
          description:
            'Broken prior authorization, scheduling, and billing chains are stabilized first so automation improves throughput instead of amplifying noise.'
        },
        {
          title: 'Compliance-Conscious Design',
          description:
            'CPT coding alignment, reporting obligations, and documentation controls are embedded into workflow logic from day one.'
        },
        {
          title: 'Operational Visibility',
          description:
            'Practice-level dashboards are tied to actual workflow state and exception ownership, not delayed spreadsheet rollups.'
        }
      ]
    },
    controlStatement:
      'If your AI strategy lives in slide decks, it is not operational.',
    outcomeCards: [
      {
        title: 'Reduced Claim Denials',
        description: 'Increase first-pass quality with standardized controls and traceable exception handling.'
      },
      {
        title: 'Faster Reimbursement Cycles',
        description: 'Accelerate payment timelines by reducing state drift across prior auth and denial workflows.'
      },
      {
        title: 'Lower Administrative Overhead',
        description: 'Decrease manual reconciliation effort with structured workflows and governed data states.'
      },
      {
        title: 'Clean Payer Reporting Trails',
        description: 'Improve audit readiness through reproducible reporting, documentation, and control evidence.'
      }
    ]
  },
  {
    slug: 'legal',
    label: 'Legal',
    themeKey: 'violet',
    teaser: 'Reduce administrative drag across intake, matter tracking, and billing while preserving partner-level visibility.',
    contactLabel: 'Legal',
    heroImageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80',
    heroHeadline: 'Turn Legal Workflow Into Measurable Execution',
    heroSubheadline:
      'Reduce administrative drag across intake, matter progression, document handling, and billing by embedding control directly into legal operations. The result is cleaner execution, better matter visibility, and measurable operational discipline without interfering with legal judgment.',
    whyItBreaks: {
      title: 'Why It Breaks',
      intro: 'Legal judgment is not the bottleneck. Workflow inconsistency is.',
      items: [
        'Intake criteria are applied differently across teams and matter types.',
        'Matter status changes are tracked informally instead of through governed states.',
        'Document triage creates avoidable delay before substantive work can proceed.',
        'Billing narratives and time reconciliation require repeated manual cleanup.',
        'Partners and operators rebuild status visibility from disconnected systems.'
      ],
      closing: [
        'The problem is not expertise.',
        'It is administrative drift that expands non-billable load and weakens operational visibility.'
      ]
    },
    whatWeChange: {
      title: 'What We Change',
      intro:
        'We structure legal operations as a controlled execution chain so intake, matter movement, document handling, and billing progress can be measured and defended.',
      items: [
        'Standardized intake qualification and routing logic',
        'Governed matter states with explicit ownership and escalation',
        'Controlled document triage with review checkpoints',
        'Time entry and billing reconciliation tied to workflow events',
        'Status reporting generated from matter-state evidence instead of manual reconstruction'
      ],
      closing: [
        'No invisible handoffs.',
        'No status reporting built from memory.',
        'Legal workflow becomes measurable without reducing professional judgment to software theater.'
      ]
    },
    buyerProfile: [
      'Firms and in-house legal operations teams with matter progression bottlenecks.',
      'Partners, COOs, and legal operations leaders accountable for realization and reporting.',
      'Teams losing billable capacity to manual intake, triage, and reconciliation work.',
      'Organizations that need structured workflow control without disrupting legal judgment.'
    ],
    buyerSentence: 'Built for legal operators who need less non-billable friction and clearer matter visibility.',
    reconstructCards: [
      {
        title: 'Intake Qualification Engine',
        description: 'Standardize intake logic, routing controls, and acceptance criteria across matter types.',
        outcome: 'Reduced intake bottlenecks and cleaner qualification evidence.'
      },
      {
        title: 'Matter Lifecycle Visibility Layer',
        description: 'Define governed matter states, owner accountability, and exception escalation.',
        outcome: 'Matter-level visibility with auditable execution control.'
      },
      {
        title: 'Document Triage Workflow',
        description: 'Accelerate document classification with controlled review checkpoints and traceability.',
        outcome: 'Document triage acceleration and reduced operational drag.'
      },
      {
        title: 'Billing Reconciliation and Reporting System',
        description: 'Automate time entry reconciliation, client billing narratives, and case status reporting outputs.',
        outcome: 'Cleaner billing documentation and improved client reporting transparency.'
      }
    ],
    engagementModel: {
      intro:
        'Execution systems designed to produce audit-ready outcomes reduce non-billable load while improving matter-level governance and reporting consistency.',
      principles: [
        'Fixed scope and fixed fee for one high-friction legal operations workflow.',
        'Parallel run before cutover to validate matter continuity and billing integrity.',
        'Documented logic across intake, matter tracking, and reporting steps.',
        'Transfer of operational control with governance checkpoints and evidence standards.'
      ]
    },
    credibility: {
      intro:
        'Legal operations performance depends on clean matter progression, disciplined documentation, and reliable billing workflows. We focus on where administrative friction accumulates and non-billable load expands.',
      pillars: [
        {
          title: 'Matter-Level Operational Insight',
          description:
            'Matter lifecycle tracking, intake qualification gaps, and status handoffs are analyzed where execution drift begins.'
        },
        {
          title: 'Non-Billable Time Reduction',
          description:
            'Administrative drag is reduced by structuring workflow states, ownership, and reconciliation steps around measurable control points.'
        },
        {
          title: 'Document Workflow Control',
          description:
            'Document classification and triage are designed for assistive speed while preserving process clarity and legal review integrity.'
        },
        {
          title: 'Reporting & Transparency',
          description:
            'Time entry reconciliation, billing narrative assembly, and client reporting are aligned to improve internal and external visibility.'
        }
      ]
    },
    controlStatement:
      'AI without operational control creates noise. We build signal.',
    outcomeCards: [
      {
        title: 'Reduced Intake Bottlenecks',
        description: 'Improve intake throughput with controlled qualification logic and clear owner handoffs.'
      },
      {
        title: 'Matter-Level Visibility',
        description: 'Increase case status transparency through governed lifecycle tracking and documented state changes.'
      },
      {
        title: 'Cleaner Billing Documentation',
        description: 'Reduce reconciliation friction with traceable time entry and narrative generation controls.'
      },
      {
        title: 'Improved Client Reporting Transparency',
        description: 'Deliver defensible client-facing reporting from structured, audit-aligned operational workflows.'
      }
    ]
  }
];

export const INDUSTRY_VERTICAL_BY_SLUG: Record<IndustryVertical['slug'], IndustryVertical> =
  INDUSTRY_VERTICALS.reduce(
    (acc, vertical) => {
      acc[vertical.slug] = vertical;
      return acc;
    },
    {} as Record<IndustryVertical['slug'], IndustryVertical>
  );
