import Link from 'next/link';
import { SloganBadge } from '../../components/visual/SloganBadge';

const safeguards = ['Human approval required', 'Role-based access', 'Trace logging enabled', 'Policy-bound responses only'];

export default function AIConciergePage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Reduce exception decision latency by 15–35% with a governed AI Concierge.</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">Own Your Operating Logic with human-in-the-loop decision support tied to workflow states, rules, and audit evidence.</p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Example interaction</h2>
        <div className="mt-3 rounded-2xl border border-slate-800/70 bg-slate-950/45 p-4 text-sm text-slate-200">
          <p><strong>User:</strong> “This capital call exception crossed threshold. Escalate?”</p>
          <p className="mt-2"><strong>Concierge:</strong> “Escalate to finance approver. Rule 3.2 triggered by variance &gt; 2.5%. Two similar events resolved with owner override in prior quarter. Source records attached.”</p>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Human-in-the-loop control</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {['Input', 'AI Recommendation', 'Human Approval', 'Execution + Audit Log'].map((step) => (
            <div key={step} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-200">{step}</div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Safeguards</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {safeguards.map((item) => (
            <span key={item} className="rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">{item}</span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>15–35% reduction in decision latency for recurring exceptions</li>
          <li>90%+ routing accuracy after rule tuning</li>
          <li>95%+ response provenance coverage in audit samples</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2.5 text-sm font-semibold text-emerald-100">Fix your exception workflow</Link>
          <span className="rounded-full border border-slate-700 px-3 py-2 text-xs text-slate-300">Own Your Operating Logic</span>
        </div>
      </section>
    </div>
  );
}
