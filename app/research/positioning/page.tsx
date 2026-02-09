import type { Metadata } from 'next';
import { getResearchBySlug } from '../../../lib/content';
import { OnThisPageDesktop, OnThisPageMobile } from '../../../components/research/OnThisPage';
import { PositioningWorksheet } from '../../../components/research/PositioningWorksheet';

type CalloutSection = {
  type: 'callout';
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: 'Positioning Questions',
  description: 'Interactive worksheet for clarifying target, category, differentiators, and proof strategy.'
};

const ON_PAGE_LINKS = [
  { id: 'eight-questions', label: 'The 8 Questions' },
  { id: 'positioning-template', label: '2-Sentence Template' },
  { id: 'inaction', label: 'Consequences of Inaction' },
  { id: 'follow-on-paths', label: 'Follow-On Paths' }
] as const;

export default function ResearchPositioningPage() {
  const entry = getResearchBySlug('positioning');
  const callout = entry.sections.find((section) => section.type === 'callout') as CalloutSection | undefined;

  return (
    <div className="space-y-6 lg:space-y-8">
      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200">Research / Positioning</p>
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{entry.title}</h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{entry.summary}</p>
        {callout && (
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-200/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">{callout.title}</p>
            <p className="mt-1 text-sm text-emerald-100">{callout.body}</p>
          </div>
        )}
      </section>

      <OnThisPageMobile links={[...ON_PAGE_LINKS]} />

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
        <PositioningWorksheet entry={entry} />
        <OnThisPageDesktop links={[...ON_PAGE_LINKS]} />
      </div>
    </div>
  );
}
