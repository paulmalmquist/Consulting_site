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

export function Hero({ headline, subheadline, secondaryCta, proofBullets }: HeroProps) {
  const notIndex = headline.indexOf('Not');
  const vendorsIndex = headline.indexOf('Vendors');
  const hasEmphasis = notIndex !== -1 && vendorsIndex !== -1 && vendorsIndex > notIndex;
  const beforeNot = hasEmphasis ? headline.slice(0, notIndex) : headline;
  const afterNot = hasEmphasis ? headline.slice(notIndex + 1) : '';
  const vendorsOffset = hasEmphasis ? afterNot.indexOf('Vendors') : -1;
  const beforeVendors = hasEmphasis && vendorsOffset !== -1 ? afterNot.slice(0, vendorsOffset) : '';
  const afterVendors = hasEmphasis && vendorsOffset !== -1 ? afterNot.slice(vendorsOffset + 1) : '';

  return (
    <section className="nv-hero-section flex flex-col">
      <div className="nv-hero-scanline nv-hero-content-area space-y-10 pt-4 pb-8 lg:space-y-6 lg:pt-12 lg:pb-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start lg:gap-12">
          <div className="space-y-6 text-center lg:pl-3 lg:text-left lg:pt-8">
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
                href={secondaryCta.href}
                className="nv-hero-cta rounded-full border border-[rgb(var(--nv-accent-cyan)/0.45)] bg-[rgb(var(--nv-accent-cyan)/0.08)] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgb(var(--nv-accent-cyan)/0.12)] transition-all duration-200 hover:border-[rgb(var(--nv-accent-cyan)/0.7)] hover:bg-[rgb(var(--nv-accent-cyan)/0.14)] hover:shadow-[0_0_24px_rgb(var(--nv-accent-cyan)/0.22)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nv-accent-cyan)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:max-h-[380px]">
            <SystemConvergenceGraphic />
          </div>
        </div>
      </div>
      <div className="nv-hero-cards-container">
        <CapabilityScrollPanels items={proofBullets} />
      </div>
    </section>
  );
}
