import type { APIRoute } from 'astro';
import { site, builds, stack } from '../data/site';

// Plain-text summary for AI answer engines (llmstxt.org format). Built from site.ts so it never drifts.
export const GET: APIRoute = () => {
  const docs = stack.filter((s) => s.docs).map((s) => `- [${s.docs!.label}](${s.docs!.href}): ${s.docs!.summary}`);
  const { github, linkedin } = site.links;

  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `${site.name} is a ${site.jobTitle} at ${site.employer.name}. Topics: ${site.topics.join(', ')}.`,
    '',
    '## Builds',
    '',
    ...builds.map((b) => `- [${b.name}](${b.href}): ${b.what} (${b.meta})`),
    '',
    ...(docs.length ? ['## Documentation', '', ...docs, ''] : []),
    '## Links',
    '',
    `- [Website](${site.url})`,
    ...(github ? [`- [GitHub](${github})`] : []),
    ...(linkedin ? [`- [LinkedIn](${linkedin})`] : []),
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
