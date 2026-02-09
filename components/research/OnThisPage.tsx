'use client';

import { useId } from 'react';

export type OnThisPageLink = {
  id: string;
  label: string;
};

type OnThisPageProps = {
  links: OnThisPageLink[];
};

function scrollToAnchor(id: string) {
  const node = document.getElementById(id);
  if (!node) {
    return;
  }

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  node.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  window.history.replaceState(null, '', `#${id}`);
}

export function OnThisPageMobile({ links }: OnThisPageProps) {
  const selectId = useId();

  if (!links.length) {
    return null;
  }

  return (
    <div className="rounded-2xl border border-slate-800/75 bg-slate-900/55 p-4 xl:hidden">
      <label htmlFor={selectId} className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">
        On this page
      </label>
      <select
        id={selectId}
        defaultValue=""
        onChange={(event) => {
          if (!event.target.value) {
            return;
          }
          scrollToAnchor(event.target.value);
        }}
        className="w-full rounded-xl border border-slate-700/70 bg-slate-950/55 px-3 py-2 text-sm text-slate-200"
      >
        <option value="" disabled>
          Jump to section
        </option>
        {links.map((link) => (
          <option key={link.id} value={link.id}>
            {link.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export function OnThisPageDesktop({ links }: OnThisPageProps) {
  if (!links.length) {
    return null;
  }

  return (
    <aside className="hidden xl:block" aria-label="On this page">
      <div className="sticky top-24 space-y-3 rounded-2xl border border-slate-800/75 bg-slate-900/55 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-emerald-200">On this page</p>
        <nav className="space-y-1 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="block rounded-lg px-2 py-1 text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
