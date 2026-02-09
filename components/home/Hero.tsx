import Link from 'next/link';
import { CapabilityScrollPanels } from './CapabilityScrollPanels';
import { SystemConvergenceGraphic } from './SystemConvergenceGraphic';

type HeroProps = {
  headline: string;
  subheadline: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  proofBullets: Array<{ icon: string; title: string }>;
};

export function Hero({ headline, subheadline, primaryCta, secondaryCta, proofBullets }: HeroProps) {
  const notIndex = headline.indexOf('Not');
  const vendorsIndex = headline.indexOf('Vendors');
  const hasEmphasis = notIndex !== -1 && vendorsIndex !== -1 && vendorsIndex > notIndex;
  const beforeNot = hasEmphasis ? headline.slice(0, notIndex) : headline;
  const afterNot = hasEmphasis ? headline.slice(notIndex + 1) : '';
  const vendorsOffset = hasEmphasis ? afterNot.indexOf('Vendors') : -1;
  const beforeVendors = hasEmphasis && vendorsOffset !== -1 ? afterNot.slice(0, vendorsOffset) : '';
  const afterVendors = hasEmphasis && vendorsOffset !== -1 ? afterNot.slice(vendorsOffset + 1) : '';

  return (
    <section className="nv-hero-scanline space-y-10 pt-4 pb-8 lg:space-y-3 lg:pt-6 lg:pb-6">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-6 text-center lg:pl-3 lg:text-left">
          <p className="nv-headline text-sm uppercase tracking-[0.2em] text-cyan-200">novendor</p>
          <h1 className="nv-brand-font text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {hasEmphasis ? (
              <>
                {beforeNot}
                <span className="nv-hero-emphasis">N</span>
                {beforeVendors}
                <span className="nv-hero-emphasis">V</span>
                {afterVendors}
              </>
            ) : (
              headline
            )}
          </h1>
          <p className="nv-subheadline max-w-2xl text-base leading-relaxed md:text-lg lg:mx-0">{subheadline}</p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
            <Link
              href={primaryCta.href}
              className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
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
        <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <SystemConvergenceGraphic />
        </div>
      </div>
      <CapabilityScrollPanels items={proofBullets} />
    </section>
  );
}
