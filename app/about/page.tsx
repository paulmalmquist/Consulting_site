import Link from 'next/link';
import {
  ArrowDownCircle,
  CheckCircle2,
  CircleSlash2,
  Database,
  FileSearch,
  Layers,
  LineChart,
  LockKeyhole,
  Puzzle,
  RefreshCcw,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
  Wrench,
  Waypoints
} from 'lucide-react';

const expertise = [
  {
    title: 'Financial Modeling and Fund Operations',
    description: 'We have built and run finance workflows where timing, controls, and reporting quality matter daily.',
    icon: LineChart
  },
  {
    title: 'Accounting Controls and Compliance',
    description: 'We design processes that hold up under review with clear approvals, records, and accountability.',
    icon: ShieldCheck
  },
  {
    title: 'Data Warehousing and Pipeline Design',
    description: 'We connect raw source systems to reliable data products that teams can trust for decisions.',
    icon: Database
  },
  {
    title: 'Enterprise Reporting and BI',
    description: 'We have delivered reporting systems used by operators, finance teams, and leadership.',
    icon: ScanSearch
  },
  {
    title: 'Custom Application Development',
    description: 'We build software around the work itself so teams can execute faster without losing control.',
    icon: Wrench
  }
] as const;

const ownershipShift = [
  'Reduce SaaS sprawl',
  'Preserve institutional knowledge',
  'Absorb Excel and legacy tools instead of fighting them',
  'Modernize workflows with AI assisted execution',
  'Maintain clear audit trails and control'
] as const;

const notUs = ['A generic SaaS platform', 'A staff augmentation firm', 'A digital transformation consultancy'] as const;

const philosophy = [
  {
    title: 'Technology should reduce dependence',
    description: 'If a process is core to your business, your team should be able to shape and improve it directly.',
    icon: Puzzle
  },
  {
    title: 'AI should strengthen governance',
    description: 'Automation should make work clearer with better review points, not blur ownership and control.',
    icon: LockKeyhole
  },
  {
    title: 'Critical workflows need structure',
    description: 'Traceable, measurable execution is how teams improve quality and speed over time.',
    icon: Workflow
  }
] as const;

const outcomes = [
  { title: 'Clear execution', icon: Target },
  { title: 'Lower long term cost', icon: RefreshCcw },
  { title: 'Modernized operations', icon: Sparkles },
  { title: 'Continuity across systems', icon: Waypoints },
  { title: 'Ownership of your operating system', icon: Layers }
] as const;

export default function AboutPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">About Novendor</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          We build what businesses should have owned all along.
        </h1>
        <div className="mt-5 max-w-4xl space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
          <p>
            Novendor was founded by operators with deep experience across finance, operations, data engineering, and enterprise
            application design.
          </p>
          <p>
            We have worked inside complex environments including private equity, real estate, compliance heavy operations, and multi
            system organizations where work is split across spreadsheets, legacy platforms, and vendor tools that were never built to
            function as one system.
          </p>
          <p>
            We know the gap between what systems promise and how work actually gets done. We close that gap with execution layers
            your team can control.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#inside-finance-and-operations"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See Our Background
            <ArrowDownCircle size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/operational-assessment"
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/45 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Request An Assessment
          </Link>
        </div>
      </section>

      <section
        id="inside-finance-and-operations"
        className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
      >
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Built From the Inside of Finance and Operations</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            This is operating experience, not theory.
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35"
              >
                <span
                  aria-label={`${item.title} icon`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100"
                >
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {[
            'We understand how data moves.',
            'We understand where approvals break.',
            'We understand why audit trails disappear.'
          ].map((line) => (
            <article key={line} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <p className="text-sm text-slate-200">{line}</p>
            </article>
          ))}
        </div>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          We design systems that fix those problems without forcing a full rip and replace.
        </p>
      </section>

      <section
        id="execution-ownership"
        aria-labelledby="execution-ownership-title"
        className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
      >
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">The Shift</p>
          <h2 id="execution-ownership-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            From tool dependency to execution ownership.
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-[1.2fr,1fr]">
          <article className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5">
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              AI is lowering the cost of intelligence. Modern infrastructure has lowered the cost of compute and storage.
              Automation has moved from pilot projects into real operations.
            </p>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              The expectation has changed. Businesses no longer need to rent their operating logic from vendors. They can own it.
            </p>
          </article>
          <article className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">What ownership looks like</h3>
            <ul className="space-y-2">
              {ownershipShift.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-200" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
        <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
          This is not about replacing everything. It is about regaining control over how work actually runs.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What Makes Us Different</p>
        </div>
        <div className="grid gap-3 lg:grid-cols-[1fr,1.3fr]">
          <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">We are not</h3>
            <ul className="mt-3 space-y-2">
              {notUs.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CircleSlash2 size={16} className="mt-0.5 shrink-0 text-slate-400" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-2xl border border-emerald-300/25 bg-gradient-to-br from-slate-950/60 to-emerald-950/20 p-5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">What we build instead</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              We design and implement modular execution layers that sit above your data and across your systems.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                { title: 'Keep core tools', icon: FileSearch },
                { title: 'Own your logic', icon: LockKeyhole },
                { title: 'Operate with continuity', icon: Waypoints }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-xl border border-slate-800/80 bg-slate-900/55 p-3">
                    <Icon size={16} className="text-emerald-200" aria-hidden="true" />
                    <p className="mt-2 text-sm text-slate-200">{item.title}</p>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Our Philosophy</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {philosophy.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35"
              >
                <span
                  aria-label={`${item.title} icon`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100"
                >
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h3 className="mt-3 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/80 to-emerald-900/20 p-6 sm:p-8">
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">The Outcome</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Clear execution with long term ownership.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {outcomes.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
                  <Icon size={16} className="text-emerald-200" aria-hidden="true" />
                  <p className="mt-2 text-sm text-slate-200">{item.title}</p>
                </article>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/45 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Explore Capabilities
            </Link>
            <Link
              href="/operational-assessment"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Request An Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
