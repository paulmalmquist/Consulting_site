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
  'Operational Assessment': {
    description:
      'We perform a structured inventory of how work actually moves through your organization — systems, handoffs, approvals, and decision points. The outcome is a clear view of where effort is duplicated, where context is lost, and where processes can be simplified or consolidated to improve continuity, control, and execution quality.',
    visualTitle: 'Current-State Map',
    visualBody: 'Systems, handoffs, approvals, and decision points are documented to establish an operational baseline.',
    href: '/services'
  },
  'AI Concierge': {
    description:
      'We act as an ongoing intelligence layer for emerging AI capabilities — translating rapidly evolving tools into practical, business-ready applications. This service helps organizations understand what is newly possible, what is viable today, and how operating models can evolve as AI tools become more powerful, accessible, and integrated into daily work.',
    visualTitle: 'Capability Signals',
    visualBody: 'New tooling is evaluated against real operating constraints, readiness, and governance requirements.',
    href: '/services'
  },
  'Legacy SaaS Migration': {
    description:
      'We help organizations move off expensive, fragmented SaaS stacks in favor of consolidated, custom systems that are owned and operated internally. The focus is not replacement for its own sake, but reducing long-term cost, dependency, and complexity while preserving data continuity and institutional knowledge.',
    visualTitle: 'Controlled Consolidation',
    visualBody: 'Migration sequencing protects data continuity while reducing vendor dependency and cost exposure.',
    href: '/services'
  }
};

export function CapabilityScrollPanels({ items }: CapabilityScrollPanelsProps) {
  const panels = useMemo<CapabilityPanel[]>(() => {
    // To add or remove homepage capability sections, edit the `proofBullets` array in `content/homepage.json`.
    // For future cards, add a matching title key in `PANEL_CONTENT` above with the desired copy.
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
