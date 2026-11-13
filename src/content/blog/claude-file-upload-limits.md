---
title: "Claude file upload limit: size, files per chat, PDF pages"
description: "The Claude file upload limit, as Anthropic's help page reads in November 2026: 500 MB per file, 20 files a chat, 30 MB in projects, PDFs to 1,000 pages."
h1: "Claude file upload limits: what Anthropic's pages say today"
mainKeyword: "claude file upload limit"
kind: what-is
draft: true
published: 2027-01-05
updated: 2027-01-05
author: n-uf
takeaways:
  - "Anthropic's help page for the Claude app, dated 23 July 2026, lists chat uploads at 500 MB per file and up to 20 files per chat, with images up to 8000x8000 pixels and PDFs up to 1,000 pages."
  - "Project files are capped lower, at 30 MB per file. The page sets no file-count limit for a project, but the total content has to fit Claude's context window."
  - "Claude reads text and visuals in PDFs of 100 pages or fewer, and only text for 101 to 1,000 pages. A PDF over 1,000 pages gets an \"Uploaded file is too large\" error."
  - "cl_quick, an independent free Mac app, takes less: a PDF up to 15 MB and 100 pages, a text file up to 400 KB, and 5 attachments a message."
  - "The Claude app takes more file types and bigger files than cl_quick, including Word and, with code execution and file creation enabled, Excel."
faq:
  - q: "How many files can I upload to Claude in one chat?"
    a: "Up to 20 files per chat, by Anthropic's \"Upload files to Claude\" page as it reads in November 2026. Each can be up to 500 MB, and a PDF up to 1,000 pages. Anthropic's Vision docs give their own image count for claude.ai: 20 per message. A project sets no file count, but its content must fit the context window."
  - q: "Is Claude's 1,000-page PDF limit the same as the 100-page one?"
    a: "No, they are two thresholds on the same help page. Claude reads both text and visuals, such as charts and graphics, in PDFs of 100 pages or fewer. For 101 to 1,000 pages it reads text only. Past 1,000 pages the upload fails with an \"Uploaded file is too large\" error."
  - q: "Why does Claude refuse a file that is under the size limit?"
    a: "Because size isn't the only limit. Anthropic's help page says additional token limits may apply based on the length of the extracted content, and every chat has a context window. Anthropic's PDF docs for the API add that dense PDFs, with small fonts or heavy graphics, can fill the context window before the page limit."
  - q: "How big can an image be in a Claude chat?"
    a: "Anthropic's pages give two figures. The \"Upload files to Claude\" help page allows 500 MB per file in a chat, with images up to 8000x8000 pixels. The Vision docs give a maximum of 10 MB per image and 20 images per message on claude.ai. As of November 2026, neither page mentions the other's figure."
  - q: "Can I upload bigger files to a Claude project than to a chat?"
    a: "No, smaller ones. A project file is capped at 30 MB, against 500 MB per file in a chat, by Anthropic's help page. In exchange, a project has no file-count cap and its files stay for later chats. Project files are read as extracted text only, except multimodal PDFs."
