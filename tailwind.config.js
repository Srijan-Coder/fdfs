/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-main, #0A0A0A)",
        surface: "var(--bg-surface, #141414)",
        hairline: "var(--border-hairline, rgba(255, 255, 255, 0.12))",
        offwhite: "var(--text-main, #F2F0EB)",
        muted: "var(--text-muted, #8A8A86)",
        accent: "var(--color-accent, #FF3D6E)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      fontSize: {
        "10xl": "clamp(3.5rem, 11vw, 11rem)",
        "9xl": "clamp(3rem, 9vw, 9rem)",
        "8xl": "clamp(2.5rem, 7.5vw, 7.5rem)",
        "7xl": "clamp(2.2rem, 6vw, 6rem)",
        "6xl": "clamp(2rem, 5vw, 4.5rem)",
      },
    },
  },
  plugins: [],
};
