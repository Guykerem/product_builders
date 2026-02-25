# What Is a PRD?

A **PRD** stands for **Product Requirements Document**. It is one of the most foundational documents a product manager creates. Its purpose is to clearly describe **what** you are building, **why** you are building it, and **what success looks like** — so that everyone on the team (engineers, designers, stakeholders) shares the same understanding before work begins.

---

## Why Does a PRD Exist?

Building a product without a PRD is like setting out on a road trip without agreeing on the destination. You might have a general sense of direction, but the driver, navigator, and passengers will all have different assumptions about where you're headed. A PRD aligns everyone around the same destination and the key constraints of the journey.

Specifically, a PRD helps you:

- **Reduce ambiguity.** Engineers and designers need to know what to build. A PRD turns a vague idea ("we need a better onboarding flow") into something concrete enough to act on.
- **Force clear thinking.** Writing a PRD requires you to answer hard questions early: Who is this for? What problem does it solve? What are we *not* building? This thinking upfront prevents expensive course-corrections later.
- **Create a shared reference point.** When disagreements arise mid-build (and they will), the team can return to the PRD to re-anchor on what was agreed.
- **Enable accountability.** A PRD defines what success looks like, which means you can later evaluate whether the thing you shipped actually achieved its goal.

---

## What Goes Into a PRD?

There is no single universal template, but most PRDs cover these core sections:

### 1. Problem Statement
What problem are you solving, and for whom? This is the heart of the document. A good problem statement is specific and grounded in evidence (user research, data, support tickets, etc.) rather than assumptions.

*Example: "New users who sign up for our free trial abandon the product within the first 3 days at a rate of 68%. Exit surveys indicate they don't understand how to complete their first core workflow."*

### 2. Goals and Success Metrics
What does success look like, and how will you measure it? Define 1-3 clear metrics that will tell you whether this effort worked.

*Example: "Increase 7-day retention for new free-trial users from 32% to 50%."*

### 3. User Stories or Use Cases
Describe the experience from the user's perspective. Who are they, what are they trying to do, and what does the ideal flow look like?

*Example: "As a new user, I want to be guided through creating my first project so that I understand the core value of the product within my first session."*

### 4. Requirements
This is the detailed "what we're building" section. Requirements are often broken into:

- **Functional requirements** — What the system must *do* (e.g., "The onboarding wizard must include a step where the user creates a sample project").
- **Non-functional requirements** — Constraints on *how* it must work (e.g., "The onboarding flow must load in under 2 seconds on a 3G connection").

A common mistake for beginners is to over-specify the *how* (implementation details) instead of the *what* (desired behavior). The PRD should describe the desired outcome and leave room for engineers and designers to determine the best way to achieve it.

### 5. Scope and Non-Goals
Equally important to defining what you *are* building is defining what you are *not* building. This prevents scope creep and sets expectations.

*Example: "Non-goal: We are not redesigning the entire dashboard. This effort is limited to the first-time user experience."*

### 6. Design and Technical Considerations
Any relevant context that will help the team: mockups or wireframes (if available), technical constraints, dependencies on other teams, or known risks.

### 7. Timeline and Milestones
A rough sense of phasing and key dates — not a detailed project plan, but enough to set expectations on when things will ship.

---

## Common Misconceptions

**"A PRD is a spec."**
Not exactly. A specification (spec) is typically a more detailed, implementation-level document. A PRD operates at a higher level — it defines the *what* and *why*, while a spec defines the *how* in granular detail. In practice, many teams blur this line, and that's fine. The important thing is that the thinking gets done, not what you call the document.

**"The PRD must be perfect before engineering starts."**
No. A PRD is a living document. It should be solid enough to begin work, but it will evolve as you learn more during design and development. The goal is to be *clear enough to align the team*, not to predict every detail in advance.

**"Only big features need a PRD."**
The formality scales with the complexity and risk of the work. A small bug fix doesn't need a PRD. A new feature that touches multiple teams and takes a quarter to build absolutely does. For things in between, even a lightweight one-pager can be valuable.

**"Writing a PRD is the PM's job alone."**
The PM typically owns the document, but the best PRDs are collaborative. Engineers surface technical constraints. Designers challenge assumptions about user behavior. Stakeholders provide business context. The PM synthesizes all of this into a coherent plan.

---

## How to Get Started

If you're writing your first PRD, keep it simple:

1. **Start with the problem.** Write 2-3 sentences about the problem you're solving and who experiences it. If you can't articulate this clearly, you're not ready to write a PRD yet — go talk to users first.
2. **Define one measurable goal.** What number will change if this effort succeeds?
3. **List what you're building and what you're not.** Be explicit about scope.
4. **Share it early and get feedback.** The value of a PRD comes from the alignment it creates, not from the document itself. Share a rough draft with your team before you try to make it perfect.

---

## In Summary

A PRD is a thinking tool disguised as a document. Its real purpose is not to produce a polished artifact — it is to force clarity about what you're building, why it matters, and how you'll know it worked. The discipline of writing one makes you a better product thinker, and the artifact it produces makes your team more effective.
