'use client';

import { Menu, Search } from 'lucide-react';
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
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-slate-800/80 bg-ink/80 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-700/60 p-2 text-slate-200 md:hidden"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={18} />
        </button>
        <div className="hidden text-xs uppercase tracking-[0.2em] text-slate-500 md:block">
          AI Readiness & Operations
        </div>
      </div>
      <button
        type="button"
        className={cn(
          'flex w-full max-w-lg items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-left text-sm text-slate-300 transition hover:border-slate-500 md:flex'
        )}
        onClick={openSearch}
      >
        <Search size={16} className="text-slate-400" />
        <span className="flex-1">Search playbooks, proof, and KB objects…</span>
        <span className="text-xs text-slate-500">/</span>
      </button>
    </header>
  );
}
