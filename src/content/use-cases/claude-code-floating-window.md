---
title: "Claude Code floating window: a chat over any Mac app"
description: "A Claude Code floating window for Mac: press ⌃⇧Space over any app, ask, and your own Claude Code answers in a chat that floats until Esc hides it."
h1: "A Claude Code floating window you open on a key and hide with Esc"
mainKeyword: "claude code floating window"
key: "Claude Code floating window"
kind: use-case
draft: false
published: 2026-11-21
updated: 2026-11-21
author: n-uf
takeaways:
  - "cl_quick opens a chat bar on a shortcut (⌃⇧Space on a new install). The first message turns it into a chat window that floats on every Space until Esc hides it."
  - "It never brings another app forward. Your own Claude Code answers, on the profile's account in use, and the chat counts against that account's limits."
  - "Under the field you pick the profile, the Model (Haiku by default) and Thinking (off by default). The 5-hour limit and the week show live."
  - "Claude Code gets only its two web tools, and only while Links and search is on. It can't open your files or run commands, so it's a chat, not an agent."
  - "cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account."
faq:
  - q: "How do I open a Claude Code floating window over another app?"
    a: "Press the shortcut, ⌃⇧Space on a new install. A chat bar opens over the app you're in. Type, press Return, and the bar becomes a chat window. You can change the key in Settings ▸ General ▸ App ▸ Shortcut: ⇧⌘Space, ⌥Space, Other… for any key with ⌘, ⌃ or ⌥, or Off."
  - q: "Does the floating window take over my current app?"
    a: "No. It never brings another app forward, and it stays floating on every Space until you hide it with Esc, ⌘W or ✕. The panel takes the keyboard when it opens, so you can type into it straight away. cl_quick is a menu bar app with no Dock icon."
  - q: "Can the chat open my files or run commands?"
    a: "No. It can't open your files or folders or run commands. With Links and search on (the default), Claude Code has its two web tools and nothing else: no Bash, no files, no MCP. Of your files, it reads only what you attach, such as images, PDFs and text files, or text you bring in with Ask cl_quick."
  - q: "Can I pick which Claude Code account answers in the floating window?"
    a: "Yes, by profile. Each profile is a Claude Code folder with its own account in use, and the profile key under the field picks which one answers. Its menu lists each profile with its week, its account in use and its standby accounts, so you can check before you send. The + tile in Settings adds a profile."
  - q: "Is the floating chat saved?"
    a: "Not on your Mac. cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. A chat ends after 15 minutes idle, on New chat, on another profile or account, or when cl_quick quits."
