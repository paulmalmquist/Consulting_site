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

export type RiskBenchmark = {
  claim: string;
  benchmarkRange: string;
  sourceIds: number[];
  asOf: string;
};

export type OutcomeMetric = {
  metric: string;
  baselineNote: string;
  targetRange: string;
  controlLink: string;
};

export type SourceRecord = {
  id: number;
  title: string;
  publisher: string;
  url: string;
  accessedOn: string;
  claimSupport: string;
};

export type IndustryEngagement = {
  slug: string;
  label: string;
  lifecycle: LifecycleStage[];
  systemTags: string[];
  fragmentation: FragmentationPoint[];
  riskContext: RiskBenchmark[];
  failureMechanics: string[];
  reconstruct: string[];
  dataQualityPrerequisites: string[];
  engagementModel: EngagementPhase[];
  changeManagement: string[];
  regulatoryCaveat: string;
  outcomeMetrics: OutcomeMetric[];
  sources: SourceRecord[];
};

const STANDARD_PHASES: EngagementPhase[] = [
  {
    phase: 'Phase 1 — Operational Audit',
    objective: 'Map actual lifecycle behavior against documented process and isolate reconciliation and ownership risk.',
    outputs: ['Current-state lifecycle map', 'Artifact inventory', 'System dependency map', 'Reconciliation and control gap register']
  },
  {
    phase: 'Phase 2 — Control Definition',
    objective: 'Define canonical states, owner assignment, taxonomy standards, and reporting schema.',
    outputs: ['Canonical lifecycle state model', 'Owner assignment matrix', 'Taxonomy dictionary', 'Reporting schema and KPI definitions']
  },
  {
    phase: 'Phase 3 — Execution Layer Build',
    objective: 'Deploy structured workflows around existing systems with export ingestion, logs, control checkpoints, and exception routing.',
    outputs: ['Structured workflows', 'Integrated data exports', 'Approval and escalation logs', 'Operational dashboard and audit outputs']
  },
  {
    phase: 'Phase 4 — Continuity Transfer',
    objective: 'Transfer ownership with playbooks, training, and governance cadence.',
    outputs: ['Owner runbook', 'Decision and escalation playbooks', 'Training completion log', 'Governance calendar']
  }
];

