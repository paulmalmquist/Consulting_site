type ProofBulletsProps = {
  items: string[];
};

export function ProofBullets({ items }: ProofBulletsProps) {
  return (
    <ul className="grid gap-3 text-sm text-slate-200 md:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
          {item}
        </li>
      ))}
    </ul>
  );
}
