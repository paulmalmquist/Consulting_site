'use client';

import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState('');
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'mailto:{{EMAIL}}';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Thanks — your note is ready to send via email.');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs text-slate-400">
          Name
          <input
            required
            className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
          />
        </label>
        <label className="text-xs text-slate-400">
          Work email
          <input
            type="email"
            required
            className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
          />
        </label>
      </div>
      <label className="text-xs text-slate-400">
        What are you trying to solve?
        <textarea
          required
          rows={4}
          className="mt-2 w-full rounded-lg border border-slate-700/60 bg-slate-950/40 px-3 py-2 text-sm text-white"
        />
      </label>
      <div className="flex flex-wrap gap-3">
        <button
          type="submit"
          className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/30"
        >
          Draft email
        </button>
        <a
          href="mailto:{{EMAIL}}"
          className="rounded-full border border-slate-700/70 px-5 py-2 text-sm text-slate-100 hover:border-slate-500"
        >
          Email directly
        </a>
      </div>
      {status && <p className="text-xs text-cyan-200">{status}</p>}
      <p className="text-xs text-slate-400">
        Prefer scheduling? Use{' '}
        <a href={calendlyUrl} className="underline" target="_blank" rel="noreferrer">
          Calendly
        </a>
        .
      </p>
    </form>
  );
}
