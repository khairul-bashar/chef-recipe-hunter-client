/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#F2E3DB",
        
"secondary": "#263A29",
        
"accent": "#263A29",
        
"neutral": "#E86A33",
        
"base-100": "#ffffff",
        
"info": "#263A29",
        
"success": "#D9D9D9",
        
"warning": "#fbbd23",
        
"error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
