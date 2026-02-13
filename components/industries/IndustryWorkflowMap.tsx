'use client';

import { useRef, useState } from 'react';
import { cn } from '../ui/cn';

type IndustryProfile = {
  tab: string;
  lifecycle: string[];
  artifacts: string[];
  systems: string[];
  fragmentedState: string;
  executionLayer: string;
  governance: string[];
  failurePoints: string[];
  executiveOutcome: string;
};

const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    tab: 'Healthcare',
    lifecycle: [
      'Eligibility Verification',
      'Prior Authorization Submission',
      'Charge Capture & Coding',
      'Claim Submission & Adjudication',
      'Denial Management'
    ],
    artifacts: ['837/835 claim files', 'EOB/ERA', 'Denial workqueue', 'Authorization packet'],
    systems: ['Epic', 'Cerner', 'Athenahealth', 'Availity', 'Change Healthcare'],
    fragmentedState:
      'HL7/FHIR handoffs, payer portals, and RCM workqueues fall out of sync during authorization and denial recovery.',
    executionLayer:
      'One governed RCM lifecycle with assigned owners at each handoff, time-bound SLAs, and exception routing across clinical and billing teams.',
    governance: ['HIPAA minimum necessary standard', 'PHI access logging', 'Payer policy version control'],
    failurePoints: ['Eligibility mismatch at intake', 'Auth expiration before service date', 'Denial reason code mapping drift'],
    executiveOutcome:
      'Leadership sees clean cash acceleration and defensible PHI controls without replacing the EHR or PM system.'
  },
  {
    tab: 'Legal',
    lifecycle: ['Conflict Check', 'Matter Intake', 'Engagement Letter', 'Docketing & Deadlines', 'Time Capture & Billing'],
    artifacts: ['Conflict report', 'Engagement letter', 'Docket calendar', 'Prebill/WIP report'],
    systems: ['Clio', 'iManage', 'Relativity', 'NetDocuments', 'Aderant'],
    fragmentedState:
      'Conflict results, matter data, and billing narratives are maintained in separate systems, creating rework before invoice release.',
    executionLayer:
      'Matter lifecycle orchestration keeps intake, docketing, and billing in one auditable chain with controlled exception escalation.',
    governance: ['IOLTA trust accounting controls', 'Ethical wall enforcement', 'Matter retention policy'],
    failurePoints: ['Late conflict refresh', 'Docket deadlines updated outside source system', 'Time entries rejected at prebill'],
    executiveOutcome:
      'Partners gain predictable realization and audit-ready matter records across intake, docketing, and billing.'
  },
  {
    tab: 'Real Estate PE',
    lifecycle: ['Deal Sourcing Funnel', 'Underwriting Model', 'IC Memo & Approval', 'Capital Call / Distribution', 'Asset Management & Exit'],
    artifacts: ['IC memo', 'ARGUS/Excel underwriting', 'Capital call notice', 'NOI bridge'],
    systems: ['Yardi', 'MRI', 'Juniper Square', 'Salesforce', 'Investran'],
    fragmentedState:
      'Deal pipeline, underwriting assumptions, and fund accounting are split across CRM, spreadsheets, and property systems.',
    executionLayer:
      'An owned investment execution layer preserves versioned assumptions from deal screen through IC decision and post-close asset reporting.',
    governance: ['Investment committee quorum rules', 'Promote hurdle policy', 'Valuation committee sign-off'],
    failurePoints: ['Underwriting version drift before IC', 'Capital call allocation mismatch', 'NAV reconciliation breaks at period close'],
    executiveOutcome:
      'Executives retain continuity from pipeline to IRR reporting with fewer reconciliation cycles before board updates.'
  },
  {
    tab: 'Finance',
    lifecycle: ['Sub-ledger Close', 'GL Reconciliation', 'Soft Close Review', 'Hard Close Certification', 'External Audit Support'],
    artifacts: ['Reconciliation packet', 'Journal entry support', 'Close checklist', 'Management reporting pack'],
    systems: ['SAP S/4HANA', 'Oracle NetSuite', 'Workday Financials', 'BlackLine', 'Power BI'],
    fragmentedState:
      'Close checklists, journal support, and control evidence live in disconnected files, slowing controller sign-off.',
    executionLayer:
      'Controlled close workflow links every reconciliation and certification step to owner, due date, and immutable evidence.',
    governance: ['SOX 302/404 control evidence', 'Segregation of duties', 'Audit trail retention'],
    failurePoints: ['Sub-ledger rollforward does not tie to GL', 'Late journal approvals', 'Unresolved close exceptions at hard close'],
    executiveOutcome:
      'CFO and controller teams gain predictable close cadence and complete audit evidence without adding another ERP.'
  },
  {
    tab: 'Construction',
    lifecycle: ['RFI Intake', 'Submittal Review', 'Change Order Pricing', 'Pay Application', 'Cost-to-Complete Forecast'],
    artifacts: ['RFI log', 'Submittal register', 'Change order register', 'Schedule of Values (SOV)'],
    systems: ['Procore', 'Autodesk Build', 'Primavera P6', 'Bluebeam', 'Sage 300 CRE'],
    fragmentedState:
      'Field updates, commercial approvals, and cost reports move through separate logs, delaying owner-facing decisions.',
    executionLayer:
      'Project controls lifecycle unifies RFI, submittal, CO, and pay app states with contractual approval gates and escalation.',
    governance: ['Contract exhibit compliance', 'Delegation of authority limits', 'Lien waiver verification'],
    failurePoints: ['RFI response not reflected in submittal', 'CO aging beyond contract threshold', 'SOV line mismatch at pay app'],
    executiveOutcome:
      'Program leaders reduce commercial leakage and maintain defensible records across schedule, cost, and contract execution.'
  },
  {
    tab: 'PDS',
    lifecycle: ['Development Budget Baseline', 'GMP Validation', 'Milestone Gate Review', 'Client Reporting Package', 'Closeout & Lessons Learned'],
    artifacts: ['Development budget', 'GMP comparison log', 'Milestone gate checklist', 'Monthly client report'],
    systems: ['Procore', 'Unifier', 'MRI', 'Power BI', 'SharePoint'],
    fragmentedState:
      'Budget ownership, headcount plans, and contractor performance data are assembled manually before each steering update.',
    executionLayer:
      'Delivery governance layer standardizes gate criteria, budget variance treatment, and reporting package version control.',
    governance: ['Stage-gate approval charter', 'Client reporting SLA', 'Consultant scope accountability'],
    failurePoints: ['Budget revision not reflected in GMP baseline', 'Milestone gate evidence incomplete', 'Client package issued from stale workbook'],
    executiveOutcome:
      'PDS leadership gets consistent portfolio visibility and cleaner client assurance on scope, budget, and delivery continuity.'
  }
];

