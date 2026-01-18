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
        description="Outcome-oriented engagements that remove decision latency and operational risk."
        items={services}
        viewAllHref="/services"
      />
      <CarouselRow
        title="Common workflows I compress"
        description="Decision-heavy handoffs where auditability and speed both matter."
        items={workflows}
        viewAllHref="/method"
      />
      <CarouselRow
        title="Example engagements"
        description="Anonymized engagements that show the operational pattern."
        items={caseStudies}
        viewAllHref="/proof"
      />
      <CarouselRow
        title="Insights"
        description="Short reads for executives building AI-ready teams." 
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
          <h2 className="text-2xl font-semibold text-white">What the first 2–4 weeks look like</h2>
          <p className="mt-2 text-sm text-slate-300">
            A fast-start engagement that surfaces workflow truth, decision ownership, and governance guardrails.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {home.deliverables.map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
              <p className="text-sm font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/method"
            className="rounded-full border border-slate-700/70 px-5 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            View method
          </Link>
          <Link
            href="/demo"
            className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/30"
          >
            See demo
          </Link>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">How it works</h2>
          <p className="mt-2 text-sm text-slate-300">
            A compact method designed for regulated operations and executive accountability.
          </p>
        </div>
        <div className="space-y-3 text-sm text-slate-200">
          <p>1. Map real workflows (not titles or org charts).</p>
          <p>2. Capture decisions, rules, and exceptions that slow delivery.</p>
          <p>3. Identify AI compression opportunities with clear risk flags.</p>
          <p>4. Design human-in-the-loop governance and auditability.</p>
          <p>5. Pilot safely with observable outcomes.</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-white">Who this is for</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>CTO / COO leaders accountable for operational readiness.</li>
            <li>Ops leaders in legal, healthcare admin, construction/PDS, and finance.</li>
            <li>Regulated teams that need human-in-the-loop governance.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white">Who it’s not for</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-300">
            <li>Teams looking for a chatbot demo without operational change.</li>
            <li>Pure marketing AI experiments with no governance posture.</li>
            <li>Unsupervised automation that bypasses auditability.</li>
          </ul>
        </div>
      </section>

      <footer className="grid gap-6 border-t border-slate-800/70 pt-8 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">AI Readiness & Operations</p>
          <p className="mt-2">{'{{CONSULTANT_NAME}}'}</p>
          <p>{'{{EMAIL}}'}</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Navigate</p>
          <div className="flex flex-col gap-1">
            <Link href="/method">Method</Link>
            <Link href="/demo">Demo</Link>
            <Link href="/proof">Example engagements</Link>
            <Link href="/insights">Insights</Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Take action</p>
          <p>
            Book an intro call or email me directly.
          </p>
          <Link className="text-cyan-200" href="/contact">
            Book intro →
          </Link>
        </div>
      </footer>
    </div>
  );
}