sources:
  - title: "Claude Help Center: Upload files to Claude"
    url: "https://support.claude.com/en/articles/8241126-upload-files-to-claude"
    checked: 2026-11-13
    supports: "Dated July 23, 2026 (unchanged on re-read). Document types (PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON, XLSX; XLSX needs code execution and file creation enabled); image types (JPEG, PNG, GIF, WebP); upload from the \"+\" button, drag and drop, or paste images; files go to a chat or to a project's Files section for persistent reference across conversations; chat uploads 500MB per file, up to 20 files per chat, images up to 8000x8000 pixels, PDFs limited to 1000 pages; project files 30MB per file, unlimited number but total content must fit the context window, text extraction only except multimodal PDFs; additional token limits may apply based on the length of extracted content; PDFs of 100 pages or fewer get text and visuals, 101 to 1000 pages text only, over 1000 an \"Uploaded file is too large\" error; tips (use the PDF viewer's page numbers, divide larger files into smaller sections, non-PDF documents give text only and embedded images aren't read). The page gives no limits by plan and no separate image size. Whole page read."
    quote: "Number of pages: PDFs are limited to 1000 pages"
  - title: "Claude Help Center: How do usage and length limits work?"
    url: "https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work"
    checked: 2026-11-13
    supports: "Usage limits (a session limit that resets every five hours, weekly limits) are separate from length limits, which relate to the context window; on paid plans the newest models support up to a 1M-token context window and others 500K or 200K; a portion is reserved for the response; automatic context management with code execution enabled (earlier messages summarized), very large first messages may still hit context limits; projects use retrieval-augmented generation, loading only relevant content, to work with larger amounts of information; when you hit a length limit, start a new conversation or use projects. Marked 'Updated over a week ago' when re-read; whole page read."
    quote: "Length limits relate to Claude's context window"
  - title: "Claude Docs: PDF support"
    url: "https://platform.claude.com/docs/en/build-with-claude/pdf-support"
    checked: 2026-11-13
    supports: "API requests: maximum request size 128 MB on the first-party Claude API; maximum 600 pages per request (100 when the request's context window is under 1M tokens); standard PDF, no passwords or encryption; dense PDFs (many small-font pages, complex tables or heavy graphics) can fill the context window before the page limit; splitting into sections and downsampling embedded images can help; plain text files (.txt, .csv, .md) can be used in document blocks; binary formats such as .xlsx or .docx are not supported in document blocks, so convert them to text or PDF first."
    quote: "Maximum pages per request"
  - title: "Claude Docs: Files API"
    url: "https://platform.claude.com/docs/en/build-with-claude/files"
    checked: 2026-11-13
    supports: "Maximum file size 500 MB for each file; 1 TB storage limit for each organization."
  - title: "Claude Docs: Vision"
    url: "https://platform.claude.com/docs/en/build-with-claude/vision"
    checked: 2026-11-13
    supports: "Request limits: 20 images for each message on claude.ai; 100 per API request for models with a 200k-token context window, 600 for all others; maximum 8000x8000 px per image; maximum size per image 10 MB on claude.ai (10 MB base64-encoded on the Claude API, 5 MB on Amazon Bedrock). The help page gives 500 MB per chat file and no separate image size, so the article states both, each attributed."
    quote: "10 MB on claude.ai"
  - title: "Claude Code docs: Tools reference"
    url: "https://code.claude.com/docs/en/tools-reference"
    checked: 2026-11-13
    supports: "Read tool: PNG, JPEG, GIF and WebP images are returned as visual content and large ones are resized and recompressed; an image file over 128 MB is refused; short PDFs are read whole, longer than 10 pages in ranges of up to 20 pages at a time (needs pdftoppm from poppler-utils); one text read returns at most 25,000 tokens by default and refuses a whole file over 256 KB, so Claude reads a larger file in pages with offset and limit; files with a binary extension such as .xlsx, .parquet, .heic or .zip are refused, and the error suggests a skill for that file type if one is available, or else a shell command or script that reads the format. Re-read on 2026-11-13 (the .md copy of the page)."
    quote: "refuses a whole file over 256 KB"
  - title: "cl_quick README"
    url: "https://github.com/n-uf/cl_quick/blob/main/README.md"
    checked: 2026-11-13
    supports: "The chat ▸ Files (drop from Finder or copy and ⌘V; a PDF up to 15 MB and 100 pages, text and code files up to 400 KB in UTF-8, the list of text types; chips with a symbol, name and page count or size, each with a ✕; 5 attachments a message with the pictures; the whole conversation goes to the model with every message, so a chat holds at most about 20 MB, 100 PDF pages and 400 KB of text files in all, counting what was sent earlier and what waits, ✕ gives the room back, a new chat starts from nothing; past that a muted line says so; Claude gets no access to files or folders; refusals: Word, Excel, zip, binaries, non-UTF-8 text and password-protected PDFs, with \"cl_quick can't read .docx files yet.\" and \"too long: 140 pages, up to 100\"; a long chat that outgrows the model (\"Prompt is too long\") ends with a line saying so, and Retry asks again in a new one); The chat ▸ Images (up to 5 a message, scaled in memory to 1568 px on the long side, a picture file over 256 MB refused unread); The chat ▸ Ask about the selected text (20,000 characters); What it keeps, and what it sends (attached files go inside the message as document blocks, kept in memory only, nothing copied to a temporary file, a cache or the app's folder; they stay under the same account; Claude Code has no file tools). Source copy: sources/README-unreleased-2026-11-13b.md, identical to main on 2026-11-13."
    quote: "a chat also holds at most about 20 MB of attachments, 100 PDF pages and 400 KB of text files in all"
  - title: "cl_quick CHANGELOG"
    url: "https://github.com/n-uf/cl_quick/blob/main/CHANGELOG.md"
    checked: 2026-11-13
    supports: "'Files in the chat': PDFs and text files, a PDF up to 15 MB and 100 pages, a text file up to 400 KB, 5 attachments a message with the pictures, per chat 20 MB for everything attached, 100 PDF pages and 400 KB of text files; the refusals; kept in memory only; a chat that outgrows the model ends with a line saying so. Source copy: sources/CHANGELOG-unreleased-2026-11-13.md, same entries as main on 2026-11-13."
related:
  - /
  - /faq/
  - /install/
  - /use-cases/claude-code-floating-window/
