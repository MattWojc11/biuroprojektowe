/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0F172A',
          light: '#1A202C',
          dark: '#0A0F1D',
          card: '#1E293B'
        },
        accent: {
          DEFAULT: '#C4A484',
          light: '#D4B494',
          dark: '#B49474',
          hover: '#B39374'
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#94A3B8',
          accent: '#C4A484'
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)',
          hover: 'rgba(255, 255, 255, 0.2)'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
} 