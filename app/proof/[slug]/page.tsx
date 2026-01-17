import { getCaseStudyBySlug, getAllCaseStudies } from '../../../lib/content';
import { MarkdownRenderer } from '../../../components/content/MarkdownRenderer';

export async function generateStaticParams() {
  return getAllCaseStudies().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);
  return {
    title: study.title,
    description: study.description
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = getCaseStudyBySlug(params.slug);

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Case study</p>
        <h1 className="text-3xl font-semibold text-white">{study.title}</h1>
        <p className="text-lg text-slate-300">{study.description}</p>
      </section>
      <MarkdownRenderer content={study.content} />
    </div>
  );
}
