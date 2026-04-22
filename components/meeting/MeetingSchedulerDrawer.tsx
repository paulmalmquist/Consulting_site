'use client';

import { useReducer, useCallback } from 'react';
import { CalendarCheck2, Loader2, ChevronRight, ChevronLeft, CheckCircle2, AlertCircle } from 'lucide-react';

// ─── Constants ────────────────────────────────────────────────────────────────

const MEETING_PURPOSES = [
  'Discovery call',
  'Strategy session',
  'Technical review',
  'Vendor evaluation',
  'Executive briefing',
  'Project kickoff',
  'Other',
] as const;

const DURATION_OPTIONS = [
  { label: '30 minutes', value: 30 },
  { label: '45 minutes', value: 45 },
  { label: '60 minutes', value: 60 },
] as const;

const TIMEZONES = [
  { label: 'Eastern (ET)', value: 'America/New_York' },
  { label: 'Central (CT)', value: 'America/Chicago' },
  { label: 'Mountain (MT)', value: 'America/Denver' },
  { label: 'Pacific (PT)', value: 'America/Los_Angeles' },
  { label: 'Toronto', value: 'America/Toronto' },
  { label: 'London (GMT)', value: 'Europe/London' },
  { label: 'Paris (CET)', value: 'Europe/Paris' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST)', value: 'Australia/Sydney' },
] as const;

function detectBrowserTimezone(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TIMEZONES.some((t) => t.value === tz)) return tz;
  } catch {
    // ignore
  }
  return 'America/New_York';
}

function todayStr(): string {
  return new Date().toISOString().split('T')[0];
}

// ─── State ────────────────────────────────────────────────────────────────────

type Step = 1 | 2 | 3 | 4 | 5;

type FormData = {
  name: string;
  email: string;
  company: string;
  purpose: string;
  agenda: string;
  duration: number;
  date: string;
  time: string;
  timezone: string;
};

type SubmitState =
  | { phase: 'idle' }
  | { phase: 'loading' }
  | { phase: 'success'; email: string; meetingId: string }
  | { phase: 'error'; message: string };

type State = {
  step: Step;
  form: FormData;
  submit: SubmitState;
};

type Action =
  | { type: 'SET_FIELD'; field: keyof FormData; value: string | number }
  | { type: 'NEXT' }
  | { type: 'BACK' }
  | { type: 'SUBMIT_START' }
  | { type: 'SUBMIT_SUCCESS'; email: string; meetingId: string }
  | { type: 'SUBMIT_ERROR'; message: string }
  | { type: 'RESET' };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, form: { ...state.form, [action.field]: action.value } };
    case 'NEXT':
      return { ...state, step: Math.min(state.step + 1, 5) as Step };
    case 'BACK':
      return { ...state, step: Math.max(state.step - 1, 1) as Step };
    case 'SUBMIT_START':
      return { ...state, submit: { phase: 'loading' } };
    case 'SUBMIT_SUCCESS':
      return { ...state, step: 5, submit: { phase: 'success', email: action.email, meetingId: action.meetingId } };
    case 'SUBMIT_ERROR':
      return { ...state, submit: { phase: 'error', message: action.message } };
    case 'RESET':
      return { ...initialState() };
  }
}

function initialState(): State {
  return {
    step: 1,
    form: {
      name: '',
      email: '',
      company: '',
      purpose: '',
      agenda: '',
      duration: 30,
      date: '',
      time: '',
      timezone: detectBrowserTimezone(),
    },
    submit: { phase: 'idle' },
  };
}

// ─── Styles ───────────────────────────────────────────────────────────────────

const inputCls =
  'w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:border-cyan-200/50 focus:outline-none focus:ring-1 focus:ring-cyan-200/30';

const labelCls = 'block text-xs text-slate-400 mb-1.5';

const chipBase =
  'rounded-lg border px-3 py-2 text-xs text-left transition-colors cursor-pointer';

const chipActive = 'border-cyan-300/50 bg-cyan-200/10 text-cyan-100';
const chipInactive = 'border-slate-700/60 bg-slate-950/40 text-slate-300 hover:border-slate-600 hover:bg-slate-900/60';

// ─── Step indicators ──────────────────────────────────────────────────────────

const STEP_LABELS = ['Contact', 'Purpose', 'Duration', 'Schedule', 'Confirm'];

