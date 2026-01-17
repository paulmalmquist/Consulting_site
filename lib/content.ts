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

export function readJson<T>(relativePath: string): T {
  const filePath = path.join(CONTENT_ROOT, relativePath);
  return JSON.parse(fs.readFileSync(filePath, 'utf8')) as T;
}
