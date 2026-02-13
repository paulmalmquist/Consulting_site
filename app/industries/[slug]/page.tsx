import Link from 'next/link';
import { notFound } from 'next/navigation';
import { INDUSTRY_BY_SLUG, INDUSTRY_ENGAGEMENTS } from '../../../content/industry-engagements';

type IndustryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return INDUSTRY_ENGAGEMENTS.map((industry) => ({ slug: industry.slug }));
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRY_BY_SLUG[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industry Engagement</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{industry.label}</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Capability-first engagement for {industry.label.toLowerCase()} workflows, with control points defined before any cutover.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">1) Operational Context</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.operationalContext.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">2) Where Systems Break</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.systemsBreak.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">3) Engagement Model</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.engagementModel.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">4) Typical Replacements / Decoupling</h2>
        <p className="mt-3 text-sm text-slate-300">Commonly integrated systems include:</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {industry.typicalIntegrations.map((item) => (
            <span key={item} className="rounded-full border border-emerald-300/35 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">5) Executive Outcome</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.executiveOutcome.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Next Step</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">Start with a focused discovery of one workflow in this operating environment.</p>
        <Link
          href="/services"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Start Capability Discovery
        </Link>
      </section>
    </div>
  );
}