sources:
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/v26.11.0/README.md"
    checked: 2026-11-16
    supports: "Intro (the bar, the chat window floating on every Space until Esc, never brings another app forward, your own Claude Code on the profile's account in use and its limits, menu bar app with no Dock icon, 15 minutes idle); Profiles (folders, Main and Work, in use and standby, tiles with a lamp, the account in use's box with address, plan, In use tag and two bars, standby rows with Switch… and Forget… and no usage, Sign in again… only when the sign-in is broken, Add an account…, addresses in full in Settings and blurred until the pointer is on them everywhere else, with only the words VoiceOver reads masked, and Settings ▸ General ▸ Blur addresses on by default); Switching accounts (cl_quick asks first; Claude Code in Terminal and editors on that folder moves, running sessions included; the Claude app keeps its own sign-in; Claude Code's own sign-in in Terminal; never a password, a token or the Keychain); The chat (Return, Shift-Return, Esc or ⌘W, ⌘N, Markdown, Copy, the answered-by line, Ask again, the header with only 5h and wk meters plus + and ✕, the controls row, the warm tint, the keys button, the bar's usage indicator, the profile key and its menu, no address in the header, the address in that menu blurred with a copy button, the chat's notes about an account change blur it too, the digit keys ⌘1 to ⌘5 (Small 420 × 440, Standard 520 × 580, Large 720 × 760, Tall, Wide; in the bar only the width changes; the panel stays where it is) and ⌃1 to ⌃6 (six places on the screen; macOS can take ⌃1 to ⌃6 for Switch to Desktop N in Mission Control), working on any layout, the ⌘ arrows stepping Thinking and Model, ⌃A and ⌃E, ⇧⌘ arrows still selecting, the mic button and the panel taking the keyboard, ⌘D for Dictation on and off, ⌘⇧C copies the latest complete answer, Images (⌘V or dropping image files, thumbnails over the field, up to 5 to a message, scaled down in memory, no file made), Files (PDFs up to 15 MB and 100 pages, text files up to 400 KB, chips, 5 attachments a message with pictures, kept in memory only), Links and search (on by default, Claude Code's two web tools, a muted line, pages count toward usage, off in Settings ▸ General ▸ Links and search), The menu bar menu (a block per profile with its 5-hour and Week bars, standby accounts as dimmed rows under them with a hollow lamp, a blurred address, '· standby', no usage and a quiet Switch… when pointed at, a click on the row asking the switch question, numbers older than 5 minutes grey, none over an hour shown), the colours, get_usage, the notice naming the full window, Ask on Work and Switch to… (the standby account seen most recently, with no numbers), Sign in… and Try again, Stop, Retry); Settings ▸ General (Shortcut, warns only about real clashes, no Accessibility permission, Model and Thinking, Links and search, Open at login); What it keeps, and what it sends (Claude Code's two web tools, WebFetch and WebSearch, when Links and search is on and no tools when it is off; no MCP servers, no settings files; attached files kept in memory only, Claude Code has no file tools; page text not stored by cl_quick); Install (Apple silicon, macOS 13 or later, Claude Code signed in)."
    quote: "It never brings another app forward."
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/v26.11.0/CHANGELOG.md"
    checked: 2026-11-16
    supports: "Digit keys in the chat (⌘1 to ⌘5 size the panel, ⌃1 to ⌃6 place it, any layout, macOS can take ⌃1 to ⌃6); standby accounts as rows of their profile in the menu bar menu; addresses blurring instead of being masked, with Settings ▸ General ▸ Blur addresses; ⌘ arrow keys stepping Model and Thinking. Also: The floating chat on a shortcut; Settings with a tile per profile; profiles with several accounts; the profile picker; the quiet chat header; model and thinking as bar controls (Haiku and thinking off by default, every answer says which model gave it); live usage in the bar; the incognito chats entry; the rich menu bar menu; Ask about the selected text in the app you're in (right-click ▸ Services ▸ Ask cl_quick: the selection quoted in the field, not sent, no Accessibility permission, nothing kept); images in the chat; files in the chat (PDFs and text files, kept in memory); Links and search (Claude Code's two web tools, on by default); the account in use read as it is now, and numbers that go grey when old."
  - title: "Claude Help Center: Use Claude Code with your Pro, Max, or Ultra plan"
    url: "https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-max-or-ultra-plan"
    checked: 2026-11-16
    supports: "Pro and Max have a five-hour session limit and a weekly limit; limits are shared across Claude and Claude Code, so all activity in both tools counts against the same limits. Re-read on 2026-11-16: it also says Ultra plans have a weekly limit and verified Ultra accounts no five-hour limit, which the page doesn't contradict (it names no plan)."
    quote: "all activity in both tools counts against the same limits"
related:
  - /
  - /use-cases/claude-code-incognito/
  - /faq/
  - /install/
---

A Claude Code floating window is a chat that sits over whatever app you're in and answers with your own Claude Code. cl_quick, a free macOS menu bar app, gives you one. It runs on your own Claude Code sign-in, so each chat counts against that account's Claude plan limits. Press a shortcut (⌃⇧Space on a new install) and a chat bar opens. The first message turns it into a chat window that stays floating on every Space until Esc hides it, and it never brings another app forward. cl_quick is independent and not affiliated with Anthropic.

It's built for the question you'd otherwise open a new terminal tab for. One key, one question, an answer, and the window goes away again. That's the [Claude quick chat](/) idea.

## Open it from any app

A new install opens with ⌃⇧Space. In Settings ▸ General ▸ App you can pick ⇧⌘Space or ⌥Space instead, choose Other… for any key with ⌘, ⌃ or ⌥, or turn it off. ⌥Space stays for those used to it: it normally types a non-breaking space, and Settings says so while it's picked. A shortcut saved by an earlier version is kept as it is. Settings is in the menu bar icon's menu.

