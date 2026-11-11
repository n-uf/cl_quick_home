---
title: "Claude Code in incognito: a chat that saves nothing"
description: "Claude Code in incognito: cl_quick runs each quick chat with session saving off, so nothing is saved on your Mac. Anthropic still gets the messages."
h1: "Claude Code in incognito: ask a question and leave no transcript"
mainKeyword: "claude code in incognito"
kind: use-case
draft: true
published: 2026-12-01
updated: 2026-12-01
author: n-uf
takeaways:
  - "By default Claude Code saves each session as a transcript on your Mac, in the profile's projects/ folder, and keeps it 30 days."
  - "Claude Code can run with session saving off. cl_quick runs every quick chat that way, so nothing is saved on this Mac and a chat is never resumed."
  - "cl_quick's incognito is about your Mac only. Your messages still go to Anthropic under the profile's account, like any Claude Code use."
  - "A chat ends after 15 minutes idle, on New chat (⌘N), on another profile or account, if claude crashes, or when cl_quick quits."
  - "The Claude app's incognito chats are a different feature, run by Anthropic. cl_quick is independent and not affiliated with Anthropic."
faq:
  - q: "Is there an incognito mode in Claude Code?"
    a: "Not by that name. Claude Code's docs, as of November 2026, don't use the word incognito. They describe two ways to turn session saving off: the --no-session-persistence flag and the CLAUDE_CODE_SKIP_PROMPT_HISTORY environment variable. cl_quick runs every quick chat with --no-session-persistence and calls those chats incognito."
  - q: "Does a cl_quick incognito chat still go to Anthropic?"
    a: "Yes. Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account, as any Claude Code use does, and Anthropic's retention and training rules for that account apply."
  - q: "Is a cl_quick chat saved anywhere on my Mac?"
    a: "No. A chat lives only in the running claude and ends with it, and Claude Code writes no transcript for it. Any claude start, chat or not, may refresh a feature-flag timestamp in the profile's .claude.json and take a backup copy of that file. That is Claude Code's housekeeping, not the chat."
  - q: "Is cl_quick free?"
    a: "Yes, the app is free. It uses your own Claude Code sign-in, so every chat counts against that account's Claude plan limits."
  - q: "How is this different from Claude's incognito chats?"
    a: "Claude's incognito chats are a Claude app feature, run by Anthropic. Anthropic's page says they aren't saved to chat history or memory, aren't used for training, and are retained 30 days by default. cl_quick's incognito is Claude Code with session saving off, and it only covers what is saved on your Mac."
sources:
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-11
    supports: "Intro (quick chats are incognito, the exact sentence, how a chat ends, the idle message); Profiles (a profile is a Claude Code folder, Work is ~/.claude-work); The chat (Copy, Stop, Retry, the pickers change the running claude); What it keeps, and what it sends (--no-session-persistence, the check on a signed-in folder with Claude Code 2.1.318, AGENTS.md plugin and auto memory turned off, the .claude.json timestamp and backup, no tools, no MCP servers, no settings files, Remove… in Settings ▸ General)."
    quote: "nothing is saved on this Mac"
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-11
    supports: "The 'Incognito chats' entry: no transcript, nothing resumed, the ways a chat ends (15 minutes idle with the window open or hidden, New chat, another profile or account, a crash or a needed sign-in, quit)."
  - title: "Claude Code docs: CLI reference"
    url: "https://code.claude.com/docs/en/cli-reference"
    checked: 2026-11-11
    supports: "--no-session-persistence: sessions are not saved to disk and cannot be resumed; print mode only; CLAUDE_CODE_SKIP_PROMPT_HISTORY does the same in any mode; example claude -p --no-session-persistence \"query\"."
    quote: "sessions are not saved to disk and cannot be resumed"
  - title: "Claude Code docs: Sessions"
    url: "https://code.claude.com/docs/en/sessions"
    checked: 2026-11-11
    supports: "Sessions are saved continuously to local transcript files so you can return after exiting; claude --continue and claude --resume; transcripts are JSONL at ~/.claude/projects/<project>/<session-id>.jsonl by default."
  - title: "Claude Code docs: Explore the .claude directory"
    url: "https://code.claude.com/docs/en/claude-directory"
    checked: 2026-11-11
    supports: "Transcripts and history are not encrypted at rest, OS file permissions are the only protection; cleanupPeriodDays defaults to 30 days; with CLAUDE_CONFIG_DIR set, every ~/.claude path and .claude.json live under that folder; ~/.claude.json holds app state and account details; backups/ keeps earlier copies made when Claude Code rewrites it."
  - title: "Claude Code docs: Environment variables"
    url: "https://code.claude.com/docs/en/env-vars"
    checked: 2026-11-11
    supports: "CLAUDE_CODE_SKIP_PROMPT_HISTORY=1 skips writing prompt history and session transcripts to disk; such sessions don't appear in --resume, --continue or up-arrow history."
  - title: "Claude Code docs: Data usage"
    url: "https://code.claude.com/docs/en/data-usage"
    checked: 2026-11-11
    supports: "Retention by account type (Free, Pro, Max and Ultra: 5 years if model improvement is allowed, 30 days if not; Team, Enterprise and API: 30 days standard); training on Free, Pro, Max and Ultra data when the setting is on, including Claude Code use; privacy settings at claude.ai/settings/data-privacy-controls."
  - title: "Claude Code docs (full text, llms-full.txt)"
    url: "https://code.claude.com/docs/llms-full.txt"
    checked: 2026-11-11
    supports: "The English docs don't contain the word 'incognito' (searched the full text)."
  - title: "Claude Help Center: Use incognito chats"
    url: "https://support.claude.com/en/articles/12260368-use-incognito-chats"
    checked: 2026-11-11
    supports: "Incognito chats in the Claude app aren't saved to chat history or memory, aren't used for training, are retained 30 days by default; the ghost icon. Marked 'Updated over a week ago' when read."
  - title: "Claude Help Center: Use Claude Code with your Pro, Max, or Ultra plan"
    url: "https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan"
    checked: 2026-11-11
    supports: "Limits are shared across Claude and Claude Code, so all activity in both tools counts against the same limits."
