// The home page's FAQ (also its FAQPage structured data): 5 questions worded the way people search, each answer 40-60
// words, the direct answer first. Facts come from cl_quick's README and CHANGELOG only, the same facts as faq.ts; the
// questions and answers here are worded differently from /faq/, so no question is marked up twice. An answer is one
// paragraph (may hold <code>).
import type { QA } from "./faq";

export const homeFaq: QA[] = [
  { q: "What is a Claude quick chat for Mac?",
    a: ["A Claude quick chat is a small chat bar you open over any app with a shortcut. cl_quick is a free menu bar app for Mac that does this: press ⌥Space, type, and your own Claude Code answers. The first message turns the bar into a chat window that floats on every Space until you press Esc."] },
  { q: "Is cl_quick free to use?",
    a: ["Yes, the app is free. cl_quick uses your own Claude Code sign-in, so every chat counts against that account's Claude plan limits. The 5-hour and weekly limits of the account in use stay in view in the chat's header and in the menu bar menu. The first release isn't out yet."] },
  { q: "Are cl_quick chats incognito?",
    a: ["Yes. Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. It is cl_quick's own incognito, not Anthropic's: Claude Code runs with <code>--no-session-persistence</code>, so no transcript is written, and a chat ends after 15 minutes idle."] },
  { q: "What do I need to run cl_quick on a Mac?",
    a: ["You need an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. cl_quick chats through that sign-in, on the profile's account in use. The first release isn't out yet, so there is nothing to download so far; the Install page lists what it needs."] },
  { q: "How do I open Claude with a keyboard shortcut on Mac?",
    a: ["With cl_quick, press ⌥Space over any app and a chat bar opens, without bringing another app forward. ⌥Space is the default. Settings ▸ General offers four other Space shortcuts, Other… for any key with ⌘, ⌃ or ⌥, or Off. It needs no Accessibility permission."] },
];
