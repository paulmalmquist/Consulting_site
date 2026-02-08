import Link from 'next/link';

const priorities = [
  'Inventory SaaS sprawl and owners across teams.',
  'Quantify license waste and workflow redundancy.',
  'Design a target system with clear controls.',
  'Migrate critical data with replay + rollback plans.'
];

const outcomes = [
  'Consolidated tooling roadmap with sequencing.',
  'Data contract map for the new system.',
  'Migration sprint plan with risk checkpoints.',
  'Cost savings and governance model.'
];

const phases = [
  { title: 'Baseline', detail: 'Map tools, contracts, and dependencies.' },
  { title: 'Consolidate', detail: 'Define the target stack and ownership.' },
  { title: 'Migrate', detail: 'Move data + workflows with audit trails.' }
];

export default function LegacySaaSMigrationPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="space-y-3 sm:space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Legacy SaaS Migration</p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Replace SaaS sprawl with a system you control and can evolve.
        </h1>
        <p className="text-sm text-slate-300 sm:text-base">
          We migrate critical workflows into a unified operating system that preserves continuity and lowers cost.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
        <h2 className="text-lg font-semibold text-white sm:text-xl">What we prioritize</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {priorities.map((item) => (
            <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">Outcomes</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {outcomes.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">Migration phases</h2>
          <div className="mt-4 space-y-3">
            {phases.map((phase, index) => (
              <div
                key={phase.title}
                className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Phase {index + 1}</p>
                <p className="text-base font-semibold text-white">{phase.title}</p>
                <p className="text-sm text-slate-300">{phase.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Ready to map the migration?</h2>
            <p className="text-sm text-slate-300 sm:text-base">We can identify the first migration wave quickly.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Plan a migration session
          </Link>
        </div>
      </section>
    </div>
  );
}
