import type { Config } from 'tailwindcss';

// Tokens mirror project/_ds/.../colors_and_type.css plus the extra tints used
// by the "Parqie Homepage v3" design.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    // Breakpoints taken from the v3 prototype's layout switches.
    screens: {
      zones4: '560px', // zone grid 2 → 4 columns
      foot4: '640px', // footer 2 → 4 columns
      three: '900px', // benefits / steps 1 → 3 columns, FAQ 1 → 2 columns
      nav: '1000px', // full navbar vs. burger menu
      foot5: '1100px', // footer logo column inline
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: '#053333',
          900: '#053333',
          850: '#0A3E3E',
          800: '#0B4040',
          750: '#0B4A45',
          700: '#0F4A4A',
          650: '#174C4C',
          600: '#1A5252',
          500: '#3A7070',
          400: '#6E8C8C',
          300: '#8FB3B3',
          200: '#A9BDBD',
          100: '#B9CBCA',
        },
        lime: { DEFAULT: '#ACFF78', hover: '#9FEF6C' },
        paper: '#F9F9F9',
        ink: '#191919',
        danger: '#FF2B3A',
        muted: '#4A5857',
        placeholder: '#8A9594',
        line: { DEFAULT: '#E4E6E8', soft: '#E1E6E5', input: '#D3D4D8' },
        mist: { DEFAULT: '#F2F5F4', 2: '#F4F6F5', 3: '#EDF1F0' },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mont: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '1200px' },
      spacing: { gutter: 'clamp(20px,5vw,64px)', section: 'clamp(80px,9vw,128px)' },
      boxShadow: {
        card: '0 12px 32px rgba(5,51,51,0.12)',
        'card-dark': '0 12px 32px rgba(5,51,51,0.18)',
      },
      keyframes: {
        pqSway: {
          '0%,100%': { transform: 'rotateX(4deg) rotateY(-14deg)' },
          '50%': { transform: 'rotateX(2deg) rotateY(-4deg)' },
        },
        pqBob: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pqPulse: {
          '0%,100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        sway: 'pqSway 12s ease-in-out infinite',
        bob: 'pqBob 6s ease-in-out infinite',
        glow: 'pqPulse 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
