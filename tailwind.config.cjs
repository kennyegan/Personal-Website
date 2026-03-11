/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          700: '#1d3461',
          800: '#112240',
          900: '#0a192f',
        },
        slate: {
          100: '#e6f1ff',
          200: '#ccd6f6',
          300: '#a8b2d1',
          400: '#8892b0',
        },
        accent: '#64ffda',
      },
    },
  },
  plugins: [],
};

module.exports = config;
