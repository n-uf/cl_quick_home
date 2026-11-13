---
title: "Claude voice input Mac: Quick Entry, voice mode, Dictation"
description: "Claude voice input Mac options from Anthropic and Apple: Quick Entry dictation, voice mode, macOS Dictation, cl_quick's mic button, and what to check."
h1: "Claude voice input on a Mac: what each option does and where it fits"
mainKeyword: "claude voice input mac"
kind: use-case
draft: true
published: 2026-12-18
updated: 2026-12-18
author: n-uf
takeaways:
  - "On a Mac you can talk to Claude through Quick Entry's Caps Lock dictation, the mic in Claude's message box, voice mode, /voice in Claude Code's terminal, or macOS Dictation in any text field."
  - "Dictation turns speech into text you can edit before sending. Voice mode is a spoken conversation where Claude talks back, and it counts toward your usage limits."
  - "Apple's page says Dictation is turned on in System Settings > Keyboard > Dictation, and stops after 30 seconds without speech."
  - "cl_quick's mic button, left of Send, starts macOS Dictation into the chat's field, and ⌘D turns it on and off from the keyboard. With Dictation off in macOS, it says once where to turn it on."
  - "cl_quick is independent and not affiliated with Anthropic. What you dictate becomes a message that still goes to Anthropic under the profile's account."
faq:
  - q: "How do I use voice input with Claude on a Mac?"
    a: "In Claude Desktop, turn on the quick entry voice shortcut (Caps Lock, off by default, macOS 14 or later), press the mic in the message box, or start voice mode from the sound wave symbol. In any text field macOS Dictation works too: turn it on in System Settings > Keyboard > Dictation, then use its shortcut."
  - q: "What is the difference between Claude dictation and voice mode?"
    a: "Dictation turns your speech into text so you can send a written prompt, and Claude replies in text. Voice mode is a spoken conversation where Claude talks back. Anthropic's help page says voice conversations count toward your regular usage limits."
  - q: "Why is Claude dictation not working on my Mac?"
    a: "Start with the causes the sources name. For Quick Entry voice: the voice shortcut is off by default, it needs macOS 14 or later, and it needs the Speech recognition permission in System Settings > Privacy & Security. For macOS Dictation, Apple lists Dictation being off, the wrong language or shortcut, and microphone problems."
  - q: "Can I use the keyboard instead of the mic button in cl_quick?"
    a: "Yes. ⌘D turns Dictation on and off like a click on the mic button, and it also works on a Dictation that macOS's own shortcut started. Return sends the text, which stops Dictation; ⌘N, Esc and ⌘W stop it too. The keys button under the field lists ⌘D with the other shortcuts."
  - q: "How does the mic button in cl_quick work?"
    a: "It starts macOS Dictation into the chat's field. ⌘D does the same from the keyboard, on and off, also for a Dictation that macOS's own shortcut started. A click again, sending, a new chat or hiding the window stops it. If Dictation is off in macOS, cl_quick says once where to turn it on."
