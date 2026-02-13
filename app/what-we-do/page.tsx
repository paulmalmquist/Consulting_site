import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const WHAT_THIS_IS_NOT = ['Staff augmentation', 'Generic consulting', 'SaaS subscriptions', 'Big-bang rip-and-replace programs'];

const WHAT_THIS_IS = [
  'Fixed-scope workflow replacement',
  'Senior delivery with decision gates',
  'Parallel-run proof before cutover',
  'Ownership transfer with governance controls'
];

const STEP_MODEL = [
  {
    title: 'Step 1 — Discovery',
    timeline: '2-3 weeks',
    receives: 'Workflow map, system dependency map, cost baseline, and pilot scope.',
    decision: 'Approve the pilot scope or stop with clear findings.'
  },
  {
    title: 'Step 2 — Pilot',
    timeline: '6-8 weeks',
    receives: 'Working replacement workflow, parallel-run proof log, and rollback plan.',
    decision: 'Cut over, extend the pilot, or stop.'
  },
  {
    title: 'Step 3 — Cutover + Governance',
    timeline: '10-12 weeks total when bundled with pilot',
    receives: 'Production handoff package, governance checklist, and reporting controls.',
    decision: 'Approve production ownership and governance cadence.'
  }
];

const DELIVERABLES = [
  'Workflow map',
  'System dependency map',
  'Cost baseline',
  'Parallel-run proof log',
  'Rollback plan',
  'Production handoff package',
  'Governance checklist'
];

const PRICING = [
  {
    offer: 'Option 1 — Capability Discovery',
    price: '$35,000 fixed',
    scope: '1 workflow',
    timeline: '2-3 weeks',
    included: 'Workflow map, dependency map, cost baseline, pilot scope, decision memo'
  },
  {
    offer: 'Option 2 — Pilot Build',
    price: '$125,000 fixed',
    scope: '1 workflow pilot',
    timeline: '6-8 weeks',
    included: 'Working replacement workflow, parallel run, proof log, rollback plan'
  },
  {
    offer: 'Option 3 — Pilot + Cutover',
    price: '$195,000 fixed',
    scope: '1 workflow pilot + cutover',
    timeline: '10-12 weeks',
    included: 'Everything in Pilot Build plus production cutover and governance design'
  },
  {
    offer: 'Governance Retainer (Optional)',
    price: 'Starts at $20,000/month',
    scope: 'Ongoing oversight',
    timeline: 'Monthly',
    included: 'Monitoring, exception review, and reporting integrity checks'
  }
];

const WHO_FOR = [
  'Companies at $50M+ annual revenue or equivalent operating complexity',
  'COO, CFO, CIO, VP Operations, and PMO program sponsors',
  'Teams with one painful workflow and a clear internal owner',
  'Buyers who prefer fixed-fee outcomes over hourly staffing'
];

const WHO_NOT_FOR = [
  'Teams looking for low-cost ad hoc support',
  'Buyers who only want additional staff',
  'Organizations expecting software seat licensing',
  'Teams unwilling to assign an internal workflow owner'
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What We Do</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
          Replace one broken workflow.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Novendor fixes one high-friction workflow at a time and replaces it with a system your company owns and controls.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We map the workflow, build the replacement, run both side by side, and switch only when proof is clear.
        </p>
        <div className="mt-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Start with Capability Discovery
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7 md:grid-cols-2">
        <article>
          <h2 className="text-xl font-semibold text-white">What This Is Not</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {WHAT_THIS_IS_NOT.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-semibold text-white">What This Is</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {WHAT_THIS_IS.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section aria-labelledby="step-model-title" className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">How It Actually Works</p>
          <h2 id="step-model-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            3-step model
          </h2>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {STEP_MODEL.map((step) => (
            <article key={step.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <p className="text-base font-semibold text-white">{step.title}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-emerald-200">{step.timeline}</p>
              <div className="mt-3 space-y-2">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Client receives</p>
                <p className="text-sm text-slate-200">{step.receives}</p>
              </div>
              <div className="mt-3 space-y-2">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Decision made</p>
                <p className="text-sm text-slate-200">{step.decision}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Concrete Deliverables</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {DELIVERABLES.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Pricing (Fixed Scope)</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.12em] text-slate-400">
                <th className="border-b border-slate-800 p-3">Offer</th>
                <th className="border-b border-slate-800 p-3">Price</th>
                <th className="border-b border-slate-800 p-3">Scope</th>
                <th className="border-b border-slate-800 p-3">Timeline</th>
                <th className="border-b border-slate-800 p-3">Included</th>
              </tr>
            </thead>
            <tbody>
              {PRICING.map((row) => (
                <tr key={row.offer} className="align-top text-slate-200">
                  <td className="border-b border-slate-800/80 p-3 font-semibold text-white">{row.offer}</td>
                  <td className="border-b border-slate-800/80 p-3">{row.price}</td>
                  <td className="border-b border-slate-800/80 p-3">{row.scope}</td>
                  <td className="border-b border-slate-800/80 p-3">{row.timeline}</td>
                  <td className="border-b border-slate-800/80 p-3">{row.included}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <p className="text-sm font-semibold text-white">Why fixed pricing matters</p>
            <p className="mt-2 text-sm text-slate-300">Procurement gets clear scope, clear budget, and clear outputs before work begins.</p>
          </article>
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <p className="text-sm font-semibold text-white">Why this is not SaaS pricing</p>
            <p className="mt-2 text-sm text-slate-300">There is no seat license. Fees are tied to delivery phases and accepted outcomes.</p>
          </article>
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <p className="text-sm font-semibold text-white">Why this is not hourly consulting</p>
            <p className="mt-2 text-sm text-slate-300">Fees are tied to defined deliverables and decisions, not time spent in meetings.</p>
          </article>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7 md:grid-cols-2">
        <article>
          <h2 className="text-xl font-semibold text-white">Who This Is For</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {WHO_FOR.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article>
          <h2 className="text-xl font-semibold text-white">Who This Is Not For</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {WHO_NOT_FOR.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Ready to scope the first workflow?</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">Start with a fixed-scope Discovery package.</p>
        <Link
          href="/services"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Start Discovery
        </Link>
      </section>
    </div>
  );
}
