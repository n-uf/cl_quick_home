// Shared site constants. cl_quick has no release yet: nothing here names a version, a download or a release address.
// When the first release is out, the hub adds them here (and the Install page reads them).
export const site = "https://cl-quick.n-uf.com";
export const name = "cl_quick";

/** What cl_quick needs (README ▸ Install). */
export const requires = "Apple silicon · macOS 13 or later · Claude Code signed in";

/** "2026-10-24" -> "24 Oct 2026". Used for the dates on use-case pages and articles (content.ts). */
export function releasedText(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
  return `${d} ${mon} ${y}`;
}
