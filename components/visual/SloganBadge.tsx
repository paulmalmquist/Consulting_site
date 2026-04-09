export function SloganBadge({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-emerald-300/35 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100 ${className}`.trim()}
    >
      Own Your Operating Logic
    </span>
  );
}
