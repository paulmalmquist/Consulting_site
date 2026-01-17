export function TagPills({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-slate-700/60 px-2 py-0.5 text-[11px] uppercase tracking-wide text-slate-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
