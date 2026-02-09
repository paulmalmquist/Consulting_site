'use client';

import { useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { BadgeDollarSign, Boxes, Clock3, FileCheck2, Receipt, ShieldCheck, Workflow } from 'lucide-react';
import { cn } from '../ui/cn';

type IndustryProfile = {
  title: string;
  subtitle: string;
  callout: string;
  icon: LucideIcon;
  workflows: [string, string, string];
  metrics: [string, string, string];
};

const INDUSTRY_PROFILES: IndustryProfile[] = [
  {
    title: 'Healthcare (admin ops)',
    subtitle: 'Scheduling, prior auth, and billing exceptions.',
    callout: 'Compress handoffs while keeping compliance approvals intact.',
    icon: Boxes,
    workflows: ['Scheduling / Rebooking', 'Prior Auth Check', 'Billing Exception Follow-up'],
    metrics: ['Resolution cycle time', 'Claims rework %', 'Auth approval cycle']
  },
  {
    title: 'Legal ops',
    subtitle: 'Intake, review routing, and matter approvals.',
    callout: 'Standardize intake and context so exceptions escalate with evidence.',
    icon: Receipt,
    workflows: ['Matter Intake Triage', 'Review Routing', 'Status + Approval Gates'],
    metrics: ['Intake routing time', 'Missing context %', 'Escalation rate %']
  },
  {
    title: 'Finance',
    subtitle: 'Close controls, reconciliations, and exception approvals.',
    callout: 'Strengthen controls while reducing manual reconciliation work.',
    icon: BadgeDollarSign,
    workflows: ['Period Close Checklist', 'Reconciliation Review', 'Exception Approval Queue'],
    metrics: ['Close cycle time', 'Manual adjustment %', 'Approval backlog']
  },
  {
    title: 'Real Estate Investment',
    subtitle: 'Deal intake, underwriting review, and investment approvals.',
    callout: 'Make investment decisions faster without losing governance.',
    icon: ShieldCheck,
    workflows: ['Deal Intake + Routing', 'Underwriting Pack Review', 'Investment Committee Gates'],
    metrics: ['Deal review cycle', 'Rework on underwriting %', 'Decision turnaround']
  },
  {
    title: 'Construction / PDS',
    subtitle: 'Change orders, bid review, and RFI management.',
    callout: 'Shorten cycle time while preserving decision thresholds and traceability.',
    icon: Workflow,
    workflows: ['Change Order Gates', 'Bid Compliance Review', 'RFI Routing + Escalation'],
    metrics: ['Change order cycle', 'Bid rework %', 'RFI aging by status']
  }
];

export function IndustryWorkflowMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const profile = INDUSTRY_PROFILES[activeIndex];
  const refs = useRef<Array<HTMLButtonElement | null>>([]);

  const onStepKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = (index + 1) % INDUSTRY_PROFILES.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = (index - 1 + INDUSTRY_PROFILES.length) % INDUSTRY_PROFILES.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = INDUSTRY_PROFILES.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveIndex(next);
    refs.current[next]?.focus();
  };

  return (
    <section
      id="industry-map"
      aria-labelledby="industry-map-title"
      className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
    >
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Industry Map</p>
        <h2 id="industry-map-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          One visual frame, tuned to each operating environment.
        </h2>
      </div>

      <div className="grid gap-4 lg:grid-cols-[280px_1fr]">
        <div className="space-y-3">
          <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/90" aria-hidden="true">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-300/35 via-emerald-300/60 to-emerald-200/80 transition-[width] duration-300 motion-reduce:transition-none"
              style={{ width: `${((activeIndex + 1) / INDUSTRY_PROFILES.length) * 100}%` }}
            />
          </div>
          <div aria-label="Industry map profiles" className="space-y-2">
            {INDUSTRY_PROFILES.map((item, index) => {
              const Icon = item.icon;
              const selected = index === activeIndex;
              return (
                <button
                  key={item.title}
                  ref={(node) => {
                    refs.current[index] = node;
                  }}
                  type="button"
                  aria-pressed={selected}
                  aria-label={`Industry profile ${index + 1}: ${item.title}`}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={(event) => onStepKeyDown(event, index)}
                  className={cn(
                    'w-full rounded-2xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                    selected
                      ? 'border-emerald-300/60 bg-emerald-200/10 text-emerald-50'
                      : 'border-slate-800/80 bg-slate-950/45 text-slate-300 hover:border-emerald-300/35'
                  )}
                >
                  <span className="flex items-center gap-2 text-xs uppercase tracking-[0.08em]">
                    <Icon size={14} aria-hidden="true" />
                    Industry {index + 1}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-slate-300">{item.subtitle}</p>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/65 p-3 sm:p-4">
          <div className="rounded-xl border border-emerald-300/20 bg-emerald-200/5 px-3 py-2 text-xs text-emerald-100 sm:text-sm">
            {profile.callout}
          </div>
          <div className="mt-3 overflow-x-auto pb-1">
            <svg
              viewBox="0 0 980 410"
              role="img"
              aria-label={`Workflow map for ${profile.title}`}
              className="h-auto w-[980px] max-w-none md:w-full md:max-w-full"
            >
              <defs>
                <linearGradient id="industryFlowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(148,163,184,0.3)" />
                  <stop offset="100%" stopColor="rgba(134,239,172,0.78)" />
                </linearGradient>
              </defs>

              <text x="88" y="44" fill="rgba(226,232,240,0.88)" fontSize="18" fontWeight="600">
                Workflows
              </text>
              <text x="430" y="44" fill="rgba(226,232,240,0.88)" fontSize="18" fontWeight="600">
                Capability Pilot
              </text>
              <text x="804" y="44" fill="rgba(226,232,240,0.88)" fontSize="18" fontWeight="600">
                Signals
              </text>

              <rect x="72" y="82" width="272" height="60" rx="14" fill="rgba(15,23,42,0.92)" stroke="rgba(148,163,184,0.48)" />
              <rect x="72" y="176" width="272" height="60" rx="14" fill="rgba(15,23,42,0.92)" stroke="rgba(148,163,184,0.48)" />
              <rect x="72" y="270" width="272" height="60" rx="14" fill="rgba(15,23,42,0.92)" stroke="rgba(148,163,184,0.48)" />

              <text x="96" y="118" fill="rgba(226,232,240,0.94)" fontSize="15">{profile.workflows[0]}</text>
              <text x="96" y="212" fill="rgba(226,232,240,0.94)" fontSize="15">{profile.workflows[1]}</text>
              <text x="96" y="306" fill="rgba(226,232,240,0.94)" fontSize="15">{profile.workflows[2]}</text>

              <path d="M360 205 H620" stroke="url(#industryFlowGradient)" strokeWidth="14" strokeLinecap="round" />
              <path d="M620 205 L593 187 M620 205 L593 223" stroke="rgba(134,239,172,0.82)" strokeWidth="4" strokeLinecap="round" />

              <rect x="430" y="145" width="160" height="120" rx="24" fill="rgba(6,78,59,0.32)" stroke="rgba(134,239,172,0.86)" strokeWidth="2.5" />
              <text x="472" y="198" fill="rgba(236,253,245,0.95)" fontSize="15" fontWeight="600">Run</text>
              <text x="452" y="220" fill="rgba(236,253,245,0.95)" fontSize="15" fontWeight="600">Governed</text>

              <line x1="590" y1="205" x2="770" y2="112" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
              <line x1="590" y1="205" x2="810" y2="205" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
              <line x1="590" y1="205" x2="770" y2="298" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />

              <circle cx="770" cy="112" r="38" fill="rgba(20,83,45,0.42)" stroke="rgba(134,239,172,0.68)" />
              <circle cx="810" cy="205" r="38" fill="rgba(20,83,45,0.42)" stroke="rgba(134,239,172,0.68)" />
              <circle cx="770" cy="298" r="38" fill="rgba(20,83,45,0.42)" stroke="rgba(134,239,172,0.68)" />

              <text x="740" y="116" fill="rgba(226,232,240,0.94)" fontSize="13">Metric 1</text>
              <text x="780" y="209" fill="rgba(226,232,240,0.94)" fontSize="13">Metric 2</text>
              <text x="740" y="302" fill="rgba(226,232,240,0.94)" fontSize="13">Metric 3</text>
            </svg>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {profile.metrics.map((metric, index) => {
              const icon = index === 0 ? Clock3 : index === 1 ? Receipt : FileCheck2;
              const Icon = icon;
              return (
                <div
                  key={metric}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-3 py-2 text-xs text-slate-200 sm:text-sm"
                >
                  <Icon size={14} aria-hidden="true" />
                  <span>{metric}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
