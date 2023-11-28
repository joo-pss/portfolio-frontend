import { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
