type CredibilitySectionProps = {
  className?: string;
  headline?: string;
  intro?: string;
  pillars?: Array<{ title: string; description: string }>;
  showTrustAmplifiers?: boolean;
};

const AUTHORITY_BLOCKS = [
  {
    title: 'Operator-Led Approach',
    description: 'Grounded in risk, operations, and data strategy.'
  },
  {
    title: 'Industry Focused',
    description: 'Deep experience across credit, real estate, and financial services.'
  },
  {
    title: 'Outcome Driven',
    description: 'Every engagement tied to measurable impact.'
  },
  {
    title: 'Enterprise Mindset',
    description: 'Built to support complex organizations and leadership teams.'
  }
];

const TRUST_AMPLIFIERS = [
  'Selected by leadership teams to evaluate operational infrastructure',
  'Supporting organizations navigating AI adoption',
  'Helping firms modernize internal systems'
];

export function CredibilitySection({
  className = '',
  headline = 'Built for Operators Who Value Performance',
  intro,
  pillars = AUTHORITY_BLOCKS,
  showTrustAmplifiers = true
}: CredibilitySectionProps) {
  return (
    <section className={`rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 ${className}`.trim()}>
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Credibility</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">{headline}</h2>
      {intro ? <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">{intro}</p> : null}
      <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {pillars.map((block) => (
          <article key={block.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
            <h3 className="text-base font-semibold text-white">{block.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{block.description}</p>
          </article>
        ))}
      </div>
      {showTrustAmplifiers ? (
        <div className="mt-5 rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Trust Amplifiers</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {TRUST_AMPLIFIERS.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
