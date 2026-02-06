import Link from 'next/link';

type ExploreTile = {
  title: string;
  description: string;
  href: string;
};

type ExploreCarouselProps = {
  title: string;
  subtitle: string;
  tiles: ExploreTile[];
};

export function ExploreCarousel({ title, subtitle, tiles }: ExploreCarouselProps) {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
          <p className="text-base leading-relaxed text-slate-300">{subtitle}</p>
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible">
        {tiles.map((tile) => (
          <Link
            key={tile.title}
            href={tile.href}
            className="group min-w-[240px] snap-start rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4 transition hover:border-cyan-200/60 hover:bg-slate-900/70 md:min-w-0"
            aria-label={tile.title}
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/30 bg-cyan-200/10 text-sm font-semibold text-cyan-100">
                {tile.title.slice(0, 1)}
              </div>
              <span className="text-lg text-slate-500 transition group-hover:text-cyan-200">›</span>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm font-semibold text-white">{tile.title}</p>
              <p className="text-sm leading-relaxed text-slate-300">{tile.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
