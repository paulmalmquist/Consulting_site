import { KBExplorer } from '../../components/demo/KBExplorer';
import { QuestionSimulator } from '../../components/demo/QuestionSimulator';

export default function DemoPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Demo mode</h1>
        <p className="text-lg text-slate-300">
          This demo runs locally with prebuilt knowledge base objects. No external APIs or LLM calls required.
        </p>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Knowledge base explorer</h2>
        <KBExplorer />
      </section>
      <QuestionSimulator />
    </div>
  );
}
