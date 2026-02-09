import { BadgeDollarSign, Clock3, FileCheck2, GitCompareArrows, ShieldCheck, UserCheck2 } from 'lucide-react';

const gains = [
  { label: 'Lower long-term cost', icon: BadgeDollarSign },
  { label: 'Faster change without migrations', icon: GitCompareArrows },
  { label: 'Clear ownership of logic and data', icon: ShieldCheck },
  { label: 'Continuity across teams/time', icon: Clock3 },
  { label: 'Traceable, replayable runs', icon: FileCheck2 },
  { label: 'Humans approve exceptions', icon: UserCheck2 }
];

export function WhatYouGainGrid() {
  return (
    <section aria-labelledby="what-you-gain-title" className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What You Gain</p>
        <h2 id="what-you-gain-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Practical outcomes from the new operating model.
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {gains.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/45 px-4 py-4 text-sm text-slate-200 transition hover:border-emerald-300/35"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100">
                  <Icon size={16} aria-hidden="true" />
                </span>
                <p className="leading-snug">{item.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
