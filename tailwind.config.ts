import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1.25rem", md: "2rem" }, screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        night: { DEFAULT: "#0A1626", 800: "#12233A", 700: "#3A4A63", 400: "#7D8AA0", 200: "#C9D3E1" },
        mint: { DEFAULT: "#14C2B5", 700: "#0E8F86" },
        sand: "#F5EFE3",
        sky: "#DCEBFF",
        coral: { DEFAULT: "#F26B5B", 50: "#FFF1EE", 100: "#FFE6E1" },
        honey: { DEFAULT: "#E0A43B", 700: "#A86E0C", 50: "#FFF6E3" },
        cobalt: { DEFAULT: "#3F7BEA", 50: "#E7F1FF" },
        navy: { 950: "#07111F", 900: "#0B1B2E", 800: "#13283F", 700: "#1D3654" },
        ink: { 900: "#1A2230", 700: "#3A4454", 500: "#667085", 300: "#C9CFD8" },
        paper: { DEFAULT: "#FAFAF7", 100: "#F3F3EE", 200: "#E8E8E1" },
        teal: { 600: "#0D7A80", 500: "#11949A", 400: "#3DB5B7", 100: "#DDF1F0", 50: "#EEF8F7" },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Bricolage Grotesque Variable'", "var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { tightest: "-0.035em" },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,46,0.04), 0 8px 24px -12px rgba(11,27,46,0.12)",
        lift: "0 2px 4px rgba(11,27,46,0.05), 0 24px 48px -20px rgba(11,27,46,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
