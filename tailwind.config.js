/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ═══════════════════════════════════════════════════════════════
        //  ✦ SAGE GREEN & WARM CREAM — a LIGHT theme ✦
        //
        //  The bride-side palette. Note this is the INVERSE of the groom-side
        //  site (../SrinivasWedsHaripriyaInvitation), which is dark royal plum
        //  with gold. The four brief colours are:
        //
        //     #FDFBF7  dominant cream   → page background
        //     #F4EFE6  subtle cream     → cards / raised sections
        //     #607762  sage green       → body text, secondary accents
        //     #3E5140  deep sage        → headings, motifs, primary buttons
        //
        //  ── WHY THERE IS NO GOLD ──
        //  The design is a strict four-colour scheme, so the gold the groom
        //  site is built on is gone. That is not a stylistic whim — gold simply
        //  cannot work here. Measured against #FDFBF7:
        //       #C9A24B (gold)       2.32:1   ✗ fails WCAG AA (needs 4.5)
        //       #F3D697 (gold light) 1.37:1   ✗ effectively invisible
        //  Deep sage on cream is 8.27:1 (AAA), so sage now carries every
        //  ornamental job gold used to: headings, motifs, rules, buttons.
        //
        //  ── WHY THE TOKEN NAMES STILL SAY `gold` AND `jade` ──
        //  They are used ~150 times across 20 files, and are the SAME names the
        //  groom-side site uses. Renaming them would touch every one of those
        //  call sites and destroy the file-level diffability between the two
        //  sites, for zero visual gain. So the names are kept as stable slots
        //  and only the VALUES are re-pointed:
        //       `jade-*`  → the cream surfaces  (was the dark backgrounds)
        //       `gold-*`  → the sage inks       (was the metallics)
        //       `cream-*` → the sage inks too, since text that used to be
        //                   light-on-dark must now be dark-on-light
        //  Read `gold-*` as "the accent ink" and `jade-*` as "the surface".
        // ═══════════════════════════════════════════════════════════════

        // SURFACES. Every `bg-jade*` in the markup now resolves to a cream.
        jade: {
          DEFAULT: '#FDFBF7', // dominant cream — the page
          deep: '#F4EFE6', // subtle cream — sections that were "darkest"
          soft: '#F4EFE6', // subtle cream — cards / raised surfaces
          light: '#FFFFFF', // the lightest lift, for a card on a card
        },

        // A soft sage wash, for the rare place that needs a tinted panel.
        wine: '#E8EDE6',

        // ACCENT INKS (the old `gold` slots). Deep sage is the "bright" end
        // because on a light page the strongest accent is the DARKEST value —
        // the whole scale is therefore inverted relative to the groom site.
        //  ── Note on the values below ──
        //  These sit slightly DEEPER than the brief's #607762 / #3E5140. The
        //  brief's two sages are the reference hues and are used unchanged for
        //  large text, buttons and fills. But the same hue at 60–70% opacity —
        //  which the markup uses heavily for taglines and captions — landed at
        //  2.4–3.2:1 on a cream card, i.e. visibly washed out. Deepening the
        //  base ink lets those existing opacity modifiers resolve to a readable
        //  tone without touching 30-odd call sites. Same family, more presence.
        gold: {
          light: '#33452F', // strongest accent → headings   9.02:1 AAA
          DEFAULT: '#4E6450', // primary accent   → icons/rules 5.62:1 AA
          deep: '#243021', // deepest, for emphasis
          foil: '#33452F', // display headings
          dim: '#7E9080', // muted sage, hairlines only (never text)
        },

        // TEXT that used to be light-on-dark. Now sage-on-cream.
        //  `cream.DEFAULT` is the body colour; `cream.soft` is the muted one.
        //  ⚠️ The markup uses opacity modifiers heavily (text-cream/70,
        //  /65, /55 …). Those still work — they just now fade sage toward the
        //  cream page instead of fading a light ink toward black. Anything at
        //  /55 or below is decorative only; body copy stays at /80+.
        cream: { DEFAULT: '#2F3E31', soft: '#4E6450' },

        // Kept for the scratch-card hint, which is printed ON the foil and so
        // needs an ink that contrasts with the card, not with the page.
        maroon: { DEFAULT: '#7B1E33', deep: '#5A1326' },

        ink: '#3E5140', // default text colour on the cream page
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Marcellus"', 'Georgia', 'serif'],
        sans: ['"Mukta"', 'system-ui', 'sans-serif'],
        deco: ['"Tangerine"', 'cursive'],
        telugu: ['"Noto Serif Telugu"', '"Ramaraja"', 'serif'],
      },
      backgroundImage: {
        // `bg-gold-gradient` is the PRIMARY BUTTON fill. It was a metallic
        // sweep; it is now a deep-sage gradient, so buttons read as solid
        // sage blocks with cream labels (8.27:1).
        'gold-gradient': 'linear-gradient(135deg, #445A46 0%, #33452F 45%, #26331F 100%)',
        // The two page washes: barely-there cream gradients that give the long
        // page some variation without ever getting dark enough to fight text.
        'jade-radial': 'radial-gradient(circle at 50% 25%, #FFFFFF 0%, #FDFBF7 45%, #F4EFE6 110%)',
        'jade-deep-radial': 'radial-gradient(circle at 50% 40%, #FDFBF7 0%, #F0EADF 120%)',
      },
      boxShadow: {
        // On a light page a glow is invisible — light on light reads as nothing.
        // So every "glow" becomes a soft SAGE-TINTED DROP SHADOW instead: it
        // lifts the element off the cream the way the glow lifted it off the
        // dark. Alphas are low; heavy shadows would look muddy on cream.
        gold: '0 10px 30px -12px rgba(62, 81, 64, 0.28)',
        glow: '0 4px 16px -4px rgba(62, 81, 64, 0.22)',
        card: '0 14px 34px -18px rgba(62, 81, 64, 0.30)',
      },
      keyframes: {
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-110vh) rotate(360deg)', opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.65', filter: 'drop-shadow(0 1px 1px rgba(51,69,47,0.35))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 2px 3px rgba(51,69,47,0.45))' },
        },
        spinSlow: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        floatSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(0.7)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        // Broadcast arcs rippling outward from the diya (live-stream icon)
        signal: {
          '0%': { opacity: '0.15', transform: 'scale(0.9)' },
          '45%': { opacity: '1' },
          '100%': { opacity: '0.15', transform: 'scale(1.06)' },
        },
      },
      animation: {
        shimmer: 'shimmer 5s ease infinite',
        glow: 'glowPulse 2.8s ease-in-out infinite',
        spinSlow: 'spinSlow 50s linear infinite',
        floatSoft: 'floatSoft 5s ease-in-out infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        signal: 'signal 1.9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
