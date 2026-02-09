import Link from 'next/link';
import { ArrowDownCircle } from 'lucide-react';

export function ShiftHero() {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">The Shift</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">The Shift</h1>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
        Operations are moving from scattered SaaS workflows to a unified execution engine with governed automation.
      </p>
      <div className="mt-6">
        <Link
          href="#shift-map"
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          See the Shift Map
          <ArrowDownCircle size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
