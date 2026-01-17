import ReactMarkdown from 'react-markdown';

export function MarkdownRenderer({ content }: { content: string }) {
  return (
    <article className="prose prose-invert max-w-none prose-headings:scroll-mt-24 prose-a:text-cyan-200">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}
