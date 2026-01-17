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
        ink: '#0B0F14',
        slate: {
          900: '#0F1720',
          800: '#131C26',
          700: '#1C2733',
          600: '#2A3745',
          500: '#3B4B5D',
          300: '#9FB0C2'
        },
        accent: '#67E8F9',
        gold: '#FBBF24'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        card: '0 8px 30px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: []
};

export default config;
