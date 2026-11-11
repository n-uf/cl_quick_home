---
title: "Claude Code floating window: a chat over any Mac app"
description: "A Claude Code floating window for Mac: press ⌥Space over any app, ask, and your own Claude Code answers in a chat that floats until Esc hides it."
h1: "A Claude Code floating window you open on a key and hide with Esc"
mainKeyword: "claude code floating window"
kind: use-case
draft: true
published: 2026-12-04
updated: 2026-12-04
author: n-uf
takeaways:
  - "cl_quick opens a chat bar on a shortcut (⌥Space by default). The first message turns it into a chat window that floats on every Space until Esc hides it."
  - "It never brings another app forward. Your own Claude Code answers, on the profile's account in use, and the chat counts against that account's limits."
  - "Under the field you pick the profile, the Model (Haiku by default) and Thinking (off by default). The 5-hour limit and the week show live."
  - "It runs Claude Code with no tools and no MCP servers, so it's a chat, not an agent: it can't read your files or run commands."
  - "cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account."
faq:
  - q: "How do I open a Claude Code floating window over another app?"
    a: "Press the shortcut, ⌥Space by default. A chat bar opens over the app you're in. Type, press Return, and the bar becomes a chat window. You can change the key in Settings ▸ General ▸ Shortcut: four other Space shortcuts, Other… for any key with ⌘, ⌃ or ⌥, or Off."
  - q: "Does the floating window take over my current app?"
    a: "No. It never brings another app forward, and it stays floating on every Space until you hide it with Esc, ⌘W or ✕. The panel takes the keyboard when it opens, so you can type into it straight away. cl_quick is a menu bar app with no Dock icon."
  - q: "Can the chat read my files or run commands?"
    a: "No. cl_quick runs Claude Code with no tools, no MCP servers and no settings files, so it answers only from what you type. For work on a project, use Claude Code in a terminal."
  - q: "Is cl_quick free?"
    a: "Yes, the app is free. It uses your own Claude Code sign-in, so every chat counts against that account's Claude plan limits."
  - q: "Is the floating chat saved?"
    a: "Not on your Mac. cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. A chat ends after 15 minutes idle, on New chat, on another profile or account, or when cl_quick quits."
sources:
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-11
    supports: "Intro (the bar, the chat window floating on every Space until Esc, never brings another app forward, your own Claude Code on the profile's account in use and its limits, menu bar app with no Dock icon, 15 minutes idle); Profiles (folders, Main and Work, in use and standby, tiles with a lamp, the account in use's box with address, plan, In use tag and two bars, standby rows with Switch… and Forget… and no usage, Sign in again… only when the sign-in is broken, Add an account…, addresses in full in Settings and possibly masked in prompts and dialogs); Switching accounts (cl_quick asks first; Claude Code in Terminal and editors on that folder moves, running sessions included; the Claude app keeps its own sign-in; Claude Code's own sign-in in Terminal; never a password, a token or the Keychain); The chat (Return, Shift-Return, Esc or ⌘W, ⌘N, Markdown, Copy, the answered-by line, Ask again, the header with only 5h and wk meters plus + and ✕, the controls row, the warm tint, the keys button, the bar's usage indicator, the profile key and its menu, the address only in that menu, blurred, with a copy button, the mic button and the panel taking the keyboard, the colours, get_usage, the notice naming the full window, Ask on Work and Switch to…, Sign in… and Try again, Stop, Retry); Settings ▸ General (Shortcut, warns only about real clashes, no Accessibility permission, Model and Thinking, Open at login); What it keeps, and what it sends (no tools, no MCP servers, no settings files); Install (Apple silicon, macOS 13 or later, Claude Code signed in)."
    quote: "It never brings another app forward."
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-11
    supports: "The floating chat on a shortcut; Settings with a tile per profile; profiles with several accounts; the profile picker; the quiet chat header; model and thinking as bar controls (Haiku and thinking off by default, every answer says which model gave it); live usage in the bar; the incognito chats entry."
  - title: "Claude Help Center: Use Claude Code with your Pro, Max, or Ultra plan"
    url: "https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan"
    checked: 2026-11-11
    supports: "Pro and Max have a five-hour session limit and a weekly limit; limits are shared across Claude and Claude Code, so all activity in both tools counts against the same limits."
    quote: "all activity in both tools counts against the same limits"