The Shortcut warns only about real clashes. One is a macOS shortcut that uses the key, such as Spotlight, Finder's search or the input sources, as your Mac has them set. The other is a key another app holds, when macOS refuses to register it. Either way, a button picks a preset none of macOS's own shortcuts uses.

Other apps' shortcuts can't be read, and macOS lets two apps register the same key. If the key also opens something else, pick another. The shortcut is registered the way macOS's own app shortcuts are, so there's no Accessibility permission to give. {{live:/blog/claude-shortcut-mac/}}The [Claude desktop shortcut on Mac](/blog/claude-shortcut-mac/) page lists the keys the Claude app itself uses, so you can pick one that doesn't overlap.{{/live}}

The shortcut isn't the only way in. Select text in any app, then right-click ▸ Services ▸ **Ask cl_quick**. The bar opens with the selection quoted in the field, ready to edit and not sent, and your question goes under it. macOS hands the selection over, so this needs no Accessibility permission either, and nothing about it is kept.

cl_quick has no Dock icon. Turn on **Open at login** in Settings ▸ General ▸ App and it waits in the menu bar, ready for the shortcut.

## A window that floats over your work

The bar is the small first step. Type a question and press Return, and the bar turns into the chat window. It floats on every Space, so it follows you when you switch. Esc, ⌘W or the **✕** in its header hides it. You can resize it from its edges and corners, and move it from any empty area, or size and place it from the keyboard (the keys are below).

It never brings another app forward. The app you were in stays where it was, behind the chat.

![cl_quick chat bar with a question typed in](/img/qc-typing.webp "cl_quick's chat bar, drawn from sample data: a question typed, the profile Main, Haiku, Thinking off and the usage indicator.")

| Key | What it does |
|---|---|
| Return | Sends |
| Shift-Return | Adds a line |
| Esc or ⌘W | Hides the window |
| ⌘N | Starts a new chat |
| ⌘D | Turns Dictation on and off |
| ⇧⌘C | Copies the answer in view once you've scrolled up, otherwise the latest complete answer, like its Copy button |
| fn↑ and fn↓ | Step Thinking |
| fn→ and fn← | Step Model |
| ⌘J | Jumps to the latest answer and follows it |
| ⇧⌘J | Jumps to the start of the answer in view |
| ⌘[ and ⌘] | Jump to your previous and next message |
| ⇧fn↑ and ⇧fn↓ | Scroll the answers a page |
| ⌘1 to ⌘5 | Size the window: Small, Standard, Large, Tall, Wide |
| ⌃1 to ⌃6 | Place the window on its screen: ⌃1 to ⌃3 bottom left, centre and right; ⌃4 to ⌃6 top left, centre and right |

The keys button in the controls row lists them on three pages (Model & window, Move and Write), along with the shortcut that opens cl_quick. The fn arrows are the Page Up, Page Down, End and Home keys on a Mac keyboard, and they work wherever the keyboard is in the panel. Plain ⌘ and ⌥⌘ arrows are macOS's own and reach the field, where they jump the caret to the start or end of a line or the text; ⇧⌘ arrows still select, and ⌃⌘ arrows aren't cl_quick's.

The digit keys work while the panel has the keyboard, in the bar and in the chat window, on the number row and the keypad, on any keyboard layout. ⌘1 to ⌘5 size it as if you had sized it by hand: Small is 420 × 440, Standard 520 × 580 (the first size), Large 720 × 760, Tall keeps the width it has and takes the screen's full visible height, and Wide is 960 wide and 70% of the screen's height. In the bar only the width changes, because its height follows its content. The window stays where it is: the corner or edge centre of its nearest place holds still. ⌃1 to ⌃6 then move it to one of those six places on its screen, at the size it has, clear of the menu bar and the Dock. macOS can take ⌃1 to ⌃6 for itself: if "Switch to Desktop N" is on in System Settings ▸ Keyboard ▸ Keyboard Shortcuts ▸ Mission Control, cl_quick never sees those keys.

## Asking and following up

