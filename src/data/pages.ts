// The pages that are not in a content collection: the one place for each page's title and description. The pages read
// them from here, with the page's last-change date from dates.mjs (their meta tags, h1 and share cards), and the Related cards and /llms.txt show them.
// Limits (n-uf-seo): title at most 60 characters, description 120 to 155.
import { updated } from "./dates.mjs";

export interface PageInfo { path: string; title: string; description: string; updated: string }

export const pages: PageInfo[] = [
  { path: "/", updated: updated["/"], title: "Claude quick chat for Mac: cl_quick, a free app",
    description: "A free Mac menu bar app for a Claude quick chat: press ⌥Space over any app, and your own Claude Code sign-in answers in a floating chat." },
  { path: "/install/", updated: updated["/install/"], title: "Install cl_quick: what it needs on a Mac",
    description: "cl_quick's first release isn't out yet. It needs an Apple silicon Mac, macOS 13 or later and a signed-in Claude Code. Here is how it works." },
  { path: "/faq/", updated: updated["/faq/"], title: "cl_quick FAQ: incognito, accounts, what it sends",
    description: "What cl_quick keeps and sends, what incognito means, how accounts switch, and how the model, thinking, shortcut and voice controls work." },
];
export const pageOf = (path: string): PageInfo => {
  const p = pages.find((x) => x.path === path);
  if (!p) throw new Error(`no fixed page ${path}`);
  return p;
};
