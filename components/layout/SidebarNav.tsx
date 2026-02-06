'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Menu, PanelLeftClose, PanelLeftOpen, X } from 'lucide-react';
import navigation from '../../content/navigation.json';
import { cn } from '../ui/cn';

type LayoutState = {
  isCollapsed: boolean;
  toggleCollapsed: () => void;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
};

export function SidebarNav({ isCollapsed, toggleCollapsed, drawerOpen, setDrawerOpen }: LayoutState) {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    navigation.groups.forEach((group) => {
      initial[group.title] = true;
    });
    return initial;
  });

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside
      className={cn(
        'fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-700/50 bg-slate-900/80 backdrop-blur md:static md:translate-x-0',
        drawerOpen ? 'translate-x-0' : '-translate-x-full',
        isCollapsed ? 'md:w-20' : 'md:w-72'
      )}
    >
      <div className="flex items-center justify-between px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/30 to-transparent text-lg font-semibold">
            MDO
          </div>
          {!isCollapsed && (
            <div>
              <p className="text-sm font-semibold">Malmquist De Oliveira</p>
            </div>
          )}
        </div>
        <button
          type="button"
          className="hidden rounded-md border border-slate-700/60 p-2 text-slate-200 transition hover:border-slate-500 hover:text-white md:inline-flex"
          onClick={toggleCollapsed}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <PanelLeftOpen size={18} /> : <PanelLeftClose size={18} />}
        </button>
        <button
          type="button"
          className="inline-flex rounded-md border border-slate-700/60 p-2 text-slate-200 md:hidden"
          onClick={() => setDrawerOpen(false)}
          aria-label="Close menu"
        >
          <X size={18} />
        </button>
      </div>
      <nav className="flex-1 space-y-4 overflow-y-auto px-3 pb-6">
        {navigation.groups.map((group) => (
          <div key={group.title} className="space-y-2">
            <button
              type="button"
              onClick={() => toggleGroup(group.title)}
              className="flex w-full items-center justify-between rounded-md px-2 py-2 text-xs font-semibold uppercase tracking-wide text-slate-400 hover:text-white"
              aria-expanded={openGroups[group.title]}
            >
              <span className={cn(isCollapsed && 'sr-only')}>{group.title}</span>
              <ChevronDown
                size={14}
                className={cn('transition', openGroups[group.title] ? 'rotate-0' : '-rotate-90', isCollapsed && 'hidden')}
              />
            </button>
            {openGroups[group.title] && (
              <div className="space-y-1">
                {group.items.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition',
                        active
                          ? 'bg-slate-700/60 text-white'
                          : 'text-slate-300 hover:bg-slate-800/60 hover:text-white'
                      )}
                    >
                      <span className="text-base" aria-hidden>
                        {item.icon}
                      </span>
                      <span className={cn(isCollapsed && 'sr-only')}>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="px-4 pb-5">
        <div className="rounded-xl border border-slate-700/60 bg-slate-800/60 p-4 text-xs text-slate-200">
          <p className={cn(isCollapsed && 'sr-only')}>Ready to talk?</p>
          <Link
            href="/contact"
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-cyan-400/20 px-3 py-2 text-xs font-semibold text-cyan-100 hover:bg-cyan-400/30"
          >
            Book intro
          </Link>
        </div>
      </div>
    </aside>
  );
}
