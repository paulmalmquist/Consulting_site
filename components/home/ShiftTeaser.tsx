import Link from 'next/link';
import { ArrowRight, Boxes, Cog, Workflow } from 'lucide-react';

type ShiftTeaserProps = {
  title: string;
  oneLiner: string;
  button: { label: string; href: string };
};

const teaserItems = [
  { title: 'Then', detail: 'Many apps split one process.', icon: Boxes },
  { title: 'Consolidate', detail: 'Execution moves into one layer.', icon: Workflow },
  { title: 'Now', detail: 'Engine, governance, and audit together.', icon: Cog }
];

export function ShiftTeaser({ title, oneLiner, button }: ShiftTeaserProps) {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 sm:p-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">The Shift</p>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">{oneLiner}</p>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {teaserItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-4 transition hover:border-emerald-300/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/30 bg-emerald-200/10 text-emerald-100">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold text-white">{item.title}</p>
              </div>
              <p className="mt-3 text-sm text-slate-300">{item.detail}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-6">
        <Link
          href={button.href}
          className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          {button.label}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
