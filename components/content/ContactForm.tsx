'use client';

import { useMemo, useState } from 'react';
import { CalendarCheck2, Download, ExternalLink, Loader2, Mail, RefreshCcw } from 'lucide-react';

type BookingResponse = {
  bookingId: string;
  startUtc: string;
  endUtc: string;
  timezone: string;
  deliveryMode: 'smtp' | 'outbox';
  calendar: {
    downloadIcsUrl: string;
    googleCalendarUrl: string;
    outlookCalendarUrl: string;
  };
};

type FormState = {
  attendeeName: string;
  attendeeEmail: string;
  attendeeCompany: string;
  agenda: string;
  startLocal: string;
  durationMinutes: number;
};

function buildDefaultStartLocal(): string {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  now.setMinutes(0, 0, 0);
  now.setHours(Math.max(9, now.getHours()), 0, 0, 0);
  return now.toISOString().slice(0, 16);
}

function formatLocal(startUtc: string): string {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'full',
    timeStyle: 'short'
  }).format(new Date(startUtc));
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({
    attendeeName: '',
    attendeeEmail: '',
    attendeeCompany: '',
    agenda: '',
    startLocal: buildDefaultStartLocal(),
    durationMinutes: 45
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState<BookingResponse | null>(null);
  const [adminToken, setAdminToken] = useState('');
  const [resendStatus, setResendStatus] = useState('');
  const [isResending, setIsResending] = useState(false);
  const showAdminResend = process.env.NEXT_PUBLIC_ENABLE_ADMIN_RESEND === 'true';
  const directEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'hello@novendor.io';

  const timezone = useMemo(() => Intl.DateTimeFormat().resolvedOptions().timeZone ?? 'UTC', []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setStatus('');
    setIsSubmitting(true);

    try {
      const start = new Date(form.startLocal);
      if (Number.isNaN(start.getTime())) {
        throw new Error('Choose a valid meeting time.');
      }

      const response = await fetch('/api/bookings/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          attendeeName: form.attendeeName,
          attendeeEmail: form.attendeeEmail,
          attendeeCompany: form.attendeeCompany,
          agenda: form.agenda,
          startUtc: start.toISOString(),
          durationMinutes: form.durationMinutes,
          timezone
        })
      });

      const payload = (await response.json()) as BookingResponse | { error?: string };
      if (!response.ok || !('bookingId' in payload)) {
        const errorPayload = payload as { error?: string };
        throw new Error(errorPayload.error ?? 'Unable to complete booking.');
      }

      setConfirmation(payload);
      if (payload.deliveryMode === 'outbox') {
        setStatus('Calendar invite generated. Email delivery is using local outbox mode.');
      } else {
        setStatus('Calendar invite sent');
      }
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Unable to complete booking.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    if (!confirmation || !adminToken) {
      return;
    }

    setResendStatus('');
    setIsResending(true);
    try {
      const response = await fetch(`/api/bookings/${confirmation.bookingId}/resend/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': adminToken
        }
      });
      const payload = (await response.json()) as { error?: string; sequence?: number; deliveryMode?: string };
      if (!response.ok) {
        throw new Error(payload.error ?? 'Resend failed.');
      }
      setResendStatus(`Invite resent. Sequence ${payload.sequence ?? '?'}.`);
    } catch (resendError) {
      setResendStatus(resendError instanceof Error ? resendError.message : 'Resend failed.');
    } finally {
      setIsResending(false);
    }
  };

  const bookingTime = confirmation ? formatLocal(confirmation.startUtc) : '';

  return (
    <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
      {!confirmation && (
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

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-xs text-slate-400">
              Company (optional)
              <input
                value={form.attendeeCompany}
                onChange={(event) => setForm((prev) => ({ ...prev, attendeeCompany: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
              />
            </label>
            <label className="text-xs text-slate-400">
              Meeting start
              <input
                type="datetime-local"
                required
                value={form.startLocal}
                onChange={(event) => setForm((prev) => ({ ...prev, startLocal: event.target.value }))}
                className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-xs text-slate-400">
              Duration
              <select
                value={form.durationMinutes}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, durationMinutes: Number(event.target.value) }))
                }
                className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
              >
                <option value={30}>30 minutes</option>
                <option value={45}>45 minutes</option>
                <option value={60}>60 minutes</option>
              </select>
            </label>
            <div className="rounded-lg border border-slate-700/60 bg-slate-950/30 px-3 py-2 text-xs text-slate-300">
              <p className="font-medium text-slate-200">Timezone</p>
              <p className="mt-1">{timezone}</p>
            </div>
          </div>

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
              {isSubmitting ? 'Booking...' : 'Book meeting'}
            </button>
            <a
              href={`mailto:${directEmail}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 px-5 py-2 text-sm text-slate-100 hover:border-slate-500"
            >
              <Mail size={16} aria-hidden="true" />
              Email directly
            </a>
          </div>
        </form>
      )}

      {confirmation && (
        <section className="space-y-4 rounded-2xl border border-emerald-300/30 bg-emerald-200/10 p-4">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-emerald-100">Calendar invite sent</p>
            <p className="text-sm text-slate-200">Meeting time: {bookingTime}</p>
            <p className="text-xs text-slate-300">Your calendar will notify you based on your reminder settings.</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={confirmation.calendar.downloadIcsUrl}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/70"
            >
              <Download size={14} aria-hidden="true" />
              Download .ics
            </a>
            <a
              href={confirmation.calendar.googleCalendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/70"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Add to Google Calendar
            </a>
            <a
              href={confirmation.calendar.outlookCalendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/70"
            >
              <ExternalLink size={14} aria-hidden="true" />
              Add to Outlook
            </a>
          </div>

          <p className="text-xs text-slate-300">
            If links do not open correctly, open the attached calendar file.
          </p>

          {showAdminResend && (
            <div className="space-y-2 rounded-xl border border-slate-700/80 bg-slate-950/45 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-emerald-200">Admin-only</p>
              <div className="flex flex-wrap gap-2">
                <input
                  type="password"
                  value={adminToken}
                  onChange={(event) => setAdminToken(event.target.value)}
                  placeholder="Admin token"
                  className="min-w-[220px] flex-1 rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-xs text-white"
                />
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isResending || !adminToken}
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/70 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isResending ? <Loader2 size={14} className="animate-spin" aria-hidden="true" /> : <RefreshCcw size={14} aria-hidden="true" />}
                  Resend invite
                </button>
              </div>
              {resendStatus && <p className="text-xs text-slate-300">{resendStatus}</p>}
            </div>
          )}
        </section>
      )}

      {status && <p className="text-xs text-emerald-200">{status}</p>}
      {error && <p className="text-xs text-rose-300">{error}</p>}
    </div>
  );
}
