import Link from 'next/link';
import { ShiftHero } from '../../components/shift/ShiftHero';
import { ShiftMap } from '../../components/shift/ShiftMap';
import { RegimeTimeline } from '../../components/shift/RegimeTimeline';
import { WhatYouGainGrid } from '../../components/shift/WhatYouGainGrid';

export default function ShiftPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <ShiftHero />
      <ShiftMap />
      <RegimeTimeline />
      <WhatYouGainGrid />
      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/80 to-emerald-900/20 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Next Step</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Inventory your current execution</h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Baseline what should stay, what should automate, and where governance must hold.
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
