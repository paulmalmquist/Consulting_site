import Link from 'next/link';
import { SloganBadge } from '../../components/visual/SloganBadge';

export default function LegacySaaSPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Legacy SaaS Migration</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">Problem: SaaS sprawl creates duplicated logic, fragmented workflows, and expensive change requests.</p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Cost example</h2>
        <p className="mt-3 text-sm text-slate-300">Typical mid-market stack: 11 overlapping workflow tools, $420k annual license spend, plus 2,000+ manual reconciliation hours/year.</p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Before / After architecture</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-300/25 bg-slate-950/40 p-4 text-sm text-slate-200">Before: multiple SaaS tools, spreadsheet glue, hidden logic, no unified audit trail.</div>
          <div className="rounded-2xl border border-emerald-300/25 bg-slate-950/40 p-4 text-sm text-slate-200">After: one controlled execution layer over existing systems with explicit states, rules, and outputs.</div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>15–30% SaaS license reduction potential</li>
          <li>20–40% less manual handoff reconciliation</li>
          <li>90%+ traceability for migrated workflows</li>
        </ul>
        <Link href="/contact" className="mt-5 inline-flex rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2.5 text-sm font-semibold text-emerald-100">Fix your migration workflow</Link>
      </section>
    </div>
  );
}
