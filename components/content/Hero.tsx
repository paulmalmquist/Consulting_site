import Link from 'next/link';

export function Hero({
  headline,
  subheadline
}: {
  headline: string;
  subheadline: string;
}) {
  return (
    <section className="grid gap-8 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-200/80">AI Readiness & Operations Redesign</p>
        <h1 className="text-3xl font-semibold leading-tight text-white md:text-4xl">{headline}</h1>
        <p className="text-lg text-slate-300">{subheadline}</p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/30"
          >
            Book intro
          </Link>
          <Link
            href="/method"
            className="rounded-full border border-slate-700/80 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
          >
            View method
          </Link>
        </div>
      </div>
      <div className="space-y-4 rounded-2xl border border-slate-800/70 bg-gradient-to-b from-slate-800/60 to-slate-900/90 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Built for CTO/COO realities</p>
        <ul className="space-y-3 text-sm text-slate-200">
          <li>Governance ready: audit trails, decision rights, and risk flags.</li>
          <li>Human-in-the-loop by design: escalation and approvals are explicit.</li>
          <li>Operational truth: align AI with the work as it is, not as it is pitched.</li>
        </ul>
        <div className="rounded-xl border border-slate-700/60 bg-slate-900/70 p-4 text-xs text-slate-300">
          <p className="font-semibold text-white">What clients feel</p>
          <p className="mt-2">
            “Fewer handoffs, fewer decisions lost in email, and a line-of-sight from request to resolution.”
          </p>
        </div>
      </div>
    </section>
  );
}
