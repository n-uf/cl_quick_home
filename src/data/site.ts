// Shared site constants. cl_quick's current release is 26.11.1 (on GitHub Releases). The download address always
// points at the newest release, so no version is named here; the Install page names the current one once.
export const site = "https://cl-quick.n-uf.com";
export const name = "cl_quick";

/** The targets of the big keys on the home page. The repository is public (2026-11-11), so its key is a link. The
 *  download is the disk image of the latest GitHub release (cl_quick.dmg), so it follows each new release without an
 *  edit here. The Blog key follows the content layer: it links /blog/ once there is a live article. */
export const release: { downloadUrl: string | null; repoUrl: string | null } = {
  downloadUrl: "https://github.com/n-uf/cl_quick/releases/latest/download/cl_quick.dmg",
  repoUrl: "https://github.com/n-uf/cl_quick",
};

/** The same app as a zip, from the latest release (README ▸ Install: "or use cl_quick.zip, the same app"). */
export const zipUrl = "https://github.com/n-uf/cl_quick/releases/latest/download/cl_quick.zip";

/** The current release's page (26.11.1), named once on the Install page. */
export const currentReleaseUrl = "https://github.com/n-uf/cl_quick/releases/tag/v26.11.1";

/** What cl_quick needs (README ▸ Install). */
export const requires = "Apple silicon · macOS 13 or later · Claude Code signed in";

/** "2026-10-24" -> "24 Oct 2026". Used for the dates on use-case pages and articles (content.ts). */
export function releasedText(date: string): string {
  const [y, m, d] = date.split("-").map(Number);
  const mon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1];
  return `${d} ${mon} ${y}`;
}
