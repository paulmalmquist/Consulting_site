export type IndustryCard = {
  title: string;
  description: string;
};

export type ReconstructCard = {
  title: string;
  description: string;
  outcome: string;
};

export type IndustryVertical = {
  slug: 'real-estate-private-equity' | 'consumer-credit' | 'medical' | 'legal';
  label: string;
  heroSubheadline: string;
  pressureCards: IndustryCard[];
  breakpoints: {
    items: string[];
    explanation: string;
  };
  reconstructCards: ReconstructCard[];
  engagementModel: {
    intro: string;
    principles: string[];
  };
  controlStatement: string;
  outcomeCards: IndustryCard[];
};

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    slug: 'real-estate-private-equity',
    label: 'Real Estate Private Equity',
    heroSubheadline:
      'AI-native workflows with measurable operational impact across LP reporting packages, capital account statements, waterfall calculations, and covenant compliance.',
    pressureCards: [
      {
        title: 'LP Reporting Timelines Keep Compressing',
        description:
          'Investor expectations for faster LP reporting packages are rising while supporting data still arrives from fragmented systems.'
      },
      {
        title: 'Portfolio Rollups Lag Decision Windows',
        description:
          'Investment teams often review stale portfolio rollups when manual consolidation delays investment committee materials.'
      },
      {
        title: 'Waterfall Logic Is Hard to Defend',
        description:
          'Spreadsheet-based waterfall calculations increase version drift, manual reconciliation, and escalation risk near close cycles.'
      },
      {
        title: 'Covenant Compliance Scrutiny Is Higher',
        description:
          'Debt markets volatility increases pressure for traceable covenant compliance reporting and defensible exception handling.'
      }
    ],
    breakpoints: {
      items: [
        'LP reporting packages are rebuilt manually from disconnected portfolio sources.',
        'Capital account statements require repeated tie-outs before release.',
        'Waterfall calculations vary across analyst templates, reducing IRR integrity.',
        'Covenant compliance monitoring depends on delayed spreadsheet portfolio rollups.'
      ],
      explanation:
        'AI does not replace fragmented systems. It exposes where controls are weak. The issue is not effort; it is missing execution logic, weak traceability, and inconsistent ownership.'
    },
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
    heroSubheadline:
      'AI embedded in controlled operational systems for underwriting exception queues, servicing handoffs, delinquency tracking, and regulatory documentation.',
    pressureCards: [
      {
        title: 'Credit Margins Are Under Pressure',
        description:
          'Lenders must accelerate throughput while preserving risk discipline and documentation quality in a tighter spread environment.'
      },
      {
        title: 'Regulatory Reviews Expect Evidence',
        description:
          'Decision logic, adverse action context, and servicing records must be traceable, not reconstructed after the fact.'
      },
      {
        title: 'Default Volatility Requires Faster Signal',
        description:
          'Delinquency tracking and loss forecasting are constrained when risk scoring inputs and portfolio stratification are fragmented.'
      },
      {
        title: 'Manual Exception Queues Do Not Scale',
        description:
          'Underwriting and servicing teams lose cycle time when high-volume exception handling depends on ad hoc triage.'
      }
    ],
    breakpoints: {
      items: [
        'Underwriting exception queues rely on spreadsheet logic with inconsistent decision paths.',
        'Risk scoring inputs are reconciled manually before adjudication and review.',
        'Servicing handoffs create state loss between collections, care, and compliance teams.',
        'Regulatory documentation is assembled retroactively from disconnected systems.'
      ],
      explanation:
        'AI-driven decisions must be explainable. We build systems where credit logic can be reviewed, traced, and defended.'
    },
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
    heroSubheadline:
      'Execution systems designed to produce audit-ready outcomes in revenue cycle management, denial management, prior authorization workflows, and payer reconciliation.',
    pressureCards: [
      {
        title: 'Staffing Constraints Increase Throughput Risk',
        description:
          'Provider and MSO teams are expected to maintain service and collections performance with limited administrative capacity.'
      },
      {
        title: 'Reimbursement Delays Pressure Margin',
        description:
          'Cash acceleration stalls when prior authorization, denial management, and payer reconciliation are loosely controlled.'
      },
      {
        title: 'Payer Reporting Burden Keeps Expanding',
        description:
          'Practice-level reporting and compliance documentation requirements are rising across contracts and jurisdictions.'
      },
      {
        title: 'Manual Reconciliation Consumes Capacity',
        description:
          'Teams spend disproportionate time resolving workflow drift between CPT coding, billing, and payer systems.'
      }
    ],
    breakpoints: {
      items: [
        'Prior authorization workflows lose status integrity across payer portals and internal queues.',
        'Denial management relies on late-stage manual triage rather than controlled exception states.',
        'Payer reconciliation and CPT coding alignment require repeated spreadsheet tie-outs.',
        'Practice-level reporting is delayed by fragmented source systems and inconsistent ownership.'
      ],
      explanation:
        'AI in healthcare must improve margin without increasing compliance risk. We design workflows that do both.'
    },
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
    heroSubheadline:
      'AI-native workflows with measurable operational impact across intake qualification, matter lifecycle tracking, document classification, and time entry reconciliation.',
    pressureCards: [
      {
        title: 'Client Cost Scrutiny Is Rising',
        description:
          'Legal teams are under pressure to show clearer value, cleaner billing narratives, and faster status transparency.'
      },
      {
        title: 'Non-Billable Leakage Is Expanding',
        description:
          'Administrative follow-up and matter status reconstruction consume capacity that should remain billable.'
      },
      {
        title: 'Document Workflows Remain Manual',
        description:
          'Document classification bottlenecks delay matter progression and increase review overhead.'
      },
      {
        title: 'Case Status Visibility Is Fragmented',
        description:
          'Partners and operations teams often manage updates across disconnected systems and inconsistent workflows.'
      }
    ],
    breakpoints: {
      items: [
        'Intake qualification criteria are applied inconsistently across practice groups.',
        'Matter lifecycle tracking lacks controlled state definitions and ownership handoffs.',
        'Document classification queues create avoidable delays in active matters.',
        'Time entry reconciliation and billing narratives require repeated manual alignment.'
      ],
      explanation:
        'AI does not replace legal judgment. It reduces administrative friction around it.'
    },
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
