'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ------------------------------------------------------------------ */
/*  Domain node data                                                   */
/* ------------------------------------------------------------------ */
const NODES = [
  { id: 'crm', label: 'CRM', cx: 80, cy: 80, driftX: 220, driftY: 120, delay: 0 },
  { id: 'datawarehouse', label: 'Data Warehouse', cx: 520, cy: 90, driftX: -220, driftY: 110, delay: 0.1 },
  { id: 'erp', label: 'ERP', cx: 150, cy: 180, driftX: 150, driftY: 20, delay: 0.2 },
  { id: 'helpdesk', label: 'Helpdesk', cx: 450, cy: 190, driftX: -150, driftY: 10, delay: 0.3 },
  { id: 'accounting', label: 'Accounting', cx: 100, cy: 300, driftX: 200, driftY: -100, delay: 0.4 },
  { id: 'projectmgmt', label: 'Project Management', cx: 500, cy: 310, driftX: -200, driftY: -110, delay: 0.5 },
  { id: 'bi', label: 'BI', cx: 250, cy: 120, driftX: 50, driftY: 80, delay: 0.6 },
  { id: 'docmgmt', label: 'Document Management', cx: 350, cy: 280, driftX: -50, driftY: -80, delay: 0.7 },
  { id: 'reporting', label: 'Reporting', cx: 75, cy: 200, driftX: 225, driftY: 0, delay: 0.8 },
] as const;

const CYCLE_DURATION = 12; // seconds — matches original CSS