related:
  - /
  - /faq/
  - /install/
---

Claude Code in incognito means asking it something without the exchange landing in your session history. By default, Claude Code saves every session as a transcript on your Mac. A chat run with session saving off keeps nothing there, and cl_quick, a free macOS menu bar app, runs every quick chat that way. It runs on your own Claude Code sign-in, so every chat counts against that account's Claude plan limits. Your messages still go to Anthropic under the profile's account. cl_quick is independent and not affiliated with Anthropic.

## Why Claude Code keeps a transcript

Anthropic's docs say Claude Code saves a session to a local transcript file continuously as you work. That's what lets you come back to it with `claude --continue` or `claude --resume`. The file is JSONL, at `~/.claude/projects/<project>/<session-id>.jsonl` by default, and Claude Code deletes it after 30 days unless you change `cleanupPeriodDays`. The same docs say transcripts aren't encrypted at rest. File permissions are the only protection.

For project work, that's what you want. For a side question it's less welcome: a pasted error with a hostname in it, a half-formed idea, something you'd rather not leave in a file for a month.

## Claude Code in incognito mode: is there one?

Not by that name. Claude Code's docs, as of November 2026, don't use the word "incognito". They do describe two ways to turn saving off:

- `--no-session-persistence` means sessions aren't saved to disk and can't be resumed. The CLI reference lists it for print mode, as in `claude -p --no-session-persistence "query"`.
- The `CLAUDE_CODE_SKIP_PROMPT_HISTORY=1` environment variable skips writing prompt history and transcripts in any mode. Sessions started with it don't show up in `--resume`, `--continue` or up-arrow history.

"Incognito" is cl_quick's word for the first. cl_quick runs Claude Code with `--no-session-persistence`, on a shortcut, in a floating chat. {{live:/use-cases/claude-code-floating-window/}}The [Claude Code floating window](/use-cases/claude-code-floating-window/) page shows the whole chat.{{/live}}

## What a cl_quick incognito chat does

cl_quick puts it in two sentences. **Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account.**

A chat lives only in the running `claude`, so it ends when that does:

- after 15 minutes idle, whether the window is open or hidden;
- on New chat (⌘N);
- when you switch to another profile or account;
- if `claude` crashes or needs a sign-in;
- when cl_quick quits.

The window then says "This chat ended after 15 minutes idle. Nothing was saved." Your next message starts a new chat.

While a chat is open, Claude remembers the earlier turns, as in any chat. **Stop** ends an answer where it is and the chat goes on. Changing Model or Thinking changes the running `claude`, so the conversation stays. If Claude Code stops mid-answer, the window keeps what arrived and says the chat ended. **Retry** asks the last question in a new chat.

