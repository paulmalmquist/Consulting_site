import Link from 'next/link';
import { SloganBadge } from '../../components/visual/SloganBadge';

export default function AboutPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">We built Novendor after watching critical operations run on disconnected tools.</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
          Teams were forced to manage real risk across spreadsheets, SaaS apps, and manual handoffs. We built Novendor to replace that fragmentation with controlled execution systems companies actually own.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">The Shift</p>
        <h2 className="mt-2 text-2xl font-semibold text-white">Vendor Dependence → Execution Ownership</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-rose-300/25 bg-slate-950/40 p-4 text-sm text-slate-200">Vendor Dependence: disconnected tools, opaque logic, costly change cycles.</div>
          <div className="rounded-2xl border border-emerald-300/25 bg-slate-950/40 p-4 text-sm text-slate-200">Execution Ownership: governed states, explicit rules, auditable outputs.</div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>20–35% faster cycle times on redesigned workflows</li>
          <li>25–40% lower manual rework across handoffs</li>
          <li>90%+ traceability for control-critical decisions</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/the-shift" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white">Read The Shift manifesto</Link>
          <Link href="/contact" className="rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2.5 text-sm font-semibold text-emerald-100">Start with one workflow</Link>
        </div>
      </section>
    </div>
  );
}
