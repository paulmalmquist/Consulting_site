import Link from 'next/link';

type CTASectionProps = {
  headline: string;
  body: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function CTASection({ headline, body, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="flex flex-col gap-6 rounded-3xl border border-slate-700/80 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-slate-950 p-8 md:flex-row md:items-center md:justify-between">
      <div className="max-w-2xl space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{headline}</h2>
        <p className="text-base leading-relaxed text-slate-200">{body}</p>
      </div>
      <div className="flex flex-wrap gap-3">
        <Link
          href={primaryCta.href}
          className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
        >
          {primaryCta.label}
        </Link>
        <Link
          href={secondaryCta.href}
          className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
        >
          {secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
