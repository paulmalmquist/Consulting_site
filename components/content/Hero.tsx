import Link from 'next/link';

export function Hero({
  headline,
  subheadline,
  pillars
}: {
  headline: string;
  subheadline: string;
  pillars: string[];
}) {
  return (
    <section className="grid gap-8 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">AI Readiness & Operations Redesign</p>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{headline}</h1>
        <p className="text-lg text-slate-300">{subheadline}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/method"
            className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30"
          >
            View method
          </Link>
          <Link
            href="/demo"
            className="rounded-full border border-slate-700/80 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
          >
            See demo
          </Link>
        </div>
      </div>
      <div className="space-y-4 rounded-2xl border border-slate-800/70 bg-gradient-to-b from-slate-800/60 to-slate-900/90 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Proof points</p>
        <ul className="space-y-3 text-sm text-slate-200">
          {pillars.map((pillar) => (
            <li key={pillar}>{pillar}</li>
          ))}
        </ul>
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 text-xs text-slate-300">
          <p className="font-semibold text-white">Operator stance</p>
          <p className="mt-2">
            Systems of record stay. Systems of work get redesigned with governance, auditability, and explicit human
            oversight.
          </p>
        </div>
      </div>
    </section>
  );
}
