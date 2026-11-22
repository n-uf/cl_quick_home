// /llms.txt: a plain-text summary of the site for AI tools, and every page with its address and a line about it.
import type { APIRoute } from "astro";
import { pages } from "../data/pages";
import { getUseCases, getPosts, pathOf } from "../data/content";
import { site, requires, release } from "../data/site";

export const GET: APIRoute = async () => {
  const useCases = await getUseCases();
  const posts = await getPosts();
  const line = (path: string, title: string, description: string) => `- [${title}](${site}${path}): ${description}`;

  const out = [
    "# cl_quick",
    "",
    `> cl_quick is a free menu bar app for Mac with no Dock icon (${requires}). Press ⌃⇧Space (the shortcut of a new install; ⇧⌘Space and ⌥Space are the other presets) over any app and a floating chat bar opens; the first message turns it into a chat window that floats on every Space and never brings another app forward. Your own Claude Code sign-in answers, on the profile's account in use, and the chats count against that account's limits. The chat window's header shows the 5-hour and weekly usage meters, and the menu bar menu has a 5-hour and a Week bar for each profile's account in use. It has profiles with several accounts each, model and thinking pickers, a mic button (macOS Dictation, ⌘D; Return while dictating shows the text first, and a setting makes it send at once), ⇧⌘C to copy the answer in view once you have scrolled up (else the latest complete answer), fn arrows to step thinking and model, ⇧fn arrows to scroll the answers, ⌘J to jump to the latest answer, ⌘F to find text in the chat, Explain, Shorter and Ask about this on text selected in an answer, a speaker button that reads an answer aloud in the Mac's voice, ⌥⇧⌘C to copy the whole chat as Markdown, ⌘1 to ⌘5 and ⌃1 to ⌃6 to size and place the window, account addresses hidden under a blur outside Settings (a fixed stand-in is drawn, never the real text; a setting turns the blur off), chat shortcuts and paste that also work on Cyrillic layouts such as Russian and Ukrainian, images, PDFs and text files pasted or dropped into the chat (kept in memory only), Links and search (on by default: Claude Code gets its two web tools, WebFetch and WebSearch, and nothing else), custom instructions of your own (up to 1,000 characters, added after the built-in ones, for new chats), an html block in an answer shown as its page in place (isolated: nothing loads from outside, no scripts, links, forms and downloads do nothing), with a Code | Page switch and a ⤢ button that opens the page in its own window, an "Ask cl_quick" entry in the macOS Services menu for selected text, and incognito chats: nothing is saved on the Mac, but the messages, with their attachments and any page text Claude Code fetched, still go to Anthropic under the account. Apart from the messages, the one thing it sends is an update check: about once a day, an anonymous request to GitHub Releases for the latest release, which Settings ▸ General ▸ App ▸ Updates turns off. With Links and search on, Claude Code may fetch pages or search the web for an answer, and pages count toward usage. It is the successor of cl_audit's quick chat. It is made by n-uf (https://n-uf.com) under the PolyForm Perimeter 1.0.1 licence, and it is not affiliated with Anthropic. To install it, download cl_quick.dmg from the latest GitHub release (${release.downloadUrl}), open the disk image and drag cl_quick to Applications (cl_quick.zip is the same app); the first time, macOS says it can't verify the app, because cl_quick isn't signed with an Apple Developer ID yet: open System Settings ▸ Privacy & Security and click Open Anyway, once. The source is at ${release.repoUrl}.`,
    "",
    "## Pages",
    "",
    ...pages.map((p) => line(p.path, p.title, p.description)),
  ];
  if (useCases.length > 0) {
    out.push("", "## Use cases", "", line("/use-cases/", "All use cases", "What cl_quick is good for, one job at a time."),
      ...useCases.map((e) => line(pathOf("usecases", e.id), e.data.h1, e.data.description)));
  }
  if (posts.length > 0) {
    out.push("", "## Blog", "", line("/blog/", "All articles", "Short guides on using cl_quick with Claude Code."),
      ...posts.map((e) => line(pathOf("blog", e.id), e.data.h1, e.data.description)));
  }
  return new Response(out.join("\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
