import fs from 'fs';
import path from 'path';
import { getAllCaseStudies, getAllDocs, getAllInsights, getAllPages, getAllResearchEntries, readJson } from '../lib/content';

const outputPath = path.join(process.cwd(), 'public', 'search-index.json');

type Document = {
  id: string;
  title: string;
  description: string;
  type: string;
  tags: string[];
  href: string;
  content: string;
};

function run() {
  const documents: Document[] = [];
  const pages = getAllPages();
  pages.forEach((page) => {
    documents.push({
      id: `page-${page.slug}`,
      title: page.title,
      description: page.description,
      type: 'page',
      tags: page.tags,
      href: page.slug === 'home' ? '/' : `/${page.slug}`,
      content: page.description
    });
  });

  getAllInsights().forEach((post) => {
    documents.push({
      id: `post-${post.slug}`,
      title: post.title,
      description: post.description,
      type: 'post',
      tags: post.tags,
      href: `/insights/${post.slug}`,
      content: post.description
    });
  });

  getAllCaseStudies().forEach((study) => {
    documents.push({
      id: `case-${study.slug}`,
      title: study.title,
      description: study.description,
      type: 'case',
      tags: study.tags,
      href: `/proof/${study.slug}`,
      content: study.description
    });
  });

  getAllDocs().forEach((doc) => {
    documents.push({
      id: `doc-${doc.slug}`,
      title: doc.title,
      description: doc.description,
      type: 'doc',
      tags: doc.tags,
      href: `/docs/${doc.slug}`,
      content: doc.description
    });
  });

  getAllResearchEntries().forEach((entry) => {
    documents.push({
      id: `research-${entry.slug}`,
      title: entry.title,
      description: entry.summary,
      type: 'research',
      tags: [...entry.tags, ...entry.audience, entry.maturity],
      href: `/research/${entry.slug}`,
      content: `${entry.summary} ${entry.tags.join(' ')}`
    });
  });

  const deliverables = readJson<Array<{ title: string; description: string; tags: string[]; href: string }>>('deliverables.json');
  deliverables.forEach((item) => {
    documents.push({
      id: `deliverable-${item.title.toLowerCase().replace(/\s+/g, '-')}`,
      title: item.title,
      description: item.description,
      type: 'deliverable',
      tags: item.tags,
      href: item.href,
      content: item.description
    });
  });

  const kbObjects = readJson<Array<{ id: string; title: string; description: string; tags: string[] }>>('kb_objects/index.json');
  kbObjects.forEach((item) => {
    documents.push({
      id: item.id,
      title: item.title,
      description: item.description,
      type: 'kb',
      tags: item.tags,
      href: '/demo',
      content: item.description
    });
  });

  fs.writeFileSync(outputPath, JSON.stringify({ documents }, null, 2));
  console.log(`Search index written to ${outputPath}`);
}

run();
