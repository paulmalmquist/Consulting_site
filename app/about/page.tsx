import Link from 'next/link';
import {
  ArrowDownCircle,
  ClipboardCheck,
  FileStack,
  HeartPulse,
  Landmark,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Wallet,
  Workflow
} from 'lucide-react';

const whatWeDoCards = [
  {
    title: 'Operational Assessment',
    description: 'Map workflows, handoffs, and failure points into a clear execution plan.',
    icon: ClipboardCheck
  },
  {
    title: 'Execution Systems',
    description: 'Build internal procedures that run work end-to-end with approvals and traceability.',
    icon: Workflow
  },
  {
    title: 'Data + Documents',
    description: 'Treat files, evidence, and structured data as one governed operating surface.',
    icon: FileStack
  },
  {
    title: 'Continuity Over Tools',
    description: 'Reduce reliance on vendor roadmaps with owned logic and audit trails.',
    icon: ShieldCheck
  }
] as const;

const workSteps = [
  { title: 'Observe', description: 'Inventory real workflows and wasted motion.' },
  { title: 'Model', description: 'Define states, roles, approvals, and evidence.' },
  { title: 'Build', description: 'Deliver modular procedures as internal tools.' },
  { title: 'Run', description: 'Operate with clear ownership and human sign-off.' },
  { title: 'Improve', description: 'Iterate from run logs, exceptions, and outcomes.' }
] as const;

const proofTiles = [
  { label: 'Control', description: 'You own the process logic, not a vendor.' },
  { label: 'Continuity', description: 'Work survives staffing changes and tool churn.' },
  { label: 'Auditability', description: 'Every run is logged, replayable, and exportable.' }
] as const;

const values = [
  'Capability-first, not industry-first',
  'Outcomes over features',
  'Control, continuity, auditability',
  'Absorb legacy tools (don\'t break them)',
  'Human sign-off for decisions',
  'Calm, enterprise-grade delivery'
] as const;

const industries = [
  {
    name: 'Healthcare',
    line: 'Coordinate approvals and records with accountable handoffs across care operations.',
    icon: HeartPulse
  },
  {
    name: 'Legal',
    line: 'Standardize intake, review, and evidence trails across matters and teams.',
    icon: Scale
  },
  {
    name: 'Retail',
    line: 'Keep merchandising, vendor, and store workflows consistent across fast cycles.',
    icon: ShoppingBag
  },
  {
    name: 'Logistics',
    line: 'Run exception-heavy fulfillment and dispatch procedures with clear ownership.',
    icon: Truck
  },
  {
    name: 'Financial Ops',
    line: 'Govern reconciliations, approvals, and policy checks with auditable runs.',
    icon: Wallet
  },
  {
    name: 'Real Estate Ops',
    line: 'Track leasing, compliance, and document-heavy operations from one workflow layer.',
    icon: Landmark
  }
] as const;

export default function AboutPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Build The Execution Layer Your Business Can Own
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We turn fragmented workflows into auditable procedures—without breaking what already works.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="#how-we-work"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/60 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            See How We Work
            <ArrowDownCircle size={16} aria-hidden="true" />
          </Link>
          <Link
            href="/capabilities"
            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950/45 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/35 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Explore Capabilities
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What We Do</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {whatWeDoCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35"
              >
                <span
                  aria-label={`${card.title} icon`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100"
                >
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h2 className="mt-3 text-base font-semibold text-white">{card.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        id="how-we-work"
        aria-labelledby="how-we-work-title"
        className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
      >
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">How We Work</p>
          <h2 id="how-we-work-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Structured delivery from workflow discovery to measurable operation.
          </h2>
        </div>

        <div className="hidden items-start gap-3 lg:grid lg:grid-cols-5">
          {workSteps.map((step, index) => (
            <article key={step.title} className="space-y-3 rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <div className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-200/10 px-2 text-xs font-semibold text-emerald-100">
                {index + 1}
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{step.title}</h3>
              <p className="text-sm text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>

        <div className="space-y-3 lg:hidden">
          {workSteps.map((step, index) => (
            <article key={step.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-7 min-w-7 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-200/10 px-2 text-xs font-semibold text-emerald-100">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{step.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">What Makes This Different</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {proofTiles.map((tile) => (
            <article
              key={tile.label}
              className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35"
            >
              <p className="text-xs uppercase tracking-[0.08em] text-emerald-200">{tile.label}</p>
              <p className="mt-2 text-sm text-slate-300">{tile.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Values / Principles</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <article key={value} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35">
              <p className="text-sm text-slate-200">{value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Who We Serve</p>
        </div>
        <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:thin]">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <article
                key={industry.name}
                className="min-w-[240px] snap-start rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 transition hover:border-emerald-300/35 sm:min-w-[280px] lg:min-w-0 lg:flex-1"
              >
                <span
                  aria-label={`${industry.name} icon`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-300/30 bg-emerald-200/10 text-emerald-100"
                >
                  <Icon size={16} aria-hidden="true" />
                </span>
                <h2 className="mt-3 text-base font-semibold text-white">{industry.name}</h2>
                <p className="mt-2 text-sm text-slate-300">{industry.line}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/80 to-emerald-900/20 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Closing</p>
            <h2 className="text-2xl font-semibold tracking-tight text-white">Own Your Operating System</h2>
            <p className="text-sm text-slate-300 sm:text-base">
              Start with an operational assessment and a practical build plan.
            </p>
          </div>
          <Link
            href="/operational-assessment"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Request An Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
