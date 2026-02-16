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
  outcomeCards: IndustryCard[];
};

export const INDUSTRY_VERTICALS: IndustryVertical[] = [
  {
    slug: 'real-estate-private-equity',
    label: 'Real Estate Private Equity',
    heroSubheadline:
      'Operational AI for asset management reporting, capital tracking, and covenant monitoring workflows.',
    pressureCards: [
      {
        title: 'LP Reporting Expectations Are Tightening',
        description:
          'LP stakeholders expect faster, cleaner reporting cycles with fewer manual revisions across operating periods.'
      },
      {
        title: 'Portfolio Visibility Lags Decision Cadence',
        description:
          'Investment and asset management teams often operate on delayed views when data is assembled manually.'
      },
      {
        title: 'Excel Dependency Creates Control Risk',
        description:
          'Spreadsheet-heavy processes increase version drift, hidden logic risk, and review burden under timeline pressure.'
      },
      {
        title: 'Volatile Capital Markets Raise Scrutiny',
        description:
          'When financing conditions move quickly, operating controls and reporting defensibility are tested harder.'
      }
    ],
    breakpoints: {
      items: [
        'Asset management reporting is assembled manually across disconnected files.',
        'Waterfall calculations diverge across analyst-maintained templates.',
        'Capital call tracking relies on email and spreadsheet reconciliation.',
        'Debt covenant monitoring is delayed by fragmented portfolio data pulls.'
      ],
      explanation:
        'These failures are not about effort. They result from fragmented data states, uncontrolled calculation logic, and inconsistent ownership at handoff points.'
    },
    reconstructCards: [
      {
        title: 'Automated Reporting Pack Assembly',
        description: 'Standardize source inputs and generate repeatable LP and IC reporting packages.',
        outcome: 'Reduce reporting cycle compression risk and improve consistency under deadlines.'
      },
      {
        title: 'Controlled Waterfall Engine',
        description: 'Replace uncontrolled spreadsheet logic with versioned, governed waterfall calculations.',
        outcome: 'Improve defensibility and reduce calculation reconciliation effort.'
      },
      {
        title: 'Portfolio Data Layer',
        description: 'Create a unified operating data layer across asset, capital, and debt monitoring workflows.',
        outcome: 'Support faster cross-portfolio decision reviews with consistent metrics.'
      },
      {
        title: 'Audit-Ready Reporting Pipelines',
        description: 'Build structured reporting workflows with traceable lineage and approval checkpoints.',
        outcome: 'Strengthen control posture for audit, lender, and investor review cycles.'
      }
    ],
    engagementModel: {
      intro:
        'Engagements are executed as fixed-scope workflow replacement programs with clear decision gates and owner transfer.',
      principles: [
        'Fixed scope and fixed fee aligned to one workflow.',
        'Replace one workflow at a time to protect operating continuity.',
        'Parallel-run old and new process before production cutover.',
        'Client owns the resulting system, controls, and operating cadence.'
      ]
    },
    outcomeCards: [
      {
        title: '40-60% Reporting Time Reduction',
        description: 'Shrink analyst assembly cycles for recurring reporting periods and packet updates.'
      },
      {
        title: 'Cleaner Investment Committee Prep',
        description: 'Deliver consistent metrics and fewer pre-read corrections before decision meetings.'
      },
      {
        title: 'Reduced Analyst Lift',
        description: 'Move repetitive reconciliation work into structured workflows and controlled pipelines.'
      },
      {
        title: 'Stronger Audit Defensibility',
        description: 'Improve traceability across calculations, approvals, and final reporting artifacts.'
      }
    ]
  },
  {
    slug: 'consumer-credit',
    label: 'Consumer Credit',
    heroSubheadline:
      'Operational AI for underwriting, servicing, collections, and compliance reporting workflows.',
    pressureCards: [
      {
        title: 'Margin Compression Is Ongoing',
        description:
          'Origination and servicing teams are expected to improve throughput while operating with tighter economics.'
      },
      {
        title: 'Regulatory Scrutiny Is Increasing',
        description:
          'Control discipline and documentation quality are now core operating requirements, not optional process hygiene.'
      },
      {
        title: 'Default Volatility Changes Risk Posture',
        description:
          'Shifts in delinquency behavior require faster operational signal flow across underwriting and servicing.'
      },
      {
        title: 'Manual Exception Review Does Not Scale',
        description:
          'Exception queues expand quickly when decisions and escalations depend on manual triage.'
      }
    ],
    breakpoints: {
      items: [
        'Spreadsheet underwriting logic introduces inconsistent decision paths.',
        'Servicing workflows require manual handoffs and re-keyed updates.',
        'Collections reporting is fragmented across teams and systems.',
        'Compliance reporting cycles are slowed by evidence assembly friction.'
      ],
      explanation:
        'Execution breaks where decision logic, ownership, and evidence generation are not embedded into the workflow itself. Manual oversight cannot keep pace with volume variance.'
    },
    reconstructCards: [
      {
        title: 'Decision-Support Overlays',
        description: 'Embed governed recommendation layers into existing credit decision workflows.',
        outcome: 'Improve speed while preserving controlled approval paths.'
      },
      {
        title: 'Underwriting Workflow Engines',
        description: 'Structure rule execution, exception routing, and adjudication logging in one flow.',
        outcome: 'Reduce cycle time variability and improve consistency.'
      },
      {
        title: 'Portfolio Analytics Layer',
        description: 'Unify underwriting, servicing, and collections signals into an operational reporting layer.',
        outcome: 'Increase risk visibility across delinquency and recovery cohorts.'
      },
      {
        title: 'Compliance-Aligned Data Models',
        description: 'Model operational data and outputs to support reproducible compliance reporting.',
        outcome: 'Strengthen documentation quality and reduce regulatory response friction.'
      }
    ],
    engagementModel: {
      intro:
        'Delivery follows fixed-fee workflow replacement with controls-first design and explicit owner accountability.',
      principles: [
        'Fixed scope with decision gates tied to operational outputs.',
        'Fixed fee with no expansion into broad transformation programs.',
        'One workflow replacement at a time with measured control lift.',
        'Parallel-run validation before cutover and client ownership at handoff.'
      ]
    },
    outcomeCards: [
      {
        title: 'Faster Underwriting Cycles',
        description: 'Improve time-to-decision by reducing exception handling latency and rework.'
      },
      {
        title: 'Reduced Servicing Labor',
        description: 'Lower manual servicing effort through structured routing and standardized execution states.'
      },
      {
        title: 'Improved Risk Visibility',
        description: 'Enable clearer portfolio signal tracking across underwriting and collections operations.'
      },
      {
        title: 'Stronger Audit Documentation',
        description: 'Increase completeness and repeatability of control evidence for compliance review.'
      }
    ]
  },
  {
    slug: 'medical',
    label: 'Medical',
    heroSubheadline:
      'Operational AI for prior authorization, revenue cycle, scheduling, and payer reporting workflows.',
    pressureCards: [
      {
        title: 'Staffing Shortages Increase Throughput Risk',
        description:
          'Care delivery organizations are expected to maintain service levels with constrained administrative capacity.'
      },
      {
        title: 'Reimbursement Delays Pressure Cashflow',
        description:
          'Lagging collections and denied claims create avoidable operational strain across provider groups.'
      },
      {
        title: 'Payer Reporting Burden Continues to Grow',
        description:
          'Administrative reporting expectations increase while source data remains fragmented and manually assembled.'
      },
      {
        title: 'Admin Cost Creep Is Persistent',
        description:
          'Manual coordination across scheduling, billing, and payer systems drives overhead expansion.'
      }
    ],
    breakpoints: {
      items: [
        'Prior authorization tracking is fragmented across systems and communications channels.',
        'Revenue cycle leakage persists through unresolved billing and posting exceptions.',
        'Scheduling workflows underperform due to weak optimization and handoff discipline.',
        'Payer reports are built manually with recurring reconciliation loops.'
      ],
      explanation:
        'Where ownership, lifecycle state definitions, and reconciliation logic are weak, teams absorb variance manually. This suppresses throughput and delays cash realization.'
    },
    reconstructCards: [
      {
        title: 'Billing Exception Detection',
        description: 'Detect and route high-risk billing exceptions before they age into downstream denials.',
        outcome: 'Improve claim quality and reduce avoidable rework.'
      },
      {
        title: 'Structured Reconciliation Workflows',
        description: 'Implement repeatable reconciliation states with owner-level escalation controls.',
        outcome: 'Lower unresolved variance and improve payment traceability.'
      },
      {
        title: 'Scheduling Optimization Engine',
        description: 'Structure scheduling decisions around capacity constraints and operational priorities.',
        outcome: 'Increase utilization and reduce avoidable scheduling friction.'
      },
      {
        title: 'Operational Dashboards',
        description: 'Deliver role-specific dashboards tied to workflow states and exception ownership.',
        outcome: 'Give leadership timely visibility into operational execution risk.'
      }
    ],
    engagementModel: {
      intro:
        'Programs are run as fixed-scope execution engagements with measurable operating outputs and continuity controls.',
      principles: [
        'Fixed scope and fee anchored to one operational workflow.',
        'Replace one workflow at a time to reduce disruption risk.',
        'Parallel-run evidence before full cutover decisions.',
        'Client ownership of system logic, data model, and governance cadence.'
      ]
    },
    outcomeCards: [
      {
        title: 'Faster Collections',
        description: 'Improve speed-to-cash by reducing queue stagnation and reconciliation delays.'
      },
      {
        title: 'Fewer Claim Denials',
        description: 'Reduce denial frequency by standardizing upstream controls and exception handling.'
      },
      {
        title: 'Reduced Admin Overhead',
        description: 'Lower recurring manual effort across scheduling, reporting, and billing coordination.'
      },
      {
        title: 'Executive Clarity',
        description: 'Provide cleaner performance visibility for operations and finance leadership decisions.'
      }
    ]
  },
  {
    slug: 'legal',
    label: 'Legal',
    heroSubheadline:
      'Operational AI for intake, matter tracking, document handling, and billing workflows.',
    pressureCards: [
      {
        title: 'Client Cost Scrutiny Is Sharpening',
        description:
          'Clients increasingly expect clearer service economics, faster visibility, and tighter execution controls.'
      },
      {
        title: 'Non-Billable Time Is Expanding',
        description:
          'Administrative coordination and status gathering consume high-value capacity across teams.'
      },
      {
        title: 'Manual Document Handling Slows Matters',
        description:
          'Classification and routing delays reduce throughput and increase partner review burden.'
      },
      {
        title: 'Case Reporting Is Fragmented',
        description:
          'Matter status visibility is often reconstructed manually from disconnected systems and communications.'
      }
    ],
    breakpoints: {
      items: [
        'Intake qualification criteria are applied inconsistently across teams.',
        'Case and matter status tracking depends on manual updates.',
        'Document classification queues create avoidable delays.',
        'Billing reconciliation requires repeated cross-system alignment.'
      ],
      explanation:
        'Firms lose operational leverage when intake, matter progression, and reporting logic are loosely coupled. Variance is absorbed manually and becomes non-billable load.'
    },
    reconstructCards: [
      {
        title: 'Structured Intake Engines',
        description: 'Standardize intake qualification, routing, and decision checkpoints.',
        outcome: 'Increase intake consistency and reduce early-stage cycle time.'
      },
      {
        title: 'Workflow Visibility Layer',
        description: 'Create a unified state model for matter progression and owner accountability.',
        outcome: 'Improve operational control and reduce status ambiguity.'
      },
      {
        title: 'AI-Assisted Document Triage',
        description: 'Accelerate document classification and routing under controlled review logic.',
        outcome: 'Reduce manual handling delay and partner review drag.'
      },
      {
        title: 'Matter-Level Reporting Automation',
        description: 'Generate repeatable client and internal reporting outputs from governed workflow data.',
        outcome: 'Improve reporting reliability and reduce administrative burden.'
      }
    ],
    engagementModel: {
      intro:
        'Engagements are fixed-scope, fixed-fee workflow replacements focused on operational control and measurable throughput gains.',
      principles: [
        'Fixed scope aligned to one high-friction operational workflow.',
        'Fixed fee with explicit stage gates and acceptance criteria.',
        'Parallel-run to validate workflow integrity before cutover.',
        'Client ownership of operational logic and reporting artifacts after handoff.'
      ]
    },
    outcomeCards: [
      {
        title: 'Faster Intake Cycles',
        description: 'Reduce intake-to-assignment lag through structured qualification and routing.'
      },
      {
        title: 'Reduced Non-Billable Hours',
        description: 'Lower administrative effort tied to status chasing and manual coordination.'
      },
      {
        title: 'Improved Client Reporting',
        description: 'Increase consistency and timeliness of matter-level reporting outputs.'
      },
      {
        title: 'Stronger Operational Control',
        description: 'Improve execution discipline through state definitions, ownership, and auditability.'
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