sources:
  - title: "Claude Help Center: Use quick entry with Claude Desktop on Mac"
    url: "https://support.claude.com/en/articles/12626668-use-quick-entry-with-claude-desktop-on-mac"
    checked: 2026-11-11
    supports: "Voice input as one of three capabilities; Caps Lock to start and stop, real-time transcription, the arrow to send; the voice shortcut off by default because it takes over Caps Lock; the voice dictation prompt (Turn on shortcut, Continue); Settings > Desktop app with Caps Lock, a custom shortcut or disabling it; macOS 14 or later for voice; Speech recognition permission in System Settings > Privacy & Security; Claude Desktop installed and running; transcribed text sent to Claude as part of the message. Marked 'Updated over a week ago'."
    quote: "disabled by default because it takes over your Caps Lock key"
  - title: "Claude Help Center: Use voice mode"
    url: "https://support.claude.com/en/articles/11101966-use-voice-mode"
    checked: 2026-11-11
    supports: "Voice mode is a spoken conversation; beta on all plans on Claude Mobile, Claude Desktop and the web, built to work best from your phone; on web and Desktop, the sound wave symbol in the lower right corner of the chat window; hands-free (default) and push-to-talk; voice conversations count toward regular usage limits; in Claude Cowork and Claude Code, dictation is available but voice mode isn't. Marked 'Updated yesterday'."
    quote: "Voice conversations count toward your regular usage limits"
  - title: "Claude Help Center: Use dictation on Claude Mobile"
    url: "https://support.claude.com/en/articles/10065434-use-dictation-on-claude-mobile"
    checked: 2026-11-11
    supports: "Dictation turns speech into text so you can send a written prompt and Claude replies in text; voice mode is a full spoken conversation; describes Claude for iOS and Android. Marked 'Updated yesterday'."
  - title: "Claude Academy: How to choose between Claude's Voice Mode and Dictation"
    url: "https://academy.claude.com/tutorials/how-to-choose-between-voice-mode-and-dictation"
    checked: 2026-11-11
    supports: "Dictation is the mic in the message box; in the desktop app you press the mic, speak and send; dictation is available on the web, mobile and the desktop app; voice mode has its own button, separate from the dictation mic."
  - title: "Claude Code docs: Voice dictation"
    url: "https://code.claude.com/docs/en/voice-dictation"
    checked: 2026-11-11
    supports: "/voice enables dictation in the Claude Code CLI; hold Space to record, or /voice tap to tap Space to start and send; audio streams to Anthropic's servers for transcription; needs a claude.ai account and a local microphone; transcription doesn't consume Claude messages or tokens and doesn't count toward the limits shown in /usage; troubleshooting: microphone permission for the terminal (System Settings → Privacy & Security → Microphone), /voice unavailable when other credentials or a third-party provider take precedence over a claude.ai sign-in, no audio detected (System Settings → Sound → Input)."
    quote: "Voice dictation streams your recorded audio to Anthropic’s servers for transcription."
  - title: "Apple Support: Dictate messages and documents on Mac"
    url: "https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac"
    checked: 2026-11-11
    supports: "Dictation enters text anywhere you can type; turn it on in System Settings > Keyboard > Dictation; start with the Microphone key, the Dictation keyboard shortcut or Edit > Start Dictation; stop with Escape, the Microphone key or the shortcut; stops after 30 seconds without speech; spoken punctuation, 'new line' and 'new paragraph'; on Apple silicon you can type while speaking; shortcut, languages and microphone source in Keyboard settings; Keyboard settings say whether general text Dictation is processed on the device; with Voice Control on, standard Dictation isn't available."
  - title: "Apple Support: If Dictation on Mac doesn't work as expected"
    url: "https://support.apple.com/guide/mac-help/if-dictation-on-mac-doesnt-work-as-expected-mchlc480652b/mac"
    checked: 2026-11-11
    supports: "Dictation on in Keyboard settings; correct language and region; correct shortcut; an external microphone connected and selected, with enough input volume; the microphone not obstructed; speaking at a normal volume; background noise or a headset; an internet connection may be needed, and Keyboard settings say whether one is."
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-11
    supports: "The chat (the mic button left of Send starts macOS Dictation into the field; cl_quick stays in the background and the panel takes the keyboard as it does for the shortcut, so Dictation types into the field and not the app behind; a click again, sending, a new chat or hiding stops it; with Dictation off in macOS it says once where to turn it on; ⌘D does the same as a click, on and off, also for a Dictation macOS's own shortcut started, and is in the keys button's list); Intro (the floating chat, ⌥Space, your own Claude Code, quick chats are incognito, the exact sentence); Install (Apple silicon, macOS 13 or later, Claude Code signed in)."
    quote: "With Dictation off in macOS it says once where to turn it on."
related:
  - /use-cases/claude-code-floating-window/
  - /blog/claude-quick-entry/
  - /blog/claude-shortcut-mac/
  - /
---

Claude voice input on a Mac comes in several kinds, and they aren't the same feature. Claude Desktop has Quick Entry's Caps Lock dictation and a mic in the message box, both of which turn speech into text, plus voice mode, a spoken conversation where Claude talks back. macOS has its own Dictation for any text field. And cl_quick, a free, independent Mac app, has a mic button that uses macOS Dictation. It runs on your own Claude Code sign-in, so its chats count against that account's Claude plan limits. Below is each one, from Anthropic's and Apple's own pages, read on 11 November 2026.

## Claude voice input on a Mac, side by side

| Option | Where | What your speech becomes | Worth knowing |
|---|---|---|---|
| Quick Entry voice | Claude Desktop, over any app | Text in a quick entry message | Caps Lock, off by default; macOS 14 or later |
| Dictation | The mic in Claude's message box | Text in your message | On the web, mobile and the desktop app |
| Voice mode | Claude Desktop, the web, mobile | A spoken conversation | Beta; counts toward usage limits |
| `/voice` in Claude Code | A terminal | Text in the prompt | Needs a claude.ai sign-in and a microphone |
| macOS Dictation | Any app on your Mac | Text where the cursor is | Set up in System Settings > Keyboard |
| cl_quick's mic button | cl_quick's chat | Text in the chat's field | Starts macOS Dictation; ⌘D toggles it |

Which one fits depends on two things: whether you want a conversation or a draft, and which app you're typing in.

## What Claude's own apps offer

**Quick Entry voice.** Anthropic's page on quick entry in Claude Desktop lists voice input as one of three capabilities: press Caps Lock, dictate, and see your words transcribed in real time. The voice shortcut is off by default because it takes over your Caps Lock key. You turn it on from the voice dictation prompt (tick **Turn on shortcut**, click **Continue**) and manage it in Settings > Desktop app, where you can choose Caps Lock, a custom keyboard shortcut, or turn it off. Press Caps Lock to start, press it again when you finish, check the text, and click the arrow to send. It needs macOS 14 or later and the Speech recognition permission, which you'll find in System Settings > Privacy & Security. The page says the transcribed text goes to Claude as part of your message, like anything you type.

