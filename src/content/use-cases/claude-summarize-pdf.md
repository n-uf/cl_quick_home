---
title: "Claude summarize PDF: ask about a file from any Mac app"
description: "Can Claude summarize PDF files? Yes. On a Mac, drop one on cl_quick's chat bar over any app and ask: up to 15 MB and 100 pages, kept in memory."
h1: "Can Claude summarize PDFs? Drop one on a chat bar over any app"
mainKeyword: "claude summarize pdf"
kind: use-case
draft: true
published: 2026-12-22
updated: 2026-12-22
author: n-uf
takeaways:
  - "Claude reads PDFs. In the Claude app you attach one to a chat. In cl_quick, a free macOS menu bar app, you drop it from Finder on the chat bar, or copy it in Finder and press ⌘V."
  - "cl_quick takes a PDF up to 15 MB and 100 pages. A message holds up to 5 attachments with pictures, and a chat holds 100 PDF pages in all."
  - "A PDF over a limit, or one with a password, is refused with a muted line over the field, such as \"too long: 140 pages, up to 100\"."
  - "Attached files are kept in memory only. Nothing is saved on this Mac, but the PDF still goes to Anthropic under the profile's account, like your messages."
  - "For a PDF over 100 pages, or one you'll come back to in a project, the Claude app fits better."
faq:
  - q: "How do I ask Claude about one page of a PDF?"
    a: "Name the page by the number your PDF viewer shows, not the one printed on the page, as Anthropic's Help Center suggests. In cl_quick you can also bring the passage itself: select it and choose Services ▸ Ask cl_quick, if the viewer offers its selection to the Services menu, or copy it and paste it into the field."
  - q: "Can Claude review a contract?"
    a: "It can read one and tell you what it says: what each side has to do, which dates and notice periods it names, which clauses look unusual. That is what the contract says, not legal advice, so have a lawyer check anything that matters before you sign. In cl_quick, the whole PDF goes to Anthropic under the profile's account."
  - q: "Can Claude summarize a PDF over 100 pages?"
    a: "In the Claude app, yes. Anthropic's page takes PDFs up to 1,000 pages and reads text only past 100. cl_quick refuses one over 100 pages with a line such as \"too long: 140 pages, up to 100\". Split it into parts, and start a new chat for any part that would take the chat past 100 pages."
  - q: "Can Claude compare two PDFs?"
    a: "Yes, if both fit. In cl_quick a message takes up to 5 attachments, pictures included, and a chat holds about 20 MB and 100 PDF pages in all, counting what was sent earlier. Two 40-page PDFs fit if they stay under 20 MB together; two 60-page ones don't. Ask for page numbers with each difference."
  - q: "Can Claude read a password-protected PDF?"
    a: "Not in cl_quick, which refuses a password-protected PDF with a muted line over the field. Anthropic's PDF docs set the same rule for the API: a standard PDF, with no passwords or encryption. If you're allowed to, save an unprotected copy first and drop that one instead."
