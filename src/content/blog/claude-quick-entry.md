---
title: "Claude Quick Entry on Mac: setup, shortcuts and voice"
description: "Claude Quick Entry opens over any Mac app with a double-tap of Option. How to turn it on, attach screenshots, change the shortcut, or turn it off."
h1: "Claude Quick Entry on Mac: open it, change the shortcut or turn it off"
mainKeyword: "claude quick entry"
kind: how-to
draft: true
published: 2026-12-15
updated: 2026-12-15
author: n-uf
takeaways:
  - "Claude Quick Entry is part of Claude Desktop on Mac. By default a double-tap of Option opens a text box over any app; Option + Space or a custom shortcut works too."
  - "It can attach a screenshot or an application window, and Caps Lock can start voice dictation, which is off until you turn it on."
  - "Claude Desktop must be running, though it can sit in the background. Quick Entry needs the Accessibility permission, plus Screen recording for screenshots and Speech recognition for voice."
  - "It's on every Claude plan. Anthropic's Quick Entry page lists macOS 12, or 14 for voice; its install page lists macOS 13 for the app itself."
  - "For Claude Code questions, cl_quick, an independent Mac app, opens a separate floating Claude Code chat. It isn't Claude's Quick Entry."
faq:
  - q: "How do I open Claude Quick Entry on a Mac?"
    a: "Double-tap the Option key from any app, once Claude Desktop is running and the shortcut is on. Type your message and press Enter or click the arrow to start a new chat. In Settings > Desktop app you can switch to Option + Space or a custom shortcut."
  - q: "Do I need a paid plan to use Claude Quick Entry?"
    a: "No. Anthropic's help page says quick entry is available on Free, Pro, Max, Ultra, Team and Enterprise plans using Claude Desktop on macOS. Claude Desktop has to be installed and running, but it can stay in the background with no window showing."
  - q: "Does Claude Quick Entry work on Windows?"
    a: "No. Anthropic's Quick Entry page says it's currently only available on macOS, and Windows users get Claude Desktop without the quick entry features. Its install page does mention Quick Entry in the notes on the Linux beta, so the pages don't treat every platform the same way."
  - q: "How do I turn off the Claude Quick Entry shortcut?"
    a: "Open Claude Desktop and go to Settings > Desktop app (Settings > System, under This computer, in the older layout). Anthropic's page says you can turn off the quick access shortcut, the voice shortcut or both there. It names an off choice only for the voice shortcut, so look for the quick access one on the same settings page."
  - q: "Is cl_quick the same as Claude Quick Entry?"
    a: "No. Quick Entry belongs to Claude Desktop and starts a chat with Claude. cl_quick is an independent Mac app that opens a floating chat answered by your own Claude Code, on ⌥Space by default. The app is free; every chat counts against that account's Claude plan limits. It isn't Anthropic's product and isn't affiliated with Anthropic."
sources:
  - title: "Claude Help Center: Use quick entry with Claude Desktop on Mac"
    url: "https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac"
    checked: 2026-11-11
    supports: "Quick entry as a redesigned experience for Claude Desktop on Mac and its three capabilities (Instant access, Visual context, Voice input); all plans (Free, Pro, Max, Ultra, Team, Enterprise) using Claude Desktop on macOS; macOS 12 or later, 14 or later for voice dictation; Claude Desktop installed and running, possibly in the background; the setup prompts (Turn on shortcut, Continue); voice shortcut off by default because it takes over Caps Lock; Settings > Desktop app, or Settings > System under This computer in the older layout; Double-tap Option (default), Option + Space, Custom keyboard shortcut; Voice shortcut: Caps Lock, a custom shortcut, or Disable the shortcut entirely; the text box starts a new chat; New chat shows the five most recent conversations; the steps for a screenshot ('Drag to take a screenshot'), an application window and voice dictation; Screen recording, Accessibility and Speech recognition permissions in System Settings > Privacy & Security; transcribed text is sent to Claude as part of the message; not on Windows; turn off either shortcut or both; Option + Space or a custom shortcut on a conflict; the common use cases. Marked 'Updated over a week ago'; the whole page was read."
    quote: "Double-tap the Option key to open Claude from any app."
  - title: "Claude Help Center: Install Claude Desktop"
    url: "https://support.claude.com/en/articles/10065433-install-claude-desktop"
    checked: 2026-11-11
    supports: "Claude Desktop needs macOS 13 (Ventura) or higher; available on macOS, Windows and Linux (beta); under the Linux limitations, Quick Entry, the global hotkey, works on X11 and relies on the desktop's GlobalShortcuts portal on native Wayland."
    quote: "macOS: macOS 13 (Ventura) or higher"
  - title: "Apple Support: Spotlight keyboard shortcuts on Mac"
    url: "https://support.apple.com/guide/mac-help/spotlight-keyboard-shortcuts-mh26783/mac"
    checked: 2026-11-11
    supports: "Command-Space bar opens or closes the Spotlight window; Option-Command-Space bar opens a Finder window with the search field selected."
  - title: "Apple Support: Create keyboard shortcuts for apps on Mac"
    url: "https://support.apple.com/guide/mac-help/create-keyboard-shortcuts-for-apps-mchlp2271/mac"
    checked: 2026-11-11
    supports: "macOS keeps keyboard shortcuts in System Settings > Keyboard > Keyboard Shortcuts."
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-11
    supports: "Intro (a floating chat on a shortcut: the bar, then the chat window floating on every Space until Esc hides it; never brings another app forward; your own Claude Code on the profile's account in use; counts against that account's limits; quick chats are incognito, the exact sentence); Settings ▸ General (⌥Space by default, four other Space shortcuts, Other…, Off; no Accessibility permission to give; other apps' shortcuts can't be read and macOS lets two apps register the same key); The chat (the mic button starts macOS Dictation into the field; the profile key and its menu with each profile's week); What it keeps, and what it sends (no tools, no MCP servers); Install (Apple silicon, macOS 13 or later, Claude Code signed in)."
    quote: "It never brings another app forward."
