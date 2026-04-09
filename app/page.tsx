import Link from 'next/link';
import { BeforeAfterDiagram } from '../components/visual/BeforeAfterDiagram';
import { ControlLayerDiagram } from '../components/visual/ControlLayerDiagram';
import { SloganBadge } from '../components/visual/SloganBadge';

const steps = [
  { name: 'Discovery', detail: 'Map one high-friction workflow and baseline cycle time, error rate, and owner gaps.' },
  { name: 'Pilot', detail: 'Build controlled states, rules, and evidence in parallel with current operations.' },
  { name: 'Cutover', detail: 'Switch with rollback protection once outputs match and governance is approved.' }
];

export default function HomePage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Replace one broken workflow with a controlled execution layer in 12 weeks.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Own Your Operating Logic by standardizing workflow states, enforcing rule-level controls, and generating audit-ready outputs from one system of execution.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/operational-assessment" className="rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100">
            Identify your first fixable workflow in 30 minutes
          </Link>
          <Link href="/what-we-do" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white">
            Start with one workflow
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-emerald-200">3-step model</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {steps.map((step, index) => (
            <article key={step.name} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Step {index + 1}</p>
              <h2 className="mt-1 text-lg font-semibold text-white">{step.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <BeforeAfterDiagram title="Own Your Operating Logic: Workflow Transformation" />
      <ControlLayerDiagram title="Controlled Execution Layer" />

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Case example (illustrative)</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">From reporting drift to controlled fund operations</h2>
        <p className="mt-2 text-sm text-slate-300">
          A synthetic REPE scenario: a mid-market operator replaced spreadsheet-driven capital call handoffs with state-based approvals and reduced capital call errors from 5% to 1.2% in 8 weeks.
        </p>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <SloganBadge className="mb-4" />
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>25–40% reduction in manual reconciliation</li>
          <li>30% faster reporting cycles</li>
          <li>90%+ traceability on key workflows</li>
        </ul>
        <p className="mt-4 text-sm text-slate-300">Own Your Operating Logic is the operating thesis behind every implementation.</p>
      </section>
    </div>
  );
}
