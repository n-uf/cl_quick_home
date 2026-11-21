// The home page links every live use case with a short label (src/pages/index.astro): the page's `key`, else its title up
// to the first ":" or "?". A scheduled draft goes live on its day with nobody looking at the home, so every use case,
// drafts included, must already have a label of 28 characters or fewer (run: npm test).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";

const dir = new URL("../src/content/use-cases/", import.meta.url);
const field = (front, name) => front.match(new RegExp(`^${name}:\\s*"?(.*?)"?\\s*$`, "m"))?.[1];

for (const file of readdirSync(dir).filter((f) => f.endsWith(".md"))) {
  test(`${file}: the home page's link label is 28 characters or fewer`, () => {
    const front = readFileSync(new URL(file, dir), "utf8").match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
    const key = field(front, "key");
    const title = field(front, "title");
    assert.ok(title, "has a title");
    const label = key ?? title.split(/[:?]/)[0];
    assert.ok(label.length >= 3 && label.length <= 28, `"${label}" is ${label.length} characters`);
  });
}
