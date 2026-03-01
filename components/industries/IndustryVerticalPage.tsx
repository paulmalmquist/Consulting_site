import Link from 'next/link';
import { INDUSTRY_VERTICALS, type IndustryVertical } from '../../content/industry-verticals';
import { INDUSTRY_THEME_STYLES } from '../../lib/industryThemes';
import { cn } from '../ui/cn';

type IndustryVerticalPageProps = {
  industry: IndustryVertical;
};

export function IndustryVerticalPage({ industry }: IndustryVerticalPageProps) {
  const theme = INDUSTRY_THEME_STYLES[industry.themeKey];
  const contactHref = `/contact?industry=${industry.slug}`;

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/55">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1/2 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${industry.heroImageUrl})` }}
        />
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-slate-950/20 via-slate-950/45 to-slate-950" />
        <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.16)_32%,rgba(2,6,23,0.86)_68%,rgba(2,6,23,0.96)_100%)]" />
        <div className="relative z-10 min-h-[68vh] p-6 pt-[26vh] sm:p-8 sm:pt-[28vh] lg:min-h-[72vh] lg:p-10 lg:pt-[32vh]">
          <p className={cn('text-sm uppercase tracking-[0.2em]', theme.eyebrowText)}>Industry Engagement</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{industry.heroHeadline}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{industry.heroSubheadline}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={contactHref} className={theme.primaryCta}>
              Book an AI Execution Session
            </Link>
            <Link
              href="/what-we-do"
              className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/45 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              See Engagement Model
            </Link>
          </div>
          <div className="mt-5 space-y-3">
            <p className={cn('text-xs uppercase tracking-[0.12em]', theme.accentText)}>Compare industries</p>
            <div className="flex flex-wrap gap-2">
              <span className={cn('rounded-full border px-3 py-1.5 text-xs font-semibold', theme.quickSwitchActive)}>{industry.label}</span>
              {INDUSTRY_VERTICALS.filter((item) => item.slug !== industry.slug).map((item) => (
                <Link
                  key={item.slug}
                  href={`/industries/${item.slug}`}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                    theme.quickSwitchInactive
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{industry.whyItBreaks.title}</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            {industry.whyItBreaks.intro ? (
              <p className="mb-4 text-base font-medium leading-relaxed text-slate-100">{industry.whyItBreaks.intro}</p>
            ) : null}
            <ul className="space-y-2 text-sm text-slate-200">
              {industry.whyItBreaks.items.map((item) => (
                <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <div className="space-y-3">
              {industry.whyItBreaks.closing?.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-slate-300">
                  {line}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{industry.whatWeChange.title}</h2>
        {industry.whatWeChange.intro ? (
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{industry.whatWeChange.intro}</p>
        ) : null}
        <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <ul className="space-y-2 text-sm text-slate-200">
              {industry.whatWeChange.items.map((item) => (
                <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <div className="space-y-3">
              {industry.whatWeChange.closing?.map((line) => (
                <p key={line} className="text-sm leading-relaxed text-slate-300">
                  {line}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Controlled Capabilities</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {industry.reconstructCards.map((card) => (
            <article key={card.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              <p className={cn('mt-3 text-xs uppercase tracking-[0.12em]', theme.accentText)}>Operational result</p>
              <p className="mt-1 text-sm text-slate-200">{card.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Who This Is Built For</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.buyerProfile.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm leading-relaxed text-slate-300">{industry.buyerSentence}</p>
      </section>

      <section className={cn('rounded-3xl border p-5 sm:p-7', theme.impactSection)}>
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Outcomes</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-200">{industry.controlStatement}</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {industry.outcomeCards.map((card) => (
            <article key={card.title} className={cn('rounded-2xl border p-4', theme.impactCard)}>
              <h3 className="text-base font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-200">{card.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Bring Control to the Workflow.</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">
          Start with one constrained workflow and execute with fixed scope, fixed fee, and measured operating outcomes.
        </p>
        <Link
          href={contactHref}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Book an AI Execution Session
        </Link>
      </section>
    </div>
  );
}
