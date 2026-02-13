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
    <section className="nv-hero-section nv-hero-scanline flex min-h-screen flex-col justify-between pb-[clamp(2rem,6vh,4rem)]">
      <div className="flex flex-col gap-y-[clamp(1.5rem,4vh,3rem)] pt-[clamp(3rem,8vh,6rem)]">
        <div className="grid gap-[clamp(1.25rem,3vh,2.5rem)] lg:grid-cols-2 lg:items-start lg:gap-[clamp(2rem,4vw,3.5rem)]">
          <div className="space-y-[clamp(1rem,2.2vh,1.5rem)] text-center lg:pl-3 lg:text-left">
            <p className="nv-headline text-sm uppercase tracking-[0.2em] text-cyan-200">novendor</p>
            <h1 className="nv-brand-font text-[clamp(2rem,5vw,3.75rem)] font-semibold tracking-tight text-white">
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
            <p className="nv-subheadline max-w-2xl text-[clamp(1rem,1.45vw,1.125rem)] leading-relaxed lg:mx-0">{subheadline}</p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <Link
                href={secondaryCta.href}
                className="nv-hero-cta rounded-full border border-[rgb(var(--nv-accent-cyan)/0.45)] bg-[rgb(var(--nv-accent-cyan)/0.08)] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_16px_rgb(var(--nv-accent-cyan)/0.12)] transition-all duration-200 hover:border-[rgb(var(--nv-accent-cyan)/0.7)] hover:bg-[rgb(var(--nv-accent-cyan)/0.14)] hover:shadow-[0_0_24px_rgb(var(--nv-accent-cyan)/0.22)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--nv-accent-cyan)/0.6)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none lg:max-h-[clamp(18rem,42vh,25rem)]">
            <SystemConvergenceGraphic />
          </div>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-6 pb-8 md:pb-12">
        <CapabilityScrollPanels items={proofBullets} />
      </div>
    </section>
  );
}
