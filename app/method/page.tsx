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
      <section id="internal-support" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Intent-Based Internal Support</h2>
        <div className="space-y-3 text-slate-300">
          <p>Most internal support systems fail because they expect the person with the problem to know where to go.</p>
          <p>
            I design intake and routing systems that start with intent — not ticket categories — and automatically
            assemble the context needed to answer, route, or escalate safely.
          </p>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-slate-300">
          <li>Natural-language intake instead of forms</li>
          <li>Automatic context assembly (role, location, policy, history)</li>
          <li>Clear routing to information, action, or escalation</li>
          <li>Human-in-the-loop controls for sensitive decisions</li>
          <li>Full audit trail of how outcomes were reached</li>
        </ul>
        <p className="text-slate-300">
          This approach reduces misrouted tickets, repeat questions, and dependency on tribal knowledge — without
          touching production systems.
        </p>
      </section>
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
