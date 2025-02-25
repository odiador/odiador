import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        teko: ["Teko", "normal"],
        bangers: ["Bangers", "normal"],
        nanum: ["Nanum pen script", "normal"],
        questrial: ["Questrial", "normal"],
      },
    },
  },
  plugins: [],
} satisfies Config;
