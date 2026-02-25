# How AI Coding Works

You don't need to understand neural networks to use AI coding tools effectively. But having an accurate mental model will save you from frustration and help you get dramatically better results. This is how it actually works.

## What AI Coding Actually Does

AI coding tools read your files, understand what you're asking for, and generate code that fits your project. Under the hood, it's pattern matching plus reasoning — the model has been trained on vast amounts of code and documentation, so it recognizes patterns and can apply them to your situation.

It's not magic. It doesn't "understand" your business the way you do. What it does is:

1. **Read** — it ingests your project files, instructions, and conversation history
2. **Reason** — it figures out what you're asking for and how it fits the existing code
3. **Generate** — it produces code, one token at a time, based on everything it's seen

This is why giving it good context matters so much. Garbage in, garbage out. Clear intent in, working code out.

## Mental Models

The best mental model: **pair programming with a very fast junior developer who has read every Stack Overflow answer ever written.**

This developer:
- Has seen a million codebases but has never worked at your company
- Can write boilerplate at superhuman speed
- Will confidently produce something that looks right but might be wrong
- Gets dramatically better when you explain what you actually want
- Never gets tired, never gets annoyed, never judges your questions

Another useful frame: **it's autocomplete on steroids.** Your phone predicts your next word. AI coding tools predict your next hundred lines of code — informed by your project, your instructions, and the entire internet's worth of programming knowledge.

## How Context Works

Context is everything. The AI doesn't know anything about your project until you give it something to read. Here's what it can work with:

- **Your project files** — it reads your code, configs, and documentation
- **CLAUDE.md** — a special file at your project root that gives the AI persistent instructions (more on this below)
- **Conversation history** — everything you've said in the current session
- **Files you reference** — when you point it at specific files, it reads them carefully

This is why working inside a repository matters. When you open a project in Cursor or start Claude Code in a repo, the AI can see the structure, read the files, and understand how things fit together. Without that context, it's guessing.

```
# This prompt without context:
"Build me a login page"
# ...produces generic code that won't fit your project.

# This prompt inside your project:
"Build a login page that matches the style in app/pages/home.tsx
and uses our existing auth service in lib/auth.ts"
# ...produces code that actually fits.
```

**Rule of thumb:** if the AI is producing bad output, you probably haven't given it enough context.

## The Prompt, Output, Review Loop

This is the core workflow. Everything else is a variation of this:

```
You describe what you want (prompt)
    → AI generates code (output)
        → You review and iterate (feedback)
            → Repeat until it's right
```

In practice it looks like this:

1. **Prompt** — Describe what you want. Be specific. Reference existing files.
2. **Output** — The AI generates code. Read it.
3. **Review** — Does it do what you asked? Does it fit the project? Are there bugs?
4. **Iterate** — If something's off, tell it what to fix. "This is close, but change X to Y."

**Never accept output without reviewing it.** This is the single most important habit. The AI will confidently produce code that looks correct but has subtle bugs, uses wrong assumptions, or misses edge cases. You don't need to understand every line — but you need to verify that it does what you intended.

For PMs, reviewing often means: "Does this match the spec? Can I run it and see the right behavior?" That's a perfectly valid review.

## What AI Is Good At vs. Where It Struggles

### Good at:
- **Boilerplate and standard patterns** — forms, API endpoints, data models, CRUD operations
- **Explaining code** — "What does this file do?" is a great prompt
- **Refactoring** — "Rename this variable everywhere" or "Break this into smaller functions"
- **Research** — "What's the best library for X?" with a summary of tradeoffs
- **Translation between formats** — JSON to TypeScript, SQL to ORM, Figma to CSS
- **Writing tests** — especially when you show it the code to test
- **Fixing bugs** — paste an error message and it usually knows the fix

### Struggles with:
- **Novel architecture** — it can implement patterns it's seen, but it can't invent new ones for your unique situation
- **Business logic decisions** — it doesn't know your users, your market, or your strategy
- **Anything requiring context you haven't provided** — it can't read your mind or your Slack history
- **Long, multi-step tasks without guidance** — it can lose the thread on complex changes
- **Knowing when to stop** — it will keep going if you let it, sometimes over-engineering simple things

The sweet spot: **you make the decisions, it does the implementation.** You say what to build and why. It figures out how.

## Vibe Coding

Andrej Karpathy (co-founder of OpenAI) coined the term "vibe coding" — describing what you want in natural language and getting working code back. No syntax to memorize. No documentation to look up. Just describe the vibe.

```
"Build me a dashboard that shows our weekly sales numbers
in a bar chart, with a date picker to change the range.
Keep it simple — just use HTML and Chart.js."
```

That's a valid prompt. The AI will produce a working dashboard.

This is the mode PMs will primarily work in. You bring the product sense — what should exist, who it's for, how it should behave. The AI brings the implementation. You don't need to know the difference between React and Vue to get something working.

Vibe coding works best when you:
- **Start small** — get one thing working, then add to it
- **Be specific about behavior** — "when the user clicks X, Y should happen"
- **Reference examples** — "make it look like [this site]" or "similar to how our settings page works"
- **Iterate quickly** — try it, see what's wrong, ask for fixes

## Skills and CLAUDE.md

Two features make AI coding tools dramatically more useful for teams:

### CLAUDE.md
A markdown file at the root of your project that gives the AI persistent instructions. Every conversation starts with the AI reading this file. Use it for:

- Project conventions ("We use TypeScript, never JavaScript")
- Architecture decisions ("All API calls go through lib/api.ts")
- Team workflows ("Always create a PR, never push directly to main")
- Context the AI always needs ("This is a B2B SaaS product for healthcare")

Think of it as onboarding docs for your AI pair programmer.

### Skills
Reusable prompt templates that codify common workflows. Instead of explaining the same process every time, you write it once as a skill and invoke it with a slash command.

```
# In a team repo, you might have:
/write-spec      — generates a product spec from a brief
/review-pr       — reviews a pull request with your team's checklist
/learn           — researches a topic and saves structured notes
```

Skills are how teams go from "one person figured out how to prompt well" to "everyone gets consistent, high-quality results." They're the AI equivalent of standard operating procedures.

## What This Means for You

As a PM using AI coding tools, your job hasn't changed — you still need to know what to build and why. What's changed is that the gap between "I know what I want" and "I have a working prototype" just collapsed from weeks to hours.

The fastest way to learn is to start building. Pick something small, describe what you want, and iterate from there.
