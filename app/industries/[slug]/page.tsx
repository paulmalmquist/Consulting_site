import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { IndustryVerticalPage } from '../../../components/industries/IndustryVerticalPage';
import { INDUSTRY_VERTICAL_BY_SLUG, INDUSTRY_VERTICALS, type IndustryVertical } from '../../../content/industry-verticals';

type IndustryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return INDUSTRY_VERTICALS.map((industry) => ({ slug: industry.slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = INDUSTRY_VERTICAL_BY_SLUG[params.slug as IndustryVertical['slug']];

  if (!industry) {
    return {
      title: 'Industry Not Found | Novendor'
    };
  }

  const description = `Operational AI for ${industry.label.toLowerCase()} workflows with fixed-scope execution and measurable outcomes.`;

  return {
    title: `${industry.label} | Industry Engagement | Novendor`,
    description,
    alternates: {
      canonical: `/industries/${industry.slug}`
    },
    openGraph: {
      title: `${industry.label} | Novendor`,
      description
    }
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = INDUSTRY_VERTICAL_BY_SLUG[params.slug as IndustryVertical['slug']];

  if (!industry) {
    notFound();
  }

  return <IndustryVerticalPage industry={industry} />;
}
