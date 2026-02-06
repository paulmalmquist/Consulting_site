import Link from 'next/link';
import { ProofBullets } from './ProofBullets';
import { SystemConvergenceGraphic } from './SystemConvergenceGraphic';

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proofBullets: Array<{ icon: string; title: string }>;
};

export function Hero({ headline, subheadline, primaryCta, secondaryCta, proofBullets }: HeroProps) {
  return (
    <section className="space-y-10 pt-4 pb-8 lg:pt-8 lg:pb-16">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">NoVendor</p>
          <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{headline}</h1>
          <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg lg:mx-0">{subheadline}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
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
        </div>
        <div className="hidden lg:block">
          <SystemConvergenceGraphic />
        </div>
      </div>
      <ProofBullets items={proofBullets} />
    </section>
  );
}
