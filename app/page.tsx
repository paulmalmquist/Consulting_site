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
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Use less system. Keep more capability.</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Most firms are paying enterprise prices for a fraction of enterprise value. They carry long contracts,
            expensive change cycles, and brittle dependencies while only using a narrow slice of what they bought.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            We help leadership teams reduce dependency without ripping out systems of record. The goal is control:
            protect mission-critical capabilities, retire low-value complexity, and make each change reversible.
          </p>
        </div>
        <div>
          <p className="text-base leading-relaxed text-slate-300">
            This is not a replatforming pitch. It is a structured risk-reduction program that replaces specific
            capabilities — on your timeline — while preserving data integrity, auditability, and operational continuity.
          </p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Why firms overpay and underuse</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Oversized systems are purchased to cover every scenario, but operations run on a handful of repeatable
            decisions. The unused surface area still shows up on the invoice, the roadmap, and the risk register.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Suites are bought for optionality but governed for uniformity.</p>
          <p>• Customizations accumulate faster than they can be retired.</p>
          <p>• Reporting looks integrated while operations remain fragmented.</p>
          <p>• “Too risky to change” becomes the most expensive operating model.</p>
        </div>
      </section>

      <CarouselRow
        title="Capability modules that reduce dependency"
        description="Targeted replacements that remove pressure from oversized platforms without breaking what works."
        items={workflows}
        viewAllHref="/support-ops"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Risk reduction, not disruption</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We design each step to lower operational risk: isolate a capability, prove continuity, and cut over with a
            rollback plan already defined.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>1. Ringfence the capability and the data it depends on.</p>
          <p>2. Run the replacement in parallel until results match.</p>
          <p>3. Cut over behind controls with finance and operations sign-off.</p>
          <p>4. Keep the old path available until the new one earns trust.</p>
        </div>
      </section>

      <CarouselRow
        title="Proof before platform change"
        description="Anonymized engagements that show how we reduce risk while improving control."
        items={caseStudies}
        viewAllHref="/proof"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Control for CFOs, CIOs, and operators</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We translate technical change into financial clarity, operational continuity, and defensible governance.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• CFO: reduce run-rate cost without introducing reporting surprises</p>
          <p>• CIO: shrink dependency while strengthening control points</p>
          <p>• Operations: remove friction without retraining the entire company</p>
          <p>• Audit: clear evidence of what changed, why, and how it is governed</p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">What you can expect early</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            A time-boxed engagement that clarifies what to keep, what to replace, and how to do it without betting the
            business.
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
        title="How we work"
        description="A structured path from dependency mapping to controlled capability cutovers."
        items={services}
        viewAllHref="/services"
      />

      <CarouselRow
        title="Decision-ready deliverables"
        description="Artifacts executives can use to approve, sequence, and govern change."
        items={deliverables}
        viewAllHref="/method"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">We are not a SaaS vendor</h2>
          <p className="text-base leading-relaxed text-slate-300">
            We do not ask you to adopt a new platform. We help you make better decisions about the platforms you
            already run — and replace only what no longer earns its keep.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• No licenses to push</p>
          <p>• No replatform mandate</p>
          <p>• No slideware handoff to your team</p>
          <p>• Senior operators accountable for outcomes</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Who this is for — and not for</h2>
        </div>
        <div />
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">This is for teams who:</p>
          <p>• Need to reduce run-rate cost without losing critical capability</p>
          <p>• Are constrained by audit, compliance, or operational risk</p>
          <p>• Want optionality without starting a multi-year replacement program</p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">This is not for teams who:</p>
          <p>• Want a new platform more than a better operating model</p>
          <p>• Need staff augmentation disguised as strategy</p>
          <p>• Expect overnight savings without governance discipline</p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Common executive questions</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Direct answers to the risks that matter: continuity, data integrity, and control.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              question: 'How do you reduce dependency without destabilizing operations?',
              answer:
                'We isolate one capability at a time, run it in parallel, and only cut over after results match agreed baselines.'
            },
            {
              question: 'How do you protect data integrity and financial reporting?',
              answer:
                'We keep systems of record in place, reconcile outputs during parallel runs, and design controls that finance can sign off on.'
            },
            {
              question: 'What happens if a module underperforms?',
              answer:
                'Every cutover includes a defined rollback path. Optionality is designed in, not promised after the fact.'
            },
            {
              question: 'How are you different from a SaaS replacement vendor?',
              answer:
                'Vendors sell platforms. We reduce risk and improve control across the platforms you already have, then replace only what is justified.'
            }
          ].map((item) => (
            <div key={item.question} className="space-y-2 rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5">
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CarouselRow
        title="Insights"
        description="Practical perspectives on cost, control, and capability sequencing."
        items={insights}
        viewAllHref="/insights"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Capability focus areas</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We prioritize high-dependency capabilities where cost, control, and continuity are tightly linked.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>Accounting and close support</p>
          <p>CRM workflow control and routing</p>
          <p>Project and portfolio management</p>
          <p>Legal intake and obligation tracking</p>
          <p>Operational analytics and executive reporting</p>
          <Link className="text-cyan-200" href="/industries">
            See capability modules →
          </Link>
        </div>
      </section>

      <footer className="grid gap-6 border-t border-slate-800/70 pt-8 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">Reduce dependency. Preserve capability.</p>
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
