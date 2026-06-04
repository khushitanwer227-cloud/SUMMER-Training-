# Day 1: Development Setup , Git And GitHub

# tools Installed
-visual Studio code (vs code) 
-Git
 Useful broswer extensions: 
-Live Server
-prettier

# NOTES

# Setup & Configuration
git config --global user.name "Your Name": Sets your commit author name.
git config --global user.email "your@email.com": Sets your commit author email.
git config --list: Displays all configured settings

# Starting a Project

git init: Creates a hidden .git folder to start tracking the current directory.
git clone <url>: Downloads an entire remote project to your local machine

# Saving Changes

Manage files through the working directory, staging area, and local commit history

git status: Lists tracked, untracked, modified, and staged files.
git status -s: Displays status information in a compact, short format.
git add <file>: Stages a specific file for the next snapshot.
git add .: Stages all new, modified, and deleted files in the directory.
git commit -m "message": Permanently saves your staged snapshot with a summary.
git commit -am "message": Stages all tracked files and commits them in one step.

# Branching & Merging
Isolate features and safely combine distinct lines of development.

git branch: Lists all local branches in your current repository.
git branch <branch-name>: Creates a new parallel branch without switching to it.
git switch <branch-name>: Moves your working environment to a specified branch.
git switch -c <branch-name>: Creates a brand-new branch and immediately switches to it.
git merge <branch-name>: Integrates specified branch history into your current branch.
git branch -d <branch-name>: Deletes a fully merged local branch.

# Sharing & Syncing
Coordinate and publish code updates to shared remote systems like GitHub.

git remote -v: Lists connected remote repositories and their tracking URLs.

git fetch: Downloads history from the remote server without changing your working files.

git pull: Downloads remote changes and instantly merges them into your active branch

.git push origin <branch-name>: Uploads your validated local commits to the remote system.

# Inspecting & Undoing

Review past historical entries and fix structural errors.

git log: Displays the chronological history of commits for the current branch.

git log --oneline: Condenses history to show one compressed line per commit.

git diff: Shows unstaged text modifications compared against your index.

git restore <file>: Discards local uncommitted edits to reset a file back to its last commit state.

git reset HEAD~1: Undoes the last local commit and places changes back into your working directory.

git reset --hard HEAD~1: Erases the last commit, staging history, and uncommitted edits entirely.

git stash: Temporarily hides dirty working files to give you a clean workspace.

git stash pop: Restores your most recently hidden stash files back to your directory.



