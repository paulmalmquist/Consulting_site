import Link from 'next/link';
import { readJson } from '../lib/content';
import { StickyNav } from '../components/home/StickyNav';
import { Hero } from '../components/home/Hero';
import { Stepper } from '../components/home/Stepper';
import { CardGrid } from '../components/home/CardGrid';
import { ExploreCarousel } from '../components/home/ExploreCarousel';
import { EngagementPhases } from '../components/home/EngagementPhases';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { CTASection } from '../components/home/CTASection';
import { VisualPlaceholder } from '../components/home/VisualPlaceholder';

type NavLink = {
  label: string;
  href: string;
};

type CTA = {
  label: string;
  href: string;
};

type HomePageData = {
  nav: {
    logo: { label: string; href: string };
    links: NavLink[];
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  sections: HomeSection[];
};

type HomeSection =
  | HeroSection
  | PatternSection
  | StructuralSection
  | PositioningSection
  | ExploreSection
  | BaselineSection
  | OutcomesSection
  | EngagementSection
  | CtaSection
  | FaqSection;

type HeroSection = {
  id: string;
  type: 'hero';
  headline: string;
  subheadline: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  proofBullets: { icon: string; title: string }[];
};

type PatternSection = {
  id: string;
  type: 'pattern';
  title: string;
  lead: string;
  bullets: string[];
  callout: string;
  visual: { title: string; description: string };
};

type StructuralSection = {
  id: string;
  type: 'structural';
  title: string;
  steps: string[];
  whyTitle: string;
  whyBody: string;
};

type PositioningSection = {
  id: string;
  type: 'positioning';
  title: string;
  cards: { title: string; description: string }[];
};

type ExploreSection = {
  id: string;
  type: 'explore';
  title: string;
  subtitle: string;
  primaryCta: CTA;
  secondaryCta: CTA;
  tiles: { title: string; description: string; href: string }[];
};

type BaselineSection = {
  id: string;
  type: 'baseline';
  title: string;
  description: string;
  cta: CTA;
};

type OutcomesSection = {
  id: string;
  type: 'outcomes';
  title: string;
  subtitle: string;
  outcomes: string[];
  deliverables: { title: string; description: string }[];
  visual: { title: string; description: string };
};

type EngagementSection = {
  id: string;
  type: 'engagement';
  title: string;
  phases: { title: string; duration: string; description: string; decision: string }[];
};

type CtaSection = {
  id: string;
  type: 'cta';
  headline: string;
  body: string;
  primaryCta: CTA;
  secondaryCta: CTA;
};

type FaqSection = {
  id: string;
  type: 'faq';
  title: string;
  items: { question: string; answer: string }[];
};

export default function HomePage() {
  const home = readJson<HomePageData>('homepage.json');

  const renderSection = (section: HomeSection) => {
    switch (section.type) {
      case 'hero':
        return (
          <section id={section.id} className="space-y-8">
            <Hero
              headline={section.headline}
              subheadline={section.subheadline}
              primaryCta={section.primaryCta}
              secondaryCta={section.secondaryCta}
              proofBullets={section.proofBullets}
            />
          </section>
        );
      case 'pattern':
        return (
          <section id={section.id} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">The pattern</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{section.title}</h2>
              <p className="text-base leading-relaxed text-slate-300">{section.lead}</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {section.bullets.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 text-sm text-slate-200">
                {section.callout}
              </div>
            </div>
            <VisualPlaceholder title={section.visual.title} description={section.visual.description} />
          </section>
        );
      case 'structural':
        return (
          <section id={section.id} className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Structural response</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{section.title}</h2>
            </div>
            <Stepper steps={section.steps} />
            <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{section.whyTitle}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{section.whyBody}</p>
            </div>
          </section>
        );
      case 'positioning':
        return (
          <section id={section.id} className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Positioning</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{section.title}</h2>
            </div>
            <CardGrid cards={section.cards} />
          </section>
        );
      case 'explore':
        return (
          <section id={section.id} className="space-y-6">
            <ExploreCarousel title={section.title} subtitle={section.subtitle} tiles={section.tiles} />
            <div className="flex flex-wrap gap-3">
              <Link
                href={section.primaryCta.href}
                className="rounded-full border border-cyan-200/70 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-200/10"
              >
                {section.primaryCta.label}
              </Link>
              <Link
                href={section.secondaryCta.href}
                className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
              >
                {section.secondaryCta.label}
              </Link>
            </div>
          </section>
        );
      case 'baseline':
        return (
          <section id={section.id} className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-3">
                <h2 className="text-xl font-semibold tracking-tight text-white md:text-2xl">{section.title}</h2>
                <p className="text-sm leading-relaxed text-slate-300">{section.description}</p>
              </div>
              <Link
                href={section.cta.href}
                className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
              >
                {section.cta.label}
              </Link>
            </div>
          </section>
        );
      case 'outcomes':
        return (
          <section id={section.id} className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Outcomes + deliverables</p>
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{section.title}</h2>
              <p className="text-base leading-relaxed text-slate-300">{section.subtitle}</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-4">
                <ul className="space-y-3 text-sm text-slate-200">
                  {section.outcomes.map((outcome) => (
                    <li key={outcome} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
                      {outcome}
                    </li>
                  ))}
                </ul>
                <VisualPlaceholder title={section.visual.title} description={section.visual.description} />
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Typical deliverables</p>
                <CardGrid cards={section.deliverables} columns="md:grid-cols-1" />
              </div>
            </div>
          </section>
        );
      case 'engagement':
        return (
          <section id={section.id} className="space-y-4">
            <EngagementPhases title={section.title} phases={section.phases} />
          </section>
        );
      case 'cta':
        return (
          <section id={section.id}>
            <CTASection
              headline={section.headline}
              body={section.body}
              primaryCta={section.primaryCta}
              secondaryCta={section.secondaryCta}
            />
          </section>
        );
      case 'faq':
        return (
          <section id={section.id}>
            <FAQAccordion title={section.title} items={section.items} />
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-12">
      <StickyNav
        logo={home.nav.logo}
        links={home.nav.links}
        primaryCta={home.nav.primaryCta}
        secondaryCta={home.nav.secondaryCta}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        {home.sections.map((section) => (
          <div key={section.id}>{renderSection(section)}</div>
        ))}
      </div>
    </div>
  );
}
