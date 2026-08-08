/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ✦ Temple emerald + gold palette (sacred, premium, dark) ✦
        //
        //  This is the BRIDE-side palette. The groom-side site
        //  (../SrinivasWedsHaripriyaInvitation) is the same design in royal
        //  plum. The token NAMES are identical across both sites — only the hex
        //  values here differ — so the two stay easy to compare and re-theme.
        jade: {
          DEFAULT: '#0F2A21', // base background
          deep: '#08201A', // darkest
          soft: '#17362B', // card / raised surface
          light: '#20493A',
        },
        wine: '#0B4034', // deep teal accent (the plum site's `wine`)
        gold: {
          light: '#F3D697',
          DEFAULT: '#C9A24B', // primary gold
          deep: '#9C7A2E',
          foil: '#E5C16C',
          dim: '#7C6230',
        },
        cream: { DEFAULT: '#F2ECD8', soft: '#E4DEC6' },
        // Warm dark ink, kept as-is: it is used for the scratch-card hint, which
        // is printed ON the gold foil and so must not be green.
        maroon: { DEFAULT: '#7B1E33', deep: '#5A1326' },
        ink: '#EFEAD6', // default light text on dark bg
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        heading: ['"Marcellus"', 'Georgia', 'serif'],
        sans: ['"Mukta"', 'system-ui', 'sans-serif'],
        deco: ['"Tangerine"', 'cursive'],
        telugu: ['"Noto Serif Telugu"', '"Ramaraja"', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F3D697 0%, #C9A24B 45%, #9C7A2E 100%)',
        'jade-radial': 'radial-gradient(circle at 50% 25%, #17362B 0%, #0F2A21 50%, #08201A 110%)',
        'jade-deep-radial': 'radial-gradient(circle at 50% 40%, #17362B 0%, #08201A 120%)',
      },
      boxShadow: {
        gold: '0 12px 45px -14px rgba(201, 162, 75, 0.45)',
        glow: '0 0 28px -2px rgba(229, 193, 108, 0.45)',
        card: '0 24px 55px -22px rgba(0, 0, 0, 0.7)',
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
          '0%, 100%': { opacity: '0.65', filter: 'drop-shadow(0 0 5px #C9A24B)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 16px #E5C16C)' },
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
