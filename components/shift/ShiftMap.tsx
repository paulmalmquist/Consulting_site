'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRightLeft, Bot, Boxes, CheckCheck, Database, FileText, GitBranch, ScrollText } from 'lucide-react';
import { cn } from '../ui/cn';

type ShiftStep = {
  title: string;
  callout: string;
  icon: typeof Boxes;
};

const STEPS: ShiftStep[] = [
  { title: 'Then', callout: 'Tools hold pieces of workflow.', icon: Boxes },
  { title: 'Hidden Tax', callout: 'Teams reconcile across disconnected systems.', icon: ArrowRightLeft },
  { title: 'Consolidate', callout: 'Execution moves to one governed engine.', icon: Database },
  { title: 'Automation', callout: 'Automation handles repeatable work reliably.', icon: Bot },
  { title: 'Governed Now', callout: 'Humans approve exceptions with full context.', icon: CheckCheck }
];

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

export function ShiftMap() {
  const [activeStep, setActiveStep] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setReducedMotion(media.matches);
    handleChange();
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let ticking = false;

    const onScroll = () => {
      if (ticking) {
        return;
      }
      ticking = true;

      window.requestAnimationFrame(() => {
        ticking = false;
        const node = sectionRef.current;
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) {
          return;
        }

        const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height), 0, 0.9999);
        const nextStep = Math.floor(progress * STEPS.length);
        setActiveStep(nextStep);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reducedMotion]);

  const onStepKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      next = (index + 1) % STEPS.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      next = (index - 1 + STEPS.length) % STEPS.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = STEPS.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveStep(next);
    stepRefs.current[next]?.focus();
  };

  const isThen = activeStep <= 1;
  const isArrow = activeStep >= 2;
  const isEngine = activeStep >= 2;
  const isAutomation = activeStep >= 3;
  const isGovernance = activeStep >= 4;
  const activeCallout = STEPS[activeStep].callout;

  return (
    <section
      ref={sectionRef}
      id="shift-map"
      aria-labelledby="shift-map-title"
      className="scroll-mt-24 space-y-5 rounded-3xl border border-slate-800/70 bg-slate-900/55 p-4 sm:p-6 lg:p-8"
    >
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-200">Shift Map</p>
        <h2 id="shift-map-title" className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Consolidate execution from fragmented tools to one governed core.
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-800/80 bg-slate-950/65 p-3 sm:p-4">
        <div className="rounded-xl border border-emerald-300/20 bg-emerald-200/5 px-3 py-2 text-xs text-emerald-100 sm:text-sm">
          {activeCallout}
        </div>
        <div className="mt-3 overflow-x-auto pb-1">
          <svg
            viewBox="0 0 980 420"
            role="img"
            aria-label="Visual map of moving from tool sprawl to an execution engine."
            className="h-auto w-[980px] max-w-none md:w-full md:max-w-full"
          >
          <defs>
            <linearGradient id="shiftArrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(148,163,184,0.25)" />
              <stop offset="100%" stopColor="rgba(134,239,172,0.72)" />
            </linearGradient>
          </defs>

          <text x="120" y="42" fill="rgba(226,232,240,0.86)" fontSize="18" fontWeight="600">
            Then
          </text>
          <text x="760" y="42" fill="rgba(226,232,240,0.86)" fontSize="18" fontWeight="600">
            Now
          </text>

          <g opacity={isThen ? 1 : 0.46}>
            <rect x="72" y="72" width="118" height="52" rx="12" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.45)" />
            <rect x="214" y="88" width="118" height="52" rx="12" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.45)" />
            <rect x="134" y="154" width="118" height="52" rx="12" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.45)" />
            <rect x="64" y="228" width="118" height="52" rx="12" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.45)" />
            <rect x="214" y="244" width="118" height="52" rx="12" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.45)" />
            <rect x="140" y="304" width="118" height="52" rx="12" fill="rgba(15,23,42,0.9)" stroke="rgba(148,163,184,0.45)" />

            <text x="102" y="104" fill="rgba(203,213,225,0.95)" fontSize="14">CRM</text>
            <text x="246" y="120" fill="rgba(203,213,225,0.95)" fontSize="14">Ticketing</text>
            <text x="164" y="186" fill="rgba(203,213,225,0.95)" fontSize="14">ERP</text>
            <text x="96" y="260" fill="rgba(203,213,225,0.95)" fontSize="14">Core Research</text>
            <text x="246" y="276" fill="rgba(203,213,225,0.95)" fontSize="14">Email</text>
            <text x="170" y="336" fill="rgba(203,213,225,0.95)" fontSize="14">BI</text>
          </g>

          <g opacity={isArrow ? 1 : 0.4}>
            <path
              d="M372 206 H616"
              stroke="url(#shiftArrowGradient)"
              strokeWidth={isArrow ? 16 : 9}
              strokeLinecap="round"
              className={cn('transition-all duration-300 motion-reduce:transition-none')}
            />
            <path d="M616 206 L588 188 M616 206 L588 224" stroke="rgba(134,239,172,0.82)" strokeWidth="4" strokeLinecap="round" />
            <text x="400" y="174" fill="rgba(167,243,208,0.9)" fontSize="13" letterSpacing="0.08em">
              CONSOLIDATE EXECUTION
            </text>
          </g>

          <g opacity={isEngine ? 1 : 0.38}>
            <circle
              cx="724"
              cy="206"
              r={isEngine ? 64 : 56}
              fill="rgba(6,78,59,0.33)"
              stroke="rgba(134,239,172,0.85)"
              strokeWidth={isEngine ? 3 : 2}
              className={cn('transition-all duration-300 motion-reduce:transition-none')}
            />
            <text x="680" y="202" fill="rgba(236,253,245,0.95)" fontSize="14" fontWeight="600">
              Execution
            </text>
            <text x="702" y="222" fill="rgba(236,253,245,0.95)" fontSize="14" fontWeight="600">
              Engine
            </text>
          </g>

          <g opacity={isEngine ? 1 : 0.42}>
            <line x1="724" y1="206" x2="874" y2="110" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
            <line x1="724" y1="206" x2="908" y2="194" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
            <line x1="724" y1="206" x2="878" y2="284" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
            <line x1="724" y1="206" x2="808" y2="82" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
            <line x1="724" y1="206" x2="812" y2="338" stroke="rgba(148,163,184,0.5)" strokeWidth="1.5" />
          </g>

          <g>
            <circle cx="874" cy="110" r="35" fill={isAutomation ? 'rgba(20,83,45,0.42)' : 'rgba(15,23,42,0.86)'} stroke="rgba(134,239,172,0.65)" />
            <circle cx="908" cy="194" r="35" fill={isAutomation ? 'rgba(20,83,45,0.42)' : 'rgba(15,23,42,0.86)'} stroke="rgba(134,239,172,0.65)" />
            <circle cx="878" cy="284" r="35" fill={isAutomation ? 'rgba(20,83,45,0.42)' : 'rgba(15,23,42,0.86)'} stroke="rgba(134,239,172,0.65)" />
            <circle cx="808" cy="82" r="35" fill={isEngine ? 'rgba(20,83,45,0.3)' : 'rgba(15,23,42,0.86)'} stroke="rgba(134,239,172,0.65)" />
            <circle cx="812" cy="338" r="35" fill={isGovernance ? 'rgba(20,83,45,0.45)' : 'rgba(15,23,42,0.86)'} stroke="rgba(134,239,172,0.65)" />

            <text x="852" y="114" fill="rgba(203,213,225,0.95)" fontSize="12">Data</text>
            <text x="892" y="198" fill="rgba(203,213,225,0.95)" fontSize="12">Files</text>
            <text x="844" y="288" fill="rgba(203,213,225,0.95)" fontSize="12">Flows</text>
            <text x="778" y="85" fill="rgba(203,213,225,0.95)" fontSize="11">Approvals</text>
            <text x="786" y="342" fill="rgba(203,213,225,0.95)" fontSize="11">Audit Log</text>
          </g>
          </svg>
        </div>

        <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300 sm:text-sm">
          <li className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-2 py-1">
            <Database size={14} aria-hidden="true" />
            Data
          </li>
          <li className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-2 py-1">
            <FileText size={14} aria-hidden="true" />
            Files
          </li>
          <li className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-2 py-1">
            <GitBranch size={14} aria-hidden="true" />
            Workflows
          </li>
          <li className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-2 py-1">
            <CheckCheck size={14} aria-hidden="true" />
            Approvals
          </li>
          <li className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/60 px-2 py-1">
            <ScrollText size={14} aria-hidden="true" />
            Audit Log
          </li>
        </ul>
      </div>

      <div className="space-y-3">
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-800/90" aria-hidden="true">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-300/35 via-emerald-300/60 to-emerald-200/80 transition-[width] duration-300 motion-reduce:transition-none"
            style={{ width: `${((activeStep + 1) / STEPS.length) * 100}%` }}
          />
        </div>
        <div aria-label="Shift map steps" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const selected = index === activeStep;
            return (
              <button
                key={step.title}
                ref={(node) => {
                  stepRefs.current[index] = node;
                }}
                type="button"
                aria-pressed={selected}
                aria-label={`Shift map step ${index + 1}: ${step.title}`}
                onClick={() => setActiveStep(index)}
                onKeyDown={(event) => onStepKeyDown(event, index)}
                className={cn(
                  'rounded-2xl border px-3 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
                  selected
                    ? 'border-emerald-300/60 bg-emerald-200/10 text-emerald-50'
                    : 'border-slate-800/80 bg-slate-950/45 text-slate-300 hover:border-emerald-300/35'
                )}
              >
                <span className="flex items-center gap-2">
                  <Icon size={14} aria-hidden="true" />
                  <span className="text-xs uppercase tracking-[0.08em]">{step.title}</span>
                </span>
                <span className="mt-2 block text-xs leading-relaxed">
                  {step.callout}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