/* ------------------------------------------------------------------ */
/*  Diagnostics (dev-only)                                             */
/* ------------------------------------------------------------------ */
function log(msg: string) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[HeroMotion] ${msg}`);
  }
}

/* ------------------------------------------------------------------ */
/*  Easing helper – mirrors CSS ease-in-out                            */
/* ------------------------------------------------------------------ */
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export function SystemConvergenceGraphic() {
  const svgRef = useRef<SVGSVGElement>(null);
  const rafRef = useRef<number>(0);
  const [useFallback, setUseFallback] = useState(false);
  const [mounted, setMounted] = useState(false);
  const fallbackReason = useRef<string>('');

  /* ---- Detect reduced-motion preference ---- */
  const prefersReducedMotion = useCallback(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false;
  }, []);

  /* ---- JS-driven animation loop ---- */
  const animate = useCallback(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes = svg.querySelectorAll<SVGGElement>('.node');
    const lines = svg.querySelectorAll<SVGLineElement>('.connection-line');
    const logo = svg.querySelector<SVGGElement>('.nv-letter-group');
    const glow = svg.querySelector<SVGCircleElement>('.nv-glow');

    const now = performance.now() / 1000; // seconds

    /* Animate each domain node */
    nodes.forEach((node) => {
      const dx = Number(node.dataset.driftX) || 0;
      const dy = Number(node.dataset.driftY) || 0;
      const delay = Number(node.dataset.delay) || 0;

      const t = ((now - delay) % CYCLE_DURATION + CYCLE_DURATION) % CYCLE_DURATION;
      const phase = t / CYCLE_DURATION; // 0→1

      let tx = 0, ty = 0, opacity = 1;
      if (phase < 0.45) {
        // drift inward & fade out
        const p = easeInOut(phase / 0.45);
        tx = dx * p;
        ty = dy * p;
        opacity = 1 - p;
      } else if (phase < 0.55) {
        // hidden at center
        tx = dx;
        ty = dy;
        opacity = 0;
      } else {
        // drift back & fade in
        const p = easeInOut((phase - 0.55) / 0.45);
        tx = dx * (1 - p);
        ty = dy * (1 - p);
        opacity = p;
      }

      node.setAttribute('transform', `translate(${tx}, ${ty})`);
      node.style.opacity = String(opacity);
    });

    /* Pulse connection lines */
    lines.forEach((line) => {
      const phase = (now % 4) / 4;
      const val = 0.2 + 0.4 * Math.sin(phase * Math.PI * 2);
      line.style.opacity = String(val);
      line.style.strokeWidth = String(1 + 0.5 * Math.sin(phase * Math.PI * 2));
    });

    /* Emerge/fade NV logo */
    if (logo || glow) {
      const phase = (now % CYCLE_DURATION) / CYCLE_DURATION;
      let logoOpacity = 0, scale = 0.85;
      if (phase < 0.45) {
        const p = easeInOut(phase / 0.45);
        logoOpacity = 0.85 * p;
        scale = 0.85 + 0.15 * p;
      } else if (phase < 0.55) {
        logoOpacity = 0.85;
        scale = 1 + 0.03 * easeInOut((phase - 0.45) / 0.1);
      } else {
        const p = easeInOut((phase - 0.55) / 0.45);
        logoOpacity = 0.85 * (1 - p);
        scale = 1.03 - 0.18 * p;
      }

      if (logo) {
        logo.style.opacity = String(logoOpacity);
        logo.setAttribute('transform', `scale(${scale})`);
      }
      if (glow) {
        const glowOp = phase < 0.45
          ? easeInOut(phase / 0.45)
          : phase < 0.55 ? 1
          : 1 - easeInOut((phase - 0.55) / 0.45);
        glow.style.opacity = String(glowOp);
        const gs = phase < 0.45
          ? 0.8 + 0.2 * easeInOut(phase / 0.45)
          : phase < 0.55 ? 1 + 0.05 * easeInOut((phase - 0.45) / 0.1)
          : 1.05 - 0.25 * easeInOut((phase - 0.55) / 0.45);
        glow.setAttribute('r', String(50 * gs));
      }
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  /* ---- Mount logic ---- */
  useEffect(() => {
    log('mounted');
    setMounted(true);

    const reducedMotion = prefersReducedMotion();
    log(`prefers-reduced-motion: ${reducedMotion}`);

    if (reducedMotion) {
      fallbackReason.current = 'reduced motion';
      log('fallback: reduced motion');
      setUseFallback(true);
      return;
    }

    // Start JS animation
    try {
      rafRef.current = requestAnimationFrame(animate);
      log('animation started (JS-driven)');
    } catch (err) {
      fallbackReason.current = 'init error';
      log(`fallback: init error — ${err}`);
      setUseFallback(true);
      return;
    }

    // Safety timeout: if SVG hasn't painted within 2s, fall back
    const timeout = setTimeout(() => {
      const svg = svgRef.current;
      if (!svg || svg.clientWidth === 0) {
        fallbackReason.current = 'init timeout';
        log('fallback: init timeout (SVG not visible after 2s)');
        cancelAnimationFrame(rafRef.current);
        setUseFallback(true);
      }
    }, 2000);

    // Listen for reduced-motion changes
    const mql = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        fallbackReason.current = 'reduced motion (changed)';
        log('fallback: reduced motion preference changed');
        cancelAnimationFrame(rafRef.current);
        setUseFallback(true);
      }
    };
    mql?.addEventListener?.('change', onChange);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(rafRef.current);
      mql?.removeEventListener?.('change', onChange);
    };
  }, [animate, prefersReducedMotion]);

  /* ---- Static fallback ---- */
  if (mounted && useFallback) {
    return (
      <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 sm:min-h-[300px] sm:p-6 md:min-h-[360px] md:p-8">
        <svg
          viewBox="0 0 600 400"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Novendor convergence: execution domains connecting to the NV platform"
        >
          {/* Static domain nodes — always visible */}
          <g className="system-nodes">
            {NODES.map((n) => (
              <g key={n.id}>
                <circle cx={n.cx} cy={n.cy} r={30} className="node-circle" />
                <text x={n.cx} y={n.cy + 40} className="node-label">{n.label}</text>
              </g>
            ))}
          </g>

          {/* Static connection lines */}
          <g className="connection-lines">
            {NODES.map((n) => (
              <line
                key={n.id}
                x1={n.cx}
                y1={n.cy}
                x2={300}
                y2={200}
                className="connection-line"
                style={{ opacity: 0.3, animation: 'none' }}
              />
            ))}
          </g>

          {/* NV logo — always visible in fallback */}
          <g className="nv-logo-core" transform="translate(300, 200)">
            <g transform="scale(0.35) translate(-100, -80)">
              <path
                d="M 20 20 L 20 120 L 35 120 L 35 55 L 75 120 L 90 120 L 90 20 L 75 20 L 75 85 L 35 20 Z"
                className="nv-letter"
                style={{ opacity: 0.75, animation: 'none' }}
              />
              <path
                d="M 110 20 L 140 120 L 155 120 L 185 20 L 168 20 L 147.5 95 L 127 20 Z"
                className="nv-letter"
                style={{ opacity: 0.75, animation: 'none' }}
              />
            </g>
            <circle cx={0} cy={0} r={50} className="nv-glow" style={{ opacity: 0.6, animation: 'none' }} />
          </g>
        </svg>
      </div>
    );
  }

  /* ---- Animated version (JS-driven, no CSS transform animations) ---- */
  return (
    <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/40 p-4 sm:min-h-[300px] sm:p-6 md:min-h-[360px] md:p-8">
      <svg
        ref={svgRef}
        viewBox="0 0 600 400"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Novendor convergence: execution domains animating toward the NV platform"
      >
        {/* Domain nodes — JS drives transforms */}
        <g className="system-nodes">
          {NODES.map((n) => (
            <g
              key={n.id}
              className="node"
              data-system={n.id}
              data-drift-x={n.driftX}
              data-drift-y={n.driftY}
              data-delay={n.delay}
            >
              <circle cx={n.cx} cy={n.cy} r={30} className="node-circle" />
              <text x={n.cx} y={n.cy + 40} className="node-label">{n.label}</text>
            </g>
          ))}
        </g>

        {/* Connection lines — JS drives opacity */}
        <g className="connection-lines">
          {NODES.map((n) => (
            <line
              key={n.id}
              x1={n.cx}
              y1={n.cy}
              x2={300}
              y2={200}
              className="connection-line"
              style={{ animation: 'none' }}
            />
          ))}
        </g>

        {/* NV logo — JS drives scale/opacity on nv-letter-group wrapper */}
        <g className="nv-logo-core" transform="translate(300, 200)">
          <g className="nv-letter-group" style={{ opacity: 0 }}>
            <g transform="scale(0.35) translate(-100, -80)">
              <path
                d="M 20 20 L 20 120 L 35 120 L 35 55 L 75 120 L 90 120 L 90 20 L 75 20 L 75 85 L 35 20 Z"
                className="nv-letter"
                style={{ animation: 'none', opacity: 1 }}
              />
              <path
                d="M 110 20 L 140 120 L 155 120 L 185 20 L 168 20 L 147.5 95 L 127 20 Z"
                className="nv-letter"
                style={{ animation: 'none', opacity: 1 }}
              />
            </g>
          </g>
          <circle cx={0} cy={0} r={50} className="nv-glow" style={{ animation: 'none', opacity: 0 }} />
        </g>
      </svg>
    </div>
  );
}
