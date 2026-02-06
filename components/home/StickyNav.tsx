import Link from 'next/link';

export type NavLink = {
  label: string;
  href: string;
};

type StickyNavProps = {
  logo: { label: string; href: string };
  links: NavLink[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function StickyNav({ logo, links, primaryCta, secondaryCta }: StickyNavProps) {
  return (
    <nav className="sticky top-0 z-40 border-b border-slate-800/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center gap-6 px-4 py-4 md:px-6">
        <div className="flex items-center gap-4 text-sm text-slate-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={secondaryCta.href}
            className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
          >
            {secondaryCta.label}
          </Link>
          <Link
            href={primaryCta.href}
            className="rounded-full border border-cyan-300/40 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
          >
            {primaryCta.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}
