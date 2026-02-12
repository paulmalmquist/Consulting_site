'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  ArrowRightLeft,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Factory,
  House,
  Layers3,
  Mail,
  Menu,
  Snowflake,
  UserRound,
  Workflow,
  X
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import navigation from '../../content/navigation.json';
import { cn } from '../ui/cn';

const ALLOWED_NAV_ITEMS = new Set([
  'Home',
  'What We Do',
  'The Shift',
  'Operational Assessment',
  'SaaS Iceberg',
  'Legacy SaaS',
  'Industries',
  'About',
  'Contact'
]);

const VISIBLE_NAV_GROUPS = navigation.groups
  .map((group) => ({
    ...group,
    items: group.items.filter((item) => ALLOWED_NAV_ITEMS.has(item.label))
  }))
  .filter((group) => group.items.length > 0);

const NAV_ICON_BY_LABEL: Record<string, LucideIcon> = {
  Home: House,
  'What We Do': Workflow,
  'The Shift': ArrowRightLeft,
  'Legacy SaaS': Layers3,
  Industries: Factory,
  'Operational Assessment': ClipboardCheck,
  'SaaS Iceberg': Snowflake,
  About: UserRound,
  Contact: Mail
};

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
    VISIBLE_NAV_GROUPS.forEach((group) => {
      initial[group.title] = true;
    });
    return initial;
  });

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
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
          <div className="relative h-11 w-11 overflow-hidden rounded-lg border border-cyan-100/25 bg-slate-950/80">
            <Image
              src="/assets/branding/Image-1.jpg"
              alt="Novendor logo"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </div>
          {!isCollapsed && (
            <div>
              <p className="nv-headline text-base font-semibold uppercase tracking-[0.14em] text-white">Novendor</p>
            </div>
          )}
        </div>
        <button
          type="button"
          className="hidden p-0.5 text-slate-500 transition hover:text-slate-300 md:inline-flex"
          onClick={toggleCollapsed}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <ChevronRight size={16} strokeWidth={1.8} /> : <ChevronLeft size={16} strokeWidth={1.8} />}
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
        {VISIBLE_NAV_GROUPS.map((group) => (
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
                  const Icon = NAV_ICON_BY_LABEL[item.label];
                  const active = isActivePath(item.href);
                  if (!Icon) return null;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        // Close the mobile drawer after navigation to avoid stuck overlays.
                        setDrawerOpen(false);
                      }}
                      className={cn(
                        'group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition',
                        active
                          ? 'border border-emerald-300/45 bg-emerald-200/10 text-emerald-50'
                          : 'border border-transparent text-slate-300 hover:border-emerald-300/35 hover:bg-slate-800/60 hover:text-emerald-100'
                      )}
                    >
                      <span
                        className={cn(
                          'inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-slate-950/60',
                          active
                            ? 'border-emerald-300/55 text-emerald-100'
                            : 'border-slate-700/80 text-slate-300 group-hover:border-emerald-300/45 group-hover:text-emerald-100'
                        )}
                        role="img"
                        aria-label={`${item.label} icon`}
                      >
                        <Icon size={16} strokeWidth={1.9} aria-hidden="true" />
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
            onClick={() => setDrawerOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-cyan-300/30 bg-slate-900/70 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
          >
            Book intro
          </Link>
        </div>
      </div>
    </aside>
  );
}
