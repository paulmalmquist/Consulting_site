export type SearchDocument = {
  id: string;
  title: string;
  description: string;
  type: string;
  tags: string[];
  href: string;
  content: string;
};

export function extractSnippet(text: string, query: string, length = 160): string {
  if (!query) return text.slice(0, length) + (text.length > length ? '…' : '');
  const lower = text.toLowerCase();
  const idx = lower.indexOf(query.toLowerCase());
  if (idx === -1) {
    return text.slice(0, length) + (text.length > length ? '…' : '');
  }
  const start = Math.max(idx - 40, 0);
  const end = Math.min(idx + length, text.length);
  const snippet = text.slice(start, end).trim();
  return (start > 0 ? '…' : '') + snippet + (end < text.length ? '…' : '');
}
