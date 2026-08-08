BACKGROUND MUSIC  (bride-side site)
===================================

The song file in this folder is:

    sita-ramam.mp3

That's it — the website is already wired to play it.

Notes:
- The site references it as  /music/sita-ramam.mp3  (set in src/content.js → music.src).
- Any .mp3 works. If you use a different filename, update `src` in src/content.js.
- Music is ON by default and starts the moment a guest opens the invitation
  (browsers don't allow auto-playing sound until the visitor interacts —
  the "TAP TO OPEN" tap counts, so it begins right then).
- The round button at the bottom-right mutes / unmutes the music.
- The music also mutes itself automatically when a guest starts the wedding
  live stream, so the two never play over each other.
- The GROOM-SIDE site uses a DIFFERENT song. This is deliberate — don't sync
  `music` between the two content.js files.

About the file:
- "Sita Ramam" is a copyrighted song. It is bundled here for a private family
  invitation; for a widely-shared or monetised site, make sure you have the
  right to use it.
