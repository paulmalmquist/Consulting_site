import Link from 'next/link';

const focusAreas = [
  'Frontline enablement for faster response + resolution.',
  'Executive copilots for recurring reporting and briefs.',
  'Knowledge retrieval across SOPs, tickets, and contracts.',
  'AI guardrails that keep answers audit-ready.'
];

const deliverables = [
  'Priority use-case shortlist with ROI estimate.',
  'Data readiness checklist and redaction plan.',
  'Prototype concierge flows (chat + email).',
  'Governance model for prompt, tool, and policy updates.'
];

const steps = [
  { title: 'Discover', detail: 'Interview stakeholders + review workflows.' },
  { title: 'Design', detail: 'Map concierge flows and data contracts.' },
  { title: 'Pilot', detail: 'Launch a scoped concierge in 3-4 weeks.' }
];

export default function AIConciergePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="space-y-3 sm:space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI Concierge</p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Bring practical AI into the workflows your teams already live in.
        </h1>
        <p className="text-sm text-slate-300 sm:text-base">
          We design a concierge layer that boosts speed, accuracy, and control without replacing your systems.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-white sm:text-xl">Where the concierge fits</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {focusAreas.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">What you receive</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {deliverables.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">Engagement flow</h2>
          <div className="mt-4 space-y-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
                <p className="text-base font-semibold text-white">{step.title}</p>
                <p className="text-sm text-slate-300">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Ready for an AI concierge pilot?</h2>
            <p className="text-sm text-slate-300 sm:text-base">We can scope a pilot in one working session.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Request an AI Concierge pilot
          </Link>
        </div>
      </section>
    </div>
  );
}
