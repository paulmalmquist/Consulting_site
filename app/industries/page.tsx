import Link from 'next/link';
import { INDUSTRY_VERTICALS } from '../../content/industry-verticals';
import { SloganBadge } from '../../components/visual/SloganBadge';

export default function IndustriesPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">Industry playbooks built on one operating thesis.</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">Own Your Operating Logic across REPE, credit, medical, and legal workflows using the same controlled execution model.</p>
      </section>

      <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {INDUSTRY_VERTICALS.map((industry) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5 hover:border-emerald-300/35">
            <p className="text-lg font-semibold text-white">{industry.label}</p>
            <p className="mt-2 text-sm text-slate-300">{industry.teaser}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-emerald-200">Own Your Operating Logic</p>
          </Link>
        ))}
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-slate-950/50 p-6">
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>25–40% reduction in manual reconciliation</li>
          <li>20–35% faster workflow cycle time</li>
          <li>90%+ traceability in control-critical workflows</li>
        </ul>
        <Link href="/operational-assessment" className="mt-5 inline-flex rounded-full border border-emerald-300/45 bg-emerald-300/10 px-5 py-2.5 text-sm font-semibold text-emerald-100">Start with one workflow</Link>
      </section>
    </div>
  );
}
