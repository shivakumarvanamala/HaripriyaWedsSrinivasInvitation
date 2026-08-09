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
        //
        //  SURFACES use the brief's two creams exactly as given.
        //  TEXT AND ICONS are ANTIQUE GOLD — see the `gold` block below for why
        //  the gold had to be darkened from the groom site's metallics.
        //
        //  ── WHY THE TOKEN NAMES STILL SAY `gold` AND `jade` ──
        //  They are used ~150 times across 20 files, and are the SAME names the
        //  groom-side site uses. Renaming them would touch every one of those
        //  call sites and destroy the file-level diffability between the two
        //  sites, for zero visual gain. So the names are kept as stable slots
        //  and only the VALUES are re-pointed:
        //       `jade-*`  → the cream surfaces  (was the dark backgrounds)
        //       `gold-*`  → the antique-gold inks (was the light metallics)
        //       `cream-*` → the body-text gold, since text that used to be
        //                   light-on-dark must now be dark-on-light
        // ═══════════════════════════════════════════════════════════════

        // SURFACES. Every `bg-jade*` in the markup now resolves to a cream.
        jade: {
          DEFAULT: '#FDFBF7', // dominant cream — the page
          deep: '#F4EFE6', // subtle cream — sections that were "darkest"
          soft: '#F4EFE6', // subtle cream — cards / raised surfaces
          light: '#FFFFFF', // the lightest lift, for a card on a card
        },

        // A soft warm wash, for the rare place that needs a tinted panel.
        wine: '#F0E8D5',

        // ACCENT INKS. Note the scale is INVERTED relative to the groom site:
        // on a light page the strongest accent is the DARKEST value.
        //  ── ANTIQUE GOLD — the text & icon ink ──
        //  All text and icons are GOLD, as on the groom-side site. But the
        //  groom's golds are LIGHT metallics tuned for a dark page, and on
        //  cream they invert into near-invisibility:
        //       #E5C16C headings  8.87:1 on emerald → 1.67:1 on cream
        //       #C9A24B icons     6.37:1 on emerald → 2.32:1 on cream
        //       #F3D697 accents  10.83:1 on emerald → 1.37:1 on cream
        //  Gold is inherently a light colour, so on a pale background it has to
        //  be DARKENED to be legible — which reads as antique/bronze gold
        //  rather than bright metallic. That is unavoidable, not a preference.
        //  The values below are the darkest gold that still reads unmistakably
        //  gold, chosen so the markup's existing opacity modifiers (/60–/95)
        //  all still land at a readable contrast.
        gold: {
          light: '#6E5615', // headings          → 6.10:1 on card  AA
          DEFAULT: '#6E5615', // icons, rules      → holds 5.43:1 at /95
          deep: '#503E0E', // deepest emphasis  → 9.00:1 AAA
          foil: '#6E5615', // display headings  → 6.10:1 AA
          dim: '#B39A5E', // pale gold — hairline ENDS only, never text
        },

        //  ⚠️ The markup uses opacity modifiers heavily (text-cream/85, /90 …).
        //  Those fade the ink toward the cream page, so anything below about
        //  /85 stops being readable — the call sites were raised accordingly.
        // BODY TEXT — also gold, a shade deeper than the heading gold so long
        // paragraphs stay comfortable. 7.11:1 at full, 4.96:1 at /85.
        cream: { DEFAULT: '#5E4E18', soft: '#6E5615' },

        // Kept for the scratch-card hint, which is printed ON the foil and so
        // needs an ink that contrasts with the card, not with the page.
        maroon: { DEFAULT: '#7B1E33', deep: '#5A1326' },

        ink: '#5E4E18', // default text colour on the cream page
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
        // sweep; it is now an antique-gold gradient, so buttons read as solid
        // gold blocks with cream labels (6.76:1).
        'gold-gradient': 'linear-gradient(135deg, #806320 0%, #6E5615 45%, #574310 100%)',
        // The two page washes: barely-there cream gradients that give the long
        // page some variation without ever getting dark enough to fight text.
        'jade-radial': 'radial-gradient(circle at 50% 25%, #FFFFFF 0%, #FDFBF7 45%, #F4EFE6 110%)',
        'jade-deep-radial': 'radial-gradient(circle at 50% 40%, #FDFBF7 0%, #F0EADF 120%)',
      },
      boxShadow: {
        // On a light page a glow is invisible — light on light reads as nothing.
        // So every "glow" becomes a soft GOLD-TINTED DROP SHADOW instead: it
        // lifts the element off the cream the way the glow lifted it off the
        // dark. Alphas are low; heavy shadows would look muddy on cream.
        gold: '0 10px 30px -12px rgba(94, 78, 24, 0.28)',
        glow: '0 4px 16px -4px rgba(94, 78, 24, 0.22)',
        card: '0 14px 34px -18px rgba(94, 78, 24, 0.30)',
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
          '0%, 100%': { opacity: '0.65', filter: 'drop-shadow(0 1px 1px rgba(94,78,24,0.35))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 2px 3px rgba(94,78,24,0.45))' },
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
