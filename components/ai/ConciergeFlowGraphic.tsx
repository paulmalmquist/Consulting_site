import { Bot, FileSearch, MessageSquare, ShieldCheck, Wrench } from 'lucide-react';
import type { ReactNode } from 'react';

const iconClassName = 'h-5 w-5';

type Node = {
  title: string;
  description: string;
  icon: ReactNode;
  tone: 'cyan' | 'violet' | 'emerald';
};

const tones = {
  cyan: {
    border: 'border-cyan-200/25',
    bg: 'bg-cyan-300/10',
    text: 'text-cyan-50',
    icon: 'text-cyan-200'
  },
  violet: {
    border: 'border-violet-200/25',
    bg: 'bg-violet-300/10',
    text: 'text-violet-50',
    icon: 'text-violet-200'
  },
  emerald: {
    border: 'border-emerald-200/25',
    bg: 'bg-emerald-300/10',
    text: 'text-emerald-50',
    icon: 'text-emerald-200'
  }
} as const;

const nodes: Node[] = [
  {
    title: 'Ask in plain English',
    description: 'Chat, email, or a form. The helper should handle real questions, not prompts.',
    icon: <MessageSquare className={iconClassName} aria-hidden="true" />,
    tone: 'cyan'
  },
  {
    title: 'Look up your sources',
    description: 'It reads the docs you already have: SOPs, tickets, contracts, policies.',
    icon: <FileSearch className={iconClassName} aria-hidden="true" />,
    tone: 'violet'
  },
  {
    title: 'Draft the next step',
    description: 'A reply, a code change, or a proposed action, with the “why” attached.',
    icon: <Bot className={iconClassName} aria-hidden="true" />,
    tone: 'cyan'
  },
  {
    title: 'Do work in your tools',
    description: 'When you want it: update a record, open a ticket, run a checklist.',
    icon: <Wrench className={iconClassName} aria-hidden="true" />,
    tone: 'emerald'
  },
  {
    title: 'Keep it safe + reviewable',
    description: 'Approvals, logging, and boundaries so it doesn’t “wing it” in production.',
    icon: <ShieldCheck className={iconClassName} aria-hidden="true" />,
    tone: 'violet'
  }
];

export function ConciergeFlowGraphic() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-b from-slate-950/40 via-slate-950/65 to-[#07172e] p-5 sm:p-6">
      <div className="pointer-events-none absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-violet-300/10 blur-3xl" />

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">How it works</p>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Vendor-neutral</p>
      </div>

      <div className="mt-4 grid gap-3">
        {nodes.map((node, index) => {
          const tone = tones[node.tone];
          return (
            <div key={node.title} className="relative">
              {index !== 0 && (
                <span
                  className="pointer-events-none absolute -top-2 left-6 h-3 w-px bg-gradient-to-b from-slate-500/0 via-slate-500/60 to-slate-500/0"
                  aria-hidden="true"
                />
              )}
              <div className={`rounded-2xl border ${tone.border} bg-slate-950/45 p-4`}>
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border ${tone.border} ${tone.bg} ${tone.icon}`}>
                    {node.icon}
                  </span>
                  <div className="min-w-0">
                    <p className={`text-sm font-semibold ${tone.text}`}>{node.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">{node.description}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 rounded-2xl border border-slate-700/70 bg-slate-950/40 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">What this replaces</p>
        <p className="mt-2 text-sm text-slate-200">
          Copy/paste docs. Guessing. “Ask Bob.” Threads with no owner. Dashboards that don&apos;t answer the real question.
        </p>
      </div>
    </div>
  );
}
