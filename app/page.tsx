import Link from 'next/link';
import { Hero } from '../components/home/Hero';
import { CredibilitySection } from '../components/marketing/CredibilitySection';
import { CategoryMessagingFramework } from '../components/marketing/CategoryMessagingFramework';

const PAIN_POINTS = [
  'Tool sprawl across portfolio companies',
  'Rising software costs',
  'Inconsistent operational performance',
  'Slow reporting cycles',
  'Limited data visibility'
];

const VALUE_POINTS = [
  'Reduce operating costs',
  'Standardize workflows',
  'Automate reporting',
  'Improve execution speed',
  'Create scalable internal systems'
];

const IMPACT_AREAS = [
  {
    title: 'Cost Optimization',
    description: 'Reduce SaaS spend across multiple portfolio companies.'
  },
  {
    title: 'Operational Consistency',
    description: 'Standardize workflows across assets.'
  },
  {
    title: 'Faster Insights',
    description: 'Improve reporting speed and visibility.'
  },
  {
    title: 'Enterprise Value Creation',
    description: 'Stronger systems lead to stronger multiples.'
  }
];

const USE_CASES = ['Credit platforms', 'Real estate portfolios', 'Financial services roll-ups', 'Ops-heavy service businesses'];

export default function HomePage() {
  return (
    <div className="space-y-12">
      <section id="overview" className="space-y-8">
        <Hero
          headline="Increase Portfolio Value by Rebuilding Operational Infrastructure"
          subheadline="We help PE firms reduce SaaS spend, automate workflows, and create internal AI systems that improve margins across portfolio companies."
          primaryCta={{ label: 'Book a Portfolio Strategy Session', href: '/contact' }}
          secondaryCta={{ label: 'Book a Portfolio Strategy Session', href: '/contact' }}
          proofBullets={[
            { icon: '📌', title: 'Operational Assessment' },
            { icon: '🤖', title: 'AI Concierge' },
            { icon: '🧭', title: 'Legacy SaaS Migration' }
          ]}
        />
      </section>

      <CredibilitySection />

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Private Equity Operating Teams Are Under Pressure</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {PAIN_POINTS.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-emerald-100">AI-native infrastructure changes this.</p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Where We Drive Value Across the Portfolio</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We partner with PE operating teams to reduce operating costs, standardize execution, and improve reporting speed through internal AI systems.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {VALUE_POINTS.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Impact Areas</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {IMPACT_AREAS.map((area) => (
            <article key={area.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <h3 className="text-base font-semibold text-white">{area.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Use Cases</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {USE_CASES.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      <CategoryMessagingFramework />

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/85 to-emerald-900/20 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Turn Operations Into a Value Creation Lever</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
          Identify where internal infrastructure changes can improve portfolio performance and operating multiples.
        </p>
        <Link
          href="/contact"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10"
        >
          Schedule a PE Strategy Call
        </Link>
      </section>
    </div>
  );
}
