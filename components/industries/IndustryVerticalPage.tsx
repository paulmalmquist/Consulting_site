import Link from 'next/link';
import type { IndustryVertical } from '../../content/industry-verticals';

type IndustryVerticalPageProps = {
  industry: IndustryVertical;
};

export function IndustryVerticalPage({ industry }: IndustryVerticalPageProps) {
  const icpBullets = [
    'Companies with real operational complexity',
    'Multiple departments and vendor sprawl',
    '50-1,000 employees',
    'Leadership under AI ROI pressure',
    'Teams buried in spreadsheets and manual reconciliation'
  ];

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industry Engagement</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Put AI to Work in {industry.label} Operations
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{industry.heroSubheadline}</p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          AI embedded in controlled operational systems creates value only when outcomes are measurable, traceable, and audit-ready.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Book an AI Execution Session
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/45 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See Engagement Model
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">AI Pressure Is Rising.</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {industry.pressureCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Where Operational Work Breaks.</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <ul className="space-y-2 text-sm text-slate-200">
              {industry.breakpoints.items.map((item) => (
                <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <p className="text-sm leading-relaxed text-slate-300">{industry.breakpoints.explanation}</p>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">What We Reconstruct.</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {industry.reconstructCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-emerald-200">Outcome orientation</p>
              <p className="mt-1 text-sm text-slate-200">{card.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Engagement Model</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{industry.engagementModel.intro}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.engagementModel.principles.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-emerald-100/90">
          We don&apos;t deploy AI experiments. We deliver operational systems - with evidence.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Who This Is Built For</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {icpBullets.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">
          Built for companies big enough to have process - small enough to fix it.
        </p>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/85 to-emerald-900/20 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Measurable Operational Impact.</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">{industry.controlStatement}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {industry.outcomeCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-emerald-300/20 bg-slate-950/55 p-4">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Put AI to Work in Your Operations.</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          Start with one constrained workflow and execute with fixed scope, fixed fee, and measured operating outcomes.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Book an AI Execution Session
        </Link>
      </section>
    </div>
  );
}
