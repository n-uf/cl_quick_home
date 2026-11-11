---
title: "Claude desktop shortcut Mac: the keys Anthropic documents"
description: "Claude desktop shortcut Mac keys from Anthropic's pages: double-tap Option, Option + Space, the Code tab, and a chat over any app on ⌥Space."
h1: "Claude desktop shortcuts on a Mac: open it, chat, dictate, avoid clashes"
mainKeyword: "claude desktop shortcut mac"
kind: how-to
draft: true
published: 2026-12-11
updated: 2026-12-11
author: n-uf
takeaways:
  - "The Claude desktop shortcut that opens Claude from any app on a Mac is a double-tap of the Option key, set in Settings > Desktop app. Option + Space or a custom shortcut also works."
  - "A separate voice shortcut, Caps Lock by default, is off until you turn it on. Cmd+/ in the Code tab lists that tab's shortcuts."
  - "Anthropic's pages document the quick entry shortcuts, the Code tab's keys and /voice in Claude Code's terminal."
  - "cl_quick, an independent Mac app, opens a floating Claude Code chat on ⌥Space by default, warns only about real clashes with macOS's shortcuts or another app's key, and needs no Accessibility permission for it. Its Services entry, Ask cl_quick, opens the same chat with the text you selected."
  - "Claude's Option + Space choice and cl_quick's default are the same key. cl_quick can't see other apps' shortcuts, so if you run both, give them different keys."
faq:
  - q: "What is the keyboard shortcut to open Claude Desktop on a Mac?"
    a: "Double-tap the Option key from any app. It opens quick entry, a text box where you type a message and start a new chat. Claude Desktop has to be running, and the shortcut has to be on in Settings > Desktop app."
  - q: "How do I change the Claude desktop shortcut on Mac?"
    a: "Open Claude Desktop, go to Settings > Desktop app (or Settings > System, under This computer, in the older layout), and next to Quick access shortcut pick Double-tap Option, Option + Space or a custom keyboard shortcut. The Voice shortcut menu offers Caps Lock, a custom shortcut, or disabling it entirely."
  - q: "Is cl_quick free?"
    a: "Yes, the app is free. It uses your own Claude Code sign-in, so every chat counts against that account's Claude plan limits."
  - q: "Does the Claude shortcut clash with Spotlight?"
    a: "Not by default. Apple's page gives Command-Space for Spotlight and Option-Command-Space for a Finder search window. Claude's choices for the quick access shortcut are a double-tap of Option, Option + Space and a custom one, so only a custom choice could land on Apple's keys."
  - q: "Can I open a Claude chat over any app without Claude Desktop?"
    a: "Yes, with cl_quick, if you use Claude Code. Press ⌥Space (the default Shortcut) and a chat bar opens, answered by your own Claude Code. cl_quick is independent of Anthropic and isn't Claude's quick entry."