Answers stream in as Markdown, and code blocks have Copy. A fenced `html` block shows its page in place once the block is complete (while it streams it is code). Its top row has **Code | Page** to switch sides, **⤢** to open the page in its own window, and Copy, which copies the code whichever side shows; a block that starts as code, fenced as `html code`, stays code. The page is isolated, in the chat and in the window: no scripts run, nothing is fetched from the network, links, forms and downloads do nothing, and nothing about it is stored on the Mac. Under each answer there's Copy and a line like "answered by Haiku 5.5 · 2.4 s". The last answer also has Ask again.

While an answer streams, the chat follows the new text only while you're at the bottom. Scroll up to read and new text never moves the view; ⌘J or the ↓ button takes you back, and sending a message makes it follow again. Two thin handles stand at the answers' edges, and resting the pointer on one opens its buttons: ▲ ▼ (your previous and next message) and ↓ (jump to latest) on the right, ⤒ (the start of the answer) and copy on the left.

Follow-ups go to the same running Claude Code, so it remembers the earlier turns. New chat (⌘N, or **+** in the header) starts over. **Stop** ends an answer where it is, and the chat goes on. If Claude Code stops mid-answer, the window keeps what arrived and says the chat ended. **Retry** then asks the last question in a new chat.

![cl_quick answer with Copy and answered-by line](/img/qc-answer.webp "cl_quick's chat window, drawn from sample data: a streamed answer with a code block, Copy, Ask again and the answered-by line.")

To ask about a screenshot, paste it with ⌘V, or drop image files on the bar or the chat window. Each shows as a thumbnail over the field, up to 5 to a message. It's scaled down in memory and no file is made, so the chat stays incognito. PDFs (up to 15 MB and 100 pages) and text files (up to 400 KB) go in the same way and show as chips, up to 5 attachments to a message with the pictures. They stay in memory too.

Paste a link, or ask about something current, and Claude can read the page or search the web. Links and search is on by default, and Claude Code gets only its two web tools for it. A muted line says what it's doing, and pages count toward your usage. Settings ▸ General ▸ Chat ▸ Links and search turns it off.

There's a mic button left of Send for dictating a question, and ⌘D turns it on and off. {{live:/use-cases/claude-voice-input-mac/}}The page on [Claude voice input on a Mac](/use-cases/claude-voice-input-mac/) covers it.{{/live}}

## Profile, Model and Thinking

Under the field, one row holds the controls.

- **Profile.** A profile is a Claude Code folder cl_quick chats on, such as Main for `~/.claude` or Work for `~/.claude-work`. In the row it's a key with the profile's name and a dot in the colour of its fuller limit. Its menu lists each profile with its week and the address of its account in use, blurred until the pointer is on it, with a copy button beside it. Under each profile come its standby accounts, each with **Switch…** at the right, and **Add an account…**. The menu also has **Settings for <profile>…** and **Add a profile…**. The chat's header has no address; the chat's notes about an account change show it blurred too.
- **Model.** Haiku by default. The bars are the newest Haiku, Sonnet, Opus and Fable the account has, as Claude Code itself lists them. A family the account lacks isn't offered.
- **Thinking.** Off by default, or one of the efforts the chosen model takes: Low, Medium, High, Extra, Max.

Model and Thinking sit together in one outlined group, always visible. A warm tint marks the costly steps: Fable, and Thinking at Extra or Max. A pick holds for that chat, and a new chat goes back to the defaults you set in Settings ▸ General ▸ Chat. Click a bar to pick it, or click the right half of a control's label for the next value and the left half for the one before. The scroll wheel and the fn arrow keys step too. Every answer says which model gave it.

Settings ▸ General ▸ Chat also has **Instructions**: a few lines of your own, up to 1,000 characters, such as "Answer in Ukrainian unless I write in another language." They are added after cl_quick's built-in instructions and never replace them, and they apply to new chats only. They're stored like the other settings, and chats are never stored.

## Profiles and accounts

A profile is a Claude Code folder: `~/.claude`, a `~/.claude-*` folder, or any folder set with `CLAUDE_CONFIG_DIR`. On its first run cl_quick takes every signed-in one it finds and names it after the folder. A folder holds one signed-in account at a time, so a profile remembers the accounts that have been signed in to it. The one signed in now is **in use**. The others are **standby**.

