# How to Clone a Git Repo

Cloning a git repository means downloading a complete copy of a project (including its entire history) from a remote location (like GitHub) to your local machine. Once cloned, you can work on the code, make changes, and push updates back.

## The Basic Command

```bash
git clone <repository-url>
```

That's it at its simplest. Replace `<repository-url>` with the actual URL of the repo you want to clone.

## Step by Step

### 1. Find the Repository URL

Go to the repo on GitHub (or GitLab, Bitbucket, etc.) and look for the green **"Code"** button. Click it and you'll see a URL. You have two options:

- **HTTPS** (easier to start with): `https://github.com/username/repo-name.git`
- **SSH** (requires setup, but more convenient long-term): `git@github.com:username/repo-name.git`

If you're just getting started, use HTTPS.

### 2. Open Your Terminal

- On Mac: open the **Terminal** app (search for it in Spotlight)
- On Windows: use **Git Bash** (comes with Git for Windows) or **Windows Terminal**

### 3. Navigate to Where You Want the Project

Use `cd` to move to the folder where you want the project to live:

```bash
cd ~/projects
```

This puts you in a `projects` folder inside your home directory. If that folder doesn't exist yet, create it first:

```bash
mkdir ~/projects
cd ~/projects
```

### 4. Clone the Repo

```bash
git clone https://github.com/username/repo-name.git
```

This creates a new folder called `repo-name` in your current directory, containing all the project files.

### 5. Move Into the Project

```bash
cd repo-name
```

You're now inside the cloned project and ready to work.

## Common Variations

### Clone into a specific folder name

```bash
git clone https://github.com/username/repo-name.git my-custom-folder-name
```

### Clone only the most recent version (faster for large repos)

```bash
git clone --depth 1 https://github.com/username/repo-name.git
```

### Clone a specific branch

```bash
git clone --branch branch-name https://github.com/username/repo-name.git
```

## Prerequisites

Before you can clone, you need **git installed** on your machine:

- **Mac**: Git usually comes pre-installed. Type `git --version` in Terminal to check. If it's not there, install it with `xcode-select --install`.
- **Windows**: Download and install [Git for Windows](https://git-scm.com/download/win).

## What Happens When You Clone?

When you run `git clone`, several things happen:

1. A new folder is created with the repo name
2. All the project files are downloaded into that folder
3. The full commit history is downloaded (so you can see every change ever made)
4. A connection to the remote repository is set up (called `origin`), so you can later pull updates or push your own changes

## Quick Sanity Check

After cloning, run these commands inside the project folder to confirm everything worked:

```bash
git status          # Should say "On branch main" (or master) with nothing to commit
git log --oneline   # Shows recent commit history
ls                  # Lists the project files
```

## Troubleshooting

| Problem | Likely Cause | Fix |
|---|---|---|
| `git: command not found` | Git isn't installed | Install git (see Prerequisites above) |
| `repository not found` | Wrong URL or private repo | Double-check the URL; for private repos you need access permissions |
| `Permission denied (publickey)` | SSH not set up | Switch to the HTTPS URL instead, or set up SSH keys |
| `fatal: destination path already exists` | Folder with that name already exists | Delete or rename the existing folder, or clone into a different name |

That's all there is to it. Clone the repo, `cd` into it, and start exploring the code.
