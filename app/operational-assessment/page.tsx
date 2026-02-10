import Link from 'next/link';

const steps = [
  { title: 'Inventory', detail: 'Map tools + handoffs' },
  { title: 'Measure', detail: 'Time, errors, rework' },
  { title: 'Redesign', detail: 'Contracts + automation' },
  { title: 'Certify', detail: 'Replayable outputs' }
];

const whatYouGet = [
  'Workflow map + tool inventory',
  'Bottleneck & rework scorecard',
  'Data contract recommendations',
  'Cutover plan (parallel-run first)',
  'ROI estimate (time + license reduction)'
];

const outputs = [
  'Capability backlog (versioned)',
  'Control points + evidence plan',
  '“Excel-as-UI” migration targets',
  'ETL rules to certify',
  'Rollback + replay strategy'
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
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">What you get</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {whatYouGet.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-slate-800/70 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white sm:text-xl">Outputs</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-200">
            {outputs.map((item) => (
              <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
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