function StepDots({ step }: { step: Step }) {
  return (
    <div className="flex items-center gap-1.5 mb-6">
      {STEP_LABELS.map((label, i) => {
        const num = (i + 1) as Step;
        const active = num === step;
        const done = num < step;
        return (
          <div key={label} className="flex items-center gap-1.5">
            <div
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                done
                  ? 'bg-emerald-400'
                  : active
                    ? 'bg-cyan-400 scale-125'
                    : 'bg-slate-700'
              }`}
              aria-label={label}
            />
          </div>
        );
      })}
      <span className="ml-2 text-xs text-slate-500">{STEP_LABELS[step - 1]}</span>
    </div>
  );
}

// ─── Individual steps ─────────────────────────────────────────────────────────

function StepContact({ form, dispatch }: { form: FormData; dispatch: React.Dispatch<Action> }) {
  const canAdvance = form.name.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);

  return (
    <div className="space-y-4">
      <div>
        <label className={labelCls} htmlFor="ws-name">Your name</label>
        <input
          id="ws-name"
          required
          autoComplete="name"
          value={form.name}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'name', value: e.target.value })}
          className={inputCls}
          placeholder="Jane Smith"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="ws-email">Work email</label>
        <input
          id="ws-email"
          type="email"
          required
          autoComplete="email"
          value={form.email}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'email', value: e.target.value })}
          className={inputCls}
          placeholder="jane@company.com"
        />
      </div>
      <div>
        <label className={labelCls} htmlFor="ws-company">Company (optional)</label>
        <input
          id="ws-company"
          autoComplete="organization"
          value={form.company}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'company', value: e.target.value })}
          className={inputCls}
          placeholder="Acme Corp"
        />
      </div>
      <StepFooter canAdvance={canAdvance} dispatch={dispatch} showBack={false} />
    </div>
  );
}

function StepPurpose({ form, dispatch }: { form: FormData; dispatch: React.Dispatch<Action> }) {
  const canAdvance = form.purpose !== '';

  return (
    <div className="space-y-4">
      <div>
        <p className={labelCls}>Meeting type</p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {MEETING_PURPOSES.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => dispatch({ type: 'SET_FIELD', field: 'purpose', value: p })}
              className={`${chipBase} ${form.purpose === p ? chipActive : chipInactive}`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="ws-agenda">What do you want to cover? (optional)</label>
        <textarea
          id="ws-agenda"
          rows={3}
          value={form.agenda}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'agenda', value: e.target.value })}
          className={inputCls}
          placeholder="Context, questions, goals…"
        />
      </div>
      <StepFooter canAdvance={canAdvance} dispatch={dispatch} showBack />
    </div>
  );
}

function StepDuration({ form, dispatch }: { form: FormData; dispatch: React.Dispatch<Action> }) {
  return (
    <div className="space-y-4">
      <div>
        <p className={labelCls}>Duration</p>
        <div className="flex flex-col gap-2 sm:flex-row">
          {DURATION_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => dispatch({ type: 'SET_FIELD', field: 'duration', value: opt.value })}
              className={`${chipBase} flex-1 text-center py-3 ${form.duration === opt.value ? chipActive : chipInactive}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <StepFooter canAdvance={form.duration > 0} dispatch={dispatch} showBack />
    </div>
  );
}

function StepSchedule({ form, dispatch }: { form: FormData; dispatch: React.Dispatch<Action> }) {
  const canAdvance = form.date !== '' && form.time !== '' && form.timezone !== '';

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="ws-date">Date</label>
          <input
            id="ws-date"
            type="date"
            min={todayStr()}
            value={form.date}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'date', value: e.target.value })}
            className={inputCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="ws-time">Time</label>
          <input
            id="ws-time"
            type="time"
            value={form.time}
            onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'time', value: e.target.value })}
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="ws-tz">Timezone</label>
        <select
          id="ws-tz"
          value={form.timezone}
          onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'timezone', value: e.target.value })}
          className={inputCls}
        >
          {TIMEZONES.map((tz) => (
            <option key={tz.value} value={tz.value}>
              {tz.label}
            </option>
          ))}
        </select>
      </div>
      <StepFooter canAdvance={canAdvance} dispatch={dispatch} showBack />
    </div>
  );
}

