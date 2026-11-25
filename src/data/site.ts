// Edit this file to change what shows up on the site. Empty links are hidden.
export const site = {
  name: 'Jatin Chuglani',
  first: 'Jatin',
  last: 'Chuglani',
  tagline: 'Markdown files and working prototypes. Humans and agents, building together.',
  role: 'Senior AI product manager at Salesforce. Analytics and agents.',
  description:
    'Markdown files and working prototypes. Humans and agents, building together. Senior AI product manager, hands-on with agents, harnesses and MCP.',
  url: 'https://jatinchuglani.github.io',
  // Used for structured data and llms.txt, not shown on the page.
  jobTitle: 'Senior AI Product Manager',
  employer: { name: 'Salesforce', url: 'https://www.salesforce.com' },
  topics: ['AI agents', 'Model Context Protocol (MCP)', 'CRM Analytics', 'Analytics', 'Product management'],
  // Search Console verification token (the part after "google-site-verification="). Empty hides the tag.
  googleVerification: 'UTQPBXsgSesNJsZ_2hsAGY-QSzWQj0Jy86oJ08zslog',
  ogAlt: 'Jatin Chuglani, senior AI product manager at Salesforce',
  links: {
    github: 'https://github.com/jatinchuglani',
    linkedin: 'https://www.linkedin.com/in/jatin-chuglani/',
    email: '',
  },
};

export const builds = [
  {
    name: 'claude-skills',
    what: 'Reusable skills for Claude Code: deck builder, UI prototype builder, Office files, LLM wiki pattern.',
    meta: 'Claude Code, Markdown',
    href: 'https://github.com/jatinchuglani/claude-skills',
  },
  {
    name: 'slack-cowork',
    what: 'Run and monitor Claude Code sessions from Slack DMs.',
    meta: 'Bun, Slack Socket Mode',
    href: 'https://github.com/jatinchuglani/slack-cowork',
  },
  {
    name: 'shortcut-deck',
    what: 'Turn a phone into a Mac controller over Wi-Fi. No app, no dependencies.',
    meta: 'Python, PWA',
    href: 'https://github.com/jatinchuglani/shortcut-deck',
  },
  {
    name: 'exercise-timer',
    what: 'Interval timer in the browser with color-coded phases.',
    meta: 'HTML, JavaScript',
    href: 'https://github.com/jatinchuglani/exercise-timer',
  },
];

export const stack = [
  { name: 'Agents', line: 'Shipped the CRM Analytics subagent. Parallel subagents for research and review.' },
  { name: 'Harnesses', line: 'Claude Code setups: skills, hooks, memory, scheduled jobs.' },
  {
    name: 'MCP',
    line: 'Shipped the CRM Analytics MCP server. Others wired to Slack, Drive and GitHub.',
    docs: {
      label: 'CRM Analytics MCP docs',
      summary: 'Public Salesforce documentation for the CRM Analytics MCP server.',
      href: 'https://help.salesforce.com/s/articleView?id=analytics.bi_mcp_coworker_overview.htm&type=5',
    },
  },
];

export const flow = [
  { step: 'Notes', line: 'Calls, docs and threads stay untouched.' },
  { step: 'Wiki', line: 'AI keeps pages current and linked.' },
  { step: 'Skills', line: 'Repeatable jobs: decks, PRDs, data pulls.' },
  { step: 'Agents', line: 'Parallel research and review.' },
  { step: 'Me', line: 'I decide and sign off.' },
];
