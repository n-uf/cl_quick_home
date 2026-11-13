---
title: "Are Claude incognito chats private? What Anthropic says"
description: "Are Claude incognito chats private? Anthropic's pages say they skip history, memory and training, but are kept 30 days. What each plan can see."
h1: "Are Claude incognito chats private? What they keep and who can see them"
mainKeyword: "are claude incognito chats private"
kind: what-is
draft: true
published: 2026-12-08
updated: 2026-12-08
author: n-uf
takeaways:
  - "Anthropic's help page says incognito chats aren't saved to your chat history or to Claude's memory, and they aren't used for model training."
  - "They aren't deleted at once: the same page says they're retained for 30 days by default, or longer under an organization's custom retention setting on Enterprise."
  - "On Team and Enterprise plans, incognito chats are included in organizational data exports available to account Owners, and in the Compliance API on Enterprise."
  - "Incognito chats are a Claude app feature. Claude Code is separate, and it saves session transcripts on your Mac by default."
  - "cl_quick, an independent Mac app, has its own incognito for Claude Code: nothing is saved on your Mac, and your messages still go to Anthropic."
faq:
  - q: "Are Claude incognito chats private?"
    a: "Partly. Anthropic's help page says incognito chats aren't saved to your chat history or Claude's memory and aren't used for training. They're still retained for 30 days by default, and on Team and Enterprise plans they're included in organizational data exports for account Owners."
  - q: "Are Claude incognito chats used for training?"
    a: "No, by Anthropic's pages. Its privacy article for consumer plans, dated 16 March 2026, says incognito chats are not used to improve Claude, even if Model Improvement is on. For commercial plans, a separate article dated 18 August 2026 says Anthropic doesn't use inputs or outputs from commercial products to train its models by default."
  - q: "Can my employer see my incognito chats on Claude Team or Enterprise?"
    a: "They can be reached. Anthropic's page says incognito chats are included in organizational data exports available to account Owners, are retained under the organization's retention policy, and are included in the Compliance API on Enterprise. Anthropic's memory article adds that they aren't visible in members' chat histories."
  - q: "Can I go incognito on Claude?"
    a: "Yes, on every plan, outside of projects. Start a new chat and click the ghost icon in the upper right corner. A black border and an Incognito chat label show you're in one. Once you close it, it can't be reopened."
  - q: "Does incognito work in Claude Code?"
    a: "Not as a Claude Code feature. The ghost icon is for chats in the Claude app, and Claude Code's docs, as of November 2026, don't use the word incognito. Claude Code saves transcripts on your Mac by default and can run with saving off. cl_quick, independent of Anthropic, runs every quick chat that way; its messages still go to Anthropic."
sources:
  - title: "Claude Help Center: Use incognito chats"
    url: "https://support.claude.com/en/articles/12260368-use-incognito-chats"
    checked: 2026-11-11
    supports: "What incognito chats are; all plans (Free, Pro, Max, Ultra, Team, Enterprise); not saved to chat history or memory; not used for training; retained 30 days by default or longer under an organization's custom retention (Enterprise); Claude won't pull from them when searching previous conversations; existing memory not used; not in the monthly recap; the ghost icon, black border and Incognito chat label; the x to close; not available in projects; can't be converted or reopened; Claude can access profile information; Team and Enterprise: organizational data exports for account Owners, 30 days for safety or longer under the organization's policy, Compliance API (Enterprise); incognito versus memory off; the note about the new Claude experience. Marked 'Updated over a week ago' when read; the whole page was read."
    quote: "aren't saved to your chat history or to Claude’s memory"
  - title: "Claude Privacy Center: Is my data used for model training? (consumer products, 16 March 2026)"
    url: "https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training"
    checked: 2026-11-11
    supports: "Incognito chats are not used to improve Claude, even with Model Improvement on; the article lists the cases in which chats and coding sessions are used (the setting allowed, flagged for safety review, an explicit opt-in such as the Trusted Tester Program) and covers consumer products and those accounts' Claude Code use. Whole page read."
    quote: "Your Incognito chats are not used to improve Claude"
  - title: "Claude Privacy Center: Is my data used for model training? (commercial products, 18 August 2026)"
    url: "https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training"
    checked: 2026-11-11
    supports: "By default Anthropic does not use inputs or outputs from commercial products to train its models, unless the customer reports feedback or bugs or otherwise chooses to allow it. The article doesn't mention incognito chats (whole page read)."
  - title: "Claude Help Center: Use Claude's chat search and memory to build on previous context"
    url: "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context"
    checked: 2026-11-11
    supports: "For Team and Enterprise: incognito chats don't contribute to memory and aren't visible in members' chat histories, but remain available to owners through data export and are subject to the organization's retention policies (retained for at least 30 days for safety purposes); incognito chats are included in organizational data exports. Marked 'Updated today' when read."
  - title: "Claude Help Center: Access the Compliance API"
    url: "https://support.claude.com/en/articles/13015708-access-the-compliance-api"
    checked: 2026-11-11
    supports: "The Compliance API lets an organization programmatically pull activity feed events, chat data and file content; available to Enterprise plan organizations (and Claude Platform customers in Claude chats); for Claude Enterprise, only the Primary Owner can enable it."
  - title: "Claude Code docs: Data usage"
    url: "https://code.claude.com/docs/en/data-usage"
    checked: 2026-11-11
    supports: "Claude Code clients store session transcripts locally under ~/.claude/projects/ for 30 days by default to enable session resumption; retention by account type; training on Free, Pro, Max and Ultra data when the setting is on, including Claude Code use."
  - title: "Claude Code docs: CLI reference"
    url: "https://code.claude.com/docs/en/cli-reference"
    checked: 2026-11-11
    supports: "--no-session-persistence: sessions are not saved to disk and cannot be resumed (print mode only)."
  - title: "Claude Code docs (full text, llms-full.txt)"
    url: "https://code.claude.com/docs/llms-full.txt"
    checked: 2026-11-11
    supports: "The English docs don't contain the word 'incognito' (searched the full text)."
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-11
    supports: "Intro (quick chats are incognito, the exact sentence, how a chat ends, the floating chat on a shortcut answered by your own Claude Code); What it keeps, and what it sends (--no-session-persistence, no transcript, your messages through Claude Code, and the one other thing it sends: an anonymous update check against GitHub Releases about once a day, which Settings ▸ General ▸ Updates turns off); Links and search (on by default; Claude Code fetches the pages for that answer only and cl_quick stores none of the text); attached files kept in memory only."
