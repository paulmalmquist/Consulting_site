import Link from 'next/link';
import { TagPills } from './TagPills';

export type CardItem = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  eyebrow?: string;
};

export function ContentCard({ item }: { item: CardItem }) {
  return (
    <Link
      href={item.href}
      className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/60 p-4 transition duration-200 hover:-translate-y-1 hover:border-slate-600 hover:shadow-card"
    >
      <div className="space-y-3">
        <div className="h-24 w-full rounded-xl bg-gradient-to-br from-cyan-400/10 via-transparent to-slate-800/60" />
        {item.eyebrow && <p className="text-xs uppercase tracking-widest text-cyan-200/80">{item.eyebrow}</p>}
        <div>
          <h3 className="text-base font-semibold text-white group-hover:text-cyan-100">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{item.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <TagPills tags={item.tags} />
      </div>
    </Link>
  );
}
