# Your First Build: A Feedback Form

You've set up your tools. Now let's build something real. In the next 15 minutes, you'll create a working feedback form — a web page with input fields, a submit button, and a thank-you screen. No backend, no dependencies, just a single HTML file you can open in your browser.

## What We're Building

A clean feedback form with:
- Name, email, and message fields
- A submit button that shows a thank-you message
- Basic validation (no empty fields, valid email)
- Styling that looks good without a design degree

This is the kind of thing you might actually use — embed it on a landing page, share it with a team, or adapt it for a survey.

## Step 1: Describe It in Words

Open your AI tool (Cursor chat or Claude Code) and type this:

```
Create a single HTML file called feedback-form.html with an embedded feedback form.

It should have three fields: Name, Email, and Message (a textarea).
When the user clicks Submit, hide the form and show a thank-you message.
Add basic validation — all fields required, email must contain @.
Style it with embedded CSS so it looks clean and modern on both desktop and mobile.
No external dependencies.
```

That's it. Hit enter and let the AI generate the file. You just wrote your first build prompt.

## Step 2: Review What You Got

Open the generated `feedback-form.html` in your browser (double-click it or drag it into a browser window). Check three things:

1. **Does it look right?** Are the fields visible? Is the layout reasonable? Don't worry about perfection — just "not broken."
2. **Does it work?** Try submitting with empty fields. Try an email without an @. Then fill it in correctly and submit. Does the thank-you message appear?
3. **Read the code.** You don't need to understand every line, but scroll through it. Notice the structure: HTML for content, CSS for styling, JavaScript for behavior. This is what every web page is made of.

If something is clearly wrong — a button that doesn't respond, text overlapping, a blank page — that's normal. Move to Step 3.

## Step 3: Iterate

This is where it gets fun. You don't need to get it right in one shot. Tell the AI what to change. Try prompts like these:

**Layout:**
```
Center the form on the page, both horizontally and vertically. Limit the form width to 500px.
```

**Styling:**
```
Change the color scheme to a white background with blue accents. Make the submit button blue with white text and rounded corners.
```

**Validation:**
```
Add a character counter below the message field that shows how many characters have been typed out of a 500 character limit.
```

**Polish:**
```
Add a smooth fade-in animation when the thank-you message appears.
```

Each time, review the result in your browser and decide what to change next. You're having a conversation with the tool — describe what you want, check what you got, refine.

## Step 4: Make It Yours

Now go off-script. Change the form fields to match something you actually need. A customer feedback form? An event RSVP? A bug report template? Swap the colors to your brand. Add your company name.

The prompts are yours to write now. If you get stuck, describe the problem in plain English. "The text is too small on mobile." "I want the fields to have a subtle shadow." "Add a dropdown for feedback category."

## What You Just Learned

You just practiced the core loop of AI-assisted building:

1. **Describe** what you want in plain language
2. **Review** the output — does it work? does it look right?
3. **Iterate** — tell the AI what to change and repeat

This is the same pattern whether you're building a feedback form or a full application. The projects get bigger, but the loop stays the same. You describe intent, the AI generates code, and you steer it toward what you actually need.

The skill you're developing isn't coding. It's the ability to evaluate output and give clear feedback. That's a product skill.

## Next Challenges

Ready to keep going? Try these in order of difficulty:

1. **A personal portfolio page** — Your name, a short bio, links to your work. Practice layout and styling prompts.
2. **A task tracker** — Add items to a list, mark them complete, delete them. This introduces managing state with JavaScript.
3. **A data dashboard** — Paste in some CSV data and ask the AI to generate charts. This is where things start to feel powerful.

Each one builds on the same loop. Describe, review, iterate. You already know how.
