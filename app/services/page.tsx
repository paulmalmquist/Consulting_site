import { getPage, readJson } from '../../lib/content';
import { MarkdownRenderer } from '../../components/content/MarkdownRenderer';
import { ContentCard } from '../../components/content/ContentCard';

export default function ServicesPage() {
  const page = getPage('services');
  const services = readJson<Array<{ title: string; description: string; tags: string[]; href: string; eyebrow?: string }>>(
    'services.json'
  );

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{page.title}</h1>
        <p className="text-lg text-slate-300">{page.description}</p>
      </section>
      <MarkdownRenderer content={page.content} />
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Engagement cards</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((item) => (
            <ContentCard key={item.title} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
