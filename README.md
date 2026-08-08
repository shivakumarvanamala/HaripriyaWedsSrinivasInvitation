# 💍 Wedding Invitation Website — **BRIDE SIDE**

The **bride-side** invitation for **Haripriya weds Srinivas**, issued by the
**Ramini family**. Bilingual (**Telugu** default + **English**), with a
temple-door opening animation, a **scratch-card** that reveals the wedding date,
a live countdown, family blessings, an events timeline, a **YouTube live stream**
of the muhurtham, and venue maps.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

> ### 👰 This is one of TWO sites
> | | Site | Folder |
> |---|---|---|
> | 🤵 | Groom side — *Srinivas weds Haripriya* | `../SrinivasWedsHaripriyaInvitation` |
> | 👰 | **Bride side — this one** | `.` |
>
> They are **separate builds and separate deploys**, not one site with a switch.
> See [What differs from the groom side](#-what-differs-from-the-groom-side) and
> [Keeping the two in sync](#-keeping-the-two-in-sync).

> ### 🔴 On the wedding day?
> **→ [Jump to the cheat sheet](#-cheat-sheet--copy-paste-save)** — the exact JSON
> to paste, for every scenario. One paste starts the stream on **both** sites.

---

## ⚠️ Before you publish — two TODOs

Both are marked `⚠️ TODO` in `src/content.js`; search for `TODO` to find them.

| | What | Where |
|---|---|---|
| 1 | **Phone numbers are placeholders** (`9000000000`). The Call / WhatsApp buttons will dial a dead number until you replace all three. | `content.js → contact.people` |
| 2 | **Events are still the groom-side list.** The Upanayanam (22nd) and Satyanarayana Vratham (24th) happen at the *groom* family's residence, so they'll most likely be replaced by the bride's own functions. The Wedding card stays. | `content.js → events` |

Don't want the contact section until you have the numbers? Set
`contact.show: false` — the section **and** its nav link disappear cleanly.

---

## 🚀 Run it

```bash
npm install      # first time only
npm run dev      # preview at http://localhost:5173
npm run build    # produce the final site in /dist (this is what you publish)
npm run preview  # preview the built site
```

> Running both sites at once? Vite gives the second one port **5174**
> automatically — the terminal prints the actual url.

---

## 👰 What differs from the groom side

The two sites are the **same code**. Only these things differ — everything else
(sections, animations, layout, the scratch card, the live-stream logic) is
identical, so a fix made in one place should usually be made in both.

| | Groom side | **Bride side (this)** |
|---|---|---|
| **Palette** | Royal **plum** + gold | Temple **emerald** + gold |
| **Name order** | Srinivas weds Haripriya | **Haripriya weds Srinivas** |
| **Couple cards** | Groom's card first | **Bride's card first** |
| **Families cards** | Groom's family first | **Bride's family first** (they host) |
| **Footer sign-off** | Mr & Mrs. Vanamala Venkanna | **Mr & Mrs. Ramini Chandra Shekar** |
| **Contacts** | Groom's father & brothers | **Bride's father, mother & sister** |
| **Favicon tile** | Maroon | **Emerald** |
| **Page title** | Srinivas weds Haripriya | **Haripriya weds Srinivas** |
| **Background song** | *Sada Nannu* | ***Sita Ramam*** |

### How the palette works
Both sites use the **same Tailwind token names** — only the hex values in
`tailwind.config.js` differ. The base-surface token is called `jade` on this site
and `plum` on the groom's; everything else (`gold`, `cream`, `ink`) is shared.
So re-theming is a `tailwind.config.js` edit, not a hunt through the components.

### How the name order works
The order lives in the **components**, not in `content.js` — the content keys are
still `couple.groom` / `couple.bride` on both sites so the two files diff
cleanly. The bride-first swaps are in, and each is commented:

- `src/sections/Hero.jsx` — the big "X weds Y" line
- `src/sections/Couple.jsx` — the two cards (+ the mirrored `CoupleMotif`)
- `src/sections/Families.jsx` — the two family cards
- `src/sections/Footer.jsx` — the closing "A & B"
- `src/sections/LiveStream.jsx` — the names on the player panel

---

## 🔄 Keeping the two in sync

These values are **shared reality** — if one changes, change it in **both**
`src/content.js` files and redeploy both:

- `weddingDate` (drives the countdown *and* the live-stream window)
- `weddingDateLabel`, `muhuratLabel`
- the Wedding event's date / time / venue / map links
- `venue`
- everything under `live` — but see the gist note below; that one is automatic

---

## ✏️ Editing the content — ONE file

**Everything you change lives in `src/content.js`.** Open it and edit the text
between the quotes. You do not need to touch any other file.

### Two languages
The site shows **Telugu by default** (for relatives) and switches to **English**
(for friends & cousins) using the **తెలుగు | English** toggle at the bottom-left.

Any text with both languages looks like this:

```js
name: { te: 'హరి ప్రియ', en: 'Hari Priya' },
```

- Edit the Telugu inside `te: '...'`
- Edit the English inside `en: '...'`
- Keep the `te:` / `en:` keys, the quotes, and the commas.

Things that are the **same in both languages** (dates used by the countdown,
Google Maps links, photo file paths, the hashtag) are plain text — just edit them.

### What you'll typically change
| In `content.js` | What it controls |
|---|---|
| `couple` | Bride & groom names, `role` label (వధువు/Bride), parents, short bios |
| `weddingDate` | The date the **countdown** counts to (`YYYY-MM-DDTHH:MM:SS`) |
| `weddingDateLabel`, `muhuratLabel` | The date/time text shown to guests (also on the scratch card) |
| `events` | The ceremonies — dates, times, venues, map links |
| `families` | The two families' names & blessing |
| `saptapadi` | The seven vows (section currently disabled) |
| `contact` | People guests can call / WhatsApp |
| `venue` | Main venue (section currently disabled — the Wedding card carries it) |
| `music` | Optional background song (`src`) |
| `footer` | Closing message, hashtag, family sign-off |
| `ui` | Section titles & button labels (rarely need changing) |

### The couple cards
The Couple section is **text-led**: each card shows a small gold `వధువు / Bride`
(or `వరుడు / Groom`) label between two hairlines, then the full name at display
size, the short bio, and the parents. There are no photos or monogram initials —
a lone initial read as an arbitrary glyph rather than a monogram, especially in
Telugu, which has no initials convention.

To change a label, edit `couple.bride.role` / `couple.groom.role` in
`content.js`. Set it to `''` to hide the label entirely.

### Changing the map
In `content.js → venue.embedUrl`, paste a Google Maps embed URL
(Maps → **Share** → **Embed a map** → copy the `src="..."` value).

### Background music
The bride site plays **`public/music/sita-ramam.mp3`** (the groom site uses a
different song — don't sync `music` between the two). To change it, drop another
`.mp3` in `public/music/` and update `music.src` in `content.js`. The floating
button at the bottom-right mutes / unmutes, and the song mutes itself
automatically when a guest starts the live stream.

---

## 📺 The live stream — wedding-day plan

**On the day you only press “Go Live” on YouTube. You never touch this code.**

It is the **same broadcast** as the groom-side site — one stream, two
invitations.

### Do this once, a week early (calm, not on the day)
1. On YouTube, **schedule** the live stream (YouTube Studio → Create → Go live →
   Schedule for later). The video id exists as soon as it’s scheduled and
   **does not change** when you actually go live.
2. **Copy the whole link** — from the address bar or the Share button — and paste
   it into `live.videoId` in `src/content.js` (**both sites**), or better, into
   the gist (see below) which covers both at once. No need to extract anything;
   any YouTube link shape works (`/live/`, `youtu.be/`, `watch?v=`, mobile links
   with `&t=30s`, …), and a bare 11-character id works too.
3. Deploy. The section shows a “streaming soon” panel until the broadcast starts.

### On the wedding day
Press **Go Live** on YouTube (or start OBS). That’s it — the embedded player
starts by itself, and the red **LIVE** badge appears automatically.

The **live window** is driven by the clock, from `weddingDate` plus these values.
Inside the window the **player and the red badge appear**; outside it, guests see
the “streaming soon” panel — so someone opening the page a week early can’t press
play into an empty stream.

| In `content.js → live` | Default | Meaning |
|---|---|---|
| `liveFromMinutesBefore` | `90` | window opens 1 h 30 min before the muhurtham |
| `liveUntilMinutesAfter` | `300` | and closes 5 h after |
| `isLive` | `null` | `null` = automatic. `true` = player on now; `false` = off. |

> `isLive: true` is your escape hatch if the muhurtham runs late — it shows the
> player immediately, whatever the clock says.

> ⚠️ Keep the `+05:30` on `weddingDate`. Without it browsers read the time as the
> *viewer’s* local time, so relatives abroad get the countdown — and the LIVE
> badge — at the wrong moment.

---

## 📱 Remote control — change the live site from your phone

`configUrl` at the top of `src/content.js` points at a **GitHub Gist raw URL**
and the site re-reads that file **every 60 seconds**. Anything in it overrides
`content.js` — so you can change the site with **no code, no commit, no deploy**,
and guests who already have the page open get it within a minute.

**Edit here:** https://gist.github.com/shivakumarvanamala/d1ecb994e931ce2813a0cfce6067482e

Bookmark that on your phone. `configUrl` already points at it, so there is
nothing left to wire up.

### 🚨 This gist is SHARED with the groom-side site

That is deliberate — paste the YouTube link once and **both** invitations start
streaming. But it cuts both ways: **any key you put in that gist lands on both
sites.**

| | Keys |
|---|---|
| ✅ **Safe to put in the shared gist** | anything under `live` — this is the whole point |
| ❌ **Never put in the shared gist** | `contact`, `footer`, `families`, `couple` — the two sites hold **different** values for these, so a shared override would replace this site's bride-side contacts with the groom's |

Need a bride-only override? Make a **second** public gist and point `configUrl`
in this site's `content.js` at that one instead.

> **If you ever recreate the gist:** GitHub's **Raw** button gives a url containing
> a long revision hash, e.g. `…/raw/281d8d27…/wedding.json`. **Delete the hash**
> so it reads `…/raw/wedding.json`. With the hash left in, the site is pinned to
> that one revision and your later edits are never picked up.

---

## 📋 CHEAT SHEET — copy, paste, save

**Everything below goes in the gist. Nothing else. Copy the whole `{ … }` line.**

### ⭐ The one you'll actually use on the day

**Start the stream** — paste the YouTube link exactly as you copied it.
This starts it on **both** sites:
```json
{ "live": { "videoId": "https://www.youtube.com/live/abc123XYZ" } }
```

**Back to normal** (stream off, everything at its defaults):
```json
{}
```

---

### 🔴 Live stream scenarios

**The muhurtham is running late and the player hasn't appeared yet**
→ force it on, whatever the clock says:
```json
{ "live": { "videoId": "https://www.youtube.com/live/abc123XYZ", "isLive": true } }
```

**Ceremony over — hide the player but keep the section (shows “streaming soon”)**
```json
{ "live": { "videoId": "https://www.youtube.com/live/abc123XYZ", "isLive": false } }
```

**The stream crashed and restarted on a NEW link** → just paste the new one:
```json
{ "live": { "videoId": "https://www.youtube.com/live/NEW_LINK_HERE" } }
```

**Remove the Watch Live section from both sites completely**
```json
{ "live": { "show": false } }
```

**Go back to fully automatic** (clock decides the window):
```json
{ "live": { "videoId": "https://www.youtube.com/live/abc123XYZ", "isLive": null } }
```

**Change the live window** — e.g. open 3 h before, close 8 h after:
```json
{ "live": { "liveFromMinutesBefore": 180, "liveUntilMinutesAfter": 480 } }
```

---

### ✏️ Last-minute content changes

> ⚠️ Remember the shared gist: these land on **both** sites. For anything that
> differs between the two (contacts, sign-off, families), edit
> **`src/content.js`** and redeploy instead — or use a second, bride-only gist.

**Venue changed** (shared reality, so both sites *should* change):
```json
{ "venue": { "name": { "te": "కొత్త వేదిక", "en": "New Hall" },
             "address": { "te": "…", "en": "New address" } } }
```

**Hide a whole section** (`contact`, `families`, `live`, `saptapadi`)
```json
{ "contact": { "show": false } }
```

**Change an event's time**
```json
{ "events": [ … ] }
```
> ⚠️ `events` is a **list** — it is replaced whole, so you must include **all**
> events, not just the one you're changing. Copy them out of `src/content.js`
> first. For a small time tweak it's usually easier to edit `content.js` and
> redeploy. And note the two sites may not have the *same* event lists.

---

### 🕐 When does the player show?

Window defaults: opens **1 h 30 min before**, closes **5 h after** the muhurtham
(11:23 AM IST → player from **9:53 AM** to **4:23 PM**).

| Situation | `isLive` | Player | Badge |
|---|---|---|---|
| A week early, link set | `null` | hidden | “streaming soon” |
| 2 h before | `null` | hidden | “streaming soon” |
| 9:53 AM – 4:23 PM | `null` | **shown** | 🔴 **LIVE** |
| 6 h after | `null` | hidden | “streaming soon” |
| Any time | `true` | **shown** | 🔴 **LIVE** |
| Any time | `false` | hidden | “streaming soon” |
| No link set | any | hidden | “streaming soon” |

The **“Watch on YouTube” button shows whenever a link is set**, even outside the
window — guests can always get to YouTube directly.

---

### 🆘 If something looks wrong

| Symptom | Likely cause |
|---|---|
| Nothing changed after saving | Wait 60 s. Then check the JSON is valid — a stray comma or smart quote (`"` instead of `"`) makes the whole file be ignored. |
| Still nothing after 2 min | Is the gist **public**? Secret gists can’t be read by visitors. |
| Never picks up edits | Does `configUrl` in `content.js` contain a long revision hash? It must end `/raw/wedding.json`. |
| Player shows an empty screen | You’re live on the site but not actually broadcasting yet — press Go Live on YouTube. |
| The bride site shows the groom's contacts | You put a `contact` key in the **shared** gist. Remove it. |
| Want to undo everything fast | Set the gist to `{}` |

> **Phone keyboards insert smart quotes.** JSON needs plain `"` double quotes. If
> an edit seems ignored, this is the first thing to check.

---

### The rules
- **Only include what you want to change.** Everything else keeps the values in
  `content.js`.
- **Objects merge** — `{"live":{"videoId":"x"}}` changes only that one field and
  keeps the rest of the `live` block.
- **Lists are replaced whole** — e.g. `events` — so include every item you want.
- **It can’t break the page.** If the gist is unreachable, returns an error, or
  contains invalid JSON, it is ignored and the baked-in values are used. A typo
  such as `{"live": null}` or `{"live": "true"}` is also ignored rather than
  wiping the section.
- Hiding a section also removes its **nav link**, so nothing scrolls to nowhere.
- Leave `configUrl: ''` to switch remote control off completely.

> The gist must be **public** for the site to read it. Don’t put anything private
> in it — it’s just switches and public text.

### Sharing a link straight to the stream
Append `#live` to your site URL — e.g. `https://your-site.com/#live`. That’s the
URL to put behind a QR code. Generate the QR **after** you deploy, once you know
the final domain.

---

## 🎨 Changing colours / fonts (optional)
- Palette and fonts: `tailwind.config.js` (the emerald values live here)
- Global styles & the Telugu-font swap: `src/index.css`
- Telugu fonts (Noto Serif Telugu) load from Google Fonts in `index.html`

---

## 📁 Project structure
```
src/
  content.js              ← EDIT THIS (all text, both languages)
  i18n.jsx                ← language engine (Telugu default)
  App.jsx                 ← page assembly
  useRemoteConfig.js      ← reads the Gist every 60 s
  components/
    LanguageToggle.jsx    ← తెలుగు | English switch
    ScratchCard.jsx       ← the scratch-to-reveal date card
    Confetti.jsx          ← celebration burst
    FallingPetals.jsx     ← ambient flower petals
    MusicToggle.jsx       ← background music button
    NavBar.jsx            ← sticky navigation
    Motifs.jsx            ← Ganesha / lotus / kalash / diya SVG art
  sections/
    Hero.jsx              ← temple-door open + couple names (bride first)
    SaveTheDate.jsx       ← scratch card
    Countdown.jsx         ← live countdown
    Couple.jsx            ← bride & groom cards (name-led, no photos)
    Families.jsx          ← two families unite (bride's family first)
    Events.jsx            ← festivities timeline
    Saptapadi.jsx         ← the seven vows (disabled in App.jsx)
    Venue.jsx             ← venue + map (disabled in App.jsx)
    LiveStream.jsx        ← YouTube live stream of the muhurtham
    Contact.jsx           ← call / WhatsApp the family
    Footer.jsx            ← closing
public/
  music/                  ← background song (see music/README.txt)
  favicon.svg
```

Two sections are **disabled** in `App.jsx` and can be switched back on by
un-commenting their import, their `<Section />` line, and their entry in
`components/NavBar.jsx`:

- **Saptapadi** — its seven vow rows made the page very tall
- **Venue** ("Vivaha Vedika") — it duplicated the Wedding event card

---

## 🌐 Publishing
Run `npm run build`, then upload the contents of the `dist/` folder to any static
host — **Netlify, Vercel, GitHub Pages, Cloudflare Pages, Firebase Hosting**, etc.
(Most let you drag-and-drop the `dist` folder.)

> Deploy this to its **own** URL, separate from the groom-side site.
