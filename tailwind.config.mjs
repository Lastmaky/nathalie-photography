/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Jost"', 'sans-serif'],
      },
      colors: {
        cream: '#F5F0E8',
        'cream-dark': '#EDE6D6',
        sage: '#8B9E8A',
        blush: '#C9A99A',
        ink: '#1A1A18',
        'ink-light': '#2C2C28',
        muted: '#6B6B62',
        gold: '#B8976A',
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.45em',
      },
    },
  },
  plugins: [],
};
