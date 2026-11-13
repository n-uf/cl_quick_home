// Images in use-case pages and articles, each turned into a sized figure at build time. Two kinds:
//  - captures of the site's own demo (sample data only), in public/img/guides, made with
//    /opt/projects/claude/seo/scripts/capture-guide-images.js and saved as WebP under 100 KB with no metadata;
//    sizes in guide-images.json, keyed by the name under guides/ (the CSS size of the 2× capture);
//  - the app renders of the home page, public/img/qc-*.webp (scripts/render-app-images.sh), which a page may also
//    show; sizes in content-images.json, keyed by the file name (their pixel size, already as shown in the column).
// In markdown: ![alt text under 60 characters](/img/guides/<name>.webp "the caption") or (/img/qc-<name>.webp "...").
// Each becomes a <figure> with its width and height, so nothing moves when it loads, lazy loading, and the caption
// under it. A missing size or an alt over 60 characters fails the build.
import guideSizes from "./guide-images.json" with { type: "json" };   // the attribute lets node --test load this file too
import contentSizes from "./content-images.json" with { type: "json" };

const IMG = /<p>\s*(<img\b[^>]*\bsrc="\/img\/((?:guides\/|qc-)[^"]+)"[^>]*>)\s*<\/p>|(<img\b[^>]*\bsrc="\/img\/((?:guides\/|qc-)[^"]+)"[^>]*>)/g;
const attr = (tag: string, name: string) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];
type Sizes = Record<string, { width: number; height: number }>;

/** The rendered HTML with each guide or app image as a sized, lazy figure with its caption. */
export function withImages(html: string): string {
  return html.replace(IMG, (_m, pTag, pPath, bareTag, barePath) => {
    const tag: string = pTag ?? bareTag, path: string = pPath ?? barePath;
    const guide = path.startsWith("guides/"), name = guide ? path.slice("guides/".length) : path;
    const size = (guide ? guideSizes : contentSizes as Sizes)[name];
    if (!size) throw new Error(`image ${name} is not in src/data/${guide ? "guide-images" : "content-images"}.json`);
    const alt = attr(tag, "alt") ?? "", caption = attr(tag, "title");
    if (alt.length > 60) throw new Error(`alt text of ${name} is ${alt.length} characters (60 at most)`);
    const img = `<img src="/img/${path}" alt="${alt}" width="${size.width}" height="${size.height}" loading="lazy" decoding="async">`;
    return `<figure class="shot">${img}${caption ? `<figcaption>${caption}</figcaption>` : ""}</figure>`;
  });
}
