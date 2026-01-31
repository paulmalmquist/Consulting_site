type Card = {
  title: string;
  description: string;
};

type CardGridProps = {
  cards: Card[];
  columns?: string;
};

export function CardGrid({ cards, columns = 'md:grid-cols-3' }: CardGridProps) {
  return (
    <div className={`grid gap-4 ${columns}`}>
      {cards.map((card) => (
        <div key={card.title} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
          <p className="text-sm font-semibold text-white">{card.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">{card.description}</p>
        </div>
      ))}
    </div>
  );
}
