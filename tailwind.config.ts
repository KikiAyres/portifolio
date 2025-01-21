import type { Config } from "tailwindcss"

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        faded: "#f8f8f826",
      },
      fontFamily: {
        body: ["Montserrat"],
      },
    },
  },

  plugins: [],
} satisfies Config
