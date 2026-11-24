// Edit this file to change what shows up on the site. Empty links are hidden.
export const site = {
  name: 'Jatin Chuglani',
  first: 'Jatin',
  last: 'Chuglani',
  role: 'Senior product manager at Salesforce. AI and analytics.',
  description:
    'Senior product manager for AI and analytics. Hands-on with agents, harnesses and MCP. Public AI builds.',
  url: 'https://jatinchuglani.github.io',
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
  { name: 'Agents', line: 'Parallel subagents for research, review and drafting.' },
  { name: 'Harnesses', line: 'Claude Code setups: skills, hooks, memory, scheduled jobs.' },
  { name: 'MCP', line: 'Servers wired to Slack, Drive, GitHub and data tools.' },
];

export const flow = [
  { step: 'Notes', line: 'Calls, docs and threads stay untouched.' },
  { step: 'Wiki', line: 'Claude keeps pages current and linked.' },
  { step: 'Skills', line: 'Repeatable jobs: decks, PRDs, data pulls.' },
  { step: 'Agents', line: 'Parallel research and review.' },
  { step: 'Me', line: 'I decide and sign off.' },
];
