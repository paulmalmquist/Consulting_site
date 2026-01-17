import { getPage } from '../../lib/content';
import { MarkdownRenderer } from '../../components/content/MarkdownRenderer';

export default function LegalPage() {
  const page = getPage('legal');

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{page.title}</h1>
        <p className="text-lg text-slate-300">{page.description}</p>
      </section>
      <MarkdownRenderer content={page.content} />
    </div>
  );
}
