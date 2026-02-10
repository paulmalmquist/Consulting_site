import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { Calculator, FileCheck2, FileSpreadsheet, GitBranch, GitPullRequestArrow, LayoutDashboard, Map, ShieldCheck } from 'lucide-react';

const steps = [
  { title: 'Inventory', detail: 'Map tools + handoffs' },
  { title: 'Measure', detail: 'Time, errors, rework' },
  { title: 'Redesign', detail: 'Contracts + automation' },
  { title: 'Certify', detail: 'Replayable outputs' }
];

type ArtifactItem = {
  title: string;
  icon: LucideIcon;
  tag: string;
};

const whatYouGet: ArtifactItem[] = [
  { title: 'Workflow map + tool inventory', icon: Map, tag: 'Map' },
  { title: 'Bottleneck & rework scorecard', icon: LayoutDashboard, tag: 'Scorecard' },
  { title: 'Data contract recommendations', icon: ShieldCheck, tag: 'Contracts' },
  { title: 'Cutover plan (parallel-run first)', icon: GitPullRequestArrow, tag: 'Cutover' },
  { title: 'ROI estimate (time + license reduction)', icon: Calculator, tag: 'ROI' }
];

const outputs: ArtifactItem[] = [
  { title: 'Capability backlog (versioned)', icon: GitBranch, tag: 'Backlog' },
  { title: 'Control points + evidence plan', icon: FileCheck2, tag: 'Evidence' },
  { title: '“Excel-as-UI” migration targets', icon: FileSpreadsheet, tag: 'Migration' },
  { title: 'ETL rules to certify', icon: ShieldCheck, tag: 'Rules' },
  { title: 'Rollback + replay strategy', icon: GitPullRequestArrow, tag: 'Recovery' }
];

const iconClassName = 'h-6 w-6 text-cyan-200';

const StepIcon = ({ step }: { step: string }) => {
  switch (step) {
    case 'Inventory':
      return (
        <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
          <rect x="3" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="4" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="13" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <rect x="14" y="13" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case 'Measure':
      return (
        <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
          <path
            d="M5 16a7 7 0 0 1 14 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M12 9v5l3 2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor" />
        </svg>
      );
    case 'Redesign':
      return (
        <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
          <path
            d="M8 20l-4-4 7-7 4 4-7 7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M13 9l2-2a2 2 0 0 1 3 3l-2 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'Certify':
    default:
      return (
        <svg viewBox="0 0 24 24" className={iconClassName} aria-hidden="true">
          <path
            d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M9 12l2 2 4-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

const ArtifactPanel = ({
  title,
  eyebrow,
  tone,
  items
}: {
  title: string;
  eyebrow: string;
  tone: 'cyan' | 'violet';
  items: ArtifactItem[];
}) => {
  const toneClasses =
    tone === 'cyan'
      ? {
          glow: 'bg-cyan-300/15',
          border: 'border-cyan-200/25',
          icon: 'text-cyan-200',
          tag: 'border-cyan-200/25 bg-cyan-300/10 text-cyan-100'
        }
      : {
          glow: 'bg-violet-300/15',
          border: 'border-violet-200/25',
          icon: 'text-violet-200',
          tag: 'border-violet-200/25 bg-violet-300/10 text-violet-100'
        };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
      <div className={`pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full ${toneClasses.glow} blur-3xl`} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p>
          <h2 className="mt-2 text-lg font-semibold text-white sm:text-xl">{title}</h2>
        </div>
        <div className="relative mt-0.5 hidden h-12 w-12 sm:block" aria-hidden="true">
          <div className={`absolute left-0 top-2 h-9 w-9 rotate-[-8deg] rounded-2xl border ${toneClasses.border} bg-slate-950/35`} />
          <div className={`absolute left-2 top-1 h-9 w-9 rotate-[6deg] rounded-2xl border ${toneClasses.border} bg-slate-950/45`} />
          <div className={`absolute left-4 top-0 h-9 w-9 rotate-[18deg] rounded-2xl border ${toneClasses.border} bg-slate-950/55`} />
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 transition hover:border-slate-600/70 hover:bg-slate-950/55"
            >
              <div className="flex items-start gap-3">
                <span className={`mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border ${toneClasses.border} bg-slate-950/60`}>
                  <Icon className={`h-5 w-5 ${toneClasses.icon}`} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-white">{item.title}</p>
                    <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${toneClasses.tag}`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function OperationalAssessmentPage() {
  return (
    <div className="space-y-10 sm:space-y-12">
      <section className="space-y-3 sm:space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Operational Assessment</p>
        <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">Remove the friction</h1>
        <p className="text-sm text-slate-300 sm:text-base">
          A fast audit of motion, tooling, and data contracts.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group relative flex h-full flex-col gap-3 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 transition duration-200 hover:border-cyan-200/40 hover:shadow-[0_0_30px_rgba(94,203,255,0.16)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/30 bg-slate-950/80">
                  <StepIcon step={step.title} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Step {index + 1}</p>
                  <p className="text-base font-semibold text-white">{step.title}</p>
                </div>
              </div>
              <p className="text-sm text-slate-300">{step.detail}</p>
              {index < steps.length - 1 && (
                <span
                  className="pointer-events-none absolute right-4 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-gradient-to-r from-cyan-200/40 to-transparent lg:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ArtifactPanel title="What you get" eyebrow="Deliverables" tone="cyan" items={whatYouGet} />
        <ArtifactPanel title="Outputs" eyebrow="Replayable artifacts" tone="violet" items={outputs} />
      </section>

      <section className="rounded-3xl border border-slate-700/80 bg-slate-900/70 p-6 sm:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Ready to scope the assessment?</h2>
            <p className="text-sm text-slate-300 sm:text-base">We can start with a 30-minute working session.</p>
          </div>
          <Link
            href="/contact"
            className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            Request an Operational Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
