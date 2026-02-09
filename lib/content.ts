import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type ContentMeta = {
  title: string;
  description: string;
  tags: string[];
  date?: string;
  type: string;
  slug: string;
};

export type ContentItem = ContentMeta & {
  content: string;
};

export type ResearchTag =
  | 'Positioning'
  | 'Messaging'
  | 'Category'
  | 'Proof'
  | 'Website'
  | 'Objections'
  | 'Industry';

export type ResearchAudience = 'CEO' | 'COO' | 'CIO/IT' | 'Ops' | 'Finance';
export type ResearchMaturity = 'Start' | 'Refine' | 'Prove';

export type ResearchSection = {
  type: string;
  [key: string]: unknown;
};

export type ResearchEntry = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  tags: ResearchTag[];
  audience: ResearchAudience[];
  maturity: ResearchMaturity;
  sections: ResearchSection[];
};

const CONTENT_ROOT = path.join(process.cwd(), 'content');

function readMdxFile(filePath: string): ContentItem {
  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);
  return {
    title: data.title,
    description: data.description,
    tags: data.tags ?? [],
    date: data.date,
    type: data.type,
    slug: data.slug,
    content
  };
}

function readDirContent(folder: string): ContentItem[] {
  const dirPath = path.join(CONTENT_ROOT, folder);
  return fs
    .readdirSync(dirPath)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => readMdxFile(path.join(dirPath, file)));
}

export function getPage(slug: string): ContentItem {
  const pages = readDirContent('pages');
  const page = pages.find((item) => item.slug === slug);
  if (!page) {
    throw new Error(`Page not found: ${slug}`);
  }
  return page;
}

export function getAllPages(): ContentMeta[] {
  return readDirContent('pages').map(({ content, ...rest }) => rest);
}

export function getAllInsights(): ContentMeta[] {
  return readDirContent('insights')
    .map(({ content, ...rest }) => rest)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}

export function getInsightBySlug(slug: string): ContentItem {
  const posts = readDirContent('insights');
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    throw new Error(`Insight not found: ${slug}`);
  }
  return post;
}

export function getAllCaseStudies(): ContentMeta[] {
  return readDirContent('case_studies')
    .map(({ content, ...rest }) => rest)
    .sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''));
}

export function getCaseStudyBySlug(slug: string): ContentItem {
  const studies = readDirContent('case_studies');
  const study = studies.find((item) => item.slug === slug);
  if (!study) {
    throw new Error(`Case study not found: ${slug}`);
  }
  return study;
}

export function getAllDocs(): ContentMeta[] {
  const index = readJson<Array<{ slug: string; order: number }>>('docs/index.json');
  const orderMap = new Map(index.map((entry) => [entry.slug, entry.order]));
  return readDirContent('docs')
    .map(({ content, ...rest }) => rest)
    .sort((a, b) => (orderMap.get(a.slug) ?? 99) - (orderMap.get(b.slug) ?? 99));
}

export function getDocBySlug(slug: string): ContentItem {
  const docs = readDirContent('docs');
  const doc = docs.find((item) => item.slug === slug);
  if (!doc) {
    throw new Error(`Doc not found: ${slug}`);
  }
  return doc;
}

export function readJson<T>(relativePath: string): T {
  const filePath = path.join(CONTENT_ROOT, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}

const RESEARCH_ORDER = ['positioning', 'messaging', 'website-schemes', 'examples'];

function readResearchFile(filePath: string): ResearchEntry {
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as ResearchEntry;
}

export function getAllResearchEntries(): ResearchEntry[] {
  const researchDir = path.join(CONTENT_ROOT, 'research');
  if (!fs.existsSync(researchDir)) {
    return [];
  }

  const orderMap = new Map(RESEARCH_ORDER.map((slug, index) => [slug, index]));

  return fs
    .readdirSync(researchDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => readResearchFile(path.join(researchDir, file)))
    .sort((a, b) => {
      const aOrder = orderMap.get(a.slug) ?? RESEARCH_ORDER.length + 1;
      const bOrder = orderMap.get(b.slug) ?? RESEARCH_ORDER.length + 1;
      if (aOrder !== bOrder) {
        return aOrder - bOrder;
      }
      return a.title.localeCompare(b.title);
    });
}

export function getResearchBySlug(slug: string): ResearchEntry {
  const match = getAllResearchEntries().find((item) => item.slug === slug);
  if (!match) {
    throw new Error(`Research entry not found: ${slug}`);
  }
  return match;
}
