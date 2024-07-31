import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "versuspay-primary": {
          100: "#CFDBE3",
          200: "#EAEAF1",
          500: "#041D33",
        },
        "versuspay-sky": "#F2F4F5",
        black: {
          100: "#050505",
          DEFAULT: "#000",
        },
        grey: {
          100: "#9D9D9D",
          200: "#E5E7EB",
          300: "#828282",
          400: "#71717A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
