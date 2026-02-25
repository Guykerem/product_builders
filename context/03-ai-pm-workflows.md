# AI PM Workflows

Practical workflows for product managers who want to use AI coding tools to accelerate their day-to-day work. Each workflow includes a real prompt you can copy, paste, and adapt.

---

## 1. Writing PRDs

Turn rough bullet points into a structured PRD in minutes instead of hours. Feed AI your raw thinking — feature goals, user context, constraints — and get back a draft you can refine with stakeholders.

```
I'm writing a PRD for [feature name]. Here's what I know so far:

- Problem: [1-2 sentences on the user pain point]
- Target user: [persona or segment]
- Key requirements: [bullet list of must-haves]
- Constraints: [technical, timeline, or resource limits]
- Success metrics: [how we'll measure impact]

Draft a PRD with these sections: Overview, Problem Statement, Goals & Success Metrics,
User Stories, Requirements (P0/P1/P2), Out of Scope, Open Questions.
Keep it concise — one page max per section.
```

**Pro tip:** Include your company's PRD template in the prompt. AI produces much better output when it conforms to a structure your team already recognizes.

---

## 2. User Research Synthesis

After a round of user interviews, paste your raw notes and let AI do the pattern-matching across conversations. This is especially powerful when you have 8+ interviews and themes are hard to see manually.

```
Below are my notes from 6 user interviews about [topic]. Each section is one interview.

[Paste interview notes here]

Analyze these interviews and produce:
1. Top 5 recurring themes, ranked by frequency
2. Key pain points with direct quotes as evidence
3. Surprising or contradictory insights
4. Segments — are there distinct user groups with different needs?
5. Recommended next steps for product decisions

Use a table for themes. Quote users verbatim where possible.
```

**Pro tip:** Label each interview with a participant ID (P1, P2, etc.) so the AI can reference specific users. Add demographic context (role, company size, usage frequency) to get segmentation insights.

---

## 3. Competitive Analysis

Use AI with web search to research competitors systematically. Instead of spending a day on competitor websites, get a structured comparison in minutes that you can verify and refine.

```
Research these competitors in the [category] space: [Competitor A], [Competitor B], [Competitor C].

For each, find:
- Core value proposition (one sentence)
- Pricing model and tiers
- Key features (top 5-7)
- Target customer segment
- Notable recent launches or pivots (last 6 months)

Then create a comparison table with our product ([your product]) included.
Highlight where we have clear advantages and where we have gaps.
```

**Pro tip:** Ask for the sources it used. Follow up with "What are the biggest positioning opportunities you see based on gaps no competitor is addressing?" to turn research into strategy.

---

## 4. Data Analysis

Describe your dataset or paste a CSV sample, and ask AI to find patterns, generate SQL queries, or build visualizations. You don't need to be a data analyst to get meaningful insights from your product data.

```
Here's a CSV of our user engagement data for the last 90 days:

[Paste CSV or describe columns: user_id, signup_date, plan_type, sessions_per_week,
feature_X_usage, churn_date]

Analyze this data and tell me:
1. What's the correlation between feature_X usage and retention?
2. What does the engagement curve look like for users who churn vs. those who stay?
3. Are there clear engagement thresholds that predict retention?
4. Write the SQL queries I'd need to run this analysis on our production database.

Show results as tables. Suggest 2-3 charts that would communicate these findings to leadership.
```

**Pro tip:** Start with a small sample (50-100 rows) to validate the analysis approach, then scale up. Ask AI to write the SQL or Python so your data team can reproduce the analysis on the full dataset.

---

## 5. Sprint Planning Support

Break down epics into well-scoped user stories, estimate relative complexity, and surface dependencies before your planning meeting. Walk in with a draft backlog instead of a blank board.

