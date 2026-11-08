/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black charcoal
        ink: {
          950: '#08090b',
          900: '#0c0e12',
          850: '#101318',
          800: '#161a20',
          750: '#1c2128',
          700: '#232a32',
        },
        // Cold blue-grey
        steel: {
          600: '#2a3440',
          500: '#3a4757',
          400: '#4d5d70',
          300: '#6b7c91',
          200: '#9aa9bd',
          100: '#c2cdda',
        },
        // Dirty off-white
        bone: {
          100: '#e8e4dc',
          50: '#f2efe8',
        },
        // Restrained pale green (investigation equipment)
        signal: {
          500: '#7fb88f',
          400: '#9fce9c',
          300: '#b6dfae',
        },
        // Restrained amber (warning lights)
        amber: {
          600: '#b88a3e',
          500: '#c99a4a',
          400: '#d8ae63',
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Oswald"', '"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Courier New"', 'monospace'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
        'scroll-bounce': 'scrollBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        scrollBounce: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.4' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
