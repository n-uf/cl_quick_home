// /llms.txt: a plain-text summary of the site for AI tools, and every page with its address and a line about it.
import type { APIRoute } from "astro";
import { pages } from "../data/pages";
import { getUseCases, getPosts, pathOf } from "../data/content";
import { site, requires } from "../data/site";

export const GET: APIRoute = async () => {
  const useCases = await getUseCases();
  const posts = await getPosts();
  const line = (path: string, title: string, description: string) => `- [${title}](${site}${path}): ${description}`;

  const out = [
    "# cl_quick",
    "",
    `> cl_quick is a macOS menu bar app with no Dock icon (${requires}). Press ⌥Space over any app and a floating chat bar opens; the first message turns it into a chat window that floats on every Space and never brings another app forward. Your own Claude Code sign-in answers, on the profile's account in use, and the chats count against that account's limits. The chat window's header shows the 5-hour and weekly usage meters. It has profiles with several accounts each, model and thinking pickers, a mic button (macOS Dictation) and incognito chats: nothing is saved on the Mac, but the messages still go to Anthropic under the account. It is the successor of cl_audit's quick chat. It is made by n-uf (https://n-uf.com) under the PolyForm Perimeter 1.0.1 licence, and it is not affiliated with Anthropic. The first release is not out yet.`,
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
