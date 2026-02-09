'use client';

import { useState } from 'react';
import { CalendarCheck2, Loader2, Mail } from 'lucide-react';

type FormState = {
  attendeeName: string;
  attendeeEmail: string;
  attendeeCompany: string;
  agenda: string;
};

function buildMailto({ to, subject, body }: { to: string; subject: string; body: string }) {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${to}?${params.toString()}`;
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    attendeeName: '',
    attendeeEmail: '',
    attendeeCompany: '',
    agenda: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const directEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@novendor.io';

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
        '',
        'Agenda:',
        form.agenda
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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-xs text-slate-400">
            Name
            <input
              required
              value={form.attendeeName}
              onChange={(event) => setForm((prev) => ({ ...prev, attendeeName: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
            />
          </label>
          <label className="text-xs text-slate-400">
            Work email
            <input
              type="email"
              required
              value={form.attendeeEmail}
              onChange={(event) => setForm((prev) => ({ ...prev, attendeeEmail: event.target.value }))}
              className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
            />
          </label>
        </div>

        <label className="text-xs text-slate-400">
          Company (optional)
          <input
            value={form.attendeeCompany}
            onChange={(event) => setForm((prev) => ({ ...prev, attendeeCompany: event.target.value }))}
            className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
          />
        </label>

        <label className="text-xs text-slate-400">
          What are you trying to solve?
          <textarea
            required
            rows={4}
            value={form.agenda}
            onChange={(event) => setForm((prev) => ({ ...prev, agenda: event.target.value }))}
            className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
          />
        </label>

        <div className="flex flex-wrap gap-3">
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

