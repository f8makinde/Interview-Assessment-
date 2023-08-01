/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "grey": "#53545C",
        "secondary50":"#FEF5EA",
        "black60": "#45464E",
        "primary": "#5570F1",
        "black30": "#8B8D97",
        "green": "#519C66",
        "black10": "#BEC0CA",
        "black20": "#A6A8B1",
        "primary50": "#97A5EB",
        "primary10": "#DBDEEE",
        "secondary20": "#FEF5EA",
        "mainBg": "#F4F5FA",
      },
      fontFamily: {
        inter: ["Tnter", "sans-serif"],
        poppins: ['Poppins', 'sans-serif']
       },
    },
  },
  plugins: [],
}

