'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type DiagnosticMode = {
  key: string;
  label: string;
  above: { label: string; explainer: string }[];
  below: { label: string; explainer: string }[];
};

const modes: DiagnosticMode[] = [
  {
    key: 'crm',
    label: 'CRM (Sales)',
    above: [
      { label: 'Pipelines', explainer: 'Visible stages make uncertainty look managed.' },
      { label: 'Dashboards', explainer: 'Charts give a calm story before hard decisions.' },
      { label: 'Automation', explainer: 'Rules route activity so leaders avoid intervening.' }
    ],
    below: [
      { label: 'Decision enforcement', explainer: 'The software becomes the manager nobody wants to be.' },
      { label: 'Blame absorption', explainer: 'Missed targets get blamed on adoption, not strategy.' },
      { label: 'Forecast theater', explainer: 'Confidence gets reported even when inputs are fiction.' },
      { label: 'Institutional memory', explainer: 'Context lives in fields because conversations are fragile.' }
    ]
  },
  {
    key: 'comms',
    label: 'Internal Comms',
    above: [
      { label: 'Messaging', explainer: 'Fast talk feels like execution.' },
      { label: 'Channels', explainer: 'Rooms simulate structure without defining ownership.' },
      { label: 'Search', explainer: 'Findability substitutes for clear commitments.' }
    ],
    below: [
      { label: 'Avoided process definition', explainer: 'Ambiguity stays cheaper than writing the operating rule.' },
      { label: 'Fear of accountability', explainer: 'No one wants the final word preserved forever.' },
      { label: 'Conflict deferral', explainer: 'Threads postpone disagreements instead of resolving them.' },
      { label: 'Illusion of progress', explainer: 'Activity volume masks unresolved work.' }
    ]
  },
  {
    key: 'helpdesk',
    label: 'Helpdesk / Ops',
    above: [
      { label: 'Ticket queues', explainer: 'Backlogs create order at a glance.' },
      { label: 'SLA timers', explainer: 'Timing metrics stand in for outcome quality.' },
      { label: 'Macros', explainer: 'Templates accelerate responses while causes remain.' }
    ],
    below: [
      { label: 'Ownership vacuum', explainer: 'Tickets exist because root owners are undefined.' },
      { label: 'Process debt', explainer: 'Workarounds become policy by repetition.' },
      { label: 'Compliance theater', explainer: 'Closed status satisfies audits more than customers.' },
      { label: 'Escalation fatigue', explainer: 'Managers absorb exceptions the system cannot resolve.' }
    ]
  },
  {
    key: 'industry',
    label: 'Industry Systems',
    above: [
      { label: 'Workflow modules', explainer: 'Domain terms make generic logic feel specialized.' },
      { label: 'Standard reports', explainer: 'Prebuilt outputs calm regulators and investors.' },
      { label: 'Vendor integrations', explainer: 'Connectivity becomes a moat against internal redesign.' }
    ],
    below: [
      { label: 'Policy outsourcing', explainer: 'Operational judgment is delegated to vendor defaults.' },
      { label: 'Control surrender', explainer: 'Change velocity follows product roadmaps, not your needs.' },
      { label: 'Audit anxiety', explainer: 'Teams buy reassurance instead of building evidence routines.' },
      { label: 'Institutional amnesia', explainer: 'Critical know-how leaves when admins leave.' }
    ]
  }
];

const selfAssessment = [
  'We rely on chat to make decisions.',
  'No one owns final answers.',
  'We search Slack before asking people.',
  'Tickets exist because ownership does not.',
  'Escalations happen after avoidable ambiguity.',
  'Our process lives in heroics, not systems.'
];

