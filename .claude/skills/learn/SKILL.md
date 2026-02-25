---
name: learn
description: Research and learn about a topic, saving the learning as a reusable markdown note. Use this skill whenever the user says "/learn", "I want to learn about", "what is", "how does X work", "explain X", "teach me about", or asks any knowledge question they might want to save for later. Also triggers when users want to research a concept, tool, framework, or best practice related to product management, AI, or building with code.
---

# Learn

A skill for product managers who are learning to build. When invoked, it researches a topic — checking local knowledge first, then the web — and saves the result as a structured learning note that others can benefit from too.

The goal is twofold: help the PM learn something right now, and build a shared library of learnings that the whole cohort can browse and contribute to.

## How It Works

1. **Understand the topic** — Parse what the user wants to learn. If the request is vague ("learn about APIs"), ask one clarifying question to scope it. If it's specific enough ("learn how to make a POST request with fetch"), go straight to research.

2. **Search local context first** — Check the `context/` directory for existing material that covers this topic. Use Grep and Read to find relevant sections. If the answer is well-covered in context, synthesize from there — no need to go online.

3. **Research online if needed** — If local context doesn't cover it (or only partially), use WebSearch and WebFetch to find high-quality, current information. Prefer official docs, reputable guides, and practical tutorials over opinion pieces. Synthesize multiple sources into a clear, PM-friendly explanation.

4. **Present the learning** — Share the learning with the user directly in conversation. Keep it concise and practical — this is for PMs who build, not academics. Use plain language. If something has a technical term, explain it briefly on first use.

5. **Save the learning note** — Write a structured markdown file to the `learnings/` directory. Use the format specified below. If the `learnings/` directory doesn't exist yet, create it.

6. **Update the log** — Append an entry to `learnings/log.json`. If the file doesn't exist, create it with an initial array.

7. **Offer to contribute** — Ask the user if they'd like to share this learning with the repo. If yes, stage the new files, commit with a descriptive message, and push. If they say no, that's fine — the learning is saved locally either way.

## Learning Note Format

Save to `learnings/<slugified-topic>.md`:

```markdown
---
topic: "<Topic Title>"
date: <YYYY-MM-DD>
author: anonymous
source: context | research | both
tags: [<relevant>, <tags>]
---

# <Topic Title>

<Clear, concise explanation — 2-4 paragraphs. Write for a smart PM who may not have a technical background. Avoid jargon where possible; when technical terms are necessary, define them inline.>

## Key Takeaways

- <Most important point>
- <Second key point>
- <Third key point>

## Try It

<One concrete thing the reader can do right now to apply this learning. Be specific — give them an actual command to run, a file to create, or an experiment to try. This is what turns knowledge into capability.>

## Sources

- [<Source title>](<url>)
- [<Source title>](<url>)
```

### Slugification

Convert the topic title to a filename-safe slug: lowercase, spaces become hyphens, strip special characters. Examples:
- "What is a PRD" → `what-is-a-prd.md`
- "How to use Git branches" → `how-to-use-git-branches.md`
- "REST APIs 101" → `rest-apis-101.md`

### Handling Duplicates

If a learning file with the same slug already exists, read it first. If the existing note covers the topic well, tell the user it already exists and offer to show it. If the new research adds meaningful new information, update the existing file rather than creating a duplicate.

## Log Format

Append to `learnings/log.json`. The file is a JSON array of entries:

```json
[
  {
    "topic": "What is a PRD",
    "date": "2026-02-26",
    "source": "context",
    "file": "what-is-a-prd.md",
    "tags": ["product-management", "documentation"]
  }
]
```

If `log.json` doesn't exist, create it. Read the existing array before appending so you don't overwrite previous entries.

## Contributing Flow

After saving the learning, ask:

> "Want to share this learning with the team? I can commit and push it to the repo so others can find it too."

If yes:
1. `git add learnings/<file>.md learnings/log.json`
2. `git commit -m "learn: <topic title>"`
3. `git push`

If the push fails (e.g., they haven't set up Git credentials yet), explain what happened and show them the command to run manually. Don't let a Git issue block the learning — the file is already saved locally.

## Tone

Write like you're explaining something to a smart colleague over coffee. Be direct, practical, and encouraging. These are product managers stepping into a new world — respect their intelligence, bridge the gap to unfamiliar concepts, and always connect back to why this matters for someone who builds products.

## What This Skill Is NOT

- Not a substitute for deep study — it's a quick-start, not a textbook
- Not a search engine — it synthesizes and structures, not just retrieves
- Not prescriptive about what to learn — the PM chooses the topic, the skill does the research
