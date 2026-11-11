// Questions and answers for the FAQ page (also its FAQPage structured data). Facts come from cl_quick's README and
// CHANGELOG only. Words: a profile is a Claude Code folder cl_quick chats on; an account is the Claude account signed in to it.
// An answer is a list of paragraphs (may hold <code>). `id` makes the question linkable (/faq/#incognito).
export interface QA { id?: string; q: string; a: string[] }
export interface Group { title: string; items: QA[] }

export const groups: Group[] = [
  { title: "The basics", items: [
    { q: "What is cl_quick?",
      a: ["A small macOS menu bar app with no Dock icon. Press ⌥Space over any app and a floating chat bar opens; the first message turns it into a small chat window that stays floating on every Space until Esc hides it. It never brings another app forward."] },
    { q: "Does cl_quick use my own Claude Code sign-in?",
      a: ["Yes. Your own Claude Code answers, on the profile's account in use, and the chat counts against that account's limits. cl_quick runs one <code>claude</code> at a time: it is kept while a chat is open and ended after 15 minutes idle."] },
    { q: "Is cl_quick made by Anthropic?",
      a: ["No. cl_quick is an independent tool from n-uf. It is not affiliated with Anthropic. Claude is a trademark of Anthropic."] },
    { q: "What does it need?",
      a: ["An Apple silicon Mac, macOS 13 or later, and Claude Code, signed in. The first release isn't out yet; the Install page has the details."] },
    { q: "Does it work with cl_audit?",
      a: ["cl_quick runs with or without cl_audit and shares nothing with it while running. It is the successor of cl_audit's quick chat: on its first run it copies cl_audit's old quick chat settings (the shortcut, model and thinking), if there are any."] },
  ] },
  { title: "Incognito, and what it keeps and sends", items: [
    { id: "incognito", q: "What does incognito mean in cl_quick?",
      a: ["Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. It is not Anthropic's own incognito mode.",
          "A chat lives only in the running <code>claude</code>, which runs with <code>--no-session-persistence</code>, so it writes no transcript and a chat is never resumed."] },
    { q: "When does a chat end?",
      a: ["After 15 minutes idle (window open or hidden), on New chat (⌘N), on another profile or account, if <code>claude</code> crashes or needs a sign-in, and when cl_quick quits. The window then says \"This chat ended after 15 minutes idle. Nothing was saved.\" (or the reason that fits) and the next message starts a new chat. A chat never continues on another account."] },
    { id: "keeps", q: "What does cl_quick keep on my Mac?",
      a: ["Its own folder, <code>~/Library/Application Support/cl_quick/</code>: its profiles (with the addresses and ids of their accounts, never tokens), settings, the weeks last reported per account, and the work folders Claude Code runs in. Outside it: the login item, and any folder that Sign in another account… made (a Claude Code folder, which Remove leaves).",
          "Chats: nothing. Checked on a signed-in folder (Claude Code 2.1.318): no file names the chat's session id or work folder, and no folder for it appears under <code>projects/</code>. What any <code>claude</code> start still does, chat or not: it may refresh its feature-flag cache timestamp in the profile's <code>.claude.json</code> and take a backup copy of that file."] },
    { q: "What does cl_quick send, and to whom?",
      a: ["Nothing but your messages, through Claude Code, to Anthropic under the profile's account. Claude Code runs with no tools, no MCP servers, no settings files and its non-essential traffic (telemetry, error reports, update checks) off. It gets only an allowlisted part of the Mac's environment (who you are, the language, proxies and certificates); the rest of your shell's environment is left out."] },
    { q: "How do I remove everything cl_quick keeps?",
      a: ["Settings ▸ General ▸ Files ▸ Remove cl_quick data… moves cl_quick's folder and any old chats to the Trash, turns the login item off and quits. Your Claude Code folders, their sign-ins and their other sessions stay."] },
  ] },
  { title: "Profiles and accounts", items: [
    { q: "What is a profile?",
      a: ["A Claude Code folder cl_quick chats on: <code>~/.claude</code>, a <code>~/.claude-*</code> folder, or any folder set with <code>CLAUDE_CONFIG_DIR</code>. On its first run cl_quick takes every one it finds that is signed in, named after the folder (Main for <code>~/.claude</code>, Work for <code>~/.claude-work</code>). Two folders signed in to the same account make one profile, <code>~/.claude</code> first."] },
    { q: "Can one profile have more than one account?",
      a: ["Yes. A Claude Code folder holds one signed-in account at a time, so a profile remembers the accounts that have been signed in to its folder: the one signed in now is in use, the others are on standby. There are no helper folders: one profile, one folder."] },
    { id: "switching", q: "How do I switch to another account?",
      a: ["On the profile's card in Settings, <b>Switch to this account…</b> changes the account in use, <b>Sign in again…</b> renews the one in use, and <b>Add an account…</b> takes an address and switches to it.",
          "cl_quick asks first (\"Switch Main to p•••@example.com?\"), because every Claude Code session using that folder moves to the account when it next renews its sign-in. Then Claude Code's own sign-in (<code>claude auth login --email …</code>) opens in Terminal and finishes in your browser. The browser's claude.ai session decides which account actually signs in, so cl_quick checks the result: it looks at the folder's <code>.claude.json</code> every 2 seconds, for at most 10 minutes, until the account changes."] },
    { q: "What if the wrong account signs in, or nothing happens?",
      a: ["If another account signed in, the chat says so (\"Signed in as m•••@example.com, not p•••@example.com\") and offers Sign in again. After 10 minutes with no change cl_quick stops looking and says \"No sign-in in 10 minutes.\", in the chat and on the profile's card, with Sign in again and Dismiss."] },
    { q: "Does cl_quick see my password or token?",
      a: ["No. It never sees a password or a token and never touches the Keychain. It reads only the addresses and ids in each folder's own <code>.claude.json</code>. Addresses are masked in cl_quick (p•••@example.com), except in the chat's profile menu, where each profile's row shows the address of its account in use, blurred until the pointer is on it."] },
    { q: "How do I add a profile?",
      a: ["The <b>+</b> tile in Settings adds one: a folder found, Choose a folder… (it must be a signed-in Claude Code folder), or Sign in another account…, which makes a new folder and opens Claude Code's own sign-in for it in Terminal."] },
  ] },
  { title: "Limits", items: [
    { q: "Where do the 5-hour and weekly numbers come from?",
      a: ["From the chat's own Claude Code, using its own sign-in and never the Keychain: it starts as the bar opens, and is asked for the account's limits then, after each answer, and when the bar opens again (at most once a minute). That request (<code>get_usage</code>) sends nothing to a model. After each answer Claude Code also reports them on its own, which stays as the fallback. Standby accounts show no usage.",
          "Each account keeps its own week. The colours are green, amber from 50%, red from 80% and crimson from 95%."] },
    { q: "What happens when a limit is full?",
      a: ["The chat says when it resets and offers the profile with the most room: <b>Ask on Work</b> sends your question there. If the profile has a standby account with room, it also offers <b>Switch to p•••@example.com…</b>: after the sign-in the chat starts a new chat on the same profile (a chat may not carry across accounts) and sends what you had typed, with a line saying \"Main is on p•••@example.com now.\""] },
    { q: "What if Claude Code isn't signed in, or stops mid-answer?",
      a: ["If a profile's Claude Code isn't signed in, the notice offers <b>Sign in…</b> (Claude Code's own sign-in, in Terminal) and Try again. If Claude Code stops mid-answer, the window keeps what arrived and says the chat ended; Retry asks the last question in a new chat. <b>Stop</b> ends the answer where it is and the chat goes on."] },
  ] },
  { title: "Model, thinking, shortcut and voice", items: [
    { q: "How do I pick the model and thinking?",
      a: ["Under the field: the profile (its dot in the week's colour), the model (Haiku by default) and thinking (off by default). A pick holds for that chat; a new chat goes back to the defaults, which Settings ▸ General sets.",
          "The model is one of four families, Haiku, Sonnet, Opus and Fable, each the newest the account has, by Claude Code's own list. A family the account lacks isn't offered. Thinking is Off or the efforts the chosen model takes (Low, Medium, High, Extra, Max); a step it doesn't take moves to the nearest.",
          "Click a bar to pick it, or the right half of a control's label for the next value and the left half for the one before. The scroll wheel and ⌥⌘ arrows step too, and the keyboard button at the end of the controls lists every key."] },
    { q: "How do I change the shortcut?",
      a: ["Settings ▸ General ▸ Shortcut: ⌥Space by default, four other Space shortcuts, Other… for any key with ⌘, ⌃ or ⌥, or Off. It is checked against macOS's own shortcuts that use Space (Spotlight, Finder's search, the input sources). Other apps' shortcuts can't be read and macOS lets two apps register the same key, so a clash with another app isn't caught: if the key opens something else too, pick another.",
          "It is registered the way macOS's own app shortcuts are, so there is no Accessibility permission to give."] },
    { q: "Can I use my voice?",
      a: ["Yes. The mic button left of Send starts macOS Dictation into the field. cl_quick stays in the background: the panel takes the keyboard as it does for the shortcut, so Dictation types into the field and not into the app behind. A click again, sending, a new chat or hiding stops it. With Dictation off in macOS, the chat says once where to turn it on."] },
    { q: "Which keys work in the chat?",
      a: ["Return sends, Shift-Return adds a line, Esc or ⌘W hides the chat, and ⌘N starts a new chat. Answers stream in as Markdown, and code blocks have Copy."] },
  ] },
];

export const allQA = groups.flatMap((g) => g.items);
/** An answer paragraph without its HTML, for the structured data. */
export const plain = (html: string) => html.replace(/<[^>]+>/g, "");