export function IndustryWorkflowMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const profile = INDUSTRY_PROFILES[activeIndex];
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onStepKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = (index + 1) % INDUSTRY_PROFILES.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = (index - 1 + INDUSTRY_PROFILES.length) % INDUSTRY_PROFILES.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = INDUSTRY_PROFILES.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(next);
    refs.current[next]?.focus();
  };

  return (
    <section
      id="industry-map"
      aria-labelledby="industry-map-title"
      className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
    >
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Workflows Visualize</p>
        <h2 id="industry-map-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Operational Lifecycles, Reconstructed.
        </h2>
        <p className="max-w-3xl text-sm text-slate-300 sm:text-base">
          See how real workflows operate inside your industry — and where they break.
        </p>
      </div>

      <div
        role="tablist"
        aria-label="Industry lifecycle tabs"
        className="flex flex-wrap gap-2 rounded-2xl border border-slate-800/80 bg-slate-950/45 p-2"
      >
        {INDUSTRY_PROFILES.map((item, index) => {
          const selected = index === activeIndex;
          return (
            <button
              key={item.tab}
              ref={(node) => {
                refs.current[index] = node;
              }}
              role="tab"
              aria-selected={selected}
              aria-controls={`industry-panel-${index}`}
              id={`industry-tab-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => onStepKeyDown(event, index)}
              className={cn(
                'rounded-xl border px-3 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                selected
                  ? 'border-emerald-300/60 bg-emerald-200/10 text-emerald-50'
                  : 'border-slate-700/80 bg-slate-900/60 text-slate-300 hover:border-emerald-300/35'
              )}
            >
              {item.tab}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`industry-panel-${activeIndex}`}
        aria-labelledby={`industry-tab-${activeIndex}`}
        className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-950/65 p-4 lg:grid-cols-3"
      >
        <article className="space-y-3 rounded-xl border border-slate-800/80 bg-slate-900/55 p-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-rose-200">Fragmented State</h3>
          <p className="text-sm text-slate-200">{profile.fragmentedState}</p>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.08em] text-slate-400">System dependencies</p>
            <div className="flex flex-wrap gap-2">
              {profile.systems.map((system) => (
                <span key={system} className="rounded-full border border-slate-700 bg-slate-950 px-2 py-1 text-xs text-slate-200">
                  {system}
                </span>
              ))}
            </div>
          </div>
          <ul className="space-y-1 text-xs text-slate-300">
            {profile.failurePoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
        </article>

        <article className="space-y-3 rounded-xl border border-emerald-300/30 bg-emerald-200/5 p-4 lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-emerald-100">Execution Layer</h3>
          <p className="text-sm text-slate-100">{profile.executionLayer}</p>

          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {profile.lifecycle.map((stage, index) => (
              <div key={stage} className="rounded-lg border border-emerald-300/30 bg-slate-900/70 p-3 text-xs text-emerald-50">
                <p className="text-[11px] uppercase tracking-[0.08em] text-emerald-200/80">Stage {index + 1}</p>
                <p className="mt-1 text-sm text-slate-100">{stage}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.08em] text-slate-300">Native artifacts</p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                {profile.artifacts.map((artifact) => (
                  <li key={artifact}>• {artifact}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.08em] text-slate-300">Governance markers</p>
              <ul className="mt-2 space-y-1 text-xs text-slate-200">
                {profile.governance.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-3 flex gap-2 text-[11px] text-emerald-100">
                {['Log', 'Version', 'Ownership'].map((tag) => (
                  <span key={tag} className="rounded-full border border-emerald-300/40 bg-emerald-200/10 px-2 py-0.5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-slate-700/80 bg-slate-900/80 p-3">
            <p className="text-xs uppercase tracking-[0.08em] text-slate-300">Executive Outcome</p>
            <p className="mt-1 text-sm text-slate-100">{profile.executiveOutcome}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
