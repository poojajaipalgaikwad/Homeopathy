// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors :{
            lightHover : '#fcf4ff',
            darkHover : '#2a004a',
            darkTheme : '#11001f'
        },
        fontFamily : {
            Outfit : ["Outfit", "sans-serif"],
            Ovo : ["Ovo", "serif"]
        }
    },
  },
  plugins: [],
}