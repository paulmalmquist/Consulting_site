import { getPage } from '../../lib/content';
import { MarkdownRenderer } from '../../components/content/MarkdownRenderer';
import { ContactForm } from '../../components/content/ContactForm';

export default function ContactPage() {
  const page = getPage('contact');

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">{page.title}</h1>
        <p className="text-lg text-slate-300">{page.description}</p>
      </section>
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <MarkdownRenderer content={page.content} />
        <ContactForm />
      </div>
    </div>
  );
}
