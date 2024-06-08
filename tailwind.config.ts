import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'Xsm': '320px',
        'Beforexl': '1150px',
        'Afterxl': '1300px',
        'BasePcScreen': '1440px',
        'MidPcScreen': '1700px',
        'WidePcScreen': '2050px',
      },
    }
  },
  plugins: [],
};
export default config;
