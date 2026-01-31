type EngagementPhase = {
  title: string;
  duration: string;
  description: string;
  decision: string;
};

type EngagementPhasesProps = {
  title: string;
  phases: EngagementPhase[];
};

export function EngagementPhases({ title, phases }: EngagementPhasesProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {phases.map((phase) => (
          <div key={phase.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{phase.duration}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{phase.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{phase.description}</p>
            <p className="mt-3 text-sm font-semibold text-slate-200">Decision enabled: {phase.decision}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
