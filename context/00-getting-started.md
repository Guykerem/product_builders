# Getting Started

Welcome to Product Builders. This guide will help you go from zero to building with AI-assisted coding tools.

## What You Need

### 1. A GitHub Account
If you don't have one, create one at [github.com](https://github.com). This is where code lives, and where you'll collaborate with others.

### 2. Git (Version Control)
Git tracks changes to your files so you can collaborate without stepping on each other's toes.

**Install on Mac:**
```bash
xcode-select --install
```

**Verify it works:**
```bash
git --version
```

### 3. An AI Coding Tool

Pick one (or both):

**Cursor** (recommended starting point)
- Download from [cursor.com](https://cursor.com)
- It's VS Code with AI built in — if you've used VS Code, it'll feel familiar
- The AI can read your files, write code, and explain what things do
- Use Cmd+L to chat, Cmd+K to edit inline

**Claude Code** (power-user path)
- Install: `npm install -g @anthropic-ai/claude-code`
- Runs in your terminal — no IDE needed
- More powerful for complex tasks, but steeper learning curve
- Great for when you want to build something ambitious

### 4. This Repo
```bash
git clone https://github.com/Guykerem/product_builders.git
cd product_builders
```

Then open it in Cursor, or start Claude Code by running `claude` in the terminal.

## Your First 30 Minutes

1. **Open this repo** in Cursor or Claude Code
2. **Browse the context/ folder** — read whatever interests you
3. **Try `/learn`** — pick any topic and say `/learn [topic]`. It'll research it and save a note for you.
4. **Push your learning** — when the skill asks if you want to contribute, say yes. You just made your first Git contribution.

## Key Concepts

### What is a Repository?
A repository (or "repo") is a folder that Git is tracking. Think of it as a project folder with superpowers — it remembers every change anyone ever made, and lets multiple people work on it simultaneously.

### What is a Commit?
A commit is a snapshot of your changes. It's like saving a document, but with a message that explains what you changed and why. You can always go back to any previous commit.

### What is a Push?
Pushing sends your commits to GitHub so others can see them. Until you push, your changes exist only on your machine.

### What is a Branch?
A branch lets you work on something without affecting the main version. Think of it as a parallel universe for your code. When you're done, you merge it back.

### What is a Pull Request (PR)?
A PR is how you propose merging your branch into the main branch. It lets others review your changes before they go live. For learnings in this repo, you can push directly to main.
