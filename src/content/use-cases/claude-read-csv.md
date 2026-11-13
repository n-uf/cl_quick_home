---
title: "Can Claude read CSV files? Yes, as text, in a quick chat"
description: "Can Claude read CSV files? Yes, as text. On a Mac, drop a CSV, log or code file up to 400 KB on cl_quick's chat bar and ask. No code runs on it."
h1: "Can Claude read CSV files? A quick look at a small file, a log or code"
mainKeyword: "can claude read csv files"
kind: use-case
draft: true
published: 2027-01-12
updated: 2027-01-12
author: n-uf
takeaways:
  - "Claude reads CSV files as text. The Claude app takes one as an upload, and cl_quick, a free macOS menu bar app, takes a CSV, log or code file up to 400 KB of UTF-8 text, dropped from Finder or pasted with ⌘V."
  - "In cl_quick Claude gets the file as text and runs no code. A total, an average or a count over many rows is a reading to check, not a calculation."
  - "Data analysis and charts belong in the Claude app with code execution and file creation on, as Anthropic's page describes, or in Claude Code."
  - "Attached files are kept in memory only. Nothing is saved on this Mac, but the file still goes to Anthropic under the profile's account, like your messages."
  - "cl_quick refuses Excel and Word files, zips, binaries and text that isn't UTF-8, each with a muted line over the field."
faq:
  - q: "Can Claude do math on a CSV file?"
    a: "In the Claude app, yes, with code execution and file creation on: Anthropic's page says Claude can create Python scripts for data analysis. In cl_quick no code runs, so a sum, an average or a count over many rows is Claude reading the numbers, not calculating them. Check any total that matters in a spreadsheet."
  - q: "Should I convert Excel to CSV before giving it to Claude?"
    a: "For cl_quick, yes, because it refuses Excel files with a muted line over the field. The Claude app takes .xlsx once code execution and file creation is enabled, as Anthropic's upload page says. When you export, keep in mind that a CSV holds one sheet's values as text, without formulas, formatting or the other sheets."
  - q: "Why won't Claude read my CSV file?"
    a: "In cl_quick, a CSV is refused when it's too big or isn't UTF-8 text. One text file can be up to 400 KB, and a chat holds 400 KB of text files in all, counting what was sent earlier. A muted line over the field says so. For an encoding problem, save a copy as UTF-8 and drop that."
  - q: "Can I paste CSV data into Claude instead of attaching the file?"
    a: "Yes. In cl_quick, text on the clipboard always pastes as text, so rows copied from a spreadsheet land in the field as part of your message. Copying the file itself in Finder and pressing ⌘V attaches it as a chip instead, up to 400 KB of UTF-8 text. Either way, Claude reads it as text."
  - q: "Can Claude read a log file or a stack trace?"
    a: "Yes, as text. Logs are among the text files cl_quick takes, and a stack trace pasted into the field is just text. Ask for the first error and its likely cause. Claude sees only what you gave it, so a trace without the code around it gets an answer with gaps."
