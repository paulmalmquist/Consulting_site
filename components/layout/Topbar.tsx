'use client';

import { Menu } from 'lucide-react';
import { InlineSearch } from '../search/InlineSearch';

type TopbarProps = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

export function Topbar({ setDrawerOpen }: TopbarProps) {
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
      </div>
    </header>
  );
}
