import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/auth/login/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
      colors: {
        "primary-bg": "#F8F5F0",
        "primary-color": "#FF9500",
        "gray-border": "#DFDAD4",
        "error-red": "#FF3B30",
        "primary-black": "#291C0A",
        "secondary-black": "#676562",
        "dashboard-nav-border": "#F5F0E9",
        "green-accent": "#13AF35",
        "user-table-title": "#878480",
      },
    },
  },
  plugins: [],
} satisfies Config;
