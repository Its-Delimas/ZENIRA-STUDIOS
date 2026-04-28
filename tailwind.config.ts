import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zenira: {
          red: "#E0001B",
          "red-hover": "#B50016",
          green: "#006B3F",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
}

export default config