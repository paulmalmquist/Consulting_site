type ProofBullet = {
  icon: string;
  title: string;
};

type ProofBulletsProps = {
  items: ProofBullet[];
};

export function ProofBullets({ items }: ProofBulletsProps) {
  return (
    <ul className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl border border-cyan-100/20 bg-slate-950/70 p-8 shadow-[0_0_26px_rgba(94,203,255,0.14)]">
          <div className="mb-4 inline-flex">
            <span className="nv-mark-badge">N</span>
          </div>
          <div className="text-lg font-semibold uppercase tracking-[0.08em] text-white">{item.title}</div>
        </li>
      ))}
    </ul>
  );
}