related:
  - /
  - /use-cases/claude-code-incognito/
  - /faq/
  - /install/
---

A Claude Code floating window is a chat that sits over whatever app you're in and answers with your own Claude Code. cl_quick, a free macOS menu bar app, gives you one. It runs on your own Claude Code sign-in, so each chat counts against that account's Claude plan limits. Press a shortcut (⌥Space by default) and a chat bar opens. The first message turns it into a chat window that stays floating on every Space until Esc hides it, and it never brings another app forward. cl_quick is independent and not affiliated with Anthropic.

It's built for the question you'd otherwise open a new terminal tab for. One key, one question, an answer, and the window goes away again. That's the [Claude quick chat](/) idea.

## Open it from any app

The default Shortcut is ⌥Space. In Settings ▸ General you can pick one of four other Space shortcuts, choose Other… for any key with ⌘, ⌃ or ⌥, or turn it off. Settings is in the menu bar icon's menu.

The Shortcut warns only about real clashes. One is a macOS shortcut that uses the key, such as Spotlight, Finder's search or the input sources, as your Mac has them set. The other is a key another app holds, when macOS refuses to register it. Either way, a button picks a preset none of macOS's own shortcuts uses.

Beyond that, nothing is guessed at. Other apps' shortcuts can't be read, and macOS lets two apps register the same key. If the key also opens something else, pick another. The shortcut is registered the way macOS's own app shortcuts are, so there's no Accessibility permission to give. {{live:/blog/claude-shortcut-mac/}}The [Claude desktop shortcut on Mac](/blog/claude-shortcut-mac/) page lists the keys the Claude app itself uses, so you can pick one that doesn't overlap.{{/live}}

cl_quick has no Dock icon. Turn on **Open at login** in Settings and it waits in the menu bar, ready for the shortcut.

## A window that floats over your work

The bar is the small first step. Type a question and press Return, and the bar turns into the chat window. It floats on every Space, so it follows you when you switch. Esc, ⌘W or the **✕** in its header hides it. You can resize it from its edges and corners, and move it from any empty area.

It never brings another app forward. The app you were in stays where it was, behind the chat. The panel itself takes the keyboard when it opens, which is why you can start typing at once.

![cl_quick chat bar with a question typed in](/img/qc-typing.webp "cl_quick's chat bar, drawn from sample data: a question typed, the profile Main, Haiku, Thinking off and the usage indicator.")

| Key | What it does |
|---|---|
| Return | Sends |
| Shift-Return | Adds a line |
| Esc or ⌘W | Hides the window |
| ⌘N | Starts a new chat |
| ⌥⌘↑ and ⌥⌘↓ | Step Thinking |
| ⌥⌘→ and ⌥⌘← | Step Model |

The keys button in the controls row lists them, along with the shortcut that opens cl_quick.

## Asking and following up

Answers stream in as Markdown, and code blocks have Copy. Under each answer there's Copy and a line like "answered by Haiku 5.5 · 2.4 s". The last answer also has Ask again.

Follow-ups go to the same running Claude Code, so it remembers the earlier turns. New chat (⌘N, or **+** in the header) starts over. **Stop** ends an answer where it is, and the chat goes on. If Claude Code stops mid-answer, the window keeps what arrived and says the chat ended. **Retry** then asks the last question in a new chat.

![cl_quick answer with Copy and answered-by line](/img/qc-answer.webp "cl_quick's chat window, drawn from sample data: a streamed answer with a code block, Copy, Ask again and the answered-by line.")

There's a mic button left of Send for dictating a question. {{live:/use-cases/claude-voice-input-mac/}}The page on [Claude voice input on a Mac](/use-cases/claude-voice-input-mac/) covers it.{{/live}}

## Profile, Model and Thinking

Under the field, one row holds the controls.

- **Profile.** A profile is a Claude Code folder cl_quick chats on, such as Main for `~/.claude` or Work for `~/.claude-work`. In the row it's a key with the profile's name and a dot in the colour of its fuller limit. Its menu lists each profile with its week and the address of its account in use, blurred until the pointer is on it, with a copy button beside it. The menu also has **Settings for <profile>…** and **Add a profile…**. That menu is the only place in the chat with an address.
- **Model.** Haiku by default. The bars are the newest Haiku, Sonnet, Opus and Fable the account has, as Claude Code itself lists them. A family the account lacks isn't offered.
- **Thinking.** Off by default, or one of the efforts the chosen model takes: Low, Medium, High, Extra, Max.

