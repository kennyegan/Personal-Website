/** @type {import('tailwindcss').Config} */
const colorVar = (name) => `rgb(var(${name}) / <alpha-value>)`;

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
        background: colorVar('--color-background'),
        surface: colorVar('--color-surface'),
        'surface-strong': colorVar('--color-surface-strong'),
        'text-primary': colorVar('--color-text-primary'),
        'text-secondary': colorVar('--color-text-secondary'),
        border: colorVar('--color-border'),
        'accent-cyan': colorVar('--color-accent-cyan'),
        'accent-violet': colorVar('--color-accent-violet'),
        mint: colorVar('--color-mint'),
      },
    },
  },
  plugins: [],
};

module.exports = config;