sources:
  - title: "Claude Help Center: Use quick entry with Claude Desktop on Mac"
    url: "https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac"
    checked: 2026-11-11
    supports: "Double-tap Option opens Claude from any app; the quick access shortcut choices (Double-tap Option as the default, Option + Space, Custom keyboard shortcut); the voice shortcut (Caps Lock, a custom shortcut, or disabled; off by default because it takes over Caps Lock); the setup prompts (Turn on shortcut, Continue); Settings > Desktop app, or Settings > System under This computer in the older layout; Claude Desktop installed and running, possibly in the background; macOS 12 or later (14 for voice); Accessibility, Screen recording and Speech recognition permissions; turn off either shortcut or both; Option + Space or a custom shortcut on a conflict; macOS only, not Windows. Marked 'Updated over a week ago'; the whole page was read and has no troubleshooting section."
    quote: "Double-tap the Option key to open Claude from any app."
  - title: "Claude Code docs: Use Claude Code Desktop (Keyboard shortcuts)"
    url: "https://code.claude.com/docs/en/desktop"
    checked: 2026-11-11
    supports: "Cmd+/ shows all shortcuts in the Code tab; the macOS keys table (Cmd N, Cmd W, Ctrl Tab / Ctrl Shift Tab, Esc, Cmd Shift D, Cmd Shift B, Cmd ;, Cmd Shift M, I and E); the table applies to the Code tab; Shift+Tab doesn't cycle permission modes in Desktop; on Windows and Linux Cmd becomes Ctrl, Cmd+Option becomes Alt, Cmd+Ctrl becomes Ctrl+Alt."
    quote: "Press Cmd+/ on macOS or Ctrl+/ on Windows to see all shortcuts available in the Code tab."
  - title: "Claude Code docs: Voice dictation"
    url: "https://code.claude.com/docs/en/voice-dictation"
    checked: 2026-11-11
    supports: "In the Claude Code CLI, /voice turns dictation on; hold Space to record, or /voice tap and tap Space to start and again to send; the key is the voice:pushToTalk action, rebindable in ~/.claude/keybindings.json; needs a claude.ai account and a local microphone; on macOS, the terminal gets the microphone permission prompt; some keys aren't delivered to terminal apps and Caps Lock shows an error if bound; in hold mode use Space or a modifier combination like meta+k, which starts recording on the first keypress."
  - title: "Claude Help Center: Open Claude Desktop with a link"
    url: "https://support.claude.com/en/articles/14729294-open-claude-desktop-with-a-link"
    checked: 2026-11-11
    supports: "Claude Desktop responds to the claude:// URL scheme; claude://claude.ai/new opens a new chat, with q to prefill the prompt; links can be used from a website, a script or another app. Dated June 30, 2026."
  - title: "Claude Help Center: Install Claude Desktop"
    url: "https://support.claude.com/en/articles/10065433-install-claude-desktop"
    checked: 2026-11-11
    supports: "Claude Desktop needs macOS 13 (Ventura) or higher; available on macOS, Windows and Linux (beta); on Linux, Quick Entry, the global hotkey, works on X11 and relies on the desktop's GlobalShortcuts portal on native Wayland."
    quote: "macOS: macOS 13 (Ventura) or higher"
  - title: "Apple Support: Spotlight keyboard shortcuts on Mac"
    url: "https://support.apple.com/guide/mac-help/spotlight-keyboard-shortcuts-mh26783/mac"
    checked: 2026-11-11
    supports: "Command-Space bar opens or closes the Spotlight window; Option-Command-Space bar opens a Finder window with the search field selected."
  - title: "Apple Support: Write in another language on Mac"
    url: "https://support.apple.com/guide/mac-help/write-in-another-language-on-mac-mchlp1406/mac"
    checked: 2026-11-11
    supports: "Control-Space bar selects the last input source used; Control-Option-Space bar selects the next input source in the Input menu."
  - title: "Apple Support: Create keyboard shortcuts for apps on Mac"
    url: "https://support.apple.com/guide/mac-help/create-keyboard-shortcuts-for-apps-mchlp2271/mac"
    checked: 2026-11-11
    supports: "macOS keeps keyboard shortcuts in System Settings > Keyboard > Keyboard Shortcuts."
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-11
    supports: "Settings ▸ General ▸ Shortcut (⌥Space by default, four other Space shortcuts, Other… for any key with ⌘, ⌃ or ⌥, or Off; warns only about real clashes: a macOS shortcut that uses the key, as this Mac has them set, or a key another app holds when macOS refuses to register it ('taken by another app'), with a button that picks a preset none of macOS's own shortcuts uses; other apps' shortcuts can't be read and macOS lets two apps register the same key, so nothing else is guessed at; registered the way macOS's own app shortcuts are, no Accessibility permission to give); Intro (the bar, the chat window floating on every Space until Esc, never brings another app forward); Install (Apple silicon, macOS 13 or later, Claude Code signed in); The chat (Return, Shift-Return, Esc or ⌘W, ⌘N)."
    quote: "if the key also opens something else, pick another"
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-11
    supports: "The 'Ask about the selected text in the app you're in' entry: right-click ▸ Services ▸ Ask cl_quick (also the app menu ▸ Services); a keyboard shortcut can be set in System Settings ▸ Keyboard ▸ Keyboard Shortcuts ▸ Services; the bar opens with the selection quoted in the field, ready to edit and not sent; no Accessibility permission, macOS hands the selection over; nothing about it is kept."
related:
  - /use-cases/claude-code-floating-window/
  - /blog/claude-incognito-chats/
  - /
---

The Claude desktop shortcut on a Mac is a double-tap of the Option key. From any app, once Claude Desktop is running and the shortcut is on, it opens quick entry: a text box where you type a message and start a new chat. You can change it to Option + Space or a key of your own in Settings > Desktop app. Below are the shortcuts Anthropic's pages document, then one more: a key that opens a floating Claude Code chat over any app, from cl_quick, which is independent and not affiliated with Anthropic.

## Claude desktop shortcut Mac keys, from Anthropic's pages

