import Link from 'next/link';
import { getAllInsights } from '../../lib/content';
import { TagPills } from '../../components/content/TagPills';

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Insights</h1>
        <p className="text-lg text-slate-300">Short reads for leaders who need operational clarity before AI scale.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/insights/${post.slug}`}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-600"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{post.date}</p>
            <h2 className="mt-2 text-lg font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{post.description}</p>
            <div className="mt-3">
              <TagPills tags={post.tags} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
