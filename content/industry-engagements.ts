export type LifecycleStage = {
  stage: string;
  keyArtifacts: string[];
  ownerRoles: string[];
  systemDependencies: string[];
};

export type FragmentationPoint = {
  name: string;
  mechanics: string;
};

export type EngagementPhase = {
  phase: string;
  objective: string;
  outputs: string[];
};

export type IndustryEngagement = {
  slug: string;
  label: string;
  lifecycle: LifecycleStage[];
  systemTags: string[];
  fragmentation: FragmentationPoint[];
  failureMechanics: string[];
  reconstruct: string[];
  engagementModel: EngagementPhase[];
  executiveOutcomes: string[];
};

const STANDARD_PHASES = {
  phase1: {
    phase: 'Phase 1 — Operational Audit',
    objective: 'Map actual lifecycle behavior against documented process and isolate reconciliation risk.',
    outputs: ['Current-state lifecycle map', 'Artifact inventory', 'System dependency map', 'Reconciliation gap register']
  },
  phase2: {
    phase: 'Phase 2 — Control Definition',
    objective: 'Define canonical states, owner assignment, taxonomy standards, and reporting schema.',
    outputs: ['Canonical lifecycle state model', 'Owner assignment matrix', 'Taxonomy dictionary', 'Reporting schema']
  },
  phase3: {
    phase: 'Phase 3 — Execution Layer Build',
    objective: 'Deploy structured workflows around existing systems with export ingestion, logs, and control checks.',
    outputs: ['Structured workflows', 'Integrated system exports', 'Control checkpoints', 'Audit logs and operational dashboards']
  },
  phase4: {
    phase: 'Phase 4 — Continuity Transfer',
    objective: 'Transfer operational ownership with documented logic, training, and governance cadence.',
    outputs: ['Owner runbook', 'Decision and escalation playbooks', 'Governance calendar', 'Continuity handoff package']
  }
};

