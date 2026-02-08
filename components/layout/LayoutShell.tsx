'use client';

import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarNav } from './SidebarNav';
import { Topbar } from './Topbar';
import { SearchCommandPalette } from '../search/SearchCommandPalette';

export function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [desktopOverlayOpen, setDesktopOverlayOpen] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem('sidebar-collapsed');
    if (stored) {
      setIsCollapsed(stored === 'true');
    }
  }, []);

  useEffect(() => {
    // Keep the desktop overlay aligned with the expanded sidebar state.
    if (window.matchMedia('(min-width: 768px)').matches) {
      setDesktopOverlayOpen(!isCollapsed);
    }
  }, [isCollapsed]);

  const toggleCollapsed = () => {
    const next = !isCollapsed;
    setIsCollapsed(next);
    window.localStorage.setItem('sidebar-collapsed', String(next));
  };

  const closeSidebar = useCallback(() => {
    setDrawerOpen(false);
    setDesktopOverlayOpen(false);
    if (window.matchMedia('(min-width: 768px)').matches) {
      setIsCollapsed(true);
      window.localStorage.setItem('sidebar-collapsed', 'true');
    }
  }, []);

  useEffect(() => {
    // Route changes should always collapse the mobile drawer + overlay.
    setDrawerOpen(false);
    setDesktopOverlayOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawerOpen && !desktopOverlayOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        // Allow ESC to close the active sidebar affordance on desktop or mobile.
        closeSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closeSidebar, drawerOpen, desktopOverlayOpen]);

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
        {(drawerOpen || desktopOverlayOpen) && (
          <button
            type="button"
            aria-label="Close sidebar"
            className="fixed inset-0 z-30 bg-slate-950/60 md:bg-slate-950/40"
            onClick={closeSidebar}
          >
            {/* Overlay captures click-off interactions so users can collapse the sidebar anywhere. */}
          </button>
        )}
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
