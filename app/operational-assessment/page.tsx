import Link from 'next/link';
import { OperationalQuestionnaire } from '../../components/assessment/OperationalQuestionnaire';
import { SloganBadge } from '../../components/visual/SloganBadge';

const steps = [
  { title: 'Inventory', detail: 'Map tools, owners, and handoffs for one workflow.' },
  { title: 'Measure', detail: 'Baseline delays, rework rates, and exception volume.' },
  { title: 'Redesign', detail: 'Define states, rules, and evidence requirements.' },
  { title: 'Certify', detail: 'Validate outputs, governance, and rollback readiness.' }
];

export default function OperationalAssessmentPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Identify your highest-friction workflow in 4 steps.</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">Own Your Operating Logic by scoring breakdown points before you invest in full rebuilds.</p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <div className="grid gap-3 md:grid-cols-4">
          {steps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Step {index + 1}</p>
              <h2 className="mt-1 text-base font-semibold text-white">{step.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{step.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Sample output preview</p>
        <div className="mt-3 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-200">
          Workflow: Capital call approvals | Friction score: 78/100 (High) | Primary break: owner handoff between fund accounting and investor relations | First fix: state-based approval queue with rule-linked evidence.
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Assessment quiz (returns a score)</h2>
        <OperationalQuestionnaire variant="public" />
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>Top workflow prioritized in under 1 week</li>
          <li>25–40% reduction in manual interventions after redesign</li>
          <li>90%+ traceability once control points are certified</li>
        </ul>
        <div className="mt-5 flex gap-3">
          <Link href="/contact" className="rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2.5 text-sm font-semibold text-emerald-100">See your first use case</Link>
          <span className="rounded-full border border-slate-700 px-3 py-2 text-xs text-slate-300">Own Your Operating Logic</span>
        </div>
      </section>
    </div>
  );
}
