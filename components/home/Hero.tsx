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
    <section className="space-y-10 py-8 lg:py-16">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">Capability-first modernization</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">{headline}</h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{subheadline}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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
      <ProofBullets items={proofBullets} />
    </section>
  );
}
