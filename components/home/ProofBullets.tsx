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
        <li key={item.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-8">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-cyan-300/10 text-4xl">
            {item.icon}
          </div>
          <div className="text-lg font-semibold text-white">{item.title}</div>
        </li>
      ))}
    </ul>
  );
}
