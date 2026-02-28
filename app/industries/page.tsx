import Link from 'next/link';
import { INDUSTRY_VERTICALS } from '../../content/industry-verticals';
import { IndustryConsistencyGrid } from '../../components/industries/IndustryConsistencyGrid';

export default function IndustriesPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industries</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Industry Engagement Playbooks</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          The operating model stays consistent across all four engagements: pressure reality, workflow breakpoints, reconstruction, engagement model,
          and measurable impact.
        </p>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          What changes by sector is the workflow itself: the controls, artifacts, handoffs, and evidence requirements needed to move safely.
        </p>
      </section>

      <IndustryConsistencyGrid />

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {INDUSTRY_VERTICALS.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5 transition hover:border-emerald-300/35 hover:bg-slate-900/70"
          >
            <p className="text-lg font-semibold text-white">{industry.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{industry.teaser}</p>
            <div className="mt-4 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">Workflow examples</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {industry.reconstructCards.slice(0, 2).map((card) => (
                  <li key={card.title} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-2.5">
                    {card.title}
                  </li>
                ))}
              </ul>
            </div>
            <p className="mt-4 text-sm font-semibold text-white">View engagement model</p>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Start With One Workflow</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">Scope one operational workflow, run a controlled parallel pilot, and cut over only with proof.</p>
        <Link
          href="/what-we-do"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          See Engagement Model
        </Link>
      </section>
    </div>
  );
}
