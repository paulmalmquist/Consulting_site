import type { IndustryVertical } from '../content/industry-verticals';

type IndustryThemeKey = IndustryVertical['themeKey'];

type IndustryThemeStyles = {
  eyebrowText: string;
  accentText: string;
  accentBorder: string;
  accentSurface: string;
  primaryCta: string;
  quickSwitchActive: string;
  quickSwitchInactive: string;
  impactSection: string;
  impactCard: string;
};

export const INDUSTRY_THEME_STYLES = {
  cyan: {
    eyebrowText: 'text-cyan-200',
    accentText: 'text-cyan-100',
    accentBorder: 'border-cyan-300/25',
    accentSurface: 'bg-cyan-200/10',
    primaryCta:
      'inline-flex items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-200/10 px-5 py-2.5 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/70 hover:bg-cyan-200/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    quickSwitchActive: 'border-cyan-300/45 bg-cyan-200/10 text-cyan-50',
    quickSwitchInactive:
      'border-slate-700/80 bg-slate-950/45 text-slate-200 hover:border-cyan-300/35 hover:bg-cyan-200/5 hover:text-cyan-100',
    impactSection: 'border-cyan-300/25 bg-gradient-to-r from-slate-900/85 to-cyan-900/20',
    impactCard: 'border-cyan-300/20 bg-slate-950/55'
  },
  amber: {
    eyebrowText: 'text-amber-200',
    accentText: 'text-amber-100',
    accentBorder: 'border-amber-300/25',
    accentSurface: 'bg-amber-200/10',
    primaryCta:
      'inline-flex items-center justify-center rounded-full border border-amber-300/45 bg-amber-200/10 px-5 py-2.5 text-sm font-semibold text-amber-50 transition hover:border-amber-200/70 hover:bg-amber-200/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    quickSwitchActive: 'border-amber-300/45 bg-amber-200/10 text-amber-50',
    quickSwitchInactive:
      'border-slate-700/80 bg-slate-950/45 text-slate-200 hover:border-amber-300/35 hover:bg-amber-200/5 hover:text-amber-100',
    impactSection: 'border-amber-300/25 bg-gradient-to-r from-slate-900/85 to-amber-900/20',
    impactCard: 'border-amber-300/20 bg-slate-950/55'
  },
  rose: {
    eyebrowText: 'text-rose-200',
    accentText: 'text-rose-100',
    accentBorder: 'border-rose-300/25',
    accentSurface: 'bg-rose-200/10',
    primaryCta:
      'inline-flex items-center justify-center rounded-full border border-rose-300/45 bg-rose-200/10 px-5 py-2.5 text-sm font-semibold text-rose-50 transition hover:border-rose-200/70 hover:bg-rose-200/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    quickSwitchActive: 'border-rose-300/45 bg-rose-200/10 text-rose-50',
    quickSwitchInactive:
      'border-slate-700/80 bg-slate-950/45 text-slate-200 hover:border-rose-300/35 hover:bg-rose-200/5 hover:text-rose-100',
    impactSection: 'border-rose-300/25 bg-gradient-to-r from-slate-900/85 to-rose-900/20',
    impactCard: 'border-rose-300/20 bg-slate-950/55'
  },
  violet: {
    eyebrowText: 'text-violet-200',
    accentText: 'text-violet-100',
    accentBorder: 'border-violet-300/25',
    accentSurface: 'bg-violet-200/10',
    primaryCta:
      'inline-flex items-center justify-center rounded-full border border-violet-300/45 bg-violet-200/10 px-5 py-2.5 text-sm font-semibold text-violet-50 transition hover:border-violet-200/70 hover:bg-violet-200/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
    quickSwitchActive: 'border-violet-300/45 bg-violet-200/10 text-violet-50',
    quickSwitchInactive:
      'border-slate-700/80 bg-slate-950/45 text-slate-200 hover:border-violet-300/35 hover:bg-violet-200/5 hover:text-violet-100',
    impactSection: 'border-violet-300/25 bg-gradient-to-r from-slate-900/85 to-violet-900/20',
    impactCard: 'border-violet-300/20 bg-slate-950/55'
  }
} as const satisfies Record<IndustryThemeKey, IndustryThemeStyles>;
