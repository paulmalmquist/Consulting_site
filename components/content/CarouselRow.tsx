'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { CardItem, ContentCard } from './ContentCard';

export function CarouselRow({
  title,
  description,
  items,
  viewAllHref
}: {
  title: string;
  description: string;
  items: CardItem[];
  viewAllHref: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', dragFree: true });

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-sm text-slate-400">{description}</p>
        </div>
        <Link href={viewAllHref} className="text-sm text-cyan-200 hover:text-cyan-100">
          View all
        </Link>
      </div>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {items.map((item) => (
              <div key={item.href} className="min-w-[240px] flex-[0_0_80%] md:flex-[0_0_40%] lg:flex-[0_0_28%]">
                <ContentCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-2 hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="pointer-events-auto rounded-full border border-slate-600/60 bg-slate-900/80 p-2 text-white"
            onClick={() => emblaApi?.scrollPrev()}
            aria-label="Scroll left"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            className="pointer-events-auto rounded-full border border-slate-600/60 bg-slate-900/80 p-2 text-white"
            onClick={() => emblaApi?.scrollNext()}
            aria-label="Scroll right"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
