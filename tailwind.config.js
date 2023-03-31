/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // custom colors
        LemonYellow: "#F4CE14",
        LemonGreen: "#495E57",
        LemonCoral: "#EE9972",
        LemonBeige: "#FBDABB",
        LemonGrey: "#EDEFEE",
        LemonDark: "#333333",
        TextGreen: "#F3FAF7",
      },
      fontFamily: {
        Karla: ["Karla", "sans-serif"],
        Markazi: ["Markazi Text", "serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "880px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