sources:
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-13
    supports: "Intro (your own Claude Code on the profile's account in use, counts against its limits, quick chats are incognito, the exact sentence); The chat (Files: any text or code file (txt, Markdown, CSV, JSON, YAML, XML, HTML, logs, Swift, Python, JavaScript/TypeScript, Go, Rust, Java, C, Ruby, shell, SQL, TOML, CSS and the like) up to 400 KB, UTF-8, dropped from Finder on the bar or the chat window or copied in Finder and pasted with ⌘V, chips with a symbol, the name and the size, a ✕ on each, 5 attachments a message with the pictures, per chat about 20 MB, 100 PDF pages and 400 KB of text files counting what was sent earlier, ✕ gives the room back, a new chat starts from nothing, Claude gets no access to your files or folders, Word, Excel, zip, binaries, text that isn't UTF-8 and password-protected PDFs refused with a muted line over the field, one over a limit says by how much, a file alone is a message, the chat shows chips and never the content; Images: text on the clipboard always pastes as text; Ask about the selected text: right-click ▸ Services ▸ Ask cl_quick, the selection quoted in the field and not sent, a selection over 20,000 characters cut); What it keeps, and what it sends (attached files go to Claude Code inside the message as document blocks, kept in memory only, nothing copied to a temporary file, a cache or the app's folder, Claude Code has no file tools and sees nothing but what you attached, runs with no tools except the two web tools when Links and search is on, files stay in the running chat's conversation until it ends, under the same account); Install (Apple silicon, macOS 13 or later, Claude Code signed in); the closing line (independent, not affiliated with, endorsed by or sponsored by Anthropic)."
    quote: "kept in memory only"
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-13
    supports: "The 'Files in the chat' entry: PDFs and text files (Markdown, CSV, JSON, code and the like) dropped or pasted, chips, sent with the message as documents so Claude reads them, text file up to 400 KB, 5 attachments with pictures, per chat 400 KB of text files, what is refused, kept in memory only and never written anywhere, Claude Code still has no file tools; the 'Ask about the selected text' entry; the 'Incognito chats' entry."
  - title: "Claude Help Center: Upload files to Claude"
    url: "https://support.claude.com/en/articles/8241126-upload-files-to-claude"
    checked: 2026-11-13
    supports: "Dated July 23, 2026. CSV is listed among the document types Claude works with (with PDF, DOCX, TXT, HTML, ODT, RTF, EPUB, JSON and XLSX); XLSX needs code execution and file creation enabled in your account; files attach from the + button ▸ Add files or photos, or by drag and drop into the chat window; chat uploads 500MB per file and up to 20 files per chat; for non-PDF documents Claude extracts text only, and embedded images can't be read."
    quote: "Claude extracts text only from these files."
  - title: "Claude Help Center: Create and edit files with Claude"
    url: "https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude"
    checked: 2026-11-13
    supports: "Code execution and file creation is available to Free, Pro, Max, Ultra, Team and Enterprise, on by default for Free, Pro, Max and Ultra, turned on in Settings ▸ Capabilities (called Create and edit files in the updated Settings layout); Team and Enterprise owners control it; Claude works in an isolated, sandboxed container; Claude can create Python scripts for data analysis; you can upload CSV, TSV and other files for data analysis and visualization."
    quote: "upload CSV, TSV, and other files for data analysis and visualization"
  - title: "Claude API docs: Files API"
    url: "https://platform.claude.com/docs/en/build-with-claude/files"
    checked: 2026-11-13
    supports: "Plain text files such as .csv and .md can be read as text or uploaded with an explicit text/plain content type; to analyze datasets instead of reading them as text, upload them for the code execution tool; .docx and .xlsx aren't supported in document blocks and must be converted to text first."
    quote: "To analyze datasets instead of reading them as text"
related:
  - /
  - /faq/
  - /install/
  - /use-cases/claude-code-incognito/
---

Can Claude read CSV files? Yes, as text. Anthropic's Help Center lists CSV among the documents Claude works with, and in the Claude app you attach one to a chat like any other file. cl_quick, a free macOS menu bar app, does the same in a quick chat over whatever app you're in: drop a small CSV, a log or a code file on the chat bar, up to 400 KB of UTF-8 text, and your own Claude Code answers. It runs on your own Claude Code sign-in, so every chat counts against that account's Claude plan limits, and the file goes to Anthropic under the profile's account, like your messages. cl_quick is independent and not affiliated with Anthropic.

One limit shapes how you use it. In cl_quick, Claude reads the file as text and runs no code. That's fine for "what's in this?" and "which rows look wrong?". It's the wrong way to add up ten thousand rows.

## What Anthropic says about CSV files

Two of Anthropic's Help Center pages matter here, both read on 13 November 2026. They describe two different things Claude can do with the same file.

| In the Claude app | What the page says |
|---|---|
| Attach a CSV to a chat | CSV is a supported document type, up to 500 MB per file and 20 files per chat. For documents other than PDFs, Claude extracts text only. |
| With code execution and file creation on | You can upload CSV, TSV and other files for data analysis and visualization. Claude works in a sandboxed container and can create Python scripts for data analysis. |

To upload a CSV file to Claude in the app, use the **+** button ▸ Add files or photos, or drag the file into the chat window. Code execution and file creation is on by default for Free, Pro, Max and Ultra, under Settings ▸ Capabilities, and on Team and Enterprise the organization's owners control it.

Anthropic's API docs draw the same line. A `.csv` can be read as plain text, and a dataset you want analyzed, not just read, goes to the code execution tool.

So for Claude CSV analysis, the answer depends on where you ask. With code execution, Claude computes. Without it, Claude reads. cl_quick is the second kind on purpose: Claude Code runs there with no tools, apart from its two web tools when Links and search is on.

## Can Claude read CSV files in a quick chat?

Yes, up to 400 KB of UTF-8 text.

1. Press the shortcut, ⌥Space by default. The chat bar opens over the app you're in.
2. Drop the file on the bar from Finder, or copy it in Finder and press ⌘V.
3. A chip shows over the field with a symbol, the file's name and its size. Its **✕** takes it off.
4. Ask your question and press Return.

![cl_quick chat with a CSV and a PDF file attached](/img/qc-files.webp "cl_quick's chat window, drawn from sample data: sample.csv (12 B) and Sample invoice 42.pdf as chips, the question “What is in these two files? One line each.”, and a line back for each: the CSV is a table with columns a and b and two rows of numbers.")

