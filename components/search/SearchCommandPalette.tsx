'use client';

import { useEffect, useMemo, useState } from 'react';
import MiniSearch from 'minisearch';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { extractSnippet, SearchDocument } from '../../lib/search';

const typeFilters = ['all', 'page', 'post', 'case', 'deliverable', 'kb'];

export function SearchCommandPalette({
  open,
  onOpenChange
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState('');
  const [documents, setDocuments] = useState<SearchDocument[]>([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!open) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (documents.length > 0) return;
    fetch('/search-index.json')
      .then((res) => res.json())
      .then((data) => setDocuments(data.documents));
  }, [documents.length]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === '/' && !open) {
        event.preventDefault();
        onOpenChange(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onOpenChange]);

  const miniSearch = useMemo(() => {
    if (!documents.length) return null;
    const search = new MiniSearch<SearchDocument>({
      fields: ['title', 'description', 'content', 'tags'],
      storeFields: ['title', 'description', 'type', 'tags', 'href', 'content']
    });
    search.addAll(documents);
    return search;
  }, [documents]);

  const results = useMemo(() => {
    if (!miniSearch) return [];
    const searchResults = query
      ? miniSearch.search(query, { prefix: true, fuzzy: 0.2 })
      : documents;
    return searchResults.filter((item) => (filter === 'all' ? true : item.type === filter));
  }, [documents, filter, miniSearch, query]);

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Search">
      <div className="space-y-4">
        <div className="flex items-center gap-3 rounded-full border border-slate-700/60 bg-slate-800/60 px-4 py-2">
          <Search size={16} className="text-slate-400" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, posts, proof, KB objects…"
            className="w-full bg-transparent text-sm text-white outline-none"
            autoFocus
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {typeFilters.map((type) => (
            <button
              key={type}
              type="button"
              className={`rounded-full border px-3 py-1 text-xs uppercase tracking-wide transition ${
                filter === type
                  ? 'border-cyan-300/60 bg-cyan-400/10 text-cyan-100'
                  : 'border-slate-700/60 text-slate-300 hover:border-slate-500'
              }`}
              onClick={() => setFilter(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <div className="max-h-[50vh] space-y-3 overflow-y-auto pr-2">
          {results.length === 0 && (
            <p className="text-sm text-slate-400">No results yet. Try a different term.</p>
          )}
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => onOpenChange(false)}
              className="block rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 transition hover:border-slate-600"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <span className="rounded-full border border-slate-700/60 px-2 py-0.5 text-[10px] uppercase text-slate-300">
                  {item.type}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-400">{extractSnippet(item.content, query)}</p>
            </Link>
          ))}
        </div>
      </div>
    </Modal>
  );
}
