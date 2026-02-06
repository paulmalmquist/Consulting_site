import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0D1117',
        white: '#E6E9EE',
        slate: {
          950: '#0B0F14',
          900: '#10151C',
          800: '#151B24',
          700: '#1E2631',
          600: '#2B3442',
          500: '#3A4657',
          400: '#6B7686',
          300: '#A5B1C2',
          200: '#C0CAD8'
        },
        cyan: {
          50: '#EAF7F8',
          100: '#CDEFF3',
          200: '#A7E4EA',
          300: '#7FD7E0',
          400: '#59C8D3',
          500: '#34B6C2',
          600: '#2699A5',
          700: '#1B7B86',
          800: '#145B63',
          900: '#0E3E45'
        },
        violet: {
          100: '#E6DFF5',
          200: '#C9BCEB',
          300: '#A994DE',
          400: '#8A6FD1',
          500: '#6F4BC2'
        },
        accent: '#7FD7E0',
        gold: '#FBBF24'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular']
      },
      boxShadow: {
        card: '0 10px 35px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
