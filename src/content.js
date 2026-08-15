// ════════════════════════════════════════════════════════════════════
//  💍  WEDDING INVITATION — CENTRAL CONTENT FILE  (Telugu + English)
//      ★ BRIDE SIDE — issued by the Ramini family ★
// ════════════════════════════════════════════════════════════════════
//
//  This is the ONLY file you edit to change the website content.
//
//  ▸ THIS IS THE BRIDE-SIDE INVITATION. The groom-side site lives at
//    ../SrinivasWedsHaripriyaInvitation and is the SAME code in a royal-plum
//    palette. What differs here:
//        · the palette is temple emerald + gold (tailwind.config.js)
//        · the BRIDE is named first everywhere ("హరి ప్రియ వివాహం శ్రీనివాస్")
//        · the bride's family hosts — their card sits first, and the footer
//          sign-off and the contact numbers are theirs
//    Keep the two in sync when a SHARED detail changes (date, muhurtham,
//    venue, live-stream link) — they are two separate sites, not one build.
//
//  ▸ The site shows TELUGU by default (for relatives) and switches to
//    ENGLISH (for friends & cousins) via the toggle at the bottom-left.
//
//  ▸ Any text that has BOTH languages is written as:
//        { te: 'తెలుగు లో', en: 'in English' }
//    Edit the text inside the quotes. Keep `te:` and `en:` and the commas.
//
//  ▸ Things that are the SAME in both languages (dates as data, map links,
//    photo paths) are plain text — just edit them directly.
//
//  After editing: run `npm run dev` to preview, `npm run build` to publish.
//
// ════════════════════════════════════════════════════════════════════

