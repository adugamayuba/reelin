/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layouts/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        secondary: "#D3A518",
        lightPrimary: "#041C40",
        primary: "#2F80ED",
        ash:"#333333",
        deepBlue: "#020E20",
        customBlack:"#0e0e0e",

        neutral: {
          500: "#5E5E5E",
          600: "#363636",
          700: "#0E0E0E",
        },
      },
    },
  },
  plugins: [],
};
