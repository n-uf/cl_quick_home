// Questions and answers for the FAQ page (also its FAQPage structured data). Facts come from cl_quick's README and
// CHANGELOG only. Words: a profile is a Claude Code folder cl_quick chats on; an account is the Claude account signed in to it.
// An answer is a list of paragraphs (may hold <code>). `id` makes the question linkable (/faq/#incognito).
export interface QA { id?: string; q: string; a: string[] }
export interface Group { title: string; items: QA[] }

export const groups: Group[] = [
  { title: "The basics", items: [
    { q: "What is cl_quick?",
      a: ["A floating Claude chat for the Mac, on a shortcut. It is a menu bar app with no Dock icon. Press ⌥Space over any app and a chat bar opens; the first message turns it into a chat window that stays floating on every Space until Esc hides it. It never brings another app forward."] },
    { q: "Does cl_quick use my own Claude Code sign-in?",
      a: ["Yes. Your own Claude Code answers, on the profile's account in use, and the chat counts against that account's limits. cl_quick runs one <code>claude</code> at a time: it is kept while a chat is open and ended after 15 minutes idle."] },
    { q: "Is cl_quick free?",
      a: ["Yes, the app is free, and it is under 5 MB. It uses your own Claude Code sign-in, so every chat counts against the Claude plan limits of the profile's account in use, and pages read with Links and search count toward that usage too. The first release isn't out yet, so there is nothing to download so far."] },
    { q: "Is cl_quick made by Anthropic?",
      a: ["No. cl_quick is an independent tool made by n-uf, and it is not affiliated with Anthropic. Your own Claude Code answers, on the profile's account in use, and your messages go to Anthropic under that account, as any Claude Code use does. Claude is a trademark of Anthropic."] },
    { q: "What does it need?",
      a: ["An Apple silicon Mac, macOS 13 or later and Claude Code, signed in. The app itself is under 5 MB. It chats through that sign-in, so a profile needs a Claude Code folder that is signed in. The first release isn't out yet, so there is nothing to download; the Install page has the details."] },
    { q: "Does it work with cl_audit?",
      a: ["cl_quick runs with or without cl_audit and shares nothing with it while running. It is the successor of cl_audit's quick chat: on its first run it copies cl_audit's old quick chat settings (the shortcut, model and thinking), if there are any."] },
  ] },
  { title: "Incognito, and what it keeps and sends", items: [
    { id: "incognito", q: "What does incognito mean in cl_quick?",
      a: ["Quick chats are incognito: nothing is saved on this Mac. Your messages still go to Anthropic under the profile's account. It is cl_quick's own incognito, not Anthropic's incognito mode: a chat lives only in the running <code>claude</code>, which runs with <code>--no-session-persistence</code>, so it writes no transcript and a chat is never resumed."] },
    { q: "When does a chat end?",
      a: ["After 15 minutes idle (window open or hidden), on New chat (⌘N), on another profile or account, if <code>claude</code> crashes or needs a sign-in, and when cl_quick quits. After 15 minutes idle the window says \"This chat ended after 15 minutes idle. Nothing was saved.\", and the next message starts a new chat. A chat never continues on another account."] },
    { id: "keeps", q: "What does cl_quick keep on my Mac?",
      a: ["Its own folder, <code>~/Library/Application Support/cl_quick/</code>: its profiles (with the addresses and ids of their accounts, never tokens), settings, the limits last reported per account, the time of the last update check and the work folders Claude Code runs in. Chats: nothing. Files and pictures you attach are kept in memory only."] },
    { id: "sends", q: "What does cl_quick send, and to whom?",
      a: ["Your messages, with files and pictures you attach, go through Claude Code to Anthropic under the profile's account. With Links and search on, fetched page text goes to the model as well. Apart from these, the one thing cl_quick sends is its own update check: an anonymous request to GitHub about once a day, which Settings turns off."] },
    { id: "updates", q: "Does cl_quick check for updates?",
      a: ["Yes, cl_quick's own update check, unless you turn off <b>Updates</b> in Settings ▸ General (on by default). About once a day it asks GitHub Releases, anonymously, and a newer version shows as \"Update available\" in the menu bar menu, which opens the release's page. The app downloads and installs nothing. With Updates off, no request is made."] },
    { q: "How do I remove everything cl_quick keeps?",
      a: ["The strip at the bottom of Settings ▸ General has <b>Remove…</b>, which asks \"Move cl_quick's data to the Trash?\" and then moves cl_quick's folder and any old quick chats to the Trash, turns the login item off and quits. Your Claude Code folders, their sign-ins and their other sessions stay."] },
  ] },
  { title: "Profiles and accounts", items: [
    { q: "What is a profile?",
      a: ["A Claude Code folder cl_quick chats on: <code>~/.claude</code>, a <code>~/.claude-*</code> folder, or any folder set with <code>CLAUDE_CONFIG_DIR</code>. On its first run cl_quick takes every one it finds that is signed in, named after the folder (Main for <code>~/.claude</code>, Work for <code>~/.claude-work</code>). Two folders signed in to the same account make one profile, <code>~/.claude</code> first."] },
    { q: "Can one profile have more than one account?",
      a: ["Yes. A Claude Code folder holds one signed-in account at a time, so a profile remembers the accounts signed in to its folder: the one signed in now is in use, the others are on standby. cl_quick reads the folder's <code>.claude.json</code> as it is now, so a sign-in made outside cl_quick counts at once."] },
    { id: "switching", q: "How do I switch to another account?",
      a: ["Open the profile's page in Settings and press <b>Switch…</b> on a standby account. cl_quick asks first, because Claude Code in Terminal and editors on that folder moves to the new account, running sessions included. Then Claude Code's own sign-in opens in Terminal and finishes in your browser; cl_quick watches the folder for up to 10 minutes."] },
    { q: "What do Forget…, Sign in again… and Add an account… do?",
      a: ["<b>Forget…</b> asks first, then drops a standby account from the list; nothing is signed out. <b>Sign in again…</b> appears only when the sign-in is broken or the folder has no account. <b>Add an account…</b> takes an address and signs in as it; the account in use then goes to standby. A standby account shows no usage."] },
    { q: "What if the wrong account signs in, or nothing happens?",
      a: ["If another account signed in, the chat says so (\"Signed in as m•••@example.com, not p•••@example.com\") and offers to try again. After 10 minutes with no change cl_quick stops looking and says \"No sign-in in 10 minutes.\", in the chat and on the profile's page in Settings, with a way to try again and Dismiss (OK in Settings)."] },
    { q: "Does cl_quick see my password or token? Where are addresses shown?",
      a: ["No. cl_quick never sees a password or a token and never touches the Keychain; it reads only the addresses and ids in each folder's own <code>.claude.json</code>. Settings shows addresses in full, prompts may mask them (p•••@example.com), and in the chat an address appears only in the profile menu, blurred until the pointer is on it, with a copy button."] },
    { q: "How do I add a profile?",
      a: ["The <b>+</b> tile along the top of Settings adds a profile: a folder found on this Mac, Choose a folder… (a signed-in Claude Code folder), or \"A new account, in a new folder\", which takes a name, makes <code>~/.claude-</code> plus that name and opens Claude Code's own sign-in for it in Terminal."] },
  ] },
  { title: "Limits", items: [
    { q: "Where do the 5-hour and weekly numbers come from?",
      a: ["From the chat's own Claude Code, on its own sign-in and never the Keychain. It is asked for the account's limits (<code>get_usage</code>, which sends no message to a model) as the bar opens and after each answer. Limits belong to the account, never carried from another. The colours are green, amber from 50%, red from 80% and crimson from 95%."] },
    { q: "What does the header of the chat window show?",
      a: ["Only the usage meters, <b>5h</b> and <b>wk</b>, each with its bar, its share and, when there's room, when it resets. At the right is a darker capsule with <b>+</b> (new chat) and <b>✕</b> (hide). There is no profile name and no address in the header; the profile is in the row under the field."] },
    { id: "menu", q: "What does the menu bar menu show?",
      a: ["A block for each profile: its name, the account in use and two bars, <b>5-hour</b> and <b>Week</b>, with share and time to reset. Numbers count for 5 minutes; older ones turn grey (\"Last known 12 min ago\"), and over an hour old they aren't shown (\"No recent numbers\"). A click on a block opens the quick chat on that profile."] },
    { q: "What happens when a limit is full?",
      a: ["The chat's notice names the window that is full (\"Main's 5-hour limit is full, resets 23:20.\") and offers the profile with the most room: <b>Ask on Work</b> sends your question there. If the profile has a standby account, it also offers the one seen most recently, with no numbers: <b>Switch to p•••@example.com…</b>."] },
    { q: "What if Claude Code isn't signed in, or stops mid-answer?",
      a: ["If a profile's Claude Code isn't signed in, the notice offers <b>Sign in…</b> (Claude Code's own sign-in, in Terminal) and Try again, which asks in a new chat. If Claude Code stops mid-answer, the window keeps what arrived and says the chat ended; Retry asks again in a new chat. <b>Stop</b> ends an answer and the chat goes on."] },
  ] },
  { title: "The chat: model, shortcut, voice, files and links", items: [
    { q: "How do I pick the model and thinking?",
      a: ["Under the field, the model (Haiku by default) and thinking (off by default) sit in one outlined group. The model is one of four families, Haiku, Sonnet, Opus and Fable, each the newest the account has. Thinking is Off or the efforts that model takes. Click a bar, scroll, or use ⌥⌘ arrows; a pick holds for that chat."] },
    { q: "How do I change the shortcut?",
      a: ["Settings ▸ General ▸ Shortcut: ⌥Space by default, four other Space shortcuts, Other… for any key with ⌘, ⌃ or ⌥, or Off. It warns only about real clashes, a macOS shortcut that uses the key or a key another app holds, with a button that picks a preset none of macOS's own shortcuts uses. It needs no Accessibility permission."] },
    { q: "Can I use my voice?",
      a: ["Yes. The mic button left of Send starts macOS Dictation into the field, and <b>⌘D</b> turns it on and off. Return while dictating stops it and shows the text; Return again sends it. Settings ▸ General ▸ Dictation can make the first Return send at once. The field grows with what you dictate."] },
    { id: "images", q: "Can I paste or drop an image into the chat?",
      a: ["Yes. Press ⌘V with a screenshot or picture on the clipboard or with image files copied in Finder, or drop image files on the bar or the chat window. Each shows as a thumbnail with a ✕, and a message takes up to 5 attachments, files included. Pictures are scaled down in memory, and no file is made."] },
    { id: "files", q: "Can I attach a PDF or a text file to the chat?",
      a: ["Yes. Drop PDFs (up to 15 MB, 100 pages) or text and code files (up to 400 KB, UTF-8) from Finder on the bar or chat window, or copy them and press ⌘V. A message takes up to 5 attachments with pictures. They stay in memory only, and Claude Code has no file tools: it sees only what you attached."] },
    { id: "links", q: "Can cl_quick read a link or search the web?",
      a: ["Yes. Links and search is on by default: Claude Code gets its two web tools, WebFetch and WebSearch, and nothing else, so it can read a page you link or search the web. Page text goes to the model as part of the chat, and pages count toward your usage. Off in Settings ▸ General: no tools at all."] },
    { id: "services", q: "Can I ask about text I selected in another app?",
      a: ["Yes. Select text in any app, then right-click ▸ Services ▸ <b>Ask cl_quick</b>. The bar opens with the selection in the field as a quote, ready to edit and not sent; one over 20,000 characters is cut, with a line saying so. It needs no Accessibility permission, because macOS hands the selection over, and nothing about it is kept."] },
    { q: "Which keys work in the chat?",
      a: ["Return sends, Shift-Return adds a line, Esc or ⌘W hides the chat, ⌘N starts a new chat, ⌘D turns Dictation on and off and ⌘⇧C copies the latest complete answer. The keys button under the field lists them, with the one that opens cl_quick. The chat's shortcuts and paste work on Cyrillic layouts such as Russian and Ukrainian too."] },
    { q: "Can I move or resize the chat window?",
      a: ["Yes. The window resizes from its edges and corners, and moves from any empty area of it: the header, and the gaps around and between answers. The field, the buttons and the controls never move it. It floats on every Space until Esc hides it."] },
  ] },
];

export const allQA = groups.flatMap((g) => g.items);
/** An answer paragraph without its HTML, for the structured data. */
export const plain = (html: string) => html.replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
