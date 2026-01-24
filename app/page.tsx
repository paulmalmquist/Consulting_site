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
            Generalized platforms are now a fund-level liability
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            Private equity real estate firms are paying enterprise-suite prices for workflows that still require
            spreadsheets, manual controls, and side systems to operate the fund. The mismatch is no longer a technology
            gap. It is a governance and cost problem.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            CIOs inherit brittle integrations, CFOs inherit opaque reporting chains, and COOs inherit processes that
            cannot adapt without reopening the entire platform discussion.
          </p>
        </div>
        <div className="space-y-4">
          <p className="text-base leading-relaxed text-slate-300">
            We replace the idea of a single, generalized platform with a capability-driven operating environment: one
            that mirrors how funds actually run, and that can be governed capability by capability.
          </p>
          <p className="text-base leading-relaxed text-slate-300">
            The objective is not more features. It is executive control — clear ownership, audit-ready outputs, and the
            ability to change direction without destabilizing finance or investor reporting.
          </p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            An industry-first operating system for private equity real estate
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We design an operating system around fund capabilities — not vendor product lines. Each module is defined
            by the decisions it must support, the controls it must satisfy, and the financial outputs it must produce.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Capability ownership is explicit across finance, operations, and technology.</p>
          <p>• Controls and audit trails are designed in before cutover, not after.</p>
          <p>• Modules can be sequenced, swapped, or retired without replatforming the firm.</p>
          <p>• Systems of record remain protected while capabilities around them evolve.</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Who this is for — and not for
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We work best with executive teams who want tighter financial control without locking themselves into another
            decade-long platform decision.
          </p>
        </div>
        <div />
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">This is for:</p>
          <p>• CIOs accountable for platform risk, integration drag, and roadmap optionality</p>
          <p>• CFOs who need audit-ready reporting even when underlying systems are imperfect</p>
          <p>• COOs responsible for repeatable execution across deals, assets, and fund cycles</p>
          <p>• Partners who want better control without underwriting another full replacement program</p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">This is not for:</p>
          <p>• Firms looking for a new monolithic platform to standardize every edge case</p>
          <p>• Teams that want staff augmentation without executive ownership of outcomes</p>
          <p>• Programs that cannot support parallel runs, reconciliations, or governed cutovers</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Private equity real estate–specific pain points we address
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            The problem is not a missing feature. It is the cost and risk of forcing fund operations into tools that
            were not designed around fund realities.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Fund structures outpace the platform’s data model, so workarounds become the operating model</p>
          <p>• Cash visibility depends on manual stitching across property, fund, and banking systems</p>
          <p>• Waterfall logic lives in fragile spreadsheets because “the platform can’t quite do it”</p>
          <p>• Investor reporting is accurate only after heroics, not because the system is trustworthy</p>
          <p>• Every audit cycle reopens the same control questions with different evidence</p>
        </div>
      </section>

      <CarouselRow
        title="Capability modules that replace platform bloat"
        description="Targeted modules that fit how funds operate, without destabilizing systems of record."
        items={workflows}
        viewAllHref="/support-ops"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Industry presets and capability modules
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We start with private equity real estate presets — fund structures, entity patterns, close calendars, and
            reporting expectations — then tailor modules to your governance model. Presets accelerate delivery, but
            capability definitions remain yours.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Presets reflect how funds, assets, and entities actually relate</p>
          <p>• Modules are defined by control objectives, not UI surfaces</p>
          <p>• Each module has clear inputs, outputs, owners, and reconciliation points</p>
          <p>• You can adopt modules selectively without committing to an all-at-once cutover</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Fund accounting, cash flows, waterfalls, and investor reporting — handled as governed capabilities
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We treat finance-critical workflows as control systems. The design starts with accounting truth, cash
            movement, and investor obligations, then works backward into data contracts, approvals, and outputs.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• Fund accounting is anchored to agreed books-and-records sources with explicit adjustment rules</p>
          <p>• Cash flows are modeled across property, fund, and investor layers with traceable lineage</p>
          <p>• Waterfalls are implemented as versioned logic with scenario testing and approval gates</p>
          <p>• Investor reporting is generated from reconciled outputs, with evidence that survives diligence</p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Risk mitigation, parallel runs, and continuity by design
          </h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            Every replacement is structured to reduce risk at each step: isolate the capability, prove equivalence, and
            cut over only when finance, operations, and technology have matching evidence.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>1. Ringfence the capability, decision rights, and required data contracts.</p>
          <p>2. Run in parallel with reconciliations tied to financial and operational baselines.</p>
          <p>3. Cut over behind approvals, with rollback criteria defined before the decision meeting.</p>
          <p>4. Preserve continuity by keeping prior paths available until the new module earns trust.</p>
        </div>
      </section>

      <CarouselRow
        title="Proof before platform change"
        description="Engagements that demonstrate control, continuity, and executive-grade evidence."
        items={caseStudies}
        viewAllHref="/proof"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Control for CIOs, CFOs, COOs, and Partners
          </h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We translate platform change into fund governance: what is controlled, how it is evidenced, and who signs.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• CIO: reduce dependency and integration drag without surrendering architectural control</p>
          <p>• CFO: protect books, cash integrity, and investor confidence through reconciled cutovers</p>
          <p>• COO: standardize execution through defined capabilities, not improvised workarounds</p>
          <p>• Partners: gain optionality — the ability to change course without compounding risk</p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">What you can expect early</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            A structured engagement that produces decision-ready artifacts for fund leadership — not a slide deck that
            assumes the hard parts away.
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
            Start with a Fund Capability Assessment
          </Link>
        </div>
      </section>

      <CarouselRow
        title="How we structure the work"
        description="From capability definition to governed cutover, sequenced for executive oversight."
        items={services}
        viewAllHref="/services"
      />

      <CarouselRow
        title="Decision-ready deliverables"
        description="Artifacts leaders can use to approve, sequence, and govern change with confidence."
        items={deliverables}
        viewAllHref="/method"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Why this is not SaaS — and not staff augmentation
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            We do not sell a platform and we do not rent out junior teams. We design and deliver governed capabilities
            that you can own, operate, and audit — regardless of which systems of record remain in place.
          </p>
        </div>
        <div className="space-y-3 text-base leading-relaxed text-slate-200">
          <p>• No license agenda and no requirement to standardize on a single vendor suite</p>
          <p>• No dependency on a bench of contractors to keep core finance processes running</p>
          <p>• Senior operators stay accountable from design through parallel run and cutover</p>
          <p>• The outcome is control and optionality, not another tool to administer</p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Common executive questions</h2>
          <p className="text-base leading-relaxed text-slate-300">
            Direct answers to the risks that matter: fund continuity, reporting integrity, and decision control.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              question: 'How do you avoid breaking fund reporting during transition?',
              answer:
                'We define finance baselines up front, run parallel reconciliations, and require CFO-level sign-off before any cutover decision is made.'
            },
            {
              question: 'What happens to our existing systems of record?',
              answer:
                'They remain in place unless and until the evidence supports change. Our work reduces dependency without forcing premature replacement decisions.'
            },
            {
              question: 'How are waterfalls and allocations governed?',
              answer:
                'Waterfall logic is treated as a controlled capability: versioned, scenario-tested, and tied to approvals that reflect how your investment committee operates.'
            },
            {
              question: 'How is this different from hiring a consulting team to implement tools?',
              answer:
                'Implementation is downstream. We start by defining capabilities, controls, and evidence requirements, then deliver modules that hold up under audit and diligence.'
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
        title="Insights for fund leadership"
        description="Perspectives on control, auditability, and capability-driven change in private equity real estate."
        items={insights}
        viewAllHref="/insights"
      />

      <section className="grid gap-6 rounded-3xl border border-slate-800/70 bg-slate-900/60 p-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
            Capability focus areas for private equity real estate
          </h2>
          <p className="mt-2 text-base leading-relaxed text-slate-300">
            We prioritize capabilities where fund risk, investor trust, and platform cost intersect.
          </p>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-slate-200">
          <p>Fund accounting and close orchestration</p>
          <p>Cash management, liquidity visibility, and approvals</p>
          <p>Allocation engines, waterfalls, and distribution governance</p>
          <p>Investor reporting, data rooms, and audit response readiness</p>
          <p>Portfolio, asset, and deal operating rhythms tied to fund outcomes</p>
          <Link className="text-cyan-200" href="/industries">
            Explore capability modules →
          </Link>
        </div>
      </section>

      <footer className="grid gap-6 border-t border-slate-800/70 pt-8 text-sm text-slate-400 md:grid-cols-3">
        <div>
          <p className="font-semibold text-white">Control the fund. Control the platform decisions.</p>
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
          <p>Begin with a capability assessment focused on fund risk, cost, and control.</p>
          <Link className="text-cyan-200" href="/contact">
            Start the assessment →
          </Link>
        </div>
      </footer>
    </div>
  );
}
