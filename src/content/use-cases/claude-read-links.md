---
title: "Can Claude read links? Yes, with its web tools on"
description: "Can Claude read links? Yes, when web search or fetch is on. How the Claude app and Claude Code read a page, and how cl_quick does it from a chat bar."
h1: "Can Claude read links? Paste a URL and ask about the page"
mainKeyword: "can claude read links"
kind: use-case
draft: true
published: 2026-12-29
updated: 2026-12-29
author: n-uf
takeaways:
  - "Claude can read a link when its web tools are on. Anthropic's help page calls this web fetch and says it works when web search is switched on in the Claude app."
  - "Claude Code reads links with its WebFetch tool and searches with WebSearch. For most fetches, WebFetch runs an extraction prompt against the page and hands Claude the result, not the raw page."
  - "cl_quick has Links and search on by default: paste a link, and a muted line says \"Reading example.com…\" while Claude Code fetches it. Settings ▸ General ▸ Links and search turns it off."
  - "A page counts toward the account's usage like any answer, and its text goes to the model under the profile's account. cl_quick stores none of it."
  - "cl_quick is a free app, independent of Anthropic. It uses your own Claude Code sign-in."
faq:
  - q: "Does Claude read a link in the Claude app without web search on?"
    a: "Not as Anthropic's help page describes it. The page says that when web search is toggled on, Claude can also retrieve content from links you give it, and calls that web fetch. With the new Claude experience there is no toggle, and Claude searches the web when it helps. On Team and Enterprise, an Owner enables web search first."
  - q: "Does Claude Code ask before it opens a link?"
    a: "In Manual and acceptEdits modes, yes. Claude Code's docs say WebFetch prompts before fetching, unless your permission rules already cover the domain or it is on a built-in list of documentation domains. The auto and bypassPermissions modes skip the prompt. cl_quick allows both web tools up front, so a quick chat never stops to ask."
  - q: "Can Claude read a link to a page on localhost?"
    a: "Not through WebFetch. Claude Code's docs say it refuses localhost and any hostname without a dot, such as a bare intranet name, before making a request, and that its error points Claude to curl through Bash. In cl_quick, Claude Code has its two web tools and no Bash, so that route isn't there in a quick chat."
  - q: "Does a long article use more of my limit than a short one?"
    a: "It can. Anthropic's help page says that when you give Claude a link to a long article and ask about it, the entire article is retrieved into Claude's context window, which can use a significant part of a free account's usage limit. Its example is a 10,000-word article. Web search and web fetch both count toward usage limits."
  - q: "Why did Claude Code's answer miss something that is on the page?"
    a: "Because WebFetch is lossy by design, Claude Code's docs say. For most fetches it runs a prompt describing what to extract in a separate model call, and Claude gets that call's result, not the raw page. A reply saying the page doesn't mention something may only mean the prompt didn't ask. Ask again, about that part."
