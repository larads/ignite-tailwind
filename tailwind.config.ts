import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      maxWidth: {
        app: '700px'
      },
      colors: {
        mari: '#8257e6'
      }
    },
  },
  plugins: [],
};
export default config;