All of these come from Anthropic's own pages, read on 11 November 2026.

| Keys | What they do | Source |
|---|---|---|
| Double-tap Option | Opens quick entry from any app (the default) | Quick entry help page |
| Option + Space | The other preset for the quick access shortcut | Quick entry help page |
| A custom keyboard shortcut | A third choice for the quick access shortcut | Quick entry help page |
| Caps Lock | Starts and stops voice dictation in quick entry; off until you turn it on | Quick entry help page |
| Cmd+/ | Shows all shortcuts in the Code tab | Claude Code docs, Desktop |
| Cmd+N | New session in the Code tab | Claude Code docs, Desktop |
| Cmd+W | Closes the session | Claude Code docs, Desktop |
| Ctrl+Tab, Ctrl+Shift+Tab | Switch between sessions | Claude Code docs, Desktop |
| Esc | Stops Claude's response | Claude Code docs, Desktop |
| Cmd+Shift+B | Toggles the Browser pane | Claude Code docs, Desktop |
| Cmd+Shift+D | Toggles the diff pane | Claude Code docs, Desktop |
| Cmd+; | Opens a side chat | Claude Code docs, Desktop |
| Cmd+Shift+M, Cmd+Shift+I, Cmd+Shift+E | Open the permission mode, model and effort menus | Claude Code docs, Desktop |

The Code tab keys apply to the Code tab only. Anthropic's docs add that in Desktop, Shift+Tab doesn't cycle permission modes the way it does in the terminal. On Windows and Linux the Code tab keys change: Cmd becomes Ctrl, Cmd+Option becomes Alt and Cmd+Ctrl becomes Ctrl+Alt.

There's also a route that isn't a key. Anthropic's page on opening Claude Desktop with a link says `claude://claude.ai/new` opens a new chat, and that such links work from a website, a script or another app. Anything that can open a link can use it.

## Which Claude desktop shortcut on a Mac opens it from any app?

Quick entry is the global one. Anthropic's install page calls it "the global hotkey". The quick entry page lists what it needs: Claude Desktop installed and running (it can sit in the background), macOS 12 or later, and the Accessibility permission. Claude Desktop itself needs macOS 13 or later, per the install page, so in practice that's the floor.

To change it, go to Settings > Desktop app (or Settings > System, under This computer, in the older layout). Next to **Quick access shortcut**, choose Double-tap Option, Option + Space or a custom keyboard shortcut. The menu next to **Voice shortcut** offers Caps Lock, a custom shortcut, or disabling it entirely. Anthropic's page says you can turn off the quick access shortcut, the voice shortcut or both, any time, in the same place.

{{live:/blog/claude-quick-entry/}}Everything quick entry does, from screenshots to voice, is on the [Claude Quick Entry](/blog/claude-quick-entry/) page.{{/live}}

Quick entry is a Mac feature. Anthropic's quick entry page says Windows users get Claude Desktop without it. The install page, in its notes on the Linux beta, says quick entry works on X11 and relies on the desktop's GlobalShortcuts portal on native Wayland. This page sticks to the Mac.

### Turning quick entry on

The first time you open the updated Claude Desktop, a prompt offers the quick entry shortcuts. Tick **Turn on shortcut**, click **Continue**, then double-tap Option to test it. If you closed the prompt, go to the same settings page. The voice shortcut has its own prompt with the same two steps. Anthropic's page says it's off by default because it takes over your Caps Lock key.

### If the key does nothing

Anthropic's quick entry page, as of November 2026, has no troubleshooting section. Its requirements still give you five things to check:

1. Is Claude Desktop running? It can be in the background.
2. Is the quick access shortcut on in Settings > Desktop app?
3. Has Claude Desktop got the Accessibility permission, in System Settings > Privacy & Security?
4. Is your macOS recent enough?
5. Does another app use the same key?

For a clash, Anthropic's advice is to switch to Option + Space or a custom shortcut your other apps don't use.

## Claude Code in a terminal: Space for voice

The terminal version of Claude Code has its own dictation key. Anthropic's docs say you run `/voice` to turn it on, then hold Space to record. Or run `/voice tap`, and tap Space to start and again to send. The key is bound to `voice:pushToTalk` and can be rebound in `~/.claude/keybindings.json`. It needs a claude.ai sign-in and a microphone, and macOS asks for microphone access for your terminal app.

