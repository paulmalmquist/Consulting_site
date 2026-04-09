import Link from 'next/link';
import { Building2, Scale, Stethoscope, Wallet } from 'lucide-react';
import { INDUSTRY_VERTICALS, type IndustryVertical } from '../../content/industry-verticals';
import { INDUSTRY_THEME_STYLES } from '../../lib/industryThemes';
import { cn } from '../ui/cn';
import { BeforeAfterDiagram } from '../visual/BeforeAfterDiagram';
import { ControlLayerDiagram } from '../visual/ControlLayerDiagram';
import { SloganBadge } from '../visual/SloganBadge';

const labels: Record<IndustryVertical['slug'], { label: string; Icon: typeof Building2; microCase: string }> = {
  'real-estate-private-equity': {
    label: 'Audit Aligned',
    Icon: Building2,
    microCase: 'A mid-market PE firm reduced capital call errors from 5% to 1% in 8 weeks by standardizing workflow states.'
  },
  'consumer-credit': {
    label: 'Credit Integrity',
    Icon: Wallet,
    microCase: 'A lender cut exception routing delays by 29% in 9 weeks after replacing inbox triage with controlled state transitions.'
  },
  medical: {
    label: 'Reimbursement Visibility',
    Icon: Stethoscope,
    microCase: 'A multi-site provider reduced denial rework by 27% in 10 weeks through rule-governed denial workflows.'
  },
  legal: {
    label: 'Matter Clarity',
    Icon: Scale,
    microCase: 'A legal operations team reduced matter intake handoff errors by 34% in 8 weeks with controlled intake states.'
  }
};

type IndustryVerticalPageProps = { industry: IndustryVertical };

export function IndustryVerticalPage({ industry }: IndustryVerticalPageProps) {
  const theme = INDUSTRY_THEME_STYLES[industry.themeKey];
  const contactHref = `/contact?industry=${industry.slug}`;
  const industryLabel = labels[industry.slug];

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <SloganBadge />
        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-slate-400">{industry.label}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">{industry.heroHeadline} in 12 weeks with a controlled execution layer.</h1>
        <p className="mt-4 max-w-3xl text-sm text-slate-300 sm:text-base">{industry.heroSubheadline}</p>
        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100">
          <industryLabel.Icon size={14} aria-hidden="true" /> {industryLabel.label}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">Why It Breaks</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.whyItBreaks.items.slice(0, 4).map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-950/40 p-3">{item}</li>
          ))}
        </ul>
      </section>

      <BeforeAfterDiagram title={`${industry.label}: Before → After`} />
      <ControlLayerDiagram title={`${industry.label} Control Layer`} />

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <h2 className="text-2xl font-semibold text-white">System We Build</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.whatWeChange.items.slice(0, 4).map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-950/40 p-3">{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
        <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">Micro case snippet</p>
        <p className="mt-2 text-sm text-slate-300">{industryLabel.microCase}</p>
      </section>

      <section className={cn('rounded-3xl border p-6', theme.impactSection)}>
        <SloganBadge className="mb-4" />
        <h2 className="text-2xl font-semibold text-white">Typical Results</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>25–40% reduction in manual reconciliation</li>
          <li>20–35% faster cycle times on the target workflow</li>
          <li>90%+ traceability on approvals, exceptions, and outputs</li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-slate-700/80 px-3 py-1 text-xs text-slate-200">Own Your Operating Logic</span>
          <span className="rounded-full border border-slate-700/80 px-3 py-1 text-xs text-slate-200">Controlled execution, not tool sprawl</span>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Action</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">Start with one workflow, prove outcomes, then scale.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href={contactHref} className={theme.primaryCta}>Fix your {industry.label.toLowerCase()} workflow</Link>
          <Link href="/operational-assessment" className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white">See your first use case</Link>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          {INDUSTRY_VERTICALS.filter((item) => item.slug !== industry.slug).map((item) => (
            <Link key={item.slug} href={`/industries/${item.slug}`} className={cn('rounded-full border px-3 py-1.5 text-xs font-semibold', theme.quickSwitchInactive)}>{item.label}</Link>
          ))}
        </div>
      </section>
    </div>
  );
}
