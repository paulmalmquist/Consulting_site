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
  pillars: { title: string; description: string }[];
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
    eyebrow: 'Case study'
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
      <Hero headline={home.hero.headline} subheadline={home.hero.subheadline} />
      <CarouselRow
        title="How I help"
        description="Focused engagements that reset the operational baseline for AI." 
        items={services}
        viewAllHref="/services"
      />
      <CarouselRow
        title="Common workflows I compress"
        description="Decision-heavy handoffs with high latency or compliance risk." 
        items={workflows}
        viewAllHref="/method"
      />
      <CarouselRow
        title="Proof & examples"
        description="Anonymized, operations-first case studies." 
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
        description="Downloadable templates and governance-ready assets." 
        items={deliverables}
        viewAllHref="/services"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-3">
        <div className="md:col-span-3">
          <h2 className="text-2xl font-semibold text-white">Why this works</h2>
          <p className="mt-2 text-sm text-slate-300">
            I focus on operational truth: the workflows, decisions, and governance details that make AI durable.
          </p>
        </div>
        {home.pillars.map((pillar) => (
          <div key={pillar.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5">
            <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{pillar.description}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">What you get in 2 weeks</h2>
          <p className="mt-2 text-sm text-slate-300">
            A fast-start package that aligns leadership, surfaces workflow truth, and sets governance guardrails.
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
            href="/services"
            className="rounded-full border border-slate-700/70 px-5 py-2 text-sm text-slate-100 hover:border-slate-500"
          >
            Explore services
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400/20 px-5 py-2 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/30"
          >
            Book an intro call
          </Link>
        </div>
      </section>

      <footer className="grid gap-6 border-t border-slate-800/70 pt-8 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">AI Readiness & Operations</p>
          <p className="mt-2">{{CONSULTANT_NAME}}</p>
          <p>{{EMAIL}}</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Navigate</p>
          <div className="flex flex-col gap-1">
            <Link href="/services">Services</Link>
            <Link href="/method">Method</Link>
            <Link href="/proof">Proof</Link>
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
