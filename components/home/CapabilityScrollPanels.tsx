'use client';

import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

type CapabilityItem = {
  title: string;
};

type CapabilityScrollPanelsProps = {
  items: CapabilityItem[];
};

type CapabilityPanel = {
  title: string;
  description: string;
  visualTitle: string;
  visualBody: string;
  href: string;
};

const PANEL_CONTENT: Record<string, Omit<CapabilityPanel, 'title'>> = {
  'AI Concierge': {
    description:
      'Create a single operational front door for requests, triage, and handoffs so teams make decisions faster without adding process overhead.',
    visualTitle: 'Unified Intake',
    visualBody: 'Requests are normalized, prioritized, and routed with controls before they hit downstream systems.',
    href: '/services'
  },
  'Info Operations': {
    description:
      'Standardize how operational data is captured, reconciled, and surfaced so leadership can act from one shared source of truth.',
    visualTitle: 'Decision-Ready Data',
    visualBody: 'Operational events, exceptions, and approvals are tracked in one governed reporting layer.',
    href: '/services'
  },
  'Functional Applications': {
    description:
      'Replace brittle suite dependency with targeted applications that match real workflows while preserving governance and control.',
    visualTitle: 'Capability Modules',
    visualBody: 'Each module supports one business capability and integrates through stable interfaces.',
    href: '/services'
  }
};

export function CapabilityScrollPanels({ items }: CapabilityScrollPanelsProps) {
  const panels = useMemo<CapabilityPanel[]>(() => {
    // To add or remove homepage capability sections, edit the `proofBullets` array in `content/homepage.json`.
    // Any new title can get custom copy by adding a key in `PANEL_CONTENT` above.
    return items.map((item) => {
      const content = PANEL_CONTENT[item.title] ?? {
        description: 'Deliver one focused capability with clear ownership, controls, and measurable outcomes.',
        visualTitle: 'Capability Snapshot',
        visualBody: 'A concise operational view of ownership, controls, and decision flow.',
        href: '/services'
      };

      return {
        title: item.title,
        ...content
      };
    });
  }, [items]);

  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const [visiblePanels, setVisiblePanels] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisiblePanels((prev) => {
          const next = { ...prev };
          entries.forEach((entry) => {
            const index = Number((entry.target as HTMLElement).dataset.panelIndex);
            if (Number.isNaN(index)) {
              return;
            }
            next[index] = entry.isIntersecting;
          });
          return next;
        });
      },
      { threshold: 0.45 }
    );

    panelRefs.current.forEach((panel) => {
      if (panel) {
        observer.observe(panel);
      }
    });

    return () => observer.disconnect();
  }, [panels.length]);

  return (
    <section className="space-y-3" aria-label="Capability walkthrough">
      <div className="nv-snap-flow">
        {panels.map((panel, index) => {
          const isVisible = visiblePanels[index] ?? index === 0;

          return (
            <article
              key={panel.title}
              ref={(element) => {
                panelRefs.current[index] = element;
              }}
              data-panel-index={index}
              className="nv-snap-panel"
            >
              <div className={`nv-panel-shell ${isVisible ? 'nv-panel-shell--visible' : ''}`}>
                <div className="space-y-5 lg:space-y-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Capability {index + 1}</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{panel.title}</h2>
                  <p className="max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{panel.description}</p>
                  <Link
                    href={panel.href}
                    className="inline-flex rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-200/50 hover:text-white"
                  >
                    View details
                  </Link>
                </div>

                <div className="rounded-3xl border border-cyan-100/20 bg-slate-950/70 p-6 shadow-[0_0_30px_rgba(94,203,255,0.14)]">
                  <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.16em] text-cyan-100/80">{panel.visualTitle}</p>
                    <p className="text-sm leading-relaxed text-slate-300">{panel.visualBody}</p>
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-200">Owners mapped</div>
                    <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-200">Control gates</div>
                    <div className="rounded-xl border border-slate-800/80 bg-slate-900/70 px-4 py-3 text-xs text-slate-200">Evidence feed</div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