In Settings, each profile is a tile along the top, with a lamp for its sign-in. A profile's page shows the account in use in its own box, with its address, its plan and two bars, the 5-hour limit and the week. Each standby account is a row with **Switch…** and **Forget…**. Standby accounts show no usage, since one folder holds one sign-in.

![cl_quick accounts card with one in use, two on standby](/img/settings-accounts.webp "A profile's accounts in cl_quick's Settings, drawn from sample data: one account in use with its 5 hours and week, two on standby.")

Settings' account rows show addresses in full. Everywhere else an address is hidden under a blur until the pointer is on it. What is blurred is not the address but one fixed stand-in, the same for every address, so a screenshot of the blur gives nothing back. VoiceOver reads "hidden address". **Settings ▸ General ▸ App ▸ Blur addresses** is on by default; turn it off and addresses show in full, sharp.

A switch is bigger than the quick chat, and cl_quick asks first: "Switch Main to this account?", with the account's address under it, blurred until the pointer is on it while Blur addresses is on. The question says that Claude Code in Terminal and editors on that folder moves to the new account, sessions running now included, and that the Claude app keeps its own sign-in. Then Claude Code's own sign-in opens in Terminal and finishes in your browser. While it waits, a note in the chat says what to check there; its **×** only hides the note, and the sign-in keeps waiting. cl_quick never sees a password or a token and never touches the Keychain.

## Live limits in the window

Before the first message, the bar shows a usage indicator: a label, "5h" or "wk", whichever is fuller, two thin stacked bars and the fuller window's share. Once the bar becomes a chat window, its header shows only the "5h" and "wk" meters, plus **+** for a new chat and **✕** to hide. There's no profile name and no address in the header.

The colours are cl_audit's: green, amber from 50%, red from 80% and crimson from 95%. The numbers come from the chat's own Claude Code, through `get_usage`, which sends no message to a model and reads nothing from the Keychain. cl_quick asks as the bar opens, after each answer, and when the bar opens again, at most once a minute. The menu bar menu has a 5-hour and a Week bar for each profile's account in use, and a profile's standby accounts are dimmed rows under them, with a hollow lamp, a blurred address, "· standby" and no usage, followed by **Add an account…**. Point at one and a quiet **Switch…** shows; a click on the row asks the switch question. Numbers older than 5 minutes turn grey there ("Last known 12 min ago"), and none over an hour old are shown.

The chat is your own Claude Code, on the profile's account in use, so each question counts against that account's limits. Anthropic's help page says limits are shared across Claude and Claude Code: all activity in both counts against the same limits.

When a profile's 5-hour limit or week is full, the chat's notice names the window that's full and offers the profile with the most room. **Ask on Work** sends your question there. If the profile has a standby account, the notice also offers the one seen most recently, with no numbers. After the sign-in, a new chat starts on the same profile and sends what you had typed. For Claude usage, limits and accounts in general, n-uf's sibling app [cl_audit](https://cl-audit.n-uf.com) goes further.

![cl_quick notice that a profile's week is full](/img/qc-full.webp "cl_quick's notice when a profile's week is full, drawn from sample data, with Ask on Work and a switch to a standby account.")

## What a Claude Code floating window can't do

With Links and search on, which is the default, cl_quick runs Claude Code with its two web tools, WebFetch and WebSearch, and nothing else: no Bash, no files, no MCP servers. Turned off, it has no tools at all. Either way it can't open your files or folders, run a command or look at your screen by itself; of your own files, it sees only what you attach to a message. It's a chat, not an agent. When a question needs Claude to see your project, use Claude Code in a terminal.

cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. A chat ends after 15 minutes idle, on New chat, on another profile or account, or when cl_quick quits, and it's never resumed. cl_quick stores none of the page text Claude reads, and attached files stay in memory. The [Claude Code in incognito](/use-cases/claude-code-incognito/) page explains exactly what that covers and how to check it.

## Who it's for

A Claude Code floating window suits people who already use Claude Code and want a side question to cost one key press instead of a new terminal tab. If you keep more than one profile, the profile key shows which one will answer, and its menu shows each profile's week, before you send.

It's less useful if you rarely ask side questions, or if your questions are about a project and need Claude to read it or run commands.

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, and the [FAQ](/faq/) has short answers.