**Dictation in the message box.** Anthropic's help page for Claude Mobile says dictation turns your speech into text so you can send a written prompt, and Claude replies in text. That page covers the iOS and Android apps. Anthropic's Claude Academy guide says dictation is the mic in the message box and is available on the web, mobile and the desktop app. In the desktop app, you press the mic, speak and send.

**Voice mode.** Anthropic describes voice mode as a full spoken conversation: you talk, Claude talks back. It's a beta feature on all plans, on Claude Mobile, Claude Desktop and the web, though Anthropic says it's built to work best from your phone. On the web and in Desktop, you start it with the sound wave symbol in the lower right corner of the chat window. It runs hands-free by default, with Claude listening and answering at natural pauses, or push-to-talk, where you hold a button. Its page says voice conversations count toward your regular usage limits.

**Claude Code in a terminal.** Claude Code has its own dictation. Run `/voice`, then hold Space to record, or run `/voice tap` and tap Space to start and again to send. Anthropic's docs say it streams your audio to Anthropic's servers for transcription, and needs a claude.ai sign-in and a local microphone. On macOS your terminal app needs microphone permission. The docs also say transcription doesn't consume Claude messages or tokens and doesn't count toward the limits shown in `/usage`. The voice mode page adds that in Claude Cowork and Claude Code, dictation is available but voice mode isn't.

## macOS Dictation, in any app

Apple's page says Dictation lets you speak to enter text anywhere you can type it. You turn it on in System Settings > Keyboard > Dictation. To start, press the Microphone key if your Mac has one, use the Dictation keyboard shortcut, or choose Edit > Start Dictation. To stop, press Escape, the Microphone key or the shortcut. It also stops on its own after 30 seconds without speech.

More from the same page:

- On a Mac with Apple silicon you can keep typing while you speak.
- You can say the name of a punctuation mark, or "new line" and "new paragraph".
- The shortcut, the languages and the microphone source are set in Keyboard settings.
- Keyboard settings also show whether general text Dictation is processed on your Mac. Apple points you there rather than giving one answer.
- If Voice Control is on, standard Dictation isn't available.

None of this is specific to Claude. Dictation works anywhere you can type, so any message box that takes typing can use it, Claude's included. For Claude voice input on a Mac where an app offers none of its own, this is the one to use.

## The mic button in cl_quick's chat

cl_quick is a macOS menu bar app that opens a floating chat over any app on a shortcut (⌥Space by default), answered by your own Claude Code. It's independent and not affiliated with Anthropic. The [Claude Code floating window](/use-cases/claude-code-floating-window/) page shows the chat.

![cl_quick bar while the mic button is dictating](/img/qc-dictating.webp "cl_quick's chat bar, drawn from sample data, with the mic button left of Send lit while Dictation runs.")

The mic button sits at the end of the controls row, left of Send, and starts macOS Dictation into the field. cl_quick stays in the background, and its panel takes the keyboard the way it does for the shortcut. So the words go into the chat's field, not into the app behind. A second click on the mic, sending, a new chat or hiding the window stops it. **⌘D** does what a click does, on and off, from the keyboard, and it works on a Dictation that macOS's own shortcut started, too. If Dictation is off in macOS, cl_quick says once where to turn it on.

What lands in the field is text you can edit before you press Return. That text is then your message to Claude Code. cl_quick's quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. How Dictation handles the audio is Apple's side, and Keyboard settings say where it's processed.

## Claude dictation not working on Mac: what to check

These are only the causes a source names, grouped by where you're dictating.

**macOS Dictation**, which is also what cl_quick's mic button uses. Apple's troubleshooting page lists: Dictation turned on in Keyboard settings; the right language and region; the right Dictation shortcut; an external microphone connected and selected in Sound or Keyboard settings, with enough input volume; nothing covering the microphone; speaking at a normal volume; less background noise, or a headset; and an internet connection, which Dictation may need.

**Quick Entry voice.** Anthropic's page names three requirements. The voice shortcut is off by default, so turn it on. You need macOS 14 or later. And it needs the Speech recognition permission in System Settings > Privacy & Security. Claude Desktop must also be installed and running.

**Claude Code's `/voice`.** Anthropic's docs list, among others: microphone access denied for your terminal app (System Settings → Privacy & Security → Microphone, then run `/voice` again); no claude.ai sign-in in use, because `/voice` isn't available when other credentials or a third-party provider take precedence; and no audio detected because the wrong input device is the system default (System Settings → Sound → Input).

**cl_quick.** The README names one cause: Dictation off in macOS, which cl_quick points out once.

## When each kind of Claude voice input on a Mac fits

For a spoken back-and-forth, use voice mode. For a quick question over any app with Claude Desktop, use Quick Entry's Caps Lock. For a long dictated draft in any text field, use macOS Dictation. For a Claude Code side question you'd rather say than type, use cl_quick's mic button. Quick Entry's full setup is on the [Claude Quick Entry](/blog/claude-quick-entry/) page, and the [Claude desktop shortcut on Mac](/blog/claude-shortcut-mac/) page lists the keys Anthropic documents.

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, the [FAQ](/faq/) has short answers, and the home page shows the [Claude quick chat](/).