cl_quick also turns off two things that would leave a trace. It turns off Claude Code's auto memory, so no memory folder appears. And it stops Claude Code's built-in AGENTS.md plugin from noting the session's id in `plugins/store/`.

![cl_quick chat ended after 15 minutes idle](/img/qc-ended.webp "cl_quick's chat window after 15 minutes idle, drawn from sample data. The window says the chat ended and nothing was saved.")

| | Claude Code, by default | cl_quick quick chat |
|---|---|---|
| Transcript on disk | Yes, in the profile's `projects/` folder | None |
| Kept | 30 days by default | Until the chat ends |
| Can be resumed | Yes, with `--resume` or `--continue` | Never |
| Messages go to Anthropic | Yes | Yes |
| Account used | The one Claude Code is signed in to | The profile's account in use |

## What still happens

**Anthropic still gets your messages.** A quick chat is Claude Code, so Anthropic's rules for Claude Code apply. Anthropic's data usage page, read on 11 November 2026, says retention depends on your account type. For Free, Pro, Max and Ultra it's 5 years if you allow model improvement and 30 days if you don't. For Team, Enterprise and the API it's 30 days as standard. The page also says Anthropic trains on Free, Pro, Max and Ultra data when that setting is on, including Claude Code use. Session saving isn't part of those rules, so cl_quick's incognito doesn't change them. The setting itself is at claude.ai/settings/data-privacy-controls.

**The chat counts against the account's limits.** Anthropic's help page says limits are shared across Claude and Claude Code. A quick chat draws on the same limits as everything else on that account. For usage, limits and accounts, see [cl_audit](https://cl-audit.n-uf.com), n-uf's sibling app.

**Claude Code does its own housekeeping.** Any `claude` start, chat or not, may refresh a feature-flag timestamp in the profile's `.claude.json` and take a backup copy of that file. Anthropic's docs say `.claude.json` holds app state and account details, and that `backups/` keeps copies made when Claude Code rewrites it. None of that is your chat.

So this is a Claude Code private chat in one sense: private from the history on your Mac. It isn't private from Anthropic.

## How to check that Claude Code in incognito saved nothing

The README reports its own check, run on a signed-in folder with Claude Code 2.1.318. No file named the chat's session id or work folder, and no folder for the chat appeared under `projects/`.

You can also take a look yourself. This isn't the README's check, just a read-only way to see what Claude Code wrote recently:

1. Open a quick chat, ask a throwaway question and wait for the answer.
2. In Terminal, list the transcripts written in the last ten minutes:

```bash
find ~/.claude/projects -name '*.jsonl' -mmin -10
```

3. For a profile on another folder, put that folder in place of `~/.claude` (Work is `~/.claude-work`). Anthropic's docs say that with `CLAUDE_CONFIG_DIR` set, the same paths live under that folder.
4. Nothing from the quick chat should be listed. Any other Claude Code session you had running will show up, so expect to recognise what does.
5. For contrast, ask something in `claude` in a terminal and run the command again. A new file appears.

## How it differs from the Claude app's incognito chats

The Claude app has incognito chats of its own, started with a ghost icon. Anthropic's page says they aren't saved to your chat history or Claude's memory, aren't used for training, and are retained for 30 days by default. That's a feature of Anthropic's service. {{live:/blog/claude-incognito-chats/}}Whether [Claude incognito chats are private](/blog/claude-incognito-chats/) has its own page, which goes through what Anthropic says, plan by plan.{{/live}}

The two work at different layers. cl_quick's incognito is Claude Code with session saving off, and it only covers what's written on your Mac. It isn't Anthropic's incognito, and neither keeps your messages from Anthropic.

## What it suits, and what it doesn't

It suits a side question you don't want in your history, asked from whatever app you're in: a [Claude quick chat](/) on a key.

It doesn't suit work on a project. cl_quick runs Claude Code with no tools, no MCP servers and no settings files, so it can't read your files or run commands. That work belongs in Claude Code in a terminal, which saves its session. And since nothing is saved, copy what you want to keep. Each answer has a Copy button under it.

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, and the [FAQ](/faq/) has short answers. If you stop using it, **Remove…** in Settings ▸ General moves cl_quick's folder and any old quick chats to the Trash and quits the app. Your Claude Code folders, sign-ins and other sessions stay.
