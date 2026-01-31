import Link from 'next/link';
import { ProofBullets } from './ProofBullets';

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proofBullets: string[];
};

export function Hero({ headline, subheadline, primaryCta, secondaryCta, proofBullets }: HeroProps) {
  return (
    <section className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Capability-led modernization</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{headline}</h1>
          <p className="text-base leading-relaxed text-slate-300 md:text-lg">{subheadline}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={primaryCta.href}
              className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
            >
              {secondaryCta.label}
            </Link>
          </div>
          <ProofBullets items={proofBullets} />
        </div>
        <div className="rounded-3xl border border-slate-800/80 bg-slate-950/40 p-6">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
            <span>Control snapshot</span>
            <span className="text-cyan-200">Illustrative</span>
          </div>
          <div className="mt-5 space-y-3">
            <div className="h-3 w-5/6 rounded-full bg-slate-800" />
            <div className="h-3 w-4/6 rounded-full bg-slate-800" />
            <div className="h-3 w-3/5 rounded-full bg-slate-800" />
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Evidence chain</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full rounded-full bg-slate-800" />
                  <div className="h-2 w-4/5 rounded-full bg-slate-800" />
                </div>
              </div>
              <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Decision readiness</p>
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-5/6 rounded-full bg-slate-800" />
                  <div className="h-2 w-2/3 rounded-full bg-slate-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