---

The Claude file upload limit, on Anthropic's help page as it reads in November 2026, is 500 MB per file and up to 20 files per chat. Images can be up to 8000x8000 pixels and PDFs up to 1,000 pages. Files in a project have a lower cap, 30 MB each. The page is "Upload files to Claude", dated 23 July 2026. Below, those numbers sit beside what Claude Code's docs say and what cl_quick, a free Mac menu bar app, accepts. cl_quick is independent and not affiliated with Anthropic. The Claude app takes more file types and bigger files than cl_quick does.

## Claude file upload limits at a glance

Every figure in this table comes from the pages listed as sources, read on 13 November 2026. Limits change, so check the page if a number matters. Where a page gives no figure, the cell says "Not stated". The Claude upload file size limit depends on where the file goes, so each place gets a row.

| Where | Size per file | How many | PDF pages |
| --- | --- | --- | --- |
| Claude app, in a chat | 500 MB per file (help page); 10 MB per image on claude.ai (Vision docs) | Up to 20 files per chat (help page); 20 images per message on claude.ai (Vision docs) | Up to 1,000; text and visuals up to 100 pages, text only after that |
| Claude app, in a project | 30 MB | No count limit, but total content must fit the context window | Not stated; text extraction only, except multimodal PDFs |
| Claude API | 500 MB per file in the Files API; 128 MB per request | Up to 600 images per request (100 on models with a 200k-token context window) | 600 per request (100 when the request's context window is under 1M tokens) |
| Claude Code, Read tool | An image over 128 MB is refused; by default a text file over 256 KB isn't read whole, but in pages | Not stated | Short PDFs whole; longer than 10 pages in ranges of up to 20 pages |
| cl_quick | PDF 15 MB; text or code file 400 KB (UTF-8) | 5 attachments a message, pictures included | 100 per PDF, and 100 in a whole chat |

The rows are different tools with different jobs, so a bigger number doesn't make a better tool.

On images, Anthropic's pages give two figures for claude.ai. The help page allows 500 MB per file in a chat, with images up to 8000x8000 pixels, and gives no separate size for images. The Vision docs, written for developers, give a maximum of 10 MB per image and 20 images per message on claude.ai. Neither page explains the other's number, so the table shows both, each with its page.

## Claude file upload limit per chat

For a chat, the help page gives four numbers: 500 MB per file, up to 20 files, images up to 8000x8000 pixels, and PDFs up to 1,000 pages. You add files from the "+" button in the lower left corner of the chat box, by dragging them into the chat window, or by pasting an image. The page gives no limits by plan.

A file can still fail while it's under all four. The page adds that additional token limits may apply based on the length of the extracted content. That's the context window, covered further down.

A project works differently. Files uploaded to a project's Files section stay for reference across conversations, and the cap per file drops to 30 MB. There's no count limit, but the total content has to fit within Claude's context window, and project files are read as extracted text only, except multimodal PDFs. Anthropic's page on length limits says projects use retrieval-augmented generation, loading only the relevant content into the context window, so Claude can work with larger amounts of information.

## Claude PDF page limit and size limit

People quote the 1,000-page figure, but the 100-page one changes what Claude sees.

- **100 pages or fewer:** Claude analyzes text and visual elements, such as images, charts and graphics.
- **101 to 1,000 pages:** Claude processes text only and doesn't analyze visual elements.
- **Over 1,000 pages:** you can't upload it, and you see an "Uploaded file is too large" error.

So the Claude PDF limit has two numbers, and the 100-page one limits visuals; it doesn't refuse the file. It matters most for a deck full of charts. The page also says to refer to pages by the number your PDF viewer shows, not the one printed on the page.

For developers, the API's PDF docs have their own numbers: 128 MB per request on the first-party API, and up to 600 pages per request, or 100 when the request's context window is under 1M tokens. The PDF must be a standard one, with no password or encryption. Dense PDFs, with many small-font pages, complex tables or heavy graphics, can fill the context window before the page limit.

{{live:/use-cases/claude-summarize-pdf/}}For the job itself, see how to [summarize a PDF with Claude](/use-cases/claude-summarize-pdf/) from any Mac app.{{/live}}

## Which file types does Claude accept?

The help page lists, for the Claude app, documents (PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB, JSON and XLSX) and images (JPEG, PNG, GIF and WebP). XLSX needs code execution and file creation enabled in your account. From documents other than PDFs, Claude extracts text only, so pictures embedded in, say, a Word file go unread.

CSV is on that list, so in the Claude app a CSV is a supported file type. {{live:/use-cases/claude-read-csv/}}A small one is also a quick job in [a CSV in a quick chat](/use-cases/claude-read-csv/).{{/live}}

Claude Code reads files with its Read tool. It shows PNG, JPEG, GIF and WebP images to Claude, resizing large ones, and reads long PDFs in ranges. It refuses files with an extension it treats as binary, such as .xlsx, .parquet, .heic or .zip. The error then suggests a skill for that type if there is one, or a shell command or script that reads the format.

## What cl_quick accepts

A quick chat takes a PDF or a text file, dropped from Finder or copied and pasted with ⌘V. It takes less than the Claude app. Claude Code in cl_quick has no file tools, so it sees only what you attach.

| | Limit |
| --- | --- |
| A PDF | Up to 15 MB and 100 pages |
| A text or code file | Up to 400 KB, UTF-8 (txt, Markdown, CSV, JSON, YAML, XML, HTML, logs, Swift, Python, JavaScript and TypeScript, Go, Rust and the like) |
| A message | 5 attachments, pictures included |
| A whole chat | About 20 MB of attachments, 100 PDF pages and 400 KB of text files, counting what was sent earlier and what waits in the field |
| A picture | Scaled down in memory to 1568 px on the long side; a picture file over 256 MB is refused unread |

Each file shows as a chip with its name and its page count or size, and a ✕ that takes it off again.

![cl_quick bar with a PDF chip, a picture and a CSV chip](/img/qc-files-bar.webp "cl_quick's chat bar, drawn from sample data: a 12-page PDF chip, a picture and a CSV chip, each with a ✕, over the question \"Compare the picture with the invoice.\"")

A file cl_quick can't read is refused with a muted line over the field, such as "cl_quick can't read .docx files yet." Word, Excel, zip, binaries, text that isn't UTF-8 and password-protected PDFs all get one. A file over a limit says by how much: "too long: 140 pages, up to 100".

The whole conversation goes to the model with every message, which is why a chat has totals as well as per-file limits. ✕ on a chip still in the field gives its room back, and a new chat starts from nothing.

Attached files go to Claude Code inside the message and are kept in memory only. Nothing is copied to a temporary file, a cache or cl_quick's folder, and a file you drop is only read. They still go to Anthropic under the profile's account. [What cl_quick's incognito covers](/use-cases/claude-code-incognito/) has the rest.

## Why a file fails before the number

Anthropic's help page on usage and length limits keeps two things apart. Usage limits are the 5-hour and weekly budget. Length limits are the context window, the amount Claude can work with in a single chat. A file small enough to upload still has to fit in that window, with the rest of the conversation.

On paid plans, the page says, the newest models support up to a 1M-token window and others 500K or 200K, with part of it always reserved for Claude's response. With code execution enabled, Claude summarizes earlier messages as a chat nears the limit, though very large first messages may still hit it.

cl_quick meets the same wall. If a long chat finally outgrows the model ("Prompt is too long"), the chat ends with a line saying so, and **Retry** asks the question again in a new chat. Attachments count here too, since each message carries the whole conversation.

## What to do with a file that is too big

Anthropic's help page suggests dividing a large document into smaller sections to stay within limits. The API's PDF docs say the same, and add that downsampling embedded images can help.

- **Split the PDF.** Save the chapter or the pages you need as their own PDF and attach that. Give page numbers as your PDF viewer shows them.
- **Send the part, not the file.** In cl_quick, select the text in any app, then right-click ▸ Services ▸ **Ask cl_quick**. The selection arrives in the field as a quote, up to 20,000 characters.
- **Use a project in the Claude app** for material you'll come back to. Its files stay across chats, and Anthropic's page offers projects as the way to work with larger amounts of information. Keep each file under 30 MB.
- **Start a new chat** when one fills up. In cl_quick, New chat (⌘N) starts from nothing.
- **Convert first.** Anthropic's PDF docs tell API users to convert .xlsx or .docx to text or PDF. For a quick chat, export a PDF or a CSV and attach that.

A link is another way into a chat. {{live:/use-cases/claude-read-links/}}[Can Claude read links](/use-cases/claude-read-links/) covers what a page costs and where reading stops.{{/live}}

## Where each one fits

Use the Claude app when the file is large, is a Word or Excel file, or is one of several you want in a project. It has the higher caps and the longer list of types. A quick chat fits the other case: a short PDF or a log you have open in another app, asked about from a floating window over that app. The [Claude quick chat](/) answers on your own Claude Code sign-in, and the chat counts against that account's limits.

cl_quick needs an Apple silicon Mac, macOS 13 or later and Claude Code, signed in. [The install page](/install/) has the steps, the [FAQ](/faq/) covers what it keeps and sends, and the [Claude Code floating window](/use-cases/claude-code-floating-window/) page shows the chat itself.
