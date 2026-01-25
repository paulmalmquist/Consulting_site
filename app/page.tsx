import Link from 'next/link';
import { Hero } from '../components/content/Hero';
import { CarouselRow } from '../components/content/CarouselRow';
import { readJson } from '../lib/content';

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
  const industries = readJson<CardData[]>('home-industries.json');
  const capabilities = readJson<CardData[]>('home-capabilities.json');
  const replacements = readJson<CardData[]>('home-replacements.json');
  const outcomes = readJson<CardData[]>('home-outcomes.json');

  return (
    <div className="space-y-12">
      <Hero headline={home.hero.headline} subheadline={home.hero.subheadline} pillars={home.pillars} />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-slate-400">A common pattern in complex, growing systems.</p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            The pattern shows up everywhere: capability drift
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            Enterprise systems promise standardization, but real work keeps leaking into spreadsheets, inboxes, and
            side tools. Teams compensate for gaps with manual controls, shadow reporting, and custom extensions that no
            one fully owns.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            Over time, the system becomes both overbuilt and under-trusted. Leaders cannot tell which outputs are
            reliable, which handoffs are fragile, or how expensive change has become.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Excel becomes the unofficial operating layer.</p>
          <p>• "Temporary" workarounds harden into infrastructure.</p>
          <p>• Reporting chains multiply and accountability blurs.</p>
          <p>• Every improvement request becomes a platform debate.</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-slate-400">
            The response is structural, not reactive.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Our philosophy: regain control by working capability by capability
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We do not start with tools. We start with the capabilities that run the business, the decisions they must
            support, and the controls leadership expects to see. Then we design a modular execution layer around that
            reality.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            The goal is not a prettier system diagram. The goal is an operating posture where change is possible
            without risking finance, operations, or compliance.
          </p>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">How we work</p>
            <div className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
              <p>1. Clarify the capability, its owner, and its evidence.</p>
              <p>2. Stabilize the workflow so the noise stops growing.</p>
              <p>3. Replace or decouple in controlled increments.</p>
              <p>4. Prove outcomes before expanding the change surface.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Why it works</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Capability definitions stay stable even when vendors, org charts, and strategies change. That keeps
              executives in control of direction while teams modernize underneath.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-slate-400">
            A neutral position built for governance.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Positioned between software vendors and traditional consulting
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            SaaS vendors sell products. Traditional consulting sells programs. We design and deliver governed execution
            platforms that let you make targeted moves without surrendering your roadmap to either model.
          </p>
        </div>
        <div className="grid gap-3 text-base leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Not a vendor pitch</p>
            <p className="mt-1 text-sm text-slate-300">
              We are tool-agnostic and capability-led. Recommendations follow control needs, not partner quotas.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Not staff augmentation</p>
            <p className="mt-1 text-sm text-slate-300">
              We take responsibility for decision framing, sequencing, and evidence — so leadership can steer the work.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Explore your entry point</h2>
            <p className="text-base leading-relaxed text-slate-300">
              Start broad, then self-select. Explore industries, capabilities, common replacements, and the outcomes
              executives expect from capability-driven change.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/diagnostic"
              className="rounded-full border border-cyan-200/70 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-100 hover:bg-cyan-200/10"
            >
              Start with a diagnostic
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-white transition hover:border-slate-500 hover:bg-white/5"
            >
              Talk with an expert
            </Link>
          </div>
        </div>

        <div className="grid gap-8">
          <CarouselRow
            title="Industries"
            description="See how the model adapts to different operating contexts without changing the core method."
            items={industries}
            viewAllHref="/industries"
          />
          <CarouselRow
            title="Capabilities"
            description="Understand the building blocks we use to reduce dependency and regain control."
            items={capabilities}
            viewAllHref="/capabilities"
          />
          <CarouselRow
            title="Common system replacements"
            description="Explore typical patterns where modular replacement outperforms another suite expansion."
            items={replacements}
            viewAllHref="/replacements"
          />
          <CarouselRow
            title="Outcomes"
            description="Focus on the executive outcomes that matter more than any single platform decision."
            items={outcomes}
            viewAllHref="/outcomes"
          />
        </div>
      </section>

      <CarouselRow
        title="Engagement model"
        description="A structured path that creates proof early and reduces risk as scope expands."
        items={services}
        viewAllHref="/services"
      />
      <p className="text-sm uppercase tracking-wide text-slate-400">
        A lighter start is available when scope needs to stay contained.
      </p>
      <p className="text-base leading-relaxed text-slate-300">
        Smaller teams can start with an Execution Baseline—a short, contained systems-hygiene engagement that clarifies
        workflow boundaries and reduces fragility without ripping anything out.
      </p>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-wide text-slate-400">
            Outcomes stay consistent even as tools change.
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            What you get when the work stays capability-led
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We translate platform change into decisions leaders can make. Each step is tied to ownership, evidence, and
            outcomes — not just delivery milestones.
          </p>
          <div className="grid gap-3">
            {home.whatYouGet.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Typical deliverables</p>
          <div className="grid gap-3">
            {home.deliverables.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6 rounded-3xl border border-slate-700/80 bg-gradient-to-br from-cyan-500/10 via-slate-900/80 to-slate-950 p-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Modernize without surrendering control
          </h2>
          <p className="text-base leading-relaxed text-slate-200">
            If you are caught between another suite expansion and a risky replatform, we can help you take a third
            path: modular, governed, and designed for executive oversight.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/diagnostic"
            className="rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            See the diagnostic
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            Schedule a working session
          </Link>
        </div>
      </section>
    </div>
  );
}
