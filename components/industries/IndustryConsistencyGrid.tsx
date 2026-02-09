import { FileCheck2, ShieldCheck, UserCheck2 } from 'lucide-react';

const PRINCIPLES = [
  {
    title: 'Clarify decision rights',
    line: 'Define who approves, who executes, and who escalates.'
  },
  {
    title: 'Compress handoffs',
    line: 'Remove duplicate routing and fragmented status checks.'
  },
  {
    title: 'Evidence before cutover',
    line: 'Move changes live only after traceable pilot results.'
  }
];

const icons = [UserCheck2, ShieldCheck, FileCheck2];

export function IndustryConsistencyGrid() {
  return (
    <section
      aria-labelledby="industry-consistency-title"
      className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
    >
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What Stays Consistent</p>
        <h2 id="industry-consistency-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          The operating model is stable, even when workflows differ.
        </h2>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {PRINCIPLES.map((item, index) => {
          const Icon = icons[index];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100">
                <Icon size={16} aria-hidden="true" />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">{item.line}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
