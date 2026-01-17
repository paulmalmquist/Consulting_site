'use client';

import { ReactNode, useEffect, useMemo, useState } from 'react';
import { SidebarNav } from './SidebarNav';
import { Topbar } from './Topbar';
import { SearchCommandPalette } from '../search/SearchCommandPalette';

export function LayoutShell({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('sidebar-collapsed');
    if (stored) {
      setIsCollapsed(stored === 'true');
    }
  }, []);

  const toggleCollapsed = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    window.localStorage.setItem('sidebar-collapsed', String(next));
  };

  const value = useMemo(
    () => ({
      isCollapsed,
      toggleCollapsed,
      drawerOpen,
      setDrawerOpen,
      openSearch: () => setSearchOpen(true)
    }),
    [isCollapsed, drawerOpen]
  );

  return (
    <div className="min-h-screen bg-ink text-white">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="flex min-h-screen">
        <SidebarNav {...value} />
        <div className="flex w-full flex-col">
          <Topbar {...value} />
          <main id="main" className="flex-1 px-4 pb-12 pt-6 md:px-8">
            {children}
          </main>
        </div>
      </div>
      <SearchCommandPalette open={searchOpen} onOpenChange={setSearchOpen} />
    </div>
  );
}
