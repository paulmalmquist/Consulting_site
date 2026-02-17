import Link from 'next/link';
import { CredibilitySection } from '../../components/marketing/CredibilitySection';
import { CategoryMessagingFramework } from '../../components/marketing/CategoryMessagingFramework';

const VALUE_FOCUS = ['Lower SaaS spend', 'Faster execution', 'Stronger data ownership', 'Operational leverage at scale'];

const ASSESSMENT_EVALUATION = [
  'Redundant tools',
  'Manual processes',
  'Cost leakage',
  'Data fragmentation',
  'Automation opportunities'
];

const ASSESSMENT_ROADMAP = ['Cost reduction', 'Efficiency gains', 'AI deployment opportunities'];

const WORKFLOW_TARGETS = ['Operations', 'Credit', 'Underwriting', 'Reporting', 'Intake', 'Analysis'];

const MODEL_PHASES = [
  { title: 'Phase 1 — Assessment', description: 'Understand where the largest gains exist.' },
  { title: 'Phase 2 — Design', description: 'Create system architecture tailored to your workflows.' },
  { title: 'Phase 3 — Deployment', description: 'Implement high-impact automations.' },
  { title: 'Phase 4 — Scale', description: 'Expand internal infrastructure across teams.' }
];

const ICP = [
  'Spend heavily on SaaS',
  'Operate complex workflows',
  'Want more control over their systems',
  'Need faster execution',
  'Are scaling operations'
];

export default function ServicesPage() {
  return (
    <div className="space-y-8 lg:space-y-10">
      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-6 sm:p-8 lg:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Services</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
          Operational Infrastructure, Rebuilt for the AI Era
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          We help companies reduce software spend, automate workflows, and build internal AI systems that improve speed, control, and margins.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/operational-assessment"
            className="inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10"
          >
            Book an Executive Assessment
          </Link>
          <Link
            href="/what-we-do"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-950/45 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/70"
          >
            View Engagement Model
          </Link>
        </div>
      </section>

      <CredibilitySection />

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">We Replace Software Dependence With Internal Capability</h2>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Most organizations rely on 20-60 tools to operate. We identify where software is creating cost, friction, and operational drag,
          then design AI-native systems that bring those capabilities in-house.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {VALUE_FOCUS.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4 text-sm text-slate-200">
              {item}
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Core Services</h2>
        <div className="grid gap-4">
          <article className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
            <h3 className="text-xl font-semibold text-white">1) Executive Operational Assessment</h3>
            <p className="mt-3 text-sm text-slate-300">A deep analysis of your workflows, software stack, and operational bottlenecks.</p>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-slate-400">What we evaluate</p>
            <ul className="mt-2 grid gap-2 md:grid-cols-2">
              {ASSESSMENT_EVALUATION.map((item) => (
                <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3 text-sm text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs uppercase tracking-[0.12em] text-slate-400">Outcome</p>
            <p className="mt-2 text-sm text-slate-300">A prioritized roadmap tied to:</p>
            <ul className="mt-2 grid gap-2 md:grid-cols-3">
              {ASSESSMENT_ROADMAP.map((item) => (
                <li key={item} className="rounded-xl border border-emerald-300/20 bg-slate-950/45 p-3 text-sm text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
            <h3 className="text-xl font-semibold text-white">2) AI Infrastructure Design</h3>
            <p className="mt-3 text-sm text-slate-300">We design internal AI systems that replace high-cost tools and streamline operations.</p>
            <div className="mt-4 grid gap-2 md:grid-cols-2">
              {['Internal decision-support tools', 'Automated intake workflows', 'Risk evaluation engines', 'Reporting automation'].map((item) => (
                <div key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200">Outcome: A blueprint for a more scalable operating model.</p>
          </article>

          <article className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
            <h3 className="text-xl font-semibold text-white">3) Workflow Automation Deployment</h3>
            <p className="mt-3 text-sm text-slate-300">
              We implement AI-native workflows that remove manual effort across high-impact functions.
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {WORKFLOW_TARGETS.map((item) => (
                <div key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200">Outcome: Immediate productivity gains and reduced execution friction.</p>
          </article>

          <article className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
            <h3 className="text-xl font-semibold text-white">4) SaaS Consolidation Strategy</h3>
            <p className="mt-3 text-sm text-slate-300">A structured approach to reducing tool sprawl and replacing selected platforms.</p>
            <div className="mt-4 grid gap-2 md:grid-cols-3">
              {['Identify what to keep', 'Identify what to replace', 'Identify what to build internally'].map((item) => (
                <div key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3 text-sm text-slate-200">
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-200">Outcome: Lower cost + greater operational control.</p>
          </article>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Built for Speed and Measurable Impact</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {MODEL_PHASES.map((phase) => (
            <article key={phase.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/45 p-4">
              <h3 className="text-base font-semibold text-white">{phase.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{phase.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-900/55 p-5 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Ideal Client Profile</h2>
        <ul className="mt-4 grid gap-2 md:grid-cols-2">
          {ICP.map((item) => (
            <li key={item} className="rounded-xl border border-slate-800/80 bg-slate-950/45 p-3 text-sm text-slate-200">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CategoryMessagingFramework />

      <section className="rounded-3xl border border-emerald-300/25 bg-gradient-to-r from-slate-900/85 to-emerald-900/20 p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">See Where You&apos;re Overpaying for Software</h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
          In one session, we identify where internal AI systems can reduce cost and increase speed.
        </p>
        <Link
          href="/operational-assessment"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-emerald-300/45 bg-slate-950/70 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/10"
        >
          Schedule Executive Assessment
        </Link>
      </section>
    </div>
  );
}