related:
  - /blog/claude-shortcut-mac/
  - /use-cases/claude-code-floating-window/
  - /
---

Claude Quick Entry is a small box that opens over any Mac app, so you can ask Claude something without switching to its window. By default you open it with a double-tap of the Option key; Option + Space or a shortcut of your own also works. It belongs to Claude Desktop and is on every plan. The app has to be running, though not in front. This page covers setup, use, the shortcut and its clashes, and when a floating Claude Code chat suits you better.

Everything about Quick Entry here comes from [Anthropic's help page](https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac) and its install page, both read on 11 November 2026. The help page writes it "quick entry" and was marked "Updated over a week ago".

## What is Claude Quick Entry?

Anthropic's page calls it a redesigned experience for Claude Desktop on Mac that lets you reach Claude from anywhere on your computer. It lists three capabilities:

- **Instant access.** Double-tap Option in any app.
- **Visual context.** Capture a screenshot, or click an application window, to share what you're working on.
- **Voice input.** Press Caps Lock and dictate, with real-time transcription.

The double-tap opens a text box. You type, press Enter or click the arrow, and a new chat with Claude starts. Click **New chat** to see your five most recent conversations.

## What you need

| | What Anthropic's pages say |
|---|---|
| Plan | Free, Pro, Max, Ultra, Team and Enterprise |
| macOS | 12 or later for Quick Entry, 14 or later for voice dictation (Quick Entry page); 13 (Ventura) or higher for Claude Desktop itself (install page) |
| The app | Claude Desktop installed and running; it can be in the background |
| Permissions | In System Settings > Privacy & Security: Accessibility (Quick Entry itself), Screen recording (screenshots and windows), Speech recognition (voice, macOS 14 or later) |
| Windows | Not available: Windows users get Claude Desktop without Quick Entry |

The macOS row needs a note. The Quick Entry page says 12, but the install page asks for macOS 13 or higher for the app, and Quick Entry comes with the app. In practice that's macOS 13, or 14 if you want voice.

Other systems differ too. The Quick Entry page says Windows doesn't get it. The install page, in its notes on the Linux beta, says Quick Entry, the global hotkey, works on X11 and relies on the desktop's GlobalShortcuts portal on native Wayland. This article covers the Mac.

## Turn on Quick Entry

The first time you open the updated Claude Desktop, a prompt offers the quick entry shortcuts.

1. Tick **Turn on shortcut** in the quick entry prompt.
2. Click **Continue**.
3. Double-tap the Option key to test it.

After that, it lives in **Settings > Desktop app** (**Settings > System**, under **This computer**, in the older layout). If you closed the prompt, go there.

## How to use Claude Quick Entry

Anthropic's page lists three ways to use it.

- **Start a quick conversation.** Double-tap Option, type your message in the box, and press Enter or click the arrow icon.
- **Capture a screenshot.** Double-tap Option, and a "Drag to take a screenshot" prompt appears by your cursor. Click and drag over the area you want, and it's attached to your message.
- **Share an application window.** Double-tap Option, click an application window to attach its contents, add your question and send.

Screenshots and windows need the Screen recording permission. Anthropic's examples include sending an error message or an app window for debugging, and capturing a page while you browse to ask about it.

## Voice with Caps Lock

The voice shortcut is off by default because it takes over your Caps Lock key. To use it, tick **Turn on shortcut** in the voice dictation prompt and click **Continue**. Then:

1. Press Caps Lock once to start dictating, and speak. Your words appear as you say them.
2. Press Caps Lock again when you finish.
3. Check the text, then click the arrow to send it.

Voice needs macOS 14 or later and the Speech recognition permission. Anthropic's page says the transcribed text goes to Claude as part of your message, like anything you type. {{live:/use-cases/claude-voice-input-mac/}}For the other ways to talk to Claude on a Mac, see [Claude voice input on a Mac](/use-cases/claude-voice-input-mac/).{{/live}}

## The Claude Quick Entry shortcut: change it or turn it off

It's all on one settings page.

1. Open Claude Desktop and go to **Settings > Desktop app** (or **Settings > System**, under **This computer**).
2. Next to **Quick access shortcut**, choose **Double-tap Option** (the default), **Option + Space** or a custom keyboard shortcut.
3. In the menu next to **Voice shortcut**, choose Caps Lock, a custom shortcut, or **Disable the shortcut entirely**.

Anthropic's page says you can turn off the quick access shortcut, the voice shortcut or both at any time, in the same place. It names the off choice only for the voice shortcut, so for the double-tap, look on that settings page in your app.

## When the shortcut clashes with another app

Anthropic's advice for a clash is short: use Option + Space or a custom shortcut that your other apps don't use. Some specifics:

- **Spotlight.** Apple's list gives Command-Space to open or close Spotlight, and Option-Command-Space to open a Finder window with the search field selected. None of Claude's three quick access choices is one of those, though a custom shortcut could be.
- **Caps Lock.** The voice shortcut takes over Caps Lock. If you use Caps Lock when typing, leave voice off, which is the default, or give it a custom shortcut.
- **Other apps.** cl_quick's README notes that macOS lets two apps register the same key, so give each app its own. Apple's page on app shortcuts puts the ones macOS knows about in System Settings > Keyboard > Keyboard Shortcuts.
- **cl_quick.** Its default, ⌥Space, is the same key as Quick Entry's Option + Space choice. If you run both, change one.

For a longer list of keys, including the Code tab's, see the [Claude desktop shortcut on Mac](/blog/claude-shortcut-mac/) page.

## If Quick Entry doesn't open

Anthropic's Quick Entry page, as of November 2026, has no troubleshooting section. Its requirements and FAQ still give five things to check:

1. **Is Claude Desktop running?** It has to be, even with no window showing.
2. **Is the shortcut on?** Check Settings > Desktop app.
3. **Are the permissions given?** Accessibility for Quick Entry itself and Screen recording for screenshots and windows, in System Settings > Privacy & Security.
4. **Is your macOS recent enough?** 13 for the app, 14 for voice.
5. **Does another app use the same key?** Switch to Option + Space or a custom one, as the page suggests.

## When a floating Claude Code chat fits better

Quick Entry is a chat with Claude in Claude Desktop. If most of your questions are for Claude Code, there's another tool. cl_quick is a free macOS menu bar app by n-uf. It runs on your own Claude Code sign-in, so every chat counts against that account's Claude plan limits. It opens a chat bar over any app on a shortcut, ⌥Space by default. The first message turns the bar into a chat window that stays floating on every Space until Esc hides it, and it never brings another app forward. Your own Claude Code answers on the profile's account in use. cl_quick isn't Anthropic's product and isn't Claude's Quick Entry; it's independent and not affiliated with Anthropic. The [Claude Code floating window](/use-cases/claude-code-floating-window/) page covers it in full.

| | Quick Entry | cl_quick |
|---|---|---|
| Opens with | Double-tap Option, Option + Space or a custom shortcut | ⌥Space, four other Space shortcuts, Other… (any key with ⌘, ⌃ or ⌥), or Off |
| What you can attach | A screenshot you drag, or an application window | Typed text only |
| Voice | Caps Lock dictation, off by default, macOS 14 or later | A mic button that starts macOS Dictation into the field |
| What it starts | A new chat with Claude | A chat window answered by your own Claude Code |
| Plans | Every Claude plan | Whatever account the profile's Claude Code is signed in to |
| What it needs | Claude Desktop running; Accessibility, Screen recording and Speech recognition permissions as needed | Apple silicon, macOS 13 or later, Claude Code signed in; no Accessibility permission for the shortcut |
| Saved | Anthropic's Quick Entry page, as of November 2026, doesn't say | Nothing saved on this Mac (cl_quick's own incognito); messages still go to Anthropic |

**Quick Entry fits better** when you want to show Claude something on screen, dictate with Caps Lock, or keep the chat in Claude Desktop, or when you don't use Claude Code at all. If you already run Claude Desktop, it needs no extra app.

**A floating Claude Code chat fits better** when the question is a Claude Code one, or when you'd rather not grant the Accessibility permission for a shortcut. If you keep more than one profile, cl_quick's profile menu lists each one with its week and the account in use, so you can see which account will answer before you send. For usage and limits across accounts, n-uf's sibling app [cl_audit](https://cl-audit.n-uf.com) goes further.

cl_quick has no tools, so it can't read your files or run commands. For a question about a project, use Claude Code in a terminal. cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. The [Claude Code in incognito](/use-cases/claude-code-incognito/) page explains what that covers and how to check it.

You can run both, on different keys. [The install page](/install/) has cl_quick's steps, and the [FAQ](/faq/) has short answers. The home page shows the [Claude quick chat](/) on one screen.
