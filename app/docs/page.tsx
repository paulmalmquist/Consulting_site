import Link from 'next/link';
import { getAllDocs } from '../../lib/content';

export default function DocsPage() {
  const docs = getAllDocs();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Docs</h1>
        <p className="text-lg text-slate-300">Detailed guidance on method, engagement structure, and decision controls.</p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-600"
          >
            <h2 className="text-lg font-semibold text-white">{doc.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{doc.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