export const INDUSTRY_ENGAGEMENTS: IndustryEngagement[] = [
  {
    slug: 'healthcare',
    label: 'Healthcare',
    lifecycle: [
      {
        stage: 'Patient Access and Eligibility',
        keyArtifacts: ['Eligibility response files', 'Authorization request packets', 'Coverage verification logs'],
        ownerRoles: ['Patient access manager', 'Authorization specialist'],
        systemDependencies: ['Epic', 'Athenahealth', 'Availity']
      },
      {
        stage: 'Charge Capture and Coding',
        keyArtifacts: ['Charge router queues', 'Coding edits', 'Claim scrubber exceptions'],
        ownerRoles: ['Coding lead', 'Revenue integrity analyst'],
        systemDependencies: ['Epic Resolute', '3M 360 Encompass', 'Waystar']
      },
      {
        stage: '837 Claim Transmission',
        keyArtifacts: ['837P/837I batch files', 'Transmission acknowledgements', 'Rejected batch report'],
        ownerRoles: ['EDI coordinator', 'Billing supervisor'],
        systemDependencies: ['Clearinghouse', 'Payer portals', 'EDI translator']
      },
      {
        stage: '835 ERA Posting and Reconciliation',
        keyArtifacts: ['835 ERA files', 'Payment posting journals', 'CARC/RARC mapping table'],
        ownerRoles: ['Payment posting lead', 'Revenue cycle analyst'],
        systemDependencies: ['Practice management', 'Bank lockbox feed', 'ERA parser']
      },
      {
        stage: 'Denial Management and Appeals',
        keyArtifacts: ['Denial root cause taxonomy', 'Appeal packets', 'A/R aging by owner (>90 days)'],
        ownerRoles: ['Denials manager', 'Appeals specialist'],
        systemDependencies: ['Workqueue manager', 'Document repository', 'Payer correspondence tools']
      },
      {
        stage: 'Contract Variance and Underpayment Review',
        keyArtifacts: ['Allowed amount model', 'Underpayment variance report', 'Recovery tracker'],
        ownerRoles: ['Contract analyst', 'Managed care director'],
        systemDependencies: ['Contract modeling workbook', 'Payment data mart', 'BI reporting']
      }
    ],
    systemTags: ['Epic', 'Athenahealth', 'Cerner/Oracle Health', 'Waystar', 'Availity', 'Clearinghouse', 'Payer portals'],
    fragmentation: [
      {
        name: 'Status mismatches across claim states',
        mechanics:
          'Claim status diverges between EHR workqueues, clearinghouse acknowledgements, and payer portals, so owners operate from conflicting claim states.'
      },
      {
        name: 'CARC/RARC normalization gaps',
        mechanics:
          'Adjustment codes are posted as raw payer messages without normalized taxonomy, preventing denial trend analysis and owner accountability.'
      },
      {
        name: 'Manual ERA to A/R reconciliation',
        mechanics:
          '835 ERA posting and bank receipt matching require manual tie-out when remittance grouping differs from claim batching.'
      },
      {
        name: 'Unlogged PHI escalations',
        mechanics:
          'Appeal and exception decisions occur through email and calls without a structured PHI escalation log or access trail.'
      }
    ],
    failureMechanics: [
      'Data diverges when 837 rejection corrections are made in one system but not re-synced to billing workqueues.',
      'Lifecycle states are undefined between denial receipt and appeal submission, so claims sit in ownerless queues.',
      'Audit trails disappear when appeal packet versions are overwritten in shared drives.',
      'Approvals are informal for contract variance write-offs, creating untraceable net revenue adjustments.',
      'Reporting becomes non-reproducible when A/R aging and denial categories are computed from ad hoc extracts.',
      'Turnover destroys institutional memory when denial playbooks and payer-specific rules are not codified.'
    ],
    reconstruct: [
      'Define canonical claim lifecycle states from eligibility through denial resolution.',
      'Enforce owner assignment at each queue transition with escalation timers.',
      'Version-control appeal packets and contract variance logic.',
      'Log PHI-sensitive approvals and escalation events.',
      'Normalize CARC/RARC taxonomy for denial root-cause reporting.',
      'Produce audit-ready outputs: claim traceability, denial turnaround by owner, and A/R >90 analysis.'
    ],
    engagementModel: [
      { ...STANDARD_PHASES.phase1 },
      { ...STANDARD_PHASES.phase2 },
      { ...STANDARD_PHASES.phase3 },
      { ...STANDARD_PHASES.phase4 }
    ],
    executiveOutcomes: [
      'Reduced A/R > 90 days by owner cohort.',
      'Denial turnaround time tracked by root cause and accountable role.',
      'Contract underpayment visibility with defensible recovery logic.',
      'Audit-ready claim traceability from 837 submission through 835 adjustment.'
    ]
  },
  {
    slug: 'legal',
    label: 'Legal',
    lifecycle: [
      {
        stage: 'Matter Intake and Conflicts Screening',
        keyArtifacts: ['Intake form', 'Conflict check registry', 'Conflict waiver record'],
        ownerRoles: ['Intake coordinator', 'Conflicts counsel'],
        systemDependencies: ['Intapp', 'iManage', 'Practice management intake queue']
      },
      {
        stage: 'Engagement Letter Execution',
        keyArtifacts: ['Engagement letter', 'Rate schedule', 'Scope and billing terms'],
        ownerRoles: ['Responsible partner', 'Billing manager'],
        systemDependencies: ['Document management', 'E-signature system', 'Matter master']
      },
      {
        stage: 'Matter Work and Time Capture',
        keyArtifacts: ['Time entries', 'Narrative edits', 'Matter phase codes'],
        ownerRoles: ['Timekeeper', 'Practice group manager'],
        systemDependencies: ['Elite 3E', 'Aderant', 'Time entry tools']
      },
      {
        stage: 'Pre-Bill Review and Write-Down Controls',
        keyArtifacts: ['Pre-bill packet', 'Partner edit log', 'Write-down reason codes'],
        ownerRoles: ['Billing partner', 'Billing specialist'],
        systemDependencies: ['Billing system', 'Workflow inboxes', 'Matter profitability report']
      },
      {
        stage: 'Invoice, Collections, and Realization Monitoring',
        keyArtifacts: ['Issued invoice', 'Collections aging', 'Billing and collection realization reports'],
        ownerRoles: ['Collections manager', 'Finance controller'],
        systemDependencies: ['AR ledger', 'Client portal', 'BI reporting']
      },
      {
        stage: 'Trust Accounting (IOLTA) Reconciliation',
        keyArtifacts: ['Trust ledger', 'Client sub-ledger', 'Three-way reconciliation report'],
        ownerRoles: ['Trust accountant', 'Finance director'],
        systemDependencies: ['Trust accounting module', 'Bank feed', 'Reconciliation workbook']
      }
    ],
    systemTags: ['Intapp', 'iManage', 'NetDocuments', 'Clio', 'Elite 3E', 'Aderant', 'Trust accounting ledger'],
    fragmentation: [
      {
        name: 'Matter state drift',
        mechanics: 'Matter stage and billing readiness differ between matter management, DMS, and billing queues.'
      },
      {
        name: 'Pre-bill edit opacity',
        mechanics: 'Partner write-down changes are not codified into a reason taxonomy, hiding leakage patterns by matter phase.'
      },
      {
        name: 'Trust reconciliation breaks',
        mechanics: 'Trust movements are recorded in separate ledgers without deterministic three-way tie-out workflow.'
      },
      {
        name: 'Conflict check escalation gaps',
        mechanics: 'Conflict exceptions are resolved in side channels without retained approval evidence.'
      }
    ],
    failureMechanics: [
      'Data diverges when engagement terms change in documents but not in billing rules.',
      'Lifecycle states are undefined between pre-bill release and invoice finalization.',
      'Audit trails disappear when trust corrections are posted without linked explanation records.',
      'Approvals are informal for partner write-offs and discount overrides.',
      'Reporting is non-reproducible when realization is calculated from ad hoc exports.',
      'Turnover erodes institutional memory when matter-specific billing logic remains tacit.'
    ],
    reconstruct: [
      'Define canonical matter lifecycle states from intake to closeout.',
      'Enforce owner assignment for conflicts, billing edits, and trust actions.',
      'Version-control engagement terms and billing policy exceptions.',
      'Log partner write-down and discount approvals with reason taxonomy.',
      'Standardize realization and profitability reporting schema by matter phase.',
      'Produce audit-ready outputs for trust accounting defensibility and billing control.'
    ],
    engagementModel: [
      { ...STANDARD_PHASES.phase1 },
      { ...STANDARD_PHASES.phase2 },
      { ...STANDARD_PHASES.phase3 },
      { ...STANDARD_PHASES.phase4 }
    ],
    executiveOutcomes: [
      'Billing and collection realization transparency by practice and matter phase.',
      'Reduced billing leakage through controlled write-down governance.',
      'Trust accounting defensibility with repeatable three-way reconciliation evidence.',
      'Improved profitability visibility at partner, client, and phase levels.'
    ]
  },
  {
    slug: 'real-estate-private-equity',
    label: 'Real Estate Private Equity',
    lifecycle: [
      {
        stage: 'Deal Intake and Qualification',
        keyArtifacts: ['Deal intake sheet', 'Initial screening memo', 'Pipeline scorecard'],
        ownerRoles: ['Acquisitions associate', 'Investment manager'],
        systemDependencies: ['DealCloud', 'CRM', 'Data room']
      },
      {
        stage: 'Underwriting and Version Control',
        keyArtifacts: ['Underwriting model versions', 'Assumption log', 'Sensitivity scenarios'],
        ownerRoles: ['Underwriting lead', 'VP Investments'],
        systemDependencies: ['ARGUS Enterprise', 'Excel model repository', 'Document control']
      },
      {
        stage: 'IC Memo and Approval Log',
        keyArtifacts: ['IC memo', 'Approval comments log', 'Decision register'],
        ownerRoles: ['Investment committee coordinator', 'IC chair'],
        systemDependencies: ['Document workflow', 'Approval inbox', 'Committee archive']
      },
      {
        stage: 'Capital Call and Funding',
        keyArtifacts: ['Capital call notice', 'Funding tracker', 'LP allocation schedule'],
        ownerRoles: ['Fund controller', 'Investor relations manager'],
        systemDependencies: ['Investran', 'Juniper Square', 'Bank portal']
      },
      {
        stage: 'Asset Operations and NOI Bridge',
        keyArtifacts: ['Asset-level NOI bridge', 'Variance commentary pack', 'Budget vs actual report'],
        ownerRoles: ['Asset manager', 'Portfolio analytics lead'],
        systemDependencies: ['Yardi', 'MRI', 'Property accounting exports']
      },
      {
        stage: 'Distribution and Waterfall Calculation',
        keyArtifacts: ['Waterfall promote calculation', 'Distribution notice', 'LP distribution audit file'],
        ownerRoles: ['Fund accounting lead', 'CFO'],
        systemDependencies: ['Fund admin system', 'Waterfall model', 'Investor reporting tools']
      }
    ],
    systemTags: ['DealCloud', 'ARGUS Enterprise', 'Investran', 'Juniper Square', 'Yardi', 'MRI', 'Data room'],
    fragmentation: [
      {
        name: 'Underwriting version drift',
        mechanics: 'Investment assumptions diverge across model copies, IC memo drafts, and portfolio tracking sheets.'
      },
      {
        name: 'Approval evidence gaps',
        mechanics: 'IC decisions are captured in meeting notes without a normalized decision register and approval chain.'
      },
      {
        name: 'Capital activity mismatch',
        mechanics: 'Capital call and distribution records differ between fund admin records and investor communications.'
      },
      {
        name: 'NOI reconciliation breaks',
        mechanics: 'Asset-level NOI bridges rely on manual mapping from property systems into fund reporting views.'
      }
    ],
    failureMechanics: [
      'Data diverges when deal assumptions are updated post-IC without synchronized model control.',
      'Lifecycle states are undefined between IC approval and funding readiness.',
      'Audit trails disappear when waterfall overrides are applied outside controlled logs.',
      'Approvals are informal for model assumption exceptions and promote adjustments.',
      'Reporting is non-reproducible when NAV and NOI bridges depend on one-off workbook logic.',
      'Turnover destroys institutional memory when deal rationale and approval context are not preserved.'
    ],
    reconstruct: [
      'Define canonical deal lifecycle states from intake through distribution.',
      'Enforce owner assignment for underwriting, IC, and capital workflows.',
      'Version-control underwriting models and IC memo artifacts.',
      'Log approvals and overrides for capital call and waterfall events.',
      'Normalize portfolio reporting taxonomy for NOI bridge and NAV tie-out.',
      'Produce audit-ready outputs for LP reporting and distribution defensibility.'
    ],
    engagementModel: [
      { ...STANDARD_PHASES.phase1 },
      { ...STANDARD_PHASES.phase2 },
      { ...STANDARD_PHASES.phase3 },
      { ...STANDARD_PHASES.phase4 }
    ],
    executiveOutcomes: [
      'Reproducible IRR and promote calculations with versioned assumptions.',
      'Capital call and distribution auditability by LP and transaction event.',
      'Asset-level NOI bridge consistency from property systems to fund reporting.',
      'Defensible IC decision trail across memo versions and approvals.'
    ]
  },
  {
    slug: 'finance',
    label: 'Finance',
    lifecycle: [
      {
        stage: 'Close Calendar and Task Enforcement',
        keyArtifacts: ['Close calendar', 'Task ownership matrix', 'Dependency map'],
        ownerRoles: ['Controller', 'Close manager'],
        systemDependencies: ['ERP close task manager', 'Workflow tracker', 'Shared close workspace']
      },
      {
        stage: 'Journal Entry Workflow',
        keyArtifacts: ['Journal entry packet', 'Approval evidence', 'Supporting schedules'],
        ownerRoles: ['Accounting manager', 'Approver matrix owner'],
        systemDependencies: ['SAP S/4HANA', 'Oracle Cloud ERP', 'NetSuite']
      },
      {
        stage: 'Sub-ledger Rollforward and Reconciliation',
        keyArtifacts: ['Sub-ledger rollforward', 'Aging support', 'Exception register'],
        ownerRoles: ['GL lead', 'Sub-ledger owner'],
        systemDependencies: ['AR/AP sub-ledgers', 'Fixed assets', 'Inventory modules']
      },
      {
        stage: 'Intercompany Elimination and Consolidation',
        keyArtifacts: ['Intercompany matrix', 'Elimination entries', 'Consolidation package'],
        ownerRoles: ['Consolidation manager', 'Entity controllers'],
        systemDependencies: ['Consolidation system', 'Entity ERPs', 'FX rate feed']
      },
      {
        stage: 'SOX Control Evidence and Review',
        keyArtifacts: ['Control narratives', 'Control test evidence', 'Deficiency tracker'],
        ownerRoles: ['SOX manager', 'Process control owners'],
        systemDependencies: ['GRC tool', 'Evidence repository', 'Issue tracker']
      },
      {
        stage: 'Variance Bridge and Executive Reporting',
        keyArtifacts: ['P&L variance bridge', 'Balance sheet flux analysis', 'Management reporting pack'],
        ownerRoles: ['FP&A lead', 'Controller'],
        systemDependencies: ['BI model', 'Reporting cube', 'Board reporting workbook']
      }
    ],
    systemTags: ['SAP S/4HANA', 'Oracle Cloud ERP', 'NetSuite', 'BlackLine', 'OneStream', 'Kyriba', 'GRC repository'],
    fragmentation: [
      {
        name: 'Journal state ambiguity',
        mechanics: 'Journal entries move through email approvals without canonical pending/approved/posted states.'
      },
      {
        name: 'Sub-ledger tie-out lag',
        mechanics: 'Rollforward support is generated on separate timing cycles, causing manual true-up entries late in close.'
      },
      {
        name: 'Intercompany mismatch',
        mechanics: 'Counterparty entries use inconsistent mapping and timing, creating elimination breaks at consolidation.'
      },
      {
        name: 'SOX evidence fragmentation',
        mechanics: 'Control evidence resides across folders and inboxes without deterministic linkage to control IDs.'
      }
    ],
    failureMechanics: [
      'Data diverges when journal support packs are updated after posting without version linkage.',
      'Lifecycle states are undefined between prepared and approved journal status.',
      'Audit trails disappear when reconciliation sign-offs are captured outside controlled logs.',
      'Approvals are informal for late close adjustments and materiality exceptions.',
      'Reporting is non-reproducible when variance bridges are rebuilt from ad hoc extracts.',
      'Turnover destroys institutional memory when close rationale and recurring adjustments are undocumented.'
    ],
    reconstruct: [
      'Define canonical close lifecycle states for journals, reconciliations, and consolidations.',
      'Enforce owner assignment and due-date controls across close dependencies.',
      'Version-control journal packs, reconciliation artifacts, and variance bridge logic.',
      'Log approvals and exceptions with control IDs and timestamps.',
      'Normalize account and variance taxonomy for reproducible reporting.',
      'Produce audit-ready outputs aligned to SOX control documentation.'
    ],
    engagementModel: [
      { ...STANDARD_PHASES.phase1 },
      { ...STANDARD_PHASES.phase2 },
      { ...STANDARD_PHASES.phase3 },
      { ...STANDARD_PHASES.phase4 }
    ],
    executiveOutcomes: [
      'Shortened close cycle with controlled dependency management.',
      'Reduced audit findings through traceable approval and evidence linkage.',
      'SOX-ready traceability from journal preparation through sign-off.',
      'Reproducible variance bridge reporting for executive and board review.'
    ]
  },
  {
    slug: 'construction',
    label: 'Construction',
    lifecycle: [
      {
        stage: 'RFI Lifecycle',
        keyArtifacts: ['RFI log', 'Response SLA tracker', 'Design clarification archive'],
        ownerRoles: ['Project engineer', 'Design manager'],
        systemDependencies: ['Procore RFIs', 'Autodesk Construction Cloud', 'Email correspondence']
      },
      {
        stage: 'Submittal Registry and Review',
        keyArtifacts: ['Submittal register', 'Review turnaround report', 'Approval status record'],
        ownerRoles: ['Submittal coordinator', 'Design reviewer'],
        systemDependencies: ['Submittal tool', 'Document control repository', 'Spec library']
      },
      {
        stage: 'Change Order Approval Chain',
        keyArtifacts: ['PCO log', 'Change event package', 'Approval chain log'],
        ownerRoles: ['Project manager', 'Cost manager'],
        systemDependencies: ['Change events module', 'Contract ledger', 'Client approval workflow']
      },
      {
        stage: 'Schedule of Values (SOV) and Billing',
        keyArtifacts: ['SOV schedule', 'Pay application (AIA G702/G703)', 'Retainage tracker'],
        ownerRoles: ['Project accountant', 'Commercial manager'],
        systemDependencies: ['Billing system', 'Job cost ledger', 'Owner draw portal']
      },
      {
        stage: 'Cost-to-Complete Forecast Validation',
        keyArtifacts: ['EAC forecast', 'Committed cost report', 'Variance commentary'],
        ownerRoles: ['Project controls lead', 'Operations director'],
        systemDependencies: ['Cost system', 'Schedule system', 'Forecast model']
      },
      {
        stage: 'Contractor Performance and Closeout',
        keyArtifacts: ['Performance scorecard', 'Punchlist closure', 'Final account package'],
        ownerRoles: ['Construction manager', 'Closeout coordinator'],
        systemDependencies: ['Field reporting tools', 'QA/QC logs', 'Closeout repository']
      }
    ],
    systemTags: ['Procore', 'Autodesk Construction Cloud', 'Primavera P6', 'CMiC', 'Sage 300 CRE', 'AIA G702/G703'],
    fragmentation: [
      {
        name: 'RFI-to-cost disconnect',
        mechanics: 'RFI resolution outcomes are not systematically linked to change event cost consequences.'
      },
      {
        name: 'Submittal status drift',
        mechanics: 'Submittal approvals are recorded in document tools but not synchronized to schedule and procurement status.'
      },
      {
        name: 'Change order approval gaps',
        mechanics: 'Approval chains move through email outside contract systems, creating unlogged commercial commitments.'
      },
      {
        name: 'SOV and pay-app reconciliation breaks',
        mechanics: 'Billing line items and field progress percentages diverge, requiring manual pay-app tie-out.'
      }
    ],
    failureMechanics: [
      'Data diverges when change event amounts are revised without synchronized contract value updates.',
      'Lifecycle states are undefined between pending quote, approved change, and billed change status.',
      'Audit trails disappear when schedule and cost forecast overrides are made in offline workbooks.',
      'Approvals are informal for scope growth and contingency usage.',
      'Reporting is non-reproducible when cost-to-complete is rebuilt each period from disconnected extracts.',
      'Turnover destroys institutional memory when project-specific controls are not codified.'
    ],
    reconstruct: [
      'Define canonical lifecycle states for RFI, submittal, change order, and pay-app workflows.',
      'Enforce owner assignment and SLA checkpoints by lifecycle stage.',
      'Version-control SOV, pay-app, and forecast artifacts.',
      'Log commercial approvals and scope changes with full audit chain.',
      'Normalize change-order and cost variance taxonomy for margin tracking.',
      'Produce audit-ready outputs for pay application and cost forecast defensibility.'
    ],
    engagementModel: [
      { ...STANDARD_PHASES.phase1 },
      { ...STANDARD_PHASES.phase2 },
      { ...STANDARD_PHASES.phase3 },
      { ...STANDARD_PHASES.phase4 }
    ],
    executiveOutcomes: [
      'Reduced change order cycle time from issue to approved value.',
      'Margin protection through validated cost-to-complete forecasting.',
      'SOV and pay application defensibility with traceable approvals.',
      'Improved contractor performance transparency by package and phase.'
    ]
  },
  {
    slug: 'pds',
    label: 'Project & Development Services (PDS)',
    lifecycle: [
      {
        stage: 'Development Budget Baseline',
        keyArtifacts: ['Budget baseline workbook', 'Cost code structure', 'Assumption register'],
        ownerRoles: ['Development manager', 'Cost planner'],
        systemDependencies: ['Budget model', 'Project controls system', 'Accounting exports']
      },
      {
        stage: 'GMP Validation and Scope Alignment',
        keyArtifacts: ['GMP validation checklist', 'Scope alignment log', 'Variance approvals'],
        ownerRoles: ['Commercial lead', 'Program director'],
        systemDependencies: ['Contract register', 'Estimate workbook', 'Approval workflow']
      },
      {
        stage: 'Headcount-to-Fee Allocation',
        keyArtifacts: ['Resource plan', 'Fee burn report', 'Allocation assumptions'],
        ownerRoles: ['Operations lead', 'Finance partner'],
        systemDependencies: ['Resource planning tool', 'Timesheets', 'Fee model']
      },
      {
        stage: 'Milestone Gating and Governance',
        keyArtifacts: ['Milestone gate checklist', 'Gate approval log', 'Risk register'],
        ownerRoles: ['Program manager', 'Governance lead'],
        systemDependencies: ['Schedule tracker', 'Risk log', 'Governance calendar']
      },
      {
        stage: 'Contractor Performance Scoring',
        keyArtifacts: ['Performance rubric', 'Scorecard history', 'Corrective action log'],
        ownerRoles: ['Delivery lead', 'Commercial manager'],
        systemDependencies: ['Field reports', 'Quality records', 'Performance database']
      },
      {
        stage: 'Client Reporting Package Standardization',
        keyArtifacts: ['Monthly client report package', 'Portfolio roll-up', 'Narrative variance bridge'],
        ownerRoles: ['Client reporting lead', 'Portfolio director'],
        systemDependencies: ['BI reporting', 'Presentation templates', 'Data warehouse']
      }
    ],
    systemTags: ['Procore', 'Primavera P6', 'Deltek', 'Power BI', 'Cost planning workbook', 'Client reporting templates'],
    fragmentation: [
      {
        name: 'Budget version fragmentation',
        mechanics: 'Budget assumptions and revisions are maintained in parallel files without canonical version control.'
      },
      {
        name: 'GMP control inconsistency',
        mechanics: 'GMP validation checks vary by project, producing inconsistent approval evidence across portfolio work.'
      },
      {
        name: 'Resource allocation ambiguity',
        mechanics: 'Headcount-to-fee logic is not linked to milestone gates, causing utilization and margin misstatements.'
      },
      {
        name: 'Client reporting non-standardization',
        mechanics: 'Project teams compile reports manually with different metric definitions and reconciliation methods.'
      }
    ],
    failureMechanics: [
      'Data diverges when budget revisions are approved in meetings but not reflected in working models.',
      'Lifecycle states are undefined between gate-ready, gate-approved, and gate-conditional statuses.',
      'Audit trails disappear when milestone exceptions are accepted without retained rationale.',
      'Approvals are informal for fee reallocations and scope shifts.',
      'Reporting is non-reproducible when portfolio summaries rely on manual slide assembly.',
      'Turnover destroys institutional memory when project controls logic is held by individuals rather than systemized.'
    ],
    reconstruct: [
      'Define canonical lifecycle states for budget, GMP, milestones, and reporting.',
      'Enforce owner assignment for each gate decision and fee-impacting change.',
      'Version-control budget models and client reporting artifacts.',
      'Log approvals, exceptions, and escalations with timestamped evidence.',
      'Normalize milestone and performance taxonomy across projects.',
      'Produce audit-ready outputs for portfolio margin and client reporting consistency.'
    ],
    engagementModel: [
      { ...STANDARD_PHASES.phase1 },
      { ...STANDARD_PHASES.phase2 },
      { ...STANDARD_PHASES.phase3 },
      { ...STANDARD_PHASES.phase4 }
    ],
    executiveOutcomes: [
      'Portfolio-level margin clarity by project stage and owner.',
      'Milestone governance consistency across delivery teams.',
      'Defensible GMP and budget approval history.',
      'Standardized client reporting with reproducible metrics and variance logic.'
    ]
  }
];

export const INDUSTRY_BY_SLUG = Object.fromEntries(INDUSTRY_ENGAGEMENTS.map((item) => [item.slug, item])) as Record<string, IndustryEngagement>;