sources:
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-13
    supports: "Intro (your own Claude Code on the profile's account in use, counts against its limits, quick chats are incognito, the exact sentence); The chat (Files: PDFs up to 15 MB and 100 pages, text and code files up to 400 KB, dropped from Finder on the bar or the chat window or copied in Finder and pasted with ⌘V, chips next to the thumbnails with a symbol, the name and the page count, a ✕ on each, 5 attachments a message with the pictures, per chat about 20 MB, 100 PDF pages and 400 KB of text files counting what was sent earlier and what waits, ✕ gives the room back, a new chat starts from nothing, a muted line past the limit, Claude gets no access to your files or folders, Word, Excel, zip, binaries, text that isn't UTF-8 and a password-protected PDF refused, 'cl_quick can't read .docx files yet.', 'too long: 140 pages, up to 100', a file alone is a message, the chat shows chips and never the content, 'Prompt is too long' ends the chat and Retry asks again in a new one; Images: thumbnails over the field, an image counts as an attachment; Copy under each answer; ⌘⇧C copies the latest complete answer; the mic button and ⌘D start Dictation; Ask about the selected text: right-click ▸ Services ▸ Ask cl_quick, the selection quoted in the field and not sent, no Accessibility permission, a selection over 20,000 characters is cut); What it keeps, and what it sends (attached files go to Claude Code inside the message as document blocks in the same connection as the text, kept in memory only, nothing copied to a temporary file, a cache or the app's folder, a dropped file is only read, Claude Code has no file tools and sees nothing but what you attached, files stay in the running chat's conversation until it ends, under the same account); Install (Apple silicon, macOS 13 or later, Claude Code signed in); the closing line (independent, not affiliated with, endorsed by or sponsored by Anthropic)."
    quote: "kept in memory only"
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-13
    supports: "The 'Files in the chat' entry: PDFs and text files dropped or pasted, chips, go with the message as documents so Claude reads them, the limits (PDF 15 MB and 100 pages, text file 400 KB, 5 attachments with pictures, per chat 20 MB, 100 PDF pages, 400 KB of text files), what is refused, kept in memory only and never written anywhere; the 'Ask about the selected text' entry; the 'Incognito chats' entry (a chat ends after 15 minutes idle)."
  - title: "Claude Help Center: Upload files to Claude"
    url: "https://support.claude.com/en/articles/8241126-upload-files-to-claude"
    checked: 2026-11-13
    supports: "Dated July 23, 2026. PDF is among the document types Claude works with; files attach from the + button or by drag and drop; chat uploads 500MB per file and up to 20 files per chat; PDFs are limited to 1000 pages; Claude analyzes both text and visual elements (images, charts, graphics) in PDFs of 100 pages or fewer, and text only for 101 to 1000 pages; a PDF over 1000 pages gets an 'Uploaded file is too large' error; project files 30MB per file; tips: use the PDF page numbers shown in your PDF viewer, not the ones printed on the document, and divide larger files into smaller sections."
    quote: "Claude analyzes both text and visual elements (like images, charts, and graphics) in PDFs of 100 pages or fewer."
  - title: "Claude API docs: PDF support"
    url: "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    checked: 2026-11-13
    supports: "You can ask Claude about text, pictures, charts and tables in PDFs; use cases include financial reports and legal documents; the format must be a standard PDF with no passwords or encryption; how it works: each page is converted to an image and the text of each page is extracted and provided alongside it; best practices: use logical page numbers from the PDF viewer in prompts, split large PDFs into chunks when needed."
    quote: "Standard PDF (no passwords/encryption)"
related:
  - /
  - /faq/
  - /install/
  - /use-cases/claude-code-incognito/
---

Can Claude summarize PDFs? Yes. Anthropic's Help Center lists PDF among the documents Claude works with, and in the Claude app you attach one to a chat. On a Mac there's a shorter way when you're busy in another app: cl_quick, a free macOS menu bar app, takes a PDF dropped from Finder on its chat bar, and your own Claude Code answers. It runs on your own Claude Code sign-in, so every chat counts against that account's Claude plan limits, and the PDF goes to Anthropic under the profile's account, as your messages do. cl_quick is independent and not affiliated with Anthropic.

It suits the PDF you've just been sent: an invoice to check, a contract to read through, a paper you need the gist of before a meeting. You open a [Claude quick chat](/) over the app you're in, not another window or a browser tab.

## What Anthropic's page says about PDFs

Anthropic's Help Center page "Upload files to Claude", read on 13 November 2026, gives these numbers for the Claude app:

| In the Claude app | What the page says |
|---|---|
| File size in a chat | 500 MB per file |
| Files in a chat | Up to 20 |
| PDF length | Up to 1,000 pages |
| PDFs of 100 pages or fewer | Text and visual elements (images, charts, graphics) are analyzed |
| PDFs of 101 to 1,000 pages | Text only |
| Project files | 30 MB per file |

A PDF over 1,000 pages gets an "Uploaded file is too large" error. Anthropic's API docs explain how the reading works. Each page is turned into an image, and the page's extracted text goes along with it, so Claude can answer about charts and tables as well as words. The API takes a standard PDF, with no passwords or encryption.

cl_quick's limits are lower, and they come further down. {{live:/blog/claude-file-upload-limits/}}The [Claude file upload limit](/blog/claude-file-upload-limits/) article puts both sets of numbers side by side.{{/live}}

## Ask about a PDF from any app

1. Press the shortcut, ⌥Space by default. The chat bar opens over the app you're in, and no other app comes forward.
2. Drop the PDF on the bar from Finder. Or copy it in Finder and press ⌘V in the field.
3. A chip shows over the field with a document symbol, the file's name and its page count. Its **✕** takes it off again.
4. Type the question and press Return. The bar becomes the chat window, and the answer streams in.

![cl_quick chat with a PDF and a CSV file attached](/img/qc-files.webp "cl_quick's chat window, drawn from sample data: Sample invoice 42.pdf (12 pages) and sample.csv as chips, the question “What is in these two files? One line each.”, a one-line answer for each, and notes.md waiting in the field.")

A PDF alone is a message too, so you can drop it, press Return and ask in the next message. Follow-ups go to the same running Claude Code, and the PDF stays in the chat's conversation until the chat ends. You don't drop it again for a second question. {{live:/use-cases/claude-read-csv/}}The CSV file in the picture has a page of its own, on whether [Claude can read CSV files](/use-cases/claude-read-csv/) and what to ask of one.{{/live}}

