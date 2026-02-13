import Link from 'next/link';
import { AlertTriangle, BookOpenText, Compass, FileSearch, ShieldCheck, TimerReset } from 'lucide-react';

const WHAT_IT_DOES = [
  'Provides AI-assisted workflow guidance using your approved lifecycle states, ownership rules, and control thresholds.',
  'Reviews documents and structured records to return answers with traceable source references.',
  'Supports scenario comparisons for exceptions, approvals, and policy-sensitive decisions before action is taken.'
];

const WHERE_IT_OPERATES = [
  'Finance close and reconciliation workflows.',
  'Claims, intake, and exception queues.',
  'Matter, project, and approval lifecycles.',
  'Operational reporting and handoff checkpoints.'
];

const SAFEGUARDS = [
  'Human approval required for policy, financial, and compliance-impacting actions.',
  'No autonomous production action without explicit permission and role-based controls.',
  'Prompt, response, and action-request logs retained for audit review.',
  'Role-scoped access boundaries and redaction standards for sensitive records.'
];

const OPERATING_CONSTRAINTS = [
  'Data classification must be defined before ingestion (public, internal, restricted, sensitive).',
  'Sensitive fields require masking/redaction and minimum-necessary access design.',
  'Response quality is validated against approved source sets before broad rollout.',
  'Drift monitoring and periodic control testing are required to keep guidance reliable.'
];

const EXEC_OUTCOMES = [
  {
    metric: 'Decision latency for recurring exceptions',
    target: '15%–35% reduction after guardrail tuning',
    control: 'Role-gated approvals + logged escalation paths'
  },
  {
    metric: 'Exception routing accuracy',
    target: 'Raise correctly routed exceptions to >90% in sampled periods',
    control: 'Canonical taxonomy + owner-state mapping'
  },
  {
    metric: 'Retrieval provenance coverage',
    target: '95%+ responses with linked source trace in audited samples',
    control: 'Source whitelisting + citation logging'
  },
  {
    metric: 'Off-system backchannel handling',
    target: '20%–40% reduction in email/chat-only decision handling',
    control: 'Workflow-integrated guidance + audit logging'
  }
];

export default function AIConciergePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-900/70 via-slate-950/65 to-[#061226] p-6 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI Concierge</p>
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              AI-assisted operational guidance inside real workflows.
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
              AI Concierge is an advisory layer for execution work. It helps teams evaluate scenarios and interpret records, while keeping human ownership for approvals and actions.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
              >
                Scope an AI Concierge pilot
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Operating profile</p>
            <div className="mt-4 space-y-3">
              {[
                { title: 'AI-assisted', detail: 'Supports decisions; does not autonomously execute critical actions.', icon: Compass },
                { title: 'Document analysis', detail: 'Reads approved internal records with source traceability.', icon: FileSearch },
                { title: 'Decision support', detail: 'Compares scenarios and proposes next-step guidance.', icon: BookOpenText }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-3">
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-200/10 text-cyan-100">
                        <Icon size={14} aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.title}</p>
                        <p className="text-xs text-slate-300">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">1) What It Does</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {WHAT_IT_DOES.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">2) Where It Operates</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {WHERE_IT_OPERATES.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">3) Safeguards</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {SAFEGUARDS.map((item, index) => (
            <div key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-200">
              <span className="flex items-start gap-3">
                {index % 2 === 0 ? (
                  <ShieldCheck size={16} className="mt-0.5 text-emerald-200" aria-hidden="true" />
                ) : (
                  <AlertTriangle size={16} className="mt-0.5 text-amber-200" aria-hidden="true" />
                )}
                <span>{item}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">4) Data Governance and Model Controls</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {OPERATING_CONSTRAINTS.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">5) Executive Outcomes</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-800/70 bg-slate-950/40">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-900/70 text-xs uppercase tracking-[0.12em] text-slate-300">
              <tr>
                <th className="px-4 py-3">Metric</th>
                <th className="px-4 py-3">Target</th>
                <th className="px-4 py-3">Control Link</th>
              </tr>
            </thead>
            <tbody>
              {EXEC_OUTCOMES.map((item) => (
                <tr key={item.metric} className="border-t border-slate-800/70 text-slate-100">
                  <td className="px-4 py-3 font-semibold text-white">
                    <span className="inline-flex items-start gap-2">
                      <TimerReset size={16} className="mt-0.5 text-cyan-200" aria-hidden="true" />
                      <span>{item.metric}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-slate-300">{item.target}</td>
                  <td className="px-4 py-3 text-slate-300">{item.control}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
          >
            Request AI Concierge pilot
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
          >
            Start with Capability Discovery
          </Link>
        </div>
      </section>
    </div>
  );
}
