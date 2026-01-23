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
      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Malmquist De Oliveira Consulting
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We are a senior operating team that partners with leaders to guide AI-driven operational transformation with
            clear accountability and measurable outcomes. Our work focuses on reducing operational drag and decision
            latency without asking teams to bet on unproven theory.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            We build safe, auditable systems that respect the constraints of regulated and operationally complex
            environments, including healthcare, legal, construction, and professional services.
          </p>
        </div>
        <div>
          <p className="text-base leading-relaxed text-slate-300">
            Clients trust us because we work inside real-world constraints, align governance with day-to-day operations,
            and stay accountable for outcomes that stand up to audit and executive review.
          </p>
        </div>
      </section>

      <CarouselRow
        title="Intent-first internal support"
        description="AI listens first, understands requests by intent, and routes work with clear ownership."
        items={workflows}
        viewAllHref="/support-ops"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Operational microcosms</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We build non-production replicas so regulated teams can validate outcomes without touching production.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>1. Map real workflows, decisions, and exceptions.</p>
          <p>2. Model the same routing and approval steps with synthetic or redacted data.</p>
          <p>3. Run scenarios safely to surface latency, risk, and handoff gaps.</p>
          <p>4. Capture results with traceable metrics and decision logs.</p>
        </div>
      </section>

      <CarouselRow
        title="Example engagements"
        description="Anonymized engagement patterns that show what proof looks like before production."
        items={caseStudies}
        viewAllHref="/proof"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Human-in-the-loop governance</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            AI proposes, humans approve, and every decision leaves a full audit trail.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Risk-based escalation and override paths</p>
          <p>• Approval gates for sensitive actions</p>
          <p>• Traceability across requests, decisions, and outcomes</p>
          <p>• No production writes without explicit sign-off</p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Fixed-scope Proof-of-Concept</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            Time-boxed, outcome-driven, and designed to make a clear scale-or-stop decision.
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
            Review engagement structure
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/30"
          >
            Start with a Proof-of-Concept
          </Link>
        </div>
      </section>

      <CarouselRow
        title="How it scales"
        description="Discovery → Proof-of-Concept → Expansion, with governance and operating model support."
        items={services}
        viewAllHref="/services"
      />

      <CarouselRow
        title="Tools & deliverables"
        description="Reusable assets that make governance, auditability, and human oversight practical."
        items={deliverables}
        viewAllHref="/method"
      />

      <CarouselRow
        title="Insights"
        description="Short reads for leaders modernizing support ops."
        items={insights}
        viewAllHref="/insights"
      />

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
            Start with a Proof-of-Concept or review how engagements are structured.
          </p>
          <Link className="text-cyan-200" href="/contact">
            Start with a Proof-of-Concept →
          </Link>
        </div>
      </footer>
    </div>
  );
}
