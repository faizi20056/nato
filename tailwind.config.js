/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nato-blue': '#003366',
        'nato-blue-dark': '#002850',
        'nato-navy': '#001a3d',
        'nato-light': '#b3c8e0',
        'nato-gold': '#d4a948',
        'nato-gold-dark': '#b89030',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
