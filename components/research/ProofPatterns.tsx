import type { ResearchEntry } from '../../lib/content';

type ProofPattern = {
  id: string;
  title: string;
  description: string;
  whatToShow: string[];
  evidence: string[];
};

type ProofSection = {
  type: 'proofPatterns';
  title: string;
  patterns: ProofPattern[];
};

type ProofPatternsProps = {
  entry: ResearchEntry;
};

export function ProofPatterns({ entry }: ProofPatternsProps) {
  const section = entry.sections.find((item) => item.type === 'proofPatterns') as ProofSection | undefined;

  if (!section) {
    return null;
  }

  return (
    <section id="proof-patterns" className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{section.title}</h2>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {section.patterns.map((pattern) => (
          <details key={pattern.id} className="rounded-2xl border border-slate-800/75 bg-slate-950/45 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-white">{pattern.title}</summary>
            <div className="mt-3 space-y-3 text-sm text-slate-300">
              <p>{pattern.description}</p>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">What to show on a website</p>
                <ul className="mt-1 space-y-1">
                  {pattern.whatToShow.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">What evidence counts</p>
                <ul className="mt-1 space-y-1">
                  {pattern.evidence.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
