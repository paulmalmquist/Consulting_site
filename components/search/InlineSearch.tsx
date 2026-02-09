'use client';

import Link from 'next/link';
import MiniSearch from 'minisearch';
import { Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { extractSnippet, SearchDocument } from '../../lib/search';

type GroupedResults = {
  type: string;
  items: SearchDocument[];
};

const TYPE_ORDER = ['page', 'research', 'post', 'case', 'deliverable', 'kb', 'doc'];

const TYPE_LABELS: Record<string, string> = {
  page: 'Pages',
  research: 'Research',
  post: 'Insights',
  case: 'Case Studies',
  deliverable: 'Deliverables',
  kb: 'Knowledge',
  doc: 'Core Research'
};

function sortGroups(groups: GroupedResults[]) {
  return groups.sort((a, b) => {
    const aIndex = TYPE_ORDER.indexOf(a.type);
    const bIndex = TYPE_ORDER.indexOf(b.type);
    return (aIndex === -1 ? TYPE_ORDER.length : aIndex) - (bIndex === -1 ? TYPE_ORDER.length : bIndex);
  });
}

export function InlineSearch() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState('');
  const [documents, setDocuments] = useState<SearchDocument[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (documents.length > 0) {
      return;
    }
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data) => setDocuments(data.documents))
      .catch(() => setDocuments([]));
  }, [documents.length]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (containerRef.current && !containerRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        inputRef.current?.blur();
      }

      if (event.key === '/' && document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current?.focus();
        setOpen(true);
      }
    };

    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const miniSearch = useMemo(() => {
    if (!documents.length) {
      return null;
    }
    const search = new MiniSearch<SearchDocument>({
      fields: ['title', 'description', 'content', 'tags'],
      storeFields: ['id', 'title', 'description', 'type', 'tags', 'href', 'content']
    });
    search.addAll(documents);
    return search;
  }, [documents]);

  const results = useMemo(() => {
    if (!miniSearch || !query.trim()) {
      return [];
    }
    return miniSearch
      .search(query, { prefix: true, fuzzy: 0.2 })
      .slice(0, 24)
      .map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        type: item.type,
        tags: item.tags,
        href: item.href,
        content: item.content
      }))
      .filter(
        (item): item is SearchDocument =>
          typeof item.id === 'string' &&
          typeof item.title === 'string' &&
          typeof item.description === 'string' &&
          typeof item.type === 'string' &&
          Array.isArray(item.tags) &&
          typeof item.href === 'string' &&
          typeof item.content === 'string'
      );
  }, [miniSearch, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, SearchDocument[]>();
    results.forEach((item) => {
      const list = map.get(item.type) ?? [];
      list.push(item);
      map.set(item.type, list);
    });
    return sortGroups(Array.from(map.entries()).map(([type, items]) => ({ type, items })));
  }, [results]);

  return (
    <div ref={containerRef} className="relative w-full md:flex-1">
      <label className="sr-only" htmlFor="site-search">
        Search site
      </label>
      <div className="flex w-full items-center gap-3 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500">
        <Search size={16} className="text-slate-400" />
        <input
          id="site-search"
          ref={inputRef}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search pages, research, insights..."
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          autoComplete="off"
          aria-label="Search site"
          aria-expanded={open}
          aria-controls="search-results"
        />
      </div>

      {open && (
        <div
          id="search-results"
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-700/70 bg-slate-950/95 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.55)]"
        >
          {!query.trim() && <p className="px-2 py-1 text-sm text-slate-400">Type to search the site.</p>}
          {query.trim() && grouped.length === 0 && <p className="px-2 py-1 text-sm text-slate-400">No results found.</p>}
          {grouped.map((group) => (
            <div key={group.type} className="mb-3 last:mb-0">
              <p className="px-2 pb-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan-200/90">
                {TYPE_LABELS[group.type] ?? group.type}
              </p>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery('');
                    }}
                    className="block rounded-xl border border-transparent px-3 py-2 transition hover:border-slate-700 hover:bg-slate-900/70"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-medium text-white">{item.title}</p>
                      <span className="rounded-full border border-slate-700/70 px-2 py-0.5 text-[10px] uppercase text-slate-300">
                        {item.type}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{extractSnippet(item.content, query, 110)}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
