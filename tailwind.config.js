/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Consider adding mdx if you might use it
    // "./pages/**/*.{js,ts,jsx,tsx}", // <--- DELETE THIS LINE!
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Consider adding mdx
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Inter"', "sans-serif"],
        // Add your new custom font here for the logo
        logo: ['AfacadFlux-Light', 'sans-serif'], // Corrected: 'kongtext' as the font family, 'sans-serif' as fallback
      },
    },
  },
  plugins: [],
};