import type { Config } from "tailwindcss";
const {fontFamily}=require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
        insta:"#feda75"
      },
      animation:{
        'spin-slow':'spin 5s linear infinite'
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px);'
      }
    },
    screens:{
      "2xl":{max:"1535px"},
      "xl": { max: "1279px" },
      "lg": { max: "1023px" },
      "md": { max: "767px" },
      "sm": { max: "639px" },
      "xs": { max: "479px" },
    }
  },
  plugins: [],
};
export default config;
