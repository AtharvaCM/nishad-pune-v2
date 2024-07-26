import { stegaClean } from '@sanity/client/stega';
import { codeToHtml, splitLines } from 'shiki';

import css from './Code.module.css';

export default async function Code({
  value,
}: Readonly<{
  value?: {
    language: string;
    code: string;
    filename?: string;
    highlightedLines?: number[];
  };
}>) {
  if (!value?.code) return null;

  const html = await codeToHtml(stegaClean(value.code), {
    lang: value.language,
    theme: 'dark-plus',
    decorations: value.highlightedLines
      ?.map((row) => ({
        row,
        characters: stegaClean(splitLines(value.code)[row - 1]?.[0])?.length,
      }))
      ?.filter(({ characters }) => characters > 0)
      ?.map(({ row, characters }) => ({
        start: { line: row - 1, character: 0 },
        end: { line: row - 1, character: characters },
        properties: { class: 'highlight' },
      })),
  });

  return (
    <article className="relative !mb-2 !mt-6 rounded bg-gray-500">
      {value.filename && (
        <div className="-mb-1 rounded-t bg-[#1E1E1E]/90 px-2 py-1 font-mono text-xs text-background">
          <span className="inline-block rounded-t border-b border-blue-400 bg-[#1E1E1E] px-3 py-2">📁 {value.filename}</span>
        </div>
      )}
      <div className={css.code} dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