Model and Thinking sit together in one outlined group, always visible. A warm tint marks the costly steps: Fable, and Thinking at Extra or Max. A pick holds for that chat, and a new chat goes back to the defaults you set in Settings ▸ General. Click a bar to pick it, or click the right half of a control's label for the next value and the left half for the one before. The scroll wheel steps too. Every answer says which model gave it.

## Profiles and accounts

A profile is a Claude Code folder: `~/.claude`, a `~/.claude-*` folder, or any folder set with `CLAUDE_CONFIG_DIR`. On its first run cl_quick takes every signed-in one it finds and names it after the folder. A folder holds one signed-in account at a time, so a profile remembers the accounts that have been signed in to it. The one signed in now is **in use**. The others are **standby**.

In Settings, each profile is a tile along the top, with a lamp: green when it's signed in, amber while it waits for a sign-in, red when the sign-in is broken. A profile's page shows the account in use in its own box, with its address, its plan and two bars, the 5-hour limit and the week. Each standby account is a row with **Switch…** and **Forget…**. Standby accounts show no usage, since one folder holds one sign-in. **Sign in again…** appears only when the sign-in is broken, and **Add an account…** takes an address and signs in as it.

![cl_quick accounts card with one in use, two on standby](/img/settings-accounts.webp "A profile's accounts in cl_quick's Settings, drawn from sample data: one account in use with its 5 hours and week, two on standby.")

Addresses show in full in Settings. Prompts and dialogs may mask them.

A switch is bigger than the quick chat, and cl_quick asks first. The question says that Claude Code in Terminal and editors on that folder moves to the new account, sessions running now included, and that the Claude app keeps its own sign-in. Then Claude Code's own sign-in opens in Terminal and finishes in your browser. cl_quick never sees a password or a token and never touches the Keychain.

## Live limits in the window

Before the first message, the bar shows a usage indicator: a label, "5h" or "wk", whichever is fuller, two thin stacked bars and the fuller window's share. Once the bar becomes a chat window, its header shows only the "5h" and "wk" meters, plus **+** for a new chat and **✕** to hide. There's no profile name and no address in the header.

The colours are cl_audit's: green, amber from 50%, red from 80% and crimson from 95%. The numbers come from the chat's own Claude Code, through `get_usage`, which sends no message to a model and reads nothing from the Keychain. cl_quick asks as the bar opens, after each answer, and when the bar opens again, at most once a minute.

The chat is your own Claude Code, on the profile's account in use, so each question counts against that account's limits. Anthropic's help page says limits are shared across Claude and Claude Code: all activity in both counts against the same limits.

When a profile's 5-hour limit or week is full, the chat's notice names the window that's full and offers the profile with the most room. **Ask on Work** sends your question there. If the profile has a standby account with room, the notice also offers to switch to it. After the sign-in, a new chat starts on the same profile and sends what you had typed. For Claude usage, limits and accounts in general, n-uf's sibling app [cl_audit](https://cl-audit.n-uf.com) goes further.

![cl_quick notice that a profile's week is full](/img/qc-full.webp "cl_quick's notice when a profile's week is full, drawn from sample data, with Ask on Work and a switch to a standby account.")

If a profile's Claude Code isn't signed in, the notice offers **Sign in…**, which opens Claude Code's own sign-in in Terminal, and Try again.

## What a Claude Code floating window can't do

cl_quick runs Claude Code with no tools, no MCP servers and no settings files. It can't read your files, run a command or look at your screen. It's a chat, not an agent. When a question needs Claude to see your project, use Claude Code in a terminal.

cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. A chat ends after 15 minutes idle, on New chat, on another profile or account, or when cl_quick quits, and it's never resumed. The [Claude Code in incognito](/use-cases/claude-code-incognito/) page explains exactly what that covers and how to check it.

## Who it's for

A Claude Code floating window suits people who already use Claude Code and want a side question to cost one key press instead of a new terminal tab. If you keep more than one profile, the profile key shows which one will answer, and its menu shows each profile's week, before you send.

It's less useful if you rarely ask side questions, or if your questions are about a project and need tools.

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, and the [FAQ](/faq/) has short answers.