related:
  - /use-cases/claude-code-incognito/
  - /use-cases/claude-code-floating-window/
  - /
---

Are Claude incognito chats private? Partly. Anthropic's help page says an incognito chat isn't saved to your chat history or to Claude's memory, and isn't used for model training. It isn't gone straight away, though. The page says incognito chats are retained for 30 days by default, and on Team and Enterprise plans they're included in organizational data exports that account Owners can get. Everything below comes from Anthropic's own pages, read on 11 November 2026.

## What a Claude incognito chat does

Anthropic describes incognito chats as temporary conversations. Its help page was marked "Updated over a week ago", with no exact date. Here's what it says, point by point.

| | What Anthropic's pages say |
|---|---|
| Saved to chat history | No |
| Saved to Claude's memory | No, and an incognito chat doesn't use existing memory either |
| Found by chat search | No: Claude won't pull information from incognito chats when searching previous conversations |
| In your monthly recap | No |
| Used for model training | No, even if Model Improvement is on (privacy article, 16 March 2026) |
| Kept by Anthropic | 30 days by default, or longer under an organization's custom retention setting (Enterprise) |
| Can be reopened | No, once closed |
| Can become a regular chat | No |
| Inside a project | Not available |
| Plans | Free, Pro, Max, Ultra, Team and Enterprise |
| Your profile information | Claude can still use it, such as custom styles and preferences |

The page has one more note. If you have the new Claude experience, incognito chats open in the previous chat experience, so Claude can't create files or run code in them.

## Can I go incognito on Claude?

Yes, on every plan, but only outside a project. The page's steps:

1. Start a new chat with Claude, outside a project.
2. Click the ghost icon in the upper right corner.
3. Check for the black border and the "Incognito chat" label in the upper left corner.
4. When you're done, click the "x" in the upper right corner. Once closed, the chat can't be reopened.

If you only want Claude to skip memory for one conversation, the page points to a different route. Turn off "Memory" in the "+" menu before your first message. That chat stays in your history, and Claude can still find it when searching from your other conversations. So incognito and memory-off aren't the same thing.

## Are Claude incognito chats private from Anthropic and your employer?

You see the chat while it's open. After you close it, it isn't in your history and can't be reopened.

Anthropic keeps it for a while. The page says that while incognito chats aren't saved to your chat history, they're retained for 30 days by default. On Enterprise, an organization can set a longer custom retention period.

On a Team or Enterprise plan, your organization can reach it. The page says incognito chats are included in organizational data exports available to account Owners. They're retained for 30 days for safety, or longer under the organization's data retention policy. They're also included in the Compliance API, which Enterprise organizations can turn on. Anthropic's article on memory says they aren't visible in members' chat histories but remain available to owners through data export. If you use Claude through work, that's the part to know. Incognito keeps a chat out of your own history, not out of your organization's exports.

The pages word retention slightly differently. The incognito page says 30 days by default, or longer under an organization's custom retention setting. Its Team and Enterprise section says 30 days "for safety", or longer under the organization's policy. The memory article says "at least 30 days for safety purposes". All three agree on 30 days, with the possibility of longer.

## Are Claude incognito chats used for training?

