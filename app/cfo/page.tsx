import Link from 'next/link';
import { CredibilitySection } from '../../components/marketing/CredibilitySection';
import { CategoryMessagingFramework } from '../../components/marketing/CategoryMessagingFramework';

const CFO_FOCUS = ['Cost discipline', 'ROI visibility', 'Operational efficiency', 'Scalable infrastructure'];

const CFO_PRIORITIES = [
  {
    title: 'Lower Fixed Costs',
    description: 'Consolidate tools.'
  },
  {
    title: 'Higher Productivity',
    description: 'Automate manual workflows.'
  },
  {
    title: 'Clear ROI',
    description: 'Tie AI deployment to financial outcomes.'
  },
  {
    title: 'Better Data Control',
    description: 'Reduce dependence on third-party platforms.'
  }
];

const RESULTS = ['Reduced SaaS budgets', 'Faster reporting cycles', 'Lower operational overhead', 'Improved team productivity'];

export default function CfoPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">For CFOs</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Reduce Software Spend Without Slowing the Business
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We help CFOs identify where internal AI systems can replace high-cost tools and improve operational efficiency.
        </p>
        <Link
          href="/operational-assessment"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10"
        >
          Request a Cost Reduction Assessment
        </Link>
      </section>

      <CredibilitySection />

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Financial Leadership Priorities</h2>
        <p className="mt-3 text-sm text-slate-300">You are responsible for measurable financial and operating outcomes.</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {CFO_FOCUS.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">What CFOs Care About</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {CFO_PRIORITIES.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <h3 className="text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Results Framing</h2>
        <p className="mt-3 text-sm text-slate-300">Common outcomes include:</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </article>
          ))}
        </div>
      </section>

      <CategoryMessagingFramework />

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/85 to-emerald-900/20 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Find Your Largest Cost-Saving Opportunities</h2>
        <Link
          href="/operational-assessment"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10"
        >
          Schedule a CFO Assessment
        </Link>
      </section>
    </div>
  );
}
