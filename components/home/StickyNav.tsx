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
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <Link href={logo.href} className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
          {logo.label}
        </Link>
        <div className="hidden items-center gap-6 md:flex">
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
              className="rounded-full bg-cyan-300 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              {primaryCta.label}
            </Link>
          </div>
        </div>
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-slate-700 px-3 py-2 text-xs font-semibold text-white transition hover:border-slate-500 hover:bg-white/5">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-slate-800/80 bg-slate-950 p-4 shadow-xl">
            <div className="space-y-3 text-sm text-slate-200">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="block transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              <Link
                href={primaryCta.href}
                className="block rounded-full bg-cyan-300 px-4 py-2 text-center text-xs font-semibold text-slate-950"
              >
                {primaryCta.label}
              </Link>
              <Link
                href={secondaryCta.href}
                className="block rounded-full border border-slate-700 px-4 py-2 text-center text-xs font-semibold text-white"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  );
}