export const INDUSTRY_ENGAGEMENTS: IndustryEngagement[] = [
  {
    slug: 'healthcare',
    label: 'Healthcare',
    lifecycle: [
      {
        stage: 'Patient Access and Eligibility',
        keyArtifacts: ['Eligibility response logs', 'Prior auth packets', 'Coverage verification exceptions'],
        ownerRoles: ['Patient access manager', 'Authorization specialist'],
        systemDependencies: ['Epic', 'Athenahealth', 'Availity']
      },
      {
        stage: 'Charge Capture and Coding',
        keyArtifacts: ['Coding edit queues', 'Charge audit results', 'Claim scrubber rejects'],
        ownerRoles: ['Coding lead', 'Revenue integrity analyst'],
        systemDependencies: ['Epic Resolute', '3M 360 Encompass', 'Waystar']
      },
      {
        stage: '837 Submission and Clearinghouse Response',
        keyArtifacts: ['837P/837I files', '999/277 acknowledgements', 'Reject correction log'],
        ownerRoles: ['EDI coordinator', 'Billing supervisor'],
        systemDependencies: ['Clearinghouse', 'Payer portals', 'EDI translator']
      },
      {
        stage: '835 ERA Posting and Reconciliation',
        keyArtifacts: ['835 ERA files', 'Posting journal', 'CARC/RARC mapping table'],
        ownerRoles: ['Posting lead', 'Revenue cycle analyst'],
        systemDependencies: ['PM system', 'Bank lockbox feed', 'ERA parser']
      },
      {
        stage: 'Denial Management and Appeals',
        keyArtifacts: ['Denial root-cause taxonomy', 'Appeal packet versions', 'A/R >90 aging by owner'],
        ownerRoles: ['Denials manager', 'Appeals specialist'],
        systemDependencies: ['Workqueue manager', 'Document repository', 'Payer correspondence']
      }
    ],
    systemTags: ['Epic', 'Athenahealth', 'Waystar', 'Availity', 'Clearinghouse', 'Payer portals'],
    fragmentation: [
      {
        name: 'Claim-state mismatch across systems',
        mechanics: 'Claim states diverge between EHR workqueues, clearinghouse acknowledgements, and payer portals, so owners act from conflicting status.'
      },
      {
        name: 'CARC/RARC taxonomy drift',
        mechanics: 'Adjustment codes are stored as raw payer messages and not normalized, preventing repeatable denial trend analysis by owner.'
      },
      {
        name: 'Appeal evidence version loss',
        mechanics: 'Appeal packet edits happen in shared drives and email chains without a retained approval/version trail.'
      }
    ],
    riskContext: [
      {
        claim: 'Initial claim denial rates in published benchmarking often cluster in mid-single to low-double digits.',
        benchmarkRange: '5%–15% of claims',
        sourceIds: [1, 2],
        asOf: '2023-2024 publications'
      },
      {
        claim: 'A meaningful share of denials are not reworked to final payment, creating avoidable write-off risk.',
        benchmarkRange: 'Roughly 30%–65% unresolved or unappealed by study context',
        sourceIds: [2, 3],
        asOf: '2023-2024 publications'
      },
      {
        claim: 'A/R aging beyond 90 days is a common concentration point for cashflow and ownership breakdown.',
        benchmarkRange: 'High-risk cohorts often tracked as >20% of A/R in stressed environments',
        sourceIds: [4],
        asOf: 'industry operating guidance'
      }
    ],
    failureMechanics: [
      'Data diverges when rejected 837 corrections are applied in one queue but not reflected in downstream status.',
      'Lifecycle states are undefined between denial receipt and appeal submission, leaving claims in ownerless queues.',
      'Audit trails disappear when PHI-sensitive escalation decisions occur in calls/email without logged evidence.',
      'Approvals are informal for contractual underpayment variance and recovery decisions.',
      'Reporting is non-reproducible when denial categories and aging cohorts are rebuilt from ad hoc extracts.',
      'Turnover destroys institutional memory when payer-specific denial logic is not codified.'
    ],
    reconstruct: [
      'Define canonical claim states from eligibility through denial resolution.',
      'Enforce owner assignment and escalation thresholds at each state transition.',
      'Version-control appeal packets and contract variance artifacts.',
      'Log PHI-sensitive approvals and exception handling events.',
      'Normalize CARC/RARC taxonomy for consistent root-cause reporting.',
      'Produce audit-ready claim traceability and owner-level turnaround outputs.'
    ],
    dataQualityPrerequisites: [
      'Front-end registration and coverage fields must be validated before claim generation.',
      'CARC/RARC mapping tables must be maintained under change control.',
      'Duplicate patient and guarantor records must be resolved before denial analytics rollout.',
      'Charge and payment timestamps must be standardized for reproducible aging metrics.'
    ],
    engagementModel: [...STANDARD_PHASES],
    changeManagement: [
      'Name denial category owners (clinical, coding, payer follow-up) before pilot go-live.',
      'Run queue ownership training for patient access, coding, and denials teams.',
      'Introduce weekly control reviews for unresolved denials and aged exceptions.',
      'Set explicit cutover criteria: evidence completeness, owner readiness, and rollback rehearsed.'
    ],
    regulatoryCaveat:
      'Payer rules, state regulations, and contract terms vary materially by organization. Control thresholds and workflows must be adapted to client-specific compliance and reimbursement conditions.',
    outcomeMetrics: [
      {
        metric: 'A/R >90 days concentration',
        baselineNote: 'Measured by owner cohort and denial category at audit baseline.',
        targetRange: '10%–25% reduction in aged receivable concentration over initial control cycles.',
        controlLink: 'Owner assignment + denial escalation thresholds'
      },
      {
        metric: 'Denial turnaround time',
        baselineNote: 'Median days from denial receipt to final disposition.',
        targetRange: '15%–35% improvement in median turnaround by owner cohort.',
        controlLink: 'Canonical states + queue SLAs + escalation logging'
      },
      {
        metric: 'Contract underpayment visibility',
        baselineNote: 'Percent of remits mapped to variance logic with accountable owner.',
        targetRange: 'Raise mapped visibility to >90% of reviewed remits.',
        controlLink: 'Variance taxonomy + approval trail'
      },
      {
        metric: 'Claim traceability completeness',
        baselineNote: 'Portion of sampled claims with end-to-end lifecycle evidence.',
        targetRange: 'Reach 95%+ traceability on audited claim samples.',
        controlLink: 'Versioned artifacts + audit log controls'
      }
    ],
    sources: [
      {
        id: 1,
        title: 'National Healthcare Revenue Cycle Benchmarking Report',
        publisher: 'HFMA',
        url: 'https://www.hfma.org',
        accessedOn: '2026-02-13',
        claimSupport: 'Claim denial benchmark bands and cycle performance context.'
      },
      {
        id: 2,
        title: 'State of Claims 2024',
        publisher: 'Experian Health',
        url: 'https://www.experian.com/healthcare',
        accessedOn: '2026-02-13',
        claimSupport: 'Healthcare claim denial trends and denial handling observations.'
      },
      {
        id: 3,
        title: 'Denials and Appeals Operational Guidance',
        publisher: 'AHIMA',
        url: 'https://www.ahima.org',
        accessedOn: '2026-02-13',
        claimSupport: 'Denial management process and appeal follow-through practices.'
      },
      {
        id: 4,
        title: 'Revenue Cycle KPI Playbook',
        publisher: 'MGMA',
        url: 'https://www.mgma.com',
        accessedOn: '2026-02-13',
        claimSupport: 'A/R aging and ownership metrics used in revenue cycle performance.'
      }
    ]
  },
  {
    slug: 'legal',
    label: 'Legal',
    lifecycle: [
      {
        stage: 'Matter Intake and Conflict Screening',
        keyArtifacts: ['Intake packet', 'Conflict search results', 'Conflict clearance record'],
        ownerRoles: ['Intake coordinator', 'Conflicts counsel'],
        systemDependencies: ['Intapp', 'iManage', 'Matter intake queue']
      },
      {
        stage: 'Engagement Terms and Matter Setup',
        keyArtifacts: ['Engagement letter', 'Billing terms schedule', 'Matter coding structure'],
        ownerRoles: ['Responsible partner', 'Billing manager'],
        systemDependencies: ['DMS', 'E-signature', 'Practice management']
      },
      {
        stage: 'Time Capture and Pre-bill Review',
        keyArtifacts: ['Time entries', 'Pre-bill edits', 'Write-off reason log'],
        ownerRoles: ['Timekeeper', 'Billing specialist', 'Partner reviewer'],
        systemDependencies: ['Elite 3E', 'Aderant', 'Billing workflow']
      },
      {
        stage: 'Invoice, Collections, and Realization',
        keyArtifacts: ['Invoice packet', 'Collections aging', 'Realization report'],
        ownerRoles: ['Collections manager', 'Controller'],
        systemDependencies: ['AR ledger', 'Client portal', 'BI reporting']
      },
      {
        stage: 'Trust Accounting and Reconciliation (IOLTA)',
        keyArtifacts: ['Trust ledger', 'Client sub-ledger', 'Three-way reconciliation evidence'],
        ownerRoles: ['Trust accountant', 'Finance director'],
        systemDependencies: ['Trust accounting module', 'Bank feed', 'Reconciliation workbook']
      }
    ],
    systemTags: ['Intapp', 'iManage', 'NetDocuments', 'Elite 3E', 'Aderant', 'Clio', 'Trust ledger'],
    fragmentation: [
      {
        name: 'Matter-state drift',
        mechanics: 'Matter readiness and billing states differ between intake, DMS, and billing queues.'
      },
      {
        name: 'Write-off rationale opacity',
        mechanics: 'Partner write-downs happen without standardized reason taxonomy or retained approval evidence.'
      },
      {
        name: 'Trust reconciliation dependency on manual tie-out',
        mechanics: 'Trust movement corrections are processed outside controlled workflow, weakening defensibility.'
      }
    ],
    riskContext: [
      {
        claim: 'Realization performance commonly varies substantially by practice area and billing discipline.',
        benchmarkRange: 'Often 75%–90% depending on practice mix and controls',
        sourceIds: [1, 2],
        asOf: 'recent legal operations reporting'
      },
      {
        claim: 'Billing leakage often concentrates in pre-bill edits and late write-down decisions.',
        benchmarkRange: 'Mid-single to low-double digit revenue impact in unmanaged environments',
        sourceIds: [2],
        asOf: 'legal operations benchmarking'
      },
      {
        claim: 'Trust accounting control failures create disproportionate regulatory and reputational exposure.',
        benchmarkRange: 'Low-frequency, high-severity risk category',
        sourceIds: [3],
        asOf: 'bar and trust compliance guidance'
      }
    ],
    failureMechanics: [
      'Data diverges when engagement terms are updated in documents but not synchronized to billing rules.',
      'Lifecycle states are undefined between pre-bill release and invoice finalization.',
      'Audit trails disappear when trust corrections are posted without linked decision records.',
      'Approvals are informal for discount overrides and partner write-offs.',
      'Reporting is non-reproducible when realization is rebuilt from disconnected extracts.',
      'Turnover erodes institutional memory when matter-specific billing logic is tacit.'
    ],
    reconstruct: [
      'Define canonical matter states from intake through closeout.',
      'Enforce owner assignment for conflicts, billing exceptions, and trust actions.',
      'Version-control engagement and pre-bill artifacts.',
      'Log write-off approvals and exceptions with reason taxonomy.',
      'Normalize realization and profitability reporting definitions.',
      'Produce audit-ready trust and billing control outputs.'
    ],
    dataQualityPrerequisites: [
      'Matter master data and client hierarchies must be normalized before profitability reporting.',
      'Time-entry code dictionaries require controlled updates and usage standards.',
      'Trust ledger and bank feed matching rules must be validated before workflow automation.',
      'Write-off reason taxonomy must be enforced at entry point, not retrofitted later.'
    ],
    engagementModel: [...STANDARD_PHASES],
    changeManagement: [
      'Assign accountable owners for intake, billing edits, and trust reconciliation states.',
      'Train partners and billing teams on write-off governance and evidence capture.',
      'Adopt weekly exception review for unresolved pre-bill and trust reconciliation breaks.',
      'Require sign-off on role-specific runbooks before cutover.'
    ],
    regulatoryCaveat:
      'Trust accounting, engagement rules, and privilege-handling expectations vary by jurisdiction and bar authority. Controls must be adapted to applicable local requirements and firm policy.',
    outcomeMetrics: [
      {
        metric: 'Realization transparency by phase',
        baselineNote: 'Current visibility by matter phase and reviewer role.',
        targetRange: 'Expand phase-level transparency to >90% of active matters.',
        controlLink: 'Canonical matter states + pre-bill governance'
      },
      {
        metric: 'Billing leakage rate',
        baselineNote: 'Write-down and discount variance from initial billable value.',
        targetRange: '10%–25% reduction in uncontrolled leakage patterns.',
        controlLink: 'Write-off taxonomy + logged approvals'
      },
      {
        metric: 'Trust reconciliation defensibility',
        baselineNote: 'Portion of trust adjustments with complete evidence chain.',
        targetRange: '95%+ adjustments with linked three-way reconciliation evidence.',
        controlLink: 'Trust workflow controls + audit logging'
      },
      {
        metric: 'Matter-state consistency',
        baselineNote: 'Mismatch rate across intake, DMS, and billing states.',
        targetRange: '30%–50% reduction in cross-system state mismatches.',
        controlLink: 'State canonicalization + owner assignment'
      }
    ],
    sources: [
      {
        id: 1,
        title: 'Legal Trends Report',
        publisher: 'Clio',
        url: 'https://www.clio.com/resources/legal-trends/',
        accessedOn: '2026-02-13',
        claimSupport: 'Practice management performance and realization context.'
      },
      {
        id: 2,
        title: 'Law Firm Financial Benchmarking',
        publisher: 'Thomson Reuters Institute',
        url: 'https://www.thomsonreuters.com/en/reports/law-firm-financial-index.html',
        accessedOn: '2026-02-13',
        claimSupport: 'Billing realization and law-firm financial management benchmarks.'
      },
      {
        id: 3,
        title: 'Trust Accounting Resources',
        publisher: 'American Bar Association',
        url: 'https://www.americanbar.org/groups/professional_responsibility/',
        accessedOn: '2026-02-13',
        claimSupport: 'Trust accounting control obligations and compliance expectations.'
      }
    ]
  },
  {
    slug: 'real-estate-private-equity',
    label: 'Real Estate Private Equity',
    lifecycle: [
      {
        stage: 'Deal Intake and Screening',
        keyArtifacts: ['Deal intake record', 'Screening memo', 'Pipeline scorecard'],
        ownerRoles: ['Acquisitions associate', 'Investment manager'],
        systemDependencies: ['DealCloud', 'CRM', 'Data room']
      },
      {
        stage: 'Underwriting and IC Preparation',
        keyArtifacts: ['Version-controlled underwriting model', 'Assumption log', 'IC memo draft'],
        ownerRoles: ['Underwriting lead', 'VP investments'],
        systemDependencies: ['ARGUS Enterprise', 'Excel model repo', 'Document workflow']
      },
      {
        stage: 'Investment Committee Decisioning',
        keyArtifacts: ['IC memo', 'Approval log', 'Decision register'],
        ownerRoles: ['IC coordinator', 'IC chair'],
        systemDependencies: ['Approval workflow', 'Committee archive', 'Document control']
      },
      {
        stage: 'Capital Call and Funding',
        keyArtifacts: ['Capital call notice', 'Funding tracker', 'LP allocation schedule'],
        ownerRoles: ['Fund controller', 'Investor relations manager'],
        systemDependencies: ['Investran', 'Juniper Square', 'Bank portal']
      },
      {
        stage: 'Asset Operations, NOI, and Distribution',
        keyArtifacts: ['Asset-level NOI bridge', 'NAV tie-out package', 'Waterfall promote calculation'],
        ownerRoles: ['Asset manager', 'Fund accounting lead'],
        systemDependencies: ['Yardi', 'MRI', 'Fund admin system']
      }
    ],
    systemTags: ['DealCloud', 'ARGUS Enterprise', 'Investran', 'Juniper Square', 'Yardi', 'MRI', 'Fund admin'],
    fragmentation: [
      {
        name: 'Underwriting version drift',
        mechanics: 'Assumptions differ across model copies, IC memo versions, and portfolio reporting tables.'
      },
      {
        name: 'IC decision evidence gaps',
        mechanics: 'Committee rationale and conditions are captured in notes but not normalized decision records.'
      },
      {
        name: 'Capital and distribution mismatch',
        mechanics: 'Investor communication records and fund accounting entries diverge during funding/distribution cycles.'
      }
    ],
    riskContext: [
      {
        claim: 'Spreadsheet-driven underwriting control gaps are a persistent source of model risk in investment operations.',
        benchmarkRange: 'Model error exposure commonly reported as low-frequency, high-impact',
        sourceIds: [1, 2],
        asOf: 'recent risk and audit guidance'
      },
      {
        claim: 'Data lineage issues in capital activity and investor reporting are a recurring audit concern for private funds.',
        benchmarkRange: 'Frequent control deficiency theme in fund examinations',
        sourceIds: [3],
        asOf: 'regulatory and audit commentary'
      },
      {
        claim: 'NOI and valuation bridge variance can materially shift investment decisions if definitions are inconsistent.',
        benchmarkRange: 'High sensitivity to assumption drift in stressed markets',
        sourceIds: [1, 4],
        asOf: 'industry operating guidance'
      }
    ],
    failureMechanics: [
      'Data diverges when underwriting assumptions are updated post-IC without synchronized version controls.',
      'Lifecycle states are undefined between IC conditional approval and funding-ready status.',
      'Audit trails disappear when waterfall overrides are applied outside controlled logs.',
      'Approvals are informal for assumption exceptions and promote adjustments.',
      'Reporting is non-reproducible when NAV/NOI bridges rely on ad hoc workbook logic.',
      'Turnover destroys institutional memory when deal rationale is not preserved in controlled artifacts.'
    ],
    reconstruct: [
      'Define canonical deal states from intake through distribution.',
      'Enforce owner assignment for underwriting, IC, capital, and distribution transitions.',
      'Version-control underwriting and IC artifacts.',
      'Log capital call, distribution, and waterfall overrides with approver context.',
      'Normalize NOI/NAV bridge taxonomy for reproducible reporting.',
      'Produce audit-ready investor and committee evidence outputs.'
    ],
    dataQualityPrerequisites: [
      'Assumption dictionaries must be standardized before model comparisons.',
      'Deal identifiers must be consistent across CRM, underwriting, and fund accounting systems.',
      'Cash movement mapping must tie investor notices to accounting entries.',
      'Property-level operating feeds require consistent period and currency definitions.'
    ],
    engagementModel: [...STANDARD_PHASES],
    changeManagement: [
      'Define IC decision owner roles and exception escalation pathways.',
      'Train acquisitions, underwriting, and fund accounting on artifact version-control protocols.',
      'Establish recurring governance reviews for assumption overrides and reporting variances.',
      'Require cutover readiness sign-off from investment, accounting, and IR leads.'
    ],
    regulatoryCaveat:
      'Fund structures, LP agreements, jurisdictional requirements, and valuation policies vary by manager and vehicle. Controls must be calibrated to governing documents and applicable regulation.',
    outcomeMetrics: [
      {
        metric: 'IC decision reproducibility',
        baselineNote: 'Share of decisions with complete assumption, approval, and condition trail.',
        targetRange: 'Increase reproducibility coverage to 90%+ of reviewed deals.',
        controlLink: 'Version control + decision register'
      },
      {
        metric: 'Capital activity traceability',
        baselineNote: 'Portion of capital calls/distributions fully tied from notice to ledger.',
        targetRange: 'Reach 95%+ traceable event coverage in sampled periods.',
        controlLink: 'Canonical event states + audit logs'
      },
      {
        metric: 'NOI bridge consistency',
        baselineNote: 'Variance rate between asset operations and fund reporting definitions.',
        targetRange: '25%–45% reduction in definitional variance breaks.',
        controlLink: 'Taxonomy normalization + owner controls'
      },
      {
        metric: 'Waterfall defensibility',
        baselineNote: 'Percent of promote calculations with versioned assumptions and approval chain.',
        targetRange: '90%+ defensible calculation coverage in audited samples.',
        controlLink: 'Override logging + approval governance'
      }
    ],
    sources: [
      {
        id: 1,
        title: 'Commercial Real Estate Outlook and Risk Commentary',
        publisher: 'PwC',
        url: 'https://www.pwc.com/us/en/industries/real-estate.html',
        accessedOn: '2026-02-13',
        claimSupport: 'Risk concentration and operating control themes in real estate investment processes.'
      },
      {
        id: 2,
        title: 'Model Risk Management Guidance',
        publisher: 'Federal Reserve / OCC',
        url: 'https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm',
        accessedOn: '2026-02-13',
        claimSupport: 'Model governance principles applicable to underwriting and valuation workflows.'
      },
      {
        id: 3,
        title: 'Private Fund Adviser Examination Priorities',
        publisher: 'SEC',
        url: 'https://www.sec.gov/exams',
        accessedOn: '2026-02-13',
        claimSupport: 'Fund reporting, controls, and documentation expectations.'
      },
      {
        id: 4,
        title: 'US Real Estate Market Outlook',
        publisher: 'Deloitte',
        url: 'https://www2.deloitte.com/us/en/pages/financial-services/articles/commercial-real-estate-outlook.html',
        accessedOn: '2026-02-13',
        claimSupport: 'Operational reporting pressures and performance tracking context.'
      }
    ]
  },
  {
    slug: 'finance',
    label: 'Finance',
    lifecycle: [
      {
        stage: 'Close Calendar and Dependency Management',
        keyArtifacts: ['Close calendar', 'Task dependency map', 'Owner assignment matrix'],
        ownerRoles: ['Controller', 'Close manager'],
        systemDependencies: ['ERP close task manager', 'Workflow tracker', 'Close workspace']
      },
      {
        stage: 'Journal Entry Workflow',
        keyArtifacts: ['Journal packet', 'Approver log', 'Supporting schedule versions'],
        ownerRoles: ['Accounting manager', 'Approver group lead'],
        systemDependencies: ['SAP S/4HANA', 'Oracle Cloud ERP', 'NetSuite']
      },
      {
        stage: 'Sub-ledger Rollforward and Reconciliation',
        keyArtifacts: ['Rollforward schedules', 'Exception register', 'Tie-out evidence'],
        ownerRoles: ['GL lead', 'Sub-ledger owners'],
        systemDependencies: ['AR/AP sub-ledger', 'Fixed assets', 'Inventory modules']
      },
      {
        stage: 'Intercompany Elimination and Consolidation',
        keyArtifacts: ['Intercompany matrix', 'Elimination entries', 'Consolidation pack'],
        ownerRoles: ['Consolidation manager', 'Entity controllers'],
        systemDependencies: ['Consolidation system', 'Entity ERPs', 'FX feeds']
      },
      {
        stage: 'Control Evidence and Executive Reporting',
        keyArtifacts: ['SOX evidence pack', 'Variance bridge', 'Management reporting package'],
        ownerRoles: ['SOX manager', 'FP&A lead', 'Controller'],
        systemDependencies: ['GRC repository', 'BI model', 'Reporting cube']
      }
    ],
    systemTags: ['SAP S/4HANA', 'Oracle Cloud ERP', 'NetSuite', 'BlackLine', 'OneStream', 'Kyriba', 'GRC repository'],
    fragmentation: [
      {
        name: 'Journal state ambiguity',
        mechanics: 'Prepared/reviewed/approved/posted states are not consistently enforced across teams and systems.'
      },
      {
        name: 'Sub-ledger tie-out timing mismatch',
        mechanics: 'Sub-ledger updates and close timelines are misaligned, driving late manual true-ups.'
      },
      {
        name: 'Intercompany mapping inconsistency',
        mechanics: 'Counterparty mapping differences create elimination breaks during consolidation.'
      }
    ],
    riskContext: [
      {
        claim: 'Close-cycle length and control quality vary materially across peers, with strong process design driving better performance.',
        benchmarkRange: 'Median close often spans ~5 to 10 business days by benchmark segment',
        sourceIds: [1],
        asOf: 'latest APQC benchmark cycles'
      },
      {
        claim: 'Manual journal and reconciliation dependence is a recurring source of control deficiency and rework.',
        benchmarkRange: 'High manual-touch environments show materially higher exception rates',
        sourceIds: [2, 3],
        asOf: 'industry and audit commentary'
      },
      {
        claim: 'Audit findings cluster around evidence completeness and control execution consistency.',
        benchmarkRange: 'Common deficiency category in internal and external audit programs',
        sourceIds: [4],
        asOf: 'SOX and audit practice guidance'
      }
    ],
    failureMechanics: [
      'Data diverges when journal support is revised after posting without linked version history.',
      'Lifecycle states are undefined between prepared and approved entries.',
      'Audit trails disappear when reconciliation sign-offs occur outside controlled logs.',
      'Approvals are informal for late close adjustments and threshold exceptions.',
      'Reporting is non-reproducible when variance bridges are rebuilt from ad hoc extracts.',
      'Turnover destroys institutional memory when recurring adjustment logic is not documented.'
    ],
    reconstruct: [
      'Define canonical close states for journals, reconciliations, and consolidation.',
      'Enforce owner assignment and dependency controls across close tasks.',
      'Version-control journal and reconciliation artifacts.',
      'Log approvals, exceptions, and evidence with control IDs.',
      'Normalize account and variance taxonomy for reproducible reporting.',
      'Produce audit-ready SOX control outputs and management packs.'
    ],
    dataQualityPrerequisites: [
      'Chart of accounts and entity mapping must be standardized before consolidation controls.',
      'Sub-ledger identifiers must tie deterministically to GL line-items.',
      'Period cutoff and timestamp standards must be enforced across source systems.',
      'Control IDs and evidence metadata must be consistently attached to approval records.'
    ],
    engagementModel: [...STANDARD_PHASES],
    changeManagement: [
      'Assign explicit owners for each close state and approval checkpoint.',
      'Train accounting and FP&A teams on revised exception and evidence workflows.',
      'Run a parallel close cycle before final cutover to validate reproducibility.',
      'Institutionalize a governance cadence for recurring close defects and control breaches.'
    ],
    regulatoryCaveat:
      'Control expectations differ by listing status, jurisdiction, and internal policy framework. SOX scope and control design must be adapted to the client’s governance obligations.',
    outcomeMetrics: [
      {
        metric: 'Close cycle duration',
        baselineNote: 'Business days from period end to finalized reporting package.',
        targetRange: '15%–30% cycle reduction after stabilization.',
        controlLink: 'Canonical close states + dependency enforcement'
      },
      {
        metric: 'Audit finding rate',
        baselineNote: 'Findings related to evidence completeness and control execution.',
        targetRange: '20%–40% reduction in repeat control findings.',
        controlLink: 'Approval logging + evidence governance'
      },
      {
        metric: 'Reconciliation exception backlog',
        baselineNote: 'Open exceptions at close cutoff.',
        targetRange: '25%–45% backlog reduction over initial control cycles.',
        controlLink: 'Owner assignment + escalation controls'
      },
      {
        metric: 'Variance bridge reproducibility',
        baselineNote: 'Percent of reported variances reproducible from controlled data lineage.',
        targetRange: 'Raise reproducible coverage to >90% in sampled reporting cycles.',
        controlLink: 'Taxonomy normalization + version control'
      }
    ],
    sources: [
      {
        id: 1,
        title: 'Record to Report Open Standards Benchmarking',
        publisher: 'APQC',
        url: 'https://www.apqc.org',
        accessedOn: '2026-02-13',
        claimSupport: 'Close-cycle benchmark ranges and process performance segmentation.'
      },
      {
        id: 2,
        title: 'Financial Close and Consolidation Survey',
        publisher: 'Deloitte',
        url: 'https://www2.deloitte.com',
        accessedOn: '2026-02-13',
        claimSupport: 'Manual close risk and process maturity observations.'
      },
      {
        id: 3,
        title: 'The Financial Close in Practice',
        publisher: 'AICPA & CIMA',
        url: 'https://www.aicpa-cima.com',
        accessedOn: '2026-02-13',
        claimSupport: 'Control and reconciliation practices in close management.'
      },
      {
        id: 4,
        title: 'SOX and Internal Control Reporting Guidance',
        publisher: 'PCAOB / SEC',
        url: 'https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201',
        accessedOn: '2026-02-13',
        claimSupport: 'Control evidence and documentation expectations.'
      }
    ]
  },
  {
    slug: 'construction',
    label: 'Construction',
    lifecycle: [
      {
        stage: 'RFI Intake and Response',
        keyArtifacts: ['RFI register', 'Response SLA log', 'Clarification history'],
        ownerRoles: ['Project engineer', 'Design manager'],
        systemDependencies: ['Procore RFIs', 'Autodesk Construction Cloud', 'Email correspondence']
      },
      {
        stage: 'Submittal Registry and Review',
        keyArtifacts: ['Submittal register', 'Review turnaround log', 'Approval state'],
        ownerRoles: ['Submittal coordinator', 'Design reviewer'],
        systemDependencies: ['Submittal workflow', 'Document control', 'Spec library']
      },
      {
        stage: 'Change Order Approval Chain',
        keyArtifacts: ['PCO log', 'Change event package', 'Approval chain record'],
        ownerRoles: ['Project manager', 'Cost manager'],
        systemDependencies: ['Change events module', 'Contract ledger', 'Client approval workflow']
      },
      {
        stage: 'SOV and Pay Application',
        keyArtifacts: ['Schedule of Values', 'AIA G702/G703 package', 'Retainage tracker'],
        ownerRoles: ['Project accountant', 'Commercial manager'],
        systemDependencies: ['Billing system', 'Job cost ledger', 'Owner draw portal']
      },
      {
        stage: 'Cost-to-Complete Forecast and Closeout',
        keyArtifacts: ['EAC forecast', 'Committed cost report', 'Contractor performance log'],
        ownerRoles: ['Project controls lead', 'Operations director'],
        systemDependencies: ['Cost system', 'Schedule system', 'Forecast model']
      }
    ],
    systemTags: ['Procore', 'Autodesk Construction Cloud', 'Primavera P6', 'CMiC', 'Sage 300 CRE', 'AIA G702/G703'],
    fragmentation: [
      {
        name: 'RFI-to-cost disconnect',
        mechanics: 'RFI decisions are not systematically tied to change-event cost impact, delaying commercial response.'
      },
      {
        name: 'Submittal and schedule drift',
        mechanics: 'Submittal approval states are out of sync with procurement and schedule baselines.'
      },
      {
        name: 'Pay-app reconciliation breaks',
        mechanics: 'SOV progress percentages and billing lines diverge, requiring manual tie-out each draw cycle.'
      }
    ],
    riskContext: [
      {
        claim: 'Rework and change-control breakdown are significant contributors to margin erosion on projects.',
        benchmarkRange: 'Commonly cited at low- to mid-teens cost impact in adverse cases',
        sourceIds: [1, 2],
        asOf: 'recent construction studies'
      },
      {
        claim: 'Delayed RFI/submittal cycles are strongly correlated with schedule slippage and change-order expansion.',
        benchmarkRange: 'Material schedule and cost sensitivity to unresolved decision latency',
        sourceIds: [2, 3],
        asOf: 'industry project performance analyses'
      },
      {
        claim: 'Manual pay-app and SOV reconciliation drives repetitive billing disputes and cashflow drag.',
        benchmarkRange: 'Frequent issue category in owner-contractor commercial governance',
        sourceIds: [3],
        asOf: 'construction controls practice'
      }
    ],
    failureMechanics: [
      'Data diverges when change event values are revised without synchronized contract value updates.',
      'Lifecycle states are undefined between pending quote, approved change, and billed change.',
      'Audit trails disappear when forecast overrides are made in offline workbooks.',
      'Approvals are informal for contingency usage and scope growth commitments.',
      'Reporting is non-reproducible when cost-to-complete is rebuilt from disconnected extracts.',
      'Turnover destroys institutional memory when project control logic is not codified.'
    ],
    reconstruct: [
      'Define canonical states for RFI, submittal, change order, and pay-app workflows.',
      'Enforce owner assignment and SLA checkpoints by lifecycle state.',
      'Version-control SOV, pay-app, and forecast artifacts.',
      'Log commercial approvals and scope changes with full audit chain.',
      'Normalize change and variance taxonomy for margin tracking.',
      'Produce audit-ready pay-app and cost forecast outputs.'
    ],
    dataQualityPrerequisites: [
      'Cost codes and SOV line mappings must be consistent across PM and accounting systems.',
      'Schedule activities must map deterministically to change events for variance attribution.',
      'Field status updates require timestamp and owner provenance standards.',
      'Contract values and approved CO amounts must be reconciled before pay-app automation.'
    ],
    engagementModel: [...STANDARD_PHASES],
    changeManagement: [
      'Assign owner accountability for each state in RFI/submittal/change-order workflows.',
      'Train project and accounting teams on approval evidence requirements.',
      'Run governance reviews on unresolved commercial exceptions each cycle.',
      'Require readiness sign-off from operations, commercial, and client-facing leads before full cutover.'
    ],
    regulatoryCaveat:
      'Contract form, delivery method, public/private owner requirements, and regional procurement rules vary significantly. Control design must align to project-specific contractual and regulatory obligations.',
    outcomeMetrics: [
      {
        metric: 'Change-order cycle duration',
        baselineNote: 'Median elapsed days from initiation to approved value.',
        targetRange: '15%–35% reduction in median cycle time after workflow controls.',
        controlLink: 'Canonical states + approval chain logging'
      },
      {
        metric: 'Cost-to-complete forecast variance',
        baselineNote: 'Variance between forecast and realized cost at close periods.',
        targetRange: '20%–40% reduction in forecast error bands.',
        controlLink: 'Version control + reconciliation checkpoints'
      },
      {
        metric: 'SOV/pay-app dispute frequency',
        baselineNote: 'Billing disputes triggered by reconciliation mismatches.',
        targetRange: '25%–45% reduction in reconciliation-driven disputes.',
        controlLink: 'SOV mapping controls + audit evidence'
      },
      {
        metric: 'Commercial approval traceability',
        baselineNote: 'Share of scope/cost decisions with full owner and approval history.',
        targetRange: 'Reach 95%+ traceable approval coverage in sampled periods.',
        controlLink: 'Approval logging + owner assignment'
      }
    ],
    sources: [
      {
        id: 1,
        title: 'Construction Industry Performance and Rework Research',
        publisher: 'FMI / CII',
        url: 'https://www.fminet.com',
        accessedOn: '2026-02-13',
        claimSupport: 'Rework, coordination failure, and margin impact themes.'
      },
      {
        id: 2,
        title: 'Global Construction Survey',
        publisher: 'KPMG',
        url: 'https://kpmg.com',
        accessedOn: '2026-02-13',
        claimSupport: 'Project controls, schedule, and change-management risk signals.'
      },
      {
        id: 3,
        title: 'Project Controls and Cost Management Guidance',
        publisher: 'AACE International',
        url: 'https://web.aacei.org',
        accessedOn: '2026-02-13',
        claimSupport: 'Forecasting, earned value, and commercial control practices.'
      }
    ]
  },
  {
    slug: 'pds',
    label: 'Project & Development Services (PDS)',
    lifecycle: [
      {
        stage: 'Development Budget Baseline',
        keyArtifacts: ['Budget baseline', 'Cost code framework', 'Assumption register'],
        ownerRoles: ['Development manager', 'Cost planner'],
        systemDependencies: ['Budget model', 'Project controls', 'Accounting exports']
      },
      {
        stage: 'GMP Validation and Scope Alignment',
        keyArtifacts: ['GMP validation checklist', 'Scope alignment log', 'Variance approvals'],
        ownerRoles: ['Commercial lead', 'Program director'],
        systemDependencies: ['Contract register', 'Estimate workbook', 'Approval workflow']
      },
      {
        stage: 'Resource and Fee Allocation',
        keyArtifacts: ['Headcount-to-fee plan', 'Utilization reports', 'Allocation assumptions'],
        ownerRoles: ['Operations lead', 'Finance partner'],
        systemDependencies: ['Resource planning tool', 'Timesheet data', 'Fee model']
      },
      {
        stage: 'Milestone Gating and Governance',
        keyArtifacts: ['Milestone gate checklist', 'Approval log', 'Risk register'],
        ownerRoles: ['Program manager', 'Governance lead'],
        systemDependencies: ['Schedule tracker', 'Risk system', 'Governance calendar']
      },
      {
        stage: 'Client Reporting and Portfolio Roll-up',
        keyArtifacts: ['Client reporting package', 'Portfolio margin bridge', 'Variance narrative'],
        ownerRoles: ['Reporting lead', 'Portfolio director'],
        systemDependencies: ['BI model', 'Reporting templates', 'Data warehouse']
      }
    ],
    systemTags: ['Procore', 'Primavera P6', 'Deltek', 'Power BI', 'Cost planning workbooks', 'Client reporting templates'],
    fragmentation: [
      {
        name: 'Budget version fragmentation',
        mechanics: 'Budget revisions are maintained in parallel files without a canonical approved version.'
      },
      {
        name: 'GMP control inconsistency',
        mechanics: 'Validation criteria vary by project, creating inconsistent approval evidence and comparability.'
      },
      {
        name: 'Reporting definition mismatch',
        mechanics: 'Client-facing metrics are assembled with inconsistent definitions across project teams.'
      }
    ],
    riskContext: [
      {
        claim: 'Development and capital projects routinely face cost and schedule variance pressure where governance is weak.',
        benchmarkRange: 'Cost overrun risk frequently cited in high single to double-digit ranges by project context',
        sourceIds: [1, 2],
        asOf: 'global infrastructure/project studies'
      },
      {
        claim: 'Inconsistent milestone gating is a common source of downstream rework and reporting volatility.',
        benchmarkRange: 'Material variance contribution in projects lacking gate discipline',
        sourceIds: [2, 3],
        asOf: 'project delivery research'
      },
      {
        claim: 'Manual portfolio reporting assembly increases definition drift and executive decision risk.',
        benchmarkRange: 'Frequent issue category in multi-project reporting environments',
        sourceIds: [3],
        asOf: 'PMO and reporting governance guidance'
      }
    ],
    failureMechanics: [
      'Data diverges when budget approvals in meetings are not reflected in controlled models.',
      'Lifecycle states are undefined between gate-ready, conditional, and fully approved states.',
      'Audit trails disappear when milestone exceptions are accepted without rationale records.',
      'Approvals are informal for fee reallocations and scope changes.',
      'Reporting is non-reproducible when portfolio summaries rely on manual slide assembly.',
      'Turnover destroys institutional memory when project controls logic remains person-dependent.'
    ],
    reconstruct: [
      'Define canonical states for budget, GMP, milestones, and reporting.',
      'Enforce owner assignment for gate decisions and fee-impacting changes.',
      'Version-control budget and client reporting artifacts.',
      'Log approvals, exceptions, and escalation events.',
      'Normalize milestone and performance taxonomy across projects.',
      'Produce audit-ready portfolio margin and reporting outputs.'
    ],
    dataQualityPrerequisites: [
      'Budget line definitions must be standardized across projects before portfolio roll-up.',
      'Milestone naming and gate criteria must be normalized for comparable reporting.',
      'Headcount and fee allocation rules must use a consistent logic model.',
      'Client KPI definitions must be controlled and versioned before automation.'
    ],
    engagementModel: [...STANDARD_PHASES],
    changeManagement: [
      'Assign accountable owners for each milestone gate and reporting approval state.',
      'Train project teams on standardized KPI definitions and exception handling.',
      'Run recurring governance reviews for gate exceptions and budget variance drivers.',
      'Require continuity sign-off from delivery and client reporting owners before scale-out.'
    ],
    regulatoryCaveat:
      'Client contract terms, procurement models, and reporting obligations vary by portfolio and jurisdiction. Controls must be adapted to the client’s contractual governance framework.',
    outcomeMetrics: [
      {
        metric: 'Portfolio margin clarity',
        baselineNote: 'Visibility of margin drivers by project stage and owner.',
        targetRange: 'Expand controlled margin visibility to >90% of active projects.',
        controlLink: 'Taxonomy normalization + state governance'
      },
      {
        metric: 'Milestone gate compliance',
        baselineNote: 'Share of milestones advancing with complete approval evidence.',
        targetRange: 'Increase compliant gate progression by 20%–40%.',
        controlLink: 'Owner assignment + approval logging'
      },
      {
        metric: 'Budget variance controllability',
        baselineNote: 'Variance items with attributable owner and decision record.',
        targetRange: 'Raise attributable variance coverage to 90%+.',
        controlLink: 'Version control + exception governance'
      },
      {
        metric: 'Client reporting reproducibility',
        baselineNote: 'Portion of reported KPIs reproducible from controlled data lineage.',
        targetRange: 'Reach >90% reproducible KPI coverage in sampled periods.',
        controlLink: 'Schema control + reporting standards'
      }
    ],
    sources: [
      {
        id: 1,
        title: 'Global Infrastructure Initiative Research',
        publisher: 'McKinsey & Company',
        url: 'https://www.mckinsey.com/capabilities/operations/our-insights/infrastructure',
        accessedOn: '2026-02-13',
        claimSupport: 'Capital project overrun and delivery governance trends.'
      },
      {
        id: 2,
        title: 'Project Management Survey',
        publisher: 'PwC',
        url: 'https://www.pwc.com/gx/en/services/advisory/consulting/project-programme-management.html',
        accessedOn: '2026-02-13',
        claimSupport: 'Governance maturity and project performance observations.'
      },
      {
        id: 3,
        title: 'PMO and Portfolio Reporting Practices',
        publisher: 'Project Management Institute',
        url: 'https://www.pmi.org',
        accessedOn: '2026-02-13',
        claimSupport: 'Portfolio governance and reporting standardization guidance.'
      }
    ]
  }
];

export const INDUSTRY_BY_SLUG = Object.fromEntries(INDUSTRY_ENGAGEMENTS.map((item) => [item.slug, item])) as Record<string, IndustryEngagement>;
