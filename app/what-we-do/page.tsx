import Link from 'next/link';
import { BeforeAfterDiagram } from '../../components/visual/BeforeAfterDiagram';
import { ControlLayerDiagram } from '../../components/visual/ControlLayerDiagram';
import { SloganBadge } from '../../components/visual/SloganBadge';

const timeline = [
  { phase: 'Weeks 1-3', name: 'Discovery', gate: 'Approve pilot scope or stop', detail: 'Inventory systems, define workflow states, and baseline cost-of-breakage.' },
  { phase: 'Weeks 4-9', name: 'Pilot', gate: 'Approve cutover readiness or stop', detail: 'Run current and new workflows in parallel with error and timing checks.' },
  { phase: 'Weeks 10-12', name: 'Cutover', gate: 'Approve ownership transfer', detail: 'Cut over with rollback plan, runbook, and governance cadence.' }
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Transform one broken workflow into a controlled system in 12 weeks.
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">
          Own Your Operating Logic by replacing spreadsheet drift, hidden handoffs, and untraceable approvals with state-based execution and explicit controls.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/operational-assessment" className="rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100">See your first use case</Link>
          <Link href="/contact" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white">Fix your workflow</Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Timeline + Decision Gates</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {timeline.map((item) => (
            <article key={item.name} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">{item.phase}</p>
              <h2 className="mt-1 text-lg font-semibold text-white">{item.name}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              <p className="mt-3 rounded-lg border border-emerald-300/30 bg-emerald-300/10 px-3 py-2 text-xs font-semibold text-emerald-100">Gate: {item.gate}</p>
            </article>
          ))}
        </div>
      </section>

      <BeforeAfterDiagram />
      <ControlLayerDiagram />

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Mini narrative</h2>
        <p className="mt-3 text-sm text-slate-300">
          A consumer credit operator started with one exception-routing workflow. In three weeks, we mapped ownership and failure points. By week nine, the pilot reduced queue bounce-backs by 32%. By week twelve, the team owned a governed state model and no longer relied on spreadsheet triage.
        </p>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <SloganBadge className="mb-4" />
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>25–40% reduction in manual reconciliation and rework</li>
          <li>20–35% faster cycle time on the target workflow</li>
          <li>90%+ traceability for critical decisions and handoffs</li>
        </ul>
        <Link href="/contact" className="mt-5 inline-flex rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2.5 text-sm font-semibold text-emerald-100">Start with one workflow</Link>
      </section>
    </div>
  );
}
