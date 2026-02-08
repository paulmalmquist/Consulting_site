'use client';

import Link from 'next/link';
import { BriefcaseBusiness, CalendarDays, Folder, House, Menu, Search } from 'lucide-react';
import { cn } from '../ui/cn';

type TopbarProps = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  openSearch: () => void;
};

export function Topbar({ openSearch, setDrawerOpen }: TopbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-ink/80 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex w-full flex-col gap-3 md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
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
        <button
          type="button"
          className={cn(
            'flex w-full items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-left text-sm text-slate-300 transition hover:border-slate-500 md:min-w-[320px] md:w-auto'
          )}
          onClick={openSearch}
          aria-label="Open search"
        >
          <Search size={16} className="text-slate-400" />
        </button>
        <div className="hidden md:block" />
        <nav className="grid grid-cols-4 gap-2 md:hidden">
          {[
            { label: 'Overview', href: '#overview', icon: House },
            { label: 'Services', href: '/services', icon: BriefcaseBusiness },
            { label: 'Book a call', href: '/contact', icon: CalendarDays },
            { label: 'Docs', href: '/docs', icon: Folder }
          ].map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                aria-label={item.label}
                className="group flex min-h-[44px] items-center justify-center rounded-xl border border-slate-800/80 bg-slate-900/40 px-2 text-slate-400 transition hover:border-cyan-300/40 hover:text-cyan-200 hover:shadow-[0_0_16px_rgba(127,215,224,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
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
