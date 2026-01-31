type VisualPlaceholderProps = {
  title: string;
  description: string;
};

export function VisualPlaceholder({ title, description }: VisualPlaceholderProps) {
  return (
    <div className="rounded-3xl border border-slate-800/70 bg-slate-950/40 p-6">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
        <span>{title}</span>
        <span className="text-cyan-200">Placeholder</span>
      </div>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
      <div className="mt-5 space-y-3" aria-hidden="true">
        <div className="h-2 w-full rounded-full bg-slate-800" />
        <div className="h-2 w-4/5 rounded-full bg-slate-800" />
        <div className="h-2 w-3/5 rounded-full bg-slate-800" />
        <div className="grid gap-3 pt-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
            <div className="h-2 w-3/4 rounded-full bg-slate-800" />
            <div className="mt-3 h-2 w-2/3 rounded-full bg-slate-800" />
          </div>
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4">
            <div className="h-2 w-4/5 rounded-full bg-slate-800" />
            <div className="mt-3 h-2 w-1/2 rounded-full bg-slate-800" />
          </div>
        </div>
      </div>
    </div>
  );
}
