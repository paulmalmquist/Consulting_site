import { getInsightBySlug, getAllInsights } from '../../../lib/content';
import { MarkdownRenderer } from '../../../components/content/MarkdownRenderer';

export async function generateStaticParams() {
  return getAllInsights().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getInsightBySlug(params.slug);
  return {
    title: post.title,
    description: post.description
  };
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const post = getInsightBySlug(params.slug);

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Insight</p>
        <h1 className="text-3xl font-semibold text-white">{post.title}</h1>
        <p className="text-lg text-slate-300">{post.description}</p>
      </section>
      <MarkdownRenderer content={post.content} />
    </div>
  );
}
