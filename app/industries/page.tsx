import Link from 'next/link';
import { IndustriesHero } from '../../components/industries/IndustriesHero';
import { IndustryWorkflowMap } from '../../components/industries/IndustryWorkflowMap';
import { IndustryConsistencyGrid } from '../../components/industries/IndustryConsistencyGrid';

export default function IndustriesPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <IndustriesHero />
      <IndustryWorkflowMap />
      <IndustryConsistencyGrid />
      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/80 to-emerald-900/20 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Next Step</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Select one workflow to pilot</h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Start where cycle time is slow, context is fragmented, and approvals are manual.
            </p>
          </div>
          <Link
            href="/operational-assessment"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Start an assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
