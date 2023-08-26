import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/fonts/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/styles/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans-big-bold": ["PaypalSans Big Bold"],
        "sans-big-light": ["PaypalSans Big Light"],
        "sans-big-medium": ["PaypalSans Big Medium"],
        "sans-big-regular": ["PaypalSans Big Regular"],

        "sans-small-bold": ["PaypalSans Small Bold"],
        "sans-small-light": ["PaypalSans Small Light"],
        "sans-small-medium": ["PaypalSans Small Medium"],
        "sans-small-regular": ["PaypalSans Small Regular"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: { sans: ["PaypalSans Small Light"] },
  },
  plugins: [],
};
export default config;
