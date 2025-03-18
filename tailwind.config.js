/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#c14679',
        "title": '#151515',
        "text": '#777777',
        'tab': '#9b9b9b',
        "icon": '#575757'
      },
      borderColor: {
        'primary': '#c14679'
      },
      backgroundColor: {
        'hover': '#8c2f55',
        'badge': '#232322'
      }
    },
  },
  plugins: [],
}