```
I have an epic: [Epic title and 2-3 sentence description].

The tech stack is [e.g., React frontend, Python/FastAPI backend, PostgreSQL].
The team is [e.g., 2 frontend, 2 backend, 1 mobile].

Break this into user stories following this format:
- Title
- As a [user], I want [action] so that [outcome]
- Acceptance criteria (3-5 bullet points)
- Estimated complexity: S / M / L / XL
- Dependencies on other stories

Then identify:
1. The critical path — what must be built first?
2. Stories that can be parallelized across frontend/backend
3. Any risks or ambiguities that need design or technical spikes
```

**Pro tip:** Include your team's definition of story sizes (e.g., "S = half a day, M = 1-2 days") so estimates are calibrated to your velocity, not generic.

---

## 6. Stakeholder Communication

Transform messy internal notes, metrics, and context into polished stakeholder communications. AI is excellent at adjusting tone and detail level for different audiences from the same source material.

```
I need to write a [weekly status update / executive summary / launch announcement] for [audience].

Here are my raw notes:
- [What shipped this week]
- [Key metrics and changes]
- [Blockers or risks]
- [Upcoming priorities]

Tone: [professional but concise / casual for the team / formal for the board]
Format: [email / Slack message / slide bullets]
Length: [3-5 bullet points / one paragraph / one page]

Lead with impact. Translate technical details into business outcomes.
Highlight anything that needs a decision or escalation.
```

**Pro tip:** Create a few "audience profiles" you reuse (e.g., "My VP cares about revenue impact, timeline risk, and headcount needs. Keep it under 5 bullets."). Paste the relevant profile into every prompt for that stakeholder.

---

## 7. Prototyping

Go from a feature idea to a clickable HTML prototype in 30 minutes. AI can generate functional front-end code that looks real enough to test with users or demo to stakeholders — no designer or engineer needed for the first pass.

```
Build me a clickable HTML prototype for this feature:

Feature: [Name and one-sentence description]
User flow:
1. User lands on [screen] and sees [key elements]
2. User clicks [action] and sees [result]
3. User completes [outcome]

Design style: Clean and minimal, similar to [reference app or style].
Use Tailwind CSS via CDN for styling.
Make it responsive.
Include realistic placeholder data — not "Lorem ipsum."

Create a single HTML file I can open in a browser.
Include basic interactivity (show/hide panels, tab switching, form validation)
using vanilla JavaScript.
```

**Pro tip:** Ask for multiple variants ("Show me 3 different layouts for the dashboard view") and test them with users before investing in high-fidelity design. A 30-minute prototype can save weeks of building the wrong thing.

---

## 8. Technical Feasibility

Before committing a feature to the roadmap, ask AI to assess what it would actually take to build. This gives you a more informed conversation with engineering and helps you scope MVPs that are technically realistic.

```
I'm considering this feature for our product:

[Describe the feature in 3-5 sentences, including the user-facing behavior]

Our current stack: [e.g., Next.js, Node.js, PostgreSQL, AWS, Stripe for payments]
Current architecture context: [e.g., we have a REST API, monolith, 50k MAU]

Assess:
1. Is this technically feasible with our current stack? What would need to change?
2. What are the major technical components or services involved?
3. Rough implementation complexity: days, weeks, or months for a senior engineer?
4. What are the key technical risks or unknowns?
5. What's the smallest possible MVP version of this feature?
6. Are there third-party APIs or services that could accelerate this?

Be specific. I'll use this to have an informed conversation with my engineering lead.
```

**Pro tip:** Paste in relevant parts of your actual codebase or API schema if you have access. The more concrete the context, the more accurate the feasibility assessment. Even sharing your database schema or a key endpoint helps AI move from generic to specific.

---

## Getting the Most Out of These Workflows

**Layer your prompts.** Start broad, then follow up. "Now make the PRD more specific to enterprise users." "Which of these stories has the highest technical risk?" The second and third prompts are where the real value lives.

**Feed it your real context.** These prompts work out of the box, but they work 3x better when you include your actual product context, team structure, user data, or codebase.

**Verify, don't trust.** AI is a draft machine, not an oracle. Every output is a starting point. The time you save on the first draft, invest in critical review of the final version.
