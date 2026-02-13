export type IndustryEngagement = {
  slug: string;
  label: string;
  title: string;
  operationalContext: string[];
  systemsBreak: string[];
  engagementModel: string[];
  typicalIntegrations: string[];
  executiveOutcome: string[];
};

export const INDUSTRY_ENGAGEMENTS: IndustryEngagement[] = [
  {
    slug: 'healthcare',
    label: 'Healthcare',
    title: 'Healthcare Engagement Model',
    operationalContext: [
      'Revenue cycle work moves from scheduling to eligibility checks, prior auth, coding, claim submission, denial follow-up, and payment posting.',
      'Teams often split this lifecycle across EHR, PM, clearinghouse, spreadsheets, and email approvals.',
      'Operations leaders need visibility into claim status, denial root causes, and turnaround times by owner.'
    ],
    systemsBreak: [
      'Claim status is inconsistent across EHR and clearinghouse exports.',
      'Denial management notes are trapped in inboxes and personal trackers.',
      'PHI handling steps are applied unevenly during escalations and handoffs.'
    ],
    engagementModel: [
      'Operational audit of the full revenue cycle and owner-by-owner handoffs.',
      'Workflow reconstruction for claim intake, denial routing, and follow-up checkpoints.',
      'Internal application layer build for lifecycle tracking and queue ownership.',
      'Governance and audit controls for PHI-sensitive actions and approval history.',
      'Knowledge continuity framework so denial logic and escalation rules remain institutional.'
    ],
    typicalIntegrations: ['EHR', 'Practice Management', 'Clearinghouse feeds', 'Billing systems', 'Document repository'],
    executiveOutcome: [
      'Control over denial and rework queues.',
      'Auditability for PHI-sensitive workflow actions.',
      'Reduced cross-system drift in claim status and ownership.',
      'Ownership continuity when team members change.'
    ]
  },
  {
    slug: 'legal',
    label: 'Legal',
    title: 'Legal Engagement Model',
    operationalContext: [
      'Matter work moves from intake and conflicts checks to staffing, document review, time capture, billing, and trust movements.',
      'Firms run this lifecycle across matter systems, DMS, billing tools, spreadsheets, and email approvals.',
      'Operators need reliable matter status, billing accuracy, and traceable decision points.'
    ],
    systemsBreak: [
      'Matter intake data is incomplete and re-entered across systems.',
      'Time and billing edits happen outside governed workflows.',
      'Conflict check outcomes and trust accounting controls are hard to trace end to end.'
    ],
    engagementModel: [
      'Operational audit of matter lifecycle, billing flows, and trust control points.',
      'Workflow reconstruction for intake, conflict routing, and billing approvals.',
      'Internal application layer build for matter status, exceptions, and approval ownership.',
      'Governance and audit controls for trust accounting and document-control rules.',
      'Knowledge continuity framework for matter playbooks and escalation standards.'
    ],
    typicalIntegrations: ['Matter management', 'Document management', 'Time and billing', 'Conflicts repository', 'Trust ledger systems'],
    executiveOutcome: [
      'Control over matter progression and billing exceptions.',
      'Auditability for conflict and trust-related decisions.',
      'Reduced cross-system drift in matter and billing records.',
      'Ownership continuity across partners, billing teams, and operations.'
    ]
  },
  {
    slug: 'real-estate-private-equity',
    label: 'Real Estate Private Equity',
    title: 'Real Estate Private Equity Engagement Model',
    operationalContext: [
      'Deal execution moves from sourcing and underwriting to IC memo review, approvals, capital calls, and portfolio reporting.',
      'Teams manage this lifecycle across CRM, underwriting models, fund accounting, data rooms, and committee workflows.',
      'Leadership needs consistent deal stage, memo version control, and asset-level performance traceability.'
    ],
    systemsBreak: [
      'IC memo versions are fragmented across drives and email threads.',
      'Waterfall assumptions are edited without a stable governance trail.',
      'Capital call and NOI reporting do not reconcile cleanly across tools.'
    ],
    engagementModel: [
      'Operational audit of deal funnel, IC governance, and fund reporting handoffs.',
      'Workflow reconstruction for memo routing, approval gates, and waterfall validation.',
      'Internal application layer build for deal-state tracking and approval evidence.',
      'Governance and audit controls for capital call triggers and model changes.',
      'Knowledge continuity framework for underwriting assumptions and investment rationale.'
    ],
    typicalIntegrations: ['Deal CRM', 'Underwriting models', 'Fund accounting', 'Document room', 'Portfolio reporting tools'],
    executiveOutcome: [
      'Control over deal progression and investment committee decisions.',
      'Auditability for memo, model, and approval changes.',
      'Reduced cross-system drift in capital and portfolio reporting.',
      'Ownership continuity from deal team to asset management.'
    ]
  },
  {
    slug: 'finance',
    label: 'Finance',
    title: 'Finance Engagement Model',
    operationalContext: [
      'Finance operations run through close cycles, reconciliations, sub-ledger checks, treasury movement, and executive reporting.',
      'This lifecycle is usually split across ERP, close tools, spreadsheets, shared drives, and approval email chains.',
      'Finance leaders need predictable close execution with traceable approvals and exception control.'
    ],
    systemsBreak: [
      'Close checklists and approvals live in parallel trackers.',
      'GL and sub-ledger reconciliations are manually stitched together.',
      'Treasury visibility is delayed because data pipelines and ownership are fragmented.'
    ],
    engagementModel: [
      'Operational audit of close process timing, exception paths, and reconciliations.',
      'Workflow reconstruction for close enforcement and GL reconciliation controls.',
      'Internal application layer build for queue ownership and exception evidence.',
      'Governance and audit controls aligned to SOX-ready logging requirements.',
      'Knowledge continuity framework for recurring close logic and treasury visibility.'
    ],
    typicalIntegrations: ['ERP', 'Sub-ledger systems', 'Treasury data feeds', 'Close management tools', 'Reporting warehouse'],
    executiveOutcome: [
      'Control over close progression and reconciliation quality.',
      'Auditability for close decisions and exception approvals.',
      'Reduced cross-system drift between GL, sub-ledger, and reports.',
      'Ownership continuity across controller, treasury, and FP&A teams.'
    ]
  },
  {
    slug: 'construction',
    label: 'Construction',
    title: 'Construction Engagement Model',
    operationalContext: [
      'Project controls run through RFIs, submittals, change orders, schedule updates, pay applications, and cost-to-complete tracking.',
      'Teams coordinate this lifecycle across PM suites, cost systems, field logs, and document repositories.',
      'Operators need real-time visibility into approval bottlenecks and budget impact.'
    ],
    systemsBreak: [
      'RFI and submittal cycles are tracked in disconnected status systems.',
      'Change order governance is inconsistent between project controls and finance.',
      'SOV and contractor performance data is difficult to reconcile at reporting time.'
    ],
    engagementModel: [
      'Operational audit of RFI, submittal, and change order lifecycle ownership.',
      'Workflow reconstruction for cost-to-complete and SOV approval checkpoints.',
      'Internal application layer build for field-to-office status continuity.',
      'Governance and audit controls for contract thresholds and approval trails.',
      'Knowledge continuity framework for repeatable project control standards.'
    ],
    typicalIntegrations: ['Project management systems', 'Cost control tools', 'Document control', 'Scheduling data', 'Field reporting inputs'],
    executiveOutcome: [
      'Control over project-level approval and cost workflows.',
      'Auditability for change orders, SOV movement, and contractor decisions.',
      'Reduced cross-system drift in schedule, cost, and reporting data.',
      'Ownership continuity across PM, controls, and finance stakeholders.'
    ]
  },
  {
    slug: 'pds',
    label: 'Project & Development Services (PDS)',
    title: 'PDS Engagement Model',
    operationalContext: [
      'Development services work moves through budget setup, GMP validation, headcount allocation, milestone review, and client reporting.',
      'This lifecycle is often split across spreadsheets, PM tools, accounting exports, and presentation decks.',
      'Practice leaders need a stable operating record for budget and milestone decisions.'
    ],
    systemsBreak: [
      'Development budget assumptions drift across versions and owners.',
      'GMP validation evidence is scattered across files and email approvals.',
      'Client reporting is manually assembled and hard to reconcile to source systems.'
    ],
    engagementModel: [
      'Operational audit of budget, milestone, and reporting workflow controls.',
      'Workflow reconstruction for GMP validation and milestone gate enforcement.',
      'Internal application layer build for owner accountability and status continuity.',
      'Governance and audit controls for budget revisions and approval authority.',
      'Knowledge continuity framework for repeatable client reporting logic.'
    ],
    typicalIntegrations: ['Project budgeting tools', 'Cost systems', 'Headcount planning inputs', 'Milestone trackers', 'Client reporting datasets'],
    executiveOutcome: [
      'Control over development budget and milestone execution.',
      'Auditability for GMP and client-facing reporting decisions.',
      'Reduced cross-system drift in project controls and finance data.',
      'Ownership continuity across delivery and client teams.'
    ]
  }
];

export const INDUSTRY_BY_SLUG = Object.fromEntries(INDUSTRY_ENGAGEMENTS.map((item) => [item.slug, item])) as Record<string, IndustryEngagement>;
