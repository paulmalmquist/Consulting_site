'use client';

import { useMemo, useState } from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import type { ResearchEntry } from '../../lib/content';

type RuleItem = {
  id: string;
  name: string;
  do: string[];
  avoid: string[];
};

type RuleCardsSection = {
  type: 'ruleCards';
  title: string;
  rules: RuleItem[];
};

type CheckerSection = {
  type: 'checker';
  title: string;
  bannedPhrases: string[];
  suggestions: string[];
};

type MessagingRulebookProps = {
  entry: ResearchEntry;
};

type CheckResult = {
  label: string;
  status: 'ok' | 'warn';
  detail: string;
};

const JARGON_TERMS = [
  'synergy',
  'leverage',
  'holistic',
  'paradigm',
  'transformative',
  'enablement',
  'best-in-class',
  'world-class',
  'revolutionary'
];

function countWords(value: string): number {
  const words = value.trim().match(/\S+/g);
  return words ? words.length : 0;
}

export function MessagingRulebook({ entry }: MessagingRulebookProps) {
  const [draft, setDraft] = useState('');

  const ruleCards = entry.sections.find((section) => section.type === 'ruleCards') as RuleCardsSection | undefined;
  const checker = entry.sections.find((section) => section.type === 'checker') as CheckerSection | undefined;

  const checkResults = useMemo((): CheckResult[] => {
    if (!checker || !draft.trim()) {
      return [];
    }

    const lowerDraft = draft.toLowerCase();
    const results: CheckResult[] = [];
    const phraseHits = checker.bannedPhrases.filter((phrase) => lowerDraft.includes(phrase.toLowerCase()));

    results.push({
      label: 'Banned phrase scan',
      status: phraseHits.length ? 'warn' : 'ok',
      detail: phraseHits.length ? `Replace: ${phraseHits.join(', ')}` : 'No banned phrases found.'
    });

    const totalWords = countWords(draft);
    results.push({
      label: 'Length check',
      status: totalWords > 90 ? 'warn' : 'ok',
      detail: totalWords > 90 ? `${totalWords} words. Keep core message under 90 words.` : `${totalWords} words. Good for quick scanning.`
    });

    const sentenceWordCounts = draft
      .split(/[.!?]+/)
      .map((sentence) => countWords(sentence))
      .filter((count) => count > 0);
    const longestSentence = Math.max(0, ...sentenceWordCounts);

    results.push({
      label: 'Sentence clarity',
      status: longestSentence > 24 ? 'warn' : 'ok',
      detail: longestSentence > 24 ? `Longest sentence has ${longestSentence} words. Split long lines.` : 'Sentence length is easy to read.'
    });

    const jargonHits = JARGON_TERMS.filter((term) => lowerDraft.includes(term));
    results.push({
      label: 'Jargon scan',
      status: jargonHits.length ? 'warn' : 'ok',
      detail: jargonHits.length ? `Simplify terms: ${jargonHits.join(', ')}` : 'No high-friction jargon detected.'
    });

    return results;
  }, [checker, draft]);

  return (
    <div className="space-y-6">
      {ruleCards && (
        <section id="rules" className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{ruleCards.title}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {ruleCards.rules.map((rule) => (
              <article key={rule.id} className="rounded-2xl border border-slate-800/75 bg-slate-950/45 p-4">
                <h3 className="text-sm font-semibold text-white">{rule.name}</h3>
                <div className="mt-3 space-y-3 text-sm">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">Do</p>
                    <ul className="mt-1 space-y-1 text-slate-300">
                      {rule.do.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rose-200">Avoid</p>
                    <ul className="mt-1 space-y-1 text-slate-300">
                      {rule.avoid.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {checker && (
        <section id="checker" className="space-y-4 rounded-3xl border border-slate-800/75 bg-slate-900/60 p-5 sm:p-6">
          <h2 className="text-2xl font-semibold tracking-tight text-white">{checker.title}</h2>
          <p className="text-sm text-slate-300">
            Paste draft copy to run quick checks for banned phrasing, jargon density, and readability.
          </p>

          <textarea
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Paste a headline, value proposition, or section draft."
            rows={7}
            className="w-full rounded-2xl border border-slate-700/70 bg-slate-950/55 px-4 py-3 text-sm leading-relaxed text-slate-100 outline-none placeholder:text-slate-500"
          />

          <div className="space-y-2">
            {checkResults.length === 0 && (
              <p className="rounded-xl border border-slate-800/70 bg-slate-950/45 px-3 py-2 text-sm text-slate-400">
                Start typing to run checks.
              </p>
            )}
            {checkResults.map((result) => (
              <div
                key={result.label}
                className="flex items-start gap-2 rounded-xl border border-slate-800/70 bg-slate-950/45 px-3 py-2 text-sm"
              >
                {result.status === 'ok' ? (
                  <CheckCircle2 size={16} className="mt-0.5 text-emerald-200" aria-hidden="true" />
                ) : (
                  <AlertTriangle size={16} className="mt-0.5 text-amber-200" aria-hidden="true" />
                )}
                <div>
                  <p className="font-semibold text-slate-100">{result.label}</p>
                  <p className="text-slate-300">{result.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-emerald-300/25 bg-emerald-200/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-emerald-200">Cleaner version suggestions</p>
            <ul className="mt-2 space-y-1 text-sm text-emerald-100">
              {checker.suggestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
