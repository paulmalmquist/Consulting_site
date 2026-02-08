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
  sentence: string;
  graphic: 'process' | 'signal' | 'merge';
  href?: string;
};

const PANEL_CONTENT: Record<string, Omit<CapabilityPanel, 'title'>> = {
  'Operational Assessment': {
    sentence: 'Map how work flows and where it can be simplified.',
    graphic: 'process',
    href: '/operational-assessment'
  },
  'AI Concierge': {
    sentence: 'Turn new AI capabilities into practical operating advantages.',
    graphic: 'signal'
  },
  'Legacy SaaS Migration': {
    sentence: 'Consolidate costly SaaS sprawl into an internal system you control.',
    graphic: 'merge'
  }
};

const GRAPHIC_STYLES = 'h-28 w-full text-cyan-200';

const renderGraphic = (variant: CapabilityPanel['graphic']) => {
  switch (variant) {
    case 'process':
      return (
        <svg viewBox="0 0 240 120" className={GRAPHIC_STYLES} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="40" cy="30" r="12" />
            <circle cx="120" cy="60" r="12" />
            <circle cx="200" cy="30" r="12" />
            <circle cx="200" cy="90" r="12" />
            <path d="M52 30 L108 60" />
            <path d="M132 60 L188 30" />
            <path d="M132 60 L188 90" />
            <path d="M120 72 L120 102" strokeDasharray="4 6" />
          </g>
        </svg>
      );
    case 'signal':
      return (
        <svg viewBox="0 0 240 120" className={GRAPHIC_STYLES} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M30 90 C70 30, 130 30, 170 90" />
            <path d="M50 90 C80 50, 120 50, 150 90" />
            <path d="M70 90 C90 70, 110 70, 130 90" />
            <circle cx="190" cy="42" r="16" />
            <path d="M190 26 L190 10" />
            <path d="M206 42 L220 42" />
          </g>
        </svg>
      );
    case 'merge':
    default:
      return (
        <svg viewBox="0 0 240 120" className={GRAPHIC_STYLES} aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
            <rect x="24" y="24" width="48" height="32" rx="6" />
            <rect x="24" y="68" width="48" height="32" rx="6" />
            <rect x="90" y="46" width="48" height="32" rx="6" />
            <rect x="168" y="40" width="48" height="40" rx="8" />
            <path d="M72 40 L90 56" />
            <path d="M72 84 L90 72" />
            <path d="M138 62 L168 60" />
          </g>
        </svg>
      );
  }
};

export function CapabilityScrollPanels({ items }: CapabilityScrollPanelsProps) {
  const panels = useMemo<CapabilityPanel[]>(() => {
    // To add or remove homepage capability sections, edit the `proofBullets` array in `content/homepage.json`.
    // For future cards, add a matching title key in `PANEL_CONTENT` above with the desired copy.
    return items.map((item) => {
      const content = PANEL_CONTENT[item.title] ?? {
        sentence: 'Deliver one focused capability with clear ownership, controls, and measurable outcomes.',
        graphic: 'process'
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
          const panelShellClassName = `nv-panel-shell transition duration-200 group-hover:border-cyan-200/50 group-hover:shadow-[0_0_35px_rgba(94,203,255,0.18)] group-focus-visible:border-cyan-200/70 group-focus-visible:shadow-[0_0_40px_rgba(94,203,255,0.28)] ${
            isVisible ? 'nv-panel-shell--visible' : ''
          }`;
          const panelContent = (
            <div className={panelShellClassName}>
              <div className="flex flex-col gap-6 lg:gap-8">
                <div className="rounded-3xl border border-cyan-100/20 bg-slate-950/70 p-6 shadow-[0_0_30px_rgba(94,203,255,0.14)]">
                  {renderGraphic(panel.graphic)}
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{panel.title}</h2>
                  <p className="text-base leading-relaxed text-slate-300">{panel.sentence}</p>
                </div>
              </div>
            </div>
          );

          return (
            <article
              key={panel.title}
              ref={(element) => {
                panelRefs.current[index] = element;
              }}
              data-panel-index={index}
              className="nv-snap-panel"
            >
              {panel.href ? (
                <Link
                  href={panel.href}
                  className="group block w-full rounded-[1.75rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  aria-label={`Learn more about ${panel.title}`}
                >
                  {panelContent}
                </Link>
              ) : (
                panelContent
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