To skip the file, copy a few rows out of a spreadsheet and press ⌘V in the field. Text on the clipboard always pastes as text. A file alone is a message too, so you can drop it, press Return and ask in the next one. The file stays in the chat's conversation until the chat ends, so follow-ups don't need a second drop.

The file types go well beyond CSV: txt, Markdown, JSON, YAML, XML, HTML, logs and source files in many languages. So "can Claude read text files?" has the same answer in a quick chat. Yes, up to 400 KB of UTF-8, and the chat shows the chip, never the content.

## Questions that work on a small CSV

Think of a small file: a list of expenses, a short export, a settings table. Ask for things you can see and check.

| Ask | Why it works as text |
|---|---|
| "What does each column hold?" | The header and a few rows say it |
| "Which rows have an empty date?" | Ask for the row numbers back, then look |
| "Is the amount column in one currency?" | Odd values stand out when read |
| "What's the highest and lowest amount?" | A small file can be scanned. Check both rows |
| "Turn the first ten rows into a Markdown table." | It's rewriting text |

Hold back on arithmetic over many rows. Nothing runs, so a sum or an average is Claude reading the numbers, not calculating them, and the longer the column, the more reason to doubt it. Use the chat to find the column and the odd rows, then work out the total in a spreadsheet. If you want the numbers computed in the chat itself, that's what the Claude app's code execution is for.

An .xlsx file isn't read at all. cl_quick refuses Excel files, as it does Word files, zips and binaries, so export the sheet as CSV first. A CSV holds one sheet's values as text: formulas, formatting and the other sheets stay behind.

## Logs and stack traces

A log is text, and cl_quick lists logs among the files it takes. Drop a `.log` file, or paste the part that matters.

- "What's the first error, and what likely caused it?"
- "Group these lines by what's repeating."
- "When do the errors start?"
- "Explain this stack trace in two sentences."

Claude sees only what you gave it. A stack trace without the code around it gets an answer with gaps, and Claude can't open the project to look.

If the trace is on screen in a terminal or another app, you may not need to copy it. When that app offers its selected text to the Services menu, select the trace and choose right-click ▸ Services ▸ **Ask cl_quick**. The bar opens with the selection quoted in the field, not yet sent, and a selection over 20,000 characters is cut with a line saying so. If Ask cl_quick isn't listed there, copy the trace and paste it.

Logs hold hostnames, paths and sometimes more, so know where they go. **Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account.** An attached log goes the same way. [The incognito page](/use-cases/claude-code-incognito/) says what cl_quick's incognito covers and what it doesn't.

## A code file

Drop a `.py`, `.swift` or `.sql` file and ask what it does, where a regex goes wrong or what an odd line means. The source types include Python, JavaScript and TypeScript, Go, Rust, Java, C, Ruby, shell, SQL, TOML and CSS. Claude gets that one file. It can't open the rest of the project, run the code or see the files it imports.

That's the line between this and Claude Code in a terminal. Work across a project's files belongs in the terminal. One file you want read can go to a quick chat, from whatever app you're in.

## The limits in cl_quick

| What | Limit |
|---|---|
| One text or code file | 400 KB, UTF-8 |
| Text files in a chat | 400 KB in all, counting what was sent earlier |
| Attachments in a message | 5, counting pictures |
| Attachments in a chat | About 20 MB in all |

A file over a limit is refused with a muted line over the field that says by how much, and a file that isn't UTF-8 text is refused too. If an old export trips on its encoding, save a copy as UTF-8 and drop that one. The **✕** on a chip gives its room back, and New chat (⌘N) starts from nothing. {{live:/blog/claude-file-upload-limits/}}The [Claude file upload limit](/blog/claude-file-upload-limits/) article sets these beside Anthropic's numbers for the Claude app.{{/live}}

A CSV and a PDF can go in the same message if both fit. {{live:/use-cases/claude-summarize-pdf/}}The PDF side has its own page, [Claude summarize PDF](/use-cases/claude-summarize-pdf/).{{/live}}

## When the Claude app or Claude Code fits better

- **The file is big.** Anthropic's page allows 500 MB per file in a Claude chat. A quick chat stops at 400 KB.
- **You need real numbers.** Sums, averages, charts and cleaning are work for code. The Claude app has code execution, by Anthropic's page, and work across a project's files belongs to Claude Code in a terminal.
- **The data is a spreadsheet.** The Claude app takes .xlsx once code execution and file creation is on. cl_quick doesn't take it at all.

For the small file in front of you, a quick chat is enough. cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, and the [FAQ](/faq/) answers what it keeps and what it sends. It's the same [Claude quick chat](/) for every question, with a file or without one.
