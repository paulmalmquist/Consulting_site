'use client';

import { useSearchParams } from 'next/navigation';
import { INDUSTRY_VERTICAL_BY_SLUG } from '../../content/industry-verticals';
import { ContactForm } from './ContactForm';

export function ContactPageContent() {
  const searchParams = useSearchParams();
  const industrySlug = searchParams.get('industry');
  const selectedIndustry =
    industrySlug && Object.prototype.hasOwnProperty.call(INDUSTRY_VERTICAL_BY_SLUG, industrySlug)
      ? INDUSTRY_VERTICAL_BY_SLUG[industrySlug as keyof typeof INDUSTRY_VERTICAL_BY_SLUG]
      : undefined;

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        {selectedIndustry && (
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industry context: {selectedIndustry.label}</p>
        )}
        <h1
          className={
            selectedIndustry ? 'mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl' : 'text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl'
          }
        >
          Book a meeting.
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          You will receive a calendar invite with Google, Outlook, and ICS options after confirmation.
        </p>
      </section>
      <ContactForm key={selectedIndustry?.slug ?? 'generic'} defaultIndustry={selectedIndustry?.contactLabel} />
    </div>
  );
}
