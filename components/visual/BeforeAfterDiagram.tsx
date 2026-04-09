import { ArrowRight } from 'lucide-react';

type BeforeAfterDiagramProps = {
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
};

const beforeItems = ['Spreadsheet chaos', 'Manual workflows', 'Broken handoffs'];
const afterItems = ['Controlled execution layer', 'State transitions', 'Audit trail'];

export function BeforeAfterDiagram({
  title = 'Before → After',
  beforeLabel = 'Before',
  afterLabel = 'After'
}: BeforeAfterDiagramProps) {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <article className="rounded-2xl border border-rose-300/25 bg-rose-950/20 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-rose-200">{beforeLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {beforeItems.map((item) => (
              <li key={item} className="rounded-lg border border-slate-800/70 bg-slate-950/40 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
        <div className="mx-auto hidden h-10 w-10 items-center justify-center rounded-full border border-emerald-300/35 bg-emerald-300/10 text-emerald-100 md:flex">
          <ArrowRight size={16} aria-hidden="true" />
        </div>
        <article className="rounded-2xl border border-emerald-300/25 bg-emerald-950/20 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">{afterLabel}</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {afterItems.map((item) => (
              <li key={item} className="rounded-lg border border-slate-800/70 bg-slate-950/40 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