For consumer plans, Anthropic's privacy article of 16 March 2026 says incognito chats are not used to improve Claude, even if Model Improvement is on in your privacy settings. The same article lists other cases in which chats may be used, such as a conversation flagged for safety review. As of November 2026, it doesn't say how that case applies to incognito chats.

For Team, Enterprise and the API, the article dated 18 August 2026 says Anthropic doesn't use inputs or outputs from commercial products to train its models by default. It doesn't mention incognito chats.

## Claude AI incognito mode, memory off and "not saved"

Three different things get called "chats not saved", and Anthropic's pages keep them apart.

- **Incognito mode** in the Claude app is the ghost icon. The chat isn't saved to history or memory, and Claude won't find it when you search past chats.
- **Memory off for one chat** keeps the chat in your history. Claude won't use or add to memory in it, but you can find it later, and Claude can find it from your other conversations.
- **Session saving off in Claude Code** is a command-line option, covered below. It isn't part of the Claude app.

If you have memory turned on, an incognito chat starts without it: Claude's existing memory isn't used, and the chat isn't added to future memory. Claude can still use your profile information, such as custom styles and preferences. An incognito chat isn't a blank slate.

## What "not saved" doesn't mean

Three things incognito doesn't promise, by Anthropic's own pages:

- **Deleted at once.** Not saved to your history isn't the same as not kept. The default is 30 days.
- **Hidden from your organization.** On Team and Enterprise, exports and the Compliance API include incognito chats.
- **A switch for all of Claude.** The ghost icon is a feature of chats in the Claude app. It doesn't reach Claude Code, which keeps its own transcripts on your Mac.

None of that makes incognito chats less useful. It tells you what the word covers: history, memory and training on one side; retention and organization access on the other. Anthropic's incognito page, as of November 2026, doesn't say what happens to a chat when the 30 days end. If you need that for a regulated use, Anthropic's privacy policy, your plan's terms and your organization's admin are the places to ask.

## Claude Code is separate: a Mac-side option

Anthropic's Claude Code docs say Claude Code stores session transcripts locally under `~/.claude/projects/`, for 30 days by default, so you can resume a session. The docs also describe `--no-session-persistence`, which means sessions aren't saved to disk and can't be resumed. Claude Code's docs, as of November 2026, don't use the word "incognito", and the incognito help page doesn't mention Claude Code.

cl_quick is a free macOS menu bar app by n-uf, independent and not affiliated with Anthropic. It runs on your own Claude Code sign-in, so every chat counts against that account's Claude plan limits. It opens a floating chat on a shortcut, answered by your own Claude Code, and runs every quick chat with `--no-session-persistence`. Its own wording: **Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account.** That's cl_quick's incognito, not Anthropic's. Side by side:

| | Claude app incognito chat | cl_quick quick chat |
|---|---|---|
| Who runs it | Anthropic, in the Claude app | An independent Mac app, running your own Claude Code |
| Saved where you can see it | Not in your chat history | Nothing saved on this Mac |
| Messages reach Anthropic | Yes | Yes, under the profile's account |
| How long Anthropic keeps them | 30 days by default (Enterprise: or longer) | As for any Claude Code use on that account: Anthropic's data-usage rules for your plan apply |
| Training | Not used, per the incognito and privacy pages | As for any Claude Code use on that account: Anthropic's data-usage rules for your plan apply |
| Reopen later | No | Never resumed; the chat ends after 15 minutes idle, on New chat, on another profile or account, or when cl_quick quits |

Anthropic's Claude Code data usage page sets those rules by account type. For Free, Pro, Max and Ultra, data is kept 5 years if you allow model improvement and 30 days if you don't. For Team, Enterprise and the API, it's 30 days as standard. The page also says Anthropic trains on Free, Pro, Max and Ultra data when that setting is on, including Claude Code use.

cl_quick's own update check, about once a day and anonymous, goes to GitHub, not Anthropic, and Settings ▸ General ▸ Updates turns it off. With Links and search on, Claude Code may fetch pages for an answer. The page text and the files you attach go to Anthropic as part of the chat, under the profile's account; cl_quick stores none of the page text and keeps files in memory only. The [Claude Code in incognito](/use-cases/claude-code-incognito/) page explains cl_quick's side in full, with a quick way to look for yourself that nothing lands on your Mac. The [floating Claude Code chat](/use-cases/claude-code-floating-window/) page shows the chat, and the home page sums up the [Claude quick chat](/).

## Which one to use

So, are Claude incognito chats private? As Anthropic describes them, they stay out of your history, your memory and training. They're still retained for 30 days by default, and on Team and Enterprise they're in your organization's exports.

For a chat in the Claude app that stays out of your history and memory, use the ghost icon, and keep the 30 days in mind. For a Claude Code question from your Mac with nothing saved on it, cl_quick is a [Claude Code floating window](/use-cases/claude-code-floating-window/) built for that, and [the install page](/install/) has the steps. The [FAQ](/faq/) answers the short questions. Neither option keeps a message from Anthropic: both send it.
