'use client';

import { useState } from 'react';
import { CalendarCheck2, Loader2, Mail } from 'lucide-react';

type FormState = {
  attendeeName: string;
  attendeeEmail: string;
  attendeeCompany: string;
  industryTypes: string[];
  companySize: string;
  systemConcerns: string[];
  agenda: string;
  objectives: string[];
};

function buildMailto({ to, subject, body }: { to: string; subject: string; body: string }) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}

const INDUSTRY_OPTIONS = [
  'Professional Services',
  'Healthcare',
  'Manufacturing',
  'Technology',
  'Finance & Insurance',
  'Real Estate',
  'Education',
  'Retail',
  'Other'
];

const COMPANY_SIZE_OPTIONS = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const SYSTEM_CONCERN_OPTIONS = [
  'CRM (Salesforce, HubSpot, etc.)',
  'ERP / Accounting',
  'Project Management',
  'Ticketing / Support',
  'HR / Payroll',
  'BI / Analytics',
  'Marketing Automation',
  'Document Management',
  'Other'
];

const OBJECTIVE_OPTIONS = [
  'Reduce SaaS spend',
  'Improve reporting',
  'Replace CRM',
  'Modernize accounting workflows',
  'Reduce vendor lock-in',
  'AI enablement',
  'Build internal tools',
  'Consolidate data sources',
  'Automate manual processes'
];

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    attendeeName: '',
    attendeeEmail: '',
    attendeeCompany: '',
    industryTypes: [],
    companySize: '',
    systemConcerns: [],
    agenda: '',
    objectives: []
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const directEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@novendor.io';

  const toggleMultiSelect = (field: 'industryTypes' | 'systemConcerns' | 'objectives', value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value) ? prev[field].filter((v) => v !== value) : [...prev[field], value]
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setStatus('');
    setIsSubmitting(true);

    try {
      const body = [
        `Name: ${form.attendeeName}`,
        `Email: ${form.attendeeEmail}`,
        form.attendeeCompany ? `Company: ${form.attendeeCompany}` : null,
        form.companySize ? `Company Size: ${form.companySize}` : null,
        form.industryTypes.length > 0 ? `Industry: ${form.industryTypes.join(', ')}` : null,
        form.systemConcerns.length > 0 ? `System Concerns: ${form.systemConcerns.join(', ')}` : null,
        '',
        'What are you trying to solve?',
        form.agenda,
        '',
        form.objectives.length > 0 ? 'Objectives:' : null,
        form.objectives.length > 0 ? form.objectives.map((obj) => `• ${obj}`).join('\n') : null
      ]
        .filter(Boolean)
        .join('\n');

      // GitHub Pages is static-only. This drafts an email with the request.
      window.location.href = buildMailto({
        to: directEmail,
        subject: 'Book a meeting',
        body
      });

      setStatus('Request drafted. Send the email to confirm.');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to prepare request.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-xs text-slate-400">
            Name
            <input
              required
              value={form.attendeeName}
              onChange={(event) => setForm((prev) => ({ ...prev, attendeeName: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white focus:border-cyan-200/50 focus:outline-none focus:ring-1 focus:ring-cyan-200/30"
            />
          </label>
          <label className="text-xs text-slate-400">
            Work email
            <input
              type="email"
              required
              value={form.attendeeEmail}
              onChange={(event) => setForm((prev) => ({ ...prev, attendeeEmail: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white focus:border-cyan-200/50 focus:outline-none focus:ring-1 focus:ring-cyan-200/30"
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-xs text-slate-400">
            Company (optional)
            <input
              value={form.attendeeCompany}
              onChange={(event) => setForm((prev) => ({ ...prev, attendeeCompany: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white focus:border-cyan-200/50 focus:outline-none focus:ring-1 focus:ring-cyan-200/30"
            />
          </label>
          <label className="text-xs text-slate-400">
            Company Size
            <select
              value={form.companySize}
              onChange={(event) => setForm((prev) => ({ ...prev, companySize: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white focus:border-cyan-200/50 focus:outline-none focus:ring-1 focus:ring-cyan-200/30"
            >
              <option value="">Select size</option>
              {COMPANY_SIZE_OPTIONS.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <label className="text-xs text-slate-400">Industry Type (select all that apply)</label>
          <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {INDUSTRY_OPTIONS.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => toggleMultiSelect('industryTypes', industry)}
                className={`rounded-lg border px-3 py-2 text-xs transition ${
                  form.industryTypes.includes(industry)
                    ? 'border-cyan-300/50 bg-cyan-200/10 text-cyan-100'
                    : 'border-slate-700/60 bg-slate-950/40 text-slate-300 hover:border-slate-600 hover:bg-slate-900/60'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs text-slate-400">Primary System Concerns (select all that apply)</label>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {SYSTEM_CONCERN_OPTIONS.map((concern) => (
              <button
                key={concern}
                type="button"
                onClick={() => toggleMultiSelect('systemConcerns', concern)}
                className={`rounded-lg border px-3 py-2 text-xs text-left transition ${
                  form.systemConcerns.includes(concern)
                    ? 'border-cyan-300/50 bg-cyan-200/10 text-cyan-100'
                    : 'border-slate-700/60 bg-slate-950/40 text-slate-300 hover:border-slate-600 hover:bg-slate-900/60'
                }`}
              >
                {concern}
              </button>
            ))}
          </div>
        </div>

        <label className="text-xs text-slate-400">
          What are you trying to solve?
          <textarea
            required
            rows={4}
            value={form.agenda}
            onChange={(event) => setForm((prev) => ({ ...prev, agenda: event.target.value }))}
            className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white focus:border-cyan-200/50 focus:outline-none focus:ring-1 focus:ring-cyan-200/30"
          />
        </label>

        <div>
          <label className="text-xs text-slate-400">What are your main objectives? (select all that apply)</label>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {OBJECTIVE_OPTIONS.map((objective) => (
              <button
                key={objective}
                type="button"
                onClick={() => toggleMultiSelect('objectives', objective)}
                className={`rounded-lg border px-3 py-2 text-xs text-left transition ${
                  form.objectives.includes(objective)
                    ? 'border-emerald-300/50 bg-emerald-200/10 text-emerald-100'
                    : 'border-slate-700/60 bg-slate-950/40 text-slate-300 hover:border-slate-600 hover:bg-slate-900/60'
                }`}
              >
                {objective}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? <Loader2 size={16} className="animate-spin" aria-hidden="true" /> : <CalendarCheck2 size={16} aria-hidden="true" />}
            {isSubmitting ? 'Preparing...' : 'Book a meeting'}
          </button>
          <a
            href={`mailto:${directEmail}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-5 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            <Mail size={16} aria-hidden="true" />
            Email directly
          </a>
        </div>

        {status && (
          <div className="rounded-xl border border-emerald-300/30 bg-emerald-200/10 px-4 py-3 text-sm text-emerald-100">
            {status}
          </div>
        )}
        {error && <p className="text-sm text-rose-200">{error}</p>}
      </form>
    </div>
  );
}

