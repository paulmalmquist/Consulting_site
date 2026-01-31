type FAQItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  title: string;
  items: FAQItem[];
};

export function FAQAccordion({ title, items }: FAQAccordionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <details key={item.question} className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
            <summary className="cursor-pointer text-sm font-semibold text-white">{item.question}</summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