export default function SaaSIcebergPage() {
  const [activeMode, setActiveMode] = useState<DiagnosticMode>(modes[0]);
  const [activeItem, setActiveItem] = useState<{ label: string; explainer: string }>(modes[0].below[0]);

  const activeAbove = useMemo(() => activeMode.above, [activeMode]);
  const activeBelow = useMemo(() => activeMode.below, [activeMode]);

  return (
    <div className="space-y-10 sm:space-y-14">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/80 via-slate-950/70 to-[#051022] p-6 sm:p-10">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400">The SaaS Iceberg</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">What You&apos;re Really Paying For</h1>
        <p className="mt-3 max-w-2xl text-sm text-cyan-50/85 sm:text-base">
          Most SaaS pricing is justified below the waterline.
        </p>

        <div className="relative mt-8 h-[320px] rounded-3xl border border-cyan-200/20 bg-slate-950/50 p-5 sm:h-[380px]">
          <div className="absolute left-0 top-[40%] h-px w-full bg-cyan-200/50" aria-hidden="true" />
          <p className="absolute right-4 top-[calc(40%-18px)] text-[11px] uppercase tracking-[0.2em] text-cyan-100/80">Waterline</p>
          <div className="absolute left-1/2 top-[17%] h-24 w-32 -translate-x-1/2 rounded-[45%_45%_35%_35%] border border-cyan-100/35 bg-gradient-to-b from-cyan-100/30 to-cyan-200/10 shadow-[0_0_40px_rgba(104,220,255,0.22)] animate-pulse" />
          <div className="absolute left-1/2 top-[33%] h-44 w-72 -translate-x-1/2 rounded-[45%_45%_55%_55%] border border-cyan-100/20 bg-gradient-to-b from-cyan-300/10 to-transparent" />
          <div className="absolute bottom-0 left-0 h-[60%] w-full bg-gradient-to-b from-cyan-700/20 via-cyan-900/20 to-slate-950/70" />

          <div className="relative z-10 grid h-full items-end gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-100/15 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-100/80">Above the water</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Features', 'UI', 'Convenience'].map((item) => (
                  <span key={item} className="rounded-full border border-cyan-200/30 px-3 py-1 text-xs text-cyan-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-violet-200/15 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.22em] text-violet-100/80">Below the water</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Conflict avoidance', 'Process ownership', 'Blame absorption', 'Institutional memory'].map((item) => (
                  <span key={item} className="rounded-full border border-violet-200/30 px-3 py-1 text-xs text-violet-100">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          {modes.map((mode) => {
            const active = activeMode.key === mode.key;
            return (
              <button
                key={mode.key}
                type="button"
                onClick={() => {
                  setActiveMode(mode);
                  setActiveItem(mode.below[0]);
                }}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${
                  active
                    ? 'border-cyan-200/60 bg-cyan-300/15 text-cyan-50'
                    : 'border-slate-700 bg-slate-950/50 text-slate-300 hover:border-cyan-200/40 hover:text-cyan-100'
                }`}
              >
                {mode.label}
              </button>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-cyan-200/20 bg-slate-950/55 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/80">Above water signals</p>
              <div className="mt-3 space-y-2">
                {activeAbove.map((item) => (
                  <button
                    type="button"
                    key={item.label}
                    onMouseEnter={() => setActiveItem(item)}
                    onFocus={() => setActiveItem(item)}
                    onClick={() => setActiveItem(item)}
                    className="block w-full rounded-xl border border-cyan-200/20 bg-cyan-300/5 px-3 py-2 text-left text-sm text-cyan-50 transition hover:border-cyan-200/50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-violet-200/20 bg-slate-950/55 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-violet-100/80">Below water realities</p>
              <div className="mt-3 space-y-2">
                {activeBelow.map((item) => (
                  <button
                    type="button"
                    key={item.label}
                    onMouseEnter={() => setActiveItem(item)}
                    onFocus={() => setActiveItem(item)}
                    onClick={() => setActiveItem(item)}
                    className="block w-full rounded-xl border border-violet-200/20 bg-violet-300/5 px-3 py-2 text-left text-sm text-violet-50 transition hover:border-violet-200/50"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Hover diagnostic</p>
            <p className="mt-3 text-lg font-semibold text-white">{activeItem.label}</p>
            <p className="mt-2 text-sm text-slate-300">{activeItem.explainer}</p>
          </aside>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Where are you compensating?</h2>
        <p className="mt-2 text-sm text-slate-300">Mentally check every statement that feels true.</p>
        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {selfAssessment.map((statement) => (
            <li key={statement} className="rounded-2xl border border-slate-700/70 bg-slate-950/45 p-4 text-sm text-slate-100">
              <span className="mr-2 text-cyan-200">☐</span>
              {statement}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900/70 to-slate-950/80 p-6 sm:p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Reframe</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">These Are Not Software Problems</h2>
          <p className="mt-2 text-base text-cyan-100">They are ownership problems.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-4">
            <p className="text-sm font-semibold text-white">Vendors monetize avoidance</p>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-violet-300/70 to-cyan-300/70" />
            </div>
            <p className="mt-3 text-xs text-slate-300">Licenses scale with unresolved ambiguity.</p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-4">
            <p className="text-sm font-semibold text-white">Internal systems force clarity</p>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[58%] rounded-full bg-gradient-to-r from-cyan-300/60 to-cyan-100/70" />
            </div>
            <p className="mt-3 text-xs text-slate-300">Rules become explicit and defensible.</p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/55 p-4">
            <p className="text-sm font-semibold text-white">Ownership lowers total cost</p>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className="h-2 w-[34%] rounded-full bg-gradient-to-r from-emerald-300/70 to-cyan-200/70" />
            </div>
            <p className="mt-3 text-xs text-slate-300">Fewer tools. Fewer escalations. Better memory.</p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-200/30 bg-slate-900/75 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">See What You&apos;re Outsourcing</h2>
            <p className="mt-2 text-sm text-slate-300">Map the submerged cost before your next renewal cycle.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/operational-assessment"
              className="rounded-full border border-cyan-200/60 bg-cyan-300/15 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:bg-cyan-200/20"
            >
              See What You&apos;re Outsourcing
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-600 bg-slate-950/70 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-200/40 hover:text-cyan-100"
            >
              Build What You Actually Need
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
