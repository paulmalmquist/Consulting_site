import { getDocBySlug, getAllDocs } from '../../../lib/content';
import { MarkdownRenderer } from '../../../components/content/MarkdownRenderer';

export async function generateStaticParams() {
  return getAllDocs().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);
  return {
    title: doc.title,
    description: doc.description
  };
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Core Research</p>
        <h1 className="text-3xl font-semibold text-white">{doc.title}</h1>
        <p className="text-lg text-slate-300">{doc.description}</p>
      </section>
      <MarkdownRenderer content={doc.content} />
    </div>
  );
}