sources:
  - title: "Claude Help Center: Enable and use web search"
    url: "https://support.claude.com/en/articles/10684626-enable-and-use-web-search"
    checked: 2026-11-13
    supports: "When web search is toggled on, Claude can also retrieve content directly from web pages given as specific URLs (web fetch) and analyze the full content of articles, blog posts and other pages; the \"+\" button in the lower left corner of the chat window and \"Web search\", a checkmark when on; on Team and Enterprise an Owner or Primary Owner first enables it in Organization settings > Capabilities; with the new Claude experience there is no toggle and Claude searches the web when it helps; every response includes citations; for free accounts a direct link to a long article is retrieved into the context window in full and can consume a significant portion of the usage limit (10,000-word example); limitations (search availability may vary with connectivity, website links occasionally may not function, usage of web search and web fetch counts toward usage limits). Marked 'Updated this week' when re-read on 2026-11-13; whole page read; no change from the draft's reading."
    quote: "Usage of web search and web fetch counts toward your usage limits."
  - title: "Claude Code docs: Tools reference"
    url: "https://code.claude.com/docs/en/tools-reference"
    checked: 2026-11-13
    supports: "WebFetch fetches content from a URL and WebSearch performs web searches; WebFetch takes a URL and a prompt describing what to extract, converts HTML to Markdown and, for most fetches, runs the prompt in a separate model call and gives Claude that result; lossy by design (a result saying a page doesn't mention something may only mean the prompt didn't ask); refuses localhost and any hostname without a dot, such as a bare intranet name, before making a request, and its error tells Claude to reach local servers with curl through Bash; reads up to 100,000 characters of a page per call; a page not downloaded within five minutes fails with a deadline error; a redirect to a different host is returned as text and Claude fetches the new URL in a second call; in Manual and acceptEdits modes WebFetch prompts before fetching, except for domains the permission rules already allow or deny and a built-in set of preapproved documentation domains; auto and bypassPermissions skip the prompt; on a Team or Enterprise claude.ai sign-in WebFetch also depends on the organization's policy; WebSearch returns result titles and URLs, doesn't fetch the result pages, and Claude follows up with WebFetch. Re-read on 2026-11-13 (the .md copy of the page)."
    quote: "This makes WebFetch lossy by design."
  - title: "Claude Docs: Web fetch tool (API)"
    url: "https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-fetch-tool"
    checked: 2026-11-13
    supports: "The API's web fetch tool retrieves full content from webpages and PDFs and currently does not support websites dynamically rendered with JavaScript. This is the tool developers add to their own API requests, not Claude Code's WebFetch. Re-read on 2026-11-13; no page read says how a page behind a login or a paywall is handled."
    quote: "The web fetch tool currently does not support websites dynamically rendered with JavaScript."
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-13
    supports: "The chat ▸ Links and search (paste a link or ask about something current; the muted lines \"Reading example.com…\" and \"Searching the web for “…”…\" beside the dot, gone when the text resumes; the answer is the whole reply and Copy and ⌘⇧C take all of it; Stop works while a page is read; pages count toward the account's usage; the setting turns it off; a change applies from the next message and starts a new chat with \"New chat; nothing from the last one was carried over.\"); The chat (the 5h and wk meters in the header; Stop ends the answer and the chat goes on); The chat ▸ Ask about the selected text in any app (Services ▸ Ask cl_quick, an unsent quote, 20,000 characters cut, nothing kept); Settings ▸ General ▸ Links and search (on by default; the setting's own sentence; off means Claude runs with no tools and a link is only text); What it keeps, and what it sends (Claude Code gets WebFetch and WebSearch and nothing else, with --allowedTools for both; the pages are fetched for that answer only; the text goes to the model as part of the chat under the account; cl_quick stores none of it; the page text is never shown raw and is told to be data, never instructions; no MCP servers, no settings files). Source copy: sources/README-unreleased-2026-11-13b.md, identical to main on 2026-11-13."
    quote: "Pages count toward the account's usage, like any answer."
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-13
    supports: "'Links and search': the two web tools, allowed up front \"so print mode never has to ask\", and nothing else (no Bash, no files, no MCP); the muted lines; the answer is the whole reply; what a page says is data for the answer, never instructions; read for that answer only and nothing stored; on by default; off means no tools at all; a change starts a new chat; pages count toward the account's usage. Source copy: sources/CHANGELOG-unreleased-2026-11-13.md, same entries as main on 2026-11-13."
related:
  - /
  - /use-cases/claude-code-incognito/
  - /use-cases/claude-code-floating-window/
  - /faq/
---

Can Claude read links? Yes, when its web tools are on: Claude fetches the page you point to and answers from its text. In the Claude app, Anthropic's help page calls this web fetch and ties it to web search being switched on. Claude Code has its own WebFetch and WebSearch tools. cl_quick, a free macOS menu bar app, turns both on by default, so you can paste a URL into a [Claude quick chat](/) and ask about the page. It runs on your own Claude Code sign-in, and the page counts toward that account's usage. cl_quick is independent and not affiliated with Anthropic.

## Can Claude read links in the Claude app?

Yes, with web search on. Anthropic's help page says that when web search is toggled on, Claude can also retrieve content directly from web pages when you give it a specific URL. It calls that web fetch, and says Claude can then analyze the full content of articles, blog posts and other pages.

To switch it on, click the "+" in the lower left corner of the chat window and choose "Web search". A checkmark shows it's on. With the new Claude experience there is no toggle, the page says, and Claude searches the web when it helps. On Team and Enterprise plans, an Owner or Primary Owner has to enable web search for the workspace first, in Organization settings > Capabilities.

The page lists a few limitations. Search availability may vary with connectivity, and website links occasionally may not work. Every response includes citations, so you can see which pages an answer came from.

## Can Claude Code read links or a URL?

Yes. Claude Code's tools reference lists **WebFetch**, which fetches content from a URL, and **WebSearch**, which performs web searches. What the docs say about how they behave explains a few odd answers:

- WebFetch takes a URL and a prompt describing what to extract. It converts an HTML page to Markdown and, for most fetches, runs that prompt against it in a separate model call. Claude gets the result, not the raw page.
- The docs call this lossy by design. A result that says the page doesn't mention something may only mean the prompt didn't ask about it.
- It reads up to 100,000 characters of a page per call. A page that hasn't finished downloading in five minutes fails with a deadline error.
- If a URL redirects to a different host, WebFetch doesn't follow it. It names both addresses, and Claude fetches the new one in a second call.
- WebSearch returns result titles and URLs and doesn't open the pages. To read one, Claude follows up with WebFetch.

In a terminal, WebFetch asks before fetching in Manual and acceptEdits modes, unless your permission rules already cover the domain. In cl_quick both tools are allowed up front, so a quick chat never stops to ask.

## How a link looks in a quick chat

