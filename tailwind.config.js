/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["ProximaNova"]
      },
      colors: {
        'osuch-black': "#151515",
      },
    },
  },
  plugins: [],
}

