type StepperProps = {
  steps: string[];
};

export function Stepper({ steps }: StepperProps) {
  return (
    <ol className="grid gap-4 md:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-4 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200/40 text-sm font-semibold text-cyan-100">
            {String(index + 1).padStart(2, '0')}
          </div>
          <p className="text-sm leading-relaxed text-slate-200">{step}</p>
        </li>
      ))}
    </ol>
  );
}
