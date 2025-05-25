/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        // Add your new custom font here for the logo
        logo: ['Merhique Regular', 'sans-serif'], // 'Merhique Regular' must match the font-family name from @font-face
      },
    },
  },
  plugins: [],
};