Paste the link into the bar with your question, for example a URL and "what does this page say about the refund window?". While Claude Code fetches the page, a muted line beside the dot says what it is doing.

![cl_quick chat with the line Reading example.com…](/img/qc-reading.webp "cl_quick's chat window, drawn from sample data: a question about port 3000 on macOS, the reply \"I'll open the page.\", the muted line \"Reading example.com…\" and the Stop button.")

Ask about something current with no link, and Claude can search instead. The line then reads "Searching the web for “…”…", and it goes when the text resumes. The answer is the whole reply, the text before the call and after it, and Copy and ⌘⇧C take all of it.

**Stop** works while a page is being read. It ends the answer where it is, and the chat goes on. The rest of the window, from the shortcut to Esc, is on the [Claude Code floating window](/use-cases/claude-code-floating-window/) page.

### Prompts that work with a link

Can Claude summarize articles? Yes, one page at a time: that's what a fetch is for. Can Claude summarize a website? WebFetch takes one URL per call, so point it at the page that matters, or ask Claude to search. Some asks that suit a fetched page:

- "Summarize this in five bullets, and say who wrote it."
- "What changed in this release note since version 2?" (name the version you have)
- "Pull out the steps, in order."
- "Does this page say anything about pricing? Quote the sentence."

Since WebFetch is lossy, a narrow question gets a better answer than "tell me everything". If the first answer misses a part, ask about that part.

If you only need a few paragraphs, skip the fetch. Select the text, then right-click ▸ Services ▸ **Ask cl_quick**. The bar opens with the selection as a quote in the field, ready for your question. A selection over 20,000 characters is cut, with a line saying so, and nothing about it is kept.

## What reading a page costs

A page counts toward the account's usage, like any answer. Anthropic's help page says the same for the Claude app: usage of web search and web fetch counts toward your usage limits. For free accounts it adds a note. A direct link to a long article pulls the entire article into Claude's context window, which can use a significant part of the limit. Its example is a 10,000-word article.

In cl_quick, the 5h and wk meters in the chat header show where the account stands. For how those limits work, [cl_audit's page on Claude usage limits](https://cl-audit.n-uf.com/blog/claude-usage-limits/) goes through the 5-hour and weekly limits. cl_audit is n-uf's sibling app.

## What happens to the page text

Claude Code fetches the pages for that answer only. The text goes to the model as part of the chat, under the profile's account. cl_quick stores none of it, never shows it raw, and tells Claude that what a page says is data for the answer, never instructions.

So the chat stays incognito in cl_quick's sense: **nothing is saved on this Mac**. Your messages, and the text of the pages Claude reads for you, still go to Anthropic under the profile's account. [What incognito means in cl_quick](/use-cases/claude-code-incognito/) has the details, and what the word doesn't cover.

In cl_quick, Claude Code has the two web tools and nothing else: no Bash, no file access, no MCP servers.

## Can Claude read links on every page?

No. Anthropic's pages name a few cases.

- **localhost and bare hostnames.** Claude Code's docs say WebFetch refuses localhost and any hostname without a dot before making a request, and its error points Claude to curl through Bash. cl_quick's Claude Code has no Bash.
- **Pages that need a browser.** The API's web fetch tool docs say it doesn't support websites rendered dynamically with JavaScript. That page covers the tool developers add to their own API requests, not Claude Code's WebFetch, so take it as a hint, not a rule for cl_quick.
- **Very long pages.** WebFetch reads up to 100,000 characters per call.
- **Team and Enterprise sign-ins.** Claude Code's docs say WebFetch also depends on your organization's policy there.

Pages behind a login or a paywall: Anthropic's pages above don't say how they're handled. If you can see a page and Claude can't, select the text and use Ask cl_quick, or paste it.

## Turning Links and search off

**Settings ▸ General ▸ Links and search** is on by default. Its own line reads "Claude can open links and search the web. Pages count toward your usage." Switch it off and Claude runs with no tools, as before, and a link in a message is only text.

A change applies from the next message, after the answer under way if one is running. The tools are fixed when `claude` starts, so that message begins a new chat, and the window says "New chat; nothing from the last one was carried over." Turn it off when you want nothing fetched, or when a limit is close and a page isn't worth it.

## Which one to use

The Claude app suits reading with citations, and it takes more kinds of files than cl_quick does. {{live:/blog/claude-file-upload-limits/}}The numbers are on the [Claude file upload limit](/blog/claude-file-upload-limits/) page.{{/live}} Claude Code in a terminal suits a page you read while working in a project, with its permission prompts and your settings. A quick chat suits a link you come across in another app, asked about in a floating window over that app.

A PDF on your disk is a different job from a link. {{live:/use-cases/claude-summarize-pdf/}}[Summarizing a PDF with Claude](/use-cases/claude-summarize-pdf/) has its own page.{{/live}}

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, and the [FAQ](/faq/) answers what it keeps and sends.
