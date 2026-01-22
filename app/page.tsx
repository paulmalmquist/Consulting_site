import Link from 'next/link';
import { Hero } from '../components/content/Hero';
import { CarouselRow } from '../components/content/CarouselRow';
import { readJson, getAllCaseStudies, getAllInsights } from '../lib/content';

type CardData = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  eyebrow?: string;
};

type HomeData = {
  hero: { headline: string; subheadline: string };
  pillars: string[];
  whatYouGet: string[];
  deliverables: { title: string; description: string }[];
};

export default function HomePage() {
  const home = readJson<HomeData>('home.json');
  const services = readJson<CardData[]>('services.json');
  const workflows = readJson<CardData[]>('workflows.json');
  const deliverables = readJson<CardData[]>('deliverables.json');
  const caseStudies = getAllCaseStudies().slice(0, 4).map((item) => ({
    title: item.title,
    description: item.description,
    tags: item.tags,
    href: `/proof/${item.slug}`,
    eyebrow: 'Engagement'
  }));
  const insights = getAllInsights().slice(0, 4).map((item) => ({
    title: item.title,
    description: item.description,
    tags: item.tags,
    href: `/insights/${item.slug}`,
    eyebrow: 'Insight'
  }));

  return (
    <div className="space-y-12">
      <Hero headline={home.hero.headline} subheadline={home.hero.subheadline} pillars={home.pillars} />
      <CarouselRow
        title="How I help"
        description="Engagements start with a short, fixed-scope pilot so teams can validate outcomes before scaling."
        items={services}
        viewAllHref="/services"
      />
      <CarouselRow
        title="Common workflows I compress"
        description="Concrete support flows where intent, routing, and audit trails matter."
        items={workflows}
        viewAllHref="/support-ops"
      />
      <CarouselRow
        title="Example engagements"
        description="Anonymized engagements that show the operational pattern."
        items={caseStudies}
        viewAllHref="/proof"
      />
      <CarouselRow
        title="Insights"
        description="Short reads for leaders modernizing support ops."
        items={insights}
        viewAllHref="/insights"
      />
      <CarouselRow
        title="Tools & deliverables"
        description="Reusable assets that make governance, auditability, and HITL practical."
        items={deliverables}
        viewAllHref="/method"
      />

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">What you get</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            A practical support-ops package that proves value without production interference.
          </p>
        </div>
        <ul className="space-y-3 text-base leading-relaxed text-slate-200">
          {home.whatYouGet.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/services"
            className="rounded-full border border-slate-700/70 px-5 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            How engagements are structured
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/30"
          >
            Start with a Pilot
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">How it works</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We build a working facsimile of your environment so regulated teams see outcomes before touching production.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>1. Map real workflows (not titles or org charts).</p>
          <p>2. Capture decisions, rules, and exceptions that slow delivery.</p>
          <p>3. Build the operational microcosm (safe, working facsimile).</p>
          <p>4. Governance and auditability are designed in from day one.</p>
          <p>5. Test scenarios safely with observable outcomes.</p>
          <div className="space-y-2">
            <p className="font-semibold text-white">HITL patterns built for compliance:</p>
            <p>• Review before action</p>
            <p>• Review after action</p>
            <p>• Override and escalation</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Safety &amp; governance</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            Governance-first by design, so regulated teams can move quickly without adding audit risk.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• No production writes</p>
          <p>• Synthetic or redacted data by default</p>
          <p>• Audit logs and traceability for decisions</p>
          <p>• Human-in-the-loop controls for sensitive actions</p>
          <p>• Fixed scope, defined exit points, and clear success criteria per phase</p>
          <p>• Option to stop after the pilot if the criteria are not met</p>
          <p>
            <span className="font-semibold text-white">Why this isn’t a chatbot:</span> it models decisions, rules, and
            escalation paths you can audit.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Engagement tiers</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            Each tier is scoped with clear outcomes, success criteria, and a decision to make next.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
            <p className="text-sm font-semibold text-white">Discovery &amp; Foundation (1–2 weeks)</p>
            <p className="mt-2 text-sm text-slate-300">
              Map workflows, interview stakeholders, and confirm whether a pilot is the right move.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
            <p className="text-sm font-semibold text-white">Proof-of-Concept / Pilot (2–4 weeks)</p>
            <p className="mt-2 text-sm text-slate-300">
              Model one or two workflows in a safe environment with clear success criteria.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
            <p className="text-sm font-semibold text-white">Scale &amp; Ongoing (monthly)</p>
            <p className="mt-2 text-sm text-slate-300">
              Expand to additional workflows, tune governance, and operationalize the model.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Industries</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            Focused on regulated SMB operations where decisions are frequent and auditability matters.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>Healthcare admin (scheduling, billing, prior auth)</p>
          <p>Legal ops (intake, triage, document review)</p>
          <p>Construction / PDS (approvals, bids, change orders)</p>
          <Link className="text-cyan-200" href="/industries">
            See industry modules →
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Who this is for</h2>
          <ul className="mt-3 space-y-4 text-base leading-relaxed text-slate-300">
            <li>SMB owners and operators accountable for regulated operations.</li>
            <li>Ops leaders in healthcare admin, legal ops, and construction/PDS.</li>
            <li>Teams that need governance, auditability, and fast proof-of-value.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Who it’s not for</h2>
          <ul className="mt-3 space-y-4 text-base leading-relaxed text-slate-300">
            <li>Teams looking for a chatbot demo without operational change.</li>
            <li>Experiments without governance, auditability, or owner accountability.</li>
            <li>Unsupervised automation that bypasses decision rights.</li>
          </ul>
        </div>
      </section>

      <footer className="grid gap-6 border-t border-slate-800/70 pt-8 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">Intent-First Internal Support</p>
          <p className="mt-2">{'{{CONSULTANT_NAME}}'}</p>
          <p>{'{{EMAIL}}'}</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Navigate</p>
          <div className="flex flex-col gap-1">
            <Link href="/method">Method</Link>
            <Link href="/industries">Industries</Link>
            <Link href="/demo">Demo</Link>
            <Link href="/proof">Example engagements</Link>
            <Link href="/insights">Insights</Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Take action</p>
          <p>
            Start with a pilot or review how engagements are structured.
          </p>
          <Link className="text-cyan-200" href="/contact">
            Start with a Pilot →
          </Link>
        </div>
      </footer>
    </div>
  );
}
