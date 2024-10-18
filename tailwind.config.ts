import type { Config } from "tailwindcss";
import { Poppins } from "next/font/local";

const config: Config = {
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
        why_maks_color_1: "#2F2F2F",
        why_maks_color_2: "#353535",
        primary_color: "rgb(250 204 21)",
        logo_bg: "#1f1f1f",
      },
    },
    fontFamily: {
      abc: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
