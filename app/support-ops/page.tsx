import Link from 'next/link';

export default function SupportOpsPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Intent-First Internal Support</h1>
        <p className="text-lg text-slate-300">
          An AI front door for IT, HR, and Ops that captures intent once, routes to the right owner, and logs every
          decision for auditability.
        </p>
      </section>

      <section className="grid gap-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-3">
        {[
          {
            title: 'Intake → classify → route',
            description: 'Gather the request in plain language, detect intent, and route to the right queue.'
          },
          {
            title: 'Resolve → approve → execute',
            description: 'Auto-resolve low-risk requests and hold sensitive actions for human approval.'
          },
          {
            title: 'Log → learn → report',
            description: 'Capture every decision, surface exceptions, and report weekly performance trends.'
          }
        ].map((item) => (
          <div key={item.title} className="space-y-3 rounded-xl border border-slate-800/70 bg-slate-950/40 p-4">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Typical metrics we track (examples)</h2>
          <ul className="space-y-2 text-base text-slate-300">
            <li>• Time-to-first-response</li>
            <li>• Mean time to resolution (MTTR)</li>
            <li>• Deflection rate</li>
            <li>• Misroute rate</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold text-white">Governance &amp; data handling</h2>
          <ul className="space-y-2 text-base text-slate-300">
            <li>• Audit logs for every route, response, and approval</li>
            <li>• Human-in-the-loop gates for sensitive actions</li>
            <li>• Synthetic or redacted data in demos by default</li>
            <li>• Clear retention and access rules for regulated teams</li>
          </ul>
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-6 md:grid-cols-3">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Healthcare admin</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Prior auth status questions with cited policy steps</li>
            <li>• Billing exceptions routed with required context</li>
            <li>• Access requests with logged approvals</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Legal ops</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Intake triage with escalation paths</li>
            <li>• Policy and retention answers with citations</li>
            <li>• Matter updates routed to the right owner</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-white">Construction / PDS</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Change order intake with required documents</li>
            <li>• Vendor onboarding checklist routing</li>
            <li>• RFI triage with logged decisions</li>
          </ul>
        </div>
      </section>

      <section className="flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="rounded-full border border-cyan-300/30 bg-slate-900/70 px-5 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200/60 hover:bg-cyan-200/10"
        >
          Book a 20-minute Support Ops Fit Check
        </Link>
        <Link
          href="/demo"
          className="rounded-full border border-slate-700/80 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-slate-500"
        >
          Walk Through an Auditable AI Workflow
        </Link>
      </section>
    </div>
  );
}
