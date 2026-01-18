import Link from 'next/link';
import { getAllCaseStudies } from '../../lib/content';
import { TagPills } from '../../components/content/TagPills';

export default function ProofPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold text-white">Example engagements (anonymized)</h1>
        <p className="text-lg text-slate-300">
          Short, anonymized examples that show how workflow compression and governance-safe AI are delivered.
        </p>
      </section>
      <div className="grid gap-4 md:grid-cols-2">
        {studies.map((study) => (
          <Link
            key={study.slug}
            href={`/proof/${study.slug}`}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-5 transition hover:border-slate-600"
          >
            <h2 className="text-lg font-semibold text-white">{study.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{study.description}</p>
            <div className="mt-3">
              <TagPills tags={study.tags} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
