import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRY_BY_SLUG, INDUSTRY_ENGAGEMENTS } from '../../../content/industry-engagements';

type IndustryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return INDUSTRY_ENGAGEMENTS.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = INDUSTRY_BY_SLUG[params.slug];

  if (!industry) {
    return {
      title: 'Industry Not Found | Novendor'
    };
  }

  const systemsPreview = industry.systemTags.slice(0, 3).join(', ');
  const description = `${industry.label} execution infrastructure: lifecycle controls, audit logging, and workflow ownership across ${systemsPreview}.`;

  return {
    title: `${industry.label} | Industry Engagement | Novendor`,
    description,
    alternates: {
      canonical: `/industries/${industry.slug}`
    },
    openGraph: {
      title: `${industry.label} Industry Engagement | Novendor`,
      description
    }
  };
}

function SourceRefs({ ids }: { ids: number[] }) {
  return (
    <span className="ml-1 text-xs text-emerald-200/90">
      {ids.map((id) => (
        <span key={id} className="mr-1 inline-block">[{id}]</span>
      ))}
    </span>
  );
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRY_BY_SLUG[params.slug];

  if (!industry) {
    notFound();
  }

  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industry Engagement</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">{industry.label}</h1>
        <p className="mt-4 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Here is how the lifecycle runs in practice, where cross-system control fails, and how Novendor enforces execution control without replacing core systems.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">1) Operational Lifecycle</h2>
        <p className="mt-2 text-sm text-slate-300">Lifecycle diagram (text):</p>
        <div className="mt-3 overflow-x-auto">
          <div className="inline-flex min-w-full items-center gap-2 rounded-xl border border-slate-800/80 bg-slate-950/45 p-3 text-xs text-emerald-100">
            {industry.lifecycle.map((stage, index) => (
              <div key={stage.stage} className="inline-flex items-center gap-2">
                <span className="rounded-md border border-emerald-300/35 bg-emerald-200/10 px-2 py-1">{stage.stage}</span>
                {index < industry.lifecycle.length - 1 && <span className="text-slate-500">→</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {industry.lifecycle.map((stage) => (
            <article key={stage.stage} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-base font-semibold text-white">{stage.stage}</h3>
                <div className="flex flex-wrap gap-1 text-[11px] uppercase tracking-[0.12em]">
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-300">Owner</span>
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-300">Version</span>
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-300">Log</span>
                  <span className="rounded-full border border-slate-700 px-2 py-1 text-slate-300">Control</span>
                </div>
              </div>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Key artifacts</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-200">
                    {stage.keyArtifacts.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Owner roles</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-200">
                    {stage.ownerRoles.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">System dependencies</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-200">
                    {stage.systemDependencies.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">2) System Fragmentation</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {industry.systemTags.map((tag) => (
            <span key={tag} className="rounded-full border border-emerald-300/35 bg-emerald-200/10 px-3 py-1 text-xs text-emerald-100">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.fragmentation.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-4">
              <p className="font-semibold text-white">{item.name}</p>
              <p className="mt-1 text-slate-300">{item.mechanics}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">2b) Risk Context (Benchmarks)</h2>
        <p className="mt-2 text-sm text-slate-300">
          Benchmarks are directional ranges from external publications. They frame severity and are calibrated during operational audit.
        </p>
        <div className="mt-4 space-y-3">
          {industry.riskContext.map((item) => (
            <article key={item.claim} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <p className="text-sm text-slate-100">
                {item.claim}
                <SourceRefs ids={item.sourceIds} />
              </p>
              <div className="mt-2 grid gap-2 text-xs sm:grid-cols-2">
                <p className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-slate-300">
                  <span className="font-semibold text-slate-100">Benchmark range:</span> {item.benchmarkRange}
                </p>
                <p className="rounded-lg border border-slate-800/80 bg-slate-900/60 px-3 py-2 text-slate-300">
                  <span className="font-semibold text-slate-100">As of:</span> {item.asOf}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">3) Failure Mechanics</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.failureMechanics.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">4) What We Reconstruct</h2>
        <p className="mt-2 text-sm text-slate-300">
          We build an internal execution layer around existing systems. We do not replace core systems of record.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.reconstruct.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">4b) Data Quality Prerequisites</h2>
        <p className="mt-2 text-sm text-slate-300">Automation amplifies upstream data quality. These controls are required before scale-out.</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.dataQualityPrerequisites.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">5) Engagement Model</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {industry.engagementModel.map((phase) => (
            <article key={phase.phase} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <p className="text-base font-semibold text-white">{phase.phase}</p>
              <p className="mt-2 text-sm text-slate-300">{phase.objective}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.12em] text-slate-400">Outputs</p>
              <ul className="mt-2 space-y-1 text-sm text-slate-200">
                {phase.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">5b) Change Management & Continuity</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {industry.changeManagement.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-amber-300/25 bg-amber-950/15 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Regulatory / Jurisdictional Variance</h2>
        <p className="mt-3 text-sm text-slate-200">{industry.regulatoryCaveat}</p>
      </section>

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/85 to-emerald-900/20 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">6) Executive Outcomes (Measurable)</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-emerald-300/20 bg-slate-950/50">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-900/70 text-xs uppercase tracking-[0.12em] text-slate-300">
              <tr>
                <th className="px-4 py-3">Metric</th>
                <th className="px-4 py-3">Baseline Note</th>
                <th className="px-4 py-3">Target Range</th>
                <th className="px-4 py-3">Control Link</th>
              </tr>
            </thead>
            <tbody>
              {industry.outcomeMetrics.map((item) => (
                <tr key={item.metric} className="border-t border-slate-800/70 text-slate-100">
                  <td className="px-4 py-3 font-semibold text-white">{item.metric}</td>
                  <td className="px-4 py-3 text-slate-300">{item.baselineNote}</td>
                  <td className="px-4 py-3 text-slate-300">{item.targetRange}</td>
                  <td className="px-4 py-3 text-slate-300">{item.controlLink}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Sources</h2>
        <p className="mt-2 text-sm text-slate-300">Directional references for benchmark claims and control framing. Client baselines are validated during audit.</p>
        <ol className="mt-4 space-y-3 text-sm text-slate-200">
          {industry.sources.map((source) => (
            <li key={source.id} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-4">
              <p className="font-semibold text-white">[{source.id}] {source.title}</p>
              <p className="mt-1 text-slate-300">{source.publisher}</p>
              <p className="mt-1 break-all text-xs text-slate-400">{source.url}</p>
              <p className="mt-1 text-xs text-slate-400">Accessed: {source.accessedOn}</p>
              <p className="mt-2 text-xs text-slate-300">Claim support: {source.claimSupport}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/50 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Next Step</h2>
        <p className="mt-2 text-sm text-slate-300 sm:text-base">Start with a focused operational audit for one high-friction workflow.</p>
        <Link
          href="/services"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          Start Capability Discovery
        </Link>
      </section>
    </div>
  );
}
