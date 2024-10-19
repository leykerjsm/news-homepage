/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gunmetal: '#5E607A',
        'soft-red': '#F15D51',
        'off-white': '#FFFDFA',
        'dark-blue': '#00001A',
        'soft-orange': '#E9AA52',
        silver: '#C5C6CE',
      },
    },
  },
  plugins: [],
};