export const content = {
  // ──────────────────────────────────────────────────────────────────
  //  0. REMOTE CONTROL  (optional, but set this up BEFORE the wedding)
  //
  //  Paste a GitHub Gist "Raw" url here and the live site reads it every minute.
  //  Anything you put in that file overrides the settings below — so you can
  //  change the site from your PHONE, with no code, no commit, no deploy.
  //
  //  ⚠️ THIS SITE SHARES ITS GIST WITH THE GROOM-SIDE SITE.
  //     That is deliberate: on the wedding day you paste the YouTube link ONCE
  //     and BOTH invitations start streaming. But it cuts both ways —
  //     ANY key you put in that gist lands on BOTH sites. So:
  //        ✓ SAFE to share:  everything under "live"  (the whole point)
  //        ✗ DO NOT put:     "contact", "footer", "families", "couple"
  //                          — the two sites carry DIFFERENT values for those,
  //                            and a shared override would replace this site's
  //                            bride-side contacts with the groom's.
  //     If you ever need a bride-only override, create a SECOND gist and point
  //     `configUrl` below at that one instead.
  //
  //  ── WHAT YOU'LL ACTUALLY USE ──
  //
  //  Turn the live stream ON — just paste the WHOLE YouTube link, as-is:
  //      { "live": { "videoId": "https://www.youtube.com/live/abc123XYZ" } }
  //      { "live": { "videoId": "https://youtu.be/abc123XYZ" } }
  //      { "live": { "videoId": "abc123XYZ" } }        ← a bare id also works
  //  (Any YouTube url shape is accepted — watch / live / youtu.be / embed /
  //   shorts, with or without extra ?t= or &list= params. Nothing to extract.)
  //
  //  Turn it OFF again:
  //      { "live": { "videoId": "" } }
  //
  //  Hide the live section completely:
  //      { "live": { "show": false } }
  //
  //  Force the red LIVE badge on / off (normally automatic from the clock):
  //      { "live": { "isLive": true } }
  //
  //  RULES
  //   • Only include the keys you want to CHANGE. Everything else keeps the
  //     values below.
  //   • Objects merge (so `{"live":{"videoId":"x"}}` keeps the rest of `live`).
  //     Lists like `events` are replaced whole.
  //   • If the gist is unreachable or the JSON is broken it is IGNORED and the
  //     site falls back to the values below — it can never break the page.
  //   • Leave '' to disable remote control entirely.
  // ──────────────────────────────────────────────────────────────────
  //  ⚠️ NOTE the url below has NO revision hash in it. GitHub's "Raw" button
  //     gives you a url like  .../raw/281d8d27…/wedding.json  — that long hash
  //     pins it to ONE revision, so later edits would never be picked up.
  //     Deleting the hash (as done here) always serves the LATEST version.
  configUrl:
    'https://gist.githubusercontent.com/shivakumarvanamala/d1ecb994e931ce2813a0cfce6067482e/raw/wedding.json',

  // ──────────────────────────────────────────────────────────────────
  //  1. THE COUPLE
  //
  //  The keys stay `groom` / `bride` (same as the groom-side site, so the two
  //  files stay easy to compare). What differs on THIS site is the ORDER they
  //  are DISPLAYED in: the bride comes first in the hero line, the couple
  //  cards, the footer and the live-stream panel. That ordering lives in the
  //  components — see the comment at the top of src/sections/Couple.jsx.
  // ──────────────────────────────────────────────────────────────────
  couple: {
    bride: {
      // `name` = short name, used only in the big hero "X weds Y" line
      name: { te: 'హరి ప్రియ', en: 'Hari Priya' },
      // `role` = the small gold caption between two hairlines on the card
      // (వధువు / Bride). Set '' to hide it.
      role: { te: 'వధువు', en: 'Bride' },
      // `honorific` = the చి.ల.సౌ. prefix — rendered at HALF the name's font
      // size, just before the name. Set '' to hide.
      honorific: { te: 'చి.ల.సౌ.', en: '' },
      // `fullName` = shown as the heading in the Couple section (with surname)
      fullName: { te: 'రామిని హరి ప్రియ', en: 'Ramini Hari Priya' },
      // `relation` (small line) + `parents` (the two names, kept on one line)
      // Telugu is shown AFTER the parents' names ("<parents> ల ప్రథమ పుత్రిక");
      // English is shown BEFORE them ("Elder daughter of / <parents>").
      relation: { te: 'ల ప్రథమ పుత్రిక', en: 'Elder daughter of' },
      parents: {
        te: 'శ్రీ రామిని చంద్రశేఖర్  - ఉషారాణి',
        en: 'Mr & Mrs. Ramini Chandra Shekar - Usha Rani',
      },
      about: {
        te: 'ఇంటికి వెలుగై, అందరి మన్ననలు అందుకుంటున్న మా గారాల చిరంజీవి సౌభాగ్యవతి.',
        en: 'The cherished elder daughter of the Ramini family, the light of her home.',
      },
    },
    groom: {
      name: { te: 'శ్రీనివాస్', en: 'Srinivas' },
      role: { te: 'వరుడు', en: 'Groom' },
      honorific: { te: 'చి.', en: '' },
      fullName: { te: 'వనమాల శ్రీనివాస్', en: 'Vanamala Srinivas' },
      relation: { te: 'ల ప్రథమ పుత్రుడు', en: 'Elder son of' },
      parents: {
        te: 'శ్రీ వనమాల వెంకన్న  - సంధ్యారాణి',
        en: 'Mr & Mrs. Vanamala Venkanna - Sandhya Rani',
      },
      about: {
        te: 'వంశ గౌరవాన్ని నిలబెడుతూ, పెద్దల దీవెనలతో జీవితంలో ముందడుగు వేస్తున్న చిరంజీవి.',
        en: 'The elder son of the Vanamala family, stepping forward with the blessings of his elders.',
      },
    },
    weds: { te: 'వివాహం', en: 'weds' },
  },

  // ──────────────────────────────────────────────────────────────────
  //  2. INVOCATION (sacred blessing at the very top)
  // ──────────────────────────────────────────────────────────────────
  invocation: {
    // The classic trio shown across the top
    trio: ['శ్రీరస్తు', 'శుభమస్తు', 'అవిఘ్నమస్తు'],
    blessing: {
      te: 'శ్రీ వరసిద్ధి వినాయకుని కృపతో, పెద్దల ఆశీస్సులతో జరగబోవు మా ఇంటి శుభకార్యానికి తమరు సకుటుంబ సమేతంగా విచ్చేసి నూతన దంపతులను దీవించమని కోరుకుంటున్నాము.',
      en: 'With the blessings of Lord Ganesha and our elders, we joyfully invite you to celebrate the union of two souls.',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  3. WEDDING DATE  (for the countdown timer AND the live-stream window)
  //     `weddingDate` is data — 'YYYY-MM-DDTHH:MM:SS+05:30'.
  //     KEEP THE +05:30 (India Standard Time). Without it the browser reads the
  //     time as the VIEWER's local time, so relatives watching from the US or UK
  //     would see the countdown end — and the LIVE badge appear — hours early or
  //     late. With it, every guest worldwide sees the same instant.
  //
  //     ⚠️ This value MUST match the groom-side site. If the muhurtham moves,
  //        change it in BOTH content.js files.
  // ──────────────────────────────────────────────────────────────────
  weddingDate: '2026-08-23T11:23:00+05:30',
  weddingDateLabel: {
    te: 'తేది. 23-08-2026 ఆదివారం',
    en: 'Sunday, 23rd August 2026',
  },
  muhuratLabel: {
    te: 'ఉ.గం. 11-23 ని.లకు — మూల నక్షత్రయుక్త, తుల లగ్న సుముహూర్తమున',
    en: 'Shubh Muhurat · 11:23 AM',
  },

  // ──────────────────────────────────────────────────────────────────
  //  4. EVENTS TIMELINE
  //
  //  Three CARDS covering four ceremonies over three days:
  //
  //   21st  SHAVA        8-00 AM   ┐ both at the bride's residence,
  //         MEHANDI      2-30 PM   ┘ shown together on ONE card
  //   22nd  PELLIKUTHURU 7-30 AM     at the bride's residence
  //   23rd  SUMUHURTHAM 11-23 AM     at Sree Jagati Gardens ← shared, highlight
  //
  //  ▸ THE FIRST CARD CARRIES TWO RITES.
  //    Shava and Mehandi both fall on the 21st, so they share a card rather than
  //    taking one each. That keeps the section at THREE cards, which is what the
  //    grid is built for (1 / 2 / 3 columns) — a fourth card would have left a
  //    lone orphan on the second row at tablet and desktop widths.
  //    A card with more than one rite uses `schedule: [...]` instead of `time`,
  //    and Events.jsx renders it as a small name-and-time list. See the comment
  //    there.
  //
  //  ▸ WHY PELLIKUTHURU AND NOT UPANAYANAM.
  //    The groom-side card for the 22nd is his Upanayanam — the sacred-thread
  //    ceremony. That has NO bride-side equivalent: it is a male coming-of-age
  //    rite, not a wedding ritual, and Telugu tradition has no female thread
  //    ceremony to pair with it.
  //    What the bride's family does on that day is PELLIKUTHURU — the rite in
  //    which she is formally made "the bride": nalugu (turmeric, flour and oil)
  //    applied at the appointed muhurtham, then mangala snanam (the auspicious
  //    bath) and harati. It is the exact structural mirror of the groom's
  //    PELLIKODUKU, performed the same day at his house — so the two
  //    invitations stay symmetric without either claiming the other's ritual.
  //
  //  ▸ The 21st and 22nd are at the BRIDE'S residence (Durganagar, Naim Nagar,
  //    Hanamkonda), so both carry her home's map. Only the Wedding card's venue
  //    is shared between the two sites.
  //
  //     `icon`: 'haldi' | 'wedding' | 'vratham' | 'mehendi' | 'sangeet' |
  //             'reception' | 'upanayanam' | 'pellikoduku' | 'pellikuthuru'
  //     `date`, `venue` are shown to guests → bilingual.
  //     `time`     — a single time line, for a card with ONE rite.
  //     `schedule` — instead of `time`, for a card with SEVERAL rites on the
  //                  same day: [{ name, time }, …], rendered as a small list.
  //     `mapUrl` = paste a Google Maps link → a "📍 View Map" button appears.
  //              (Leave '' to hide the button.)
  //     `embedUrl` = Google Maps EMBED url → shows a live map preview at the top
  //              of the card.  (Leave '' / omit to show no map preview.)
  // ──────────────────────────────────────────────────────────────────
  events: [
    {
      // ── 21st: SHAVA + MEHANDI ──
      // Two rites on one day, so they share a card and use `schedule` rather
      // than `time`. `icon: 'mehendi'` renders the lotus, which is the cleanest
      // of the available motifs and carries no leftover warm colour.
      icon: 'mehendi',
      name: { te: 'శావ · మెహందీ', en: 'Shava · Mehandi' },
      tagline: {
        te: 'శుభారంభ వేడుకలు',
        en: 'The celebrations begin',
      },
      date: { te: 'తేది. 21-08-2026 శుక్రవారం', en: 'Friday, 21st August 2026' },
      schedule: [
        { name: { te: 'శావ', en: 'Shava' }, time: { te: 'ఉ.గం. 8-00 లకు', en: '8:00 AM' } },
        { name: { te: 'మెహందీ', en: 'Mehandi' }, time: { te: 'మ.గం. 2-30 లకు', en: '2:30 PM' } },
      ],
      venue: { te: 'మా  స్వగృహము నందు', en: 'At our Residence' },
      mapUrl: 'https://www.google.com/maps?q=18.0316639,79.5434126&z=17&hl=en',
      embedUrl: 'https://www.google.com/maps?q=18.0316639,79.5434126&z=17&output=embed',
    },
    {
      // Pellikuthuru — the day BEFORE the wedding, at the BRIDE's home.
      // The counterpart of the groom's Pellikoduku (and of the Upanayanam card
      // that occupies this slot on his invitation). See the note above.
      icon: 'pellikuthuru',
      name: { te: 'పెళ్ళికూతురు', en: 'Pellikuthuru' },
      tagline: {
        te: 'శుభ ముహూర్తమున మంగళ స్నానము',
        en: 'The auspicious adorning of the bride',
      },
      date: { te: 'తేది. 22-08-2026 శనివారం', en: 'Saturday, 22nd August 2026' },
      time: { te: 'ఉ.గం. 7-30 లకు', en: '7:30 AM' },
      venue: { te: 'మా  స్వగృహము నందు', en: 'At our Residence' },
      mapUrl: 'https://www.google.com/maps?q=18.0316639,79.5434126&z=17&hl=en',
      embedUrl: 'https://www.google.com/maps?q=18.0316639,79.5434126&z=17&output=embed',
    },
    {
      // Wedding — main day, at the hall.
      // `highlight: true` marks this as THE main event: the card gets a brighter
      // gold frame + glow, a larger medallion, a taller map, larger type and the
      // lunch note. Only set it on ONE event.
      highlight: true,
      icon: 'wedding',
      name: { te: 'సుముహూర్తము', en: 'Wedding' },
      tagline: { te: 'ఏడడుగుల మూడుముళ్ళ పవిత్ర బంధము', en: 'The sacred seven vows' },
      date: { te: 'తేది. 23-08-2026 ఆదివారం', en: 'Sunday, 23rd August 2026' },
      time: { te: 'ఉ.గం. 11-23 ని.లకు, తుల లగ్నమున', en: '11:23 AM · Shubh Muhurat' },
      venue: { te: 'శ్రీ జగతి గార్డెన్స్, రామారం, హన్మకొండ', en: 'Sree Jagati Gardens, Ramaram, Hanamkonda' },
      mapUrl: 'https://maps.app.goo.gl/UtWCse2Rxahxf8FbA',
      embedUrl:
        'https://www.google.com/maps?q=Sree+Jagati+Gardens,+Main+Rd,+opp.+GMR+Gardens,+Bheemaram,+Hanamkonda,+Telangana+506015&output=embed',
    },
  ],

  // ──────────────────────────────────────────────────────────────────
  //  5. TWO FAMILIES UNITE  (arranged marriage — blessings of the families)
  //     Set `show: false` to hide this section.
  //
  //     On THIS site the BRIDE's family card is shown FIRST (left), since they
  //     are the hosts — so their `note` is the welcoming one, and the groom
  //     family's is the one seeking blessings for the couple. On the groom-side
  //     site the two are the other way round.
  // ──────────────────────────────────────────────────────────────────
  families: {
    show: true,
    heading: { te: 'రెండు కుటుంబాల కల్యాణ బంధం', en: 'Two Families, One Bond' },
    intro: {
      te: 'పెద్దల ఆశీస్సులతో ఇరు కుటుంబములు ఒక్కటవుతున్న ఈ శుభ సందర్భమున తమ సమక్షము మాకు ఎంతో సంతోషదాయకము.',
      en: 'An arranged alliance blessed by elders — where two families come together as one, and a lifetime of togetherness begins.',
    },
    brideSide: {
      title: { te: 'వధువు తరఫున', en: "Bride's Family" },
      // `parents` — both names on one line (same wording as the Couple section)
      parents: {
        te: 'శ్రీ రామిని చంద్రశేఖర్  - ఉషారాణి',
        en: 'Mr & Mrs. Ramini Chandra Shekar - Usha Rani',
      },
      note: { te: 'తమ రాకతో మా ఇంటి శుభకార్యమునకు శోభ చేకూర్చగలరు', en: 'We warmly welcome you to share in our joy' },
      // `siblings` — small line shown at the bottom of the card. Set '' to hide.
      siblings: {
        te: 'సోదరి: ధన్య',
        en: 'Sister: Ramini Dhanya',
      },
    },
    groomSide: {
      title: { te: 'వరుని తరఫున', en: "Groom's Family" },
      parents: {
        te: 'శ్రీ వనమాల వెంకన్న  - సంధ్యారాణి',
        en: 'Mr & Mrs. Vanamala Venkanna - Sandhya Rani',
      },
      note: { te: 'నూతన వధూవరులను మనసారా ఆశీర్వదించగలరు', en: 'We humbly seek your blessings for the couple' },
      siblings: {
        te: 'సోదరులు: శ్రీకాంత్, శివ కుమార్',
        en: 'Brothers: Srikanth, Shiva Kumar',
      },
    },
    blessing: {
      te: 'శ్రీ సీతారాముల వలె నూరేళ్ళు ఒక్కటై, పిల్లాపాపలతో, పాడిపంటలతో, చల్లగా ఉండాలని మనస్ఫూర్తిగా దీవిద్దాం.',
      en: 'May the couple be blessed with a long, joyful and prosperous life together.',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  6. SAPTAPADI — the seven steps / vows (animated footprints path)
  //     Each step reveals one vow as you scroll.
  //     (Currently disabled in App.jsx — see the comment there.)
  // ──────────────────────────────────────────────────────────────────
  saptapadi: {
    show: true,
    heading: { te: 'సప్తపది', en: 'Saptapadi · Seven Steps' },
    intro: {
      te: 'అగ్నిసాక్షిగా కలిసి వేసే ఏడడుగులు — ఏడు జన్మల బంధానికి ఏడు వాగ్దానాలు',
      en: 'Seven steps taken together before the sacred fire — seven vows for a lifetime',
    },
    steps: [
      { te: 'తొలి అడుగు — తిండీ తిప్పలతో, ఆరోగ్యంతో కలిసి జీవిద్దాం', en: 'First step — for nourishment and a healthy life together' },
      { te: 'రెండో అడుగు — ఒకరికొకరు బలంగా, ధైర్యంగా తోడుంటాం', en: 'Second step — for strength of body, mind and spirit' },
      { te: 'మూడో అడుగు — సిరిసంపదలతో, సుఖసంతోషాలతో సాగుదాం', en: 'Third step — for prosperity and shared abundance' },
      { te: 'నాలుగో అడుగు — ప్రేమతో, పరస్పర గౌరవంతో కలిసుంటాం', en: 'Fourth step — for happiness through love and respect' },
      { te: 'అయిదో అడుగు — మంచి సంతానంతో, కుటుంబంతో వర్ధిల్లుదాం', en: 'Fifth step — for noble children and a blessed family' },
      { te: 'ఆరో అడుగు — అన్ని రుతువులలో, అన్ని కాలాలలో తోడుంటాం', en: 'Sixth step — for togetherness through every season' },
      { te: 'ఏడో అడుగు — జీవితాంతం స్నేహితులుగా, తోడూనీడై ఉంటాం', en: 'Seventh step — for lifelong friendship and companionship' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  7. PRIMARY VENUE (shown with map)
  //     (Currently disabled in App.jsx — the Wedding event card carries these
  //     details instead. Kept here so the section can be switched back on.)
  // ──────────────────────────────────────────────────────────────────
  venue: {
    name: { te: 'శ్రీ జగతి గార్డెన్స్', en: 'Sree Jagati Gardens' },
    address: {
      te: 'కరీంనగర్ రోడ్, జీఎంఆర్ గార్డెన్స్ ఎదురుగా, రామారం, హన్మకొండ, తెలంగాణ 506015',
      en: 'Karimnagar Road, opp. GMR Gardens, Ramaram, Hanamkonda, Telangana 506015',
    },
    // Google Maps embed URL (Share → Embed a map → copy src="...").
    embedUrl:
      'https://www.google.com/maps?q=Sree+Jagati+Gardens,+Main+Rd,+opp.+GMR+Gardens,+Bheemaram,+Hanamkonda,+Telangana+506015&output=embed',
    directionsUrl: 'https://maps.app.goo.gl/UtWCse2Rxahxf8FbA',
  },

  // ──────────────────────────────────────────────────────────────────
  //  7a. WATCH LIVE — the YouTube live stream of the muhurtham.
  //
  //  ▸ `videoId` is the ONLY thing you must set — and you can paste the WHOLE
  //    YouTube link exactly as you copied it. No need to pick the id out.
  //        https://www.youtube.com/live/dQw4w9WgXcQ        ✓
  //        https://youtu.be/dQw4w9WgXcQ?t=42               ✓
  //        https://www.youtube.com/watch?v=dQw4w9WgXcQ     ✓
  //        dQw4w9WgXcQ                                     ✓ (bare id is fine)
  //    Anything unrecognisable is treated as "no stream", so a bad paste leaves
  //    the elegant "streaming soon" panel rather than a broken player.
  //
  //  ▸ It is the SAME broadcast as the groom-side site — one stream, two
  //    invitations. Because both sites read the same gist, pasting the link
  //    into that gist once turns the player on for both.
  //
  //  ▸ YOU DO NOT NEED TO TOUCH ANYTHING ON THE WEDDING DAY.
  //    The player AND the red LIVE badge both switch themselves on and off from
  //    the clock, using `weddingDate` above together with the live window below.
  //    Just press "Go Live" on YouTube.
  //
  //  ▸ `isLive` overrides the clock — your escape hatch if the muhurtham runs
  //    late:  null → automatic · true → player on NOW · false → keep it off.
  //
  //  ▸ Set `show: false` to hide the whole section.
  // ──────────────────────────────────────────────────────────────────
  live: {
    show: true,
    videoId: 'https://youtube.com/live/Qxlp_6nof6A', // ← paste the whole YouTube link (or just the id) here
    isLive: null, // null = automatic (see above). true/false to override.
    // The LIVE WINDOW. Inside it the player is offered and the badge glows red;
    // outside it guests see the "streaming soon" panel instead. This stops
    // someone visiting a week early from pressing play and landing on YouTube's
    // bare "waiting for stream" screen.
    liveFromMinutesBefore: 90, // opens 1 hr 30 min before the muhurtham
    liveUntilMinutesAfter: 300, // closes 5 hours after
    // Fallback link used before a videoId exists (your channel page). Optional.
    channelUrl: '',
    heading: { te: 'వివాహ మహోత్సవం - ప్రత్యక్ష ప్రసారం', en: 'Watch The Wedding Live' },
    intro: {
      te: 'దగ్గరైనా, దూరమైనా... మా వివాహ శుభ ముహూర్తాన్ని వీక్షించి, మమ్మల్ని ఆశీర్వదించండి.',
      en: 'Near or far, bless us with your presence as our auspicious hour unfolds.',
    },
    liveBadge: { te: 'ప్రత్యక్ష ప్రసారం', en: 'Live Now' },
    soonBadge: { te: 'త్వరలో ప్రత్యక్ష ప్రసారం', en: 'Streaming Soon' },
    watchOnYouTube: { te: 'యూట్యూబ్‌లో చూడండి', en: 'Watch on YouTube' },
    // Short muhurat line for the player panel (the full one is too long here)
    muhuratShort: { te: 'ఉ.గం. 11-23 ని.', en: '11:23 AM' },
    note: {
      te: 'ప్రసారము ముహూర్తమునకు కొద్ది సమయము ముందు ప్రారంభమవుతుంది.',
      en: 'The stream begins shortly before the muhurtham.',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  7b. CONTACT — people guests can call / WhatsApp.
  //     `phone` is the plain 10-digit number (also used for WhatsApp).
  //     `cc` is the country code (91 = India) used for the WhatsApp link.
  //
  //     The bride's PARENTS only — her father and mother. (The groom-side site
  //     lists its own three contacts; the two lists are deliberately different,
  //     which is why `contact` must never go in the shared gist.)
  //     Set `show: false` to hide the section and its nav link entirely.
  // ──────────────────────────────────────────────────────────────────
  contact: {
    show: true,
    heading: { te: 'సంప్రదించండి', en: 'Get in Touch' },
    intro: {
      te: 'ఏ వివరములకైనా మమ్ము సంప్రదించగలరు',
      en: 'For any details, reach out to us — a call or a message away',
    },
    cc: '91',
    people: [
      { name: { te: 'రామిని చంద్రశేఖర్', en: 'Ramini Chandra Shekar' }, role: { te: 'వధువు తండ్రి', en: "Bride's Father" }, phone: '9666135296' },
      { name: { te: 'రామిని ఉషారాణి', en: 'Ramini Usha Rani' }, role: { te: 'వధువు తల్లి', en: "Bride's Mother" }, phone: '9912398938' },
    ],
  },

  // ──────────────────────────────────────────────────────────────────
  //  8. BACKGROUND MUSIC
  //     ▸ The song file lives at:  public/music/sita-ramam.mp3
  //       (any .mp3 works — just match the filename or update `src` below).
  //       The groom-side site uses a different song, so this is one of the
  //       things you should NOT sync between the two.
  //     ▸ Music is ON by default and starts when a guest opens the
  //       invitation. The bottom-right button mutes / unmutes.
  //     ▸ Set src: '' to disable music entirely.
  // ──────────────────────────────────────────────────────────────────
  music: {
    src: '/music/sita-ramam.mp3',
    label: { te: 'సంగీతం', en: 'Music' },
  },

  // ──────────────────────────────────────────────────────────────────
  //  9. FOOTER / CLOSING
  //     The sign-off is the BRIDE's parents — this invitation is issued by
  //     them. (The groom-side site signs off with the Vanamala family.)
  // ──────────────────────────────────────────────────────────────────
  footer: {
    message: {
      te: 'తామంతా సకుటుంబ సమేతముగా విచ్చేసి నూతన వధూవరులను ఆశీర్వదించి, విందారగించి మా ఆతిథ్యము స్వీకరించగలరు.',
      en: 'Do come, bless Hari Priya & Srinivas, and share in our joy — your presence means everything.',
    },
    hashtag: '', // set to '' to hide the hashtag line in the footer
    // The closing sign-off — the bride's parents. Edit the names here.
    fromFamilies: {
      te: 'భవదీయులు -\nశ్రీ రామిని చంద్రశేఖర్  - ఉషారాణి',
      en: 'With warm regards,\nMr & Mrs. Ramini Chandra Shekar - Usha Rani',
    },
  },

  // ──────────────────────────────────────────────────────────────────
  //  10. UI LABELS  (section titles, buttons — shown around your content)
  //      Usually no need to change these.
  // ──────────────────────────────────────────────────────────────────
  ui: {
    // Bride first — this is the bride-side invitation.
    brand: { te: 'హరిప్రియ ❤ శ్రీనివాస్', en: 'Hari Priya ❤ Srinivas' },
    deities: {
      venkateswara: { te: 'శ్రీ వేంకటేశ్వరుడు', en: 'Sri Venkateswara' },
      ganesha: { te: 'శ్రీ వినాయకుడు', en: 'Sri Ganesha' },
      shiva: { te: 'శ్రీ పరమేశ్వరుడు', en: 'Sri Shiva' },
    },
    nav: {
      savethedate: { te: 'శుభ ముహూర్తం', en: 'Save the Date' },
      couple: { te: 'వధూవరులు', en: 'Couple' },
      families: { te: 'కుటుంబాలు', en: 'Families' },
      events: { te: 'వేడుకలు', en: 'Events' },
      saptapadi: { te: 'సప్తపది', en: 'Saptapadi' },
      venue: { te: 'వేదిక', en: 'Venue' },
      live: { te: 'ప్రత్యక్ష ప్రసారం', en: 'Watch Live' },
      contact: { te: 'సంప్రదించండి', en: 'Contact' },
    },
    hero: {
      ganeshaInvocation: { te: 'ఓం శ్రీ గణేశాయ నమః', en: 'Om Shri Ganeshaya Namaha' },
      together: { te: 'ఇరు కుటుంబముల ఆనందముతో', en: 'Together with their families' },
      scratchHint: { te: 'మీ ఆశీస్సుల కోసం ఎదురుచూస్తూ...', en: 'Awaiting your blessings…' },
      // The ↓ arrow is rendered separately (it bobs), so don't put one here.
      cta: { te: 'సుముహూర్తము చూడండి', en: 'SAVE THE DATE' },
      tapToOpen: { te: 'శుభలేఖ తెరవండి', en: 'TAP TO OPEN' },
      awaits: { te: '— వివాహ మహోత్సవ ఆహ్వాన శుభపత్రిక —', en: '— An invitation awaits —' },
    },
    saveTheDate: {
      heading: { te: 'సుముహూర్తము', en: 'Save The Date' },
      subtitle: {
        te: 'దైవజ్ఞులచే నిశ్చయించబడిన సుముహూర్తము',
        en: 'Our auspicious day',
      },
      // Hint printed on the gold foil; fades away as soon as scratching starts.
      scratchHint: { te: 'గీసి చూడండి', en: 'SCRATCH TO REVEAL' },
      revealedLabel: { te: 'మూడుముళ్ళ పవిత్ర బంధము', en: 'We Tie The Knot' },
      celebrate: { te: '🎉 ఈ శుభకార్యమునకు తామంతా తప్పక విచ్చేయగలరు! 🎉', en: '🎉 We can’t wait to celebrate with you! 🎉' },
    },
    countdown: {
      heading: { te: 'శుభ ముహూర్తానికి మరికొన్ని రోజులు', en: 'Counting Down To Our Big Day' },
      headingHere: { te: 'శుభ ముహూర్తం వచ్చేసింది!', en: 'The Big Day Is Here!' },
      days: { te: 'రోజులు', en: 'Days' },
      hours: { te: 'గంటలు', en: 'Hours' },
      minutes: { te: 'నిమిషాలు', en: 'Minutes' },
      seconds: { te: 'క్షణాలు', en: 'Seconds' },
    },
    coupleHeading: { te: 'వధూవరులు', en: 'The Couple' },
    eventsHeading: { te: 'వేడుకలు', en: 'Wedding Festivities' },
    eventsIntro: {
      te: 'ప్రతి శుభకార్యమునందు తాము పాల్గొని మమ్ము ఆశీర్వదించగలరని ఆకాంక్షిస్తున్నాము',
      en: 'We would be honoured by your presence at each celebration',
    },
    viewMap: { te: '📍 లొకేషన్ చూడండి', en: '📍 View Map' },
    galleryHeading: { te: 'తీపి జ్ఞాపకాలు', en: 'Cherished Moments' },
    venueHeading: { te: 'కళ్యాణ వేదిక', en: 'Vivaha Vedika' },
    // "Lunch follows the wedding" — printed on the card, shown under the venue
    lunchNote: { te: 'విందు వివాహానంతరం', en: 'Lunch follows' },
    directions: { te: '📍 లొకేషన్ చూడండి', en: '📍 View Map' },
  },
}

export default content
