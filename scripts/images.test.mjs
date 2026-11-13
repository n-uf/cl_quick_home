// Tests for src/data/images.ts (withImages): the qc-* app renders in content pages become sized figures (run: npm test).
import { test } from "node:test";
import assert from "node:assert/strict";
import { withImages } from "../src/data/images.ts";

const img = (src, alt = "a chat bar", title = "the caption") => `<img src="${src}" alt="${alt}" title="${title}">`;

test("a qc image in its own paragraph becomes a sized, lazy figure with its caption", () => {
  const out = withImages(`<p>${img("/img/qc-files.webp")}</p>`);
  assert.equal(
    out,
    '<figure class="shot"><img src="/img/qc-files.webp" alt="a chat bar" width="880" height="972" loading="lazy" decoding="async"><figcaption>the caption</figcaption></figure>',
  );
});

test("a qc image without a title gets no caption, and one inside other text is sized too", () => {
  const out = withImages(`<p>see ${`<img src="/img/qc-typing.webp" alt="bar">`}</p>`);
  assert.match(out, /<img src="\/img\/qc-typing.webp" alt="bar" width="880" height="154" loading="lazy"/);
  assert.doesNotMatch(out, /figcaption/);
});

test("a qc image with no registered size fails the build", () => {
  assert.throws(() => withImages(`<p>${img("/img/qc-unknown.webp")}</p>`), /qc-unknown\.webp is not in src\/data\/content-images\.json/);
});

test("an alt text over 60 characters fails the build", () => {
  assert.throws(() => withImages(`<p>${img("/img/qc-files.webp", "x".repeat(61))}</p>`), /61 characters \(60 at most\)/);
});

test("a guide image still needs its size in guide-images.json, and other images are left alone", () => {
  assert.throws(() => withImages(`<p>${img("/img/guides/none.webp")}</p>`), /none\.webp is not in src\/data\/guide-images\.json/);
  const other = `<p>${img("/img/og.png")}</p>`;
  assert.equal(withImages(other), other);
});