One difference from quick entry: Caps Lock won't work here. Anthropic's docs say some keys are never delivered to terminal apps, and Caps Lock shows an error if you try to bind it. In hold mode they suggest Space or a modifier combination such as `meta+k`, which starts recording on the first keypress. {{live:/use-cases/claude-voice-input-mac/}}The page on [Claude voice input on a Mac](/use-cases/claude-voice-input-mac/) compares it with quick entry's Caps Lock and macOS Dictation.{{/live}}

## A shortcut for a chat over any app: cl_quick's ⌥Space

Quick entry starts a new chat with Claude. If your questions are for Claude Code, there's another shortcut. cl_quick is a free macOS menu bar app that opens a chat bar over whatever you're in, on ⌥Space by default. Your own Claude Code answers, so the chats count against that account's Claude plan limits. The first message turns the bar into a chat window that floats on every Space until Esc hides it, and it never brings another app forward. The [Claude Code floating window](/use-cases/claude-code-floating-window/) page covers the chat itself.

In Settings ▸ General, **Shortcut** is ⌥Space by default. There are four other Space shortcuts, Other… for any key with ⌘, ⌃ or ⌥, and Off.

![cl_quick Shortcut setting with ⌥Space picked](/img/settings-shortcut.webp "The Shortcut row in cl_quick's Settings ▸ General, with ⌥Space picked.")

The shortcut is registered the way macOS's own app shortcuts are, so there's no Accessibility permission to give. Once the chat is open, Return sends, Shift-Return adds a line, Esc or ⌘W hides it and ⌘N starts a new chat.

There's a way in that needs no key at all: the macOS Services menu. Select text in any app, then right-click ▸ Services ▸ **Ask cl_quick**. The bar opens with the selection quoted in the field, ready to edit and not sent, and your question goes under it. macOS hands the selection over, so this needs no Accessibility permission either. If you want a key for it, System Settings ▸ Keyboard ▸ Keyboard Shortcuts ▸ Services is where one can be set.

| | Claude's quick access shortcut | cl_quick's Shortcut |
|---|---|---|
| Default | Double-tap Option | ⌥Space |
| Other choices | Option + Space, or a custom shortcut | Four other Space shortcuts, Other… (any key with ⌘, ⌃ or ⌥), or Off |
| What it opens | A text box that starts a new chat with Claude | A chat bar, then a floating chat window answered by your own Claude Code |
| Permissions | Accessibility, plus Screen recording and Speech recognition for screenshots and voice | No Accessibility permission for the shortcut |
| Needs | Claude Desktop running; macOS 12 or later for quick entry | Apple silicon, macOS 13 or later, Claude Code signed in |

## Which shortcut for which job

The right Claude desktop shortcut on a Mac depends on what you ask and where.

- To capture a screenshot or a window on the spot, or to dictate with Caps Lock, use quick entry and its double-tap of Option.
- In the Code tab of Claude Desktop, Cmd+/ and the table above speed up session handling.
- For a Claude Code question over whatever app you're in, with nothing saved on the Mac, there's cl_quick on ⌥Space, or **Ask cl_quick** in the Services menu for text you've selected.
- To open a new chat from a script or another tool, use the `claude://claude.ai/new` link.

Quick entry and cl_quick can run side by side. They're separate apps with separate shortcuts, so the one rule is to give them different keys. Each app's Settings shows its own.

## Avoiding clashes with macOS and other apps

macOS already uses some keys with Space. Apple's pages list these:

- Command-Space opens or closes Spotlight.
- Option-Command-Space opens a Finder window with the search field selected.
- Control-Space selects the last input source you used, and Control-Option-Space selects the next one.

cl_quick's Shortcut warns only about real clashes. One is a macOS shortcut that uses the key, as your Mac has them set. The other is a key another app holds, when macOS refuses to register it ("taken by another app"). Either way, a button picks a preset none of macOS's own shortcuts uses. Of Claude's three choices, only a custom one could land on an Apple key.

Between apps it's less tidy. Other apps' shortcuts can't be read, and macOS lets two apps register the same key, so cl_quick guesses at nothing else. If the key also opens something else, pick another. That includes Claude's own: Option + Space is one of quick entry's choices, and it's also cl_quick's default. If you run both, change one.

Two apps can sit on one key without either warning you, so that check is yours. Apple's page on app shortcuts puts the ones macOS knows about in System Settings > Keyboard > Keyboard Shortcuts.

[The install page](/install/) has cl_quick's steps, and the [FAQ](/faq/) answers the short questions. The home page shows the [Claude quick chat](/) on one screen.
