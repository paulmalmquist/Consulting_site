import Link from 'next/link';
import { ArrowRight, Database, Shield, TrendingDown, Zap } from 'lucide-react';

const migrationBenefits = [
  {
    icon: TrendingDown,
    title: 'Reduce SaaS spend',
    description: 'Consolidate multiple vendor costs into a single internal system you control.'
  },
  {
    icon: Shield,
    title: 'Own your data',
    description: 'Full control over business data, backups, and integrations without vendor constraints.'
  },
  {
    icon: Zap,
    title: 'Eliminate workflow friction',
    description: 'Stop context-switching between disconnected tools and vendor-imposed workflows.'
  },
  {
    icon: Database,
    title: 'AI-ready infrastructure',
    description: 'Build on a foundation designed for AI integration and automation from day one.'
  }
];

const migrationApproach = [
  {
    phase: 'Assessment',
    description: 'Map legacy tool usage, data ownership, and workflow dependencies.',
    duration: '1-2 weeks'
  },
  {
    phase: 'Design',
    description: 'Define internal capability architecture and data contracts.',
    duration: '2-3 weeks'
  },
  {
    phase: 'Parallel Run',
    description: 'Build and validate new system alongside existing tools.',
    duration: '4-8 weeks'
  },
  {
    phase: 'Cutover',
    description: 'Migrate workflows with rollback capability and validation.',
    duration: '1-2 weeks'
  }
];

export default function LegacySaaSPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="space-y-3 sm:space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Legacy SaaS Migration</p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Take back control from expensive vendors
        </h1>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Most businesses are locked into costly SaaS subscriptions that constrain their workflows, lock up their data,
          and increase in price every year. We help you migrate to internal systems you own and control.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 sm:p-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white sm:text-2xl">Common migration targets</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'CRM (Salesforce, HubSpot)',
              'Project Management (Asana, Monday)',
              'Support Ticketing (Zendesk, Freshdesk)',
              'Document Management (Box, Dropbox)',
              'Accounting Extensions (Bill.com, Expensify)',
              'Marketing Automation'
            ].map((target) => (
              <div
                key={target}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 text-sm text-slate-200"
              >
                {target}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {migrationBenefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div
              key={benefit.title}
              className="space-y-3 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-200/30 bg-slate-950/80">
                <Icon className="h-6 w-6 text-cyan-200" />
              </div>
              <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{benefit.description}</p>
            </div>
          );
        })}
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-6 sm:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Migration Approach</p>
          <h2 className="text-xl font-semibold text-white sm:text-2xl">How we transition you off legacy SaaS</h2>
          <p className="text-sm text-slate-300 sm:text-base">
            Parallel-run first. No big-bang cutovers. Rollback capability at every step.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {migrationApproach.map((step, index) => (
            <div
              key={step.phase}
              className="relative rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-200/30 bg-slate-950/80 text-sm font-semibold text-cyan-100">
                    {index + 1}
                  </span>
                  <p className="text-base font-semibold text-white">{step.phase}</p>
                </div>
                <p className="text-sm text-slate-300">{step.description}</p>
                <p className="text-xs uppercase tracking-wide text-slate-400">{step.duration}</p>
              </div>
              {index < migrationApproach.length - 1 && (
                <ArrowRight
                  className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-cyan-200/40 lg:block"
                  size={20}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/80 to-emerald-900/20 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Next Step</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Start with an assessment</h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Identify which legacy tools are costing you the most in licenses, workflow friction, and data lock-in.
            </p>
          </div>
          <Link
            href="/operational-assessment"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Request assessment
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
