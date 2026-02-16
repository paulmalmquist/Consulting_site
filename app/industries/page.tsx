import Link from 'next/link';
import { INDUSTRY_VERTICALS } from '../../content/industry-verticals';

export default function IndustriesPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industries</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">Industry Engagement Playbooks</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Operational AI execution for four high-friction sectors. Each playbook follows the same structure: pressure reality, workflow breakpoints,
          reconstruction, engagement model, and measurable impact.
        </p>
      </section>

      <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        {INDUSTRY_VERTICALS.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5 transition hover:border-emerald-300/35"
          >
            <p className="text-lg font-semibold text-white">{industry.label}</p>
            <p className="mt-2 text-sm text-slate-300">View engagement model</p>
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
