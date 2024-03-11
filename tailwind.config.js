/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      md: '400px',
    },
    colors: {
      black: '#141414',
      darkGrey: '#1f1f1f',
      grey: '#333',
      white: '#fff',
      neonGreen: '#c4f82a',
    },
    fontSize: {
      base: [
        '14px',
        {
          lineHeight: '150%',
          fontWeight: '400',
        },
      ],
      lg: [
        '14px',
        {
          lineHeight: '150%',
          fontWeight: '700',
        },
      ],
      xl: [
        '24px',
        {
          lineHeight: '150%',
          fontWeight: '600',
        },
      ],
    },
  },
  plugins: [],
};