function StepConfirm({
  form,
  submit,
  dispatch,
}: {
  form: FormData;
  submit: SubmitState;
  dispatch: React.Dispatch<Action>;
}) {
  const tzLabel = TIMEZONES.find((t) => t.value === form.timezone)?.label ?? form.timezone;
  const durationLabel = DURATION_OPTIONS.find((d) => d.value === form.duration)?.label ?? `${form.duration} min`;

  if (submit.phase === 'success') {
    return (
      <div className="space-y-4 text-center py-4">
        <CheckCircle2 size={48} className="mx-auto text-emerald-400" />
        <div>
          <p className="text-lg font-semibold text-white">Meeting scheduled.</p>
          <p className="text-sm text-slate-300 mt-1">
            Calendar invite sent to <span className="text-cyan-300">{submit.email}</span>.
          </p>
        </div>
        <p className="text-xs text-slate-500">Meeting ID: {submit.meetingId}</p>
        <button
          type="button"
          onClick={() => dispatch({ type: 'RESET' })}
          className="mt-2 text-xs text-slate-400 underline underline-offset-2 hover:text-slate-200"
        >
          Schedule another
        </button>
      </div>
    );
  }

  const rows: Array<[string, string]> = [
    ['Name', form.name],
    ['Email', form.email],
    form.company ? ['Company', form.company] : null,
    ['Type', form.purpose],
    form.agenda ? ['Notes', form.agenda] : null,
    ['Duration', durationLabel],
    ['Date', form.date],
    ['Time', `${form.time} ${tzLabel}`],
  ].filter(Boolean) as Array<[string, string]>;

  return (
    <div className="space-y-5">
      <dl className="space-y-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex gap-3">
            <dt className="w-20 shrink-0 text-xs text-slate-500 pt-0.5">{label}</dt>
            <dd className="text-sm text-slate-200 break-words">{value}</dd>
          </div>
        ))}
      </dl>

      {submit.phase === 'error' && (
        <div className="flex items-start gap-2 rounded-xl border border-rose-300/30 bg-rose-200/10 px-4 py-3 text-sm text-rose-200">
          <AlertCircle size={16} className="mt-0.5 shrink-0" />
          {submit.message}
        </div>
      )}

      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between pt-1">
        <button
          type="button"
          onClick={() => dispatch({ type: 'BACK' })}
          disabled={submit.phase === 'loading'}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-700/70 px-5 py-2.5 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white disabled:opacity-50"
        >
          <ChevronLeft size={15} />
          Back
        </button>
        <ConfirmButton submit={submit} dispatch={dispatch} />
      </div>
    </div>
  );
}

function ConfirmButton({
  submit,
  dispatch,
}: {
  submit: SubmitState;
  dispatch: React.Dispatch<Action>;
}) {
  const isLoading = submit.phase === 'loading';

  return (
    <button
      type="submit"
      disabled={isLoading}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/70 px-6 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {isLoading ? (
        <>
          <Loader2 size={16} className="animate-spin" />
          Scheduling…
        </>
      ) : (
        <>
          <CalendarCheck2 size={16} />
          {submit.phase === 'error' ? 'Try again' : 'Schedule meeting'}
        </>
      )}
    </button>
  );
}

function StepFooter({
  canAdvance,
  dispatch,
  showBack,
}: {
  canAdvance: boolean;
  dispatch: React.Dispatch<Action>;
  showBack: boolean;
}) {
  return (
    <div className={`flex pt-2 ${showBack ? 'justify-between' : 'justify-end'}`}>
      {showBack && (
        <button
          type="button"
          onClick={() => dispatch({ type: 'BACK' })}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/70 px-5 py-2.5 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white"
        >
          <ChevronLeft size={15} />
          Back
        </button>
      )}
      <button
        type="button"
        disabled={!canAdvance}
        onClick={() => dispatch({ type: 'NEXT' })}
        className="inline-flex items-center gap-1.5 rounded-full border border-cyan-300/40 bg-slate-900/70 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
        <ChevronRight size={15} />
      </button>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export type MeetingSchedulerDrawerProps = {
  /** Ignored in this component but retained for API compatibility with ContactForm */
  defaultIndustry?: string;
};

export function MeetingSchedulerDrawer(_props: MeetingSchedulerDrawerProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  const { step, form, submit } = state;

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (step < 4) return; // shouldn't happen but guard anyway
      if (submit.phase === 'loading') return;

      dispatch({ type: 'SUBMIT_START' });

      try {
        const body = {
          title: form.purpose === 'Other' ? 'Meeting' : form.purpose,
          purpose: form.purpose,
          description: form.agenda || undefined,
          attendees: [
            {
              name: form.name,
              email: form.email,
              role: 'required',
            },
          ],
          start_time: `${form.date}T${form.time}:00`,
          timezone: form.timezone,
          duration_minutes: form.duration,
        };

        const response = await fetch('/api/meetings/create', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });

        const data = (await response.json()) as { meeting?: { id: string }; error?: string };

        if (!response.ok) {
          const msg =
            response.status === 409
              ? 'That time slot was just taken — please go back and choose another time.'
              : (data.error ?? 'Unable to schedule meeting. Please try again.');
          dispatch({ type: 'SUBMIT_ERROR', message: msg });
          return;
        }

        dispatch({
          type: 'SUBMIT_SUCCESS',
          email: form.email,
          meetingId: data.meeting?.id ?? '',
        });
      } catch {
        dispatch({
          type: 'SUBMIT_ERROR',
          message: 'Network error — please check your connection and try again.',
        });
      }
    },
    [form, step, submit.phase]
  );

  return (
    <div className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6">
      <form onSubmit={handleSubmit} noValidate>
        <StepDots step={step} />

        {step === 1 && <StepContact form={form} dispatch={dispatch} />}
        {step === 2 && <StepPurpose form={form} dispatch={dispatch} />}
        {step === 3 && <StepDuration form={form} dispatch={dispatch} />}
        {step === 4 && <StepSchedule form={form} dispatch={dispatch} />}
        {step === 5 && <StepConfirm form={form} submit={submit} dispatch={dispatch} />}
      </form>
    </div>
  );
}
