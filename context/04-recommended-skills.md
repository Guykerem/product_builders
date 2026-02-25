# Recommended Skills

Skills are reusable instruction sets — markdown files that teach your AI coding tool how to handle specific tasks. You install them once, and they automatically activate when relevant. Think of them as "apps" for your AI assistant: each one adds a new capability without you having to write detailed prompts every time.

---

## How to Install Skills

Skills use an open standard that works across Claude Code, Cursor, Codex, and 30+ other AI tools. The install command:

```bash
npx skills add <owner/repo>
```

This pulls the skill files from a GitHub repository into your project. You can also install specific skills from a repo:

```bash
npx skills add anthropics/skills --skill pdf
```

Or install globally (available in all your projects):

```bash
npx skills add anthropics/skills --global
```

Other useful commands:

| Command | What it does |
|---------|-------------|
| `npx skills list` | Show installed skills |
| `npx skills find <query>` | Search for skills by keyword |
| `npx skills remove <name>` | Uninstall a skill |
| `npx skills update` | Update all installed skills |

---

## Where to Find Skills

**[skills.sh](https://skills.sh)** is the open directory for agent skills. Browse by category, see install counts, and install with one command. It indexes skills from across GitHub — thousands of them covering development, design, productivity, data, and more.

---

## Recommended Skill Packages

### For everyone (start here)

**Anthropic Official Skills** — Document handling and creation tools from the team that makes Claude.

```bash
npx skills add anthropics/skills
```

Key skills: `pdf` (read, create, extract from PDFs), `docx` (Word documents), `xlsx` (Excel spreadsheets), `pptx` (PowerPoint decks), `skill-creator` (create your own skills), `mcp-builder` (build tool integrations).

**Superpowers** — A development methodology that makes AI agents think before they code. Instead of jumping straight to implementation, the agent collaborates with you on design first.

```bash
npx skills add obra/superpowers
```

Key skills: `brainstorming` (Socratic design refinement before building), `systematic-debugging` (4-phase root cause analysis), `test-driven-development` (RED-GREEN-REFACTOR cycle), `writing-plans` / `executing-plans` (break work into steps, execute in batches with checkpoints).

---

### For PM work

**Product Manager Skills** — 42 battle-tested PM frameworks that teach AI agents to do professional product management work. Built by Dean Peters (Principal Consultant at Productside.com).

```bash
npx skills add deanpeters/Product-Manager-Skills
```

Organized in three tiers:
- **Component skills** (19) — Templates for deliverables: user stories, positioning statements, personas, journey maps, SaaS metrics
- **Interactive skills** (18) — Guided discovery flows that ask contextual questions then recommend approaches: prioritization advisor (RICE, ICE, Kano), pricing advisor, discovery interview prep
- **Workflow skills** (5) — End-to-end processes: `prd-development`, `discovery-process`, `roadmap-planning`, `product-strategy-session`

---

### For web building

**Vercel Agent Skills** — Best practices from Vercel's engineering team. These activate automatically when you're writing frontend code.

```bash
npx skills add vercel-labs/agent-skills
```

Key skills: `react-best-practices` (40+ optimization rules across 8 categories), `web-design-guidelines` (100+ rules covering accessibility, performance, and UX), `composition-patterns` (scalable React component architecture).

---

## Built-in Skill: `/learn`

This repo comes with a built-in `/learn` skill. Type `/learn` followed by any topic and Claude will:

1. Search local context and the web for high-quality information
2. Explain it to you in plain language
3. Save a structured note to the `learnings/` directory
4. Optionally commit it to the repo so others benefit too

Try it: `/learn what is an API endpoint`

---

## Finding More Skills

1. Browse **[skills.sh](https://skills.sh)** — filter by category, sort by popularity
2. Run `npx skills find <keyword>` — search from your terminal
3. Check **[awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills)** — community-curated list of 380+ skills
4. Run `npx skills add <repo> --list` on any repo to see what skills it offers before installing
