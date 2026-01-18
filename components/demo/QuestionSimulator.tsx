'use client';

import { useMemo, useState } from 'react';
import kbObjects from '../../content/kb_objects/index.json';

type KBObject = {
  id: string;
  title: string;
  description: string;
  content: string;
  citations: string[];
};

const objects = kbObjects as KBObject[];

function scoreObject(query: string, text: string) {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
  return terms.reduce((score, term) => (text.includes(term) ? score + 1 : score), 0);
}

export function QuestionSimulator() {
  const [question, setQuestion] = useState('What controls reduce hallucinated vendor approvals?');
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    if (!submitted || !question.trim()) return [];
    const scored = objects
      .map((item) => ({
        item,
        score: scoreObject(question.toLowerCase(), `${item.title} ${item.description} ${item.content}`.toLowerCase())
      }))
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
    return scored;
  }, [question, submitted]);

  const answer = useMemo(() => {
    if (!submitted) return '';
    if (results.length === 0) {
      return 'No direct matches found. Try a narrower workflow or risk keyword.';
    }
    const highlights = results
      .map((result) => `• ${result.item.title}: ${result.item.description}`)
      .join('\n');
    return `Based on the retrieved KB objects, here is a deterministic answer:\n${highlights}\n\nRecommendation: codify the decision ladder, add approval checkpoints, and keep a visible audit trail for every exception.`;
  }, [results, submitted]);

  return (
    <div className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6">
      <div>
        <h3 className="text-lg font-semibold text-white">Question simulator</h3>
        <p className="text-sm text-slate-400">
          This uses local retrieval plus a deterministic template — no hosted LLM calls, with citations preserved.
        </p>
      </div>
      <div className="flex flex-col gap-3 md:flex-row">
        <input
          value={question}
          onChange={(event) => setQuestion(event.target.value)}
          className="flex-1 rounded-xl border border-slate-700/60 bg-slate-950/40 px-4 py-3 text-sm text-white"
          aria-label="Ask a demo question"
        />
        <button
          type="button"
          onClick={() => setSubmitted(true)}
          className="rounded-xl bg-cyan-400/20 px-5 py-3 text-sm font-semibold text-cyan-100 hover:bg-cyan-400/30"
        >
          Retrieve answers
        </button>
      </div>
      {submitted && (
        <div className="grid gap-4 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-3 rounded-xl border border-slate-700/60 bg-slate-950/40 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Top objects</p>
            <ul className="space-y-3 text-sm text-slate-200">
              {results.length === 0 && <li>No matches yet.</li>}
              {results.map((result) => (
                <li key={result.item.id}>
                  <p className="font-semibold text-white">{result.item.title}</p>
                  <p className="text-xs text-slate-400">{result.item.description}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-slate-500">
                    {result.item.citations.map((citation) => (
                      <li key={citation}>{citation}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-700/60 bg-slate-950/40 p-4 text-sm text-slate-200 whitespace-pre-line">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}
