module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { min: "768px" }, sm: { min: "640px" } },
    extend: {
      colors: {
        blue_gray: { 100: "#d9d9d9", 200: "#b5b5c3", 900: "#2d2d2d" },
        black: { 900: "#000000", "900_33": "#00000033", "900_3f": "#0000003f" },
        teal: { 900: "#004c23", "900_7f": "#004c237f" },
        pink: { A700_0c: "#bf156c0c" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        poppins: "Poppins",
        inika: "Inika",
        phetsarath: "Phetsarath",
      },
      textShadow: { ts: "0px 4px  4px #0000003f" },
      boxShadow: {
        bs: "0px 20px  50px 0px #bf156c0c",
        bs1: "0px 4px  4px 0px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};
