#!/usr/bin/env bash
# Renders the site's pictures of the app with cl_quick's own renderer (sample data only) and turns them into
# public/img/*.webp (cwebp -q 82, no metadata, each under 100 KB).
#
#   scripts/render-app-images.sh [PATH/TO/cl_quick]       (default: ../cl_quick/build/cl_quick)
#
# Build the app first: `cd ../cl_quick && ./build.sh --no-install` (it only builds into ./build, installs nothing).
# Needs macOS (the app), Python with Pillow, and cwebp (brew install webp).
#
#   qc-bar          state bar          the empty bar, "Ask anything"
#   qc-typing       state typing       a question typed in the bar
#   qc-answer       state answer       the chat window with an answer
#   qc-full         state switch       a full week: Ask on Work, Switch to … (addresses masked)
#   qc-ended        state ended-idle   the line under a chat that ended after 15 minutes idle
#   qc-dictating    state dictating    the mic button on
#   settings-accounts  settings page accounts-two   the Accounts card of a profile (cropped)
#   settings-general   settings page general        Model, Thinking, Open at login (cropped; the Shortcut row's sample pick is left out)
# The renderer draws the card on a plain grey with a 30 pt margin: the chat pictures are cropped to the card and
# given its rounded corners as transparency, so they sit on the site's desktop.
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
app="${1:-$here/../../cl_quick/build/cl_quick}"
out="$here/../public/img"
tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT
mkdir -p "$out"

chat() {  # NAME STATE [HEIGHT]  (width 440 pt; windows 440 pt high so they match each other)
  env QC_RENDER_WIDTH=440 ${3:+QC_RENDER_HEIGHT=$3} "$app" --render-quick-chat "$tmp/$1.png" "$2"
}
settings() {  # NAME PAGE
  env QC_RENDER_WIDTH=720 "$app" --render-settings "$tmp/$1.png" "$2"
}
chat qc-bar bar
chat qc-typing typing
chat qc-answer answer 440
chat qc-full switch
chat qc-ended ended-idle 440
chat qc-dictating dictating
settings settings-accounts accounts-two
settings settings-general general

python3 "$here/prepare-images.py" "$tmp" "$tmp/out"
for f in "$tmp"/out/*.png; do
  n="$(basename "$f" .png)"
  cwebp -quiet -q 82 -metadata none "$f" -o "$out/$n.webp"
  size=$(wc -c < "$out/$n.webp")
  echo "wrote public/img/$n.webp  $((size / 1024)) KB"
  [ "$size" -lt 102400 ] || { echo "$n.webp is over 100 KB" >&2; exit 1; }
done
