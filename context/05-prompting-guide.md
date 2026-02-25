# Prompting Guide for Product Managers

Prompting is how you communicate intent to AI coding tools. The good news: the skills you already have — writing requirements, defining acceptance criteria, thinking in user stories — are exactly what makes a great prompt.

---

## The Core Principle

**Be specific about WHAT you want, not HOW to implement it.**

You are the product manager. You define the outcome. The AI figures out the implementation. When you describe the desired result clearly, the AI has everything it needs to make good technical decisions. When you dictate implementation details you don't fully understand, you constrain the AI from doing its best work.

Think of it this way: a prompt is a requirement. Write it like one.

---

## Anatomy of a Good Prompt

Every effective prompt has four parts:

| Part | What it does | Example |
|---|---|---|
| **Context** | What's the project? What exists already? | "We have a Next.js app with a PostgreSQL database and an existing users table." |
| **Task** | What do you want done? | "Add a settings page where users can update their display name and email." |
| **Constraints** | Requirements, limitations, preferences | "Use the existing UI component library. Validate email format before saving." |
| **Format** | How should the output look? | "Create the page component and any needed API routes." |

You don't need all four every time. But when you're getting unexpected results, check which part is missing.

---

## Before and After

### 1. Building a Feature

**Weak:** "Make a login page."

**Strong:** "Create a login page with email and password fields, a 'Remember me' checkbox, and a 'Forgot password' link. Use a centered card layout on a light gray background. Show an inline error message below the form if login fails. On success, redirect to /dashboard."

Why it works: the AI knows every element to include, the layout intent, and the behavior on both success and failure.

### 2. Writing a PRD

**Weak:** "Write a PRD for notifications."

**Strong:** "Write a product requirements document for an in-app notification system. Target users are SaaS team leads who manage 5-15 direct reports. Cover three notification types: task assignments, deadline reminders, and mentions. Include user stories, acceptance criteria for each type, and a prioritized scope table (must-have / nice-to-have / out-of-scope). Keep it under two pages."

Why it works: it defines the audience, scope boundaries, specific deliverables, and format constraints.

### 3. Analyzing Data

**Weak:** "Analyze our signup data."

**Strong:** "I have a CSV of 2,400 user signups from Q1. Columns are: signup_date, source, plan_type, converted_to_paid (boolean), days_to_conversion. Show me: (1) conversion rate by acquisition source, (2) average days to conversion by plan type, and (3) a weekly signup trend. Flag anything that looks unusual."

Why it works: it specifies the dataset shape, the exact analyses needed, and asks the AI to apply judgment on anomalies.

### 4. Building a Prototype

**Weak:** "Build a dashboard."

**Strong:** "Build a single-page project tracker dashboard. Show a table of projects with columns: name, owner, status (on-track / at-risk / blocked), and due date. Add a summary bar at the top showing counts per status. Use mock data for 8-10 projects. Include a dropdown filter for status. Keep styling minimal — this is for an internal stakeholder demo, not production."

Why it works: it defines the data model, the interaction (filter), the purpose (demo), and the quality bar (minimal styling).

---

## Iteration Patterns

You will rarely get a perfect result on the first prompt. That is normal. Use these patterns to steer:

**Refinement** — "This is close, but move the summary stats above the table and make the status column use colored badges instead of plain text."

**Reset** — "This approach is too complex. Let's start over with a simpler version that only shows the table, no charts."

**Understanding** — "Before changing anything, explain how the authentication flow works in this codebase. I want to understand it before we modify it."

**Decision support** — "What are the tradeoffs between adding notifications with polling vs. WebSockets? Give me a comparison I could present to engineering."

The key insight: iteration is not failure. A two-prompt conversation that nails the result beats a single massive prompt that tries to anticipate everything.

---

## Common Mistakes

**Being too vague.** "Make it better" gives the AI no direction. Say what "better" means: faster load time? clearer copy? fewer steps?

**Being too prescriptive about implementation.** "Use a useEffect hook with a debounced setState inside a memo wrapper" — unless you know exactly why you need that, let the AI choose the approach. Tell it the behavior you want instead.

**Not reviewing output.** AI-generated code can look right and be subtly wrong. Read what it produces. Test it. Ask it to explain parts you don't understand. Your review is the quality gate.

**Giant prompts when iteration works better.** A 500-word prompt trying to specify everything upfront is harder to write and harder for the AI to satisfy. Start with the core ask. Iterate from there.

---

## The PM Advantage

You might feel like you are at a disadvantage because you don't write code. You are not. The bottleneck with AI coding tools is rarely the coding — it is the clarity of the requirement. Vague input produces vague output regardless of technical skill.

Product managers are trained to define outcomes, write acceptance criteria, think in user flows, and scope work into deliverable chunks. That is exactly what a good prompt requires.

The prompt IS the requirement. You have been practicing this skill your entire career. Now it directly produces working software.
