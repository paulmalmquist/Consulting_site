import { KBExplorer } from '../../components/demo/KBExplorer';
import { QuestionSimulator } from '../../components/demo/QuestionSimulator';

export default function DemoPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Demo: governance-first AI readiness</h1>
        <p className="text-lg text-slate-300">
          This demo runs locally with structured knowledge base objects. It proves that structure and governance matter
          more than model size — no external APIs or paid LLM calls required.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Knowledge base explorer</h2>
        <p className="text-sm text-slate-400">
          Example workflows, decisions, rules, and exceptions — each tied to a source citation.
        </p>
        <KBExplorer />
      </section>
      <section className="grid gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 md:grid-cols-3">
        <div>
          <p className="text-sm font-semibold text-white">Structure &gt; model size</p>
          <p className="mt-2 text-sm text-slate-400">Well-formed decision objects beat larger models without context.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Governance &gt; novelty</p>
          <p className="mt-2 text-sm text-slate-400">Auditability, ownership, and escalation rules stay visible.</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explainability &gt; magic</p>
          <p className="mt-2 text-sm text-slate-400">Every response cites a source object you can trace.</p>
        </div>
      </section>
      <QuestionSimulator />
    </div>
  );
}
