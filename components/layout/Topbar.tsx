'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRightLeft, Factory, House, Menu, Workflow } from 'lucide-react';
import { cn } from '../ui/cn';
import { InlineSearch } from '../search/InlineSearch';

type TopbarProps = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

export function Topbar({ setDrawerOpen }: TopbarProps) {
  const pathname = usePathname();
  const mobilePrimaryNav = [
    { label: 'Home', href: '/', icon: House },
    { label: 'What We Do', href: '/what-we-do', icon: Workflow },
    { label: 'The Shift', href: '/shift', icon: ArrowRightLeft },
    { label: 'Industries', href: '/industries', icon: Factory },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-ink/80 px-4 py-4 backdrop-blur md:px-8">
      <div className="mx-auto flex w-full max-w-none flex-col gap-3 md:mr-auto md:ml-0 md:flex-row md:items-center md:gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-slate-700/60 p-2 text-slate-200 md:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
        <InlineSearch />
        <nav className="grid grid-cols-4 gap-2 md:hidden">
          {mobilePrimaryNav.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className={cn(
                  'group flex min-h-[44px] items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/40 px-2 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(127,215,224,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink',
                  isActive && 'border-cyan-300/40 text-cyan-200 focus-visible:border-cyan-200/70'
                )}
              >
                <Icon size={18} strokeWidth={2} />
                <span className="sr-only">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
