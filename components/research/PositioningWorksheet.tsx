'use client';

import { useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import type { ResearchEntry } from '../../lib/content';
import { cn } from '../ui/cn';

type QuestionItem = {
  id: string;
  title: string;
  whyItMatters: string;
  outputFormat: string;
  example: string;
};

type AccordionSection = {
  type: 'accordion';
  id: string;
  title: string;
  items: QuestionItem[];
};

type TemplateSection = {
  type: 'template';
  title: string;
  template: string;
  copyLabel: string;
};

type BulletsSection = {
  type: 'bullets';
  title: string;
  items: string[];
};

type FollowOnCard = {
  id: string;
  title: string;
  whatToDo: string[];
  goodLooksLike: string[];
  deliverable: string;
};

type FollowOnSection = {
  type: 'cards';
  id: string;
  title: string;
  cards: FollowOnCard[];
};

type PositioningWorksheetProps = {
  entry: ResearchEntry;
};

export function PositioningWorksheet({ entry }: PositioningWorksheetProps) {
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(() => {
    const section = entry.sections.find((item) => item.type === 'accordion') as AccordionSection | undefined;
    return section?.items[0]?.id ?? null;
  });
  const [copied, setCopied] = useState(false);

  const accordion = useMemo(
    () => entry.sections.find((section) => section.type === 'accordion') as AccordionSection | undefined,
    [entry.sections]
  );
  const template = useMemo(
    () => entry.sections.find((section) => section.type === 'template') as TemplateSection | undefined,
    [entry.sections]
  );
  const consequences = useMemo(
    () => entry.sections.find((section) => section.type === 'bullets') as BulletsSection | undefined,
    [entry.sections]
  );
  const followOn = useMemo(
    () => entry.sections.find((section) => section.type === 'cards') as FollowOnSection | undefined,
    [entry.sections]
  );

  const copyTemplate = async () => {
    if (!template?.template) {
      return;
    }

    try {
      await navigator.clipboard.writeText(template.template);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-6">
      {accordion && (
        <section id={accordion.id} className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{accordion.title}</h2>
          <div className="space-y-3">
            {accordion.items.map((item, index) => {
              const panelId = `${item.id}-panel`;
              const buttonId = `${item.id}-button`;
              const isOpen = openQuestionId === item.id;

              return (
                <article key={item.id} className="rounded-2xl border border-slate-800/75 bg-slate-950/45">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenQuestionId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                    >
                      <span className="text-sm font-semibold text-white sm:text-base">
                        {index + 1}. {item.title}
                      </span>
                      <span className="text-xs text-slate-400">{isOpen ? 'Hide' : 'Expand'}</span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn('grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-3 px-4 pb-4 text-sm leading-relaxed text-slate-300">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">Why it matters</p>
                          <p>{item.whyItMatters}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">Output format</p>
                          <p>{item.outputFormat}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">Example</p>
                          <p>{item.example}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {template && (
        <section id="positioning-template" className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{template.title}</h2>
          <div className="rounded-2xl border border-emerald-300/30 bg-emerald-200/10 p-4">
            <p className="text-sm leading-relaxed text-emerald-100">{template.template}</p>
          </div>
          <button
            type="button"
            onClick={copyTemplate}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/50 bg-slate-950/70 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-200/70"
          >
            {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
            {copied ? 'Copied' : template.copyLabel}
          </button>
        </section>
      )}

      {consequences && (
        <section id="inaction" className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{consequences.title}</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            {consequences.items.map((item) => (
              <li key={item} className="rounded-xl border border-slate-800/70 bg-slate-950/45 px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </section>
      )}

      {followOn && (
        <section id={followOn.id} className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{followOn.title}</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {followOn.cards.map((card) => (
              <details key={card.id} className="rounded-2xl border border-slate-800/75 bg-slate-950/45 p-4">
                <summary className="cursor-pointer text-sm font-semibold text-white">{card.title}</summary>
                <div className="mt-3 space-y-3 text-sm text-slate-300">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">What to do</p>
                    <ul className="mt-1 space-y-1">
                      {card.whatToDo.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">What good looks like</p>
                    <ul className="mt-1 space-y-1">
                      {card.goodLooksLike.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">Deliverable artifact</p>
                    <p>{card.deliverable}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
