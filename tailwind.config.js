/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D0D12',
        card: '#161622',
        border: '#2A2A3C',
        primary: '#FF3B70',
        secondary: '#8A3FFC',
      },
    },
  },
  plugins: [],
};