The chat shows the chips, never the file's content. Each answer has Copy under it, and ⌘⇧C copies the latest complete answer. If you'd rather speak the question, the mic button and ⌘D start macOS Dictation in the field, and the page on [voice input on a Mac](/use-cases/claude-voice-input-mac/) has the details.

## Prompts that help Claude summarize PDF files

"Summarize this" gets a summary. A narrow question gets a narrow answer, and that's easier to check.

| Document | A prompt to start with |
|---|---|
| Invoice | "Who is this from, what is the total, and when is it due?" |
| Contract | "What does this oblige me to do? List the dates and notice periods it names." |
| Paper | "What question does it ask, what method does it use, and what did it find?" |
| Report | "Give me five bullets, each with the page it comes from." |
| Manual | "How do I reset the device? Quote the steps." |

Two habits help. Anthropic's Help Center suggests using the page numbers your PDF viewer shows, not the ones printed on the pages, so ask "what does the table on page 7 say?" rather than "the table in the middle". And ask for page numbers back, as in the report prompt, so you can open the PDF and check the line yourself.

With a contract, the answer is what it says, not legal advice. Claude can list the obligations, the dates and the clauses that look unusual. Whether to sign is your call, and a lawyer's where it matters. A summary is no substitute for reading the clause that affects you.

Sometimes one passage is enough. If your PDF viewer offers selected text to the Services menu, select the paragraph and choose right-click ▸ Services ▸ **Ask cl_quick**. The bar opens with the selection quoted in the field, ready to edit and not yet sent. macOS hands the text over, so there's no Accessibility permission to give, and a selection over 20,000 characters is cut with a line saying so. If Ask cl_quick isn't in that menu, copy the passage and paste it into the field instead. The [floating window](/use-cases/claude-code-floating-window/) page covers the rest of the chat.

Pictures count as attachments too. A screenshot of a bank statement line or a photo of a delivery note can go in the same message as the PDF, up to 5 attachments in all.

![cl_quick bar with a PDF, a picture and a CSV file attached](/img/qc-files-bar.webp "cl_quick's chat bar, drawn from sample data: a 12-page PDF, a picture and a CSV file, each with its ✕, and the question “Compare the picture with the invoice.”")

## The limits in cl_quick

| What | Limit |
|---|---|
| One PDF | 15 MB and 100 pages |
| Attachments in a message | 5, counting pictures |
| Attachments in a chat | About 20 MB in all |
| PDF pages in a chat | 100 in all |
| Text files in a chat | 400 KB in all |

The chat limits count what was sent earlier in it as well as what waits in the field, because the whole conversation goes to the model with every message. The **✕** on a chip gives its room back, and New chat (⌘N) starts from nothing.

Past a limit, a muted line over the field says so, and by how much: "too long: 140 pages, up to 100". A password-protected PDF is refused with a muted line too. So are Word and Excel files, zips, binaries and text that isn't UTF-8; a Word file gets "cl_quick can't read .docx files yet." If a long chat finally outgrows the model ("Prompt is too long"), the chat ends with a line saying so, and **Retry** asks the question again in a new one.

A PDF over 100 pages has to be split first. Anthropic's Help Center and its PDF docs both suggest dividing large files into smaller parts. Since a chat holds 100 PDF pages in all, a part that would go past that needs a new chat. Or use the Claude app, which takes up to 1,000 pages, though past 100 it reads the text only.

## What happens to the file

**Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account.** cl_quick's README is exact about files. They go to Claude Code inside the message they're attached to, in the same connection as the text, and are kept in memory only. Nothing is copied to a temporary file, a cache or cl_quick's own folder, and a file you drop is only read. Claude Code has no file tools here, so it sees nothing but what you attached. It can't open anything else on your Mac.

None of that keeps the PDF on your Mac. It goes to Anthropic under the profile's account, as your messages do, and stays in the running chat's conversation until the chat ends. So think about what you drop. A contract with a client's name in it goes where any Claude Code message goes. What [Claude Code in incognito](/use-cases/claude-code-incognito/) covers, and what it doesn't, has its own page.

## When the Claude app or Claude Code fits better

cl_quick is for the quick one: a PDF, a question, an answer, and the window goes away. Reach for something else when:

- **The PDF is long.** Anthropic's page takes up to 1,000 pages in the Claude app. cl_quick stops at 100.
- **You'll come back to it.** cl_quick saves nothing, and a chat ends after 15 minutes idle, so copy the answers you want to keep. The Claude app has projects, with files up to 30 MB each by Anthropic's page.
- **The job spans many files.** cl_quick gives Claude Code no file tools, so it can't walk a folder. That's work for Claude Code in a terminal.

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, and the [FAQ](/faq/) answers what it keeps and what it sends.
