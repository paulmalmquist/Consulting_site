import Link from 'next/link';
import { ConciergeFlowGraphic } from '../../components/ai/ConciergeFlowGraphic';

const outcomes = [
  {
    title: 'Fewer “where do I find this?” pings',
    detail: 'People get the answer plus the source, without hunting through folders or asking around.'
  },
  {
    title: 'Faster responses that stay consistent',
    detail: 'Support, ops, and leaders stop rewriting the same explanations from scratch.'
  },
  {
    title: 'Less “AI theater”',
    detail: 'No vague demos. We focus on the questions you already answer every week.'
  }
];

const whatWeHelpYouChoose = [
  {
    title: 'A code helper (for builders)',
    detail: 'Helps engineers move faster with reviews, refactors, tests, and “what changed?” questions.'
  },
  {
    title: 'A doc answerer (for everyone)',
    detail: 'Answers questions by pulling from your SOPs, tickets, and policies, then shows where it got it.'
  },
  {
    title: 'A safe “doer” (when you want actions)',
    detail: 'Creates tickets, updates records, and runs checklists with approvals and logs.'
  }
];

const deliverables = [
  'A short list of tools that fit your team, explained in plain language (with tradeoffs and pricing).',
  'A “what we can safely use” data plan: where sources live, what to redact, and what to exclude.',
  'A working pilot flow in the channel you already use (chat, email, or a web form).',
  'Guardrails: approvals, logging, and a simple process to keep answers and actions up to date.'
];

const steps = [
  { title: 'Discover', detail: 'Collect the real questions, edge cases, and “gotchas” people deal with today.' },
  { title: 'Select', detail: 'Choose tools that match your risk tolerance, budget, and systems, without vendor lock-in.' },
  { title: 'Pilot', detail: 'Ship one narrow concierge that answers, cites, and escalates correctly in 3-4 weeks.' }
];

export default function AIConciergePage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-900/70 via-slate-950/65 to-[#061226] p-6 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">AI Concierge</p>
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
              A helpful layer that answers questions and does small tasks, using your own sources.
            </h1>
            <p className="text-sm text-slate-300 sm:text-base">
              We help you choose the right tools (code helpers, doc-based Q&amp;A, and safe automations) and pilot them in the places your team already works.
              No jargon. No platform replacement.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {outcomes.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/35 p-4">
                  <p className="text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
              >
                Scope a pilot
              </Link>
              <Link
                href="/operational-assessment"
                className="rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
              >
                Start with an assessment
              </Link>
            </div>
          </div>

          <ConciergeFlowGraphic />
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">What we advise on</p>
            <h2 className="mt-3 text-xl font-semibold text-white sm:text-2xl">The tool choices, in normal words</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              You don&apos;t need a new “AI platform” to get value. Most teams need a small set of helpers that match how work really happens.
            </p>
          </div>
          <div className="grid gap-4 lg:col-span-2 sm:grid-cols-3">
            {whatWeHelpYouChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5 transition hover:border-cyan-200/40 hover:shadow-[0_0_30px_rgba(94,203,255,0.12)]"
              >
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">What you get</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {deliverables.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">How we run it</h2>
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
