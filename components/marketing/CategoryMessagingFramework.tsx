const CATEGORY_OPTIONS = [
  'AI-Native Operations Infrastructure',
  'Internal AI Systems Consulting',
  'Post-SaaS Infrastructure Strategy',
  'AI Operating Model Design'
];

const ENEMY_POINTS = ['Tool sprawl', 'Vendor lock-in', 'Fragmented workflows', 'Rising software costs'];

const SOUND_BITES = [
  'The shift from SaaS-dependent to AI-native.',
  'From software stacks to internal systems.',
  'Own your workflows.',
  'Build what competitors cannot buy.'
];

export function CategoryMessagingFramework() {
  return (
    <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8">
      <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Category Positioning</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl">Category Creator Messaging Framework</h2>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Category Name Options</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {CATEGORY_OPTIONS.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Core Positioning Statement</p>
          <p className="mt-3 text-sm text-slate-200">We do not help companies adopt AI. We help companies rebuild how they operate.</p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-slate-400">Category Story</p>
          <p className="mt-2 text-sm text-slate-300">Old model: buy more software to solve problems.</p>
          <p className="mt-1 text-sm text-slate-200">New model: build internal AI systems that create advantage.</p>
        </article>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Enemy</p>
          <p className="mt-2 text-sm text-slate-300">The problem is not AI adoption. It is:</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {ENEMY_POINTS.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Point of View</p>
          <p className="mt-3 text-sm text-slate-200">
            Over the next decade, companies that own their infrastructure will outperform those that rent it.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-slate-400">Differentiation</p>
          <p className="mt-2 text-sm text-slate-300">Consultants help you choose software.</p>
          <p className="mt-1 text-sm text-slate-200">Novendor helps you outgrow it.</p>
        </article>

        <article className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
          <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Sound Bites</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            {SOUND_BITES.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-900/60 p-3">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <p className="mt-5 text-sm font-semibold text-emerald-100">
        Final positioning line: Novendor helps companies transition from software dependence to AI-native operations.
      </p>
    </section>
  );
}
