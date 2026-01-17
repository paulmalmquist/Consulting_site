import { getPage, readJson } from '../../lib/content';
import { MarkdownRenderer } from '../../components/content/MarkdownRenderer';

type Diagram = { title: string; description: string; steps: string[] };

export default function MethodPage() {
  const page = getPage('method');
  const diagrams = readJson<Diagram[]>('method_diagrams.json');

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{page.title}</h1>
        <p className="text-lg text-slate-300">{page.description}</p>
      </section>
      <MarkdownRenderer content={page.content} />
      <section className="grid gap-4 md:grid-cols-3">
        {diagrams.map((diagram) => (
          <div key={diagram.title} className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5">
            <h3 className="text-lg font-semibold text-white">{diagram.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{diagram.description}</p>
            <div className="mt-4 space-y-2 text-xs text-cyan-200">
              {diagram.steps.map((step) => (
                <div key={step} className="rounded-md border border-cyan-400/20 bg-cyan-500/10 px-2 py-1">
                  {step}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
