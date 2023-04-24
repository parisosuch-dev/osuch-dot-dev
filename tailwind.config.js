/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["ProximaNova"]
      },
      colors: {
        'osuch-black': '#151515',
        'osuch-primary': '#7888F3',
        'osuch-secondary': '#C1C8F4'
      },
    },
  },
  plugins: [],
}

