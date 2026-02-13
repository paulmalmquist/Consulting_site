import Link from 'next/link';
import {
  ArrowDownCircle,
  ArrowRight,
  Bot,
  CheckCheck,
  Cog,
  DatabaseZap,
  GitMerge,
  Layers3,
  Network,
  ScanSearch,
  ShieldCheck,
  Workflow
} from 'lucide-react';

const POSITIONING_PANELS = [
  {
    title: 'No Overhead Required',
    description: 'Clean, organize, and automate your operations without adding internal engineering burden.',
    icon: Cog
  },
  {
    title: 'Stop Buying Tools',
    description: 'Replace vendor sprawl with owned systems built specifically for how your business runs.',
    icon: Network
  },
  {
    title: 'AI-Ready Foundation',
    description: 'Modernize your data layer today so AI becomes practical tomorrow.',
    icon: DatabaseZap
  }
];

const FLOW_STEPS = [
  { title: 'Inventory', description: 'Map workflows, spreadsheets, and handoffs clearly.', icon: ScanSearch },
  { title: 'Structure', description: 'Define states, roles, and approval checkpoints.', icon: Layers3 },
  { title: 'Build', description: 'Create modular execution procedures and control points.', icon: Workflow },
  { title: 'Run', description: 'Operate with traceable approvals, logs, and outcomes.', icon: CheckCheck },
  { title: 'Expand', description: 'Layer analytics and AI on stable foundations.', icon: Bot }
];

const COMPARISON_TILES = [
  { traditional: 'Tool sprawl', execution: 'Unified workflow logic' },
  { traditional: 'Manual reconciliation', execution: 'Deterministic runs' },
  { traditional: 'Vendor lock-in', execution: 'Owned data + audit trails' }
];

const OUTCOMES = [
  { title: 'Control', description: 'Own process logic, not vendor defaults.', icon: Cog },
  { title: 'Continuity', description: 'Teams execute consistently through every transition.', icon: GitMerge },
  { title: 'Auditability', description: 'Every state change is traceable and reviewable.', icon: ShieldCheck }
];

export default function WhatWeDoPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What We Do</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">Your Data. Delivered.</h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We build owned execution systems that turn fragmented operations into structured, auditable workflows.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#how-it-works"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See How It Works
            <ArrowDownCircle size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-900/55 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/40 hover:text-emerald-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Explore Capabilities
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section aria-label="Positioning pillars" className="grid gap-3 md:grid-cols-3">
        {POSITIONING_PANELS.map((panel) => {
          const Icon = panel.icon;
          return (
            <article
              key={panel.title}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5 transition hover:border-emerald-300/40"
            >
              <span
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-300/35 bg-emerald-200/10 text-emerald-100"
                role="img"
                aria-label={`${panel.title} icon`}
              >
                <Icon size={18} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-semibold text-white">{panel.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{panel.description}</p>
            </article>
          );
        })}
      </section>

      <section
        id="how-it-works"
        aria-labelledby="how-it-works-title"
        className="scroll-mt-24 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
      >
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">How It Actually Works</p>
          <h2 id="how-it-works-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            A structured execution lifecycle built for repeatability.
          </h2>
        </div>
        <ol className="mt-5 grid gap-3 md:grid-cols-5">
          {FLOW_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
                <div className="flex items-center justify-between gap-3">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100"
                    role="img"
                    aria-label={`${step.title} icon`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200/90">
                    {index + 1}
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </section>

      <section aria-labelledby="replaces-title" className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What This Replaces</p>
          <h2 id="replaces-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            The execution layer removes reconciliation work from daily operations.
          </h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {COMPARISON_TILES.map((tile) => (
            <article key={tile.traditional} className="rounded-2xl border border-slate-800/80 bg-slate-950/50 p-5">
              <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Traditional Stack</p>
              <p className="mt-2 text-sm text-slate-200">{tile.traditional}</p>
              <div className="my-3 h-px bg-slate-800/90" />
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">Execution Layer</p>
              <p className="mt-2 text-sm font-medium text-emerald-50">{tile.execution}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/85 to-emerald-900/20 p-5 sm:p-7">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Outcomes</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {OUTCOMES.map((outcome) => {
            const Icon = outcome.icon;
            return (
              <article key={outcome.title} className="rounded-2xl border border-emerald-300/20 bg-slate-950/50 p-4">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/35 bg-emerald-200/10 text-emerald-100"
                    role="img"
                    aria-label={`${outcome.title} icon`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{outcome.title}</h3>
                </div>
                <p className="mt-2 text-sm text-slate-200">{outcome.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Own Your Operating System.</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">Start with a structured operational assessment.</p>
        <Link
          href="/operational-assessment"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Request Assessment
        </Link>
      </section>
    </div>
  );
}
